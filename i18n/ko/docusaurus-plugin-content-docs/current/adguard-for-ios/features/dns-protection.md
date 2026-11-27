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

기본 구현에서 DNS는 앱이 아닌 시스템에 의해 처리됩니다. 즉, AdGuard는 로컬 VPN을 만들 필요가 없습니다. 안타깝게도 시스템 제한을 우회하고 다른 VPN 기반 앱과 함께 AdGuard를 사용하는 데는 도움이 되지 않습니다. VPN이 활성화되어 있으면 기본 DNS가 무시됩니다. 따라서 로컬에서 트래픽을 필터링하거나 새로운 [DNS-over-QUIC 프로토콜(DoQ)](https://adguard-dns.io/blog/dns-over-quic.html)을 사용할 수 없습니다.

:::note
When using the _AdGuard_ implementation on iOS 27 or later, the system _Connectivity Assist_ feature can route DNS queries outside the local tunnel in _Split-Tunnel_ mode. If you notice ads appearing in apps while DNS protection is active, see [How to fix ad blocking in apps on iOS 27](/adguard-for-ios/solving-problems/how-to-fix-ad-blocking-in-apps-ios-27/).
:::

### DNS servers {#dns-servers}

The next section you'll see on the DNS Protection screen is DNS server. It shows the currently selected DNS server and encryption type. To change either, tap the button to enter the DNS server screen.

![DNS servers \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servers differ by their speed, employed protocol, trustworthiness, logging policy, etc. By default, AdGuard will suggest several DNS servers from among the most popular ones (including AdGuard DNS). Tap any to change the encryption type (if such option is provided by the server's owner) or to view the server's homepage. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

In addition, at the bottom of the screen there is an option to add a custom DNS server. It supports regular, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC servers.

#### HTTP basic authentication for DNS-over-HTTPS

This feature brings the authentication capabilities of the HTTP protocol to DNS, which does not have built-in authentication. Authentication in DNS is useful if you want to restrict access to your custom DNS server to specific users.

To enable this feature:

1. In AdGuard DNS, go to _Server settings_ → _Devices_ → _Settings_ and change the DNS server to the one with authentication. Clicking _Deny other protocols_ will remove other protocol usage options, leaving only DNS-over-HTTPS authentication enabled and preventing its use by third parties. Copy the generated address.

![DNS-over-HTTPS with authentication](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. In AdGuard for iOS, go to the _Protection tab_ → _DNS protection_ → _DNS server_ and paste the generated address into the _Add a custom DNS server_ field. Save and select the new configuration.

To check if everything is set up correctly, visit our [diagnostics page](https://adguard.com/en/test.html).

### Network settings {#network-settings}

![Network settings screen \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Users can also handle their DNS security on the Network settings screen. _Filter mobile data_ and _Filter Wi-Fi_ enable or disable DNS protection for the respective network types. Further down, at _Wi-Fi exceptions_, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtering {#dns-filtering}

DNS filtering allows you to customize your DNS traffic by enabling AdGuard DNS filter, adding custom DNS filters, and using the DNS blocklist/allowlist.

How to access:

_Protection_ (the shield icon in the bottom menu bar) → _DNS protection_ → _DNS filtering_

![DNS filtering screen \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filters {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard will monitor your DNS traffic and block requests that match one or more rules. You can use filters such as [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) or add hosts files as filters. Multiple filters can be added simultaneously. To know how to do it, get acquainted with [this exhaustive manual](/adguard-for-ios/solving-problems/system-wide-filtering).

#### Allowlist and Blocklist {#allowlist-blocklist}

On top of DNS filters, you can have targeted impact on DNS filtering by adding single domains to Blocklist or to Allowlist. Blocklist even supports the same DNS syntax, and both of them can be imported and exported, just like Allowlist in Safari content blocking.
