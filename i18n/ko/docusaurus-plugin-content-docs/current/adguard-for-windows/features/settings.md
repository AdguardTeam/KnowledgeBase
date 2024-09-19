---
title: 설정
sidebar_position: 2
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

**설정**은 가장 중요한 섹션입니다. 여기에서 특정 항목 또는 사이트 차단, 신뢰할 수 있는 제공업체의 DNS 서버 사용, 타사 쿠키 삭제 등 요구사항에 따라 앱을 설정할 수 있습니다.

![설정 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### 일반 설정

여기에서 언어와 테마(다크 테마 또는 라이트 테마)를 설정하고, 시스템 시작 시 AdGuard를 실행하고 자동 업데이트를 무음으로 설정할 수 있습니다. 업데이트 채널과 업데이트 확인 간격 필터를 선택할 수도 있습니다. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![고급 설정 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

화면 맨 아래에는 **고급 설정**이 있습니다. 이 중 일부를 변경하면 AdGuard에 문제가 발생하거나 인터넷 연결이 중단되거나 보안 및 개인정보가 손상될 수 있습니다. 따라서 이 섹션은 자신이 무엇을 하고 있는지 확실하거나 지원팀에서 문의한 경우에만 여는 것이 좋습니다. **고급 설정**에서 설정할 수 있는 항목이 무엇인지 알고 싶으시면 [전용 문서](/adguard-for-windows/solving-problems/low-level-settings.md)를 참조하세요.

### 광고 차단기

광고 차단기는 사용자가 방문하는 웹사이트와 앱에서 광고를 제거하는 Windows용 AdGuard의 메인 모듈입니다. 배너, 팝업 또는 트래커와 같은 광고 및 개인 정보를 위협하는 콘텐츠를 필터링하기 위해 AdGuard는 다양한 필터([특수 구문](/general/ad-filtering/create-own-filters)으로 작성된 유사한 목적을 가진 규칙 그룹)를 사용합니다. 필터가 무엇인지, 어떻게 작동하는지 이해하려면 [이글](/general/ad-filtering/how-ad-blocking-works)을 참조하세요.

![광고 차단기 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

광고 차단기 모듈에서는 다음을 수행할 수 있습니다.

- 언어별 필터를 자동으로 활성화할 수 있습니다.
- [검색 광고 및 셀프 홍보](/general/ad-filtering/search-ads) 차단을 비활성화합니다.
- Windows 11의 시작 메뉴에서 광고를 비활성화합니다.
- **AdGuard 베이스 필터**와 같은 사전 설치된 필터를 활성화합니다.
- 목록에서 필터를 설치하거나 **필터 추가** 버튼을 클릭하여 사용자 정의 필터를 추가합니다.
- **필터 편집기** 버튼을 사용하여 기존 규칙 그룹을 변경합니다.
- **필터링 로그** 버튼을 클릭하면 컴퓨터에 설치된 브라우저와 앱에서 보낸 모든 요청을 확인할 수 있습니다. 여기에서 사용자 정의 규칙을 만들어 모든 요청을 차단하거나 차단 해제할 수도 있습니다.
- 수동으로 작성하거나 가져온 규칙 또는 AdGuard 어시스턴트 확장 프로그램을 사용하여 만든 자체 규칙으로 필터를 작성할 수 있습니다.

자신만의 규칙을 수동으로 작성하기 전에 자세한 [구문 가이드](/general/ad-filtering/create-own-filters)를 읽어보세요.

### 스텔스 모드

많은 웹사이트는 IP 주소, 설치된 브라우저 및 운영 체제 정보, 화면 해상도, 심지어 사용자가 방문했거나 리디렉션된 페이지 등 방문자에 대한 정보를 수집합니다. 일부 웹페이지에서는 쿠키를 사용하여 브라우저를 표시하고 개인 설정, 사용자 환경설정을 저장하거나 다음 방문 시 사용자를 '인식'합니다. 스텔스 모드는 이러한 데이터 및 통계 수집 시스템으로부터 개인 정보를 보호합니다.

![스텔스 모드 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

스텔스 모드의 작업을 유연하게 조정할 수 있습니다. 예를 들어, 인터넷에서 웹사이트를 찾을 때 사용한 검색 요청을 해당 웹사이트가 수신하지 못하도록 하거나, 타사 쿠키와 웹사이트 자체 쿠키를 자동으로 삭제하거나, 내 위치를 추적하는 데 사용할 수 있는 브라우저의 위치 공유를 비활성화할 수 있습니다.

스텔스 모드에 대해 자세히 알아보려면 [이 글](/general/stealth-mode)을 참조하세요.

### 브라우징 보안

브라우징 보안은 악성 및 피싱 웹사이트에 대한 강력한 보호 기능을 제공합니다. 아니요, Windows용 AdGuard는 바이러스 백신이 아닙니다. 바이러스가 이미 시작된 경우 다운로드를 중지하거나 이미 존재하는 바이러스를 삭제하지 않습니다. 하지만 '신뢰할 수 없는 사이트' 데이터베이스에 추가된 도메인이 있는 웹사이트로 이동하거나 해당 웹사이트에서 파일을 다운로드하려고 하면 경고 메시지가 표시됩니다. 이 모듈의 작동 방식에 대한 자세한 내용은 [이 글](/general/browsing-security)에서 확인할 수 있습니다.

이 모듈에서는 다음을 수행할 수 있습니다.

- 알림을 활성화하여 악성 및 피싱 사이트로의 요청을 차단합니다.
- 소리 알림을 활성화합니다.
- 악성 및 피싱 웹사이트 데이터베이스를 최신 상태로 유지하는 데 도움이 되도록 익명의 보안 관련 정보를 AdGuard 서버에 제출하는 데 동의합니다.

![브라우징 보안 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

브라우징 보안에 대해 자세히 알아보려면 [이글](/general/browsing-security)을 참조하세요.

### DNS 보호

DNS 보호 설정을 살펴봐야 하는 세 가지 중요한 이유가 있습니다. 첫째, ISP의 추적을 피하기 위해서입니다. 예를 들어 'google.com'과 같은 웹사이트를 열 때마다 브라우저는 DNS 서버에 요청을 보내 해당 웹사이트의 IP 주소를 얻습니다. 일반적으로 DNS 서버는 ISP에 속해 사용자의 온라인 활동을 추적할 수 있습니다. 둘째, DNS 트래픽을 암호화하기 위해서입니다. 세 번째는 [DNS 수준에서 콘텐츠를 차단](https://adguard-dns.io/kb/general/dns-filtering/)하는 것입니다.

![DNS 보호 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

Windows용 AdGuard의 DNS 보호 모듈에서 광고 및 추적기를 차단하는 AdGuard DNS, 성인 콘텐츠를 추가로 차단하는 [AdGuard DNS](https://adguard-dns.io/kb/) 가족 보호 또는 안전하고 안정적인 연결을 제공하지만 아무것도 필터링하지 않는 AdGuard DNS 비필터링을 포함하여 알려진 DNS 제공업체의 DNS 서버를 선택할 수 있습니다. 사용자 정의 DNS 서버를 추가할 수도 있습니다. 또한 [DNS 규칙 구문](https://adguard-dns.io/kb/general/dns-filtering-syntax/)을 사용하여 사용자 정의 규칙을 추가하는 옵션도 있습니다. 필요한 경우 [원하는 DNS 필터](https://filterlists.com)를 추가할 수 있습니다.

### 자녀 보호

자녀가 사용하는 컴퓨터에서 액세스하지 못하도록 제한해야 하는 사이트가 몇 가지 있습니다. 이 작업은 자녀 보호 기능을 통해 수행됩니다.

![자녀 보호 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

이 모듈은 브라우저에서 열린 웹 페이지의 콘텐츠를 확인하고 성인용 이미지 및 텍스트, 거친 언어, 폭력, 마약 선전 등 어린이에게 바람직하지 않은 콘텐츠가 포함된 웹 페이지를 필터링합니다. 자녀 보호 설정은 자녀가 제한을 우회할 수 없도록 비밀번호로 보호됩니다. 이 모듈은 원치 않는 사이트로 연결되는 경로를 차단할 뿐만 아니라 검색 결과에서 어린이에게 부적절한 링크를 삭제할 수도 있습니다.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. 자녀가 컴퓨터에 소프트웨어를 다운로드하고 설치하지 못하도록 **실행 파일 다운로드 차단** 확인란을 선택할 수도 있습니다. **자녀보호** 모듈에는 두 가지 옵션이 더 있습니다: **자녀보호**로 보호할 특정 Windows 사용자를 선택하고, 비밀번호를 설정하여 AdGuard 설정이 변경되지 않도록 보호할 수 있습니다.

![자녀 보호 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### 브라우저 어시스턴트

![브라우저 어시스턴트 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

이 탭에서 브라우저에서 직접 필터링을 관리하는 주요 기능인 AdGuard 브라우저 어시스턴트 설치를 쉽게 진행할 수 있습니다. 브라우저 어시스턴트 사용 방법과 사용 중인 브라우저에 브라우저 어시스턴트가 없는 경우 어떻게 해야 하는지에 대한 자세한 내용은 [이 글](/adguard-for-windows/browser-assistant.md)에서 확인할 수 있습니다.
