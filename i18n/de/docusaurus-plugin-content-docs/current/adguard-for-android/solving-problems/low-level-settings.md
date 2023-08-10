---
title: Low Level Settings guide
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://adguard.com/download.html?auto=true)

:::

## How to reach the Low-level settings

:::Zur Beachtung

Das Ändern von *Low-Level-Einstellungen* kann Probleme mit der Leistung von AdGuard verursachen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. You should only open this section if you are sure of what you are doing or our support-team has asked you about it.

:::

To go to *Low-level settings*, open the AdGuard app and tap the gear icon in the lower right corner of the screen. Then choose *General → Advanced → Low-level settings*.

## Low-level settings

For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others.

### DNS protection

#### Fallback upstreams

Here you can specify the fallback DNS resolver(s) to be used if the configured server is unavailable. There are three options: *Automatic DNS*, *None*, and *Custom DNS*. If no fallback server is specified, the *Automatic DNS* — the system DNS or AdGuard DNS — will be used. *None* means no fallback at all. Selecting *Custom DNS* allows you to list IPv4 and IPv6 server addresses to use as upstreams.

#### Fallback domains

Here you can list domains that will be forwarded directly to fallback upstreams if they exist.

#### Detect search domains

If this option is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams.

#### Bootstrap upstreams

Bootstrap DNS for DoH, DoT, and DoQ servers. The *Automatic DNS* - the system DNS or AdGuard DNS - is used by default. By selecting *Custom DNS*, you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams.

#### Sperrmodus für Regeln im Adblock-Stil

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for instance, `||example.org^`).

*  Respond with REFUSED (default)
*  Respond with NXDOMAIN
*  Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)

#### Sperrmodus für Hosts-Regeln

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, `<ip> <domain> 0.0.0.0 example.com`).

*  Respond with REFUSED
*  Respond with NXDOMAIN
*  Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here) – default

#### DNS request timeout

Hier können Sie die Zeit in Millisekunden angeben, die AdGuard auf die Antwort des ausgewählten DNS-Servers warten soll, bevor er auf den Fallback zurückgreift. Wenn Sie dieses Feld nicht ausfüllen oder einen ungültigen Wert eingeben, wird der Wert von 5.000 verwendet.

#### Blocked response TTL

Hier können Sie den TTL-Wert (Time to Live) angeben, der als Antwort auf eine blockierte Anfrage zurückgegeben wird.

#### DNS cache size

Here you can specify the maximum number of cached responses. Default value is 1000.

#### ECH blocking

If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses.

#### Ignore unavailable outbound proxy

Enable this feature to make AdGuard send DNS requests directly if the outbound proxy is unavailable.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

By default, all DNS requests for DNS-over-HTTPS are sent via HTTP/2 protocol. If enabled, AdGuard uses HTTP/3 to speed up DNS query resolution for DoH upstreams.

#### SERVFAIL failure response

Once enabled, AdGuard sends a SERVFAIL response to the client if all upstreams, including fallback ones, fail to reply. When this setting is disabled, no response is sent to the client.

#### Use fallback for non-fallback domains

Enable this feature if you want AdGuard to use fallback upstream for all domains. Otherwise, fallback upstream will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validate DNS upstreams

Enable to make AdGuard test DNS upstreams before adding or updating custom DNS servers.

### Filtering

#### Capture HAR

Here you can enable HAR file capture. Use it only for debugging purposes! If the setting is enabled, AdGuard will create a directory named "har" inside the app cache directory. It contains information about all filtered HTTP requests in HAR 1.2 format and can be analyzed with the Fiddler program.

### HTTPS-Filterung

#### Encrypted Client Hello

Jede verschlüsselte Internetverbindung hat einen unverschlüsselten Teil. Dies ist das allererste Paket, das den Namen des Servers enthält, mit dem Sie sich verbinden. Die verschlüsselte Client-Hallo-Technologie soll dieses Problem lösen und das letzte bisschen an unverschlüsselter Information verschlüsseln. To benefit from it, enable the *Encrypted Client Hello* option. It uses a local DNS proxy to look for the ECH configuration for the domain. Wenn es gefunden wird, wird das ClientHello-Paket verschlüsselt.

#### OCSP checking

Once enabled, this option runs asynchronous OCSP checks to check whether the website’s SSL certificate is revoked.

If the OCSP check is completed within the minimum timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will establish a connection and continue checking the certificate in the background. If it is revoked, current and future connections to the domain will be blocked.

#### Redirect DNS-over-HTTPS requests

IF enabled, DNS-over-HTTPS requests will be redirected to the DNS Protection module. We recommend disabling fallback upstreams and use only encrypted DNS servers to maintain privacy.

### Outbound Proxy

#### Show the Filter DNS requests setting

When this feature is enabled, the string *Filter DNS requests* appears in the *Settings ➝ Filtering ➝ Network ➝ Proxy ➝ Proxy server ➝ Add proxy server* section with the switch next to it. By toggling the switch, you can enable filtering of DNS requests passing through the proxy.

### Protection

#### Port ranges

Here you can specify port ranges that should be filtered.

#### Log removed HTML events

If enabled, AdGuard records blocked HTML elements in the filtering log.

#### Scriplet debugging

If you need to activate debugging of scriptlets, enable this feature. Then there will be messages in the browser log that some scriplet rules have been applied.

#### Excluded apps

Here you can list package names and UIDs that you want to exclude from AdGuard protection.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic.

#### Reconfigure Automatic proxy when network changes

Enable this setting if you want the protection to restart to reconfigure the automatic proxy settings when the device connects to another network. The state of this setting affects operation only if the current routing mode is Automatic proxy.

#### IPv6 filtering

If enabled, AdGuard filters IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Filtering for IPv4 ranges, listed in this section, will be disabled.

#### IPv6 ranges excluded from filtering

Filtering for IPv6 ranges, listed in this section, will be disabled.

#### TCP keepalive for outgoing sockets

If enabled, AdGuard sends a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here you can specify the TCP keepalive idle time before starting keepalive probes and time between keepalive probes for an unresponsive peer.

After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection.

### Local VPN settings

#### Recovery delay for revoked VPN

Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes.

#### Restore VPN automatically

If enabled, this feature automatically re-enables AdGuard’s local VPN after it has been turned off due to network absence, tethering, or low-power mode.

#### Packet capture (PCAP)

If enabled, AdGuard will create the special file name `timestamp.pcap` (for instance, 1682599851461.pcap). It contains all network packets transferred through the VPN. This file is located in the app cache directory and can be analyzed with the Wireshark program.

#### Include Wi-Fi gateway in VPN routes

If you want the gateway IP addresses to be added to VPN routes when on Wi-Fi, enable this feature.

#### IPv4 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `172.18.11.218`.

#### Forcibly route LAN IPv4

When enabled, AdGuard filters all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Route all LAN IPv4 connections

Once enabled, AdGuard excludes LAN connections from filtering for simple networks. May not work for complex networks. Works only with the *Forcibly route LAN IPv4* option disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `2001:db8:ad:0:ff::`.

### Sonstiges

#### Detect Samsung Pay

Korean users may encounter issues with Samsung Pay when AdGuard is enabled. Activate this feature to pause AdGuard's protection and use the Samsung Pay app seamlessly.
