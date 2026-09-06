/* pptx.js – einfacher, offline PPTX-Renderer für die Digitale Tafel.
   Entpackt die .pptx (ZIP via nativer DecompressionStream), rendert jede Folie
   (Text + eingebettete Bilder, Platzhalter-Geometrie aus Layout/Master) auf ein
   Canvas und liefert je Folie eine JPEG-Data-URL zurück.
   Bewusst „einfach": keine Themes/Verläufe/Animationen/SmartArt/Tabellen. */
"use strict";
(function(){
const P='http://schemas.openxmlformats.org/presentationml/2006/main';
const A='http://schemas.openxmlformats.org/drawingml/2006/main';
const R='http://schemas.openxmlformats.org/officeDocument/2006/relationships';
const EMU_PER_PT=12700;

/* ---------- ZIP entpacken (nur was PPTX braucht) ---------- */
async function unzip(ab){
  const dv=new DataView(ab), u8=new Uint8Array(ab), dec=new TextDecoder();
  let eocd=-1; const min=Math.max(0, ab.byteLength-22-65536);
  for(let i=ab.byteLength-22; i>=min; i--){ if(dv.getUint32(i,true)===0x06054b50){ eocd=i; break; } }
  if(eocd<0) throw new Error('Keine gültige PPTX/ZIP-Datei.');
  const count=dv.getUint16(eocd+10,true); let p=dv.getUint32(eocd+16,true);
  const entries={};
  for(let n=0;n<count;n++){
    if(dv.getUint32(p,true)!==0x02014b50) break;
    const method=dv.getUint16(p+10,true), compSize=dv.getUint32(p+20,true);
    const nameLen=dv.getUint16(p+28,true), extraLen=dv.getUint16(p+30,true), commentLen=dv.getUint16(p+32,true);
    const lho=dv.getUint32(p+42,true);
    const name=dec.decode(u8.subarray(p+46,p+46+nameLen));
    const lNameLen=dv.getUint16(lho+26,true), lExtraLen=dv.getUint16(lho+28,true);
    const dataStart=lho+30+lNameLen+lExtraLen;
    entries[name]={method,comp:u8.subarray(dataStart,dataStart+compSize)};
    p+=46+nameLen+extraLen+commentLen;
  }
  async function get(name){ const e=entries[name]; if(!e)return null; if(e._d)return e._d;
    if(e.method===0){ e._d=e.comp; return e._d; }
    const s=new Blob([e.comp]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
    e._d=new Uint8Array(await new Response(s).arrayBuffer()); return e._d; }
  return {get, has:n=>!!entries[n]};
}

/* ---------- Hilfen ---------- */
const el1=(node,ns,tag)=>{ if(!node)return null; const l=node.getElementsByTagNameNS(ns,tag); return l.length?l[0]:null; };
function resolvePath(from,target){ if(/^https?:/.test(target))return target; if(target[0]==='/')return target.slice(1);
  const parts=from.split('/'); parts.pop(); for(const seg of target.split('/')){ if(seg==='..')parts.pop(); else if(seg!=='.'&&seg!=='')parts.push(seg); } return parts.join('/'); }
function loadImg(url){ return new Promise(res=>{ const im=new Image(); im.onload=()=>res(im); im.onerror=()=>res(null); im.src=url; }); }
function bytesToDataURL(bytes,mime){ return new Promise(res=>{ const fr=new FileReader(); fr.onload=()=>res(fr.result); fr.onerror=()=>res(null); fr.readAsDataURL(new Blob([bytes],{type:mime})); }); }
function wrapText(c,text,maxW){ const out=[]; for(const raw of String(text).split('\n')){ const words=raw.split(/\s+/); let line='';
  for(const w of words){ const test=line?line+' '+w:w; if(c.measureText(test).width>maxW && line){ out.push(line); line=w; } else line=test; }
  out.push(line); } return out; }

/* ---------- Renderer ---------- */
window.renderPPTX=async function(ab){
  const zip=await unzip(ab); const dec=new TextDecoder();
  const xml=async name=>{ const b=await zip.get(name); return b? new DOMParser().parseFromString(dec.decode(b),'application/xml') : null; };
  const relsOf=async xmlPath=>{ const dir=xmlPath.replace(/[^/]+$/,''); const base=xmlPath.split('/').pop();
    const d=await xml(dir+'_rels/'+base+'.rels'); const m={}; if(d)for(const r of d.getElementsByTagName('Relationship'))m[r.getAttribute('Id')]={target:r.getAttribute('Target'),type:r.getAttribute('Type')||''}; return m; };

  const pres=await xml('ppt/presentation.xml');
  let SW=9144000, SH=6858000;
  const sz=el1(pres,P,'sldSz'); if(sz){ SW=+sz.getAttribute('cx')||SW; SH=+sz.getAttribute('cy')||SH; }
  const presRels=await relsOf('ppt/presentation.xml');
  const order=[];
  if(pres){ for(const s of pres.getElementsByTagNameNS(P,'sldId')){ const rid=s.getAttributeNS(R,'id'); const rel=presRels[rid]; if(rel)order.push(resolvePath('ppt/presentation.xml',rel.target)); } }

  const slides=[];
  for(const sPath of order){ try{ slides.push(await renderSlide(sPath)); }catch(e){ /* defekte Folie überspringen */ } }
  return slides;

  function xfrmOf(spPr){ const x=el1(spPr,A,'xfrm'); if(!x)return null; const off=el1(x,A,'off'),ext=el1(x,A,'ext'); if(!off||!ext)return null;
    return {x:+off.getAttribute('x'),y:+off.getAttribute('y'),cx:+ext.getAttribute('cx'),cy:+ext.getAttribute('cy')}; }
  function buildPhGeom(...docs){ const map={}; for(const doc of docs){ if(!doc)continue;
    for(const sp of doc.getElementsByTagNameNS(P,'sp')){ const ph=sp.getElementsByTagNameNS(P,'ph')[0]; if(!ph)continue;
      const g=xfrmOf(el1(sp,P,'spPr')); if(!g)continue; const type=ph.getAttribute('type')||'body', idx=ph.getAttribute('idx')||'0';
      if(!map['t:'+type])map['t:'+type]=g; if(!map['i:'+idx])map['i:'+idx]=g; } } return map; }

  async function renderSlide(sPath){
    const doc=await xml(sPath), rels=await relsOf(sPath);
    let layoutDoc=null, masterDoc=null;
    for(const id in rels){ if(/slideLayout$/.test(rels[id].type)){ const lp=resolvePath(sPath,rels[id].target); layoutDoc=await xml(lp);
      const lr=await relsOf(lp); for(const lid in lr){ if(/slideMaster$/.test(lr[lid].type)) masterDoc=await xml(resolvePath(lp,lr[lid].target)); } } }
    const phGeom=buildPhGeom(masterDoc,layoutDoc);

    const TW=1280, scale=TW/SW, TH=Math.max(1,Math.round(SH*scale));
    const cv=document.createElement('canvas'); cv.width=TW; cv.height=TH; const c=cv.getContext('2d');
    c.fillStyle='#ffffff'; c.fillRect(0,0,TW,TH);

    const tree=el1(doc,P,'spTree'); if(!tree) return cv.toDataURL('image/jpeg',0.85);
    for(const node of Array.from(tree.childNodes)){ if(node.nodeType!==1)continue;
      try{ if(node.localName==='pic') await drawPic(node,c,scale,rels,sPath);
           else if(node.localName==='sp') drawSp(node,c,scale,phGeom); }catch(e){} }
    return cv.toDataURL('image/jpeg',0.85);

    function drawSp(sp,c,scale,phGeom){
      const txBody=el1(sp,P,'txBody'); if(!txBody)return;
      const ph=sp.getElementsByTagNameNS(P,'ph')[0];
      const phType=ph?(ph.getAttribute('type')||'body'):null, phIdx=ph?(ph.getAttribute('idx')||'0'):null;
      let g=xfrmOf(el1(sp,P,'spPr'));
      if(!g && ph){ g=phGeom['t:'+phType]||phGeom['i:'+phIdx]||null; }
      if(!g) g={x:SW*0.06,y:SH*0.07,cx:SW*0.88,cy:SH*0.86};
      const tx=g.x*scale, ty=g.y*scale, tw=g.cx*scale, th=g.cy*scale;
      const isTitle=phType&&/title/i.test(phType);
      const isBody=phType&&/(body|subTitle|obj)/i.test(phType);
      let y=ty+4;
      for(const p of txBody.getElementsByTagNameNS(A,'p')){
        const pPr=el1(p,A,'pPr'); const algn=pPr?pPr.getAttribute('algn'):null; const lvl=pPr?(+pPr.getAttribute('lvl')||0):0;
        let text='', sizePt=null, bold=false, italic=false, color=null;
        for(const r of p.getElementsByTagNameNS(A,'r')){ const t=el1(r,A,'t'); if(t)text+=t.textContent;
          const rPr=el1(r,A,'rPr'); if(rPr){ if(sizePt==null&&rPr.getAttribute('sz'))sizePt=+rPr.getAttribute('sz')/100;
            if(rPr.getAttribute('b')==='1')bold=true; if(rPr.getAttribute('i')==='1')italic=true;
            const clr=el1(el1(rPr,A,'solidFill'),A,'srgbClr'); if(clr&&!color)color='#'+clr.getAttribute('val'); } }
        if(sizePt==null) sizePt=isTitle?32:18;
        const fpx=Math.max(8, sizePt*EMU_PER_PT*scale);
        if(text.trim()===''){ y+=fpx*1.25; continue; }
        c.font=(italic?'italic ':'')+(bold||isTitle?'bold ':'')+fpx+'px -apple-system,Helvetica,Arial,sans-serif';
        c.fillStyle=color||'#1f2430'; c.textBaseline='top';
        const indent=lvl*fpx*0.9, bullet=(isBody&&!isTitle)?'•  ':'';
        const maxW=Math.max(20, tw-8-indent);
        const align=algn==='ctr'?'center':algn==='r'?'right':'left'; c.textAlign=align;
        const ax=align==='center'?tx+indent+maxW/2:align==='right'?tx+indent+maxW:tx+4+indent;
        for(const line of wrapText(c,bullet+text,maxW)){ if(y>ty+th)break; c.fillText(line,ax,y); y+=fpx*1.25; }
      }
    }
    async function drawPic(pic,c,scale,rels,sPath){
      const g=xfrmOf(el1(pic,P,'spPr')); if(!g)return;
      const blip=pic.getElementsByTagNameNS(A,'blip')[0]; if(!blip)return;
      const rid=blip.getAttributeNS(R,'embed')||blip.getAttributeNS(R,'link'); if(!rid)return;
      const rel=rels[rid]; if(!rel)return; const mp=resolvePath(sPath,rel.target);
      const bytes=await zip.get(mp); if(!bytes)return;
      const ext=(mp.split('.').pop()||'png').toLowerCase();
      const mime=ext==='jpg'||ext==='jpeg'?'image/jpeg':ext==='gif'?'image/gif':ext==='bmp'?'image/bmp':ext==='svg'?'image/svg+xml':'image/png';
      const url=await bytesToDataURL(bytes,mime); if(!url)return; const img=await loadImg(url); if(!img)return;
      c.drawImage(img, g.x*scale, g.y*scale, g.cx*scale, g.cy*scale);
    }
  }
};
})();
