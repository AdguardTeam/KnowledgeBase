---
title: Známé problémy kompatibility s aplikacemi pro Android
sidebar_position: 16
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Aplikace VPN

If you are using AdGuard in the *Local VPN* filtering mode, you cannot run other VPN apps at the same time. To solve this problem, we suggest that you:

- Use [AdGuard VPN](https://adguard-vpn.com/welcome.html) — its *Integrated mode* allows two apps to operate simultaneously
- Configure your VPN app to act as an [outbound proxy](../solving-problems/outbound-proxy.md) and set up a local outbound proxy using the parameters from the third-party app
- Switch to the *Automatic proxy* mode. When you do that, AdGuard will no longer use local VPN and will reconfigure iptables instead
- Switch to the *Manual proxy* mode. To do this, go to *Settings* →  *Filtering* → *Network* → *Routing mode*

:::note Compatibility

The *Automatic proxy* mode is only accessible on rooted devices. For *Manual proxy*, rooting is required on devices running on Android 10 or later.

:::

## Soukromý DNS

Funkce Soukromý DNS byla představena v Android Pie. Před verzí Q služba Soukromý DNS neporušovala logiku filtrování AdGuard DNS a předávání DNS prostřednictvím AdGuardu fungovalo normálně. Od verze Q však přítomnost služby Soukromý DNS nutí aplikace přesměrovávat přenosy přes systémový řešitel namísto přes AdGuard. Další podrobnosti najdete v [blogu vývojářů](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) systému Android.

- Problém se Soukromým DNS vyřešíte pomocí pravidla `$network`

Někteří výrobci zařízení nechávají nastavení Soukromých DNS skryté a jako výchozí nastavují režim "Automaticky". Zakázat službu Soukromý DNS tedy nelze, ale můžeme systém přimět, aby si myslel, že odchozí server není platný, a to tak, že jej zablokujeme pomocí pravidla `$network`. Pokud například systém ve výchozím nastavení používá Google DNS, můžeme přidat pravidla `|8.8.4.4^$network` a `|8.8.8.8^$network` pro zablokování Google DNS.

## Nepodporované prohlížeče

### Prohlížeče UC: UC Browser, UC Browser pro x86, UC Mini, UC Browser HD

Aby mohl AdGuard filtrovat přenosy HTTPS, musí uživatel přidat certifikát do důvěryhodných uživatelských certifikátů zařízení. Prohlížeče z rodiny UC bohužel nedůvěřují uživatelským certifikátům, takže v nich AdGuard nemůže provádět filtrování HTTPS.

- To solve this problem, move the [certificate to the system certificate store](../solving-problems/https-certificate-for-rooted.md/)

:::note Compatibility

Vyžaduje root přístup.

:::

### Prohlížeče Dolphin: Dolphin Browser, Dolphin Browser Express

AdGuard cannot filter its traffic when operating in the *Manual proxy* mode because this browser ignores system proxy settings.

- Use the *Local VPN* filtering mode to solve this problem

### Opera mini: Opera mini, Opera mini with Yandex

Opera mini ve výchozím nastavení řídí přenosy přes kompresní proxy server a AdGuard je nedokáže dekomprimovat a filtrovat současně.

- V tuto chvíli neexistují žádná řešení

### Prohlížeč Puffin: Puffin Browser, Puffin Browser Pro

Prohlížeč Puffin ve výchozím nastavení řídí přenosy přes kompresní proxy server a AdGuard je nedokáže dekomprimovat a filtrovat současně.

- V tuto chvíli neexistují žádná řešení
