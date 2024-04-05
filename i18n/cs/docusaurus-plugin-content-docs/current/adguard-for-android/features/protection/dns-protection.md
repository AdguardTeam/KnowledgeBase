---
title: DNS ochrana
sidebar_position: 4
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

The DNS protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _DNS protection_.

:::tip

DNS protection works differently from regular ad and tracker blocking. You cam [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_DNS protection_ allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:

- Některé DNS servery mají seznamy blokování, které pomáhají blokovat DNS požadavky na potenciálně škodlivé domény

- Kromě DNS serverů může AdGuard filtrovat DNS požadavky sám pomocí speciálního DNS filtru. Obsahuje velký seznam reklamních a sledovacích domén — požadavky na ně jsou přesměrovány do "černé díry" serveru

- Domény můžete také blokovat a odblokovat vytvořením uživatelských pravidel. You might need to consult our article about [DNS filtering rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection \*mobile\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS server

V této části můžete vybrat DNS server pro řešení DNS požadavků, blokování reklam a slídičů a šifrování DNS přenosů. Klepnutím na server si přečtěte jeho celý popis a vyberte protokol. Pokud jste požadovaný server nenašli, můžete jej přidat ručně:

- Tap _Add DNS server_ and enter the server address (or addresses)

- Alternatively, you can select a DNS server from the [list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/) and tap _Add to AdGuard_ next to it

- If you're using a private AdGuard DNS server, you can add it to AdGuard from the [dashboard](https://adguard-dns.io/dashboard/)

By default, _Automatic DNS_ is selected. Nastaví DNS server na základě AdGuardu a nastavení zařízení. If you have [integration with AdGuard VPN](/adguard-for-android/features/integration-with-vpn) or another SOCKS5 proxy enabled, it connects to _AdGuard DNS Non-filtering_ or any other server you specify. Ve všech ostatních případech se připojuje k DNS serveru vybranému v nastavení zařízení.

#### DNS filtry

Tato část umožňuje přidávat vlastní DNS filtry a pravidla DNS filtrování. You can find more filters at [filterlists.com](https://filterlists.com/).
