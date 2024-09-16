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

:::note

AdGuard si impegna a proteggere la tua privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Prima di inviare i registri al team di supporto, esamina il file poiché potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
