---
title: Kurulum sorunlarının çözümü
sidebar_position: 5
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Mac için AdGuard hakkındadır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## "Installation failed" error in macOS Catalina

During the installation you can face an error like this:

![Kurulum hatası ekranı](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Sorunu çözmek için şu talimatları izleyin:

1. Mac'inizi yeniden başlatın
2. As your Mac restarts, press and hold down the *Command(⌘) + R* keys immediately upon hearing the startup chime. Hold the keys until the Apple logo appears to get the computer into Recovery mode.
3. From the top bar select *Utilities* → *Terminal*, and execute this command: `csrutil disable`
4. Restart the Mac and log into Administrator's profile
5. Open the Finder window and select from the top bar *Go* → *Go to Folder* and type `~/private/`
6. *tmp* adında bir klasör oluşturun ve parolanızı yazın
7. AdGuard kurulumunu başlatın

As the installation is completed, restart your Mac in Recovery mode using the instruction above and execute `csrutil enable` command in Terminal to enable system protection.
