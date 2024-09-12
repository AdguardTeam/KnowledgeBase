---
title: Known issues
sidebar_position: 2
---

Last update: September 20, 2022

Understanding this article may require some basic knowledge about encryption, TLS, and HTTPS.

First, look at this simple diagram that shows the general structure of the HTTPS protocol:

![What is HTTPS filtering?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copies properties of the TLS connection that your browser uses:

- AdGuard uses the same TLS version
- AdGuard uses the same encrypting methods (ciphers) as your browser

Effectively, it means that if you use a modern, safe browser, it will take all known TLS problems into account and won’t attempt to use unsafe ciphers.

**What does AdGuard do when there are any doubts about the certificate’s validity?** In such cases, AdGuard entirely ceases filtering of all connections to this domain and leaves the browser in charge of all decisions.

## Known issues

HTTPS filtering in AdGuard has its drawbacks. Almost all of them are scheduled to be eliminated in the next few AdGuard versions.

All the issues known to us and the ETAs on their fixes are listed below.

### Inspecting the original certificate

The most important drawback of the HTTPS filtering mechanism is that it hides the real certificate of a website. You cannot simply check its original certificate because you can only see the one issued by AdGuard.

This problem can be solved in 2 ways:

- By using our [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website

![Certificate Browser Assistant](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the section *Recent activity* on AdGuard for Android or *Filtering log* on AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. To view the certificate using this method, follow the instructions below.

On AdGuard for Android:

1. Click the Statistics icon on the navigation bar.
2. Go to *Recent activity*.
3. Click the request whose certificate you want to inspect to open the request details.
4. Scroll down to *Original certificate*. Click for more info.

![Recent activity AdGuard for Android](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

On AdGuard for Windows:

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Under the section *TLS*, click *View website certificate*.

![Filtering log AdGuard for Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

On AdGuard for Mac:

1. Click the gear icon. On the dropdown menu, go to *Advanced* → *Filtering log...*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Click *View certificate*.

![Filtering log AdGuard for Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Certificate Transparency

Thanks to modern cryptography, browsers can usually detect malicious websites that are provisioned with forged or fake SSL certificates. However, current cryptographic mechanisms aren’t so good at detecting malicious websites if they’re provisioned with mistakenly issued certificates or certificates that have been issued by a certificate authority (CA) that’s been compromised or gone rogue. Certificate Transparency aims to remedy these certificate-based threats by making the issuance and existence of SSL certificates open to scrutiny by domain owners, CAs, and domain users.

AdGuard products which use [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) starting with version **1.11** will implement a policy based on [Chrome Certificate Transparency Policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Have remarks or suggestions?

If you’d like to add something, report any errors, or ask a question, please contact us at: `devteam@adguard.com`.
