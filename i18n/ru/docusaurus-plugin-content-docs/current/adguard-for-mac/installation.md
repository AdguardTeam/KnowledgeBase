---
title: 'Установка и удаление'
sidebar_position: 2
---

## Системные требования

**Версия операционной системы:** macOS 10.13 (64-разрядная) или более поздняя

**Объём оперативной памяти**: от 2 ГБ

**Браузеры:** Safari, Chrome, Firefox, Opera, Яндекс.Браузер и любой другой браузер, совместимый с macOS

**Свободное пространство на диске**: 120 МБ

## Установка

Чтобы установить AdGuard для macOS на компьютер, откройте браузер, наберите в адресной строке _adguard.com_ и на открывшейся веб-странице нажмите кнопку **Скачать**.

![Скачайте приложение](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/1.png)

Дождитесь окончания загрузки файла _AdguardInstaller.dmg_ и щёлкните мышью по его значку в списке загруженных объектов на Dock-панели.

![Дважды щёлкните, чтобы открыть файл](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/2.png)

На рабочем столе отобразится значок AdGuard. Щёлкните по нему, чтобы открыть окно программы установки. В окне программы установки дважды кликните мышью по значку AdGuard.

![Дважды щёлкните значок AdGuard](https://cdn.adguard.com/content/kb/ad_blocker/mac/3.jpg)

При первом запуске AdGuard операционная система предупредит вас о том, что приложение загружено из интернета. Нажмите **Открыть**.

![Нажмите «Открыть»](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/4.png)

Затем нажмите **Установить**.

![Нажмите «Установить»](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/5.png)

Подождите, пока установщик загрузит необходимые файлы.

![Подождите, пока загрузятся необходимые файлы](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/6.png)

Чтобы использовать приложение, вам потребуется пароль администратора для вашей учётной записи macOS. Введите его в открывшемся диалоговом окне и нажмите **ОК**.

![Введите пароль](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/7.png)

Запустится мастер установки, вы сможете настроить защиту под себя. Можно настроить всё сразу, нажав «Начать», или заняться этим позже, нажав «Пропустить».

![Настройте защиту](https://cdn.adguard.com/content/kb/ad_blocker/mac/installation-wizard.jpg)

Вот и всё, AdGuard установлен на вашем Mac!

## Удаление

### Стандартное
Откройте приложение «Finder», кликнув по соответствующей иконке:

![Откройте Finder](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/finder.png)

Перейдите в раздел «Программы». Выберите в списке AdGuard, кликните по нему правой кнопкой мыши и выберите пункт **«Переместить в корзину»**.

![Переместите AdGuard в корзину](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/1.png)

### Продвинутое

**Используйте эту инструкцию, только если вы точно знаете, что делаете, или если наша команда поддержки рекомендовала вам именно «продвинутое удаление». Кроме того, сначала выполните все шаги из «обычного удаления».**

* После этого удалите следующие файлы AdGuard:
    * /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (папка)
    * ~/Library/Preferences/com.adguard.mac.adguard.plist (файл)
    * ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (папка)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (файл)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (файл)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (файл)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (файл)

Для этого введите и выполните следующие команды через Терминал:

`sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"` `rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"` `rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist` `rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"` `find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete` `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist` `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist` `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log` `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log`

* Запустите приложение «Мониторинг системы».
* Через поиск найдите процесс **’cfprefsd’**.

![Запустите приложение «Мониторинг системы»](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/2.png)

* Остановите процесс, запущенный от имени пользователя. Для этого нажмите на него, а после нажмите на X в левом верхнем углу. Подтвердите завершение процесса.

![Подтвердите](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/ru/uninstall/3.png)

Теперь AdGuard удалён с вашего компьютера.
