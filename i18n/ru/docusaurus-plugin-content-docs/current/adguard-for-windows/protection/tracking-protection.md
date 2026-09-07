---
title: Защита от трекинга
sidebar_position: 2
---

Многие сайты собирают данные о своих посетителях, включая IP-адреса, информацию о браузере и операционной системе, разрешение экрана и даже страницу, с которой вы пришли. Куки могут использоваться для идентификации вашего браузера, запоминания предпочтений или распознавания вас при повторном посещении сайта. Защита от трекинга предотвращает сбор ваших личных данных такими системами. Подробнее в нашей [статье о Защите от трекинга в AdGuard](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

Если вы не хотите тратить время на ручную настройку фильтров, вы можете просто выбрать один из готовых уровней защиты:

- _Стандартный_: включён по умолчанию и обеспечивает надёжную защиту для повседневного просмотра сайтов.
- _Высокий_: удаляет параметры отслеживания из URL страниц и блокирует сторонние куки. Придётся время от времени заново входить на некоторые сайты или сталкиваться с другими проблемами, связанными с куки.
- _Экстремальный_: ограничивает срок действия сторонних куки и блокирует некоторые API браузера. Некоторые сайты могут работать некорректно.

Для максимальной гибкости выберите _Пользовательский_ режим и настройте все параметры вручную. Здесь настройки разделены на пять категорий:

- [Основные настройки](#general-settings)

- [Методы отслеживания](#tracking-methods)

- [API браузера](#browser-api)

- [Windows-трекинг](#windows-tracking)

- [Дополнительные настройки](#miscellaneous)

## Основные настройки

![General settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Блокировать трекеры

Блокирует трекеры и веб-аналитику с помощью _Фильтра счётчиков и систем аналитики_.

### Удалять параметры отслеживания из URL-адресов

Удаляет трекинговые параметры, такие как `utm_*` и `fb_ref`, из URL-адресов с помощью _Фильтра отслеживания по URL_.

### Скрывать поисковые запросы

Скрывает ваши запросы от сайтов, на которые вы перешли из поисковой системы. При переходах из результатов поиска Google, Yandex или других поисковых систем эта опция скрывает от сайта поисковый запрос, по которому вы нашли его.

### Отправлять сигналы, чтобы отказаться от отслеживания

Отправляет сигналы [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) сайтам, которые вы посещаете.

### Другие фильтры защиты от трекинга

Applies a set of additional privacy protection filters. The number next to _Enabled in Filters_ shows how many filters are currently active.

## Методы отслеживания

![Tracking methods \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Удалять сторонние файлы куки

Сайты используют файлы куки для хранения ваших предпочтений — например, выбранного языка, вашего местоположения или товаров в корзине. Когда вы возвращаетесь, браузер отправляет эти куки обратно, чтобы сайт мог вас распознать.

Сторонние куки работают так же, но создаются доменами, отличными от того, который вы посещаете. Например, cnn.com может содержать виджет Facebook _Like_. Он установит файл куки, который позже будет прочитан Facebook. Рекламодатели часто используют такие куки для отслеживания других посещаемых вами сайтов.

С помощью этой функции вы можете задать ограничение по времени (в минутах), по истечении которого все сторонние куки будут удалены. Если установить таймер на 0, такие файлы будут полностью заблокированы.

![Time-to-live \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Обратите внимание, что эта настройка удаляет все сторонние куки, включая те, которые используются для входа в систему через социальные сети или другие внешние сервисы. Это означает, что вам, возможно, придётся время от времени входить в систему снова или решать другие проблемы, связанные с куки. Если вы хотите заблокировать только отслеживающие куки, используйте [_Фильтр счётчиков и систем аналитики_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Удалять основные файлы куки (не рекомендуется)

Этот параметр удаляет куки, установленные сайтом, на котором вы сейчас находитесь, после выбранного периода времени (в минутах). По истечении таймера все упомянутые выше куки будут удалены. Установите таймер на 0, чтобы заблокировать их полностью.

:::caution

Мы не рекомендуем включать эту опцию, так как она может серьёзно нарушить работу некоторых сайтов.

:::

### Блокировать заголовки ETag и If-None-Match

Удаляет заголовки ETag и If-None-Match из запросов и ответов, чтобы сайты не могли использовать их для отслеживания.

Когда браузер обращается к странице, сервер присваивает ей ETag — уникальный идентификатор, используемый для кеширования содержимого страницы. При последующих посещениях браузер отправляет тот же ETag обратно на сервер. Это позволяет серверу распознать посетителя. Пока кешированные файлы сохраняются, ETag передаётся с каждым запросом. Если на странице также есть встроенные элементы с других серверов, таких как изображения или iframe, эти серверы могут использовать ETag для отслеживания вашей активности без вашего ведома.

### Блокировать сторонний заголовок авторизации

Отключает кешированные данные авторизации, которые могут быть использованы для отслеживания. Может нарушать работу некоторых браузерных расширений и сайтов.

Значение заголовка Authorization кешируется браузером и автоматически отправляется с каждым запросом к тому же домену. Поскольку он сопровождает каждый запрос, его можно использовать для идентификации и отслеживания пользователей аналогично куки.

## API браузера

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Prevent IP address leaks through WebRTC

Makes WebRTC use a stricter IP address policy to prevent your real IP address from being exposed, even if you use a proxy or VPN.

WebRTC (Web Real-Time Communications) — технология, которая разрешает прямой стриминг данных между браузерами и приложениями. By default, it can reveal your true IP address even when a proxy or VPN is active. This option enforces a stricter IP address policy instead of blocking WebRTC entirely, so browser applications such as messengers, chats, and games are less likely to be affected.

### Блокировать Push API

Push API позволяет серверам отправлять сообщения веб-приложениям вне зависимости от активности вашего браузера. Вот почему вы можете получать уведомления от сайтов, даже если ваш браузер скрыт в трее или не запущен. Включение этой опции полностью блокирует Push API.

### Блокировать Location API

Когда эта опция включена, браузер не отправляет GPS-данные на веб-сайты. Это предотвращает определение вашей локации, изменение результатов поиска или адаптацию контента на основе вашего местоположения.

## Windows-трекинг

![Windows tracking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Отключить телеметрию Windows

Отключает отправку данных о вашей системе и использовании приложений.

### Отключить Windows Recall

Disables the Windows Recall feature, which periodically takes snapshots of your screen and stores them locally. This prevents sensitive information visible on your screen from being captured and saved.

### Выключить рекламные идентификаторы

Отключает рекламный идентификатор, чтобы приложения не могли отслеживать, как вы ими пользуетесь.

### Отключить автоматические отчёты Microsoft Defender

Запрещает Defender отправлять автоматические отчёты и образцы подозрительных файлов.

### Отключить WAP Push

Disables data collection about Windows component problems.

## Разное

![Miscellaneous \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Скрывать Referer от сторонних ресурсов

Referer — это HTTP-заголовок, включаемый в запросы от браузера к серверу. Он содержит URL-адрес источника запроса. Когда вы переходите с одной страницы на другую, Referer сохраняет URL начальной страницы. Часто на сервере, где размещена веб-страница, устанавливается программное обеспечение, которое анализирует Referer и извлекает из него различную информацию.

Enabling the _Hide Referer from third parties_ option prevents third-party websites from seeing this information by altering or removing the header.

Вы также можете ввести своё значение в поле _Пользовательский Referer_. Оставьте поле пустым, чтобы использовать Referer по умолчанию.

Обратите внимание, что для фильтрации трафика приложения AdGuard перехватывают запросы от браузера к серверу. Запросы к рекламным, отслеживающим и фишинговым серверам могут быть изменены перед отправкой на сервер или полностью заблокированы.

То же самое относится и к опции _Скрыть Referer от сторонних ресурсов_: чтобы фильтровать трафик, AdGuard перехватывает HTTP(S)-запросы и может изменять или блокировать их до того, как они достигнут сервера. Изменения происходят только после того, как запрос покидает ваш браузер. По этой причине, если вы проверите заголовки в браузере (например, с помощью Chrome Developer Tools), вы всё равно увидите оригинальный Referer. Чтобы убедиться в том, что он был изменён, можно воспользоваться внешними инструментами, например Fiddler.

### Скрывать User-Agent

Когда вы заходите на сайт, ваш браузер в составе HTTP-запроса отправляет заголовок User-Agent. Он выглядит как текстовая строка, начинающаяся с «User-Agent». В этой строке обычно содержатся такие детали, как название и версия браузера, операционная система и языковые настройки.

Когда эта опция включена, AdGuard удаляет идентифицирующую информацию из User-Agent, чтобы рекламодатели и трекеры не могли использовать её для создания вашего профиля. При желании вы можете ввести собственное значение в поле _Пользовательский User-Agent_. Чтобы сохранить значение по умолчанию, просто оставьте поле пустым.

### Скрывать IP-адрес

AdGuard не может полностью скрыть ваш реальный IP-адрес, но может заменить его другим, чтобы сайты воспринимали ваше соединение как проходящее через прокси. В некоторых случаях это помогает скрыть ваш настоящий IP.

В соответствующее поле можно ввести любой IP-адрес, который вы хотите использовать. Оставьте поле пустым, чтобы использовать IP-адрес по умолчанию.

### Удалять заголовок X-Client-Data

Запрещает Google Chrome отправлять информацию о своей версии и изменениях в запросах на домены Google, включая такие сервисы, как DoubleClick и Google Analytics.

### Защита от DPI

![Protect against DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) is a technology that allows ISPs to analyze and filter traffic based on packet content. With this option enabled, AdGuard modifies outgoing packet data to make it harder for DPI systems to identify and analyze your traffic, helping protect your connection privacy.

When you click on _Protect against DPI_, a separate screen opens with three groups of settings:

**ClientHello split** — modifies the TLS ClientHello message to make it harder for DPI systems to detect and block encrypted connections. The following strategies are available:

- _Split TCP packet at fixed position_ — splits the ClientHello TCP packet at a specified byte position.
- _Split TLS record at fixed position_ — splits the TLS record containing the ClientHello at a specified byte position.
- _Split TLS before SNI_ — splits the ClientHello before the Server Name Indication field.
- _Split TLS after SNI_ — splits the ClientHello after the Server Name Indication field.
- _Split TLS in the middle of SNI_ — splits the ClientHello in the middle of the Server Name Indication field.
- _Split TLS randomly within SNI_ — splits the ClientHello at a random position within the Server Name Indication field.

When using a fixed-position strategy, set the _Split byte position_ (1–1500) to specify where the split occurs.

**HTTP request split** — splits HTTP requests into multiple TCP packets to bypass DPI systems that rely on inspecting complete HTTP requests.

**HTTP space juggling** — manipulates whitespace in HTTP requests to confuse DPI systems that parse HTTP headers, making it harder for them to identify and block specific traffic.

:::caution

This feature can break access to some unencrypted websites. If this feature is enabled in AdGuard for Windows, it may also interfere with the ESET antivirus — ESET will not be able to filter traffic, leaving some malicious or blocked websites accessible.

:::
