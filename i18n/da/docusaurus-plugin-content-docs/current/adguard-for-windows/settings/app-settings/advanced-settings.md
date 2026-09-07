---
title: Avancerede indstillinger
sidebar_position: 4
---

Afsnittet _Avancerede indstillinger_ indeholder indstillinger, som går ud over, hvad de fleste brugere normalt har behov for. AdGuard til Windows fungerer perfekt efter installation, men disse indstillinger kan være nyttige i særlige tilfælde eller til fejlfinding.

:::caution

Ændring af avancerede indstillinger uden at forstå dem kan forårsage problemer med ydeevnen, afbryde internetforbindelsen eller påvirke sikkerheden og fortroligheden. Ændr dem kun, hvis konsekvenserne forstås, eller hvis vores supportteam anmoder herom.

:::

## Undtag app fra filtrering ved at angive den fulde sti

Skal AdGuard overspringe filtrering af en bestemt app, angiv da dens fulde filsti hér. Der kan tilføjes flere apps ved at adskille deres stier med semikolon.

## Aktivér AdGuard pop op-notifikationer

Aktivér denne funktion for at se AdGuard pop op-notifikationer. De vises ikke for ofte og indeholder kun vigtig information. Den seneste notifikation kan også åbnes fra bakkemenuen.

## Opsnap automatisk filterabonnements-URL'er

Når slået til, detekterer AdGuard automatisk filterabonnementslink (såsom `abp:subscribe`) og åbner et vindue for at assistere med at føje dem til filterlisten.

## Brug tilstanden omdirigeingsdriver

Er denne indstilling slået til, omdirigeret AdGuard al trafik og ruter den til den lokale proxyserver for filtrering.

If it’s turned off, AdGuard filters traffic directly — without redirecting it. In this mode, Windows sees AdGuard as the only app connecting to the Internet, since all other apps go through it. This can slightly improve performance but may reduce the effectiveness of the system firewall.

## Open AdGuard at system start-up

Enable this option to launch the AdGuard window automatically when your PC starts.

## Enable filtering at system start-up

Since version 7.12, AdGuard doesn’t start filtering traffic automatically after you boot your PC — unless the _Launch AdGuard at system start-up_ option is enabled. Instead, it runs in a passive “idle” mode.

Turning this on allows AdGuard to filter traffic immediately, even if the app hasn’t been opened yet.

## Filter localhost

Enable this to allow AdGuard to filter loopback (localhost) traffic, which some apps use to communicate within the system. If AdGuard VPN is installed, this setting is always on because the VPN requires it to work properly.

## Optag HAR

This is for debugging only. When enabled, AdGuard will create a HAR file (HTTP Archive 1.2 format) with detailed info about all filtered requests. You can open it in apps like Fiddler.

Keep in mind: it may slow down your browsing.

## Show QUIC in the filtering log

When enabled, AdGuard will include QUIC protocol traffic in the filtering log — but only for blocked requests.

## Block Java

Some websites still use Java plug-ins, which rely on outdated and insecure technology. You can disable these plug-ins for security.

Using the _Block Java_ option does not affect JavaScript — it will remain enabled.

## Blocking mode for DNS rules

Choose how AdGuard responds when a domain is blocked by a DNS rule based on the [hosts-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Return a `REFUSED` error
- Return a `NXDOMAIN` error
- Return a custom IP address

### Custom IPv4 address

If _Custom IP address_ is selected in _Blocking mode for DNS rules_, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default REFUSED error.

### Custom IPv6 address

If _Custom IP address_ is selected in _Blocking mode for DNS rules_, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default REFUSED error.

## Fallback servers

Set backup DNS servers here. AdGuard will use them if the main DNS server doesn’t respond within the timeout you set. You can:

- Use your system’s default DNS servers
- Add custom fallback servers
- Or choose not to use fallback servers at all

## DNS server timeout

Specify how long (in milliseconds) AdGuard should wait for a DNS response before switching to a fallback server. If left empty or invalid, the default is 5000 ms (5 seconds).

## Custom bootstrap addresses

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in DNS protection. Such a “middle ground” is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

But if needed, you can specify different IP addresses here — they’ll be tried in the order from top to bottom. If none work or nothing is entered, AdGuard will fall back to system defaults.

## DNS exclusions

Domains listed here bypass AdGuard DNS servers. Their requests go through the system’s default resolver, and AdGuard does not apply any blocking rules to them.
