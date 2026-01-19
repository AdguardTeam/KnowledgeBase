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

![일반 \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

**앱과 필터 업데이트**에서 자동 필터 업데이트를 설정하고 앱 업데이트 채널을 선택할 수 있습니다. 더 안정적인 버전을 사용하려면 **정식 버전**를 선택하고, 새로운 기능을 가장 먼저 사용해보고 싶다면 **베타** 또는 **Nightly**을 선택하세요.

![업데이트 \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### 고급 설정

**자동화**를 사용하면 태스커 앱을 통해 AdGuard를 관리할 수 있습니다.

**Watchdog**은 AdGuard가 시스템에 의해 비활성화되지 않도록 보호합니다 ([Android의 배터리 절약 모드에 대해 자세히 알아보기](/adguard-for-android/solving-problems/background-work/)). 입력하는 값은 감시 확인 사이의 간격(초)이 됩니다.

**로깅 수준**은 앱 성능에 대한 어떤 데이터를 기록할지 정의합니다. 기본적으로 앱은 이벤트에 대한 데이터를 수집합니다. **디버그 로깅 수준**은 더 많은 이벤트를 기록합니다. 문제가 있는 경우, 이 수준은 AdGuard 팀이 문제를 더 잘 이해하는 데 도움이 됩니다. 하지만 리소스를 더 많이 소모하므로 지원팀에서 요청하는 경우에만 활성화하는 것이 좋습니다. [로그 수집 및 전송에 대해 자세히 알아보기](/adguard-for-android/solving-problems/log/)

![고급 \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

**로우 레벨 설정** 섹션은 고급 사용자를 위한 섹션입니다. [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![로우 레벨 설정 \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## 필터링

이 섹션에서는 HTTPS 필터링 설정, 필터, 유저스크립트를 관리하고 프록시 서버를 설정할 수 있습니다.

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### 필터

AdGuard는 필터의 규칙을 적용하여 광고, 추적기 및 성가신 광고를 차단합니다. **보호** 섹션의 대부분의 기능은 [AdGuard 필터](/general/ad-filtering/adguard-filters/#adguard-filters)를 기반으로 작동합니다. **기본 보호**를 활성화하면 AdGuard 베이스 필터와 AdGuard 모바일 광고 필터가 자동으로 켜집니다. 두 필터를 모두 끄면 **기본 보호** 기능도 비활성화됩니다.

![필터 \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

기본적으로 활성화된 필터만으로도 AdGuard를 정상적으로 작동할 수 있습니다. 그러나 광고 차단을 맞춤 설정하려면 다른 AdGuard 또는 타사 필터를 사용할 수 있습니다. 이렇게 하려면 카테고리를 선택하고 원하는 필터를 활성화합니다. 사용자 정의 필터를 추가하려면 **사용자 정의 필터** → **사용자 정의 필터 추가**를 탭하고 해당 URL 또는 파일 경로를 입력합니다.

:::note

필터를 너무 많이 활성화하면 일부 웹사이트가 제대로 작동하지 않을 수 있습니다.

:::

[필터에 대해 자세히 알아보기](https://adguard.com/en/blog/what-are-filters.html)

### 확장 프로그램

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### Disable AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### 네트워크

#### HTTPS 필터링

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. 필요한 경우, **EV 인증서가 있는 웹사이트를 필터링** 옵션을 활성화할 수 있습니다.

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- _Local VPN_ filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

:::note

Please note that DNS filtering will still be active in _Automatic proxy_ routing mode, and your device may not be able to filter DNS requests from specific apps. In _VPN_ routing mode, apps are excluded from the local VPN by system means. Therefore, the system resolver sees which apps are included in the VPN and which are not. It either allows them into the local VPN or lets them bypass it. However, DNS requests come from the system resolver, not the application. In _Automatic proxy_ mode, it is only possible to exclude traffic from applications, not their DNS queries, because AdGuard sees them as system queries.

:::

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## 라이선스

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the activation code to activate your license
- Sign up to activate your 14-day trial period. The activation code can be used on different devices and platforms
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/android/settings/licensetab.png)

## 고객 지원

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
