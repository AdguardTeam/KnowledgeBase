---
title: Mutarea certificatului CA în stocarea sistemului pe dispozitivele cu acces root
sidebar_position: 14
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pentru Android poate [filtra traficul HTTPS criptat](/general/https-filtering/what-is-https-filtering), blocând astfel cele mai multe reclame și trackere pe site-uri. Pe dispozitivele cu acces root, AdGuard vă permite de asemenea să filtrați traficul HTTPS în aplicații. Filtrarea HTTPS necesită adăugarea certificatului CA AdGuard în lista certificatelor de încredere.

Pe dispozitivele fără acces root, certificatul CA poate fi instalat în **stocul utilizatorului**. Numai un subset limitat de aplicații (în principal browsere) au încredere în certificatele CA instalate în stocul utilizatorului, ceea ce înseamnă că filtrarea HTTPS va funcționa doar pentru aceste aplicații.

Pe dispozitivele cu acces root, puteți instala un certificat în **stocarea sistemului**. That will allow AdGuard to filer HTTPS traffic in other apps as well.

Iată cum să faceți asta.

## Cum să instalați certificatul AdGuard în stocarea sistemului

1. Deschideți *AdGuard → Setări → Filtrare → Rețea → Filtrare HTTPS → Certificate de securitate*.

1. If you don't have any certificate yet, **install the AdGuard Personal CA into the user store**. Acest lucru va permite AdGuard să filtreze traficul HTTPS în browsere.

1. **Instalați AdGuard Intermediate CA în stocul utilizatorului**. Veți avea nevoie de el pentru a rula modulul adguardcert Magisk care vă permite să mutați certificatele în stocarea sistemului.

    ![Install the certificate *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. Instalați [cea mai recentă versiune a modulului **adguardcert** Magisk](https://github.com/AdguardTeam/adguardcert/releases/latest/).

1. Open *Magisk → Modules → Install from storage* and select the downloaded **adguardcert** file. Certificatul CA Personal AdGuard va fi copiat în stocarea sistemului.

    ![Open Magisk modules *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Install from storage *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Selectați adguardcert *mobil](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Tap **Reboot**.

    ![Reboot the device *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

After the transfer, the **AdGuard Personal CA** in the system store will allow you to filter HTTPS traffic in apps, while the **AdGuard Intermediate CA** in the user store will allow you to filter HTTPS traffic in Chromium-based browsers (see below why).

## Probleme cunoscute cu Chrome și browserele bazate pe Chromium

Chrome și alte browsere bazate pe Chromium necesită jurnale de transparență a certificatelor (CT) pentru certificatele aflate în stocarea sistemului. Jurnalele CT nu conțin informații despre certificatele emise de aplicațiile de filtrare HTTPS. Prin urmare, AdGuard necesită un certificat suplimentar în stocul utilizatorului pentru a filtra traficul HTTPS în aceste browsere.

### Browser Bromite

În plus față de problema de mai sus, Bromite nu are încredere în certificatele din stocul utilizatorului în mod implicit. Pentru a filtra traficul HTTPS acolo, deschideți Bromite, mergeți la `chrome://flags` și setați *Permiteți certificatele utilizatorului* pe *Activat*. **Aceasta se aplică atât pentru dispozitivele cu acces root, cât și pentru cele fără acces root**.
