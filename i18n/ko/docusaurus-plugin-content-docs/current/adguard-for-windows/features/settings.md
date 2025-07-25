---
title: 설정
sidebar_position: 2
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

**설정**은 가장 중요한 섹션입니다. 여기에서 특정 항목 또는 사이트 차단, 신뢰할 수 있는 제공업체의 DNS 서버 사용, 타사 쿠키 삭제 등 요구사항에 따라 앱을 설정할 수 있습니다.

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### 일반 설정

여기에서 언어와 테마(다크 테마 또는 라이트 테마)를 설정하고, 시스템 시작 시 AdGuard를 실행하고 자동 업데이트를 무음으로 설정할 수 있습니다. 업데이트 채널과 업데이트 확인 간격 필터를 선택할 수도 있습니다. 또한 Windows용 AdGuard가 제대로 작동하지 않아 지원팀에서 [**디버그 로그 수집**](/adguard-for-windows/solving-problems/adguard-logs.md)을 요청하는 경우 설정으로 이동합니다.

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

화면 맨 아래에는 **고급 설정**이 있습니다. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

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

스텔스 모드의 작업을 유연하게 조정할 수 있습니다. 예를 들어, 인터넷에서 웹사이트를 찾을 때 사용한 검색 요청을 해당 웹사이트가 수신하지 못하도록 하거나, 타사 쿠키와 웹사이트 자체 쿠키를 자동으로 삭제하거나, 내 위치를 추적하는 데 사용할 수 있는 브라우저의 위치 공유를 비활성화할 수 있습니다.

스텔스 모드에 대해 자세히 알아보려면 [이 글](/general/stealth-mode)을 참조하세요.

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

### 자녀 보호

자녀가 사용하는 컴퓨터에서 액세스하지 못하도록 제한해야 하는 사이트가 몇 가지 있습니다. This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

이 모듈은 브라우저에서 열린 웹페이지의 콘텐츠를 확인하고 성인용 이미지 및 텍스트, 거친 언어, 폭력, 마약 선전 등 어린이에게 바람직하지 않은 콘텐츠가 포함된 웹페이지를 필터링합니다. 자녀 보호 설정은 자녀가 제한을 우회할 수 없도록 비밀번호로 보호됩니다. 이 모듈은 원치 않는 사이트로 연결되는 경로를 차단할 뿐만 아니라 검색 결과에서 어린이에게 부적절한 링크를 삭제할 수도 있습니다.

**자녀 보호** 모듈에서 **안전 검색**을 활성화하고 **차단 목록** 및 **허용 목록**을 관리하여 이 옵션의 작동 방식을 사용자 지정할 수 있습니다. 자녀가 컴퓨터에 소프트웨어를 다운로드하고 설치하지 못하도록 **실행 파일 다운로드 차단** 확인란을 선택할 수도 있습니다. **자녀 보호** 모듈에서 **자녀 보호 기능**으로 보호할 특정 Windows 사용자를 선택하고 AdGuard 설정을 변경하지 못하도록 보호할 암호를 설정할 수 있습니다.

### 브라우저 어시스턴트

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
