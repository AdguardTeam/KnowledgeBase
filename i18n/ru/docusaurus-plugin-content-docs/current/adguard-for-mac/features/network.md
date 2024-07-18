---
title: Сеть
sidebar_position: 9
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Основное

![Network](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Automatically filter applications

By default, AdGuard blocks ads and trackers in most browsers ([Tor Browser is an exception](/adguard-for-mac/solving-problems/tor-filtering)). This setting allows AdGuard to block ads in apps as well.

To manage filtered apps, click _Applications_.

### Filter HTTPS protocol

This setting allows AdGuard to filter the secure HTTPS protocol, which is currently used by most websites and apps. By default, websites with potentially sensitive information, such as banking services, are not filtered. To manage HTTPS exclusions, click _Exclusions_.

By default, AdGuard doesn’t filter websites with Extended Validation (EV) certificates. If needed, you can enable the _Filter websites with EV certificates_ option.

## Исходящий прокси

You can set up AdGuard to route all your device’s traffic through your proxy server.

## HTTP proxy

You can use AdGuard as an HTTP proxy server. This will allow you to filter traffic on other devices connected to the proxy.

Make sure your Mac and your other device are connected to the same network and enter the proxy port on the device you want to route through your proxy server (usually in the network settings). To filter HTTPS traffic as well, [transfer AdGuard’s proxy certificate](http://local.adguard.org/cert) to this device. [Learn more about installing a proxy certificate](/guides/proxy-certificate)
