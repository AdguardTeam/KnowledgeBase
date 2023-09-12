---
title: Browser-protected pages
sidebar_position: 4
---

:::info

Questo articolo riguarda l'Estensione di browser AdGuard, che protegge solo il tuo browser. To protect your entire device, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## Browser-protected pages

When using a web extension like AdGuard Browser Extension, there are certain restricted domains that prohibit access or permissions. As a result, ad blocking extensions are not allowed to interact with or modify the content of these pages. In other words, they are not allowed to block ads and other annoying elements on these web pages.

### Chromium browser restrictions

Chromium-based browsers, such as Google Chrome, maintain a list of restricted domains that extensions are not allowed to access. These domains include:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- URLs starting with `chrome://`, `chrome-extension://`, or `https://chrome.google.com/webstore/`
- PDF files
- Pages where Javascript is disabled
- Security warning pages
- Error pages such as 404 errors and network errors
- URLs starting with `view-source:` or `data:`

### Firefox browser restrictions

Similarly, the Firefox browser has its own set of restricted domains where extensions are not permitted to operate. These restricted domains include:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

### Modifying restrictions in Firefox

Changing advanced settings can affect the stability and security of Firefox. This is recommended for advanced users only. If you are aware of the associated risk and still wish to enable add-ons disallowed on a protected page, follow the steps below:

1. Click the menu button → **Add-ons and themes** → **Extensions**.
2. Click the extension you want to enable on sites with restrictions (In this case, AdGuard).
3. Select **Allow** in the section **Run on sites with restrictions**.

Alternatively, you can:

1. Open a new tab and type **about:config** in the address bar.
2. Press **Return**. You may encounter a warning. In this case, click **Accept the Risk and Continue**.
3. Search for `extensions.webextensions.restrictedDomains`. If you can’t find this preference, you can create it. Simply select the **Boolean** type and click **+** to add it.
4. Click the toggle button next to this preference and change its value to `false`.
5. Restart Firefox.

For further information on this subject, read [the article on Mozilla’s support website](https://mzl.la/3POXoWi).
