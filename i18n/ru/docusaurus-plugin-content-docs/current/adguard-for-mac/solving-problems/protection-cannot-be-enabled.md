---
title: Не удаётся включить защиту
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Если по каким-либо причинам не удаётся включить защиту AdGuard, выполните следующие действия:

1. Нажмите на иконку AdGuard в строке меню и откройте настройки, нажав на значок шестерёнки → Дополнительно → Сбросить настройки... → Завершить AdGuard...

2. В поиске Spotlight введите Терминал, введите `sudo rm -R /Library/Application\ Support/com.adguard.adguard` и выполните команду.

3. Перезагрузите компьютер.

4. В Терминале проверьте, что папка стёрлась, выполнив команду: `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.Adguard/`. Вы должны увидеть следующее сообщение: `No such file or directory`.

5. Запустите AdGuard, введите логин и пароль.
