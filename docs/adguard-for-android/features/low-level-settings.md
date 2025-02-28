---
title: Low-level settings guide
sidebar_position: 5
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## How to reach Low-level settings

:::caution

Changing the low-level settings can cause problems with AdGuard's performance, interrupt your Internet connection, or compromise your security and privacy. Only use the low-level features only if you are an experienced user and know what you are doing, or if our support team has asked you to do so.

:::

To access *Low-level settings*, open the AdGuard app and tap the gear icon in the lower-right corner of the screen. Then select *General → Advanced → Low-level settings*.

## Low-level settings

For AdGuard v4.x for Android we've completely redesigned the low-level settings. We have reworked the list of settings and organized them into thematic groups with improved descriptions. We also added input validation and other safety valves.

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

Here you can specify the timeout, in milliseconds, that AdGuard will wait for each DNS request before redirecting it to a fallback DNS resolver.
If you have multiple upstreams, the fallback DNS will only be used after the timeouts of each upstream have expired.
If you don’t fill in this field or enter an invalid value, the value of 5000 ms will be used.

#### Blocked response TTL

Here you can specify the TTL (time to live) value that will be returned in response to a blocked request.

#### DNS cache size

Here you can specify the maximum number of cached responses. Default value is 1000.

#### ECH blocking

If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses.

#### Ignore unavailable outbound proxy

If this setting is enabled, AdGuard will send DNS requests directly when the outbound proxy is unavailable.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DoH upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### SERVFAIL failure response

If this setting is enabled and all upstreams, including fallback ones, fail to respond, AdGuard will send a SERVFAIL response to the client.

#### Use fallback for non-fallback domains

If this setting is enabled, AdGuard will use fallback upstreams for all domains. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validate DNS upstreams

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

#### Filter secure DNS

If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a *Secure DNS* (or similar) setting. You can use *Filter secure DNS* in two different modes:

- **Filter on the fly**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn’t redirect it to the local DNS proxy. If a DNS server is specified in the browser’s settings, this server will handle the DoH traffic for this browser

- **Redirect to DNS proxy**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard’s DNS settings will handle all DoH traffic

### Filtering

#### Capture HAR

If this setting is enabled, AdGuard will capture HAR files. It will create a directory named “har” inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.

Use it only for debugging purposes!

### HTTPS filtering

#### Encrypted Client Hello

Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello technology is supposed to solve this issue and encrypt that last bit of unencrypted information. To benefit from it, enable the *Encrypted Client Hello* option. It uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, Client Hello packet will be encrypted.

#### OCSP checking

If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. If the certificate is revoked, current and future connections to the domain will be blocked.

#### Redirect DNS-over-HTTPS requests

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy.

#### Filter HTTP/3

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

### Outbound proxy

#### Show the Filter DNS requests setting

If this is enabled, the *Filter DNS requests* switch will be displayed in the *Add proxy server* dialog. Use it to enable filtering of DNS requests passing through the specified proxy.

### Protection

#### Port ranges

Here you can specify port ranges that should be filtered.

#### Log removed HTML events

If this setting is enabled, AdGuard will record blocked HTML elements in *Recent activity*.

#### Scriptlet debugging

If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied.

#### Excluded apps

Here you can list package names and UIDs that you want to exclude from AdGuard protection.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic.

#### Reconfigure Automatic proxy when network changes

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if *Routing mode* is set to *Automatic proxy*.

#### IPv6 filtering

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Filtering for the IPv4 ranges listed in this section is disabled.

#### IPv6 ranges excluded from filtering

Filtering for the IPv6 ranges listed in this section is disabled.

#### TCP keepalive for outgoing sockets

If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer.

After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection.

### Local VPN settings

#### Recovery delay for revoked VPN

Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes.

#### Restore VPN automatically

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Packet capture (PCAP)

If this setting is enabled, AdGuard will create a file `timestamp.pcap` (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

#### IPv4 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `172.18.11.218`.

#### Forcibly route LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `2001:db8:ad:0:ff::`.

### Miscellaneous

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
