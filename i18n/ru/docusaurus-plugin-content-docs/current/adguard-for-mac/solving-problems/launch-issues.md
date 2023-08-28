---
title: Проблемы с запуском в macOS
sidebar_position: 6
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://adguard.com/download.html?auto=true)

:::

Иногда macOS может нарушить работу модуля AdGuard «Сеть», тем самым делая невозможным использование приложения. В таком случае выполните одну из инструкций ниже, которая подходит для вашей версии ОС.

## Проблемы с запуском на операционных системах macOS 11 и выше

Если у вас возникли проблемы при запуске AdGuard для Mac на операционных системах Big Sur и Monterey, воспользуйтесь этой инструкцией:

1. Перезагрузите Mac и войдите в [режим восстановления](https://support.apple.com/ru-ru/HT201255).
1. Отключите SIP (запустите **Терминал** из меню **Утилиты** и введите `csrutil disable`).
1. Перезагрузите Mac.
1. Закройте приложение AdGuard, откройте **Терминал** и введите `systemextensionsctl reset`.
1. Перезагрузите Mac и войдите в режим восстановления.
1. Включите SIP (запустите **Терминал** из меню **Утилиты** и введите `csrutil enable`).
1. Запустите приложение AdGuard и включите защиту.

## Проблемы с запуском на операционных системах macOS 10

Если у вас возникли проблемы при запуске AdGuard для Mac на операционных системах Sierra, Mojave и Catalina, воспользуйтесь этой инструкцией:

1. Откройте **Терминал** и введите команду `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Убедитесь, что флаг `restricted` отсутствует (как на скриншоте). ![Пример команды *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Reboot your Mac in recovery mode.
1. Open **Utilities** → **Terminal**.
1. Enter `csrutil disable`.
1. Enter administrator password.
1. Reboot your Mac.
1. Open **Terminal** and enter the following command: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Reboot your Mac in recovery mode.
1. Open **Utilities** → **Terminal** → Enter `csrutil enable` → Enter administrator password → Reboot your Mac.
1. Enable AdGuard protection.
