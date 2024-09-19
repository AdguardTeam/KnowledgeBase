---
title: Low-level Settings guide
sidebar_position: 5
---

:::info

本文适用于 iOS 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## How to reach the Low-level settings

:::caution

更改「*低级设置*」可能会导致 AdGuard 的性能出现问题，也可能会断开网络连接或侵害安全和隐私。 如果您知道自己在设置什么，或者是我们的客户支持要求您这样做，请打开此部分。

:::

To go to *Low-level settings*, tap the gear icon at the bottom right of the screen to open *Settings*. Select the *General* section and then toggle on the *Advanced mode* switch, after that the *Advanced settings* section will appear below. Tap *Advanced settings* to reach the *Low-level settings* section.

## 低级设置

### Tunnel mode

There are two main tunnel modes: *Split* and *Full*. *Split-Tunnel* mode provides compatibility of AdGuard and so-called "Personal VPN" apps. In *Full-Tunnel* mode no other VPN can work simultaneously with AdGuard.

There is a specific feature of the *Split-Tunnel* mode: In case of poor DNS proxy performance, for example, if the response from the AdGuard DNS server isn't returned in timely, iOS will instead reroute traffic through the DNS server specified in the iOS settings. No ads are blocked at this time and DNS traffic is not encrypted.

In *Full-Tunnel* mode only the DNS server specified in AdGuard settings is used. If it does not respond, the Internet will simply not work. Enabled *Full-Tunnel* mode may negatively impact the performance of some programs (e.g., FaceTime) and cause app update issues.

By default, AdGuard uses *Split-Tunnel* mode as the most stable option.

There is also an additional mode called *Full-Tunnel (without VPN icon)*. This is exactly the same as *Full-Tunnel* mode, but it is set up so that the VPN icon is not displayed in the system line.

### Blocking mode

In this module you can select the way AdGuard will respond to DNS queries that should be blocked:

- Default — respond with zero IP address when blocked by adblock-style rules; respond with the IP address specified in the rule when blocked by /etc/hosts-style rules
- REFUSED — respond with REFUSED code
- NXDOMAIN — respond with NXDOMAIN code
- Unspecified IP — respond with zero IP address
- Custom IP — respond with a manually set IP address

### Block IPv6

By moving the toggle to the right, you activate the blocking of IPv6 queries (AAAA requests). AAAA-type DNS requests will not be resolved, hence only IPv4 queries can be processed.

### Blocked response TTL

Here you can set the period for a device to cache the response to a DNS request. During the specified time to live (in seconds) the request can be read from the cache without re-requesting the DNS server.

### Bootstrap servers

For DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC a bootstrap server is required for getting the IP address of the main DNS server. If not specified, the DNS server from iOS settings is used as the bootstrap server.

### Fallback servers

Here you can specify an alternate server to which a request will be rerouted if the main server fails to respond. If not specified, the system DNS server will be used as the fallback. It is also possible to specify `none`, in this case, there will be no fallback server set and only the main DNS server will be used.

### Background app refresh time

Here you can select the frequency at which the application will check for filter updates while in the background. Note that update checks will not be performed more often than the specified period, but the exact intervals may not be respected.
