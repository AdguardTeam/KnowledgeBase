---
title: Как установить AdGuard для Android TV
sidebar_position: 17
---

:::info

В этой статье рассказывается об AdGuard для Android TV — блокировщике рекламы, который защищает ваш телевизор на системном уровне. [Скачайте приложение AdGuard для Android TV] (https://agrd.io/tvapk), чтобы увидеть, как оно работает

:::

В большинстве случаев браузеры не могут установить файл на телевизор. In our guide, we will go through an example of installation using the TV Bro browser, but there are other options and you can choose the one that better suits your needs. Или использовать приложение [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader).

## Установка AdGuard для Android TV через браузер

1. Установите [браузер TV Bro](https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) на Android TV.

2. Скачайте и установите AdGuard для Android TV:

- Откройте установленный браузер TV Bro на своём Android TV.
- В адресной строке браузера введите `https://agrd.io/tvapk`, нажмите _Enter_ или перейдите по ссылке.
- Загрузка начнётся автоматически.
- Когда файл скачается, найдите его в _Загрузках_.
- В предупреждении разрешите установку файлов из браузера.
- Вернитесь в браузер, откройте _Загрузки_ и нажмите на скачанный файл.
- В появившемся системном окне нажмите _Установить_, затем _Готово_ или _Открыть_.

Готово, AdGuard для Android TV установлен.

1. Запустите AdGuard для Android TV:

- Найдите AdGuard в списке установленных приложений на вашем Android TV.
- Нажмите на иконку AdGuard, чтобы запустить приложение.
- Следуйте инструкции на экране, чтобы завершить настройку.

## Установка AdGuard для Android TV через ADB

1. Установите Android Debug Bridge (ADB). Можете следовать [инструкции по установке на XDA Developers](https://www.xda-developers.com/install-adb-windows-macos-linux).

2. Скачайте [AdGuard для Android TV](https://agrd.io/tvapk).

3. Откройте настройки телевизора, выберите _Система_ → _О системе_ и нажмите на номер сборки семь раз, чтобы разблокировать настройки разработчика. Включите _Отладку USB_.

4. Запишите IP-адрес вашего Android TV:

   - Откройте настройки Android TV.
   - Выберите _Система_ → _О системе_.
   - Найдите _Сеть_ и выберите _Wi-Fi_ или _Ethernet_ в зависимости от вашего типа подключения.
   - Зайдите в раздел сети и найдите _IP-адрес_. Запишите этот IP-адрес.

5. Подключитесь к Android TV через ADB:

   - Откройте терминал или командную строку на компьютере.
   - Введите команду `adb connect` и вставьте IP-адрес вашего телевизора.
   - Соединение будет установлено.

6. Установите AdGuard для Android TV через ADB:

   - В терминале введите команду `adb install Downloads/adguard_tv.apk`. Если загрузки у вас хранятся в другом месте, замените Downloads/adguard_tv.apk на свой путь до скачанного файла.
   - Дождитесь сообщения в терминале об успешной установке приложения.
