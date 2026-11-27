---
title: Protection DNS
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour iOS, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

[Module de protection DNS](https://adguard-dns.io/kb/general/dns-filtering/) améliore votre confidentialité en cryptant votre trafic DNS. Contrairement au blocage de contenu Safari, la protection DNS fonctionne à l'échelle du système, c'est-à-dire au-delà de Safari, dans les applications et autres navigateurs. Vous devez activer ce module avant de pouvoir l'utiliser. Vous pouvez le faire sur l'écran d'accueil en appuyant sur l'icône de bouclier en haut de l'écran ou en accédant à l'onglet _Protection_ → _Protection DNS_.

:::note

Pour pouvoir gérer les paramètres DNS, les applications AdGuard nécessitent l'établissement d'un VPN local. Il n’acheminera pas votre trafic via des serveurs distants. Néanmoins, le système vous demandera de confirmer l'autorisation d'accès.

:::

### Implémentation DNS {#dns-implementation}

! [Écran d’implémentation DNS \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Cette section propose deux options : AdGuard et Implémentation native. Fondamentalement, il s'agit de deux méthodes de configuration du DNS.

Dans l'implémentation native, le DNS est géré par le système et non par l'application. Cela signifie qu'AdGuard n'a pas besoin de créer un VPN local. Malheureusement, cela ne vous aidera pas à contourner les restrictions du système et à utiliser AdGuard avec d'autres applications basées sur VPN : si un VPN est activé, le DNS natif est ignoré. Consequently, you won't be able to filter traffic locally or to use our brand new [DNS-over-QUIC protocol (DoQ)](https://adguard-dns.io/blog/dns-over-quic.html).

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
