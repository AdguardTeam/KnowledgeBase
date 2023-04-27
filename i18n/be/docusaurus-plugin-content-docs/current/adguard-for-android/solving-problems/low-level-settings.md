---
title: Low Level Settings guide
sidebar_position: 6
---

## How to reach the Low-level settings

> Changing *Low-level settings* can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only open this section if you are sure of what you are doing or our support-team has asked you about it.

To go to *Low-level settings*, open AdGUard and tap the gear icon on the bottom-right corner of the screen. Then choose *General → Advanced → Low-level settings*.

## Low-level settings

For Android v4.0 we completely redesigned the low-level settings: divided them into logic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some and added some other settings. 

### DNS protection

#### Fallback upstreams 

Here you can specify a fallback DNS resolver that will be used when the configured server is not available. If not specified, the system default DNS is used as a fallback. A string "none" means no fallback at all.

#### Fallback domains

Here you can list domains that will be directly forwarded to the fallback upstreams (if they exist).

#### Detect search domains

If enabled AdGuard detects search domains and automatically forwards them to the fallback upstreams if they exist.

#### Bootstrap upstreams

Bootstrap DNS for DoH, DoT, and DoQ servers. The System DNS server is used by default.

#### Blocking mode for adblock-style rules

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax.

*  Respond with REFUSED (default)
*  Respond with NXDOMAIN
*  Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)

#### Blocking mode for hosts rules

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax.

*  Respond with REFUSED
*  Respond with NXDOMAIN
*  Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here) – default

#### DNS request timeout

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

#### Blocked response TTL

Here you can specify the TTL (time to live) value that will be returned in response to a blocked request.

#### DNS cache size
Here you can specify the maximum number of cached responses. Default value is 1000.

#### ECH blocking

If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses.

#### Ignore unavailable outbound proxy

Enable this feature to make AdGuard send DNS requests directly if the outbound proxy is unavailable. 

#### Try HTTP/3 for DNS-over-HTTPS upstreams

If enabled, AdGuard uses HTTP/3 to speed up DNS query resolution for DNS-over-HTTPS upstreams. 

#### SERVFAIL failure response

Once enabled, AdGuard sends a SERVFAIL response to the client if all upstreams, including fallback ones, fail to reply. When this setting is disabled, no response is sent to the client. 

#### Use fallback for non-fallback domains

Enable this feature if you want AdGuard to use fallback upstream for all domains. Otherwise fallback upstream will be only used for fallback domains.

#### Validate DNS upstreams

Enable to make AdGuard test DNS upstreams before adding or updating custom DNS servers.

### Filtering

#### Capture HAR

Here you can enable HAR file capture. Use it only for debugging purposes! If the setting is enabled, AdGuard will create a directory named "har" inside the app cache directory. It contains information about all filtered HTTP requests in HAR 1.2 format and can be analyzed with the Fiddler program.

### HTTPS filtering

#### Encrypted Client Hello

Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello technology is supposed to solve this issue and encrypt that last bit of unencrypted information. To benefit from it, enable the *Encrypted Client Hello* option. It uses a local DNS proxy to look for ECH configuration for the domain. If it is found, ClientHello packet will be encrypted.

#### OCSP checking

Once enabled, this option runs asynchronous OCSP checks to check whether the website’s SSL certificate is revoked. 

If the OCSP check completes within the minimum timeout, AdGuard will immediately apply the result: block the connection if the certificate is revoked or establish a connection if the certificate is valid. 

If the verification takes too long, AdGuard will establish a connection and continue checking in the background. If the certificate is revoked, current and future connections to the domain will be blocked.

#### Redirect DNS-over-HTTPS requests

IF enabled, DNS-over-HTTPS requests will be redirected to the DNS filtering module. We recommend disabling fallback upstreams and use only encrypted DNS servers to maintain privacy.

### Outbound Proxy

#### Show the Filter DNS requests setting

By enabling this feature, you allow changing the *Filter DNS requests* setting in the outbound proxy settings.

### Protection

#### Port ranges

Here you can specify ports that should be filtered. 

#### Log removed HTML events

If you want AdGuard to write info about blocked HTML elements to the filtering log, enable this feature.

#### Scriplet debugging

If you need to activate debugging of scriptlets, enable this feature.

#### Excluded apps

Here can be listed packages and UIDs you want to exclude from AdGuard’s protection.

#### QUIC bypass packages

Here you can specify packages names for which AdGuard should bypass QUIC traffic.

#### IPv6 filtering

If enabled, AdGuard filters IPv6 networks if an IPv6 network interface is available

#### IPv4 ranges excluded from filtering 

Filtering for IPv4 ranges, listed in this section, will be disabled.

#### IPv6 ranges excluded from filtering 

Filtering for IPv6 ranges, listed in this section, will be disabled.

#### TCP keepalive for outgoing sockets

Periodically sends TCP packets over idle connection to ensure it is alive and to renew NAT timeouts. This option can be useful to bypass the strict network address translation (NAT) settings that some ISPs use. 

Here you can specify the TCP keepalive interval and timeout. 

### Local VPN settings

#### Recovery delay for revoked VPN

Here you can set the time of a delay in milliseconds before AdGuard will try to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard will reschedule the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes. 

#### Restore VPN automatically

If enabled, this feature automatically re-enables AdGuard’s local VPN after it has been turned off due to network absence, tethering, or low-power mode.

#### Packet capture (PCAP)

If enabled, AdGuard will create the special file name `tun.pcap`. It contains all network packets transferred through the VPN. This file is located in the app cache directory and can be analyzed with the Wireshark program.

#### Include Wi-Fi gateway in VPN routes

If you want the gateway IP addresses to be added to VPN routes when on Wi-Fi, enable this feature.

#### IPv4 address

TUN interface IPv4 address.

#### Forcibly route LAN IPv4

When enabled, AdGuard filters all LAN connections. 

#### Route all LAN IPv4 connections

Once enabled, AdGuard excludes LAN connections from filtering for simple networks. May not work for complex networks. 

#### IPv6 address

TUN interface IPv6 address.

### Miscellaneous

#### Detect Samsung Pay

Enable this feature to pause AdGuards’ protection when you open the Samsung Pay app.
