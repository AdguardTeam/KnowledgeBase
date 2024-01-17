---
title: Koruma etkinleştirilemiyor
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Mac için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

AdGuard Koruması herhangi bir nedenle etkinleştirilemiyorsa, aşağıdaki adımları uygulayın:

1. Click the AdGuard icon at the Menu Bar → go to Advanced → Reset settings... → Quit AdGuard...

2. In the Spotlight Search, type Terminal, enter `sudo rm -R /Library/Application\ Support/com.adguard.adguard` and execute.

3. Bilgisayarınızı yeniden başlatın.

4. Open the Terminal again, type `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/` and execute. You should receive the following: `No such file or directory`.

5. Start AdGuard, type in login and password when prompted.
