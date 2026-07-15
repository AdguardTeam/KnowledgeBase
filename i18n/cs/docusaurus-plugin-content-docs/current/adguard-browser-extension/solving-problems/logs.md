---
title: Jak exportovat protokoly ze stránky na pozadí
sidebar_position: 1
---

## Exportování protokolů ze stránky na pozadí v rozšíření

### Chrome

1. Otevřete rozšíření prohlížeče AdGuard a pokud je to možné, zopakujte akce, které vedly k chybě. Zaznamenejte přesný čas, kdy k chybě došlo.

2. Přejděte na `chrome://extensions`.

3. Povolte _Režim pro vývojáře_.

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Otevřete rozšíření prohlížeče AdGuard a pokud je to možné, zopakujte akce, které vedly k chybě. Zaznamenejte přesný čas, kdy k chybě došlo.

2. Přejděte na `about:addons`.

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Klikněte na _Zkontrolovat_.

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Odesílání záznamů

:::note

AdGuard se zavazuje chránit vaše soukromí. Přísně dodržujeme naše [Zásady ochrany osobních údajů](https://adguard.com/privacy/browser-extension.html) a neshromažďujeme žádné soukromé informace o uživatelích. Před odesláním protokolů týmu podpory si soubor prohlédněte, protože může obsahovat další informace, které nechcete sdílet. Pokud takové osobní údaje obsahuje, doporučujeme je nejprve smazat.

:::

Po shromáždění záznamů postupujte podle následujících kroků a odešlete je našemu vývojovému týmu:

1. Nahlaste chybu na [GitHub] (https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Odešlete archiv se záznamy a časem na adresu `devteam@adguard.com` a připojte odkaz na svůj problém na GitHubu. Archiv můžete také nahrát na Disk Google a místo přiložení souboru k němu přidat odkaz.
