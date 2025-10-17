---
title: Защита от трекинга
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. Защита от трекинга позволяет блокировать куки, которые сайты используют, чтобы сохранять ваши настройки и пользовательские предпочтения или узнавать вас при следующем посещении.

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Вот функции, которые по умолчанию включены на разных уровнях защиты:

1. **Стандартный**

   a. _Блокировать трекеры_. Эта функция использует _Фильтр счётчиков и систем аналитики_ для защиты от трекеров и инструментов веб-аналитики

   b. _Ask websites not to track me_. Эта функция отправляет сигналы [Global Privacy Control](https://globalprivacycontrol.org/) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) на сайты, которые вы посещаете. Она запрашивает веб-приложения отключить отслеживание вашей активности

   c. _Удалять заголовок X-Client-Data_. Эта функция не даёт отправлять информацию о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

2. **Высокий**

   a. _Блокировать трекеры_. Эта функция использует _Фильтр счётчиков и систем аналитики_ для защиты от трекеров и инструментов веб-аналитики

   b. _Удалять параметры отслеживания из URL-адресов_. Эта функция использует _Фильтр отслеживания по URL_ для удаления параметров отслеживания, таких как `utm_*` и `fb_ref`, из URL-адресов страниц

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Эта функция отправляет сигналы [Global Privacy Control](https://globalprivacycontrol.org/) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) на сайты, которые вы посещаете. Она запрашивает веб-приложения отключить отслеживание вашей активности

   е. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Эта функция удаляет все сторонние файлы куки после истечения срока их действия. Если вы использовали соцсети или другие сторонние сервисы для входа, эти данные также удалятся. Возможно, вам придётся периодически повторно входить на некоторые сайты или столкнуться с другими проблемами, связанными с файлами куки. Чтобы блокировать только отслеживающие куки, используйте _Стандартный_ уровень защиты.

   :::

   f. _Удалять заголовок X-Client-Data_. Эта функция не даёт отправлять информацию о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

3. **Экстремальный**

   a. _Блокировать трекеры_. Эта функция использует _Фильтр счётчиков и систем аналитики_, чтобы защитить вас от онлайн-счётчиков и инструментов веб-аналитики

   b. _Удалять параметры отслеживания из URL-адресов_. Эта функция использует _Фильтр отслеживания по URL_ для удаления параметров отслеживания, таких как `utm_*` и `fb_ref`, из URL-адресов страниц

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Эта функция отправляет сигналы [Global Privacy Control](https://globalprivacycontrol.org/) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) на сайты, которые вы посещаете. Она запрашивает веб-приложения отключить отслеживание вашей активности

   е. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::caution

   Эта функция удаляет все сторонние файлы куки после истечения срока их действия. Если вы использовали соцсети или другие сторонние сервисы для входа, эти данные также удалятся. Возможно, вам придётся периодически повторно входить на некоторые сайты или испытывать другие проблемы, связанные с файлами куки. Чтобы блокировать только отслеживающие куки, используйте _Стандартный_ уровень защиты.

   :::

   f. _Блокировать WebRTC_. This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   g. _Блокировать Push API_. This feature blocks push notifications from websites

   h. _Блокировать Location API_. Эта функция не позволяет браузерам получать доступ к вашим данным GPS и определять ваше местоположение

   i. _Скрывать Referer от третьих лиц_. Эта функция не позволяет третьим лицам узнать, какие сайты вы посещаете. Она скрывает HTTP-заголовок, содержащий URL-адрес начальной страницы, и заменяет его на стандартный или пользовательский, который вы можете задать

   j. _Hide User-Agent_. Эта функция удаляет из заголовка User-Agent идентифицирующую информацию, которая обычно включает название и версию браузера, операционную систему и языковые настройки

   k. _Удалять заголовок X-Client-Data_. Эта функция не даёт отправлять информацию о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
