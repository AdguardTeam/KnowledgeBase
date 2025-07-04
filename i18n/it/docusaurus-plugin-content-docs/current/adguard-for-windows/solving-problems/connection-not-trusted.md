---
title: Problemi relativi ai certificati
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Per poter filtrare il traffico HTTPS e bloccare efficientemente annunci e tracciatori, AdGuard genera un certificato di root speciale (e univoco) e lo installa nell'archivio di sistema. Puoi scoprire di più sul perché è necessario un certificato, leggendo [questo articolo](/general/https-filtering/what-is-https-filtering).

Normalmente, i browser si fidano del certificato di AdGuard una volta aggiunto all'archivio di sistema dei certificati, durante il processo di installazione. Ma in alcuni casi, ciò non è sufficiente e potresti riscontrare avvisi o errori. Ciò si verifica più spesso sui browser basati su Firefox, come Mozilla Firefox, PaleMoon, Waterfox, etc. o su Yandex.Browser.

Here are some common issues:

- [Errore *Potenziale Rischio di Sicurezza* sui browser basati su Firefox](#potential-security-risk-error-in-firefox-based-browsers)
- [Avviso del certificato di Yandex.Browser](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## Errore *Potenziale Rischio di Sicurezza* sui browser basati su Firefox

![Errore di rischio di sicurezza](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Le vecchie versioni di Firefox, nonché i browser basati su di esse, non si fidano dei certificati dall'archivio di sistema, ma soltanto di quelli dal proprio archivio locale. Dalla v68, Firefox si fida dei certificati di sistema, ma puoi ancora riscontrare l'errore "Connessione non attendibile". Se si verifica qualcosa del genere, prima prova a cliccare sul pulsante *Reinstalla Certificato*, lo troverai nella scheda *Rete*.

![Reinstalla Certificato](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Se ciò non aiuta, segui le istruzioni per l'aggiunta manuale del certificato di AdGuard all'archivio di Firefox.

> Queste istruzioni sono per il browser Firefox. I nomi dei pulsanti e degli elementi del menu potrebbero differire in altr browser basati su Firefox.

1. Esegui AdGuard.

1. Vai a [http://local.adguard.org/cert](http://local.adguard.org/cert) e clicca sul pulsante *Download*. Il browser dovrebbe avviare il download del file **cert.cer**.

    :::note

    Inoltre, puoi aprire la pagina di download cliccando sul link tramite l'app di AdGuard in *Impostazioni → Rete → Filtraggio HTTPS*.


:::

    ![Impostazioni del certificato](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Apri il tuo browser, quindi apri le *Impostazioni*.

1. Vai alla scheda *Privacy & Sicurezza*.

1. Scorri in basso ai *Certificati* e clicca sul pulsante *Visualizza Certificati*.

    ![Visualizza la finestra dei certificati](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Seleziona la scheda *Autorità*.

1. Clicca su *Importa...*.

    ![Impostazioni del certificato — importa](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Naviga al file **cert.cer** scaricato e clicca su *Apri*.

1. Spunta la casella *Fidati di questa CA per identificare i siti web*, quindi clicca su *OK*.

    ![Impostazioni del certificato — casella di controllo](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Hai installato correttamente il certificato di AdGuard. Riavvia il browser e l'errore dovrebbe scomparire.

## Avviso del certificato di Yandex.Browser

Se sei un utente di AdGuard per Windows e di Yandex.Browser, potresti aver riscontrato questo avviso:

![Avviso del certificato di Yandex](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Perché si verifica

Sia AdGuard che Yandex prendono molto sul serio la sicurezza degli utenti su Internet. La politica attuale di Yandex è avvisare i propri utenti di qualsiasi certificato non sia riconosciuto dal browser. Ciò non è privo di fondamento, poiché talvolta le app dannose possono iniettare i propri certificati, e utilizzarli per danneggiare il sistema e rubare dati privati.

Tuttavia, anche AdGuard aggiunge il proprio certificato a quelli attendibili. Ciò causa il messaggio di avviso che hai riscontrato.

### Come risolvere il problema

Il metodo più facile è cliccare sul pulsante **Vai al sito**. Ciò comunicherà a Yandex.Browser di ricordare il certificato di AdGuard come uno attendibile, almeno per un po'. Normalmente, non dovrai vederlo più, ma non è impossibile che appaia occasionalmente, per qualsiasi motivo. In tali casi, basta premere nuovamente lo stesso pulsante *(assicurati che sia il certificato di AdGuard!)*.

Inoltre, disabilitare il Filtraggio HTTPS su AdGurd impedirà a Yandex.Browser di mostrare nuovamente questo messaggio, ma a un gran prezzo: tutte le inserzioni caricate da HTTPS (incluse le **inserzioni di Yandex** appariranno, su siti web come YouTube, Facebook, Instagram, e molti altri. Lo sconsigliamo vivamente, se desideri mantenere elevata la qualità di blocco delle inserzioni.

## Non-official add-ons don’t update in Firefox-based browsers

If you use Firefox-based browsers and have add-ons that aren’t from Mozilla’s official catalog — and HTTPS filtering is enabled in AdGuard — those add-ons won’t be able to update. Here’s why.

To update add-ons, Firefox checks whether the connection to the update server is secured with a certificate issued by a trusted certificate authority (CA). Firefox-based browsers only trust certificates from CAs included in Mozilla’s built-in list — it’s a security measure to block potentially unsafe updates.

AdGuard’s certificate, although secure, isn’t on that list. That is why Mozilla domains are excluded from HTTPS filtering in AdGuard.

However, non-official add-ons use third-party servers for updates, and those are not excluded from HTTPS filtering by default. So when Firefox checks the connection, it sees AdGuard’s certificate instead of the original one — and blocks the update.

If you need to check for updates for such add-ons, consider temporarily disabling AdGuard.
