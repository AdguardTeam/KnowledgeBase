---
title: Как собрать системные логи
sidebar_position: 4
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Данные и/или файлы в логах обрабатываются в соответствии с [Политикой конфиденциальности AdGuard](https://adguard.com/ru/privacy.html).

:::

Иногда обычных логов может быть недостаточно, чтобы определить источник проблемы. В таких случаях необходимы системные логи. Их можно собрать через настройки разработчика и Logcat, ниже — подробные инструкции.

:::note

AdGuard стремится защищать вашу конфиденциальность. Мы строго следуем нашей [Политике конфиденциальности](https://adguard.com/ru/privacy/windows.html) и не собираем никакой личной информации о пользователях. Перед отправкой логов в поддержку проверьте, не содержит ли файл дополнительную информацию, которую вы не хотите передавать. Если в файле осталась личная информация, рекомендуем удалить её.

:::

## Получение отчёта об ошибке с устройства

Чтобы получить отчёт об ошибке непосредственно с вашего устройства, выполните следующие действия:

1. Убедитесь, что у вас включена вкладка [Для разработчиков](https://developer.android.com/studio/run/device.html#developer-device-options).

1. Перейдите в раздел **Для разработчиков** и нажмите **Отчёт об ошибке**.

    ![Отчёт об ошибке *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Выберите нужный тип отчёта об ошибке и нажмите **Отправить отчёт**.

    :::note

    Через некоторое время вы увидите уведомление о том, что отчёт об ошибке готов (см. рисунок 2).


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

### Часть 1: подготовьте устройство

1. Переключите устройство в режим разработчика. Для этого: перейдите в **Настройки** → **Об устройстве** → нажмите на **Номер сборки** 7 раз.

1. Перейдите в **Параметры разработчика**.

1. Включите **отладку по USB**.

1. Увеличьте размеры **буфера журнала** до 4 МБ для каждого буфера записей.

4 МБ должно быть достаточно для хранения нужных логов до тех пор, пока вы не перейдёте ко второй части (извлечение самих логов с устройства);

### Часть 2: воспроизведите проблему

Важно воспроизвести сбой после того, как вы закончите с первой частью.

1. Воспроизведите проблему.

1. Запомните/запишите дату и время воспроизведения и укажите их в письме в поддержку.

### Часть 3: получите лог

1. Подключите устройство к компьютеру с помощью USB-кабеля.

1. Скачайте [Инструменты платформы Android SDK](https://developer.android.com/studio/releases/platform-tools#downloads). Выберите соответствующую ссылку для загрузки для вашей ОС в разделе «Загрузки». Когда вы нажмёте на ссылку, будет загружен ZIP-файл. Вы можете извлечь файлы ADB (Android Debug Bridge) из ZIP-файла и сохранить их в любом месте.

1. Проверьте работоспособность ADB: подключите устройство Android к компьютеру с помощью USB-кабеля, откройте Командную строку, PowerShell или Терминал и выполните следующую команду:

    `устройства adb`

    Пример успешного результата:

    ![Шаг 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Затем выполните следующую команду (вставьте соответствующий путь):

    `adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

    Отправьте созданный файл `txt` и время воспроизведения проблемы (из части 2) нашей команде поддержки по адресу <support@adguard.com>.

### Альтернативный способ для пользователей с ROOT

1. Скачайте и запустите приложение [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Выберите в меню **Запись**. Выберите имя для файла лога или просто нажмите **OK**. Теперь вы можете нажать на кнопку **Домой**, CatLog продолжит записывать лог в фоновом режиме.

1. Воспроизведите ошибку.

1. Откройте CatLog и нажмите **Прекратить запись** в меню.

1. Отправьте этот лог нашей команде поддержки.

:::note

Наша команда поддержки обработает ваш запрос намного быстрее, если вы укажете в сообщении номер тикета HelpDesk или номер ошибки на GitHub.

:::
