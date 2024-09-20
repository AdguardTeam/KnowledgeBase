---
title: Tracking protection
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

The Tracking protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Tracking protection_.

_Tracking protection_ (formerly known as _Stealth Mode_) prevents websites from collecting information about you, such as your IP addresses, information about your browser and operating system, screen resolution, and the page you came or were redirected from. It can also block cookies that websites use to mark your browser, save your personal settings and user preferences, or recognize you on your next visit.

![Tracking protection \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Tracking protection_ has three pre-configured levels of privacy protection (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Here are the active features of the pre-configured levels:

1. **Standard**

   a. _Блокировать трекеры_. Эта функция использует фильтр «Защита от трекинга» AdGuard для защиты от онлайн-счётчиков и инструментов веб-аналитики

   b. _Просить сайты не отслеживать вас_. Эта функция отправляет сигналы [Global Privacy Control](https://globalprivacycontrol.org/) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) на посещаемые вами сайты, запрашивая веб-приложения отключить отслеживание вашей активности

   c. _Удалять заголовок X-Client-Data_. Эта функция не даёт отправлять информацию о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

2. **Высокий**

   a. _Блокировать трекеры_. Эта функция использует фильтр «Защита от трекинга» AdGuard для защиты от онлайн-счётчиков и инструментов веб-аналитики

   b. _Удалять параметры отслеживания из URL-адресов_. Эта функция использует _Фильтр отслеживания по URL_ для удаления параметров отслеживания, таких как `utm_*` и `fb_ref`, из URL-адресов страниц

   c. _Скрывать поисковые запросы_. Эта функция скрывает запросы к сайтам, на которые вы пришли из поисковой системы

   d. _Просить сайты не отслеживать вас_. Эта функция отправляет сигналы [Global Privacy Control](https://globalprivacycontrol.org/) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) на посещаемые вами сайты, запрашивая веб-приложения отключить отслеживание вашей активности

   е. _Самоуничтожение сторонних куки_. Эта функция ограничивает время жизни сторонних куки до 180 минут

   :::caution

   Эта функция удаляет все сторонние файлы куки после принудительного истечения их срока действия. Сюда входят ваши логины в социальных сетях или других сторонних сервисах. Возможно, вам придётся периодически повторно входить на некоторые сайты или столкнуться с другими проблемами, связанными с файлами куки. Чтобы блокировать только отслеживающие куки, используйте _Стандартный уровень защиты_.

   :::

   f. _Удалять заголовок X-Client-Data_. Эта функция не даёт отправлять информацию о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

3. **Extreme** (formerly known as _Ultimate_)

   a. _Блокировать трекеры_. Эта функция использует _Фильтр счётчиков и систем аналитики_, чтобы защитить вас от онлайн-счётчиков и инструментов веб-аналитики

   b. _Удалять параметры отслеживания из URL-адресов_. Эта функция использует _Фильтр отслеживания по URL_ для удаления параметров отслеживания, таких как `utm_*` и `fb_ref`, из URL-адресов страниц

   c. _Скрывать поисковые запросы_. Эта функция скрывает запросы к сайтам, на которые вы пришли из поисковой системы

   d. _Просить сайты не отслеживать вас_. Эта функция отправляет сигналы [Global Privacy Control](https://globalprivacycontrol.org/) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) на посещаемые вами сайты, запрашивая веб-приложения отключить отслеживание вашей активности

   е. _Самоуничтожение сторонних куки_. Эта функция ограничивает время жизни сторонних куки до 180 минут

   :::caution

   Эта функция удаляет все сторонние файлы куки после принудительного истечения их срока действия. Сюда входят ваши логины в социальных сетях или других сторонних сервисах. Возможно, вам придётся периодически повторно входить на некоторые сайты или испытывать другие проблемы, связанные с файлами куки. Чтобы блокировать только отслеживающие куки, используйте _Стандартный уровень защиты_.

   :::

   f. _Блокировать WebRTC_. Эта функция блокирует WebRTC — уязвимость, которая может привести к утечке вашего IP-адреса, даже если вы используете прокси или VPN

   g. _Блокировать Push API_. Эта функция не позволяет вашим браузерам получать push-сообщения от серверов

   h. _Блокировать Location API_. Эта функция не позволяет браузерам получать доступ к вашим данным GPS и определять ваше местоположение

   i. _Скрывать Referer от третьих лиц_. Эта функция не позволяет третьим лицам узнать, какие сайты вы посещаете. Она скрывает HTTP-заголовок, содержащий URL-адрес начальной страницы, и заменяет его на стандартный или пользовательский, который вы можете задать

   j. _Скрыть User-Agent_. Эта функция удаляет из заголовка User-Agent идентифицирующую информацию, которая обычно включает название и версию браузера, операционную систему и языковые настройки

   k. _Удалять заголовок X-Client-Data_. Эта функция не даёт отправлять информацию о версии и модификации Google Chrome на домены Google (включая DoubleClick и Google Analytics)

Вы можете изменить отдельные параметры в разделе _Антитрекинг_ и создать индивидуальную конфигурацию. У каждой настройки есть описание, которое поможет вам понять её роль. [Read more about what the various _Tracking protection_ settings do](/general/stealth-mode) and utilize them cautiously, as some may interfere with the functionality of websites and browser extensions.
