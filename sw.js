/* Service Worker – macht die Tafel offline-fähig (App-Shell + Bibliotheken cachen). */
const CACHE = 'tafel-v77';
const ASSETS = [
  './',
  'index.html',
  'sheet.html',
  'plotter.html',
  'vierfelder.html',
  'baum.html',
  'wahrscheinlichkeit.html',
  'messwert.html',
  'gleichung.html',
  'tabelle.html',
  'geogebra.html',
  'wuerfel.html',
  'gluecksrad.html',
  'bruch.html',
  'stellenwerttafel.html',
  'umrechner.html',
  'pptx.js',
  'manifest.webmanifest',
  'icon.svg',
  'icon-maskable.svg',
  'vendor/pdf.min.js',
  'vendor/pdf.worker.min.js',
  'vendor/jspdf.umd.min.js',
  'vendor/qrcode.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Nur eigene Dateien aus dem Cache bedienen; Einbettungen (YouTube/GeoGebra) immer aus dem Netz.
  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (e.request.method === 'GET' && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }))
  );
});
