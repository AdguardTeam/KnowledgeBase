---
title: How to export logs from the background page
sidebar_position: 1
---

## Exporting logs from the background page in the extension

### Chrome

1. Open the AdGuard Browser extension and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
1. Navigate to `chrome://extensions`
1. Enable *Developer mode*

    ![Developer mode *border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

1. Click `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

1. Open the tab *Console*

    ![The Console tab *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Open the context menu and select *Save as…*

    ![Save as *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Open the AdGuard Browser extension and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
1. Navigate to `about:addons`
1. Click *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Click *Inspect*

    ![Inspect *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Go to the tab *Console*

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Click *Save all Messages to File*

    ![Save *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Sending logs

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on GitHub.
1. Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. You can also add an archive with logs and playback time to Google Drive and share it via `devteam@adguard.com`, attaching the Google Drive link to your email.
