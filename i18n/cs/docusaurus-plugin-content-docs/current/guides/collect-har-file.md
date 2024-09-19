---
title: How to generate a HAR file
sidebar_position: 1
---

Soubory HAR pomáhají našim týmům technické podpory řešit složité problémy. K vytvoření těchto souborů doporučujeme použít prohlížeč Chrome nebo Firefox. IE 11, Edge a Safari však také umožňují generování a export souborů `.har`.

## Chrome {#chrome}

Chcete-li vytvořit soubory HAR v Chrome, postupujte takto:

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

1. Otevřete **Nástroje pro vývojáře**:

    - Z menu: **Menu → Další nástroje → Nástroje pro vývojáře**.
    - Na klávesnici: **Ctrl+Shift+C**, nebo **Ctrl+Alt+I**, nebo **⌥+⌘+I pro Mac**.

1. Klikněte na **záložku síť**.

1. Najděte kulaté tlačítko v levém horním rohu záložky Network a zkontrolujte, zda je v červeném režimu nahrávání. Pokud je šedá, kliknutím na ni zčervená a nahrávání se spustí.

1. Pomocí tlačítka **Clear** (kroužkové tlačítko s procházející čárou vedle tlačítka záznamu) vymažete veškerou předchozí aktivitu.

1. Zaškrtněte políčko **Preserve log** na záložce Network.

1. Zaškrtněte políčko **Disable cache**.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Reprodukujte kroky, které způsobují problém.

1. Uložte relaci jako soubor .har kliknutím pravým tlačítkem na mřížku a výběrem **Save as HAR with content**.

1. Odešlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Edge {#edge}

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

1. Otevřete **Nástroje pro vývojáře**:

    - Z menu: **Menu → Další nástroje → Nástroje pro vývojáře**.
    - Na klávesnici: **Ctrl+Shift+C**, nebo **Ctrl+Alt+I**, nebo **⌥+⌘+I pro Mac**.

1. Klikněte na **záložku síť**.

1. Najděte kulaté tlačítko v levém horním rohu záložky Network a zkontrolujte, zda je v červeném režimu nahrávání. Pokud je šedá, kliknutím na ni zčervená a nahrávání se spustí.

1. Pomocí tlačítka **Clear** (kroužkové tlačítko s procházející čárou vedle tlačítka záznamu) vymažete veškerou předchozí aktivitu.

1. Zaškrtněte políčko **Preserve log** na záložce Network.

1. Zaškrtněte políčko **Disable cache**.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Reprodukujte kroky, které způsobují problém.

1. Uložte relaci jako soubor .har kliknutím pravým tlačítkem na mřížku a výběrem **Save as HAR with content**.

1. Odešlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Firefox {#firefox}

Chcete-li vytvořit soubory HAR ve Firefoxu, postupujte takto:

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

1. Otevřete Nástroje pro vývojáře v režimu **Network**:

    - Z menu: **Menu → Web Developer → Network**.
    - Na klávesnici: **Ctrl+Shift+C**, nebo **⌥+⌘+E (Mac)**.

1. Všimněte si tlačítka **play/pause** v levé horní části karty Network.

    - Tlačítko by mělo být v režimu Play.

1. Pokud jsou v mřížce aktuálně zobrazeny nějaké informace, vymažte je kliknutím na tlačítko **Empty trash can** vedle tlačítka play/pause.

1. Zaškrtněte políčko **Persist Logs** na záložce Network.

1. Zaškrtněte políčko **Disable cache**.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Reprodukujte kroky, které způsobují problém.

1. Uložte relaci jako soubor .har kliknutím pravým tlačítkem na mřížku a výběrem **Save all as HAR**.

1. Odešlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Internet Explorer 11 {#ie11}

Chcete-li vytvořit soubory HAR v Internet Explorer, postupujte takto:

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

1. Otevřete Nástroje pro vývojáře v režimu **Network**:

    - Z nabídky Nástroje (ozubené kolo): **Nástroje pro vývojáře** → **Záložka Síť**.
    - Na klávesnici: **F12 → Záložka Síť**.

1. Všimněte si tlačítka spuštění profilování **Play** a zastavení profilování **Stop** v levé horní části záložky Síť.

    - Tlačítko Play bude při nahrávání šedé a tlačítko Stop červené. Přejděte do režimu **Play**.

1. Pomocí tlačítka **Clear session** na záložce Síť vymažte veškeré informace o relaci zobrazené ve spodní mřížce. Názvy zobrazíte najetím na ikony.

    - Tlačítko **Clear session** je třířádková ikona s x.

1. Zaškrtněte políčko **Disable cache**.

1. Reprodukujte kroky, které způsobují problém.

1. Uložte relaci jako soubor .har kliknutím na tlačítko **Save disk** (Export as HAR) na kartě Síť.

1. Odešlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Safari {#safari}

Chcete-li vytvořit soubory HAR v Safari, postupujte takto:

1. Na liště nabídek Safari v horní části obrazovky najdete nabídku **Develop**.

    - Pokud není vidět, zapněte ji přechodem na **Safari → Preferences → Advanced**.
    - Zaškrtněte políčko ve spodní části vedle **Show Develop menu in menu bar**.

1. Přejděte na URL, kde se problém vyskytuje. Problém zatím nereproduktujte.

1. Otevřete záložku **Network** ve Web Inspector:

    - Z menu: **Develop → Show Web Inspector → Network**.
    - Na klávesnici: **⌥+⌘+I → Network**

1. Zaškrtněte políčko **Preserve log** na levé straně karet Síť v nabídce **Other filter options...**.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Vymažte aktuální položky sítě kliknutím na ikonu **delete Trash** zcela vpravo na záložce Network.

    - Na klávesnici: **⌘+K**

1. Zaškrtněte políčko **Disable caches**.

1. Reprodukujte kroky, které způsobují problém.

1. Uložte relaci jako soubor .har kliknutím na ikonu **Export** vedle ikony **Delete trash**.

1. Odešlete na podporu AdGuardu (support@adguard.com) s podrobným vysvětlením problému. Užitečné mohou být i podpůrné snímky obrazovky.

## Android {#android}

Chcete-li vytvořit soubory HAR, postupujte takto:

1. Otevřete AdGuard a přejděte do **Nastavení**.

1. V menu vyberte **Pokročilé**.

1. Vyberte **Nízkoúrovňová nastavení**

1. Aktivujte `pref.har.capture` (budete muset restartovat ochranu).

1. Nyní problém reprodukujte — otevřete aplikaci a proveďte potřebné akce, aby se reklama zobrazila.

1. Nyní `pref.har.capture` opět vypněte.

1. Vraťte se zpět a klepněte na **Exportovat protokoly a systémové informace** → **Uložit**.

## Windows {#windows}

1. Otevřete **Nastavení*** → **Obecná nastavení** → **Pokročilá nastavení** a přejděte dolů.

1. Zaškrtněte políčko **Enable HAR writting**.

1. Reprodukujte problém.

1. Přejděte na **Obecná nastavení** → Klikněte na **Exportovat protokoly** → **Uložit**.

1. Deaktivujte zápis HAR zrušením zaškrtnutí odpovídajícího políčka.
