---
title: Как получить системные логи
sidebar_position: 4
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, firsthand [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Иногда обычных логов может быть недостаточно, чтобы определить источник проблемы. В таких случаях необходимы системные логи. Их можно собрать через настройки разработчика и Logcat, ниже — подробные инструкции.

## Получение отчёта об ошибке с устройства

Чтобы получить отчёт об ошибке непосредственно с вашего устройства, выполните следующие действия:

1. Убедитесь, что у вас включена вкладка [Для разработчиков](https://developer.android.com/studio/run/device.html#developer-device-options).

1. Перейдите в раздел **Для разработчиков** и нажмите **Отчёт об ошибке**.

    ![Отчёт об ошибке *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Выберите нужный тип отчёта об ошибке и нажмите **Отправить отчёт**.

    :::note

    After a moment, you will see a notification that the bug report is ready (see Figure 2).


:::

    ![Отчёт об ошибке *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. Чтобы поделиться отчётом об ошибке, коснитесь уведомления.

    ![Отчёт об ошибке *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Отправьте этот лог нашей команде поддержки.

    :::note

    Наша команда поддержки обработает ваш запрос намного быстрее, если вы укажете в сообщении номер тикета HelpDesk или номер ошибки на GitHub.


:::

## Получение отчёта об ошибке через Logcat

На устройствах с Android 7 и более ранними версиями невозможно автоматически отправить отчёт об ошибке. Его можно получить вручную с помощью Logcat — стандартного инструмента командной строки Android, который выгружает логи системных сообщений.

Следуйте этой инструкции:

**Part #1: prepare the device**

1. Переключите устройство в режим разработчика. To do this: go to **Settings** → **About** → tap **Build Number** 7 times.

1. Перейдите в **Параметры разработчика**.

1. Включите **отладку по USB**.

1. Увеличьте размеры **буфера журнала** до 4 МБ для каждого буфера записей.

4 MB should be enough for storing the logs we need until you're able to do the second part (getting the log from the device);

**Part #2: reproduce the problem**

Важно воспроизвести сбой после того, как вы закончите с первой частью.

1. Воспроизведите проблему.

1. Запомните/запишите дату и время воспроизведения и укажите их в письме в поддержку.

**Part #3: get the log**

1. Подключите устройство к компьютеру с помощью USB-кабеля.

1. Скачайте [Инструменты платформы Android SDK](https://developer.android.com/studio/releases/platform-tools#downloads). Выберите соответствующую ссылку для загрузки для вашей ОС в разделе «Загрузки». Once you tap the link, a ZIP file will be downloaded. You can extract the ADB (Android Debug Bridge) files from the ZIP file and store them wherever you want.

1. Проверьте работоспособность ADB: подключите устройство Android к компьютеру с помощью USB-кабеля, откройте Командную строку, PowerShell или Терминал и выполните следующую команду:

    `adb devices`

    Пример успешного результата:

    ![Step 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Затем выполните следующую команду (вставьте соответствующий путь):

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    Email the created `txt` file as well as the time the problem was reproduced (from part #2) to our support team at support@adguard.com.

### Alternative way for ROOT users

1. Download and run [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Choose **Record** in the menu. Choose a name for a log file or just press **OK**. Now you can press **Home** button, CatLog will continue recording the log in background.

1. Reproduce the issue.

1. Open CatLog and press **Stop record** in the menu.

1. Отправьте этот лог нашей команде поддержки.

:::note

Наша команда поддержки обработает ваш запрос намного быстрее, если вы укажете в сообщении номер тикета HelpDesk или номер ошибки на GitHub.

:::
