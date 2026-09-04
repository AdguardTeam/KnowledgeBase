---
title: Installing the AdGuard certificate in Gecko-based browsers
sidebar_position: 2
---

:::info

This article is about AdGuard for Linux, a multifunctional ad blocker that protects your device at the system level. To see how it works, [install AdGuard for Linux](https://adguard.com/adguard-linux/overview.html)

:::

To filter HTTPS traffic, AdGuard uses its own certificate. Unlike most browsers, Gecko-based browsers such as Firefox keep a separate certificate store, so you need to add it manually. Otherwise, HTTPS filtering won’t work.

We’ll use Firefox as an example. Other Gecko-based browsers work in a similar way, though some menu names may differ.

## Antes de começar

Make sure that:

- AdGuard for Linux is running
- HTTPS filtering is enabled

**Both are required to open the certificate link in the next step.**

## Install the certificate

Follow the instructions:

1. Download the [AdGuard certificate](https://local.adguard.org/cert).
2. Open Firefox.
3. Click the menu icon and open _Settings_.
4. Go to _Privacy and Security_, scroll down to the _Connection and software security_ part, and click _Advanced settings_.
5. Find the _Certificates_ section and click _Manage certificates_.
6. Select the _Authorities_ tab and click _Import_.
7. Select the file you downloaded earlier and click _Open_.
8. Choose _Trust this CA to identify websites_ and click _OK_.

Tudo pronto! HTTPS filtering should now work in your Gecko-based browser.
