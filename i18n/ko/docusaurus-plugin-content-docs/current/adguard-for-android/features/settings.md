---
title: 설정
sidebar_position: 4
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Android용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요

:::

**설정** 탭은 화면 하단의 가장 오른쪽 아이콘을 클릭하여 열 수 있습니다. 이 섹션에는 다양한 설정, 앱, 라이선스 및 구독에 대한 정보, 지원 정보가 포함되어 있습니다.

## 보통

이 섹션에서는 색상 테마 및 언어를 설정하고 알림 등을 관리할 수 있습니다. AdGuard 팀이 앱 충돌을 감지하고 사용성을 조사하는 데 도움을 주고 싶다면 **충돌 자동 보고** 및 **기술 및 상호 작용 데이터 전송**을 활성화할 수 있습니다.

![일반 \*mobile\_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

**앱과 필터 업데이트**에서 자동 필터 업데이트를 설정하고 앱 업데이트 채널을 선택할 수 있습니다. 더 안정적인 버전을 사용하려면 **정식 버전**를 선택하고, 새로운 기능을 가장 먼저 사용해보고 싶다면 **베타** 또는 **Nightly**을 선택하세요.

![업데이트 \*mobile\_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### 고급 설정

**자동화**를 사용하면 태스커 앱을 통해 AdGuard를 관리할 수 있습니다.

**Watchdog**은 AdGuard가 시스템에 의해 비활성화되지 않도록 보호합니다 ([Android의 배터리 절약 모드에 대해 자세히 알아보기](/adguard-for-android/solving-problems/background-work/)). 입력하는 값은 감시 확인 사이의 간격(초)이 됩니다.

**로깅 수준**은 앱 성능에 대한 어떤 데이터를 기록할지 정의합니다. 기본적으로 앱은 이벤트에 대한 데이터를 수집합니다. **디버그 로깅 수준**은 더 많은 이벤트를 기록합니다. 문제가 있는 경우, 이 수준은 AdGuard 팀이 문제를 더 잘 이해하는 데 도움이 됩니다. 하지만 리소스를 더 많이 소모하므로 지원팀에서 요청하는 경우에만 활성화하는 것이 좋습니다. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![고급 \*mobile\_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

**로우 레벨 설정** 섹션은 고급 사용자를 위한 섹션입니다. [로우 레벨 설정에 대해 자세히 알아보기](/adguard-for-android/solving-problems/low-level-settings/)

![로우 레벨 설정 \*mobile\_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## 필터링

이 섹션에서는 HTTPS 필터링 설정, 필터, 유저스크립트를 관리하고 프록시 서버를 설정할 수 있습니다.

![필터링 \*mobile\_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### 필터

AdGuard는 필터의 규칙을 적용하여 광고, 추적기 및 성가신 광고를 차단합니다. **보호** 섹션의 대부분의 기능은 [AdGuard 필터](/general/ad-filtering/adguard-filters/#adguard-filters)를 기반으로 작동합니다. **기본 보호**를 활성화하면 AdGuard 베이스 필터와 AdGuard 모바일 광고 필터가 자동으로 켜집니다. 두 필터를 모두 끄면 **기본 보호** 기능도 비활성화됩니다.

![필터 \*mobile\_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

기본적으로 활성화된 필터만으로도 AdGuard를 정상적으로 작동할 수 있습니다. 그러나 광고 차단을 맞춤 설정하려면 다른 AdGuard 또는 타사 필터를 사용할 수 있습니다. 이렇게 하려면 카테고리를 선택하고 원하는 필터를 활성화합니다. 사용자 정의 필터를 추가하려면 **사용자 정의 필터** → **사용자 정의 필터 추가**를 탭하고 해당 URL 또는 파일 경로를 입력합니다.

:::note

필터를 너무 많이 활성화하면 일부 웹사이트가 제대로 작동하지 않을 수 있습니다.

:::

[필터에 대해 자세히 알아보기](https://adguard.com/en/blog/what-are-filters.html)

### 유저스크립트

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. 유저스크립트를 설치하려면 특별한 유저스크립트 관리자가 필요합니다. AdGuard에는 이러한 기능이 있으며 URL 또는 파일에서 유저스크립트를 추가할 수 있습니다.

![유저스크립트 \*mobile\_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra는 복잡한 광고와 웹사이트에 광고를 다시 삽입하는 메커니즘을 차단하는 유저스크립트입니다.

#### AMP 비활성화

AMP 비활성화는 [가속화된 모바일 페이지](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages)를 비활성화하는 유저스크립트입니다.

### 네트워크

#### HTTPS 필터링

대부분의 웹사이트와 앱에서 광고와 추적기를 차단하려면 AdGuard가 HTTPS 트래픽을 필터링해야 합니다. [HTTPS 필터링에 대해 자세히 알아보기](/general/https-filtering/what-is-https-filtering)

##### 보안 인증서

암호화된 트래픽을 관리하기 위해 AdGuard는 기기에 CA 인증서를 설치합니다. 기기에 CA 인증서를 설치하는 것은 안전합니다. 트래픽은 로컬로 필터링되고 AdGuard는 연결의 보안을 확인합니다.

Android의 이전 버전에서는 인증서가 자동으로 설치됩니다. Android 11 이상에서는 수동으로 설치해야 합니다. [설치 지침](/adguard-for-android/solving-problems/manual-certificate/)

사용자 저장소에 있는 CA 인증서는 브라우저와 일부 앱에서 HTTPS 트래픽을 필터링하는 데 충분합니다. 그러나 시스템 저장소의 인증서만 신뢰하는 앱도 있습니다. HTTPS 트래픽을 필터링하려면 시스템 저장소에 AdGuard의 CA 인증서를 설치해야 합니다. [지침](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS로 필터링된 앱

이 섹션에서는 AdGuard가 HTTPS 트래픽을 필터링하는 앱 목록을 확인할 수 있습니다. 이 설정은 사용자 저장소와 시스템 저장소에 모두 CA 인증서가 있는 경우에만 모든 앱에 적용할 수 있습니다.

##### HTTPS로 필터링된 웹사이트

이 설정을 사용하면 AdGuard가 HTTPS 트래픽을 필터링해야 하는 웹사이트를 관리할 수 있습니다.

HTTPS 필터링을 통해 AdGuard는 요청 및 응답의 콘텐츠를 필터링할 수 있지만, 이 데이터를 수집하거나 저장하지 않습니다. 그러나 보안을 강화하기 위해 [민감한 정보가 포함될 가능성이 있는 웹사이트는 HTTPS 필터링에서 제외합니다](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

다음 모드 중 하나를 선택하여 원하는 사이트를 예외 목록에 추가할 수도 있습니다.

- 특정 웹사이트를 HTTPS 필터링에서 제외
- 예외 목록에 추가된 웹사이트에서만 HTTPS 트래픽 필터링

또한 기본적으로 금융 웹사이트와 같이 EV(Extended Validation) 인증서를 사용하는 웹사이트는 필터링하지 않습니다. 필요한 경우 **EV 인증서가 있는 웹사이트를 필터링** 옵션을 활성화할 수 있습니다.

#### 프록시

프록시 서버를 통해 모든 기기의 트래픽을 라우팅하도록 AdGuard를 설정할 수 있습니다. [아웃바운드 프록시 설정 방법](/adguard-for-android/solving-problems/outbound-proxy)

이 섹션에서는 VPN 제공업체가 허용하는 경우, 타사 VPN을 AdGuard와 함께 작동하도록 설정할 수 있습니다.

**프록시를 통해 작동하는 앱** 아래에서 지정한 프록시를 통해 트래픽을 라우팅할 앱을 선택할 수 있습니다. **AdGuard VPN과의 통합**을 활성화한 경우, 이 설정을 사용하면 AdGuard VPN 터널을 통해 라우팅할 앱을 지정하여 AdGuard VPN의 앱 예외 목록 역할을 합니다.

#### 라우팅 모드

이 섹션에서는 트래픽 필터링 방법을 선택할 수 있습니다.

- **로컬 VPN**은 로컬에서 생성한 VPN을 통해 트래픽을 필터링합니다. 이것은 가장 안정적인 모드입니다. Android 제한으로 인해 루팅되지 않은 기기에서 사용할 수 있는 유일한 시스템 전체 트래픽 필터링 방법이기도 합니다.

:::note

**로컬 VPN** 모드에서는 AdGuard를 다른 VPN과 동시에 사용할 수 없습니다. AdGuard와 함께 다른 VPN을 사용하려면 프록시 모드에서 작동하도록 재설정하고 AdGuard에서 아웃바운드 프록시를 설정해야 합니다. AdGuard VPN의 경우, \*\*[통합 모드](/adguard-for-android/features/integration-with-vpn)\*\*의 도움으로 이 작업이 자동으로 수행됩니다.

:::

- _자동 프록시_는 VPN을 사용할 필요가 없는 대체 트래픽 라우팅 방법입니다. 한 가지 중요한 장점은 VPN과 병렬로 실행할 수 있다는 것입니다. 이 모드에는 루트 액세스 권한이 필요합니다.

- **수동 프록시**는 특정 포트에 프록시 서버를 설정하는 것입니다(Wi-Fi 설정에서 구성할 수 있음). 이 모드를 사용하려면 Android 10 이상에서 루트 액세스 권한이 필요합니다.

## 라이선스

이 섹션에서는 라이선스에 대한 정보를 찾고 라이선스를 관리할 수 있습니다.

- AdGuard 라이선스를 구매하여 [정식 버전의 기능](/adguard-for-android/features/free-vs-full)을 활성화하세요.
- AdGuard 계정에 로그인하거나 라이선스 키를 입력하여 라이선스를 활성화하세요.
- 아직 7일 체험판을 사용하지 않았다면 가입하여 활성화하세요.
- Refresh the license status from the three-dots menu (⋮)
- AdGuard 계정을 열어 라이선스를 관리하세요.
- 이 라이선스의 기기 제한에 도달하여 다른 라이선스를 적용하려면 라이선스를 초기화하세요.

![라이선스 화면 \*mobile\_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## 고객 지원

이 섹션은 Android용 AdGuard에 대한 질문이나 제안 사항이 있는 경우, 도움이 될 것입니다. 지원팀에 문의하기 전에 **[FAQ](https://adguard.com/support/adguard_for_android.html)** 또는 지식창고를 참조하는 것이 좋습니다.

![고객 지원 \*mobile\_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

누락된 광고를 발견하면 **잘못된 차단 신고**를 통해 신고해 주세요.

예기치 않은 앱 동작이 발생하면 **버그 신고**를 선택합니다. 가능하면 문제를 자세히 설명하고 앱 로그를 추가하세요. [문제를 설명하는 방법](/guides/report-bugs/#how-to-describe-a-problem)

기능을 제안하려면 **기능 요청**을 사용하세요.

:::note

GitHub는 버그를 보고하고 새로운 기능을 제안하는 또 다른 방법입니다. [지침 및 리포지토리 링크](/guides/report-bugs/#adguard-for-android)

:::
