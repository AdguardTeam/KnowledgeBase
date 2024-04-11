---
title: DNS ochrana
sidebar_position: 2
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

[DNS protection module](https://adguard-dns.io/kb/general/dns-filtering/) enhances your privacy by encrypting your DNS traffic. Na rozdíl od blokování obsahu v Safari funguje DNS ochrana v celém systému, tj. i mimo Safari, v aplikacích a dalších prohlížečích. Před použitím tohoto modulu jej musíte povolit. You can do this on the home screen by tapping the shield icon at the top of the screen, or by going to the _Protection_ → _DNS protection_ tab.

:::note

Aby bylo možné spravovat nastavení DNS, vyžadují aplikace AdGuardu vytvoření lokální VPN. Provoz nebude směrován přes žádné vzdálené servery. Přesto vás systém požádá o potvrzení oprávnění k přístupu.

:::

### DNS implementation {#dns-implementation}

![DNS implementation screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Tato část má dvě možnosti: AdGuard a Nativní implementace. V podstatě se jedná o dva způsoby nastavení DNS.

V nativní implementaci se o DNS stará systém, nikoli aplikace. To znamená, že AdGuard nemusí vytvářet lokální VPN. Bohužel vám to nepomůže obejít systémová omezení a používat AdGuard spolu s jinými aplikacemi založenými na VPN — pokud je povolena jakákoli VPN, nativní DNS je ignorován. Consequently, you won't be able to filter traffic locally or to use our brand new [DNS-over-QUIC protocol (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS servers {#dns-servers}

Další část, která se zobrazí na obrazovce Ochrana DNS, je DNS server. Zobrazuje aktuálně vybraný DNS server a typ šifrování. Chcete-li některý z nich změnit, klepněte na tlačítko a přejděte na obrazovku DNS serveru.

![DNS servers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servery se liší rychlostí, použitým protokolem, důvěryhodností, zásadami protokolování atd. Ve výchozím nastavení nabídne AdGuard několik DNS serverů z těch nejoblíbenějších (včetně AdGuard DNS). Klepnutím na libovolný server změníte typ šifrování (pokud takovou možnost vlastník serveru poskytuje) nebo zobrazíte domovskou stránku serveru. We added labels such as `No logging policy`, `Ad blocking`, `Security` to help you make a choice.

V dolní části obrazovky je navíc možnost přidat vlastní DNS server. Podporuje běžné servery, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC.

### Network settings {#network-settings}

![Network settings screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Uživatelé mohou na obrazovce Nastavení sítě také řešit zabezpečení DNS. _Filter mobile data_ and _Filter Wi-Fi_ enable or disable DNS protection for the respective network types. Further down, at _Wi-Fi exceptions_, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtering {#dns-filtering}

DNS filtrování umožňuje přizpůsobit provoz DNS povolením filtru AdGuard DNS, přidáním vlastních filtrů DNS a použitím seznamu zakázanách/povolených DNS.

Jak získat přístup:

_Protection_ (the shield icon in the bottom menu bar) → _DNS protection_ → _DNS filtering_

![DNS filtering screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filters {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard bude monitorovat provoz DNS a blokovat požadavky, které odpovídají jednomu nebo více pravidlům. You can use filters such as [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) or add hosts files as filters. Lze přidávat více filtrů současně. To know how to do it, get acquainted with [this exhaustive manual](adguard-for-ios/solving-problems/system-wide-filtering).

#### Allowlist and Blocklist {#allowlist-blocklist}

Kromě DNS filtrů můžete filtrování DNS cíleně ovlivnit přidáním jednotlivých domén do seznamu zakázaných nebo do seznamu povolených. Seznam zakázaných dokonce podporuje stejnou syntaxi DNS a oba tyto seznamy lze importovat a exportovat, stejně jako seznam povolených v aplikaci Safari pro blokování obsahu.
