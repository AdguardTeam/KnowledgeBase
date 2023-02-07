---
title: iOS용 AdGuard로 시스템 전체 필터링을 설정하는 방법
sidebar_position: 2
---

## 시스템 전체 필터링 정보

시스템 전체 필터링은 Safari 브라우저 외부, 즉 다른 앱과 브라우저에서 광고 및 추적기를 차단하는 것입니다. iOS 기기에서 전체 시스템 차단을 설정하는 방법을 살펴볼까요?

iOS 기기의 전체 시스템에서 추적기와 광고를 차단하려면 [DNS 필터링](https://adguard-dns.io/kb/general/dns-filtering/)을 사용해야 합니다. 먼저 DNS 보호를 활성화해야 합니다. To do so, open *AdGuard for iOS settings* → *DNS protection* and switch it on.

![DNS 보호 화면 *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

전체 시스템에서 광고와 추적기를 차단하려면 두 가지 방법이 있습니다.

1. Enable AdGuard DNS server (*Settings* → *DNS protection* → *DNS server* → *AdGuard DNS*).
2. AdGuard DNS 필터와 같은 광고와 추적 도메인을 차단하는 DNS 필터/호스트를 추가하세요.

두 번째 방법은 더 어렵지만 여러 장점이 있습니다.

* 특정한 서버에 제한되지 않고 원하시는 모든 DNS 서버를 사용할 수 있습니다.
* DNS 서버와 달리 DNS 필터/호스트는 여러개를 동시에 추가할 수 있습니다.

![DNS 필터링 작동 방식](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## DNS 필터/호스트 파일을 추가하는 방법

어느 DNS 필터나 호스트 파일을 추가하는 방법은 모두 다 동일합니다. 예시로 [AdGuard DNS 필터](https://github.com/AdguardTeam/AdguardSDNSFilter)를 추가하는 방법을 살펴보겠습니다. AdGuard DNS 필터는 다른 여러 필터(AdGuard 베이스 필터, 소셜미디어 필터, 추적 보호 필터, 모바일 광고 필터, EasyList, EasyPrivacy 등)로 구성되며 특히 DNS 수준 광고 차단에 더 적합하도록 단순화되었습니다.

1. Open *AdGuard for iOS settings* → *General*.
2. *고급 모드*를 활성화한 후 *고급 설정* 열기

![AdGuard 설정을 열고 고급 모드를 활성화합니다 *mobile_border](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_en.jpg)

![고급 설정 화면 *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_advanced_settings.PNG)

> 참고: *고급 설정* 탭에서 다른 설정, 특히 *로우 레벨 설정*은 사용하지 않는 것이 좋습니다. 어떤 설정으로 인해 인터넷 연결이 떨어질 수 있거나 개인정보 및 보안이 손상될 수 있습니다. AdGuard DNS 필터를 추가하려면 다음 단계를 따르세요.

3. 해당 링크 복사: `https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt`
4. Open *AdGuard for iOS settings* → *DNS protection* → *DNS filtering* (available while *Advanced mode* is enabled) → *DNS filters*.
5. *필터 추가* 버튼을 클릭한 후 URL 필터의 필드에 링크를 붙여넣고 '다음' 클릭

![DNS 필터 화면 추가 *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_adding_a_filter.PNG)

> 3 단계에서 다른 URL을 붙여넣어 동일한 방식으로 다른 DNS 필터를 추가하세요. [여기](https://filterlists.com)에서 다양한 필터와 링크를 확인할 수 있습니다.
