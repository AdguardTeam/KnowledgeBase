---
title: Safari 웹 확장 프로그램
sidebar_position: 3
---

웹 확장 프로그램은 Safari에 사용자 지정 기능을 추가합니다. 웹 확장 프로그램에 대한 [자세한 정보는 여기](https://developer.apple.com/documentation/safariservices/safari_web_extensions)에서 확인할 수 있습니다.

![Safari에서 웹 확장 프로그램의 모습 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

AdGuard의 Safari 웹 확장 프로그램은 iOS 15의 새로운 기능을 활용할 수 있는 도구입니다. 이는 iOS용 AdGuard의 기능을 향상시키는 역할을 합니다. 이를 통해 AdGuard는 고급 필터링 규칙을 적용하고 궁극적으로 더 많은 광고를 차단할 수 있습니다.

## AdGuard Safari 웹 확장 프로그램의 기능

By default, Safari provides only basic tools for content blockers. These tools don't offer the level of performance found in content blockers on other operating systems (Windows, Mac, Android). For example, AdGuard apps on other platforms can use such powerful anti-ad weapons as [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Unfortunately, these utilities are absolutely irreplaceable when dealing with more complex cases, such as pre-roll ads on YouTube.

Safari용 AdGuard 웹 확장 프로그램은 이러한 모든 유형의 필터링 규칙을 적용할 수 있는 기능을 제공함으로써 AdGuard를 보완합니다.

그 외에도 AdGuard의 Safari 웹 확장 프로그램을 사용하면 브라우저에서 바로 iOS용 AdGuard를 빠르게 관리할 수 있습니다. *확장 프로그램* 버튼(직소 아이콘이 있는 버튼)을 탭합니다. 기기 유형에 따라 주소창 왼쪽 또는 오른쪽에 위치할 수 있습니다. 목록에서 **AdGuard**를 찾아서 탭합니다.

![웹 확장 프로그램 메뉴 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)

> On iPads, AdGuard's Safari web extension can be accessed directly by tapping the AdGuard icon in the browser's address bar.

다음과 같은 옵션 목록이 표시됩니다.

- **웹사이트에서 보호 기능 활성화/비활성화하기**. 스위치를 끄면 현재 웹사이트에 대해 AdGuard가 완전히 비활성화되고 각각의 제외 규칙이 추가됩니다. 스위치를 다시 켜면 웹사이트에 대한 보호가 다시 시작되고 규칙이 삭제됩니다. 이러한 변경 사항이 적용되려면 어느 정도 시간이 필요합니다.

- **페이지의 요소를 수동으로 차단**. *이 페이지에서 요소 차단* 버튼을 탭하면 요소 차단 팝업이 표시됩니다. 페이지에서 숨기려는 요소를 선택하고 선택 영역을 조정한 다음 변경 사항을 미리 보고 제거를 확인합니다. 해당 필터링 규칙이 AdGuard에 추가됩니다(나중에 비활성화하거나 삭제하여 변경 사항을 되돌릴 수 있음).

- **문제 신고하기**. 위로 스와이프하여 *문제 신고하기* 버튼을 표시합니다. 누락된 광고 또는 현재 페이지에서 발생한 기타 문제를 신고하는 데 사용합니다.

## AdGuard의 Safari 웹 확장 프로그램을 활성화하는 방법

:::note

AdGuard의 Safari 웹 확장 프로그램은 작동을 위해 웹페이지의 콘텐츠에 액세스해야 하지만 광고 차단 이외의 다른 목적으로는 사용하지 않습니다.

:::

### iOS 설정

웹 확장 프로그램은 독립형 도구가 아니며 iOS용 AdGuard가 필요합니다. 기기에 iOS용 AdGuard가 설치되어 있지 않은 경우, [먼저 설치](../installation)한 후 온보딩 프로세스를 완료하세요.

완료되면 *설정 → Safari → 확장 프로그램*을 엽니다.

!["Safari" 선택 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

!["확장 프로그램" 선택 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

**이 확장 프로그램 허용** 섹션을 찾은 다음 사용 가능한 확장 프로그램 중에서 **AdGuard**를 찾습니다.

![확장 프로그램 허용 섹션에서 "AdGuard"를 선택하기](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

탭한 다음 스위치를 전환합니다. 같은 화면에서 AdGard의 *모든 웹사이트* 권한을 *허용* 또는 *요청*으로 설정합니다. *허용*을 선택하면 새 웹사이트를 방문할 때마다 권한을 부여할 필요가 없습니다. 확실하지 않은 경우, 사이트별로 권한 부여 *요청*을 선택하세요.

![확장 프로그램 설정 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

### Safari

You can also enable the AdGuard extension from the Safari browser. To do it, tap *Extensions* (if you don't see it next to the address bar, tap the `aA` icon).

![Safari에서 aA 아이콘을 탭하기 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

그런 다음 목록에서 *확장 프로그램 관리* 옵션을 찾아 탭합니다. 열린 창에서 **AdGuard** 옆에 있는 스위치를 켭니다.

![확장 프로그램 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![확장 프로그램 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

이 방법을 사용하는 경우, Safari 설정으로 이동하여 AdGuard 확장 프로그램에 필요한 권한을 부여해야 할 수도 있습니다.

이제 사용 가능한 확장 프로그램에서 AdGuard를 볼 수 있을 것입니다. 탭한 다음 노란색 **i** 아이콘을 탭합니다. *켜기* 버튼을 탭하고 작업을 확인하여 **고급 보호**를 사용하도록 설정합니다.

:::note

프리미엄 구독 없이 iOS용 AdGuard를 사용하는 경우, **고급 보호** 기능을 사용할 수 없습니다.

:::

또는 앱의 **보호** 탭(하단 아이콘 줄 왼쪽에서 두 번째)에서 직접 **고급 보호** 기능을 설정할 수 있습니다.

AdGuard의 Safari 웹 확장 프로그램은 iOS 버전 15 이상에서만 작동합니다.
