---
title: Cum instalez AdGuard pentru Android TV
sidebar_position: 15
---

:::info

Acest articol se referă la AdGuard pentru Android TV, un blocant de reclame care protejează TV-ul dvs. la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/tvapk)

:::

În cele mai multe cazuri, browserele stock nu pot instala un fișier pe TV-ul dvs., dar puteți descărca un browser din Google Play Store care are această funcționalitate. În ghidul nostru, vom trece printr-un exemplu de instalare folosind browserul TV Bro, dar există și alte opțiuni și puteți alege varianta care se potrivește mai bine nevoilor dvs. Ca alternativă, puteți folosi aplicația [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader).

## Instalarea AdGuard pentru Android TV prin browser

1. Instalați browserul [TV Bro](https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) pe TV-ul dvs. Android.

2. Descărcați și instalați AdGuard pentru Android TV:

- Deschideți browserul TV Bro instalat pe TV-ul dvs. Android.
- În bara de adrese a browserului, tastați `https://agrd.io/tvapk` și apăsați _Enter_ sau urmați linkul.
- Browserul va începe să descarce automat fișierul de instalare AdGuard pentru Android TV.
- Odată ce descărcarea este completă, selectați _Downloads_ în bara de control a browserului, apoi selectați fișierul descărcat.
- Într-un mesaj de avertizare, permiteți instalarea fișierelor din browser.
- Întoarceți-vă la browser, deschideți _Downloads_ și faceți clic pe fișierul descărcat.
- In the system window that appears, click _Install_, then _Done_ or _Open_.

Finalizat, AdGuard pentru Android TV este instalat.

1. Lansați AdGuard pentru Android TV:

- După ce instalarea este completă, găsiți aplicația AdGuard în lista de aplicații instalate pe TV-ul dvs. Android.
- Faceți clic pe pictograma AdGuard pentru a lansa aplicația.
- Urmați instrucțiunile de pe ecran pentru a finaliza configurarea.

## Instalarea AdGuard pentru Android TV prin ADB

1. Asigurați-vă că Android Debug Bridge (ADB) este instalat pe computerul dvs. Dacă nu este, puteți urma instrucțiunile de pe XDA Developers: [Ghid pentru Instalarea ADB](https://www.xda-developers.com/install-adb-windows-macos-linux).

2. Descărcați [AdGuard pentru Android TV](https://agrd.io/tvapk).

3. În setările TV-ului, mergeți la _System_ → _About_ și apăsați de șapte ori pe numărul de construcție pentru a debloca opțiunile de dezvoltator. Enable _USB debugging_.

4. Notează adresa IP a TV-ului tău Android:

    - Pe TV-ul tău Android, navighează la Setări.
    - Selectează _System_ → _About_.
    - Găsiți _Network_ și selectați _Wi-Fi_ sau _Ethernet_, în funcție de tipul de conexiune.
    - Go to the network section and find _IP address_. Notează această adresă IP.

5. Conectați-vă la Android TV prin ADB:

    - Deschideți terminalul sau promptul de comandă pe computerul dvs.
    - Introduceți comanda `adb connect` și lipiți adresa IP a TV-ului dvs.
    - Conexiunea va fi stabilită.

6. Instalați AdGuard pentru Android TV prin ADB:

    - În terminal, introduceți comanda `adb install Downloads/adguard_tv.apk`. Dacă este necesar, înlocuiți `Downloads/adguard_tv.apk` cu calea dvs.
    - Așteptați un mesaj în terminal care să indice instalarea reușită a aplicației.
