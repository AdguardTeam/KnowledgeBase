---
title: 필터
sidebar_position: 1
---

:::info

브라우저만 보호하는 AdGuard 브라우저 확장 프로그램에 관한 문서입니다. 전체 기기를 보호하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

광고 차단은 모든 광고 차단기의 핵심 기능이며 AdGuard 브라우저 확장 프로그램도 예외는 아닙니다. 광고 차단은 특수 언어로 작성된 규칙 집합인 필터를 기반으로 합니다. 이러한 규칙은 어떤 요소를 차단해야 하고 어떤 요소를 차단하지 말아야 하는지를 알려줍니다. AdGuard는 규칙을 해석하고 이를 기반으로 웹 요청을 수정합니다. 결과적으로 웹페이지에 광고가 표시되지 않습니다.

![필터 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

모든 필터는 역할에 따라 분류됩니다. 예를 들어 광고 차단 필터, 프라이버시 보호 필터, 소셜 미디어 필터 등의 범주가 있습니다. 개별 필터 또는 전체 그룹을 한 번에 활성화할 수 있습니다.

![광고 차단 필터 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## 사용자 정의 필터

다른 필터 그룹의 기능은 설명이 필요 없을 것 같지만, **사용자 정의**이라는 필터 그룹은 설명이 좀 더 필요한 것 같습니다.

![사용자 정의 필터 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

이 탭에서는 기본적으로 확장 프로그램에 없는 필터를 추가할 수 있습니다. [인터넷에는 공개적으로 사용 가능한 필터](https://filterlists.com)가 많이 있습니다. 또한 자신만의 필터를 만들고 추가할 수 있습니다. 필터 세트를 만들고 원하는 방식으로 광고 차단을 맞춤 설정할 수 있습니다.

필터를 추가하려면 **사용자 정의 필터 추가**를 클릭하고 추가하려는 필터의 URL 또는 파일 경로를 입력한 후 **다음**을 클릭합니다.

![사용자 정의 필터 추가 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## 사용자 규칙 {#user-rules}

**사용자 규칙**은 광고 차단을 맞춤 설정하는 데 도움이 되는 또 다른 도구입니다.

![사용자 규칙 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

새 규칙을 추가하는 방법에는 여러 가지가 있습니다. 가장 간단한 방법은 규칙을 입력하는 것이지만, [규칙 구문](/general/ad-filtering/create-own-filters)에 대한 지식이 필요합니다.

텍스트 파일에서 바로 사용할 수 있는 필터 목록을 가져올 수도 있습니다. **서로 다른 규칙은 줄 바꿈으로 구분해야 합니다**. 바로 사용할 수 있는 필터 목록을 가져오는 것은 사용자 정의 필터 탭에서 하는 것이 좋습니다.

또한 자신만의 필터링 규칙을 내보낼 수도 있습니다. 이 옵션은 브라우저나 장치 간에 규칙 목록을 전송할 때 유용합니다.

웹사이트를 허용 목록에 추가하거나(자세한 내용은 아래 참조) 페이지에서 요소를 숨기기 위해 어시스턴트 도구를 사용하면 해당 규칙이 **사용자 규칙**에도 저장됩니다.

## 허용 목록

**허용 목록**은 특정 웹사이트를 필터링에서 제외하는 데 사용됩니다. 목록에 있는 웹사이트에는 차단 규칙이 적용되지 않습니다.

![허용 목록 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

**허용 목록**을 반대로 사용할 수도 있습니다. 이 목록에 추가된 웹사이트를 제외한 모든 곳에서 광고 차단을 해제할 수 있습니다. 이렇게 하려면 허용 목록 **반전 옵션**을 활성화합니다.

![허용 목록 반전 \*border] (https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

허용 목록을 가져오거나 내보낼 수도 있습니다. 예를 들어 각 브라우저에 동일한 규칙을 적용하려는 경우 유용합니다.
