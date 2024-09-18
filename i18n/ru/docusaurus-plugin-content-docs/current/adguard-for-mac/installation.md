---
title: 'Установка и удаление'
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

## Системные требования

**Версия операционной системы:** macOS 10.15 (64-разрядная) или более поздняя

**Объём оперативной памяти**: от 2 ГБ

**Браузеры:** Safari, Chrome, Firefox, Opera, Яндекс.Браузер и любой другой браузер, совместимый с macOS

**Свободное пространство на диске**: 120 МБ

## Установка

Чтобы установить AdGuard для Mac на компьютер, откройте браузер, наберите в адресной строке *adguard.com* и нажмите **кнопку Скачать** [на открывшейся странице](https://adguard.com/download.html?auto=1).

![Скачайте приложение *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Дождитесь окончания загрузки файла *AdguardInstaller.dmg* и щёлкните мышью по его значку в списке загруженных объектов на Dock-панели.

![Дважды щёлкните, чтобы открыть файл](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

На рабочем столе отобразится значок AdGuard. Щёлкните по нему, чтобы открыть окно программы установки. В окне программы установки дважды кликните мышью по значку AdGuard.

![Дважды щёлкните значок AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

При первом запуске AdGuard операционная система предупредит вас о том, что приложение загружено из интернета. Нажмите **Открыть**.

![Нажмите «Открыть»](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

Затем нажмите **Установить**.

![Нажмите «Установить»](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Подождите, пока установщик загрузит необходимые файлы.

![Подождите, пока загрузятся необходимые файлы](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Чтобы использовать приложение, вам потребуется пароль администратора для вашей учётной записи macOS. Введите его в открывшемся диалоговом окне и нажмите **ОК**.

![Введите пароль](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Запустится мастер установки, вы сможете настроить защиту под себя. Можно настроить всё сразу, нажав «Начать», или заняться этим позже, нажав «Пропустить».

![Настройте защиту](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

Вот и всё, AdGuard установлен на вашем Mac!

## Удаление

### Стандартное

Откройте приложение «Finder», кликнув по соответствующей иконке:

![Откройте Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Перейдите в раздел «Программы». Выберите в списке AdGuard, кликните по нему правой кнопкой мыши и выберите пункт **«Переместить в корзину»**.

![Переместите AdGuard в корзину *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Продвинутое

**Используйте эту инструкцию, только если вы точно знаете, что делаете, или если наша команда поддержки рекомендовала вам именно «продвинутое удаление». Кроме того, сначала выполните все шаги из «обычного удаления».**

1. После этого удалите следующие файлы AdGuard:
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (папка)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (файл)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (папка)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (файл)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (файл)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (файл)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (файл)

    Для этого введите и выполните следующие команды через Терминал:

    ```bash
    sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"
    rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"
    rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. Запустите приложение **Мониторинг системы**.
1. Через поиск найдите процесс **’cfprefsd’**.

    ![Запустите приложение «Мониторинг системы»](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Остановите процесс, запущенный от имени пользователя. Для этого нажмите на него, а после нажмите на X в левом верхнем углу. Подтвердите действие в диалоговом окне.

    ![Подтвердите](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

Теперь AdGuard удалён с вашего компьютера.
