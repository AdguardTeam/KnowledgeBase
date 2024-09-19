---
title: Статистика
sidebar_position: 3
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

Модуль _Статистика_ можно открыть, нажав на вкладку _Статистика_ (четвёртая иконка слева в нижней части экрана). Статистика помогает увидеть полную картину того, что происходит с трафиком на вашем устройстве: сколько запросов отправляется и в какие компании, сколько данных загружается и скачивается, какие запросы блокируются и многое другое. Вы можете выбрать отображение статистики за период времени: 24 часа, 7 дней, 30 дней или за всё время.

![Statistics \*mobile\_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Статистика разбита на несколько разделов.

### Запросы

This section shows the number of blocked ads, trackers, and the total number of requests. You can filter requests by data type: mobile data, Wi-Fi, or all data combined.

_Recent activity_, formerly known as _Filtering log_, shows the last 10,000 requests processed by AdGuard. Tap three-dots menu (⋮) and then _Customize_ to filter requests by status (_regular_, _blocked_, _modified_, or _allowlisted_) or origin (_first-party_ or _third-party_).

You can tap a request to view its details and add a blocking or unblocking rule in one tap.

### Использование данных

This section shows the amount of downloaded and uploaded data and saved traffic for the selected data type (mobile data, Wi-Fi, or all). Tap _saved_, _uploaded_, or _downloaded_ to view the graph of data usage over time.

### Приложения

Здесь отображается статистика по всем приложениям, установленным на вашем устройстве. Вы можете сортировать приложения по количеству заблокированной рекламы или трекеров или по количеству отправленных запросов.

Tap _View all apps_ to expand the list of your apps, sorted by the number of ads, trackers, or requests.

![List of apps \*mobile\_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

При нажатии на приложение можно увидеть его полную статистику: количество отправленных запросов, домены и компании, к которым оно обращается.

### Компании

В этом разделе отображаются компании, с которыми связывается ваше устройство. Что это значит? AdGuard обнаруживает домены, на которые ваше устройство отправляет запросы, и определяет, каким компаниям они принадлежат. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS-статистика

This section shows data about the requests handled by _DNS protection_. Общее количество отправленных и заблокированных AdGuard запросов вы можете увидеть в цифрах и графиках. You'll also find statistics on the amount of traffic saved and data downloaded and uploaded.

### Использование батареи

В этом разделе представлена статистика использования ресурсов устройства AdGuard за последние 24 часа. The data may differ from the stats displayed in your device settings. This happens because the system attributes the traffic of all filtered apps to AdGuard. Устройство показывает, что AdGuard потребляет больше ресурсов, чем есть на самом деле. [Read more about battery and traffic consumption issues](/adguard-for-android/solving-problems/battery/).
