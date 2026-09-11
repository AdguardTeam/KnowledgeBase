---
title: 기능 개요
sidebar_position: 1
---

:::info

Safari 브라우저만 보호하는 Safari용 AdGuard에 관한 문서입니다. 기기 전체를 보호하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

Safari용 AdGuard는 광고 차단 확장 프로그램에 대한 Apple의 제한 사항을 준수하도록 설계되었으며 가장 널리 사용되는 Safari용 광고 차단기입니다. Although it can't be compared to our desktop ad blocking apps, it's free and can protect you from ads, trackers, phishing, and malicious websites.

## 일반 {#general}

![일반 탭](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

첫 번째 탭은 알림, 업데이트 간격, 시스템 시작 시 AdGuard 실행 등의 설정을 구성할 수 있는 일반 화면입니다. 메뉴 표시줄에 AdGuard 아이콘을 표시하도록 선택할 수도 있습니다. 또한 [콘텐츠 차단기](#contentblockers)를 켜서 광고, 추적기,방해 요소 등을 차단할 수 있습니다.

## 필터 {#filters}

![필터 탭](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

필터는 특별한 구문으로 작성된 규칙 목록입니다. 콘텐츠 차단기는 이러한 규칙을 사용하여 광고 또는 위험한 사이트에 대한 요청을 차단합니다.

필터는 *광고 차단, 프라이버시, 소셜 위젯 , 방해 요소, 보안, 특정 언어, 사용자 지정 필터 및 기타 필터*의 8가지 카테고리로 결합됩니다.

[AdGuard 필터](/general/ad-filtering/adguard-filters) 또는 [광고 필터링](/general/ad-filtering/how-ad-blocking-works)에 대해 자세히 알아보세요.

필터 탭에서 전체 카테고리 또는 개별 필터를 활성화할 수 있습니다. 필터 탭의 변경 사항은 콘텐츠 차단기 섹션(일반 탭에 있음)에 반영됩니다.

## 콘텐츠 차단기 {#contentblockers}

![콘텐츠 차단기 탭](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

콘텐츠 차단기는 주제별 필터 블록입니다. 개인정보 보호 관련 필터는 *AdGuard Privacy* 콘텐츠 차단기에 포함되어 있습니다.

Content Blockers were designed for two reasons: to structure filters and to conform to Apple's restrictions.

[2019년](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple은 Safari용 광고 차단기에 제한을 두어 동시에 5만 개의 필터링 규칙만 사용할 수 있도록 했습니다. 5만 개의 필터링 규칙으로는 좋은 필터링 품질을 제공할 수 없었습니다. 예를 들어, AdGuard 베이스 필터에만 3만 개의 필터링 규칙이 있습니다. 그래서 Safari용 AdGuard를 각각 최대 5만 개의 규칙을 포함하는 6개의 콘텐츠 차단기로 나누었습니다.

[2022년](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple은 각 콘텐츠 차단기의 필터링 규칙 한도를 15만 개로 늘렸습니다. Safari용 AdGuard의 경우, 6개의 콘텐츠 차단기 모두에 대해 최대 90만 개의 규칙을 활성화할 수 있습니다.

한도는 증가했지만 콘텐츠 차단 기능의 구조는 그대로 유지되었습니다.

콘텐츠 차단기 탭에서 어떤 콘텐츠 차단기가 활성화되어 있는지, 각 차단기가 얼마나 많은 규칙을 사용하고 있는지, 어떤 필터가 작동하는지 확인할 수 있습니다.

:::tip

필터 탭에서 활성화된 필터를 관리할 수 있습니다. 콘텐츠 차단기 섹션에서는 이미 활성화된 필터 목록만 볼 수 있습니다.

:::

### AdGuard General {#adguard_general}

*AdGuard General*은 광고 차단에 가장 필수적인 필터를 결합합니다. AdGuard 베이스 필터를 활성화해 두는 것이 좋습니다.

### AdGuard Privacy {#adguard_privacy}

이 콘텐츠 차단기는 카운터 및 웹 분석 도구로부터 보호합니다. *AdGuard 추적 보호 필터*는 기본적으로 활성화되어 있습니다.

### AdGuard Social {#adguard_social}

*AdGuard Social*에는 소셜 미디어 버튼, 위젯, 스크립트 및 아이콘을 차단하는 필터가 포함되어 있습니다. 팝업, 모바일 앱 배너, 쿠키 알림을 차단하는 필터와 같은 다른 방해 요소 필터도 이 섹션에서 찾을 수 있습니다. 이러한 필터를 사용하려면 필터 탭에서 *소셜 위젯*을 찾습니다.

### AdGuard Security {#adguard_security}

이 콘텐츠 차단기는 여러 보안 관련 필터를 통합합니다. *Malware Domains Blocklist*는 멀웨어 및 스파이웨어를 유포하는 도메인을 차단합니다. *Spam404*는 인터넷 사기꾼으로부터 사용자를 보호합니다. *NoCoin Filter List*는 Coinhive와 같은 브라우저 기반 크립토마이너를 차단합니다.

### AdGuard Other {#adguard_other}

*AdGuard Other*에는 다양한 기능을 갖춘 필터가 포함되어 있습니다. 예를 들어, 검색 광고와 자체 홍보 광고의 차단을 해제하는 필터가 있습니다. 이러한 종류의 광고는 다른 광고보다 관련성이 높고 방해가 덜하기 때문에 어떤 경우에는 원하는 것을 찾는 데 도움이 됩니다.

:::note 주의사항

We don't have any 'acceptable ads' paid by advertisers. 대신 사용자에게 [검색 광고와 웹사이트의 자체 홍보 광고](/general/ad-filtering/search-ads)를 볼 수 있는 옵션을 제공합니다.

:::

### AdGuard Custom {#adguard_custom}

![사용자 정의 탭](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

더 많은 필터가 필요한 경우 *AdGuard Custom*에 필터를 추가할 수 있습니다. 사용자 정의 필터를 추가하려면 해당 필드에 URL 또는 로컬 파일 경로를 입력하세요. [filterlists.com](https://filterlists.com/)에서 새 필터를 찾을 수 있습니다.

## 사용자 규칙 {#userrules}

사용자 규칙을 사용하여 광고 차단을 맞춤 설정할 수 있습니다. 수동으로 추가하거나 가져올 수 있습니다. 페이지에서 항목을 차단하면 사용자 정의 규칙이 자동으로 만들어집니다. 자신만의 필터링 규칙을 추가하려면 [특수 구문](/general/ad-filtering/create-own-filters)을 사용하세요.

## 정보 {#about}

![정보 탭](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

정보 탭에서 제품의 현재 버전에 대한 정보와 법률 문서 링크를 확인할 수 있습니다. GitHub의 리포지토리 링크도 있습니다. 여기에서 제품 개발을 확인할 수 있습니다. 새로운 기능을 제안하고 버그를 신고할 수도 있습니다.

:::note 알림

Safari용 AdGuard는 [App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259)에서 무료로 다운로드할 수 있습니다. 자세한 설정 지침은 [지식 창고](../installation)에서 확인할 수 있습니다.

:::
