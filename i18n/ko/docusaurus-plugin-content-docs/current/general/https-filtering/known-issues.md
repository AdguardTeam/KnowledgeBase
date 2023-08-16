---
title: 'HTTPS 필터링: 알려진 문제'
sidebar_position: 2
---

Last update: September 20, 2022

Understanding this article may require some basic knowledge about encryption, TLS, and HTTPS.

First, look at this simple diagram that shows the general structure of the HTTPS protocol:

![What is HTTPS filtering](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copies properties of the TLS connection that your browser uses:

- AdGuard는 동일한 TLS 버전을 사용합니다.
- AdGuard는 브라우저와 동일한 암호화 방법(ciphers)을 사용합니다.

Effectively, it means that if you use a modern, safe browser, it will take all known TLS problems into account and won’t attempt to use unsafe ciphers.

**What does AdGuard do when there are any doubts about the certificate’s validity?** In such cases, AdGuard entirely ceases filtering of all connections to this domain and leaves the browser in charge of all decisions.

## 알려진 문제

HTTPS filtering in AdGuard has its drawbacks. Almost all of them are scheduled to be eliminated in the next few AdGuard versions.

All the issues known to us and the ETAs on their fixes are listed below.

### 실제 인증서 확인

The most important drawback of the HTTPS filtering mechanism is that it hides the real certificate of a website. You cannot simply check its original certificate because you can only see the one issued by AdGuard.

This problem is solved in [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website.

### 인증서 투명성(Certificate Transparency)

Thanks to modern cryptography, browsers can usually detect malicious websites that are provisioned with forged or fake SSL certificates. However, current cryptographic mechanisms aren’t so good at detecting malicious websites if they’re provisioned with mistakenly issued certificates or certificates that have been issued by a certificate authority (CA) that’s been compromised or gone rogue. Certificate Transparency aims to remedy these certificate-based threats by making the issuance and existence of SSL certificates open to scrutiny by domain owners, CAs, and domain users.

AdGuard products which use [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) starting with version **1.11** will implement a policy based on [Chrome Certificate Transparency Policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## 의견이나 제안이 있나요?

If you’d like to add something, report any errors, or ask a question, please contact us at: `devteam@adguard.com`.
