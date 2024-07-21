---
title: iOS용 AdGuard에서 시스템 전체 필터링을 활성화하는 방법
sidebar_position: 2
---

:::정보

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 iOS용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## 시스템 전체 필터링 정보

시스템 전체 필터링은 Safari 브라우저 외부, 즉 다른 앱과 브라우저에서 광고 및 추적기를 차단하는 것입니다. 이 글에서는 iOS 기기에서 이 기능을 활성화하는 방법을 설명합니다.

iOS 기기의 전체 시스템에서 추적기와 광고를 차단하려면 [DNS 필터링](https://adguard-dns.io/kb/general/dns-filtering/)을 사용해야 합니다.

먼저 DNS 보호를 활성화해야 합니다. DNS 보호를 사용 설정하려면 다음과 같이 하세요.

1. *iOS용 AdGuard*를 엽니다.
2. *보호* 아이콘(하단 메뉴 표시줄의 두 번째 아이콘)을 탭합니다.
3. *DNS 보호* 스위치를 켭니다.

![DNS 보호 화면 *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

이제 시스템 전체에서 광고 및 추적기를 차단하려면 다음 세 가지 옵션이 있습니다.

 1. AdGuard DNS 필터 사용합니다. AdGuard DNS 필터를 사용하려면 *보호*(하단 메뉴의 방패 아이콘) → *DNS 보호* → *DNS 필터링* → *DNS 필터* → *AdGuard DNS 필터*로 이동합니다.
 2. AdGuard DNS 서버를 사용합니다. AdGuard DNS 서버를 사용하려면 *보호*(하단 메뉴의 방패 아이콘) → *DNS 보호* → *DNS 서버* → *AdGuard DNS* 또는 원하는 다른 차단 DNS 서버로 이동합니다.
 3. 원하는 대로 사용자 정의 DNS 필터/호스트 파일을 추가하세요.

첫 번째와 세 번째 옵션에는 몇 가지 장점이 있습니다.

- 필터 자체가 광고를 차단하기 때문에 특정 차단 서버뿐만 아니라 원하는 DNS 서버를 사용할 수 있습니다.
- 여러 개의 DNS 필터 및/또는 호스트 파일을 추가할 수 있습니다(너무 많이 사용하면 AdGuard 속도가 느려질 수 있음).

![DNS 필터링 작동 방식](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## 사용자 정의 DNS 필터/호스트 파일을 추가하는 방법

원하는 DNS 필터 또는 호스트 파일을 추가할 수 있습니다.

예를 들어, [OISD Blocklist Big](https://oisd.nl/)을 추가해 보겠습니다.

1. https://big.oisd.nl 링크를 복사합니다(OISD Blocklist Big 필터용 링크).
2. *보호*(하단 메뉴의 방패 아이콘) → *DNS 보호* → *DNS 필터링* → *DNS 필터*를 엽니다.
3. *필터 추가*를 탭합니다.
4. 링크를 필터 URL 필드에 붙여넣습니다.
5. *다음* → *추가*를 탭합니다.

![DNS 필터 화면 추가 *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

4단계에서 다른 URL을 붙여넣어 동일한 방식으로 다른 DNS 필터를 원하는 만큼 추가하세요. [여기](https://filterlists.com)에서 다양한 필터와 링크를 확인할 수 있습니다.
