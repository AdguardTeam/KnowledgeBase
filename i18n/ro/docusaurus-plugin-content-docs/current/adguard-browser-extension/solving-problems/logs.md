---
title: Cum se exportă jurnalele din pagina de fundal
sidebar_position: 1
---

## Exportul jurnalelor din pagina de fundal în extensie

### Chrome

1. Deschideți extensia AdGuard din browser și, dacă este posibil, repetați acțiunile care au dus la eroare. Notați ora exactă la care s-a produs eroarea.

2. Deschideți în browser `chrome://extensions`.

3. Activați _Mod pentru dezvoltatori_.

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Deschideți extensia AdGuard din browser și, dacă este posibil, repetați acțiunile care au dus la eroare. Notați ora exactă la care s-a produs eroarea.

2. Deschideți în browser `about:addons`.

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Faceți clic pe _Inspectează_.

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Trimiterea jurnalelor

:::note

AdGuard se angajează să protejeze intimitatea dumneavoastră. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Înainte de a trimite jurnalele echipei de asistență, vă rugăm să revizuiți fișierul, deoarece acesta poate conține informații suplimentare pe care nu doriți să le împărtășiți. Dacă conține astfel de informații personale, vă recomandăm să le ștergeți mai întâi.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
