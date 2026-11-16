---
title: DNS 保护功能
sidebar_position: 3
---

:::info

This page is about AdGuard Mini for Android, which safeguards Samsung Browser and Yandex Browser and provides DNS protection. To protect your Android device entirely and get more advanced settings, [download AdGuard for Android](https://agrd.io/download-kb-adblock).

:::

With _DNS protection_, AdGuard Mini for Android extends protection to the whole device. It encrypts your DNS queries, so your ISP can’t see which websites you visit, and blocks connections to advertising and tracking domains at the DNS level — in any browser or app, not just the supported ones.

![DNS protection](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/dns_protection.png)

## 工作原理

Whenever an app or website connects to the Internet, your device first sends a DNS query to translate the domain name into an IP address. DNS protection routes these queries through the DNS server of your choice. If a domain is known for serving ads or tracking, the connection is blocked.

To do this, AdGuard Mini creates a local VPN on your device. It’s not a real VPN: your traffic is not routed through remote servers, and all filtering happens on your device.

:::note

Android allows only one active VPN connection at a time. If another VPN app is running, DNS protection won’t work alongside it. Learn more in [Solving problems](/adguard-mini-for-android/solving-problems/dns-protection-doesn't-work.md).

:::

To enable _DNS protection_, open AdGuard Mini for Android and go to _Protection_ → _DNS protection_, and toggle it on.

## DNS 服务器

You can select a [_DNS server_](https://adguard-dns.io/kb/general/dns-providers/) in the _DNS protection_ settings. Different servers handle DNS queries differently. For example, _AdGuard DNS_ blocks advertising and tracking domains by default. Or you can choose a _Non-filtering DNS_ server: it doesn’t block anything by itself, and you decide what to block with [DNS filters](https://adguard-dns.io/kb/general/dns-filtering/) and [DNS user rules](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

![DNS server](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/dns_server.png)

## DNS 过滤器

:::note

This feature is available only in the [full version](https://adguard.com/license.html).

:::

DNS filters are lists of domains that should be blocked at the DNS level. Enable them to block more advertising and tracking domains across the whole device.

![DNS filters](https://cdn.adtidy.org/content/Kb/ad_blocker/mini_android/dns_filters.png)

You can also add your own [_DNS user rules_ rules](https://adguard-dns.io/kb/general/dns-filtering-syntax/). They work like a personal DNS filter: one rule applies everywhere, in every browser and app. For example, `||example.org^` blocks `example.org` and all its subdomains on the entire device.
