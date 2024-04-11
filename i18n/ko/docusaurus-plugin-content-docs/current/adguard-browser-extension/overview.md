---
title: 기능 개요
sidebar_position: 10
---

:::info

브라우저만 보호하는 AdGuard 브라우저 확장 프로그램에 관한 문서입니다. 기기 전체를 보호하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

AdGuard는 다양한 플랫폼에서 광고와 추적기를 차단하는 다양한 프로그램를 제공합니다. 가장 인기 있는 AdGuard 제품 중 하나는 5개의 주요 브라우저인 Chrome, Firefox, Edge, Opera, Yandex 브라우저에서 작동하는 무료 확장 프로그램입니다. Browser extensions include basic ad-blocking features but cannot be compared with full-featured desktop programs, such as [AdGuard for Windows](/adguard-for-windows/features/home-screen) and [AdGuard for Mac](/adguard-for-mac/features/main).

![Chrome용 AdGuard 브라우저 확장 프로그램 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## 호환성 {#br-extension}

[AdGuard 브라우저 확장 프로그램](https://adguard.com/adguard-browser-extension/overview.html)은 대부분의 주요 브라우저에서 사용할 수 있습니다. 브라우저의 부가 기능 스토어나 공식 웹사이트에서 쉽게 찾을 수 있습니다.

![대부분의 주요 브라우저에서 사용 가능 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

:::note

Safari용 독립 실행형 확장 프로그램이 있습니다. [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html) 출시 이후 대부분의 광고 차단 확장 프로그램에서 큰 문제가 발생했으며, 해당 프로그램의 많은 기능이 작동을 멈췄습니다. We had to develop a [separate extension for Safari](/adguard-for-safari/features/general) that has some differences in comparison with the extension described in this article.

:::

**각 확장 프로그램의 기능은 브라우저에 의해 엄격하게 제한된다는 것을 잊지 마세요.** 따라서 본격적인 보호를 받으려면 컴퓨터용 독립 실행형 프로그램을 설치하는 것이 좋습니다. 여기에는 [이유](#comparison)가 있습니다.

## 광고 차단 {#adblocker}

광고 차단은 모든 광고 차단기의 핵심 기능이며, AdGuard도 예외는 아닙니다. 확장 프로그램은 브라우저의 모든 페이지에서 광고를 성공적으로 차단합니다. 광고 차단은 소위 필터 목록 또는 [필터](/general/ad-filtering/how-ad-blocking-works)를 기반으로 합니다. 확장 프로그램 설정에서 필터를 활성화하거나 비활성화할 수 있습니다. 특정 필터를 활성화하여 광고 차단을 맞춤 설정할 수 있습니다.

### 필터 {#filters}

본질적으로 필터 목록은 특수 언어로 작성된 규칙 집합입니다. 광고 차단기는 규칙을 해석하고 이를 구현합니다. 결과적으로 웹페이지에 광고가 표시되지 않습니다.

![필터 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

모든 필터는 역할에 따라 분류됩니다. 예를 들어 광고 차단 필터, 프라이버시 보호 필터, 소셜 미디어 필터 등의 범주가 있습니다. 개별 필터 또는 전체 그룹을 한 번에 활성화할 수 있습니다.

![광고 차단 필터 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### 사용자 정의 필터 {#custom}

다른 필터 그룹의 기능은 어느 정도 예측할 수 있지만, *사용자 지정 필터* 라는 범주가 있어 추가적인 의문을 제기할 수 있습니다.

![사용자 정의 필터 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

이 탭에서는 기본적으로 확장 프로그램에 없는 필터를 추가할 수 있습니다. 인터넷에는 [공개적으로 사용 가능한 필터](https://filterlists.com)가 많이 있습니다. 또한 자신만의 필터를 만들고 추가할 수 있습니다. 필터 세트를 만들고 원하는 방식으로 광고 차단을 맞춤 설정할 수 있습니다.

필터를 추가하려면 *사용자 지정 필터 추가*를 클릭하고 추가하려는 필터의 URL 또는 파일 경로를 입력한 후 *다음*을 클릭합니다.

![사용자 정의 필터 추가 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### 사용자 규칙 {#user-rules}

*사용자 규칙*은 광고 차단을 맞춤 설정하는 데 도움이 되는 또 다른 도구입니다.

![사용자 규칙 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

새 규칙을 추가하는 방법에는 여러 가지가 있습니다. 가장 간단한 방법은 규칙을 직접 입력하는 것이지만 [규칙 구문](/general/ad-filtering/create-own-filters)에 대한 약간의 지식이 필요합니다.

텍스트 파일에서 바로 사용할 수 있는 필터 목록을 가져올 수도 있습니다. **서로 다른 규칙은 줄 바꿈으로 구분해야 합니다.** 바로 사용할 수 있는 필터 목록을 가져오려면 [사용자 지정 필터](#custom) 탭에서 하는 것이 좋습니다.

또한 자신만의 필터링 규칙을 내보낼 수도 있습니다. 이 옵션은 브라우저나 장치 간에 규칙 목록을 전송할 때 유용합니다.

웹사이트를 허용 목록에 추가하거나 (자세한 내용은 [아래](#allowlist) 참조) 페이지에서 요소를 숨기기 위해 어시스턴트 도구를 사용하면 해당 규칙이 *사용자 규칙*에도 저장됩니다.

### 허용 목록 {#allowlist}

*허용 목록*은 특정 웹사이트를 필터링에서 제외하는 데 사용됩니다. 목록에 있는 웹사이트에는 차단 규칙이 적용되지 않습니다.

![허용 목록 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

*허용 목록*을 반대로 사용할 수도 있습니다. 이 목록에 추가된 웹사이트를 제외한 모든 곳에서 광고 차단을 해제할 수 있습니다. 이렇게 하려면 *허용 목록 반전* 옵션을 활성화합니다.

![허용 목록 반전 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

허용 목록을 가져오거나 내보낼 수도 있습니다. 예를 들어 각 브라우저에 동일한 규칙을 적용하려는 경우 유용합니다.

## 스텔스 모드 {#stealth-mode}

*스텔스 모드*는 추적기 및 사기 사이트로부터 민감한 개인정보를 보호하는 것을 목표로 합니다.

![스텔스 모드 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

스텔스 모드에서는 웹사이트가 인터넷에서 해당 웹사이트를 찾는 데 사용한 검색어를 볼 수 없도록 하고, 쿠키(제3자 쿠키 포함)를 자동으로 삭제하는 등의 기능을 사용할 수 있습니다. 모든 기능에 대한 자세한 내용은 [별도 문서](/general/stealth-mode)에서 확인할 수 있습니다.

:::note

정식 앱에서 사용이 가능한 일부 *스텔스 모드* 옵션은 기술적 한계로 인해 확장 프로그램에서는 존재하지 않습니다.

:::

## 기타 기능 및 설정 {#other}

AdGuard 브라우저 확장 프로그램의 주요 모듈 외에도 확장 프로그램 설정의 *일반* 및 *추가 설정* 탭에서 설정 가능한 몇 가지 특정 기능이 존재합니다.

### 일반 {#general}

*일반* 탭에서 검색 광고 및 [웹사이트 자체 홍보](/general/ad-filtering/search-ads)를 허용하고 언어별 필터 자동 활성화나 필터 업데이트 주기 등을 지정할 수 있습니다.

![일반 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

또한 여기에서 [*피싱 및 멀웨어 방지*](/general/browsing-security)를 활성화할 수 있습니다.

*설정 내보내기* 버튼을 클릭하여 구성을 저장할 수 있습니다. 설정은 .json 파일로 저장됩니다. 이전에 만든 구성을 적용하려면 *설정 가져오기* 기능을 사용하세요. 다른 설정 프로필 간에 빠르게 전환하거나 다른 브라우저 간에 구성을 전송하는 데에도 사용할 수 있습니다.

### 추가 설정 {#misc}

*추가 설정* 범주에는 광고 차단 프로세스 및 애플리케이션 사용성과 관련된 다양한 설정이 포함되어 있습니다.

![추가 설정 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

이 탭에서 최적화된 필터를 활성화하고, 확장 프로그램 업데이트에 대한 알림을 사용 설정하고, *필터링 로그*를 열거나 차단된 광고 및 트래커의 통계를 지울 수 있습니다.

또한 적용된 규칙에 대한 통계(어떤 규칙이, 어떤 웹사이트에서, 얼마나 자주 트리거되는지 등)를 보내 필터 개발에 도움을 줄 수도 있습니다. 저희는 사용자의 동의 없이 데이터를 수집하지 않으므로 이 옵션은 기본적으로 비활성화되어 있습니다. 이 기능을 활성화하면 모든 데이터는 완전한 익명으로 전송됩니다.

### 정보 {#about}

*정보* 범주에서 현재 버전에 대한 정보, EULA 및 개인정보취급방침에 대한 링크, GitHub의 브라우저 확장 프로그램 저장소를 확인할 수 있습니다.

![정보 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## 확장 프로그램의 기본 메뉴 {#main-menu}

확장 프로그램의 메인 페이지는 브라우저의 도구 모음에서 확장 프로그램의 아이콘을 클릭하여 액세스할 수 있습니다.

![기본 메뉴 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

기본 페이지에서 페이지의 모든 요소를 수동으로 숨기거나(*사용자 규칙*에 해당 규칙이 추가됨), *필터링 로그*를 열어 브라우저의 트래픽에 대한 전체 정보를 확인하고 이동 중에 요청을 차단하거나 웹사이트의 보안 보고서를 확인할 수 있습니다. 또한 모든 웹사이트에 대한 불만 사항을 제출하고 (예: 페이지에 누락된 광고가 있는 경우 필터 개발자가 신고를 검토하여 문제를 해결합니다) 적용된 차단 규칙에 대한 통계를 확인할 수 있습니다.

브라우저에서 이루어진 모든 웹 요청은 *필터링 로그*에 각 요청에 대한 자세한 정보와 함께 표시됩니다. 예를 들어, *필터링 로그*를 통해 AdGuard 브라우저 확장 프로그램에서 차단한 요청들을 쉽게 모니터링할 수 있습니다. 또한 두 번의 클릭으로 모든 요청을 차단하거나 이전에 차단한 요청을 허용 목록에 추가할 수 있습니다. *필터링 로그* 에서 웹 요청을 정렬할 수 있는 다양한 옵션도 제공하므로 사용자 정의 규칙을 만들 때 유용하게 사용할 수 있습니다. 기본 메뉴에서 해당 항목을 선택하거나 설정 페이지(추가 설정 탭)에서 *필터링 로그*를 열 수 있습니다.

확장 프로그램의 주 메뉴 오른쪽 상단에 있는 아이콘을 클릭하면 콘텐츠 차단기 설정을 열거나 보호 기능을 일시 중지할 수 있습니다.

## AdGuard 확장 프로그램 vs. 독립 실행형 프로그램 {#comparison}

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ZGwceZP-0mM" title="YouTube 동영상 플레이어" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

브라우저 확장 프로그램과 비교했을 때 AdGuard 독립 실행형 프로그램의 가장 큰 장점은 모든 브라우저와 거의 모든 앱에서 광고를 차단할 수 있다는 점입니다. 여러 브라우저를 동시에 사용해도 앱이 모든 브라우저에서 광고와 온라인 위협을 동일하게 필터링합니다.

두 번째 차이점은 확장 프로그램 기반 광고 차단기의 가능성은 브라우저 가이드라인에 의해 엄격하게 제한된다는 점입니다. 브라우저 확장 프로그램은 광고 차단이 제한될 수 있는 브라우저의 정책을 준수해야 합니다. 따라서 일부 유형의 필터링 규칙은 확장 프로그램에서 지원되지 않습니다. 데스크톱 앱의 기능은 제한되지 않으므로 필터링 품질이 더 우수합니다.

AdGuard 브라우저 확장 프로그램은 무료이며, 설치가 쉽고 광고를 차단하며 온라인 위협에 대응하는 필터가 있습니다. 정식 앱의 경우 확장 프로그램 대비 더 강력하고 고급 기능 목록을 제공합니다. 아래 비교 표에서 모든 차이점을 확인하세요.

![확장 프로그램과 앱 비교 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` - 설치된 브라우저에서만 사용할 수 있으며 브라우저에 의해 제한을 받습니다.

`2` - 콘텐츠 차단기가 다른 확장 프로그램의 요청을 감지할 수 없습니다. 만약 악성 또는 추적 확장 프로그램이 광고나 당신의 활동을 추적하기 위해 서버에 요청을 보내는 경우, AdGuard 브라우저 확장 프로그램은 해당 요청을 차단할 수 없습니다.

`3` - 특정 브라우저 제한으로 인해 모든 유형의 광고 및 위협이 브라우저 확장 프로그램으로 차단되는 것은 아닙니다. 일부 요소는 페이지로 이동하여 로딩 프로세스가 느려질 수 있습니다. 또한 브라우저 기반 광고 차단기와 달리 AdGuard 앱은 광고가 브라우저에 로드되기 전에 차단합니다. 이렇게 하면 트래픽이 절약되고 페이지 로딩 속도가 빨라집니다.
