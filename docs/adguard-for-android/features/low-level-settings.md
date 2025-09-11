---
title: Low-level settings guide
sidebar_position: 5
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## How to reach Low-level settings

:::caution

Changing the low-level settings can cause problems with AdGuard’s performance, interrupt your Internet connection, or compromise your security and privacy. Use the low-level features only if you are an experienced user and know what you are doing, or if our support team has asked you to do so.

:::

To access *Low-level settings*, open the AdGuard app and tap the gear icon in the lower-right corner of the screen. Then select *General → Advanced → Low-level settings*.

## Low-level settings

For AdGuard for Android v4.x we’ve completely redesigned the low-level settings. We have reworked the list of settings and organized them into thematic groups with improved descriptions. We also added input validation and other safety valves.

### DNS protection

#### Fallback upstreams

Here you can specify the fallback DNS resolver(s) to use when the configured server is unavailable. Available options:

- *Automatic DNS*: Select this option if you want to use the system DNS or AdGuard DNS.
- *None*: Select this option if you do not want to have any fallback.
- *Custom DNS*: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. These addresses will be used as upstreams.

#### Fallback domains

Here you can list domains that will be redirected to fallback upstreams, if available. You can enter multiple domains, one per line. You can use limited wildcards.

#### Detect search domains

If this setting is enabled, AdGuard will detect DNS search domains and automatically redirect them to fallback upstreams, if available.

#### Bootstrap upstreams

Bootstrap DNS for encrypted DNS upstreams, such as DoH, DoT, and DoQ servers. Available options:

- *Automatic DNS*: Select this option if you want to use the system DNS or AdGuard DNS. This option is selected by default.
- *Custom DNS*: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. These addresses will be used as bootstrap upstreams.

#### Blocking mode for adblock-style rules

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for example, `||example.org^`). Available options:

- *REFUSED*: Respond with REFUSED
- *NXDOMAIN*: Respond with NXDOMAIN
- *Custom IP address*: Select this option to respond with a custom IP address. You will have to enter an IPv4 address for blocked A requests and an IPv6 address for blocked AAAA requests.

#### Blocking mode for hosts rules

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax
(for example, `<ip> <domain> 0.0.0.0 example.com`).

- *REFUSED*: Respond with REFUSED
- *NXDOMAIN*: Respond with NXDOMAIN
- *Custom IP address*: Select this option to respond with a custom IP address. You will have to enter an IPv4 address for blocked A requests and an IPv6 address for blocked AAAA requests.

#### DNS request timeout

Here you can specify the timeout, in milliseconds, that AdGuard will wait for each DNS request before redirecting it to a fallback DNS resolver. If you don’t fill in this field or enter an invalid value, the value of 5000 ms will be used.
If you have multiple upstreams, the fallback DNS will only be used after the timeouts of each upstream have expired.

#### Blocked response TTL

Here you can set the time to live (TTL) of the record for blocked domains. The default value is 3600 seconds.

#### DNS cache size

Here you can specify the maximum number of cached responses. The default value is 1000.

#### ECH blocking

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

### Filtering

#### Capture HAR

If this setting is enabled, AdGuard will log all filtered HTTP requests in HAR 1.2 format to the “har” subdirectory in the app cache directory. These files can be analyzed with the Fiddler tool.

This setting may slow down your device. Use it for debugging purposes only.

### HTTPS filtering

#### Encrypted Client Hello

If this setting is enabled, AdGuard will encrypt ClientHellos, if necessary. This feature requires HTTPS filtering to be enabled. This feature uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, the ClientHello packet will be encrypted. Make sure to use an encrypted DNS server with this feature.

**About ClientHellos and ECH**: Every encrypted Internet connection has an unencrypted part. This is the very first packet that contains the name of the server you are connecting to. Encrypted Client Hello technology is designed to solve this problem by encrypting this packet.

#### OCSP checking

If this setting is enabled, AdGuard will automatically check the revocation status of SSL certificates before connecting to a website. This feature requires HTTPS filtering to be enabled.

If the check is completed within the required timeout, AdGuard will  allow the connection if the certificate is valid or immediately block the connection if the certificate is revoked.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. If the certificate is revoked, current and future connections to the domain will be blocked.

#### Filter HTTP/3

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types. This feature requires HTTPS filtering to be enabled.

**About HTTP/3**: This is the latest version of the HTTP protocol, based on QUIC.

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set option `network.http.http3.disable_when_third_party_roots_found` in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### Outbound proxy

#### Show the Filter DNS requests setting

When this setting is enabled, the *Filter DNS requests* switch is displayed in the *Add proxy server* dialog. To access the dialog, open **Settings**, then go to **Filtering** → **Network** → **Proxy** → **Proxy server**, and click *+ Add proxy server*. Turning on that switch enables filtering of DNS requests passing through the specified outbound proxy.

### Protection

#### Port ranges

This setting allows you to specify the port ranges that should be filtered. Enter port ranges, one range per line. Use `..` to specify the range. For example, `80..5221`.

#### Log removed HTML events

If this setting is enabled, AdGuard will write information about blocked HTML elements to *Recent activity*. To access the logs, go to go to **Statistics** → **Recent activity**.

#### Scriptlet debugging

If this setting is enabled, the app will display debugging information in the browser console. In this mode, debugging in scriptlets is activated, and the browser logs the events that occur when applying scriptlet rules are applied.

#### Excluded apps

This setting allows you to list the packages and UIDs to exclude from AdGuard protection. Enter package names or UIDs, one per line. You can use `//` for comments.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic. Enter package names, one per line. You can use `//` for comments.

#### Reconfigure Automatic proxy when network changes

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy parameters when your device connects to another network. This setting only applies when *Routing mode* is set to *Automatic proxy*.

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

### Local VPN settings

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

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. The default value is `2001:db8:ad:0:ff::`.

### Miscellaneous

#### Show Developer tools on the main screen

If this setting is enabled, AdGuard will display the **Developer tools** icon in the upper right corner of the app’s home screen.

**Developer tools** is a specialized section available in AdGuard for Android v4.3 and later, designed for quick navigation and switching between features. It allows you to quickly enable or disable custom filters, access logs, enable various logs, and more.

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused when you open the Samsung Pay app. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
