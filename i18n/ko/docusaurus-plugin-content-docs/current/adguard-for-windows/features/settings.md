---
title: 설정
sidebar_position: 2
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

**설정**은 가장 중요한 섹션입니다. 여기에서 특정 항목 또는 사이트 차단, 신뢰할 수 있는 제공업체의 DNS 서버 사용, 타사 쿠키 삭제 등 요구사항에 따라 앱을 설정할 수 있습니다.

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Ad blocking

광고 차단기는 사용자가 방문하는 웹사이트와 앱에서 광고를 제거하는 Windows용 AdGuard의 메인 모듈입니다. 배너, 팝업 또는 추적기와 같은 광고 및 개인정보를 위협하는 콘텐츠를 필터링하기 위해 AdGuard는 다양한 필터([특수 구문](/general/ad-filtering/create-own-filters)으로 작성된 유사한 목적을 가진 규칙 그룹)를 사용합니다. 필터가 무엇인지, 어떻게 작동하는지 이해하려면 [이글](/general/ad-filtering/how-ad-blocking-works)을 참조하세요.

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- 언어별 필터를 자동으로 활성화할 수 있습니다.
- [검색 광고 및 셀프 홍보](/general/ad-filtering/search-ads) 차단을 비활성화합니다.
- Windows 11의 시작 메뉴에서 광고를 비활성화합니다.
- **AdGuard 베이스 필터**와 같은 사전 설치된 필터를 활성화합니다.
- 목록에서 필터를 설치하거나 **필터 추가** 버튼을 클릭하여 사용자 정의 필터를 추가합니다.
- **필터 편집기** 버튼을 사용하여 기존 규칙 그룹을 변경합니다.
- **필터링 로그** 버튼을 클릭하면 컴퓨터에 설치된 브라우저와 앱에서 보낸 모든 요청을 확인할 수 있습니다. 여기에서 사용자 정의 규칙을 만들어 모든 요청을 차단하거나 차단 해제할 수도 있습니다.
- 수동으로 작성하거나 가져온 규칙 또는 AdGuard 어시스턴트 확장 프로그램을 사용하여 만든 자체 규칙으로 필터를 작성할 수 있습니다.

자신만의 규칙을 수동으로 작성하기 전에 자세한 [구문 가이드](/general/ad-filtering/create-own-filters)를 읽어보세요.

### Tracking protection

많은 웹사이트는 IP 주소, 설치된 브라우저 및 운영 체제 정보, 화면 해상도, 심지어 사용자가 방문했거나 리디렉션된 페이지 등 방문자에 대한 정보를 수집합니다. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

You can flexibly adjust the work of _Tracking protection_: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### 브라우징 보안

브라우징 보안은 악성 및 피싱 웹사이트에 대한 강력한 보호 기능을 제공합니다. 아니요, Windows용 AdGuard는 바이러스 백신이 아닙니다. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. 이 모듈의 작동 방식에 대한 자세한 내용은 [이 글](/general/browsing-security)에서 확인할 수 있습니다.

이 모듈에서는 다음을 수행할 수 있습니다.

- 알림을 활성화하여 악성 및 피싱 사이트로의 요청을 차단합니다.
- 소리 알림을 활성화합니다.
- 악성 및 피싱 웹사이트 데이터베이스를 최신 상태로 유지하는 데 도움이 되도록 익명의 보안 관련 정보를 AdGuard 서버에 제출하는 데 동의합니다.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

브라우징 보안에 대해 자세히 알아보려면 [이글](/general/browsing-security)을 참조하세요.

### DNS 보호

DNS 보호 설정을 살펴봐야 하는 세 가지 중요한 이유가 있습니다. 첫째, ISP의 추적을 피하기 위해서입니다. 예를 들어 'google.com'과 같은 웹사이트를 열 때마다 브라우저는 DNS 서버에 요청을 보내 해당 웹사이트의 IP 주소를 얻습니다. 일반적으로 DNS 서버는 ISP에 속해 사용자의 온라인 활동을 추적할 수 있습니다. 둘째, DNS 트래픽을 암호화하기 위해서입니다. 세 번째는 [DNS 수준에서 콘텐츠를 차단](https://adguard-dns.io/kb/general/dns-filtering/)하는 것입니다.

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

Windows용 AdGuard의 DNS 보호 모듈에서 광고 및 추적기를 차단하는 AdGuard DNS, 성인 콘텐츠도 차단하는 AdGuard DNS 가족 보호 또는 안전하고 안정적인 연결을 제공하지만 아무것도 필터링하지 않는 AdGuard DNS 비필터링 등 알려진 DNS 제공업체의 DNS 서버를 선택할 수 있습니다. [DNS 규칙 구문](https://adguard-dns.io/kb/general/dns-filtering-syntax/)을 사용하여 사용자 정의 DNS 서버와 규칙을 추가할 수도 있습니다. 필요한 경우 [원하는 DNS 필터](https://filterlists.com)를 추가할 수 있습니다.

v7.20부터는 미리 구축된 신뢰할 수 있는 필터 목록에서 필터를 선택하기만 하면 필터를 추가할 수도 있습니다. 사용자의 편의를 위해 네 가지 카테고리로 분류했습니다.

- **일반**: 광고 및 추적기 차단
- **지역**: 언어별 웹사이트의 광고 및 추적기 차단
- **보안**: 피싱 및 신뢰할 수 없는 웹사이트 차단
- **기타**: 위의 범주에 속하지 않는 특수한 사용 사례 차단

![DNS 필터링 \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

자녀가 사용하는 컴퓨터에서 액세스하지 못하도록 제한해야 하는 사이트가 몇 가지 있습니다. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

이 모듈은 브라우저에서 열린 웹페이지의 콘텐츠를 확인하고 성인용 이미지 및 텍스트, 거친 언어, 폭력, 마약 선전 등 어린이에게 바람직하지 않은 콘텐츠가 포함된 웹페이지를 필터링합니다. Parental control settings are password-protected so that the child is not able to go round the restrictions. 이 모듈은 원치 않는 사이트로 연결되는 경로를 차단할 뿐만 아니라 검색 결과에서 어린이에게 부적절한 링크를 삭제할 수도 있습니다.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. 자녀가 컴퓨터에 소프트웨어를 다운로드하고 설치하지 못하도록 **실행 파일 다운로드 차단** 확인란을 선택할 수도 있습니다. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### 브라우저 어시스턴트

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
