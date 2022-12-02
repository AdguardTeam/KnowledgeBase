---
title: Не удаётся включить защиту
sidebar_position: 2
---
 
Если по каким-либо причинам не удаётся включить защиту AdGuard, выполните следующие действия:

1. Click the AdGuard icon at the Menu Bar → go to Advanced → Reset settings... → Quit AdGuard...

2. In the Spotlight Search, type Terminal, enter `sudo rm -R /Library/Application\ Support/com.adguard.adguard` and execute.

3. Перезагрузите компьютер.

4. В Терминале проверьте, что папка стёрлась, выполнив команду: `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.Adguard/`. You should receive the following: `No such file or directory`.

5. Запустите AdGuard, введите логин и пароль.