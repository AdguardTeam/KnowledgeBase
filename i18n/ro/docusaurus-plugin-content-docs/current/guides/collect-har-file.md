---
title: How to generate a HAR file
sidebar_position: 1
---

Fișierele HAR ajută echipele noastre de suport tehnic să rezolve probleme complexe. Pentru a crea aceste fișiere, recomandăm utilizarea Chrome sau Firefox. Cu toate acestea, IE 11, Edge și Safari oferă de asemenea capacitatea de generare și export a fișierelor `.har`.

## Chrome {#chrome}

Pentru a crea un fișier HAR în Chrome, urmați acești pași:

1. Accesați URL-ul unde apare problema. Nu reproduceți încă problema.

1. Deschideți **Instrumentele pentru dezvoltatori**:

    - Din meniu: **Meniu → Instrumente suplimentare → Instrumente pentru dezvoltatori**.
    - Tastatură: **Ctrl+Shift+C**, sau **Ctrl+Alt+I**, sau **⌥+⌘+I pentru Mac**.

1. Click the **Network tab**.

1. Localizați butonul rotund din colțul din stânga sus al tabului Rețea și confirmați că este în modul de înregistrare roșu. Dacă este gri, faceți clic pentru a deveni roșu pentru a începe înregistrarea.

1. Utilizați butonul **Ștergeți** (butonul cerc cu o linie prin el lângă butonul de înregistrare) pentru a curăța toată activitatea anterioară.

1. Selectați caseta de bifat **Păstrează jurnalul** pe tab-ul Rețea.

1. Check the **Disable cache** check box.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Reproduceți pașii care creează problema.

1. Salvați sesiunea ca fișier .har făcând clic dreapta pe grilă și selectând **Salvați ca HAR cu conținut**.

1. Trimiteți-l echipei de suport AdGuard (support@adguard.com) cu o explicație detaliată a problemei. Capturile de ecran de suport pot fi de ajutor, de asemenea.

## Edge {#edge}

1. Accesați URL-ul unde apare problema. Nu reproduceți încă problema.

1. Deschideți **Instrumentele pentru dezvoltatori**:

    - Din meniu: **Meniu → Instrumente suplimentare → Instrumente pentru dezvoltatori**.
    - Tastatură: **Ctrl+Shift+C**, sau **Ctrl+Alt+I**, sau **⌥+⌘+I pentru Mac**.

1. Click the **Network tab**.

1. Localizați butonul rotund din colțul din stânga sus al tabului Rețea și confirmați că este în modul de înregistrare roșu. Dacă este gri, faceți clic pentru a deveni roșu pentru a începe înregistrarea.

1. Utilizați butonul **Ștergeți** (butonul cerc cu o linie prin el lângă butonul de înregistrare) pentru a curăța toată activitatea anterioară.

1. Selectați caseta de bifat **Păstrează jurnalul** pe tab-ul Rețea.

1. Check the **Disable cache** check box.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Reproduceți pașii care creează problema.

1. Salvați sesiunea ca fișier .har făcând clic dreapta pe grilă și selectând **Salvați ca HAR cu conținut**.

1. Trimiteți-l echipei de suport AdGuard (support@adguard.com) cu o explicație detaliată a problemei. Capturile de ecran de suport pot fi de ajutor, de asemenea.

## Firefox {#firefox}

Pentru a crea un fișier HAR în Firefox, urmați acești pași:

1. Accesați URL-ul unde apare problema. Nu reproduceți încă problema.

1. Deschideți Instrumentele pentru dezvoltatori în modul **Rețea**:

    - Din meniu: **Meniu → Dezvoltator web → Rețea**.
    - Tastatură: **Ctrl+Shift+C**, sau **⌥+⌘+E (Mac)**.

1. Observați butonul **Redare/Pauză** din colțul din stânga sus al tabului Rețea.

    - Butonul ar trebui să fie în modul redare.

1. If any information is currently displayed in the grid, clear by clicking the **Empty trash can** button next to the play/pause button.

1. Select the **Persist Logs** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Reproduceți pașii care creează problema.

1. Salvați sesiunea ca fișier .har făcând clic dreapta pe grilă și selectând **Salvați tot ca HAR**.

1. Trimiteți-l echipei de suport AdGuard (support@adguard.com) cu o explicație detaliată a problemei. Capturile de ecran de suport pot fi de ajutor, de asemenea.

## Internet Explorer 11 {#ie11}

To create a HAR file in Internet Explorer 11, follow these steps:

1. Accesați URL-ul unde apare problema. Nu reproduceți încă problema.

1. Deschideți Instrumentele pentru dezvoltatori în modul **Rețea**:

    - Din meniul rotiță de unelte: **Instrumentele pentru dezvoltatori** → **Tabul rețea**.
    - Keyboard: **F12 → Network** tab.

1. Observați butonul de începere a sesiunii de profilare **Redare** și butonul de oprire a profilării **Oprire** din colțul din stânga sus al tabului Rețea.

    - Butonul de redare va fi gri când înregistrează, iar butonul de oprire va fi roșu. Introduceți în modul **Redare**.

1. Ștergeți orice informație de sesiune care apare în grila inferioară folosind butonul **Ștergeți sesiunea** de pe tabul Rețea. Puneți cursorul peste icoane pentru a vedea numele.

    - **Clear session** button is a three line icon with an x on it.

1. Check the **Disable cache** check box.

1. Reproduceți pașii care creează problema.

1. Save session as a .har file by clicking the **Save to disk** button (Export as HAR) on Network tab.

1. Trimiteți-l echipei de suport AdGuard (support@adguard.com) cu o explicație detaliată a problemei. Capturile de ecran de suport pot fi de ajutor, de asemenea.

## Safari {#safari}

To create a HAR file in Safari, follow these steps:

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.

    - Dacă nu este vizibil, activați-l mergând la **Safari → Setări → Avansat**.
    - Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

1. Accesați URL-ul unde apare problema. Nu reproduceți încă problema.

1. Deschideți tabul **Rețea** în Inspectorul web:

    - Din meniu: **Dezvoltare → Afișați Inspector web → Rețea**.
    - Keyboard: **⌥+⌘+I → Network**

1. Verificați caseta de bifat **Păstrează jurnalul** pe partea stângă a tab-urilor de rețea, în meniul **Alte opțiuni de filtrare...**.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.

    - Tastatură: **⌘+K**

1. Check the **Disable caches** check box.

1. Reproduceți pașii care creează problema.

1. Salvați sesiunea ca fișier .har făcând clic pe iconița **Exportare** de lângă iconița **Ștergeți coșul de gunoi**.

1. Trimiteți-l echipei de suport AdGuard (support@adguard.com) cu o explicație detaliată a problemei. Capturile de ecran de suport pot fi de ajutor, de asemenea.

## Android {#android}

Pentru a crea fișiere HAR, urmați acești pași:

1. Deschideți AdGuard și mergeți la **Setări**.

1. Alegeți **Avansat** în meniu.

1. Alegeți **Setări de nivel scăzut**

1. Activați `pref.har.capture` (va trebui să reporniți protecția).

1. Acum reproduceți problema — deschideți aplicația, efectuați acțiunile necesare pentru a face reclama să apară.

1. Acum dezactivați `pref.har.capture` din nou.

1. Întoarceți-vă și atingeți **Exportați jurnalele și informațiile sistemului** → **Salvați**.

## Windows {#windows}

1. Deschideți **Setări*** → **Setări generale** → **Setări avansate** și derulați în jos.

1. Check the **Enable HAR writing** box.

1. Reproduceți problema.

1. Mergeți la **Setări generale** → Faceți clic pe **Exportați jurnalele** → **Salvați**.

1. Dezactivați scrierea HAR debifând caseta corespunzătoare.
