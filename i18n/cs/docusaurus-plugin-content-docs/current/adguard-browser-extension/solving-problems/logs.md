---
title: Jak exportovat protokoly ze stránky na pozadí
sidebar_position: 1
---

## Exportování protokolů ze stránky na pozadí v rozšíření

### Chrome

1. Otevřete rozšíření prohlížeče AdGuard a pokud je to možné, zopakujte akce, které vedly k chybě. Zaznamenejte přesný čas, kdy k chybě došlo.

2. Přejděte na `chrome://extensions`.

3. Povolte _Režim pro vývojáře_.

   ![Developer mode \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Klikněte na `background.html`.

   ![Background \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Otevřete kartu _Konzola_.

   ![The Console tab \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Otevřete kontextovou nabídku a vyberte _Uložit jako…_.

   ![Save as \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Otevřete rozšíření prohlížeče AdGuard a pokud je to možné, zopakujte akce, které vedly k chybě. Zaznamenejte přesný čas, kdy k chybě došlo.

2. Přejděte na `about:addons`.

3. Klikněte na _Doplňky ladění_.

   ![Debug Add-ons \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Klikněte na _Zkontrolovat_.

   ![Inspect \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Přejděte na kartu _Konzola_.

   ![Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Klikněte na _Uložit všechny zprávy do souboru_.

   ![Save \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Odesílání záznamů

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
