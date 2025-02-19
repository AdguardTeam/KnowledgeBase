---
title: 'HTTPS 필터링: 알려진 문제'
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

마지막 업데이트: 2024년 9월 17일

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

이 문제는 두 가지 방법으로 해결할 수 있습니다.

- [브라우저 어시스턴트](https://adguard.com/adguard-assistant/overview.html)를 사용합니다. 어시스턴트를 사용하면 브라우저에서 바로 필터링을 관리하고 모든 웹사이트의 원본 인증서를 확인할 수 있습니다.

  ![인증서 브라우저 어시스턴트 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- Android용 AdGard의 *최근 활동* 섹션 또는 Windows 및 Mac용 AdGard의 *필터링 로그* 섹션을 방문합니다. 브라우저 어시스턴트에서는 웹사이트의 인증서만 볼 수 있지만, 최근 활동에서는 브라우저 어시스턴트 사용 여부에 관계없이 하위 요청 또는 브라우저에 사용된 모든 서버의 인증서를 검사할 수 있습니다. 이 방법을 사용하여 인증서를 보려면 아래 지침을 따르세요.

#### Android용 AdGuard에서 원본 인증서를 검사하는 방법

1. 탐색 모음에서 통계 아이콘을 클릭합니다.
2. *최근 활동*으로 이동합니다.
3. 인증서를 검사하려는 요청을 클릭하여 요청 세부 정보를 엽니다.
4. 아래로 스크롤하여 *원본 인증서*로 이동합니다. 자세한 내용을 보려면 클릭하세요.

![Android용 AdGuard 최근 활동 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Windows용 AdGuard에서 원본 인증서를 검사하는 방법

1. *설정* → *광고 차단기* → *필터링 로그*로 이동합니다.
2. 인증서를 검사하려는 요청을 클릭하여 요청 세부 정보를 엽니다.
3. *TLS* 섹션에서 *웹사이트 인증서 보기*를 클릭합니다.

![Windows용 AdGuard 필터링 로그 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### macOS용 AdGuard에서 원본 인증서를 검사하는 방법

1. 톱니바퀴 아이콘을 클릭합니다. 드롭다운 메뉴에서 *고급* → *로그 필터링....*으로 이동합니다.
2. 인증서를 검사하려는 요청을 클릭하여 요청 세부 정보를 엽니다.
3. *인증서 보기*를 클릭합니다.

![Mac용 AdGuard 필터링 로그 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### 인증서 투명성(Certificate Transparency)

최신 암호화 덕분에 브라우저는 가짜 SSL 인증서를 가진 악성 웹사이트를 탐지할 수 있습니다. 그러나 브라우저는 해킹된 인증 기관에서 발급한 인증서를 사용하거나 실제 인증 기관에서 실수로 발급한 인증서를 사용하는 악성 사이트를 탐지할 수 없습니다. 인증서 투명성은 SSL 인증서 발급 프로세스를 개방적이고 투명하게 만들어 이러한 위협으로부터 보호하도록 설계되었습니다.

**1.11** 버전부터 [CoreLibs](https://github.com/AdguardTeam/CoreLibs/)를 사용하는 AdGuard 제품은 [Chrome 인증서 투명성 정책](https://googlechrome.github.io/CertificateTransparency/ct_policy.html)에 기반한 정책을 구현합니다.

## 의견이나 제안이 있나요?

의견, 제안 또는 질문이 있으시면 `devteam@adguard.com`으로 문의해 주십시오.
