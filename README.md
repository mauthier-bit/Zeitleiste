# Digitale Tafel

Eine iPad-optimierte digitale Tafel (Whiteboard) als Web-App. Läuft komplett im Browser,
funktioniert nach dem ersten Laden auch **offline** (PWA) und braucht keinen Server.

## Funktionen

- **Schreiben:** Stift (mit Apple-Pencil-Druckstärke), Marker; **eigener Farb-Button**
  (Farbe & Dicke) – der Stift zeichnet in der zuletzt gewählten Farbe (Standard: Schwarz).
  Neben den festen Farben gibt es einen **bunten Punkt** – ein Tipp öffnet den vollen Farbwähler
  für beliebige Farben (auch bei der Objektfarbe im Kontextmenü).
- **Formen:** Linie, Rechteck, **Quadrat**, Ellipse, Dreieck, **rechtwinkliges Dreieck**,
  **allgemeines Dreieck**, **Parallelogramm**, **Trapez**, Pfeil (auch gefüllt), **Drachenviereck**
  sowie **Schrägbilder** von **Quader, vierseitiger Pyramide, Zylinder und Kegel** (mit
  gestrichelten verdeckten Kanten). Alle im **Formen**-Popover.
- **Freihand → gerade Strecke:** Beim normalen Schreiben am Ende einer Linie **1 Sekunde
  ruhig halten** → aus der Linie wird eine gerade Strecke (Anfang → gehaltener Punkt).
  Sonst bleibt es die Freihandlinie.
- **Konstruktionswerkzeuge:** **Kreis** (erster Punkt = Mittelpunkt – bleibt als Punkt sichtbar –,
  aufziehen = Radius, live angezeigt) und **Gerade** (zwei Punkte ziehen, loslassen → Gerade
  durch beide Punkte)
- **Pfeil** (Werkzeug): Pfeile ziehen.
- **Koordinatensystem** (Werkzeug): fügt ein **transparentes** Achsenkreuz mit x/y-Achsen-
  beschriftung und Zahlenskala als bewegliches Objekt ein – man kann direkt darauf zeichnen. Im
  Kontextmenü lässt sich der **x- und y-Bereich** (Ausschnitt) über **＋/−-Buttons** einstellen sowie
  **Gitterlinien** und **Achsenbeschriftung** ein-/ausschalten (Gitter standardmäßig **aus** – meist
  reicht das Karogitter des Hintergrunds) sowie die **Schriftgröße der Beschriftung** (＋/−). Achsen
  sind kräftig mit großen Pfeilspitzen und gut lesbaren Beschriftungen.
- **Zahlenstrahl** (im Formen-Popover): waagerechter Strahl mit Pfeilspitze, Teilstrichen und Zahlen
  als bewegliches Objekt. Im Kontextmenü einstellbar: **Beginn, Ende, Beschriftungsintervall**
  (0,1 bis 1000), **Zahlen an/aus** sowie **Schriftgröße, Fett und Kursiv**; **Farbe und Liniendicke**
  kommen aus den Farbpunkten bzw. „Dicke/Größe" oben im selben Kontextmenü. Wird die Teilung sehr fein,
  bleiben alle Striche stehen, aber nur jede n-te Zahl wird beschriftet, damit nichts überlappt.
- **Lineal** und **Geodreieck:** über ihren Knopf einblenden – sie **bleiben aktiv**, während der
  Stift zeichnet. Mit dem Finger am **unteren** Teil verschieben / am Griff (Ecke bzw. Spitze)
  drehen; mit dem Stift **an der Kante** eine saubere gerade Linie ziehen. Das Geodreieck hat
  eine **Winkelskala (0–180°)**, eine Lot-Linie, eine **innenliegende cm-Skala** und
  **Parallelen zur längsten Seite** (zum Zeichnen von Parallelen).
- **Zirkel** (Werkzeug): Kreisbögen in **zwei Schritten** – **1)** Mittelpunkt antippen und
  Radius aufziehen, loslassen (der Radius wird gefixt, ein gestrichelter Kreis bleibt als
  Hilfe stehen); **2)** einmal herumziehen, um den Bogen zu zeichnen. Radius/Winkel live.
- **Scheinwerfer:** Größe des Spots mit **zwei Fingern (Aufziehen)** einstellen
- **Endlose Seite:** beliebig nach unten/rechts weiterschreiben – mit dem Finger schieben
  (bzw. Pencil schreibt, Finger schiebt) oder am Desktop mit dem Mausrad/Trackpad scrollen
- **Tabellenkalkulation** einfügen (eigene Seite): Zellbezüge **relativ (A1) und absolut ($A$1)**,
  Grundrechenarten, Potenz `^`, `sqrt`, `sin`, `cos` (Bogenmaß); Kopieren/Einfügen passt
  relative Bezüge an. Die Tabelle wird im Projekt gespeichert. Neu: Formel **`=zufallszahl(1;6)`** (ganze Zufallszahl im Bereich; ohne Klammern 0–1), ein **✓-Button** neben der Eingabezeile übernimmt die Eingabe (wie Enter), und im Kontextmenü lassen sich **Schriftgröße, Fett und Kursiv** für Zellen und Spalten-/Zeilenköpfe einstellen.
- **Schriftgröße vieler Werkzeuge im Kontextmenü einstellbar** (＋/−): Tabelle, Funktionsplotter,
  Vierfeldertafel, Baumdiagramm, Wahrscheinlichkeitsrechner und Stellenwerttafel. Neben ＋/− gibt es dort jeweils einen Button für **Fett (F)** und **Kursiv (K)** – auch beim Koordinatensystem und der Tabellenkalkulation. „Fett" wirkt auch auf Teile, die ohnehin schon halbfett sind (Tabellen-/Spaltenköpfe, Ereignisnamen, Summenzeile, Ergebniszeile): sie werden dann noch kräftiger gesetzt.
- Beim Wechsel auf die **Schreibwerkzeuge** ist immer der **Stift** aktiv.
- **Diagramme aus der Tabelle:** einen **Zellbereich markieren** (mit gedrücktem Finger/Maus über
  die Zellen ziehen) und auf **„📊 Diagramm"** tippen – die markierten Zahlen werden wahlweise als
  **Säulendiagramm**, **Kreisdiagramm** oder **Boxplot** (mit Min/Q₁/Median/Q₃/Max) angezeigt.
  Bei zwei markierten Spalten (bzw. Zeilen) dient die erste als **Beschriftung**, die zweite als Werte.
- **Formeln durch Ziehen ausfüllen:** unten rechts an der markierten Zelle/Auswahl sitzt ein kleines
  blaues **Ausfüllkästchen** – nach unten oder zur Seite ziehen füllt die Formel/den Wert in die
  überstrichenen Zellen; **relative Bezüge (A1) werden angepasst, absolute ($A$1) bleiben fest**
  (touch-optimiert fürs iPad).
- **Tabelle (als Objekt):** im Kontextmenü **Zeilen-, Spalten-**, **Schrift-** und **Linienstärke**
  per ＋/− einstellbar.
- **Finger-Modus (Tabelle):** Umschalter **„👆 Auswählen ⇄ ✋ Scrollen"** oben in der Tabelle.
  Standard **Auswählen** – der Finger markiert Bereiche und bedient das Ausfüllkästchen (statt zu
  scrollen); zum Blättern großer Tabellen einmal auf **Scrollen**. (Voraussetzung: oben
  **„Einbettungen bedienen"** aktiviert; der Stift funktioniert in beiden Modi.)
- **Import & Einfügen (Tabelle):** Button **„📥 Import"** liest **CSV**- (Komma/Semikolon/Tab,
  auch Anführungszeichen) oder **Excel-Dateien (.xlsx)** ein (offline; ab A1). Button **„📋 Einfügen"**
  fügt tabellarische Daten **aus der Zwischenablage** (z. B. aus Excel/Sheets kopiert) ab der
  aktuellen Zelle ein. (Altes `.xls` bitte vorher als `.xlsx` oder CSV speichern.)
- **Wissenschaftlicher Taschenrechner** (Werkzeug): + − × ÷, Klammern, `xʸ`, √, sin/cos/tan,
  ln/log, π, e, umschaltbar **DEG/RAD**
- **Aufnahme** (Werkzeug): nimmt die Tafelfläche **mit Ton** auf, direkt abspielbar (echtes
  H.264-**MP4**, sonst WEBM) und speicherbar. Während der Aufnahme **verschwindet das Fenster**;
  oben in der Mitte bleibt nur ein rotes **„■ Aufnahme stoppen"** mit laufender Zeit. Die Statuszeile
  sagt, ob **mit Ton** aufgenommen wird (bei verweigertem Mikrofon läuft die Aufnahme stumm weiter).
- **Screenshot** (Werkzeug, direkt vor der Aufnahme): nimmt einen **Ausschnitt der Tafelfläche** auf. Vorher
  wählt man im Fenster das **Ziel** (auf die Tafel legen · in die Zwischenablage · als PNG
  speichern) und die **Form**: **Rechteck, Oval oder Lasso**. Danach den Bereich ziehen – der Rest des
  Bildschirms wird abgedunkelt; „Abbrechen" (oder Esc) bricht ab. Bei Oval und Lasso ist alles außerhalb
  der Form transparent. Leisten und eingebettete Web-/Video-Seiten sind nicht im Bild.
- **Projekte / Klassen** (Einstellungen): mehrere Projekte (z. B. „Mathe 6a", „Physik 11c")
  anlegen, **umbenennen**, dazwischen **wechseln** und **schließen**. Jedes Projekt hat eigene
  Seiten **und** eine eigene Klassenliste. Alles wird automatisch im Browser gesichert.
  **„Speichern und schließen"** sichert das Projekt zuerst als `.tafel`-Datei und entfernt es
  danach (nach Rückfrage) aus der App – später einfach über „Laden" wieder öffnen.
- Tabellen-Funktionen zusätzlich: **SUMME / MITTELWERT** (auch über Bereiche wie `A1:A5`),
  MAX, MIN, ANZAHL, **ZUFALL()**, ZUFALLSBEREICH(a;b), **ZÄHLENWENN(Bereich;Kriterium)** –
  Kriterium als Zahl (`=zählenwenn(A1:A9;5)`), Vergleich (`">3"`, `">=5"`, `"<>0"`) oder Text
  (`"ja"`, Groß-/Kleinschreibung egal).
- Voreinstellungen bei einem neuen Projekt: Muster **Karo**, **„Finger wählt aus"** an, Leisten **hell/hellgrau**.
- **Hintergrundfarben** (Einstellungen): Weiß, **Tafelgrün**, Schwarz, Dunkelgrau, **Dunkelblau**,
  **dunkles Weinrot**, Hellblau sowie **helles Gelb / Grün / Rot / Orange / Lila** und ein
  **Regenbogen-Button** für eine **beliebige Farbe** (Farbwähler) – die Farbkreise sind größer und
  die aktive Farbe ist am blauen Ring erkennbar – getrennt einstellbar vom **Muster**
  (Kein / Karo / Linien / Punkte / **Notenlinien** / **Dreiecke** – gleichseitiges 60°-Raster).
  Die **Größe des Musters** ist direkt darunter einstellbar (＋/− und „Standard"): Kästchenweite,
  Linien-/Punktabstand, Notenlinienabstand bzw. Seitenlänge der Dreiecke – je Musterart gespeichert.
- **Erscheinung der Leisten** (Einstellungen → „Leisten"): **Dunkel** oder **Hell** (Voreinstellung) – bei Hell
  cremeweiße Knöpfe mit schwarzen Symbolen und Beschriftungen. Darunter stehen je Variante mehrere
  **Farbtöne** zur Wahl: dunkel = Graphit, Dunkelblau, dunkles Weinrot, Dunkelbraun, Dunkelgrün;
  hell = Cremeweiß, Hellblau, Hellgelb, Beige, Hellgrau (Voreinstellung). Gilt für alle drei Leisten samt Stift-/Formen-
  Popovers; jede Variante merkt sich ihren Farbton. Die Einstellung gilt geräteweit (projektübergreifend).
  Bei dunklem Hintergrund schreibt der Stift automatisch weiß.
- **Text:** Textfelder anlegen; **Doppeltipp** auf einen Text zum Nachbearbeiten. Bei ausgewähltem
  Text bietet das **Kontextmenü** zusätzlich **Fett, Kursiv, Aufzählung (Liste)** und eine
  **Schriftgrößen-Einstellung** (＋/−).
- **Gleichungslöser** (Werkzeug neben dem Textfeld): bewegliches Objekt, in das man eine
  Gleichung **tippt** (z. B. `2x+3=7` oder `x^2-5x+6=0`). **Lineare und quadratische**
  Gleichungen werden mit Lösungsweg gelöst; andere werden ehrlich als „nicht lösbar" gemeldet.
  (Handschrift-Erkennung ist offline nicht möglich – für handschriftliche/komplexere Mathematik
  die **GeoGebra-App** nutzen.)
- **Tabelle** (Werkzeug bei den Schreibwerkzeugen): fügt eine **gewöhnliche Tabelle** als
  bewegliches Objekt ein; **Zeilen- und Spaltenzahl** lassen sich im **Kontextmenü** nachträglich
  einstellen, Zelleninhalte werden im Projekt gespeichert.
- **GeoGebra-App** (Werkzeug): fügt ein vollständiges **GeoGebra-App-Fenster** ein (nicht nur eine
  .ggb-Datei) – wahlweise als bewegliches **Objekt** oder als **eigene Seite**. Braucht Internet.
- **„Als eigene Seite anzeigen":** Bei einem als Objekt eingefügten **Wahrscheinlichkeitsrechner**,
  **Messwert-Analyse**- oder **GeoGebra-App**-Objekt erscheint im Kontext-Panel eine Schaltfläche,
  die das Objekt nachträglich groß auf eine **neue eigene Seite** verschiebt (Inhalt bleibt erhalten).
- **Kopieren / Ausschneiden / Einfügen:** im Kontext-Panel **Kopieren**/**Ausschneiden** (oder
  ⌘/Strg + C/X) – Objekte lassen sich **auf einer anderen Seite** oder **in einer anderen App**
  einfügen (als Bild). Umgekehrt fügt **„Aus Zwischenablage einfügen"** im Einfügen-Fenster (oder
  ⌘/Strg + V) Objekte, Bilder oder Text **aus anderen Apps** in die Tafel ein. Zusätzlich gibt es
  in der **Einstellungs-Leiste (oben links)** einen eigenen Knopf **„Aus der Zwischenablage einfügen"**.
- **Radierer:** radiert Teile von Strichen weg (nicht nur ganze Striche)
- **Lineal:** einblendbar, mit Pencil verschieben/drehen, Striche schnappen an die Kante
- **Lasso-Auswahl** (Werkzeug): einen Bereich mit dem Stift **einrahmen** (ist die Kurve nicht
  geschlossen, wird sie automatisch mit einer geraden Strecke geschlossen). Nach dem Loslassen
  erscheint ein Menü mit **Kopieren · Ausschneiden · Gruppieren · Löschen** für alle eingerahmten
  Objekte. (Die Rechteck-Auswahl im Auswahl-Modus bleibt zusätzlich erhalten.)
- **Auswählen, Verschieben, Skalieren, Drehen:** Objekt antippen → Rahmen mit Griffen
  (Eckgriffe = Größe, Kreis oben = drehen). Am Objekt erscheint ein **kleiner Button (☰)** –
  ein Tipp klappt das **Kontext-Panel** auf/zu (Farbe, Dicke/Größe, Füllung, Kopieren usw.),
  damit es nicht ständig im Weg ist.
- **Finger-Bedienung im Auswahl-Modus** (Einstellungen, standardmäßig **aus**): ist der Schalter
  **„Finger wählt aus (Auswahl-Modus)"** aktiv, kann man bei gewähltem **Auswahl-Cursor** auch
  **mit dem Finger** Objekte antippen und verschieben; eine **Zwei-Finger-Geste auf einem
  ausgewählten Objekt** skaliert (aufziehen/zusammenziehen) und **dreht** es. Ist der Schalter aus,
  bleibt alles wie gewohnt (Finger schiebt/zoomt nur das Blatt, Auswählen nur mit dem Stift).
- **Gruppieren / Duplizieren / Löschen** im Kontext-Panel
- **Laserpointer** und **Scheinwerferspot**
- **Zoom/Verschieben:** zwei Finger zoomen, ein Finger schiebt (Pencil schreibt weiter). Die Seite
  ist **oben und links fest begrenzt** (Ursprung oben-links) und **nach unten und rechts unbegrenzt** –
  man schiebt also nur nach unten/rechts.
- **Seiten:** hinzufügen, löschen, blättern
- **Einbetten als bewegliches Objekt:** Bilder, **YouTube/Video**, **Webseiten/HTML**, **GeoGebra**
  und die **Tabellenkalkulation** – verschieben/skalieren/drehen wie jedes andere Objekt. Zum
  Bedienen (Video abspielen, Zellen auswählen, GeoGebra ziehen …) **oben** auf
  **„Einbettung bedienen"** tippen (schaltet zwischen Zeichnen und Bedienen um). Der Knopf sitzt
  **mittig oben**, wenn die oberen Leisten eingeklappt sind, und rutscht in die **Lücke zwischen
  den Leisten**, wenn sie ausgeklappt sind – immer vollständig sichtbar.
  In die Link-Felder kann man per **📋-Knopf aus der Zwischenablage** einfügen. Mit der Option
  **„Als eigene Seite einfügen"** kommt das Eingebettete stattdessen groß auf eine neue Seite.
  Beim Webseiten-Feld darf auch ein **kompletter `<iframe src="…">`-Einbettungscode** eingefügt
  werden – die URL wird automatisch herausgezogen. **Hinweis:** Manche Websites (z. B. leifiphysik.de)
  verbieten das Einbetten technisch (`X-Frame-Options` / CSP) – das lässt sich nicht umgehen. Statt
  eines leeren weißen Kastens zeigt das Objekt dann eine **Info-Karte mit der Domain**; über
  **„Einbettungen bedienen" → „↗ Öffnen"** (oben links am Objekt) lässt sich die Seite im Browser öffnen.
  Direkte Inhalts-URLs (z. B. **PhET-Simulationen**) funktionieren dagegen problemlos.
  (PDF wird weiter als ganze Seite(n) eingefügt.)
- **PowerPoint (.pptx) einfügen:** über **„PDF / Bild / PowerPoint"** – jede Folie wird als Bild
  dargestellt (einfache Darstellung: **Text & Bilder**, keine Animationen/Themes/SmartArt) und
  wahlweise als **Objekt** oder als **eigene Seite** eingefügt. Läuft offline (entpackt die .pptx
  im Browser). Für **exakte** Darstellung die Präsentation als **PDF** exportieren und einfügen.
- **Kamera** (Werkzeug): Live-Bild in einem Fenster (z. B. für Versuche), Kamera umschaltbar,
  **Zoom mit zwei Fingern** direkt im Bild (Doppeltipp = zurück; am Rechner auch per Mausrad) –
  der Zoom steckt auch im Foto und in der Videoaufnahme,
  „Foto auf Tafel" legt einen Schnappschuss als bewegliches Objekt ab. **„Video auf Tafel"** nimmt
  einen Clip auf (nochmal antippen = beenden, mit laufender Zeitanzeige) und legt ihn als abspielbares
  Videoobjekt auf die Tafel – wahlweise **mit Ton** (Schalter „Video mit Ton"; ohne Mikrofonfreigabe
  wird stumm aufgenommen). Zum Abspielen oben „Einbettung bedienen" antippen. Clips gelten nur für die
  laufende Sitzung: im gespeicherten Projekt bleibt ein Platzhalter statt der Videodaten – wer eine
  Aufnahme behalten will, wählt den Clip aus und tippt im **Kontextmenü** auf **„🎬 Video speichern"**
  (.mp4 bzw. .webm). (Nur über https.)
- **Punktestand** (Werkzeug): Score-Board für Spiele – Teams mit Namen, hoch-/runterzählen.
- **Gruppen bilden** (Werkzeug): erzeugt aus der Klassenliste zufällige, ausgewogene Gruppen
  in einstellbarer Größe; „Auf Tafel" schreibt die Gruppen auf die Tafel.
- **Uhr** (Werkzeug): fügt eine live laufende Analoguhr als bewegliches Objekt ein.
- **Funktionsplotter** (Werkzeug): Funktionsterm eingeben (mit Parametern **a, b, c** → Schieberegler),
  der Graph wird gezeichnet; im Bedien-Modus mit **Fingergeste zoom-/verschiebbar**. Über **„＋ Funktion"**
  lassen sich **mehrere Funktionen gleichzeitig** anzeigen (je eigene Farbe, eigene Eingabezeile, mit „×"
  entfernbar); die **Parameter a/b/c wirken auf alle Funktionen gemeinsam**. **Farbe und Linienstärke**
  im **Kontextmenü** wirken auf den **aktiven Graphen** (die farblich hervorgehobene Eingabezeile –
  im Bedien-Modus die Zeile antippen, um sie auszuwählen).
- **Vierfeldertafel** (Werkzeug): 2×2-Tabelle mit editierbaren Beschriftungen; Zeilen-/Spaltensummen
  werden automatisch berechnet. Die Schriftgröße aus dem Kontextmenü gilt für Ereignisse, **Gegenereignisse und das Σ-Zeichen** gleichermaßen.
- **Baumdiagramm** (Werkzeug): Stufen und Verzweigungen einstellbar, Wahrscheinlichkeiten an die
  Äste eintragen; Pfadprodukte werden an den Blättern angezeigt. Über jedem Knoten lässt sich per Tipp ein **Ereignisname** eintragen – die Eingabe `nichtA` erscheint als **Ā** (A mit Querstrich). Oben kann zusätzlich ein **Stichprobenumfang n** eingegeben werden; ist er gesetzt, stehen unter den Ereignissen die **absoluten Häufigkeiten** n·P(Pfad) (an der Wurzel n selbst).
- **Wahrscheinlichkeitsrechner** (Werkzeug): Binomial- und Normalverteilung – Wahrscheinlichkeiten
  (=, ≤, <, ≥, >, zwischen) mit Histogramm bzw. Glockenkurve und markiertem Bereich; bei Binomial
  zusätzlich eine **scrollbare Wertetabelle** (k, P(X=k), P(X≤k)).
- **Messwert-Analyse** (Werkzeug): bindet das Messdaten-Tool ein (als Objekt oder eigene Seite;
  fragt beim Einfügen nach). Braucht Internet (nutzt Chart.js u. a. per CDN).
- **Seitenübersicht:** auf die **Seitenzahl** (z. B. „2/5") tippen → Miniaturen aller Seiten,
  eine antippen wechselt direkt dorthin. Jede Miniatur hat oben rechts ein **⋮-Menü** (mit **×** zum
  Schließen) mit **Umbenennen, Duplizieren, Kopieren, Ausschneiden, Einfügen** sowie **Seitenstil** (Muster
  Kein/Karo/Linien/Punkte/Noten/Dreiecke **und** Hintergrundfarbe) – **je Seite einzeln** einstellbar –
  und oben links ein **rotes ×** zum **Löschen** der Seite
  (der Seitenname erscheint auch in der Kopfzeile). Die Miniaturen behalten immer **dieselbe Größe**
  (werden bei vielen Seiten nicht gequetscht) – bei Bedarf wird die Übersicht **scrollbar**.
  **Bedienung der Miniaturen:** **antippen** springt zur Seite, **streichen** scrollt die Übersicht,
  **lange gedrückt halten** und ziehen ordnet die Seiten neu.
- **QR-Code-Generator**
- **Klassenlisten:** pro Projekt – **Namen direkt eintippen** (ein Name pro Zeile im Einstellungen-
  Fenster) oder **CSV importieren** (Name in der 1. Spalte); Button „Zufälliger Name" zieht per Zufall
  eine Person (ohne Wiederholung) – **animiert wie ein Spielautomat**: die Namen laufen im Slot-Fenster
  durch, werden langsamer und bleiben auf dem gezogenen Namen stehen.
- **PDF-Export** der ganzen Tafel
- **Vollbild-Button** (oben links in der Einstellungs-Leiste; wird beim **Minimieren** der Leiste
  mit ausgeblendet)
- **Speichern/Laden** als `.tafel`-Datei + automatische Sicherung im Browser
- **Widgets:** Lärmampel (Mikrofon), Stoppuhr, Timer, **Sozialform** (Auswahl-Bildschirm: Stillarbeit /
  Partnerarbeit / Gruppenarbeit antippen → große Anzeige mit gut erkennbaren Symbolen; in der Anzeige
  lassen sich **optional ein Timer** für die Dauer **und die Lärmampel** einblenden), Umfrage
- **Hintergrund:** Weiß / Karo / Linien / Punkte / Notenlinien / Dreiecke (Einstellungen)

## Leisten (Bedienung)

Es gibt drei feste Leisten, jede lässt sich über ihren **Pfeil-Knopf minimieren**:

1. **Hauptleiste (links, senkrecht):** am **linken Rand vertikal** angeordnet (damit man beim
   Schreiben nicht versehentlich etwas auslöst). Oben **untereinander** vier immer sichtbare Buttons –
   die **Schwunglinie** = Schreiben (Stiftwerkzeuge), der **Auswahl-Cursor** = Auswählen &
   Werkzeuge (Objekte auswählen/verschieben + Zeit, Klasse & Interaktion, Lärmampel, QR,
   Namensziehung, Taschenrechner, Einfügen …), der **Laserpointer** und der **Scheinwerfer**.
   Ein **Trennstrich** trennt diese Buttons vom jeweiligen Werkzeugmenü (das bei Bedarf **scrollt**).
   Die Leiste beginnt **unter der oberen Einstellungs-Leiste** und
   wächst nach unten. Verwandte Werkzeuge sind zur Übersicht in **Gruppen-Popovers**
   zusammengefasst (wie „Formen"): der **Formen**-Button enthält Linie/Rechteck/Ellipse/Dreiecke/Pfeil
   **und** Kreis, Gerade, Zirkel, Zahlenstrahl, Koordinatensystem (alle Knöpfe gleich groß);
   ein **Zeit**-Button (Uhr, Stoppuhr, Timer);
   ein **Klasse & Interaktion**-Button (Sozialform, Gruppen bilden, Umfrage, Zufälliger Name, Punktestand)
   und ein **Mathe & Physik**-Button (Gleichungslöser, Funktionsplotter, Vierfeldertafel, Baumdiagramm,
   Wahrscheinlichkeitsrechner, GeoGebra-App, Messwert-Analyse, **Würfel** und **Glücksrad**).
- **Würfel** (Zufallsgenerator, Mathe & Physik): 1–6 Würfel mit wählbarer Seitenzahl (2–20),
  „Würfeln" rollt, Summe wird angezeigt. **Antippen eines Würfels wechselt seine Farbe**
  (durch eine Palette) – so kann man mehrere Würfel zur Unterscheidung einfärben; die Farben
  bleiben beim Würfeln erhalten. (Nur die **Würfelfläche** wird gefärbt, die Augen bleiben schwarz.)
- **Glücksrad** (Zufallsgenerator, Mathe & Physik): dreht auf einen zufälligen Sektor. **Anzahl der
  Sektoren sowie Beschriftung (Zahl) und Farbe je Sektor** lassen sich im **Kontextmenü** einstellen.
- **Bruch** (Mathe & Physik): Zähler und Nenner eingeben → der Bruch wird angezeigt und als **Kreis
  mit gleich großen Sektoren** dargestellt (Zähler-viele Sektoren gefüllt), plus Dezimalwert.
- **Stellenwerttafel** (Mathe & Physik): umschaltbar **Längen / Flächen / Volumen / Massen** mit den
  üblichen Einheiten. Ziffern eintippen; ein Tipp auf eine Einheit **verschiebt das Komma** (Umrechnung) –
  **Komma und die zugehörige Einheit werden rot hervorgehoben**. Mit **„＋ Zeile"** lassen sich
  weitere Zahlen-Zeilen hinzufügen; jede Zeile zeigt ihren Wert in der gewählten Einheit. Die Schriftgröße im Kontextmenü vergrößert jetzt auch **Zellenbreite und -höhe**. Neue Kategorie **„Zahl"**: Stellen vor dem Komma **E, Z, H, T, ZT, HT, M** (Einer bis Millionen), nach dem Komma **z, h, t, zt** (Zehntel bis Zehntausendstel); das Komma sitzt fest hinter den Einern. „Zahl" steht als erste Kategorie ganz links. Im Zahl-Modus schaltet der Button **„%-Komma"** ein zweites (blaues) Komma an der Hundertstel-Stelle ein – dann erscheinen nach dem = beide Darstellungen, z. B. **1,025 = 102,5 %**. Bei „Zahl" reichen die Nachkommastellen jetzt bis **ht** und **m**. Tippt man auf eine Stelle (z. B. h), werden **die Zellen dieser und aller Stellen links davon grün unterstrichen** (die Kopfzeile bleibt unverändert); erst dann erscheint der Button **„Bruch"**, der die Zahl als Bruch mit der markierten Stelle als Nenner zeigt (h → Nenner 100, t → 1000 …; der Bruchstrich ist so lang wie die längere der beiden Zahlen). Erneutes Tippen hebt die Markierung auf.
- **Einheitenumrechner** (Mathe & Physik): rechnet gängige physikalische Größen des Schulbetriebs um –
  **Dichte, Stromstärke, Spannung, Widerstand, Länge, Fläche, Volumen, Masse, Geschwindigkeit,
  Beschleunigung, Kraft, Temperatur (°C/K/°F), Impuls, Wärmekapazität, Kapazität, Ladung, Leistung,
  Magnetische Flussdichte, Energie**. Größe wählen,
  Wert + Ausgangseinheit eingeben → alle Einheiten werden live angezeigt.
2. **Seiten-Leiste (unten rechts, senkrecht):** blättern (‹ ›), Seite hinzufügen/löschen, Zoom
   zurücksetzen. Der **Minimier-Pfeil zeigt nach unten** (⌄) – klar unterscheidbar von den
   Blätter-Pfeilen. Minimiert bleiben Minimier-Pfeil und **+** (neue Seite) sichtbar.
2b. **Seiten-Leiste (oben rechts, waagrecht):** blättern, Seite +/−, Zoom, Seitenzahl (= Übersicht).
   Lässt sich **vollständig einklappen** – dann bleibt nur der Aufklapp-Pfeil.
3. **Einstellungs-Leiste (oben links):** Projekt-Auswahl, Vollbild, **Zurück/Vor (Rückgängig)**,
   **Seite leeren**, Einstellungen (Hintergrund, Klassenlisten), Speichern, Laden, **PDF-Export**.
   Lässt sich ebenfalls **vollständig einklappen** (nur der Aufklapp-Pfeil bleibt).

**Alle Leisten weg-/hervorwischen (Präsentation):** Die **vertikale Leiste zur äußeren Kante
hinauswischen** blendet **alle** Leisten aus (die vertikale zur Seite, die beiden oberen nach oben).
Am Rand erscheinen dann kleine Griffe. **Von links in die App wischen** holt alle Leisten zurück
(vertikale Leiste **links**); **von rechts hereinwischen** holt sie zurück mit der vertikalen Leiste
**rechts** (dort auch wieder hinauswischbar). Die gewählte Seite bleibt gespeichert.

Oben rechts liegt der **Vollbild-Knopf**.

> Hinweis Vollbild: Auf dem iPad ist die Fullscreen-API in Safari eingeschränkt – am
> zuverlässigsten wird es über **Teilen → Zum Home-Bildschirm** (läuft dann randlos).

## Auf dem iPad nutzen

Nach dem Hosting (siehe unten) die Seite in **Safari** öffnen, dann
**Teilen → Zum Home-Bildschirm**. Die Tafel läuft dann als Vollbild-App und offline.

## Auf GitHub Pages hosten

1. Diesen Ordner (`tafel/`) in ein GitHub-Repository legen — am einfachsten den **Inhalt**
   des Ordners direkt ins Repo-Root.
2. Im Repo: **Settings → Pages → Build and deployment → Source: „Deploy from a branch"**,
   Branch `main`, Ordner `/ (root)`, speichern.
3. Nach ein paar Minuten ist die Tafel unter
   `https://DEIN-NAME.github.io/DEIN-REPO/` erreichbar.
4. Über diese **https**-Adresse funktioniert auch die **Lärmampel** (Mikrofon-Zugriff erlauben).

### Ordnerstruktur

```
index.html            ← die App
sheet.html            ← eingebettete Tabellenkalkulation
plotter.html          ← eingebetteter Funktionsplotter
vierfelder.html       ← eingebettete Vierfeldertafel
baum.html             ← eingebettetes Baumdiagramm
wahrscheinlichkeit.html ← Binomial-/Normalverteilungs-Rechner
messwert.html         ← eingebundenes Messwert-Analyse-Tool (nutzt CDN → Internet nötig)
gleichung.html        ← eingebetteter Gleichungslöser (linear/quadratisch)
tabelle.html          ← eingebettete gewöhnliche Tabelle (Zeilen/Spalten im Kontextmenü)
geogebra.html         ← eingebettete GeoGebra-App (nutzt CDN → Internet nötig)
wuerfel.html          ← Würfel-Zufallsgenerator (Objekt)
gluecksrad.html       ← Glücksrad (Sektoren im Kontextmenü einstellbar)
bruch.html            ← Bruch mit Kreis-Sektoren-Darstellung
stellenwerttafel.html ← Stellenwerttafel (Längen/Flächen/Volumen/Massen, Komma verschieben)
umrechner.html        ← Einheitenumrechner (physikalische Größen)
pptx.js               ← einfacher PPTX-Renderer (Folien → Bilder, offline)
manifest.webmanifest  ← PWA-Manifest
sw.js                 ← Service Worker (Offline-Cache)
icon.svg, icon-maskable.svg
vendor/
  pdf.min.js, pdf.worker.min.js   ← PDF-Import (offline)
  jspdf.umd.min.js                ← PDF-Export
  qrcode.min.js                   ← QR-Codes
```

## Offline

Alle eigenen Dateien (inkl. PDF-Import und -Export, QR) werden vom Service Worker
gecacht und laufen offline. **Eingebettete** YouTube-/Web-/GeoGebra-Seiten brauchen
naturgemäß Internet.

> Nach Änderungen an den Dateien in `sw.js` die Zeile `const CACHE = 'tafel-v1'`
> hochzählen (`tafel-v2`, …), damit Geräte die neue Version laden.

## Grenzen

- Mikrofon (Lärmampel) nur über https, nicht beim direkten Öffnen der Datei (`file://`).
- Eingebettete Seiten lassen sich nicht ins PDF exportieren (nur Annotationen darauf).
