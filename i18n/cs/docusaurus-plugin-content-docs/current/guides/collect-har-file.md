---
title: Jak shromažďovat soubory HAR
sidebar_position: 1
---

Soubory HAR pomáhají našim týmům technické podpory řešit složité problémy. K vytvoření těchto souborů doporučujeme použít prohlížeč Chrome nebo Firefox. IE 11, Edge a Safari však také umožňují generování a export souborů `.har`.

## Chrome {#chrome}

Postup vytvoření souboru HAR v Chrome:

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

2. Otevřete ***Nástroje pro vývojáře***:

- Z menu: ***Menu → Další nástroje → Nástroje pro vývojáře***.
- Na klávesnici: ***Ctrl+Shift+C***, nebo ***Ctrl+Alt+I***, nebo ***⌥+⌘+I pro Mac***.

3. Klikněte na ***Záložku Network***.

4. Najděte kulaté tlačítko v levém horním rohu záložky Network a zkontrolujte, zda je v červeném režimu nahrávání. Pokud je šedá, kliknutím na ni zčervená a nahrávání se spustí.

5. Pomocí tlačítka ***clear*** (kroužkové tlačítko s procházející čárou vedle tlačítka záznamu) vymažete veškerou předchozí aktivitu.

6. Zaškrtněte políčko ***Preserve log*** na záložce Network.

7. Zaškrtněte políčko ***Disable cache***.

![chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. Reprodukujte kroky, které způsobují problém.

9. Uložte relaci jako soubor .har kliknutím pravým tlačítkem na mřížku a výběrem ***Save as HAR with content***.

10. Přepošlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Edge {#edge}

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

2. Otevřete ***Nástroje pro vývojáře***:

- Z menu: ***Menu → Další nástroje → Nástroje pro vývojáře***.
- Na klávesnici: ***Ctrl+Shift+C***, nebo ***Ctrl+Alt+I***, nebo ***⌥+⌘+I pro Mac***.

3. Klikněte na ***Záložku Network***.

4. Najděte kulaté tlačítko v levém horním rohu záložky Network a zkontrolujte, zda je v červeném režimu nahrávání. Pokud je šedá, kliknutím na ni zčervená a nahrávání se spustí.

5. Pomocí tlačítka ***clear*** (kroužkové tlačítko s procházející čárou vedle tlačítka záznamu) vymažete veškerou předchozí aktivitu.

6. Zaškrtněte políčko ***Preserve log*** na záložce Network.

7. Zaškrtněte políčko ***Disable cache***.

![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. Reprodukujte kroky, které způsobují problém.

9. Uložte relaci jako soubor .har kliknutím pravým tlačítkem na mřížku a výběrem ***Save as HAR with content***.

10. Přepošlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Firefox {#firefox}

Postup vytvoření souboru HAR ve Firefoxu:

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

2. Otevřete Nástroje pro vývojáře v režimu ***Network***:
- Z menu: ***Menu → Web Developer → Network***.
- Na klávesnici: ***Ctrl+Shift+C***, nebo **⌥+⌘+E (Mac)**.

3. Všimněte si tlačítka ***play/pause*** v levé horní části karty Network.
- Tlačítko by mělo být v režimu Play.

4. Pokud jsou v mřížce aktuálně zobrazeny nějaké informace, vymažte je kliknutím na tlačítko ***delete trash can*** vedle tlačítka play/pause.

5. Zaškrtněte políčko ***Persist Logs*** na záložce Network.

6. Zaškrtněte políčko ***Disable cache***.

![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. Reprodukujte kroky, které způsobují problém.

8. Uložte relaci jako soubor .har kliknutím pravým tlačítkem na mřížku a výběrem ***Save all as HAR***.

9. Přepošlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Internet Explorer 11 {#ie11}

Postup vytvoření souboru HAR v IE 11:

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

2. Otevřete Nástroje pro vývojáře v režimu ***Network***:
- Z nabídky Nástroje (ozubené kolo): ***Nástroje pro vývojáře*** → ***Záložka Síť***.
- Na klávesnici: ***F12 → Záložka Síť***.

3. Všimněte si tlačítka spuštění profilování ***Play*** a zastavení profilování ***Stop*** v levé horní části záložky Síť.
- Tlačítko Play bude při nahrávání šedé a tlačítko Stop červené. Přejděte do režimu ***Play***.

4. Pomocí tlačítka ***Clear session*** na záložce Síť vymažte veškeré informace o relaci zobrazené ve spodní mřížce. Názvy zobrazíte najetím na ikony.
- Tlačítko ***Clear session*** je třířádková ikona s x.

5. Zaškrtněte políčko ***Disable cache***.

6. Reprodukujte kroky, které způsobují problém.

7. Uložte relaci jako soubor .har kliknutím na tlačítko ***Save disk (Export as HAR) *** na kartě Síť.

8. Přepošlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Safari {#safari}

Postup vytvoření souboru HAR v Safari:

1. Na liště nabídek Safari v horní části obrazovky najdete nabídku ***Develop***. Zaškrtněte políčko ve spodní části vedle ***Show Develop menu in menu bar***.
- Pokud není vidět, zapněte ji přechodem na ***Safari → Preferences → Advanced***.

2. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

3. Otevřete záložku ***Network*** ve Web Inspector:
- Z menu: ***Develop → Show Web Inspector → Network***.
- Na klávesnici: ***⌥+⌘+I → Network***

4. Zaškrtněte políčko ***Preserve Log*** na pravé straně záložky Network.

5. Vymažte aktuální položky sítě kliknutím na ikonu ***delete Trash*** zcela vpravo na záložce Network.

6. Zaškrtněte políčko ***Disable cache***.

7. Reprodukujte kroky, které způsobují problém.

8. Uložte relaci jako soubor .har kliknutím na ikonu ***Export*** vedle ***Preserve Log***.

9. Přepošlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Android {#android}

Chcete-li získat soubory HAR, postupujte takto:

1. Otevřete AdGuard a přejděte do ***Nastavení***.

2. V menu zvolte ***Pokročilé***.

3. Vyberte ***Nízkoúrovňová nastavení***

4. Aktivujte `pref.har.capture` (budete muset restartovat ochranu).

5. Nyní problém reprodukujte — otevřete aplikaci a proveďte potřebné akce, aby se reklama zobrazila.

6. Nyní `pref.har.capture` opět vypněte.

7. Vraťte se zpět a klepněte na ***Exportovat protokoly a systémové informace*** → ***Uložit***.

## Windows {#windows}

1. Otevřete ***Nastavení*** → ***Obecná nastavení*** → ***Pokročilá nastavení** a posuňte se dolů.

2. Zaškrtněte políčko ***Enable HAR writting***.

3. Reprodukujte problém.

4. Přejděte na ***Obecná nastavení*** → klikněte na ***Exportovat protokoly*** → ***Uložit***.

5. Deaktivujte zápis HAR zrušením zaškrtnutí odpovídajícího políčka.
