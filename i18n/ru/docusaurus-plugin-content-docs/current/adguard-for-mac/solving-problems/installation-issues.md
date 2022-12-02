---
title: Решение проблем с установкой
sidebar_position: 5
---

## Ошибка «Установка не выполнена» на macOS Catalina

Во время установки может появиться вот такое окно:

![Экран ошибки установки](https://cdn.adguard.com/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Следуйте этой инструкции, чтобы решить проблему:

1) Перезапустите Mac 2) Когда на экране появится логотип Apple, зажмите клавиши *Command(⌘) + R*. Чтобы перевести компьютер в режим восстановления, удерживайте клавиши, пока не появится логотип Apple. 3) From the top bar select *Utilities* > *Terminal*, and execute this command: `csrutil disable` 4) Restart the Mac and log into Administrator's profile 5) Open the Finder window and select from the top bar *Go* > *Go to Folder* and type `~/private/` 6) Create a folder named *tmp* and type in your password 7) Launch AdGuard installation

Как только установка будет завершена, перезапустите Mac в режиме восстановления, следуя инструкции выше, и выполните команду `csrutil enable` в Терминале, чтобы включить системную защиту.