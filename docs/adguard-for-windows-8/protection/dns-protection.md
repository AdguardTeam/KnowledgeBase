---
title: DNS protection
sidebar_position: 4
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

DNS protection gives you more control over how your device connects to the Internet. There are three main reasons why it can be useful:

## 1. Protect your privacy from your ISP

Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Usually, the DNS server belongs to your ISP, which means they can track the websites you visit. If you switch to another DNS server, such as AdGuard DNS, your ISP no longer sees your online activity.

## 2. Encrypt your DNS traffic

Modern protocols like DNS-over-TLS and DNS-over-HTTPS ensure that your DNS requests are encrypted. This protects them from being intercepted, modified, or spied on by attackers.

## 3. Block unwanted content at the DNS level

DNS protection can filter out ads, trackers, phishing websites, and other harmful or annoying content before it even loads in your browser or apps. [Learn more about DNS filtering](https://adguard-dns.io/kb/general/dns-filtering/)

![DNS protection *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns.png)

Here’s what you can configure in DNS protection:

## Choose a DNS server

![DNS servers *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_server.png)

You can select from multiple trusted DNS providers. AdGuard itself offers several options for different needs:

- AdGuard DNS — blocks ads and trackers.

- AdGuard DNS Family Protection — blocks ads, trackers, and adult content.

- AdGuard DNS Non-filtering — provides a secure and reliable connection without any filtering.

You can use one of our public servers, add your own custom DNS server, or pick another trusted option from our [list of trusted DNS providers](https://adguard-dns.io/kb/general/dns-providers/).

## Add DNS filters and rules

To fine-tune protection, you can create your own DNS filters using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/) or import ready-made [DNS filters](https://filterlists.com).

In addition, you can create custom DNS rules to block, unblock, or redirect domains as needed. Use our built-in rule constructor.

![Create DNS rules](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_rules.png)
