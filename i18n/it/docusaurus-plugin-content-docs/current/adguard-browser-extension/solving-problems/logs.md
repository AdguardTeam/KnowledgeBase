---
title: Come esportare i registri dalla pagina in background
sidebar_position: 1
---

## Esportare i registri dalla pagina in background nell'estensione

### Chrome

1. Apri l'Estensione di browser AdGuard e, se possibile, ripeti le azioni che hanno causato l'errore. Nota l'orario esatto in cui si è verificato l'errore.

2. Naviga a 'chrome://extensions'.

3. Abilita la _Modalità sviluppatore_.

   ![Modalità sviluppatore \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Clicca su `background.html`.

   ![Background \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Apri la scheda _Console_.

   ![La scheda Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Apri il menu contestuale e seleziona _Salva come…_.

   ![Salva come \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Apri l'Estensione di browser AdGuard e, se possibile, ripeti le azioni che hanno causato l'errore. Nota l'orario esatto in cui si è verificato l'errore.

2. Naviga a `about:addons`.

3. Clicca su _Debug componenti aggiuntivi_.

   ! [Debug componenti aggiuntivi \*border] (https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Clicca su _Ispeziona_.

   ![Ispeziona \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Vai alla scheda _Console_.

   ![Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Clicca su _Salva tutti i Messaggi sul File_.

   ![Salva \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Inviare i registri

> AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/en/privacy/browser-extension.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

Ora che hai raccolto i registri, ti preghiamo di seguire questi passaggi per inviarli al nostro team di sviluppo:

1. Segnala il bug su [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Invia il tuo archivio con i registri e l'orario di riproduzione a 'devteam@adguard.com' e aggiungi un collegamento al tuo ticket di GitHub. Puoi anche caricare l'archivio su Google Drive e aggiungere il collegamento a esso, invece di allegare il file.
