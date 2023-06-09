---
title: Решение проблем с установкой
sidebar_position: 5
---

:::note

This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## Ошибка «Установка не выполнена» на macOS Catalina

Во время установки может появиться вот такое окно:

![Экран ошибки установки](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Следуйте этой инструкции, чтобы решить проблему:

1. Restart your Mac
2. As your Mac restarts, press and hold down the *Command(⌘) + R* keys immediately upon hearing the startup chime. Чтобы перевести компьютер в режим восстановления, удерживайте клавиши, пока не появится логотип Apple.
3. From the top bar select *Utilities* → *Terminal*, and execute this command: `csrutil disable`
4. Restart the Mac and log into Administrator's profile
5. Open the Finder window and select from the top bar *Go* → *Go to Folder* and type `~/private/`
6. Create a folder named *tmp* and type in your password
7. Launch AdGuard installation

Как только установка будет завершена, перезапустите Mac в режиме восстановления, следуя инструкции выше, и выполните команду `csrutil enable` в Терминале, чтобы включить системную защиту.
