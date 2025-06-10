---
title: Come raccogliere i registri di AdGuard
sidebar_position: 3
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

I dati e/o i file forniti negli registri sono trattati in conformità con [l'Informativa sulla privacy di AdGuard](https://adguard.com/en/privacy.html).

:::

Per analizzare e diagnosticare i diversi problemi che potrebbero sorgere, il servizio di supporto di AdGuard potrebbe necessitare dei file di registro di AdGuard. Questi file contengono registri su errori e altri eventi verificatisi nel programma. Segue una breve introduzione che descrive come ottenere i file di registro e come inviarli al servizio di supporto, se necessario.

:::note

AdGuard si impegna a proteggere la tua privacy. Rispettiamo rigorosamente la nostra [Informativa sulla privacy](https://adguard.com/privacy/windows.html) e non raccogliamo alcuna informazione privata sugli utenti. Prima di inviare i registri al team di supporto, esamina il file poiché potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.

:::

### Registri di debug {#debug-logs}

1. Apri le impostazioni di AdGuard. Vai alla sezione *Impostazioni Generali*, scorri in basso alla fine della schermata e modifica il *Livello di registrazione* a *Debug*.

    ![Livello di registrazione di debug *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Riproduci il problema.

    Consigliamo vivamente di prendere nota dell'orario esatto di riproduzione del problema: aiuterà il nostro team di supporto a trovare le voci del registro rilevanti e a risolvere più velocemente il problema.

1. Esporta i registri raccolti, usando il pulsante *Esporta Registri*.

    ![Esporta i registri *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Salva l'archivio in qualsiasi cartella.

1. **Importante**: dopo aver esportato i registri, reimposta il livello di registrazione a *Predefinito*. Il livello di registrazione *Debug* rallenterà l'applicazione.

1. Invia l'archivio al servizio di assistenza AdGuard a **support@adguard.com**, descrivi il problema e non ti dimenticare di menzionare l'orario di riproduzione del problema.

### Registri di traccia {#trace-logs}

Talvolta, i membri del team di supporto potrebbero chiederti di inviare i registri di *traccia*. Quindi, dovrai fare quanto segue:

1. Arresta AdGuard cliccando con il destro sull'icona di AdGuard nel menu della barra delle applicazioni e selezionando *Esci da AdGuard*:

    ![Esci da AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Ti preghiamo di non lasciare il servizio in esecuzione:

    ![Arresta il servizio di AdGuard *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Apri la console (digita `cmd` nel pannello Start).

1. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Se possiedi una versione precedente di AdGuard per Windows, esegui l'applicazione con il comando C:\"Program Files (x86)"\Adguard\Adguard.exe /trace se stai utilizzando Windows a 64-bit, e "Program Files"\Adguard\Adguard.exe /trace se stai utilizzando Windows a 32-bit.

1. Riproduci il problema.

    Consigliamo vivamente di prendere nota dell'orario esatto di riproduzione del problema: aiuterà il nostro team di supporto a trovare le voci del registro rilevanti e a risolvere più velocemente il problema.

1. Esporta i registri raccolti, usando il pulsante *Esporta Registri*.

    ![Esporta i registri *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Non ti preoccupare se il file di registro è grande. Necessitiamo di quanti più dettagli possibile per risolvere il problema.
