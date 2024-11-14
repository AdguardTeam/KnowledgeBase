---
title: Cum să obțineți jurnalele de sistem
sidebar_position: 4
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Datele și/sau fișierele furnizate în jurnale sunt procesate în conformitate cu [Politica de confidențialitate a AdGuard](https://adguard.com/en/privacy.html).

:::

Uneori, un jurnal obișnuit poate să nu fie suficient pentru a identifica originea problemei. În astfel de cazuri, este necesar un jurnal de sistem. Aici sunt instrucțiuni despre cum să le colectați și să le obțineți: prin Opțiunile pentru dezvoltatori și Logcat.

:::note

AdGuard se angajează să protejeze intimitatea dumneavoastră. Urmărim strict [Politica confidențialității](https://adguard.com/privacy/android.html) și nu colectăm informații private despre utilizatori. Înainte de a trimite jurnalele echipei de asistență, vă rugăm să revizuiți fișierul, deoarece acesta poate conține informații suplimentare pe care nu doriți să le împărtășiți. Dacă conține astfel de informații personale, vă recomandăm să le ștergeți mai întâi.

:::

## Capturați un raport de eroare de pe un dispozitiv

Pentru a obține un raport de eroare direct de pe dispozitivul dvs., faceți următoarele:

1. Asigurați-vă că aveți [Opțiuni pentru dezvoltatori](https://developer.android.com/studio/run/device.html#developer-device-options) activate.

1. În **Opțiunile pentru dezvoltatori**, apăsați **Preluați raportul de eroare**.

    ![Raport de eroare *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Selectați tipul de raport de eroare dorit și apăsați **Raportați**.

    :::note

    După un moment, veți vedea o notificare că raportul de eroare este gata (vezi Figura 2).


:::

    ![Raport de eroare *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. Pentru a împărtăși raportul de eroare, apăsați notificarea.

    ![Raport de eroare *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Trimiteți acest jurnal echipei noastre de asistență.

    :::note

    Echipa noastră de asistență va procesa cererea dumneavoastră mult mai repede dacă specificați numărul cererii HelpDesk sau numărul problemei GitHub în mesajul dumneavoastră către suport.


:::

## Capturați un raport de eroare prin Logcat

Pe dispozitivele cu Android 7 și versiuni anterioare, nu este posibil să trimiteți un raport de eroare automat. Apoi, puteți să-l capturați manual prin Logcat — un instrument standard de linie de comandă Android care descarcă un jurnal de mesaje de sistem.

Urmați această instrucțiune:

**Partea #1: pregătiți dispozitivul**

1. Comutați dispozitivul în modul dezvoltator. Pentru a face acest lucru: mergeți la **Setări** → **Despre** → apăsați **Numărul de compilare** de 7 ori.

1. Mergeți la **Opțiuni pentru dezvoltatori**.

1. Permiteți **depanarea USB**.

1. Creșteți dimensiunile **buffer-ului de jurnal** la 4 MB pe buffer de jurnal.

4 MB ar trebui să fie suficient pentru a stoca jurnalele de care avem nevoie până când veți putea face a doua parte (obținerea jurnalului de pe dispozitiv);

**Partea #2: reproducerea problemei**

Este important să reproduceți problema după ce ați terminat cu prima parte.

1. Reproduceți problema.

1. Amintiți-vă/notați data și ora reproducerii și includeți-o în e-mailul către suportul nostru mai târziu.

**Part #3: get the log**

1. Conectați dispozitivul la un PC cu un cablu USB.

1. Download [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools#downloads). Alegeți linkul de descărcare corespunzător pentru sistemul de operare din secțiunea Descărcări. Odată ce apăsați linkul, un fișier ZIP va fi descărcat. Puteți extrage fișierele ADB (Android Debug Bridge) din fișierul ZIP și le puteți stoca oriunde doriți.

1. Testați dacă ADB funcționează corect: conectați dispozitivul Android la computer folosind un cablu USB, deschideți Linia de comandă, PowerShell sau Terminal și rulați următoarea comandă:

    `adb devices`

    Un exemplu de rezultat reușit:

    ![Etapa 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Apoi rulați următoarea comandă (inserați calea relevantă):

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    Trimiteți fișierul `txt` creat, precum și ora la care a fost reprodusă problema (din partea #2) echipei noastre de asistență la support@adguard.com.

### Metodă alternativă pentru utilizatorii ROOT

1. Descărcați și rulați [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Alegeți **Înregistrare** în meniu. Alegeți un nume pentru un fișier de jurnal sau apăsați pur și simplu **OK**. Acum puteți apăsa butonul **Home**, CatLog va continua să înregistreze jurnalul în fundal.

1. Reproduceți problema.

1. Deschideți CatLog și apăsați **Opriți înregistrarea** în meniu.

1. Trimiteți acest jurnal echipei noastre de asistență.

:::note

Echipa noastră de asistență va procesa cererea dumneavoastră mult mai repede dacă specificați numărul cererii HelpDesk sau numărul problemei GitHub în mesajul dumneavoastră către suport.

:::
