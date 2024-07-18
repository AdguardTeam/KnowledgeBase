---
title: Manual certificate installation
sidebar_position: 1
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard for Mac needs to install the root certificate into certificate storage to be able to [filter HTTPS traffic](/general/https-filtering/what-is-https-filtering). This action is performed automatically in most cases as you run the app for the first time, but users of Gecko-based browsers (Firefox, Waterfox etc.) who have a master password set up for their browser may be required to take additional steps (because these browsers use their own certificate storage instead of the system one). They need to either enter the master password when prompted (to grant AdGuard access to the certificate storage) or manually install the certificate.

To manually install the certificate into Firefox-like browser:

  1. Open *Preferences*

  2. Go to *Privacy & Security* → *Certificates*

  3. Click *View Certificates*

  4. Navigate to the *Authorities* tab and click the *Import...* button

  5. Select file `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` or just download it from http://local.adguard.org/cert using a Chromium-based browser (e.g Google Chrome or new Edge) and with a HTTPS-filtering running in AdGuard

Exact actions required for different Gecko-based browsers may vary, but the general sequence and the path to `AdGuard Personal CA.cer` file will be the same.

P.S.: For [Setapp application version](https://setapp.com/apps/adguard) the file path is the following: `/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer`
