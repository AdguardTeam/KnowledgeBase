---
title: WFP driver
sidebar_position: 1
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

To filter network traffic, AdGuard uses a network driver. There are two options: TDI driver and WFP driver. While WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. These problems and subsequent errors can be very different in each case.

If you encounter a problem that you suspect might be caused by this, you can always switch to the older but more stable TDI network driver. Um dies zu tun:

1. Go to *Settings → Network*.

2. Disable WFP driver as it’s done in this picture:

![WFP driver *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
