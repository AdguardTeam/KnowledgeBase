---
title: Safari 확장 프로그램
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Safari 확장 프로그램이란 무엇인가요?

Safari 확장 프로그램은 Safari 웹 브라우저에 기능을 추가하는 작은 소프트웨어 프로그램입니다. 이를 통해 사용자는 브라우저에 기본적으로 내장되어 있지 않은 기능을 추가하여 브라우징 환경을 개선할 수 있습니다. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## 작동 방식

웹사이트의 광고, 트래커 및 방해 요소를 차단하기 위해 AdGuard는 필터링 규칙을 사용합니다. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard General
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Custom
- AdGuard Other

각 콘텐츠 차단 확장 프로그램에는 최대 15만 개의 활성 필터링 규칙이 포함될 수 있습니다. 대부분의 필터 그룹 내 규칙 수는 15만 개를 넘지 않습니다. 그러나 언어별 또는 사용자 정의 필터를 너무 많이 활성화하면 한도를 초과할 수 있습니다. 이러한 경우 한도를 초과하는 임의의 규칙은 자동으로 비활성화되어 잘못된 차단으로 이어질 수 있습니다. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

아래에서 각 확장 프로그램에 대해 자세히 알아보세요.

## 콘텐츠 차단 확장 프로그램

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. 이 확장 프로그램은 포괄적인 광고 차단에 중점을 두며 특정 언어의 광고에 대한 필터를 포함합니다.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. 추적 메커니즘을 차단하고 브라우징 활동을 비공개로 유지합니다.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. 이 확장 프로그램은 잠재적으로 유해한 요소를 식별하고 차단하여 악성 콘텐츠로부터 사용자를 보호합니다.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## Safari용 AdGuard

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Safari용 확장 프로그램 관리 방법

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Safari용 AdGuard에 권한이 필요한 이유

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- 웹사이트의 보호 상태를 확인하고 어떤 고급 규칙을 적용해야 하는지 결정하려면 검색 기록에 액세스해야 합니다.

당사는 이 데이터를 다른 목적으로 사용하거나 누구와도 공유하지 않습니다. For more info, you can consult our [Privacy policy](https://adguard.com/privacy.html).
