---
title: Known issues of AdGuard for Windows
sidebar_position: 11
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege o seu dispositivo ao nível do sistema. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## AdGuard for Windows and AdGuard VPN for Windows compatibility issues

Once you install AdGuard for Windows and AdGuard VPN for Windows, they just start working together without any effort on your part. However, changing some of their default settings may cause the apps to work incorrectly when they run at the same time.

There are two specific settings in AdGuard for Windows: *Use redirect driver mode* and *Filter localhost*. By default, the first is disabled, and the second is enabled. Changing any of these settings will inevitably disrupt AdGuard's filtering if both AdGuard Ad Blocker and AdGuard VPN are enabled on your device.

Changing these settings is only necessary to resolve issues related to the simultaneous operation of AdGuard Ad Blocker and network-level apps such as antiviruses, VPNs, and network filters. If you come across a situation where you need to change the default state of the above settings and still want AdGuard Ad Blocker and AdGuard VPN to work simultaneously and correctly — [create an issue on GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) so we can help you personally.

We are currently working on overcoming the above-listed limitations of the simultaneous work of our apps.
