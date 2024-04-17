---
title: DNS ochrana
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro iOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

[Modul DNS ochrana](https://adguard-dns.io/kb/general/dns-filtering/) zvyšuje vaše soukromí šifrováním vašeho provozu DNS. Na rozdíl od blokování obsahu v Safari funguje DNS ochrana v celém systému, tj. i mimo Safari, v aplikacích a dalších prohlížečích. Před použitím tohoto modulu jej musíte povolit. Můžete to udělat na domovské obrazovce klepnutím na ikonu štítu v horní části obrazovky nebo přechodem na kartu _Ochrana_ → _DNS ochrana_.

:::note

Aby bylo možné spravovat nastavení DNS, vyžadují aplikace AdGuardu vytvoření lokální VPN. Provoz nebude směrován přes žádné vzdálené servery. Přesto vás systém požádá o potvrzení oprávnění k přístupu.

:::

### Implementace DNS {#dns-implementation}

![DNS implementation screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Tato část má dvě možnosti: AdGuard a Nativní implementace. V podstatě se jedná o dva způsoby nastavení DNS.

V nativní implementaci se o DNS stará systém, nikoli aplikace. To znamená, že AdGuard nemusí vytvářet lokální VPN. Bohužel vám to nepomůže obejít systémová omezení a používat AdGuard spolu s jinými aplikacemi založenými na VPN — pokud je povolena jakákoli VPN, nativní DNS je ignorován. V důsledku toho nebudete moci filtrovat provoz lokálně ani používat náš zbrusu nový protokol [DNS-over-QUIC (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS servery {#dns-servers}

Další část, která se zobrazí na obrazovce Ochrana DNS, je DNS server. Zobrazuje aktuálně vybraný DNS server a typ šifrování. Chcete-li některý z nich změnit, klepněte na tlačítko a přejděte na obrazovku DNS serveru.

![DNS servers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servery se liší rychlostí, použitým protokolem, důvěryhodností, zásadami protokolování atd. Ve výchozím nastavení nabídne AdGuard několik DNS serverů z těch nejoblíbenějších (včetně AdGuard DNS). Klepnutím na libovolný server změníte typ šifrování (pokud takovou možnost vlastník serveru poskytuje) nebo zobrazíte domovskou stránku serveru. Přidali jsme štítky jako `Bez zaznamenávání`, `Blokování reklam`, `Zabezpečení`, abychom vám usnadnili výběr.

V dolní části obrazovky je navíc možnost přidat vlastní DNS server. Podporuje běžné servery, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC.

### Nastavení sítě {#network-settings}

![Network settings screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Uživatelé mohou na obrazovce Nastavení sítě také řešit zabezpečení DNS. _Filtrování mobilních dat_ a _Filtrování Wi-Fi_ povolují nebo zakazují DNS ochranu pro příslušné typy sítí. Dále ve _výjimkách Wi-Fi_ můžete vyloučit konkrétní sítě Wi-Fi z ochrany DNS (můžete například chtít vyloučit svou domácí síť, pokud používáte [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtrování {#dns-filtering}

DNS filtrování umožňuje přizpůsobit provoz DNS povolením filtru AdGuard DNS, přidáním vlastních filtrů DNS a použitím seznamu zakázanách/povolených DNS.

Jak získat přístup:

_Ochrana_ (ikona štítu v dolní liště menu) → _DNS ochrana_ → _DNS filtrování_

![DNS filtering screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filtry {#dns-filters}

Podobně jako filtry v prohlížeči Safari jsou DNS filtry sadami pravidel zapsaných podle speciální [syntaxe](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard bude monitorovat provoz DNS a blokovat požadavky, které odpovídají jednomu nebo více pravidlům. Můžete použít filtry, jako je [filtr AdGuard DNS](https://github.com/AdguardTeam/AdguardSDNSFilter), nebo přidat soubory hostitelů jako filtry. Lze přidávat více filtrů současně. Chcete-li vědět, jak na to, seznamte se s [touto vyčerpávající příručkou](adguard-for-ios/solving-problems/system-wide-filtering).

#### Seznam povolených a seznam zakázaných {#allowlist-blocklist}

Kromě DNS filtrů můžete filtrování DNS cíleně ovlivnit přidáním jednotlivých domén do seznamu zakázaných nebo do seznamu povolených. Seznam zakázaných dokonce podporuje stejnou syntaxi DNS a oba tyto seznamy lze importovat a exportovat, stejně jako seznam povolených v aplikaci Safari pro blokování obsahu.
