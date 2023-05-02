---
title: Známé problémy kompatibility s aplikacemi pro Android
sidebar_position: 15
---

## Aplikace VPN

Ostatní aplikace VPN nejsou kompatibilní se službou AdGuard spuštěnou v režimu filtrování místní sítě VPN, protože nelze mít současně aktivní dvě sítě VPN. K vyřešení tohoto problému vám doporučujeme:

* použít [AdGuard VPN](https://adguard-vpn.com/welcome.html) — má integrovaný režim, který umožňuje bezproblémové fungování dvou aplikací
* použít AdGuard v režimu místního HTTP proxy. *Vezměte prosím na vědomí, že manuální režim HTTP proxy není na zařízeních se systémem Android 10 podporován*
* pokud používáte aplikaci VPN třetí strany, zjistěte, zda podporuje režim SOCKS4/SOCKS5. Pokud ano, můžete nakonfigurovat aplikaci VPN tak, aby fungovala jako odchozí proxy server, a nastavit místní odchozí proxy server pomocí parametrů z aplikace třetí strany. AdGuard lze například automaticky nakonfigurovat pomocí nástroje 'Orbot: Proxy with Tor'

## Soukromý DNS

Funkce Soukromý DNS byla představena v Android Pie. Před verzí Q služba Soukromý DNS neporušovala logiku filtrování AdGuard DNS a předávání DNS prostřednictvím AdGuardu fungovalo normálně. Od verze Q však přítomnost služby Soukromý DNS nutí aplikace přesměrovávat přenosy přes systémový řešitel namísto přes AdGuard. Další podrobnosti najdete v [blogu vývojářů](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) systému Android.

> Někteří výrobci zařízení nechávají nastavení Soukromých DNS skryté a jako výchozí nastavují režim "Automaticky". Zakázat službu Soukromý DNS tedy nelze, ale můžeme systém přimět, aby si myslel, že odchozí server není platný, a to tak, že jej zablokujeme pomocí pravidla `$network`. Pokud například systém ve výchozím nastavení používá Google DNS, můžeme přidat pravidla `|8.8.4.4^$network` a `|8.8.8.8^$network` pro zablokování Google DNS.

## Nepodporované prohlížeče

### Prohlížeče UC: UC Browser, UC Browser pro x86, UC Mini, UC Browser HD

Aby mohl AdGuard filtrovat přenosy HTTPS, musí uživatel přidat certifikát do důvěryhodných uživatelských certifikátů zařízení. Prohlížeče z rodiny UC bohužel nedůvěřují uživatelským certifikátům, takže v nich AdGuard nemůže provádět filtrování HTTPS.

**Řešení**

*Vyřaduje root přístup*. Chcete-li tento problém vyřešit, přesuňte certifikát do systémového úložiště certifikátů.

### Opera mini: Opera mini, Opera mini with Yandex

Opera mini ve výchozím nastavení řídí přenosy přes kompresní proxy server a AdGuard je nedokáže dekomprimovat a filtrovat současně.

**Řešení**

V tuto chvíli neexistují žádná řešení.

### Prohlížeče Dolphin: Dolphin Browser, Dolphin Browser Express

AdGuard nemůže filtrovat provoz v režimu **Manuální proxy**, protože tento prohlížeč ignoruje systémové nastavení proxy.

**Řešení**

Použijte režim filtrování *Lokální VPN*.

### Prohlížeč Puffin: Puffin Browser, Puffin Browser Pro

Prohlížeč Puffin ve výchozím nastavení řídí přenosy přes kompresní proxy server a AdGuard je nedokáže dekomprimovat a filtrovat současně.

**Řešení**

V tuto chvíli neexistují žádná řešení.
