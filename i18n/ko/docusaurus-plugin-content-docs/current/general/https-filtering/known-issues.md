---
title: 'HTTPS 필터링: 알려진 문제'
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Last update: September 17, 2024

이 글을 읽으려면 암호화, TLS 및 HTTPS에 대한 기본적인 지식이 필요할 수 있습니다.

아래의 그림에서 HTTPS 필터링 작동 방식을 확인할 수 있습니다.

![HTTPS 필터링이란 무엇인가요?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard는 브라우저에서 사용하는 TLS 연결 속성을 복사합니다.

- AdGuard는 동일한 TLS 버전을 사용합니다.
- AdGuard는 브라우저와 동일한 암호화 방법(ciphers)을 사용합니다.

최신의 안전한 브라우저를 사용하는 경우, 알려진 TLS 문제에 대처하고 안전하지 않은 암호를 사용하지 않습니다.

**인증서의 유효성이 의심되는 경우**, AdGuard는 도메인에 대한 모든 연결의 필터링을 중단하고 브라우저가 모든 결정을 담당하도록 합니다.

## 알려진 문제

AdGuard의 HTTPS 필터링에는 단점이 있지만, 이미 이에 대한 업데이트 계획을 가지고 있습니다.

알려진 문제는 다음과 같습니다.

### 실제 인증서 확인

HTTPS 필터링을 사용하는 경우, 웹사이트에서 사용하는 실제 인증서가 숨겨집니다. 실제 인증서를 확인할 수 없으며 AdGuard에서 발급한 인증서만 볼 수 있습니다.

This problem can be solved in 2 ways:

- By using our [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website

  ![Certificate Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the *Recent activity* section in AdGuard for Android or the *Filtering log* section in AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. To view the certificate using this method, follow the instructions below.

#### Inspect original certificate in AdGuard for Android

1. Click the Statistics icon on the navigation bar.
2. Go to *Recent activity*.
3. Click the request whose certificate you want to inspect to open the request details.
4. Scroll down to *Original certificate*. Click for more info.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspect original certificate in AdGuard for Windows

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Under the *TLS* section, click *View website certificate*.

![Filtering log AdGuard for Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspect original certificate in AdGuard for macOS

1. Click the gear icon. In the drop-down menu, go to *Advanced* → *Filtering log...*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Click *View certificate*.

![Filtering log AdGuard for Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### 인증서 투명성(Certificate Transparency)

최신 암호화 덕분에 브라우저는 가짜 SSL 인증서를 가진 악성 웹사이트를 탐지할 수 있습니다. 그러나 브라우저는 해킹된 인증 기관에서 발급한 인증서를 사용하거나 실제 인증 기관에서 실수로 발급한 인증서를 사용하는 악성 사이트를 탐지할 수 없습니다. 인증서 투명성은 SSL 인증서 발급 프로세스를 개방적이고 투명하게 만들어 이러한 위협으로부터 보호하도록 설계되었습니다.

**1.11** 버전부터 [CoreLibs](https://github.com/AdguardTeam/CoreLibs/)를 사용하는 AdGuard 제품은 [Chrome 인증서 투명성 정책](https://googlechrome.github.io/CertificateTransparency/ct_policy.html)에 기반한 정책을 구현합니다.

## 의견이나 제안이 있나요?

의견, 제안 또는 질문이 있으시면 `devteam@adguard.com`으로 문의해 주십시오.
