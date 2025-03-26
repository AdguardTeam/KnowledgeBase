---
title: Installazione manuale del certificato di sicurezza nel browser di Firefox
sidebar_position: 10
---

:::info

Questo articolo riguarda AdGuard per Android, un ad blocker multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Affinché AdGuard filtri correttamente il traffico HTTPS su Firefox, il browser deve fidarsi del certificato di AdGuard. Ciò può essere ottenuto in modi diversi per diverse versioni di Firefox.

### Metodo 1

:::note

Questo metodo funziona sulle versioni 90.0 e successive di Firefox per Android.

:::

Per far sì che Firefox si fidi del certificato di AdGuard, fai quanto segue:

1. Apri il browser.

1. Vai in **Impostazioni** → **Informazioni su Firefox**.

    ![Informazioni su Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Tocca cinque volte il logo di Firefox.

1. Naviga in **Impostazioni** → **Impostazioni Segrete**.

    ![Impostazioni Segrete *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Attiva **Utilizza certificati CA di terze parti**.

### Metodo 2

:::note

Questo metodo funzionerà soltanto sui dispositivi con **permessi di root**.

:::

1. [Installa e configura](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; Sulla piattaforma Windows, i proprietarii di **Samsung** potrebbero dover installare [questa utility](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Attiva la **modalità sviluppatore** e abilita il **Debug USB**:

    - Apri l'app delle **Impostazioni** sul tuo telefono;
    - Vai alla sezione **Sistema** (ultima voce nel menu delle impostazioni). In questa sezione, trova **Informazioni sul telefono**;
    - Tocca la riga **Numero di build** per 7 volte. Dopodiché, riceverai la notifica "**Sei ora uno sviluppatore**" (Se necessario, inserisci un codice di sblocco per il dispositivo);
    - Apri le **Impostazioni di sistema** → **Opzioni per sviluppatori** → Scorri in basso e abilita **Debug USB** → Conferma che il debug sia abilitato nella finestra **Consenti debug USB**, dopo aver letto attentamente l'avviso.

1. Installa il browser [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (versione di rilascio);

1. Apri le **impostazioni di AdGuard** (icona dell'ingranaggio in basso a destra) → **Filtraggio** → **Rete** → **Filtraggio HTTPS** → **Certificato di sicurezza** → **Istruzioni per Firefox** → **Installa per versioni precedenti**;

1. Apri la cartella `data/data/org.mozilla.firefox/files/mozilla` utilizzando `adb shell su` e `cd data/data/...`, quindi naviga alla cartella denominata `xxxxxxx.default` e memorizzane il nome;

1. Nella cartella specificata, siamo interessati a due file:

    - `cert9.db`
    - `key4.db`

1. Dobbiamo spostarli in una cartella del browser dove si è verificato il problema con il certificato di sicurezza:

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. Il comando completo è simile al seguente:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Nel caso in cui tu abbia ricevuto la notifica di sistema **autorizzazione negata**, dovresti prima spostare i file specificati alla cartella priva di autorizzazioni. Dopodiché, dovresti spostarli alla cartella necessaria, nel tuo browser Firefox.

    Il comando completo dovrebbe somigliare a questo:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Se `adb shell su` non funziona, dovresti provare inizialmente con `adb shell`, quindi con `su`.
