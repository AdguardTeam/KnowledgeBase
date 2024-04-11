---
title: DNS koruması
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan iOS için AdGuard hakkındadır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

[DNS koruma modülü](https://adguard-dns.io/kb/general/dns-filtering/), DNS trafiğinizi şifreleyerek gizliliğinizi artırır. Safari içerik engellemenin aksine, DNS koruması sistem genelinde, yani Safari'nin ötesinde, uygulamalarda ve diğer tarayıcılarda çalışır. Bu modülü kullanabilmeniz için önce etkinleştirmeniz gerekir. You can do this on the home screen by tapping the shield icon at the top of the screen, or by going to the _Protection_ → _DNS protection_ tab.

:::note

DNS ayarlarını yönetebilmek için AdGuard uygulamaları yerel bir VPN kurulmasını gerektirir. Trafiğinizi herhangi bir uzak sunucu üzerinden yönlendirmez. Nevertheless, the system will ask you to confirm access permission.

:::

### DNS implementation {#dns-implementation}

![DNS implementation screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

This section has two options: AdGuard and Native implementation. Temel olarak, bunlar DNS ayarlamanın iki yöntemidir.

In Native implementation, the DNS is handled by the system and not the app. This means that AdGuard doesn't have to create a local VPN. Sadly, this will not help you circumvent system restrictions and use AdGuard alongside other VPN-based applications — if any VPN is enabled, native DNS is ignored. Consequently, you won't be able to filter traffic locally or to use our brand new [DNS-over-QUIC protocol (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS servers {#dns-servers}

DNS Koruması ekranında göreceğiniz bir sonraki bölüm DNS sunucusudur. It shows the currently selected DNS server and encryption type. To change either, tap the button to enter the DNS server screen.

![DNS servers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servers differ by their speed, employed protocol, trustworthiness, logging policy, etc. By default, AdGuard will suggest several DNS servers from among the most popular ones (including AdGuard DNS). Şifreleme türünü değiştirmek (sunucu sahibi tarafından böyle bir seçenek sağlanmışsa) veya sunucunun ana sayfasını görüntülemek için herhangi birine dokunun. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

Ek olarak, ekranın alt kısmında özel bir DNS sunucusu ekleme seçeneği vardır. Normal, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS ve DNS-over-QUIC sunucularını destekler.

### Network settings {#network-settings}

![Network settings screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Kullanıcılar, DNS güvenliklerini Ağ ayarları ekranından da yönetebilirler. _Filter mobile data_ and _Filter Wi-Fi_ enable or disable DNS protection for the respective network types. Further down, at _Wi-Fi exceptions_, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtering {#dns-filtering}

DNS filtreleme, AdGuard DNS filtresini etkinleştirerek, özel DNS filtreleri ekleyerek ve DNS engel listesi ile izin listesini kullanarak DNS trafiğinizi özelleştirmenize olanak tanır.

Nasıl erişilir:

_Protection_ (the shield icon in the bottom menu bar) → _DNS protection_ → _DNS filtering_

![DNS filtering screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filters {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard, DNS trafiğinizi izler ve bir veya daha fazla kuralla eşleşen istekleri engeller. You can use filters such as [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) or add hosts files as filters. Aynı anda birden fazla filtre eklenebilir. To know how to do it, get acquainted with [this exhaustive manual](adguard-for-ios/solving-problems/system-wide-filtering).

#### Allowlist and Blocklist {#allowlist-blocklist}

On top of DNS filters, you can have targeted impact on DNS filtering by adding single domains to Blocklist or to Allowlist. Blocklist even supports the same DNS syntax, and both of them can be imported and exported, just like Allowlist in Safari content blocking.
