---
title: Known issues of AdGuard for Windows
sidebar_position: 10
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## AdGuard for Windows and AdGuard VPN for Windows compatibility issues

Once you install AdGuard for Windows and AdGuard VPN for Windows, they just start working together without any effort on your part. However, changing some of their default settings may cause the apps to work incorrectly when they run at the same time.

There are two specific settings in AdGuard for Windows: *Use redirect driver mode* and *Filter localhost*. By default, the first is disabled, and the second is enabled. Changing any of these settings will inevitably disrupt AdGuard's filtering if both AdGuard Ad Blocker and AdGuard VPN are enabled on your device.

Modificare queste impostazioni è necessario soltanto per risolvere problemi correlati all'operazione simultanea del blocco AdGuard Ad Blocker e delle app a livello di rete, quali antivirus, VPN e filtri di rete. If you come across a situation where you need to change the default state of the above settings and still want AdGuard Ad Blocker and AdGuard VPN to work simultaneously and correctly — [create an issue on GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) so we can help you personally.

We are currently working on overcoming the above-listed limitations of the simultaneous work of our apps.
