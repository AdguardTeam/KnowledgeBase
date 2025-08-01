---
title: Safari 웹 확장 프로그램
sidebar_position: 3
---

웹 확장 프로그램은 Safari에 사용자 지정 기능을 추가합니다. 웹 확장 프로그램에 대한 [자세한 정보는 여기](https://developer.apple.com/documentation/safariservices/safari_web_extensions)에서 확인할 수 있습니다.

![Safari에서 웹 확장 프로그램의 모습 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

AdGuard의 Safari 웹 확장 프로그램은 iOS 15의 새로운 기능을 활용할 수 있는 도구입니다. 이는 iOS용 AdGuard의 기능을 향상시키는 역할을 합니다. 이를 통해 AdGuard는 고급 필터링 규칙을 적용하고 궁극적으로 더 많은 광고를 차단할 수 있습니다.

## AdGuard Safari 웹 확장 프로그램의 기능

기본적으로 Safari는 콘텐츠 차단기에게 기본 도구만 제공합니다. 이러한 도구는 다른 운영 체제(Windows, Mac, Android)의 콘텐츠 차단 프로그램에서 볼 수 있는 수준의 성능을 제공하지 않습니다. 예를 들어, 다른 플랫폼의 AdGuard 앱은 [CSS 규칙](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [확장 CSS 선택기](/general/ad-filtering/create-own-filters#extended-css-selectors) 및 [스크립틀릿](/general/ad-filtering/create-own-filters#scriptlets)과 같은 강력한 광고 방지 도구를 사용할 수 있습니다. 이러한 도구는 YouTube 광고와 같은 복잡한 광고를 처리할 때 절대적으로 필요한 도구입니다.

Safari용 AdGuard 웹 확장 프로그램은 이러한 모든 유형의 필터링 규칙을 적용할 수 있는 기능을 제공함으로써 AdGuard를 보완합니다.

그 외에도 AdGuard의 Safari 웹 확장 프로그램을 사용하면 브라우저에서 바로 iOS용 AdGuard를 빠르게 관리할 수 있습니다. *확장 프로그램* 버튼(직소 아이콘이 있는 버튼)을 탭합니다. 기기 유형에 따라 주소창 왼쪽 또는 오른쪽에 위치할 수 있습니다. 목록에서 **AdGuard**를 찾아서 탭합니다.

![웹 확장 프로그램 메뉴 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> iPad의 경우, 브라우저 주소 표시줄에서 AdGuard 아이콘을 탭하여 AdGuard의 Safari 웹 확장 프로그램에 바로 액세스할 수 있습니다.

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

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
