---
title: Advanced Settings guide
sidebar_position: 9
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## How to reach Advanced Settings

:::caution

Changing *Advanced Settings* may cause problems with AdGuard's performance, break the Internet connection, or compromise your security and privacy. Make changes to this section only if you are sure of what you are doing or our support team has asked you to do it.

:::

To find *Advanced Settings*, open AdGuard, click the gear icon, select *Advanced*, then select *Advanced Settings*.

## Advanced Settings

### Network settings

#### `network.extension.exclude.domains`

The listed domains will be excluded from filtering in the *Network Extension* mode. Use a comma or line break to separate values.

#### `network.extension.exclude.ports`

The listed ports will be excluded from filtering in the *Network Extension* mode. Use a comma or line break to separate values.

#### `network.extension.route.exclude`

The listed routes will be excluded from filtering in the *Network Extension* mode. Set routes using an IP address or destination CIDR. Separate values with commas or line breaks.

#### `network.extension.http.downgrade.bundleids`

Here you can specify a list of applications for which the HTTP/2 protocol will be downgraded to HTTP/1.1 in the *Network Extension* filtering mode. The bundle ID should be separated by a comma or a line break.

#### `network.extension.monterey.force.split.tunnel`

Here you can prohibit AdGuard from using the "default route" which is enabled by default in the *Network Extension* mode on macOS Monterey. AdGuard uses "default route" to disable iCloud Private Relay and Protect Mail Activity, as it cannot operate in unison with them.

You will find more information about the problem [in this article](../icloud-private-relay).

#### `network.extension.dns.redirect.exclude.bundleids`

Here you can specify a list of applications that make DNS queries directly not via system DNS resolver (for example, some VPN clients or DNS filtering applications). DNS filtering will be disabled for them in the *Network Extension mode*. The bundle IDs should be separated by a comma or line break.

#### `network.dns.filter.secure.request`

Redirects secure DNS requests to a local DNS proxy, if there is one available.

#### `network.https.ocsp.check`

By setting `true`, you enable HTTPS certificate revocation checking.

#### `network.tcp.keepalive.enabled`

Periodically sends TCP packets over an idle connection to ensure that it remains active and to renew NAT timeouts.

#### `network.tcp.keepalive.interval.seconds`

Idle time, in seconds, before sending a keepalive probe. If 0 is specified, the system will use the default value.

#### `network.tcp.keepalive.timeout.seconds`

Time, in seconds, before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

#### `network.https.ech.enabled`

Uses a local DNS proxy to look for configs in the ECH Config Lists. If found, encrypts Client Hellos.

#### `network.https.enforce.certificate.transparency`

Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy.

#### `network.https.filter.http3.enabled`

By setting `true`, you allow AdGuard to filter traffic sent over HTTP/3, the latest version of the HTTP protocol based on QUIC.

#### `network.filtering.localnetwork`

By setting `true`, you enable local network filtering.

#### `network.filtering.localhost`

By setting `true`, you enable LoopBack filtering.

### DNS settings

#### `dns.proxy.bootstrap.ips`

Here you can enter the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server.

#### `dns.proxy.fallback.ips`

Here you can specify a list of IP addresses of DNS servers that will be used as backups in case the encrypted DNS server fails to respond.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

Normal queries will be redirected to a fallback upstream if all normal upstreams fail.

#### `dns.proxy.detect.search.domains`

This option enables automatic detection of the local network domain, which will be automatically redirected to the fallback DNS server instead of the main DNS server.

#### `dns.proxy.fallback.domains`

Here you can list domains for which the fallback DNS server will be used instead of the main DNS server.

#### `dns.proxy.adblockrules.blocking.mode`

Here you can specify the type of DNS server response to blocked requests, corresponding to ad-blocker-style rules.

- 0 — respond with REFUSED
- 1 — respond with NXDOMAIN
- 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.hostrules.blocking.mode`

Here you can specify the type of DNS server response to blocked requests, corresponding to hosts rules:

- 0 — respond with REFUSED
- 1 — respond with NXDOMAIN
- 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

#### `dns.proxy.blocking.response.IPv4.address`

Here you can specify the IPv4 address that will be returned in response to blocked "A" requests when `dns.proxy.adblockrules.blocking.mode` or `dns.proxy.hostrules.blocking.mode` is set to the response type "ADDRESS".

#### `dns.proxy.blocking.response.IPv6.address`

Here you can specify the IPv6 address that will be returned in response to blocked "AAAA" requests when `dns.proxy.adblockrules.blocking.mode` or `dns.proxy.hostrules.blocking.mode` is set to the response type "ADDRESS".

#### `dns.proxy.block.AAAA.requests`

Here you can enable IPv6 DNS query blocking.

#### `dns.proxy.blocked.response.TTL.in.seconds`

Here you can specify the TTL (time to live) value that will be returned in response to a blocked request.

#### `dns.proxy.parallel.upstream.queries.enabled`

All upstreams are queried simultaneously. The first response is returned.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

Responds to upstream failure with a SERVFAIL packet.

#### `dns.proxy.http3.enabled`

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection.

#### `dns.proxy.block.encrypted.client.hello.response`

Removes the Encrypted Client Hello parameters from responses.

### Stealth Mode settings

#### `stealth.antidpi.http.split.fragment.size`

Adjusts the size of the HTTP request fragmentation. Valid values: 1–1500. If an invalid size is specified, the system will use the default value.

#### `stealth.antidpi.clienthello.split.fragment.size`

This option specifies the size of TCP packet fragmentation, which helps avoid deep packet inspection. Valid values: 1–1500. If an invalid size is specified, the system will use the default value.

#### `stealth.antidpi.http.space.juggling`

Adds extra space between the HTTP method and the URL and removes space after the "Host:" field.

#### `stealth.antidpi.split.delay.millisecond`

Here you can specify the delay, in milliseconds, after sending the first fragment, if fragmentation is performed.

### Subscription link interception settings (userscripts and filters)

#### `subscription.link.interception.userscript`

Activate this feature if you want AdGuard to automatically intercept the URLs of userscripts and open the installation window.

#### `subscription.link.interception.filter`

Activate this feature if you want AdGuard to automatically intercept subscription URLs (for example, abp:subscribe, etc.) and open the custom filter setup window.
