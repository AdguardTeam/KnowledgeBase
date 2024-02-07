---
title: How to export logs from the background page
sidebar_position: 1
---

## Exporting logs from the background page in the extension

### Chrome 浏览器

1. Open AdGuard Browser Extension and, if possible, repeat the actions that led to the error. Note the exact time when the error occurred.

2. Navigate to `chrome://extensions`.

3. Enable _Developer mode_.

   ![Developer mode \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Click `background.html`.

   ![Background \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Open the tab _Console_.

   ![The Console tab \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Open the context menu and select _Save as…_.

   ![Save as \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox 浏览器

1. Open AdGuard Browser Extension and, if possible, repeat the actions that led to the error. Note the exact time when the error occurred.

2. Navigate to `about:addons`.

3. Click _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Click _Inspect_.

   ![Inspect \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Go to the tab _Console_.

   ![Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Click _Save all Messages to File_.

   ![Save \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Sending logs

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
