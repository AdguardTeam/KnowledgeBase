---
title: Instalare manuală a certificatului de securitate în browserul Firefox
sidebar_position: 11
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Pentru ca AdGuard să filtreze cu succes traficul HTTPS în Firefox, browserul trebuie să aibă încredere în certificatul AdGuard. Acest lucru poate fi realizat diferit pentru diferite versiuni ale Firefox.

### Metodă 1

:::note

Această metodă funcționează în Firefox pentru Android versiunea 90.0 și ulterioare.

:::

Pentru a face ca Firefox să aibă încredere în certificatul AdGuard, urmați acești pași:

1. Rulați browserul.

1. Accesați **Setări** → **Despre Firefox**.

    ![Despre Firefox *mobil](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Apăsați de cinci ori pe logo-ul Firefox.

1. Navigați la **Setări** → **Setări secrete**.

    ![Setări secrete *mobil](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Comutați **Utilizați certificate CA de la terți**.

### Metodă 2

:::note

Această metodă va funcționa doar pe dispozitive **rootate**.

:::

1. [Instalare și configurare](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; Pe platforma Windows, proprietarii de **Samsung** pot fi nevoiți să instaleze [această utilitate](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Activați **modul dezvoltator** și activați **debugging USB**:

    - Deschideți aplicația **Setări** de pe telefon;
    - Accesați secțiunea **Sistem** (ultimul element din meniul setărilor). În această secțiune, găsiți subelementul **Despre telefon**;
    - Apăsați pe linia **Numărul construcției** de 7 ori. După aceea, veți primi o notificare că **Sunteți acum dezvoltator** (Dacă este necesar, introduceți un cod de deblocare pentru dispozitiv);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

1. Instalați browserul [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (versiune de lansare);

1. Open the **AdGuard settings** (gear icon in the bottom right corner) → **Filtering** → **Network** → **HTTPS filtering** → **Security certificate** → **Instructions for Firefox** → **Install for old versions**;

1. Deschideți folderul `data/data/org.mozilla.firefox/files/mozilla` folosind `adb shell su` și `cd data/data/...`, apoi navigați la folderul numit `xxxxxxx.default` și memorizați-i numele;

1. În folderul specificat, ne interesează două fișiere:

    - `cert9.db`
    - `key4.db`

1. Trebuie să mutăm aceste fișiere într-un folder al browserului în care a apărut problema cu certificatul de securitate:

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. Comanda completă va arăta astfel:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    În cazul în care ați primit notificarea de sistem **permisiune refuzată**, trebuie mai întâi să mutați fișierele specificate în directorul fără permisiuni. Și după aceea, ar trebui să le mutați în folderul necesar din browserul dvs. Firefox.

    Comanda completă ar trebui să arate astfel:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Dacă `adb shell su` nu funcționează, ar trebui să încercați mai întâi `adb shell`, iar apoi `su`.
