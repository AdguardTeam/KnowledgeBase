---
title: Manuel installation af sikkerhedscertifikatet i Firefox-webbrowseren
sidebar_position: 10
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

For at AdGuard kan filtrere HTTPS-trafik i Firefox, skal webbrowseren anse AdGuards certifikat for betroet. Dette gøres på forskellig vis afhængigt af Firefox-versionen.

### Metode 1

:::note

Denne metode fungerer i Firefox til Android version 90.0 og senere.

:::

Gør flg. for at få Firefox til at anse AdGuard-certifikatet for betroet:

1. Kør webbrowseren.

1. Gå til **Indstillinger** → **Om Firefox**.

    ![Om Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Tryk på Firefox-logoet fem gange.

1. Gå til **Indstillinger** → **Hemmelige indstillinger**.

    ![Hemmelige indstillinger *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Slå **Brug tredjeparts CA-certifikater** til.

### Metode 2

:::note

Denne metode fungerer kun på **rootede** enheder.

:::

1. [Installér og opsæt](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; På Windows-platformen skal **Samsung**-ejere muligvis installere [dette værktøj](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Aktivér både **Udviklertilstand** samt **USB-fejlfinding**:

    - Åbn appen **Indstillinger** på mobilen;
    - Gå til afsnittet **System** (sidste punkt på indstillingsmenuen). Find i dette afsnit underpunktet **Om telefon**;
    - Tryk 7 gange på linjen **Build-nummer**. Dernæst ses meddelelse **Du er nu udvikler** (angiv om nødvendigt enhedens oplåsningskode);
    - Åbn **Systemindstillinger** → **Udviklerindstillinger** → Rul ned og aktivér **USB-fejlfinding** → Bekræft, at fejlfinding er aktiveret i vinduet **Tillad USB-fejlfinding** efter omhyggeligt at have læst advarslen.

1. Installér [Firefox](https://www.mozilla.org/en-US/firefox/releases/)-webbrowseren (udgivelsesversion);

1. Åbn **AdGuard-indstillingerne** (tandhjulsikonet nederste til hjørne) → **Filtrering** → **Netværk** → **HTTPS-filtrering** → **Sikkerhedscertifikat** → **Vejledning til Firefox** → **Installér til gamle versioner**;

1. Åbn mappen `data/data/org.mozilla.firefox/files/mozilla` vha. `adb shell su` og `cd data/data/...`og gå dernæst til mappen `xxxxxxx.default`, og husk dens navn;

1. I den pågældende mappe er to filer af interesse:

    - `cert9.db`
    - `key4.db`

1. Disse filer skal flyttes til webbrowsermappen, hvori problemet med sikkerhedscertifikatet opstod:

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. Den komplette kommando vil se således ud:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Vises systemmeddelelsen **Tilladelse nægtet**, skal de angivne filer først flyttes til den tilladelsesfrie mappe. Flyt dem dernæst til den relevante mappe i Firefox-webbrowseren.

    Den komplette kommando bør se ca. således ud:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Fungerer `adb shell su` ikke, så prøv først med `adb shell` og dernæst `su`.
