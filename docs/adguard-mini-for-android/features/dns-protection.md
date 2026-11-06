---
title: DNS protection
sidebar_position: 3
---

:::info

This page is about AdGuard Mini for Android, which safeguards Samsung Browser and Yandex Browser and provides DNS protection. To protect your Android device entirely and get more advanced settings, [download AdGuard for Android](https://agrd.io/download-kb-adblock).

:::

With *DNS protection*, AdGuard Mini for Android extends protection to the whole device. It encrypts your DNS queries, so your ISP can’t see which websites you visit, and blocks connections to advertising and tracking domains at the DNS level — in any browser or app, not just the supported ones.

![DNS protection](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_android/v3/dns_protection.png)

## How it works

Whenever an app or website connects to the Internet, your device first sends a DNS query to translate the domain name into an IP address. DNS protection routes these queries through the DNS server of your choice. If a domain is known for serving ads or tracking, the connection is blocked.

To do this, AdGuard Mini creates a local VPN on your device. It’s not a real VPN: your traffic is not routed through remote servers, and all filtering happens on your device.

:::note

Android allows only one active VPN connection at a time. If another VPN app is running, DNS protection won't work alongside it. Learn more in [Solving problems](/docs/adguard-mini-for-android/solving-problems/dns-protection-doesn't-work.md).

:::

To enable *DNS protection*, open AdGuard Mini for Android and go to *Protection* → *DNS protection*, and toggle it on.

## DNS server

You can select a [*DNS server*](https://adguard-dns.io/kb/general/dns-providers/) in the *DNS protection* settings. Different servers handle DNS queries differently. For example, *AdGuard DNS* blocks advertising and tracking domains by default. Or you can choose a *Non-filtering DNS* server: it doesn’t block anything by itself, and you decide what to block with [DNS filters](https://adguard-dns.io/kb/general/dns-filtering/) and [DNS user rules](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

![DNS server](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_android/v3/dns_server.png)

## DNS filters

:::note

Available in the [full version](https://adguard.com/en/license.html) only

:::

DNS filters are lists of domains that should be blocked at the DNS level. Enable them to block more advertising and tracking domains across the whole device.

![DNS server](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_android/v3/dns_filters.png)

You can also add your own [*DNS user rules* rules](https://adguard-dns.io/kb/general/dns-filtering-syntax/). They work like a personal DNS filter: one rule applies everywhere, in every browser and app. For example, `||example.org^` blocks `example.org` and all its subdomains on the entire device.
