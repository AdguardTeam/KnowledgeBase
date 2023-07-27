---
title: How to configure system-wide filtering with AdGuard for iOS
sidebar_position: 2
---

:::Info

This article covers AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## About system-wide filtering

System-wide filtering means blocking ads and trackers beyond the Safari browser, i.e. in other apps and browsers. This article will tell you how to set it up on your iOS device.

On iOS, the only way to block ads and trackers system-wide is to use [DNS filtering](https://adguard-dns.io/kb/general/dns-filtering/). First, you have to enable DNS protection. To do so, open *AdGuard for iOS settings* → *DNS protection* and switch it on.

![DNS protection screen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Now, if your purpose is to block ads and trackers system-wide, you have two options:

1. Enable AdGuard DNS server (*Settings* → *DNS protection* → *DNS server* → *AdGuard DNS*).
2. Add a DNS filter/hosts file that will block ad and tracking domains, e.g. AdGuard DNS filter.

The second option takes a bit more time to set up but has several advantages:

* You can use any DNS server at your discretion and you are not tied up to a specific blocking server.
* You can add multiple DNS filters and/or hosts files at the same time, but you can't use multiple DNS servers at once.

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## How to add a DNS filter/hosts file

You can add any DNS filter or hosts file, the instruction will be the same for all of them. For the sake of the example, let's add [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter). It is composed of several other filters (AdGuard Base filter, Social Media filter, Tracking Protection filter, Mobile Ads filter, EasyList, EasyPrivacy, etc.) and it's simplified specifically to be better compatible with DNS-level ad blocking.

1. Open *AdGuard for iOS settings* → *General*.
2. Enable *Advanced mode*. The *Advanced settings* tab will appear. Open it.

![Open AdGuard Settings and enable Advanced mode *mobile_border](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/advanced_mode_en.jpg)

![Advanced settings screen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_advanced_settings.PNG)

:::note

We don't recommend touching other settings you'll find inside the *Advanced settings* tab, especially when it comes to *Low-level settings*. Some of them might break the Internet connection or compromise your privacy and security, so it's better to be careful. The text below describes the exact actions required to add AdGuard DNS filter.

:::

3. Copy this link: `https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt` (it's a link for AdGuard DNS filter)
4. Open *AdGuard for iOS settings* → *DNS protection* → *DNS filtering* (available while *Advanced mode* is enabled) → *DNS filters*.
5. Tap *Add a filter*, paste the link into the filter URL field, and tap 'Next'.

![Adding a DNS filter screen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_adding_a_filter.PNG)

Add any number of other DNS filters the same way by pasting a different URL at step 3. You can find various filters and links to them [here](https://filterlists.com).
