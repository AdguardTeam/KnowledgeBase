---
title: DNS 보호
sidebar_position: 2
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 iOS용 AdGuard에 관한 것입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

[DNS 보호 모듈](https://adguard-dns.io/kb/general/dns-filtering/)은 DNS 트래픽을 암호화하여 개인정보를 보호합니다. Safari 콘텐츠 차단과 달리 DNS 보호는 시스템 전체, 즉 Safari를 넘어 앱 및 기타 브라우저에서 작동합니다. 이 모듈을 사용하려면 먼저 이 모듈을 활성화해야 합니다. 홈 화면에서 화면 상단의 방패 아이콘을 탭하거나 **보호** → **DNS 보호** 탭으로 이동하여 이 작업을 수행할 수 있습니다.

:::note

DNS 설정을 관리하려면 AdGuard 앱에서 로컬 VPN을 설정해야 합니다. 원격 서버를 통해 트래픽을 라우팅하지 않습니다. 그럼에도 불구하고 시스템에서 액세스 권한을 확인하라는 메시지가 표시됩니다.

:::

### DNS 구현 {#dns-implementation}

![DNS 구현 화면 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

이 섹션에는 AdGuard 및 기본 구현 옵션이 있습니다. 기본적으로 DNS를 설정하는 방법입니다.

기본 구현에서 DNS는 앱이 아닌 시스템에 의해 처리됩니다. 즉, AdGuard는 로컬 VPN을 만들 필요가 없습니다. 안타깝게도 시스템 제한을 우회하고 다른 VPN 기반 앱과 함께 AdGuard를 사용하는 데는 도움이 되지 않습니다. VPN이 활성화되어 있으면 기본 DNS가 무시됩니다. 따라서 로컬에서 트래픽을 필터링하거나 새로운 [DNS-over-QUIC 프로토콜(DoQ)](https://adguard.com/en/blog/dns-over-quic.html)을 사용할 수 없습니다.

### DNS 서버 {#dns-servers}

DNS 보호 화면에 표시되는 다음 섹션은 DNS 서버입니다. 현재 선택된 DNS 서버와 암호화 유형이 표시됩니다. 둘 중 하나를 변경하려면 버튼을 탭하여 DNS 서버 화면으로 들어갑니다.

![DNS 서버 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

서버는 속도, 사용하는 프로토콜, 신뢰성, 로깅 정책 등에 따라 다릅니다. 기본적으로 AdGard는 가장 인기 있는 DNS 서버(AdGard DNS 포함) 중에서 여러 개의 DNS 서버를 제안합니다. 아무거나 탭하여 암호화 유형을 변경하거나(서버 소유자가 해당 옵션을 제공한 경우) 서버의 홈페이지를 확인합니다. '무로깅 정책', '광고 차단', '보안' 등의 레이블을 추가하여 선택에 도움을 드리고자 합니다.

또한 화면 하단에는 사용자 정의 DNS 서버를 추가할 수 있는 옵션이 있습니다. 일반, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS 및 DNS-over-QUIC 서버를 지원합니다.

#### DNS-over-HTTPS를 위한 HTTP 기본 인증

이 기능은 인증 기능이 내장되어 있지 않은 DNS에 HTTP 프로토콜의 인증 기능을 제공합니다. DNS 인증은 사용자 정의 DNS 서버에 대한 액세스를 특정 사용자로 제한하려는 경우에 유용합니다.

이 기능을 활성화하려면 다음과 같이 하세요:

1. AdGuard DNS에서 **서버 설정** → **기기** → **설정**으로 이동하여 DNS 서버를 인증이 있는 서버로 변경합니다. **다른 프로토콜 거부**를 클릭하면 다른 프로토콜 사용 옵션이 제거되어 DNS-over-HTTPS 인증만 활성화되고 제3자가 사용하지 못하게 됩니다. 생성된 주소를 복사합니다.

![인증이 포함된 DNS-over-HTTPS](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. iOS용 AdGuard에서 **보호 탭** → **DNS 보호** → **DNS 서버**로 이동하여 생성된 주소를 **사용자 정의 DNS 서버 추가** 필드에 붙여넣습니다. 새 구성을 저장하고 선택합니다.

모든 것이 올바르게 설정되었는지 확인하려면 [진단 페이지](https://adguard.com/en/test.html)를 방문하세요.

### 네트워크 설정 {#network-settings}

![네트워크 설정 화면 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

사용자는 네트워크 설정 화면에서 DNS 보안을 관리할 수도 있습니다. **모바일 데이터 필터링** 및 **Wi-Fi 필터링**은 각 네트워크 유형에 대한 DNS 보호를 활성화 또는 비활성화합니다. 더 아래로 내려가면 **Wi-Fi 예외**에서 특정 Wi-Fi 네트워크를 DNS 보호에서 제외할 수 있습니다(예를 들어, [AdGuard Home](https://adguard.com/adguard-home/overview.html)을 사용하는 경우 홈 네트워크를 제외할 수 있음).

### DNS 필터링 {#dns-filtering}

DNS 필터링을 사용하면 AdGuard DNS 필터를 활성화하고, 사용자 정의 DNS 필터를 추가하고, DNS 차단 목록/허용 목록을 사용하여 DNS 트래픽을 사용자 지정할 수 있습니다.

DNS 필터링에 액세스하는 방법

**보호**(하단 메뉴 표시줄의 방패 아이콘) → **DNS 보호** → **DNS 필터링**으로 이동합니다.

![DNS 필터링 화면 \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS 필터 {#dns-filters}

Safari에서 작동하는 필터와 마찬가지로 DNS 필터는 특수한 [구문](https://adguard-dns.io/kb/general/dns-filtering-syntax/)에 따라 작성된 규칙 집합입니다. AdGuard는 DNS 트래픽을 모니터링하고 하나 이상의 규칙과 일치하는 요청을 차단합니다. AdGuard DNS 필터](https://github.com/AdguardTeam/AdguardSDNSFilter)와 같은 필터를 사용하거나 호스트 파일을 필터로 추가할 수 있습니다. 여러 필터를 동시에 추가할 수 있습니다. 여러 필터를 동시에 추가하는 방법을 알아보려면 이 [설명서를 참조](adguard-for-ios/solving-problems/system-wide-filtering)하세요.

#### 허용 목록 및 차단 목록 {#allowlist-blocklist}

DNS 필터 외에도 차단 목록 또는 허용 목록에 단일 도메인을 추가하여 DNS 필터링에 타겟팅된 영향을 미칠 수 있습니다. 차단 목록은 동일한 DNS 구문도 지원하며, Safari 콘텐츠 차단에서 허용 목록과 마찬가지로 둘 다 가져오고 내보낼 수 있습니다.
