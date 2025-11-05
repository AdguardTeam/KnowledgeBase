---
title: Low-Level-Einstellungen
sidebar_position: 5
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## So öffnen Sie die Low-Level-Einstellungen

:::caution

Das Ändern von <em x-id="3">Low-Level-Einstellungen</em> kann Probleme mit der Leistung von AdGuard verursachen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Dieser Bereich sollte nur geöffnet werden, wenn Sie wissen, was Sie tun, oder wenn Sie von unserem Support-Team dazu aufgefordert wurden.

:::

Um auf die _Low-Level-Einstellungen_ zuzugreifen, öffnen Sie die AdGuard App und tippen Sie auf das Zahnradsymbol in der unteren rechten Ecke des Bildschirms. Wählen Sie dann _Allgemein ➜ Erweitert ➜ Low-Level-Einstellungen_.

## Low-Level-Einstellungen

Für AdGuard für Android v4.x wurden die Low-Level-Einstellungen vollständig überarbeitet. Die Liste der Einstellungen wurde überarbeitet und in thematische Gruppen mit verbesserten Beschreibungen eingeteilt. Außerdem wurden die Eingabevalidierung und andere Sicherheitsmechanismen hinzugefügt.

### DNS-Schutz

#### Fallback-Upstreams

Here you can specify the fallback DNS resolver(s) to use when the configured server is unavailable. Available options:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS.
- _None_: Select this option if you do not want to have any fallback.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. These addresses will be used as upstreams.

#### Fallback-Domains

Here you can list domains that will be redirected to fallback upstreams, if available. You can enter multiple domains, one per line. You can use limited wildcards.

#### Suchdomains erkennen

If this setting is enabled, AdGuard will detect DNS search domains and automatically redirect them to fallback upstreams, if available.

#### Bootstrap-Upstreams

Bootstrap DNS for encrypted DNS upstreams, such as DoH, DoT, and DoQ servers. Available options:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS. This option is selected by default.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. These addresses will be used as bootstrap upstreams.

#### Sperrmodus für Regeln im Adblock-Stil

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for example, `||example.org^`). Available options:

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. You will have to enter an IPv4 address for blocked A requests and an IPv6 address for blocked AAAA requests.

#### Sperrmodus für Hosts-Regeln

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax
(for example, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. You will have to enter an IPv4 address for blocked A requests and an IPv6 address for blocked AAAA requests.

#### Zeitüberschreitung bei DNS-Anfragen

Here you can specify the timeout, in milliseconds, that AdGuard will wait for each DNS request before redirecting it to a fallback DNS resolver. If you don’t fill in this field or enter an invalid value, the value of 5000 ms will be used.
If you have multiple upstreams, the fallback DNS will only be used after the timeouts of each upstream have expired.

#### Gültigkeitsdauer der blockierten Antwort

Here you can set the time to live (TTL) of the record for blocked domains. The default value is 3600 seconds.

#### Größe des DNS-Cache

Hier können Sie die maximale Anzahl der zwischengespeicherten Antworten angeben. The default value is 1000.

#### ECH-Sperrung

If this setting is enabled, AdGuard will block TLS Encrypted Hello (ECH) in DNS responses.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DNS-over-HTTPS upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### SERVFAIL failure response

If this setting is enabled, AdGuard will send a SERVFAIL response to the client if all upstreams, including the fallback ones, fail to reply. If this setting is disabled, no response will be sent to the client in such a case.

#### Use fallback for all domains

If this setting is enabled, AdGuard will use fallback upstreams for all domains, including non-fallback ones. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validate DNS upstreams

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

#### Filter secure DNS

If this setting is enabled, AdGuard will filter encrypted DNS requests in addition to plain DNS requests. Encrypted DNS traffic mostly comes from Chrome and other browsers that have a secure DNS setting.

This setting has two modes:

- **Filter on the fly**. In this mode, AdGuard will filter DNS-over-HTTPS traffic without redirecting it to the local DNS proxy. It will use the DNS server specified in the browser settings.

- **Redirect to DNS proxy**. In this mode, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy for filtering. It will use the DNS server selected in the DNS settings of the AdGuard app.

### Filterung

#### Capture HAR

If this setting is enabled, AdGuard will log all filtered HTTP requests in HAR 1.2 format to the “har” subdirectory in the app cache directory. These files can be analyzed with the Fiddler tool.

This setting may slow down your device. Use it for debugging purposes only.

### HTTPS-Filterung

#### Encrypted Client Hello

If this setting is enabled, AdGuard will encrypt ClientHellos, if necessary. Für diese Funktion muss die HTTPS-Filterung aktiviert sein. This feature uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, the ClientHello packet will be encrypted. Make sure to use an encrypted DNS server with this feature.

**About ClientHellos and ECH**: Every encrypted Internet connection has an unencrypted part. This is the very first packet that contains the name of the server you are connecting to. Encrypted Client Hello technology is designed to solve this problem by encrypting this packet.

#### OCSP checking

If this setting is enabled, AdGuard will automatically check the revocation status of SSL certificates before connecting to a website. Für diese Funktion muss die HTTPS-Filterung aktiviert sein.

If the check is completed within the required timeout, AdGuard will  allow the connection if the certificate is valid or immediately block the connection if the certificate is revoked.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Wird das Zertifikat widerrufen, werden aktuelle und zukünftige Verbindungen zu der Domain gesperrt.

#### HTTP/3 filtern

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types. Für diese Funktion muss die HTTPS-Filterung aktiviert sein.

**About HTTP/3**: This is the latest version of the HTTP protocol, based on QUIC.

**Limitations**:

- Chromebasierte Browser akzeptieren keine Benutzerzertifikate, daher wird HTTP/3-Filterung in ihnen nicht unterstützt.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari unterstützt HTTP/3-Filterung ohne zusätzliche Konfiguration.

### Outbound-Proxy

#### Show the Filter DNS requests setting

When this setting is enabled, the _Filter DNS requests_ switch is displayed in the _Add proxy server_ dialog. To access the dialog, open **Settings**, then go to **Filtering** → **Network** → **Proxy** → **Proxy server**, and click _+ Add proxy server_. Turning on that switch enables filtering of DNS requests passing through the specified outbound proxy.

### Schutz

#### Port ranges

This setting allows you to specify the port ranges that should be filtered. Enter port ranges, one range per line. Use `..` to specify the range. For example, `80..5221`.

#### Log removed HTML events

If this setting is enabled, AdGuard will write information about blocked HTML elements to _Recent activity_. To access the logs, go to go to **Statistics** → **Recent activity**.

#### Scriptlet debugging

If this setting is enabled, the app will display debugging information in the browser console. In this mode, debugging in scriptlets is activated, and the browser logs the events that occur when applying scriptlet rules are applied.

#### Excluded apps

This setting allows you to list the packages and UIDs to exclude from AdGuard protection. Enter package names or UIDs, one per line. You can use `//` for comments.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic. Enter package names, one per line. You can use `//` for comments.

#### Reconfigure Automatic proxy when network changes

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy parameters when your device connects to another network. This setting only applies when _Routing mode_ is set to _Automatic proxy_.

#### IPv6 filtering

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Here you can list the IPv4 ranges to exclude from filtering. Enter one IP range per line. You can use `//` for comments.

#### IPv6 ranges excluded from filtering

Here you can list the IPv6 ranges to exclude from filtering. Enter one IP range per line. You can use `//` for comments.

#### TCP keepalive for outgoing sockets

If this setting is enabled, AdGuard will send a keepalive probe after the specified time interval to ensure that the TCP connection is still alive. After a system-defined number of unsuccessful attempts to get a response from the server, the system will automatically close the TCP connection.

This setting allows you to specify:

- **Idle time**, in seconds, before sending TCP keepalive probes to outgoing sockets. The default value is 0. If you are having problems with NAT, set this to 20.
- **Time between keepalive probes** for an unresponsive peer. The default value is 0 seconds.

### Einstellungen des lokalen VPN

#### Recovery delay for revoked VPN

Here you can set the delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. This is the maximum size of the data packet used in your local VPN. The recommended range is 1500-1900 bytes.

#### Packet capture (PCAP)

This setting enables logging of TUN interfaces. When enabled, AdGuard creates a file `timestamp.pcap`, such as  1682599851461.pcap, in the app cache directory. This file lists all network packets transmitted through the VPN and can be analyzed using the Wireshark tool.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when the device is on Wi-Fi.

#### IPv4 address

Here you can specify the IP address that will be used to create a TUN interface. The default value is `172.18.11.218`.

#### Forcibly route LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the _Route all LAN IPv4 connections_ option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if _Forcibly route LAN IPv4_ is disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. The default value is `2001:db8:ad:0:ff::`.

### Sonstiges

#### Show Developer tools on the main screen

If this setting is enabled, AdGuard will display the **Developer tools** icon in the upper right corner of the app’s home screen.

**Developer tools** is a specialized section available in AdGuard for Android v4.3 and later, designed for quick navigation and switching between features. It allows you to quickly enable or disable custom filters, access logs, enable various logs, and more.

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused when you open the Samsung Pay app. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
