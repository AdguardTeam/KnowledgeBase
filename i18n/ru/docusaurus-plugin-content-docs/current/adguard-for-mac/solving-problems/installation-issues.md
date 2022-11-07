---
title: Решение проблем с установкой
sidebar_position: 5
---

## "Installation failed" error in macOS Catalina

During the installation you can face an error like this:

![Экран ошибки установки](https://cdn.adguard.com/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

Следуйте этой инструкции, чтобы решить проблему:

1) Restart your Mac 2) As your Mac restarts, press and hold down the *Command(⌘) + R* keys immediately upon hearing the startup chime. Hold the keys until the Apple logo appears to get the computer into Recovery mode. 3) From the top bar select *Utilities* > *Terminal*, and execute this command: `csrutil disable` 4) Restar the Mac and log into Administrator's profile 5) Open the Finder window and select from the top bar *Go* > *Go to Folder* and type `~/private/` 6) Create a folder named *tmp* and type in your password 7) Launch AdGuard installation

As the installation is completed, restart your Mac in Recovery mode using the instruction above and execute `csrutil enable` command in Terminal to enable system protection.