---
title: DNS protection
sidebar_position: 2
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

[DNS protection module](https://adguard-dns.io/kb/general/dns-filtering/) enhances your privacy by encrypting your DNS traffic. Unlike with Safari content blocking, DNS protection works system-wide, i.e. beyond Safari, in apps and other browsers. You have to enable this module before you're able to use it. You can do this on the home screen by tapping the shield icon at the top of the screen, or by going to the *Protection* → *DNS protection* tab.

:::note

To be able to manage DNS settings, AdGuard apps require establishing a local VPN. It will not route your traffic through any remote servers. Nevertheless, the system will ask you to confirm access permission.

:::

### DNS implementation {#dns-implementation}

![DNS implementation screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

This section has two options: AdGuard and Native implementation. Basically, these are two methods of setting up DNS.

In Native implementation, the DNS is handled by the system and not the app. This means that AdGuard doesn't have to create a local VPN. Sadly, this will not help you circumvent system restrictions and use AdGuard alongside other VPN-based applications — if any VPN is enabled, native DNS is ignored. Consequently, you won't be able to filter traffic locally or to use our brand new [DNS-over-QUIC protocol (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS servers {#dns-servers}

The next section you'll see on the DNS Protection screen is DNS server. It shows the currently selected DNS server and encryption type. To change either, tap the button to enter the DNS server screen.

![DNS servers *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servers differ by their speed, employed protocol, trustworthiness, logging policy, etc. By default, AdGuard will suggest several DNS servers from among the most popular ones (including AdGuard DNS). Tap any to change the encryption type (if such option is provided by the server's owner) or to view the server's homepage. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

In addition, at the bottom of the screen there is an option to add a custom DNS server. It supports regular, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC servers.

#### HTTP basic authentication for DNS-over-HTTPS

This feature brings the authentication capabilities of the HTTP protocol to DNS, which does not have built-in authentication. Authentication in DNS is useful if you want to restrict access to your custom DNS server to specific users.

To enable this feature:

1. In AdGuard DNS, go to *Server settings* → *Devices* → *Settings* and change the DNS server to the one with authentication. By clicking *Deny other protocols*, other protocol usage options will disappear, leaving only the DNS-over-HTTPS authentication enabled and preventing its use by third parties. Copy the generated address.

![DNS-over-HTTPS with authentication](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. In AdGuard for iOS, go to the *Protection tab* → *DNS protection* → *DNS server* and paste the generated address into the *Add a custom DNS server* field. Save and select the new configuration.

To check if everything is set up correctly, visit our [diagnostics page](https://adguard.com/en/test.html).

### Network settings {#network-settings}

![Network settings screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Users can also handle their DNS security on the Network settings screen. *Filter mobile data* and *Filter Wi-Fi* enable or disable DNS protection for the respective network types. Further down, at *Wi-Fi exceptions*, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtering {#dns-filtering}

DNS filtering allows you to customize your DNS traffic by enabling AdGuard DNS filter, adding custom DNS filters, and using the DNS blocklist/allowlist.

How to access:

*Protection* (the shield icon in the bottom menu bar) → *DNS protection* → *DNS filtering*

![DNS filtering screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filters {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard will monitor your DNS traffic and block requests that match one or more rules. You can use filters such as [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) or add hosts files as filters. Multiple filters can be added simultaneously. To know how to do it, get acquainted with [this exhaustive manual](adguard-for-ios/solving-problems/system-wide-filtering).

#### Allowlist and Blocklist {#allowlist-blocklist}

On top of DNS filters, you can have targeted impact on DNS filtering by adding single domains to Blocklist or to Allowlist. Blocklist even supports the same DNS syntax, and both of them can be imported and exported, just like Allowlist in Safari content blocking.
