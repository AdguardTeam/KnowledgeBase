---
title: How to collect Windows system logs
sidebar_position: 5
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in system logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Для анализа и диагностики сложных проблем, связанных с работой AdGuard, службе поддержки могут понадобиться файлы журнала Windows. Windows event logs contain records about all errors that occur with the installed software, including AdGuard. Ниже представлена инструкция для получения и отправки этих файлов.

1. Нажмите *Win + R*

1. В появившемся окне введите `eventvwr` и нажмите *OK*:

    ![Окно запуска *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Окно программы «Просмотр событий» выглядит, как показано ниже.

    ![Просмотр событий *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Чтобы сохранить нужные нам файлы, сделайте следующее:

    - Откройте *Приложение*: *Просмотр событий (локальный)* → *Логи Windows* → *Приложение*.

    - Щёлкните правой кнопкой мыши по разделу *Приложение* и в выпадающем меню выберите *Сохранять все события как...*

    - Выберите имя и место сохранения, нажмите *Сохранить*. Выберите *Отображать сведения для следующих языков*. You need to check the checkbox next to *English*. Нажмите *OK*.

    - Откройте *Система*: *Просмотр событий (локальный)* → *Логи Windows* → *Система*.

    - Щёлкните правой кнопкой мыши по разделу *Система* и в выпадающем меню выберите *Сохранять все события как...*

    - Выберите папку назначения, введите имя и нажмите *Сохранить*. Выберите *Отображать сведения для следующих языков*. Поставьте галочку напротив пункта *Английский язык*. Нажмите *OK*.

Полученные два файла отправьте в службу поддержки AdGuard: **support@adguard.com**.

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::
