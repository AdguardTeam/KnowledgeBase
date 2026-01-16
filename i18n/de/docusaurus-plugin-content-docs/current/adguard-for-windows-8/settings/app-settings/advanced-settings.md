---
title: Erweiterte Einstellungen
sidebar_position: 4
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

The _Advanced settings_ section contains options that go beyond what most users usually need. AdGuard for Windows works perfectly out of the box, but these settings can be useful in special cases or for troubleshooting.

:::caution

Changing advanced settings without understanding them may cause performance issues, break your Internet connection, or affect your security and privacy. Only modify them if you know what you’re doing or if instructed by our support team.

:::

## Anwendung von der Filterung ausschließen, durch Angabe des vollständigen Pfads

If you want AdGuard to skip filtering a specific app, enter its full file path here. You can add multiple apps by separating their paths with semicolons.

## AdGuard Pop-up-Benachrichtigungen aktivieren

Aktivieren Sie diese Funktion, um Popup-Benachrichtigungen von AdGuard anzuzeigen. Sie werden nicht allzu oft angezeigt und enthalten nur wichtige Informationen. You can also reopen the latest notification from the tray menu.

## Filter-Abonnement URLs automatisch filtern

When enabled, AdGuard will automatically detect filter subscription links (like `abp:subscribe`) and open a window to help you add them to your filters.

## Umleitungstreiber-Modus verwenden

With this option enabled, AdGuard reroutes all your traffic to a local proxy server for filtering.

If it’s turned off, AdGuard filters traffic directly — without redirecting it. In this mode, Windows sees AdGuard as the only app connecting to the Internet, since all other apps go through it. This can slightly improve performance but may reduce the effectiveness of the system firewall.

## Open AdGuard at system start-up

Enable this option to launch the AdGuard window automatically when your PC starts.

## Filterung beim Systemstart aktivieren

Since version 7.12, AdGuard doesn’t start filtering traffic automatically after you boot your PC — unless the _Launch AdGuard at system start-up_ option is enabled. Instead, it runs in a passive “idle” mode.

Turning this on allows AdGuard to filter traffic immediately, even if the app hasn’t been opened yet.

## Localhost filtern

Enable this to allow AdGuard to filter loopback (localhost) traffic, which some apps use to communicate within the system. If AdGuard VPN is installed, this setting is always on because the VPN requires it to work properly.

## Capture HAR

This is for debugging only. When enabled, AdGuard will create a HAR file (HTTP Archive 1.2 format) with detailed info about all filtered requests. You can open it in apps like Fiddler.

Keep in mind: it may slow down your browsing.

## Show QUIC in the filtering log

When enabled, AdGuard will include QUIC protocol traffic in the filtering log — but only for blocked requests.

## Java blockieren

Some websites still use Java plug-ins, which rely on outdated and insecure technology. You can disable these plug-ins for security.

Using the _Block Java_ option does not affect JavaScript — it will remain enabled.

## Blocking mode for DNS rules

Choose how AdGuard responds when a domain is blocked by a DNS rule based on the [hosts-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Return a `REFUSED` error
- Return a `NXDOMAIN` error
- Return a custom IP address

### Benutzerdefinierte IPv4-Adresse

If _Custom IP address_ is selected in _Blocking mode for DNS rules_, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default REFUSED error.

### Benutzerdefiniertes IPv6-Adresse

If _Custom IP address_ is selected in _Blocking mode for DNS rules_, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default REFUSED error.

## Fallback-Server

Set backup DNS servers here. AdGuard will use them if the main DNS server doesn’t respond within the timeout you set. You can:

- Use your system’s default DNS servers
- Add custom fallback servers
- Or choose not to use fallback servers at all

## DNS server timeout

Specify how long (in milliseconds) AdGuard should wait for a DNS response before switching to a fallback server. If left empty or invalid, the default is 5000 ms (5 seconds).

## Custom bootstrap addresses

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in DNS protection. Such a “middle ground” is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In diesem Fall fungiert der Bootstrap als Übersetzer und wandelt die Buchstaben in Zahlen um, die Ihr System versteht.

But if needed, you can specify different IP addresses here — they’ll be tried in the order from top to bottom. If none work or nothing is entered, AdGuard will fall back to system defaults.

## DNS-Ausschlüsse

Domains listed here bypass AdGuard DNS servers. Their requests go through the system’s default resolver, and AdGuard does not apply any blocking rules to them.
