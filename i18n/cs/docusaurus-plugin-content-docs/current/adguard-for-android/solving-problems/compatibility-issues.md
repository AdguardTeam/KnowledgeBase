---
title: Známé problémy kompatibility s aplikacemi pro Android
sidebar_position: 16
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Aplikace VPN

Pokud používáte AdGuard v režimu filtrování *Lokální VPN*, nemůžete současně spouštět jiné aplikace VPN. K vyřešení tohoto problému vám doporučujeme:

- Použít [AdGuard VPN](https://adguard-vpn.com/welcome.html) — má *integrovaný režim*, který umožňuje fungování dvou aplikací současně
- Nakonfigurovat aplikaci VPN tak, aby fungovala jako [odchozí proxy](../solving-problems/outbound-proxy.md) a nastavit místní odchozí proxy server pomocí parametrů z aplikace třetí strany
- Přepnout do režimu *Automatický proxy*. Když to uděláte, AdGuard již nebude používat lokální VPN a místo toho překonfiguruje iptables
- Přepnout do režimu *Manuální proxy*. Za tímto účelem přejděte do *Nastavení* → *Filtrování* → *Síť* → *Režim směrování*

:::note Kompatibilita

Režim *Automatický proxy* je dostupný pouze na zařízeních s přístupem root. Pro *Manuální proxy* je vyžadován root na zařízeních se systémem Android 10 nebo novějším.

:::

## Soukromý DNS

Funkce Soukromý DNS byla představena v Android Pie. Před verzí Q služba Soukromý DNS neporušovala logiku filtrování AdGuard DNS a předávání DNS prostřednictvím AdGuardu fungovalo normálně. Od verze Q však přítomnost služby Soukromý DNS nutí aplikace přesměrovávat přenosy přes systémový řešitel namísto přes AdGuard. Další podrobnosti najdete v [blogu vývojářů](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) systému Android.

- Problém se Soukromým DNS vyřešíte pomocí pravidla `$network`

Někteří výrobci zařízení nechávají nastavení Soukromých DNS skryté a jako výchozí nastavují režim "Automaticky". Zakázat službu Soukromý DNS tedy nelze, ale můžeme systém přimět, aby si myslel, že odchozí server není platný, a to tak, že jej zablokujeme pomocí pravidla `$network`. Pokud například systém ve výchozím nastavení používá Google DNS, můžeme přidat pravidla `|8.8.4.4^$network` a `|8.8.8.8^$network` pro zablokování Google DNS.

## Nepodporované prohlížeče

### Prohlížeče UC: UC Browser, UC Browser pro x86, UC Mini, UC Browser HD

Aby mohl AdGuard filtrovat přenosy HTTPS, musí uživatel přidat certifikát do důvěryhodných uživatelských certifikátů zařízení. Unfortunately, UC browsers don't trust user certificates, so AdGuard cannot perform HTTPS filtering there.

- Chcete-li tento problém vyřešit, přesuňte certifikát do [systémového úložiště certifikátů](../solving-problems/https-certificate-for-rooted.md/)

:::note Kompatibilita

Vyžaduje root přístup.

:::

### Prohlížeče Dolphin: Dolphin Browser, Dolphin Browser Express

AdGuard nemůže filtrovat provoz v režimu *Manuální proxy*, protože tento prohlížeč ignoruje systémové nastavení proxy.

- K vyřešení tohoto problému použijte režim filtrování *Lokální VPN*

### Opera mini: Opera mini, Opera mini with Yandex

Opera mini ve výchozím nastavení řídí přenosy přes kompresní proxy server a AdGuard je nedokáže dekomprimovat a filtrovat současně.

- V tuto chvíli neexistují žádná řešení

### Prohlížeč Puffin: Puffin Browser, Puffin Browser Pro

Prohlížeč Puffin ve výchozím nastavení řídí přenosy přes kompresní proxy server a AdGuard je nedokáže dekomprimovat a filtrovat současně.

- V tuto chvíli neexistují žádná řešení
