---
title: Come esportare i registri dalla pagina in background
sidebar_position: 1
---

## Esportare i registri dalla pagina in background nell'estensione

### Chrome

1. Apri l'Estensione di browser AdGuard e, se possibile, ripeti le azioni che hanno causato l'errore. Nota l'orario esatto in cui si è verificato l'errore.

2. Naviga a 'chrome://extensions'.

3. Abilita la _Modalità sviluppatore_.

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Apri l'Estensione di browser AdGuard e, se possibile, ripeti le azioni che hanno causato l'errore. Nota l'orario esatto in cui si è verificato l'errore.

2. Naviga a `about:addons`.

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Clicca su _Ispeziona_.

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Inviare i registri

:::note

AdGuard si impegna a proteggere la tua privacy. Seguiamo rigorosamente la nostra [Informativa sulla privacy](https://adguard.com/privacy/browser-extension.html) e non raccogliamo alcuna informazione privata sugli utenti. Prima di inviare i registri al team di supporto, esamina il file poiché potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.

:::

Ora che hai raccolto i registri, ti preghiamo di seguire questi passaggi per inviarli al nostro team di sviluppo:

1. Segnala il bug su [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Invia il tuo archivio con i registri e l'orario di riproduzione a 'devteam@adguard.com' e aggiungi un collegamento al tuo ticket di GitHub. Puoi anche caricare l'archivio su Google Drive e aggiungere il collegamento a esso, invece di allegare il file.
