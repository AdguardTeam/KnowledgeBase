---
title: 필터
sidebar_position: 1
---

:::info

브라우저만 보호하는 AdGuard 브라우저 확장 프로그램에 관한 문서입니다. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. 결과적으로 웹페이지에 광고가 표시되지 않습니다.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

모든 필터는 역할에 따라 분류됩니다. 예를 들어 광고 차단 필터, 프라이버시 보호 필터, 소셜 미디어 필터 등의 범주가 있습니다. 개별 필터 또는 전체 그룹을 한 번에 활성화할 수 있습니다.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## 사용자 정의 필터

While the features of other filter groups are more or less predictable, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

이 탭에서는 기본적으로 확장 프로그램에 없는 필터를 추가할 수 있습니다. There are plenty of [publicly available filters on the Internet](https://filterlists.com). 또한 자신만의 필터를 만들고 추가할 수 있습니다. 필터 세트를 만들고 원하는 방식으로 광고 차단을 맞춤 설정할 수 있습니다.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

새 규칙을 추가하는 방법에는 여러 가지가 있습니다. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

텍스트 파일에서 바로 사용할 수 있는 필터 목록을 가져올 수도 있습니다. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

또한 자신만의 필터링 규칙을 내보낼 수도 있습니다. 이 옵션은 브라우저나 장치 간에 규칙 목록을 전송할 때 유용합니다.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## 허용 목록

The _allowlist_ is used to exclude certain websites from filtering. 목록에 있는 웹사이트에는 차단 규칙이 적용되지 않습니다.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

허용 목록을 가져오거나 내보낼 수도 있습니다. 예를 들어 각 브라우저에 동일한 규칙을 적용하려는 경우 유용합니다.
