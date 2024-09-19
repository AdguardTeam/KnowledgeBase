---
title: DNS ochrana
sidebar_position: 4
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

K modulu DNS ochrana se dostanete klepnutím na kartu _Ochrana_ (druhá ikona vlevo dole na obrazovce) a výběrem možnosti _DNS ochrana_.

:::tip

DNS ochrana funguje jinak než běžné blokování reklam a slídičů. You can [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_DNS ochrana_ umožňuje filtrovat DNS požadavky pomocí vybraného DNS serveru, DNS filtrů a uživatelských pravidel:

- Některé DNS servery mají seznamy blokování, které pomáhají blokovat DNS požadavky na potenciálně škodlivé domény

- Kromě DNS serverů může AdGuard filtrovat DNS požadavky sám pomocí speciálního DNS filtru. Obsahuje velký seznam reklamních a sledovacích domén — požadavky na ně jsou přesměrovány do "černé díry" serveru

- Domény můžete také blokovat a odblokovat vytvořením uživatelských pravidel. Možná si budete muset přečíst náš článek o [syntaxi pravidel filtrování DNS] (https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection \*mobile\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS server

V této části můžete vybrat DNS server pro řešení DNS požadavků, blokování reklam a slídičů a šifrování DNS přenosů. Klepnutím na server si přečtěte jeho celý popis a vyberte protokol. Pokud jste požadovaný server nenašli, můžete jej přidat ručně:

- Klepněte na _Přidat DNS server_ a zadejte adresu serveru (nebo adresy)

- Případně můžete vybrat DNS server ze [seznamu známých poskytovatelů DNS](https://adguard-dns.io/kb/general/dns-providers/) a klepnout na _Přidat do AdGuardu_ vedle něj

- Pokud používáte soukromý server AdGuard DNS, můžete jej přidat do AdGuardu z [přehledu](https://adguard-dns.io/dashboard/)

Ve výchozím nastavení je vybrán _Automatický DNS_. Nastaví DNS server na základě AdGuardu a nastavení zařízení. Pokud máte povolenou [integraci s AdGuard VPN](/adguard-for-android/features/integration-with-vpn) nebo jiný proxy server SOCKS5, připojí se k _AdGuard DNS Non-filtering_ nebo k jinému serveru, který zadáte. Ve všech ostatních případech se připojuje k DNS serveru vybranému v nastavení zařízení.

#### DNS filtry

Tato část umožňuje přidávat vlastní DNS filtry a pravidla DNS filtrování. Další filtry najdete na [filterlists.com](https://filterlists.com/).
