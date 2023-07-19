---
title: Známé problémy kompatibility s aplikacemi pro Android
sidebar_position: 16
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

## Aplikace VPN

Ostatní aplikace VPN nejsou kompatibilní se službou AdGuard spuštěnou v režimu filtrování místní sítě VPN, protože nelze mít současně aktivní dvě sítě VPN. K vyřešení tohoto problému vám doporučujeme:

* use [AdGuard VPN](https://adguard-vpn.com/welcome.html) — it has Integrated mode that allows two apps to operate seamlessly
* use AdGuard in Local HTTP Proxy mode

:::caution

On Android 10 and later, the 'manual' HTTP proxy mode is no longer supported.

:::

* configure your VPN app to to act as an outbound proxy and set up a local outbound proxy using the parameters from the third-party app. To do this, a third-party VPN app must support SOCKS4/SOCKS5 mode. For example, AdGuard can be automatically configured with 'Orbot: Proxy with Tor'.

## Soukromý DNS

Funkce Soukromý DNS byla představena v Android Pie. Před verzí Q služba Soukromý DNS neporušovala logiku filtrování AdGuard DNS a předávání DNS prostřednictvím AdGuardu fungovalo normálně. Od verze Q však přítomnost služby Soukromý DNS nutí aplikace přesměrovávat přenosy přes systémový řešitel namísto přes AdGuard. Další podrobnosti najdete v [blogu vývojářů](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) systému Android.

* To solve the problem with Private DNS, use the `$network` rule

Někteří výrobci zařízení nechávají nastavení Soukromých DNS skryté a jako výchozí nastavují režim "Automaticky". Zakázat službu Soukromý DNS tedy nelze, ale můžeme systém přimět, aby si myslel, že odchozí server není platný, a to tak, že jej zablokujeme pomocí pravidla `$network`. Pokud například systém ve výchozím nastavení používá Google DNS, můžeme přidat pravidla `|8.8.4.4^$network` a `|8.8.8.8^$network` pro zablokování Google DNS.

## Nepodporované prohlížeče

### Prohlížeče UC: UC Browser, UC Browser pro x86, UC Mini, UC Browser HD

Aby mohl AdGuard filtrovat přenosy HTTPS, musí uživatel přidat certifikát do důvěryhodných uživatelských certifikátů zařízení. Prohlížeče z rodiny UC bohužel nedůvěřují uživatelským certifikátům, takže v nich AdGuard nemůže provádět filtrování HTTPS.

* To solve this problem, move the certificate to the system certificate store

:::caution

Requires root access.

:::

### Prohlížeče Dolphin: Dolphin Browser, Dolphin Browser Express

AdGuard nemůže filtrovat provoz v režimu **Manuální proxy**, protože tento prohlížeč ignoruje systémové nastavení proxy.

* Use the **Local VPN** filtering mode to solve this problem

### Opera mini: Opera mini, Opera mini with Yandex

Opera mini ve výchozím nastavení řídí přenosy přes kompresní proxy server a AdGuard je nedokáže dekomprimovat a filtrovat současně.

* There is no solution at this moment

### Prohlížeč Puffin: Puffin Browser, Puffin Browser Pro

Puffin Browser drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time.

* There is no solution at this moment
