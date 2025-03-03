---
title: How to avoid compatibility issues with FaceTime
sidebar_position: 3
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan iOS için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

It turned out that Full-Tunnel mode might interfere not only with compatibility with other VPN applications, but also with FaceTime.

Some users have encountered the problem that FaceTime does not work on the device when the AdGuard app for iOS is in Full-Tunnel mode.

It is likely but not guaranteed that FaceTime will work when AdGuard is in Full-Tunnel mode without VPN icon because it is also incompatible with other VPN apps and unstable.

**If you want to use FaceTime and make sure that video/audio calls don't stop working, use Split-Tunnel mode.**

![Tünel modu ekranı *mobil](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/Ru/iOS/tunnel-mode.PNG?!)

Etkinleştirmek için talimatları izleyin:

1. iOS için AdGuard'a gidin *Ayarlar* → *Genel ayarlar*.
2. Enable *Advanced mode* and go to the *Advanced settings* section that appears right after.
3. Open *Tunnel mode* and select *Split-Tunnel*.

Tamamlandı! Now there should be no problems with FaceTime compatibility.
