---
title: "AdGuard Browser Extension MV2: where to use it and how to install it"
sidebar_position: 6
---

As Chrome Web Store no longer distributes and updates the MV2 version of AdGuard Browser Extension, many users ask whether MV2 will become static.

It won’t: **MV2 and MV3 are built together, and we continue to support MV2** as long as browsers allow Manifest V2 extensions. This includes:

- filtering engine updates
- filter updates
- bug fixes
- security fixes

For details on why MV2 was removed from publication in Chrome Web Store, see [our blog post](https://adguard.com/en/blog/adguard-adblocker-manifestv2-removal.html).

:::caution

To avoid conflicts, keep only **one ad blocker extension enabled** in your browser.

:::

## Browsers where you can still use MV2

### Brave

Brave supports MV2 through its own MV2 compatibility mode.

1. Open `brave://settings/extensions/v2`.
1. Enable MV2 extension support in Brave.
1. Install [AdGuard Ad Blocker MV2](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl).

Brave uses a self-hosted distribution model for this extension: the browser fetches the static build directly from AdGuard.

### ungoogled-chromium and portable Chromium builds

Many Chromium-based builds outside Chrome Web Store infrastructure still allow MV2 extensions.

You can use MV2 there in two ways:

- install [AdGuard Ad Blocker MV2](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) if your build supports Chrome Web Store installs
- install an unpacked MV2 build manually (recommended when Web Store install is unavailable)

### Helium (manual unpacked installation)

Helium supports manual installation of unpacked extensions.

1. Get an MV2 unpacked build of AdGuard Browser Extension.
1. Open Helium extension management page.
1. Enable *Developer mode*.
1. Click *Load unpacked*.
1. Select the MV2 extension folder.
1. Make sure the extension is enabled after installation.

For screenshots and the exact *Developer mode* → *Load unpacked* flow, see the *How to install unpacked in the browser* section in [this guide](/adguard-browser-extension/solving-problems/debug-rules/).
