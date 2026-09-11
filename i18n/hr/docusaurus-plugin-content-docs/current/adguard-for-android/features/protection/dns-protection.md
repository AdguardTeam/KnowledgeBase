---
title: DNS protection
sidebar_position: 4
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The DNS protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _DNS protection_.

:::tip

DNS protection works differently from regular ad and tracker blocking. You can [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_DNS protection_ allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:

- Some DNS servers have blocklists that help block DNS requests to potentially harmful domains

- In addition to DNS servers, AdGuard can filter DNS requests on its own using a special DNS filter. It contains a large list of ad and tracking domains — requests to them are rerouted to a blackhole server

- You can also block and unblock domains by creating user rules. You might need to consult our article about [DNS filtering rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection \*mobile\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS server

In this section, you can select a DNS server to resolve DNS requests, block ads and trackers, and encrypt DNS traffic. Tap a server to read its full description and select a protocol. If you didn't find the desired server, you can add it manually:

- Tap _Add DNS server_ and enter the server address (or addresses)

- Alternatively, you can select a DNS server from the [list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/) and tap _Add to AdGuard_ next to it

- If you're using a private AdGuard DNS server, you can add it to AdGuard from the [dashboard](https://adguard-dns.io/dashboard/)

By default, _Automatic DNS_ is selected. It sets a DNS server based on your AdGuard and device settings. If you have [integration with AdGuard VPN](/adguard-for-android/features/integration-with-vpn) or another SOCKS5 proxy enabled, it connects to _AdGuard DNS Non-filtering_ or any other server you specify. In all other cases, it connects to the DNS server selected in your device settings.

#### DNS filters

This section allows you to add custom DNS filters and DNS filtering rules. You can find more filters at [filterlists.com](https://filterlists.com/).
