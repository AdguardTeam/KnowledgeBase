---
title: Bilinen sorunlar
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Son güncelleme: 17 Eylül 2024

Understanding this article may require some basic knowledge about encryption, TLS, and HTTPS.

First, look at this simple diagram that shows the general structure of the HTTPS protocol:

![What is HTTPS filtering?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copies properties of the TLS connection that your browser uses:

- AdGuard uses the same TLS version
- AdGuard uses the same encrypting methods (ciphers) as your browser

Effectively, it means that if you use a modern, safe browser, it will take all known TLS problems into account and won’t attempt to use unsafe ciphers.

**What does AdGuard do when there are any doubts about the certificate’s validity?** In such cases, AdGuard entirely ceases filtering of all connections to this domain and leaves the browser in charge of all decisions.

## Bilinen sorunlar

HTTPS filtering in AdGuard has its drawbacks. Almost all of them are scheduled to be eliminated in the next few AdGuard versions.

All the issues known to us and the ETAs on their fixes are listed below.

### Inspecting the original certificate

The most important drawback of the HTTPS filtering mechanism is that it hides the real certificate of a website. You cannot simply check its original certificate because you can only see the one issued by AdGuard.

Bu sorun 2 şekilde çözülebilir:

- [Tarayıcı Asistanımızı](https://adguard.com/adguard-assistant/overview.html) kullanarak. Bu tarayıcı uzantısı, filtrelemeyi doğrudan tarayıcıdan yönetmenize yardımcı olur ve herhangi bir web sitesinin orijinal sertifikasını incelemenize olanak tanır

  ![Sertifika Tarayıcı Asistanı *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the *Recent activity* section in AdGuard for Android or the *Filtering log* section in AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. Bu yöntemi kullanarak sertifikayı görüntülemek için aşağıdaki talimatları izleyin.

#### Inspect original certificate in AdGuard for Android

1. Gezinme çubuğundaki İstatistikler simgesine tıklayın.
2. Go to *Recent activity*.
3. İstek ayrıntılarını açmak için sertifikasını incelemek istediğiniz isteğe tıklayın.
4. Scroll down to *Original certificate*. Daha fazla bilgi için tıklayın.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspect original certificate in AdGuard for Windows

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. İstek ayrıntılarını açmak için sertifikasını incelemek istediğiniz isteğe tıklayın.
3. Under the *TLS* section, click *View website certificate*.

![Windows için AdGuard filtreleme günlüğü *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspect original certificate in AdGuard for macOS

1. Dişli çark simgesine tıklayın. Açılır menüde, *Gelişmiş* → *Filtreleme günlüğü....* öğesine gidin.
2. İstek ayrıntılarını açmak için sertifikasını incelemek istediğiniz isteğe tıklayın.
3. *Sertifikayı görüntüle* öğesine tıklayın.

![Mac için AdGuard filtreleme günlüğü *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Certificate Transparency

Thanks to modern cryptography, browsers can usually detect malicious websites that are provisioned with forged or fake SSL certificates. However, current cryptographic mechanisms aren’t so good at detecting malicious websites if they’re provisioned with mistakenly issued certificates or certificates that have been issued by a certificate authority (CA) that’s been compromised or gone rogue. Certificate Transparency aims to remedy these certificate-based threats by making the issuance and existence of SSL certificates open to scrutiny by domain owners, CAs, and domain users.

AdGuard products which use [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) starting with version **1.11** will implement a policy based on [Chrome Certificate Transparency Policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Have remarks or suggestions?

If you’d like to add something, report any errors, or ask a question, please contact us at: `devteam@adguard.com`.
