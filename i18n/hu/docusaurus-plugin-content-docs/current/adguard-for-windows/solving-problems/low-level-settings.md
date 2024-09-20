---
title: Advanced (low-level) Settings guide
sidebar_position: 7
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Previously known as low-level settings, Advanced Settings mostly contain options that go beyond the average user competence and aren't applied in everyday use. AdGuard for Windows is designed to work without ever having to change any of them, but they will provide additional features in some corner cases or when solving an uncommon problem.

:::figyelem

Mindlessly changing *Advanced Settings* can potentially cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only make changes to these settings if you are sure of what you are doing or if our support team has asked you to do so.

:::

## How to reach Advanced Settings

To go to *Advanced settings*, in the main windows click *Settings → General Settings* and scroll down to *Advanced Settings*. Alternatively, select *Advanced → Advanced settings...* in the tray menu.

## Advanced Settings

Once you open Advanced Settings, you will be presented with the following options:

### Block TCP Fast Open

If enabled, AdGuard will block TCP Fast Open in the Edge browser. To apply settings, you need to restart the browser.

### Use Encrypted Client Hello

Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello technology is supposed to solve this issue and encrypt that last bit of unencrypted information. To benefit from it, enable the *Use Encrypted Client Hello* option. It uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, Client Hello packet will be encrypted.

### Check websites' certificate transparency

Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy. If the certificate does not comply with the Chrome Certificate Transparency Policy, AdGuard will not filter the website. Chrome, in turn, will block it.

### Enable SSL/TLS certificate revocation checks

Once enabled, this option runs asynchronous OCSP checks to check whether the website’s SSL/TLS certificate is revoked.

If the OCSP check completes within the minimum timeout, AdGuard will immediately apply the result: block the connection if the certificate is revoked or establish a connection if the certificate is valid.

If the verification takes too long, AdGuard will establish a connection and continue checking in the background. If the certificate is revoked, current and future connections to the domain will be blocked.

### Show AdGuard VPN in Settings

Enabling this option allows you to display the AdGuard VPN tab in Settings for easy opening of the app and the product's website.

### Exclude app from filtering by entering the full path

If you want AdGuard not to filter any specific application, specify the full path to them and the apps will be excluded from filtering. Separate different paths by semicolons.

### Enable AdGuard pop-up notifications

Enable this feature to see AdGuard pop-up notifications. They do not appear too often and contain only important information. You can also use the tray menu to recall the last pop-up notification.

### Automatically intercept filter subscription URLs

Enable this feature if you want AdGuard to automatically intercept filter subscription URLs (i.e. `abp:subscribe` and alike) and to open a custom filter installation dialog.

### Filter HTTP/3

If this option is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

### Use redirect driver mode

If this option is enabled, AdGuard intercepts all the traffic and redirects it to the local proxy server for further filtering.

Otherwise, AdGuard will filter all the traffic on the fly, without redirection. In this case, the system will consider AdGuard to be the sole application that connects to the Internet (other applications are routed through it). The downside is that it will make the system Firewall less effective. The upside is that this approach works a little bit faster.

### Open main window at system start-up

Enable this option to make the main AdGuard window open after the system is loaded. Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in *Settings → General Settings*.

### Enable filtering at system start-up

Starting from v7.12, by default, AdGuard's service does not filter traffic after OS startup if the option Launch AdGuard at system start-up is disabled. In other words, the AdGuard's service is started in “idle” mode. Enable this option to make AdGuard filter traffic even if the app is not launched.

:::note

Before v7.12, the AdGuard service started in filtering mode by default (even if the *Launch AdGuard at system start-up* was disabled). If you were satisfied with the old behavior, enable this option.

:::

### Filter localhost

If you want AdGuard to filter loopback connections, check the box. This option will always be on if you have AdGuard VPN installed, because otherwise it won't be able to work.

### Exclude specified IP ranges from filtering

If you don't want AdGuard to filter particular subnets, enable this feature and specify the IP ranges in the CIDR notation (e.g. 98.51.100.14/24) in the **IP ranges excluded from filtering** section below.

### Enable HAR writing

This option should be enabled **only for debugging purposes**. Ticking the checkbox will make AdGuard create a file in the HAR 1.2 format containing information about all filtered HTTP requests. This file can be analyzed with the Fiddler app. Note that it may slow down your web browsing significantly.

### Add an extra space to the plain HTTP request

Adds extra space between the HTTP method and the URL and removes space after the "Host:" field to avoid deep packet inspection. For instance, the request

`GET /foo/bar/ HTTP/1.1
Host: example.org`

will be converted to

`GET /foo/bar/ HTTP/1.1
Host: example.org`

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Adjust size of fragmentation of initial TLS packet

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. If invalid size is specified, the value selected by the system will be used. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Plain HTTP request fragment size

Adjusts the size of the HTTP request fragmentation. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Valid values: 1–1500. If invalid size is specified, the value selected by the system will be used. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Show QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Enable TCP keepalive

Periodically sends TCP packets over idle connection to ensure it is alive and to renew NAT timeouts. This option can be useful to bypass the strict network address translation (NAT) settings that some ISPs use.

### TCP keepalive interval

Here you can specify an idle time period, in seconds, before sending a keepalive probe. Ha 0 van megadva, akkor a rendszer által kiválasztott értéket fogja használni.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### TCP keepalive timeout

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. Ha 0 van megadva, akkor a rendszer által kiválasztott értéket fogja használni.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Block Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### DNS server timeout period

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Use HTTP/3 for DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Use fallback DNS upstreams

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Query DNS upstreams in parallel

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Always respond to failed DNS queries

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Enable filtering of secure DNS requests

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Blocking mode for hosts rules

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Reply with “Refused” error
- Reply with “NxDomain” error
- Reply with a custom IP address

### Blocking mode for adblock-style rules

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Reply with “Refused” error
- Reply with “NxDomain” error
- Reply with a custom IP address

### Custom IPv4 address

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Custom IPv6 address

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Fallback servers

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Don’t use fallback servers;
- Use system default servers;
- Use custom servers.

### Block ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### List of custom fallback servers

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### List of custom bootstrap addresses

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS exclusions

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Exclude specified Wi-Fi networks names (SSIDs) from the DNS filtering

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
