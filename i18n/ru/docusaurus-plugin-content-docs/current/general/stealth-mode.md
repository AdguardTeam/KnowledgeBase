---
title: Защита от трекинга (ранее Антитрекинг)
sidebar_position: 4
---

Многие сайты собирают различную информацию о своих посетителях: их IP-адрес, сведения об установленном браузере и операционной системе, экранном разрешении и даже о том, с какой веб-страницы перешёл пользователь. Чтобы сохранить индивидуальные настройки, личные предпочтения или узнать посетителя при повторном визите, некоторые интернет-ресурсы помечают браузер специальными куки-файлами. *Защита от трекинга* защищает вашу личную информацию от таких систем сбора данных и статистики.

Вы можете настроить параметры защиты от трекинга по своему усмотрению. Например, можно сделать так, чтобы сайты не получали поисковые заросы, которые привели вас к ним. Можно настроить автоматическое удаление сторонних куки и куки сайта. Вы также можете запретить браузеру передавать геолокацию, которую могут использовать для отслеживания вашего местоположения. Вы можете скрыть свой настоящий IP-адрес или заменить его на произвольный.

Рассмотрим основные настройки **Защиты от трекинга**. Они условно разделены на четыре группы: **Общие настройки**, **Методы отслеживания**, **API браузер»**, **Windows-трекинг** и **Разное**.

:::note

Некоторые функции доступны только в определённых продуктах из-за ограничений операционной системы или браузера.

:::

## Основные {#general}

### Блокировать трекеры {#blocktrackers}

Эта функция блокирует трекеры и веб-аналитику с помощью Фильтра счётчиков и систем аналитики.

### Удалять параметры отслеживания из URL-адресов {#removetracking}

Если вы включите эту функцию, AdGuard будет использовать свой Фильтр отслеживания URL, чтобы удалять такие параметры отслеживания, как `utm_*` и `fb_ref` из URL страниц.

### Скрывать поисковые запросы {#searchqueries}

Эта функция скрывает ваши поисковые запросы от сайтов, на которые вы переходите через результаты поисковой системы. Например, когда вы попадаете на сайт через поисковую систему, такую как Google или Яндекс, эта функция скрывает поисковый запрос, который привёл вас на этот сайт.

### Отправлять сигналы, чтобы отказаться от отслеживания {#donottrack}

Отправляет сигналы [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) и [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) сайтам, которые вы посещаете.

### Другие фильтры защиты от трекинга {#otherprivacyfilters}

Эта функция показывает другие включённые фильтры конфиденциальности в разделе **Фильтры**.

:::note

Доступно в AdGuard для Android и AdGuard для Windows.

:::

## Методы отслеживания {#tracking-methods}

### Удалять сторонние файлы куки {#3p-cookie}

Эта функция не позволяет рекламодателям отслеживать ваше поведение на нескольких страницах, ограничивая срок действия сторонних куки.

Сайты хранят в куки-файлах информацию о вас и ваших предпочтениях, например, выбранный язык страницы, местоположение или даже список товаров в корзине. Когда вы возвращаетесь на сайт, браузер отправляет принадлежащие сайту куки, что позволяет ему «вспомнить» ваши данные.

Сторонние куки устанавливаются сайтом, отличным от того, который вы просматриваете в данный момент. Например, у сайта cnn.com может быть виджет Facebook «Нравится» на главной странице. Этот виджет устанавливает куки, которые Facebook сможет прочитать позже. Некоторые рекламодатели используют такие куки, чтобы отслеживать, какие ещё сайты с их рекламой вы посещаете.

Выставьте временной интервал (в минутах), по истечении которого все сторонние куки будут удалены. Установите значение «0», чтобы заблокировать их полностью.

:::caution

Эта настройка удаляет все сторонние куки, включая информацию о входе через соцсети или другие сторонние сервисы. Возможно, вам придётся периодически повторно вводить логин и пароль на некоторых сайтах и сталкиваться с другими проблемами, связанными с куки. Чтобы блокировать только отслеживающие куки, используйте [*Фильтр счётчиков и систем аналитики*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

:::note

Доступно в AdGuard для Android, AdGuard для Windows, AdGuard для Mac и Браузерном расширении AdGuard (для браузеров на базе MV2).

:::

### Удалять основные файлы куки (не рекомендуется) {#1p-cookie}

Эта функция не позволяет сайтам запоминать ваши данные, такие как учётные данные и языковые настройки, ограничивая срок действия основных файлов куки.

Установите временной интервал (в минутах), по истечении которого все куки будут удалены. Установите значение «0», чтобы заблокировать их полностью.

:::caution

Мы не рекомендуем включать эту опцию, так как она может серьёзно нарушить работу некоторых сайтов. Если вы заблокируете эти куки, некоторые сайты могут сломаться или перестать работать.

:::

:::note

Доступно в AdGuard для Android, AdGuard для Windows, AdGuard для Mac и Браузерном расширении AdGuard (для браузеров на базе MV2).

:::

### Блокировать заголовки ETag и If-None-Match {#3p-cache}

Эта функция удаляет заголовки ETag и If-None-Match из запросов и ответов, чтобы предотвратить отслеживание.

При обращении браузера к странице сервер выдаёт ему цифровую метку ETag. Используя её, браузер кеширует содержимое страницы. При последующих запросах он отправляет метку ETag на соответствующий ей сервер, который, таким образом, узнаёт, кто к нему пришёл. Пока файлы сайта находятся в кеше, метка посылается всякий раз при запросе к этому сайту. Если на сайте встроено содержимое с другого сервера (например, изображение или iframe), другой сервер также может отслеживать вас без вашего ведома.

:::note

Доступно в AdGuard для Android, AdGuard для Windows и AdGuard для Mac.

:::

### Блокировать сторонний заголовок авторизации {#3p-auth}

Эта функция отключает кешированные данные авторизации, которые могут быть использованы для отслеживания. Может нарушать работу некоторых браузерных расширений и сайтов.

Значение заголовка “Authorization” кешируется браузером и отправляется вместе с каждым запросом к этому домену. This means it can be used for tracking purposes, just like cookies.

:::note

Доступно в AdGuard для Android, AdGuard для Windows и AdGuard для Mac.

:::

## API браузера {#browser-api}

:::note

Для Браузерного расширения AdGuard доступна только функция **Block WebRTC**. Вы можете найти её в разделе **Разное**.

:::

### Блокировать WebRTC {#webrtc}

Эта функция блокирует WebRTC, который может привести к утечке вашего IP-адреса, даже если вы используете прокси или VPN.

WebRTC (Web Real-Time Communications) — технология, которая позволяет осуществлять прямой стриминг данных между браузерами и приложениями. Однако это может позволить другим узнать ваш реальный IP-адрес, даже если вы используете прокси или VPN.

:::caution

Включение этого параметра может нарушить работу некоторых браузерных приложений, таких как мессенджеры, стриминговые платформы, чаты или игры.

:::

### Блокировать Push API {#push}

Эта функция блокирует push-уведомления с сайтов.

Push API даёт серверам возможность отправлять веб-приложениям сообщения вне зависимости от состояния браузера. Это означает, что вы можете увидеть уведомления от различных сайтов, даже если браузер свернут или закрыт. Включите эту опцию, чтобы полностью заблокировать Push API браузеров.

### Блокировать Location API {#location}

Эта функция не позволяет сайтам отслеживать ваше местоположение.

Включение этой опции запретит вашему браузеру отправлять данные GPS, которые могут быть использованы для определения вашего местоположения, изменения результатов поиска или иного влияния на вашу работу в сети.

### Блокировать Flash {#flash}

Эта функция усиливает защиту и ускоряет загрузку сайтов, блокируя поддержку Flash Player в браузерах.

Плагин Flash Player становится всё более уязвимым для таких онлайн-угроз, как вирусы и хакерские атаки и, кроме того, может существенно увеличить время загрузки сайтов. При включении этой опции AdGuard блокирует возможность браузера определять наличие компонентов (плагинов и объектов ActiveXObject), позволяющих использовать технологии Flash для отображения содержимого. Фактически это означает, что браузеры не могут поддерживать эту технологию.

### Блокировать Java {#java}

Эта функция отключает плагины Java на сайтах и в веб-сервисах, поскольку API имеет серьёзные проблемы с безопасностью. Не отключает JavaScript.

Некоторые сайты и сервисы по-прежнему используют устаревшие технологии поддержки Java-плагинов. API-интерфейс — основа Java-плагинов — имеет серьёзные проблемы безопасности. В целях безопасности вы можете отключить такие плагины. Тем не менее, даже если вы решите использовать опцию «Блокировать Java», JavaScript всё равно будет включён.

## Windows-трекинг {#windowstracking}

:::note

Эти функции доступны только в AdGuard для Windows.

:::

### Отключить телеметрию Windows {#windowstelemetry}

Эта функция отключает отправку технических данных о вашей системе и использовании приложений.

### Отключить Windows Recall {#windowsrecall}

Эта функция запрещает Windows делать и анализировать скриншоты вашей активности на рабочем столе.

### Выключить рекламные идентификаторы {#advertisingid}

Эта функция отключает рекламный идентификатор, чтобы приложения не могли отслеживать, как вы ими пользуетесь.

### Отключить автоматические отчёты Microsoft Defender {#windowsautoreport}

Эта функция запрещает автоматически отправлять отчёты и собирать образцы подозрительных файлов вредоносного ПО.

### Отключить WAP Push {#wappushrouting}

Эта функция отключает сбор данных о проблемах компонентов Windows.

## Дополнительные настройки {#miscellaneous}

### Скрывать Referer от сторонних ресурсов {#referer}

Эта функция не позволяет третьим лицам узнать, какие сайты вы посещаете.

Referer — это HTTP-заголовок, используемый в запросах браузера к серверу. Он содержит URL-адрес источника запроса. Когда вы переходите с одной страницы на другую, Referer сохраняет URL начальной страницы. Часто на сервере, где размещена веб-страница, устанавливается программное обеспечение, которое анализирует Referer и извлекает из него различную информацию. Включение функции *Скрыть Referer от сторонних ресурсов* скрывает текущий сайт от сторонних ресурсов путём изменения HTTP-заголовка.

Указать свой Referer можно в поле *Пользовательский Referer*. Оставьте поле пустым, чтобы использовать Referer по умолчанию.

Note that to be able to filter traffic, AdGuard applications 'intercept' browser-to-server requests. Requests to ad, tracking, and phishing servers may be altered before sending them to the server or blocked completely. Same goes for the *Hide Referer from third parties* option: AdGuard intercepts HTTP(S) requests, in particular to remove or change the Referer header if this option is enabled. However, it happens only after these requests “leave” the browser. This means that if you monitor Referer inside the browser (for example, with the help of Chrome's Developer Tools), you will see the original Referer because the request hasn't reached AdGuard yet. You can use software like [Fiddler](https://www.telerik.com/fiddler) to make sure that Referer gets altered correctly.

Due to the nature of all web browser extensions, AdGuard Browser Extension instead works 'inside' the web browser. It will alter the Referer right then and there, so Developer Tools will show the desired Referer for your requests.

### Hide User-Agent {#useragent}

This feature removes identifying information from the User-Agent header.

When you visit a website, your browser sends its information to the server. It looks like a text line that is part of an HTTP request that begins with “User-Agent:”. It usually includes the name and version of the browser, the operating system, and language settings. We cut User-Agent from identifying information so that advertisers cannot obtain it.

You can also set an arbitrary value for User-Agent by entering it into the Custom User-Agent field. To use default User-Agent, leave the field blank.

:::note

Доступно в AdGuard для Android, AdGuard для Windows и AdGuard для Mac.

:::

### Mask IP address {#ip}

This feature tricks websites into believing you are a proxy with the IP address you specify.

Tracking protection cannot hide your IP address. However, we can conceal it so that websites you visit will think you are a proxy. Sometimes this helps, and websites ignore your true IP address.

You can set an arbitrary IP address, which you would like others to perceive as yours, by simply entering it into the corresponding field. To use the default IP address, leave the field blank.

:::note

Доступно в AdGuard для Android, AdGuard для Windows и AdGuard для Mac.

:::

### Remove X-Client-Data header {#xclientdata}

This feature blocks Google Chrome from sending its version and modifications information to Google domains (including Double Click and Google Analytics).

:::note

Available in AdGuard for Android, AdGuard for Windows, AdGuard for Mac, and AdGuard Browser Extension (Chromium-based browsers).

:::

### Protect against DPI {#dpi}

This feature modifies your outgoing traffic so that your ISP’s Deep Packet Inspection systems can’t detect the websites you visit. Can’t guarantee complete protection against all DPI systems.

The Deep Packet Inspection is a system of deep analysis and filtering of traffic by packet content, as well as the accumulation of statistical data. Using this technology, ISPs have the ability to control the passing traffic and limit access to content for their clients.

AdGuard can modify outgoing packet data so that the client does not fall under the DPI blocking criteria. This means that by enabling this option, users can get access to the content they want. Not all DPI systems can be bypassed at this time, but we are constantly working to improve this.

:::note

Доступно в AdGuard для Android, AdGuard для Windows и AdGuard для Mac.

:::

:::caution

If this feature is enabled in AdGuard for Windows, it may interfere with ESET antivirus. Anti-DPI will prevent ESET from filtering traffic, leaving blacklisted and malicious websites unblocked.

:::
