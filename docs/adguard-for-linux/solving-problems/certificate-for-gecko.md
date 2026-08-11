---
title: Installing the AdGuard certificate in Gecko-based browsers
sidebar_position: 2
---

:::info

This article is about AdGuard for Linux, a multifunctional ad blocker that protects your device at the system level. To see how it works, [install AdGuard for Linux](https://adguard.com/adguard-linux/overview.html)

:::

To filter HTTPS traffic, AdGuard uses its own certificate. Unlike most browsers, Gecko-based browsers such as Firefox keep a separate certificate store, so you need to add it manually. Otherwise, HTTPS filtering won’t work.

We’ll use Firefox as an example. Other Gecko-based browsers work in a similar way, though some menu names may differ.

## Before you start

Make sure that:

- AdGuard for Linux is running
- HTTPS filtering is enabled

**Both are required to open the certificate link in the next step.**

## Install the certificate

Follow the instructions:

1. Download the [AdGuard certificate](https://local.adguard.org/cert).
1. Open Firefox.
1. Click the menu icon and open *Settings*.
1. Go to *Privacy and Security*, scroll down to the *Connection and software security* part, and click *Advanced settings*.
1. Find the *Certificates* section and click *Manage certificates*.
1. Select the *Authorities* tab and click *Import*.
1. Select the file you downloaded earlier and click *Open*.
1. Choose *Trust this CA to identify websites* and click *OK*.

All done! HTTPS filtering should now work in your Gecko-based browser.
