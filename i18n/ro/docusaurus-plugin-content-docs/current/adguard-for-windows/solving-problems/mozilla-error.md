---
title: How to fix the `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` error
sidebar_position: 11
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Some users of AdGuard for Windows with enabled [HTTPS filtering](/general/https-filtering/what-is-https-filtering) are unable to access certain websites like google.com and youtube.com. Instead of opening a website, browsers with Strict Certificate Pinning would display a `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` error.

Here is a list of impacted browsers:

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

If your default browser is one of these, do the following to solve the problem:

1. Type `about:config` in the address bar of your browser
2. In the menu that appears, enter `security.cert_pinning.enforcement_level` in the search field.
3. Change the `security.cert_pinning.enforcement_level` parameter from 2 to 1.
