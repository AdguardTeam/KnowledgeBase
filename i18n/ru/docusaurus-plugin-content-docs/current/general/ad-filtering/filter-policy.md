---
title: Политика фильтров AdGuard
sidebar_position: 6
---

В AdGuard мы давно придерживаемся определённых принципов при создании фильтров, которые, наряду с описанием фильтров, изложены ниже как часть нашей политики фильтрации.

## Общие критерии

Эти критерии одинаково применяются к правилам всех фильтров.

- Правила для конкретного сайта будут добавлены, только если на него достаточно трафика. Трафик определяется по публичной статистике (если она доступна) или косвенным показателям, таким как количество подписчиков в социальных сетях. Посещаемость сайта считается достаточной, если количество посещений достигает 100 тысяч в месяц. Мы рассмотрим возможность добавления правила для сайта, который не так популярен, но окончательное решение остаётся за разработчиками фильтра. Сайты с низким трафиком всё равно следует проверять на наличие сторонней аналитики и рекламных сетей
- Решение о контент-фермах (сайтах, которые производят большое количество контента, направленного в первую очередь на достижение высокой видимости в результатах поиска и получение доходов от рекламы) принимается разработчиками фильтров в зависимости от качества контента

Требования к качеству правил фильтрации:

- Правила не должны негативно влиять на производительность сайтов
- Правила разблокировки должны быть как можно более конкретными, чтобы не разблокировать ничего лишнего
- Правила JavaScript следует использовать как можно реже и только в том случае, если блокировка рекламы без них невозможна

## Фильтры, блокирующие рекламу

### Терминология

**Блокировщик рекламы** — это ПО для фильтрации, скрытия или блокировки рекламы и других элементов на веб-страницах. Блокировщики рекламы созданы для того, чтобы страницы загружались быстрее, интернет-трафика потреблялось меньше, реклама и раздражающие элементы блокировались, а конфиденциальность при просмотре сайтов и использовании приложений повышалась.

**Фильтр** — это набор правил, предназначенных для фильтрации контента и блокировки различных видов рекламы и других типов контента с использованием блокировщиков рекламы. Эти фильтры обычно работают на уровне веб-браузера, программ или DNS-сервера.

**Anti-adblock** — это технология, которую используют сайты и приложения, чтобы обнаруживать блокировку рекламы и реагировать на неё различными способами: отслеживать, повторно внедрять или побуждать пользователя к отключению блокировщика. Антиадблоки могут быть разных типов:

- Антиадблок, который блокирует содержимое сайта, не предлагая альтернативы: чтобы продолжить пользоваться сайтом, пользователь должен отключить блокировщик рекламы на сайте
- Anti-adblock wall с альтернативными вариантами, такими как покупка подписки для продолжения использования блокировщика рекламы
- Информационные сообщения, не обязывающие к действию: пользователей просят отключить блокировщик рекламы, но эти сообщения можно закрыть и продолжать пользоваться сайтом без ограничений
- Внедрение альтернативной рекламы в ответ на использование блокировщиков рекламы: сайты внедряют альтернативную рекламу при обнаружении блокировщиков
- Платный доступ: метод монетизации, при котором контент частично или полностью скрывается от пользователей с сообщением, предлагающим им приобрести подписку для доступа

### Фильтры

Фильтры блокировки рекламы AdGuard включают в себя:

- Базовый фильтр AdGuard
- Фильтр мобильной рекламы AdGuard
- Региональные фильтры, разделённые по языковому принципу — китайский, голландский, французский, немецкий, японский, русский, испанский/португальский, турецкий и украинский

### Назначение этих фильтров

- **Базовый фильтр** предназначен для блокировки рекламы на англоязычных сайтах и тех сайтах, для которых нет отдельного фильтра. Он также содержит общие правила фильтрации, которые применяются ко всем сайтам независимо от языка
- **Фильтр мобильной рекламы** блокирует рекламу на мобильных версиях сайтов и в мобильных приложениях. Разделения по языкам нет
- **Региональные фильтры** следуют той же политике, что и **Базовый фильтр**, но ограничены сайтами на определённых языках

Цель этих фильтров — блокировать все виды рекламы на сайтах, в приложениях и на некоторых устройствах, которые могут загружать рекламу из интернета:

- Баннеры — рекламные объявления, отображаемые в виде изображений в различных частях веб-страниц
- Тизеры — текстовая или графическая реклама, часто анимированная, созданная для того, чтобы завлечь посетителей заголовками и изображениями и побудить их кликнуть на баннер (кликбейт)
- Текстовые объявления — реклама в виде текста, включая ссылки
- Модальная реклама — реклама, которая внезапно появляется поверх текущего контента в виде модальных окон
- Popunders — реклама, которая открывается в отдельном окне под текущим, когда кликают где-либо на странице
- Редирект рекламы — механизмы, которые автоматически перенаправляют пользователей на другой сайт после клика
- Объявления, замаскированные под контент сайта, при нажатии на которые открываются страницы с рекламируемыми продуктами или несвязанным контентом
- Видеореклама — рекламные ролики, встроенные в видеоконтент или в отдельные элементы рекламы на сайтах и в приложениях
- Интерактивная реклама — это реклама, с которой пользователи могут взаимодействовать (например, игры и опросы, по завершении которых открывается рекламируемый товар)
- Межстраничная реклама — полноэкранная реклама на мобильных устройствах, которая закрывает интерфейс приложения или веб-браузера
- Остатки рекламы, которые занимают большое пространство или выделяются на общем фоне и привлекают внимание посетителей (за исключением едва заметных или незаметных)
- Антиадблок-реклама — альтернативная реклама, отображаемая на сайте, когда основная заблокирована
- Собственная реклама сайта, если она была заблокирована общими правилами фильтрации (см. раздел *Ограничения и исключения*)
- Антиадблок-скрипты, препятствующие использованию сайта (см. раздел *Ограничения и исключения*)
- Реклама, внедряемая вредоносным ПО, если предоставлена подробная информация о способе её загрузки или шагах воспроизведения
- Нежелательный майнинг — скрипты, которые майнят криптовалюту без согласия пользователя

### Ограничения и исключения

- Собственная реклама сайта не должна намеренно блокироваться. Однако её не следует разблокировать, если блокировка вызвана общими правилами фильтрации
- Меры доступа к контенту, такие как платный доступ, не блокируются
- Anti-adblock wall будет блокироваться в следующих случаях:
    - Он настойчиво настаивает на отключении или удалении блокировщика рекламы или не даёт пользоваться сайтом
    - Он содержит неверные и вводящие в заблуждение описания возможных последствий использования блокировщиков рекламы
    - Он подвергает посетителей риску вредоносной рекламы — когда разблокированная реклама поступает из сомнительных источников
- Мы не блокируем сообщения, обнаруженные блокировщиками рекламы, которые удовлетворяют хотя бы одному из следующих критериев:
    - Они позволяют использовать сайт и не перекрывают значительный объём контента
    - Они предоставляют альтернативу отключению блокировщика рекламы, если эта альтернатива не ставит под угрозу конфиденциальность или безопасность пользователей
    - Они позволяют пользователю перейти к содержимому сайта или предлагают реальный обмен ценностями, который не подвергает риску конфиденциальность или безопасность пользователя
    - Некоторые устаревшие правила могут продолжать блокировать сообщения, удовлетворяющие одному или нескольким из этих критериев. Если такие правила будут выявлены, они будут обрабатываться в соответствии с этой политикой
- Майнинговые пулы не блокируются, если они общедоступны и не используются исключительно во вредоносных целях

## Фильтр счётчиков и систем аналитики

### Терминология

**Отслеживание** — процесс мониторинга и сбора данных о пользователях и их взаимодействиях с сайтами и приложениями в маркетинговых целях, а также для получения телеметрии о функционировании сайтов или приложений с целью анализа их работы. Этот процесс включает в себя отслеживание посещённых страниц, проведённого времени, взаимодействия с элементами сайта (например, клики, заполнение форм) и других показателей. Это позволяет владельцам сайтов и приложений лучше понимать поведение пользователей, оптимизировать функциональность и адаптировать маркетинговые стратегии. Отслеживание также используется для мониторинга производительности, моделей использования и выявления проблем, предоставляя разработчикам необходимые данные для повышения стабильности и качества работы сайта или приложения. Даже если полученные данные не позволяют раскрыть личность человека, такие действия всё равно считаются отслеживанием.

**Трекер** — ПО, используемое на сайте или в приложении и предназначенное для сбора информации об их работе и действиях посетителей. Трекер отслеживает взаимодействие пользователя с сайтом или приложением, записывая данные о просмотрах страниц, проведённом на них времени, кликах, отправке форм и других событиях. Его цель — предоставить владельцам сайтов и приложений инструмент для анализа поведения пользователей, улучшения пользовательского опыта и оптимизации контента и рекламы.

**Параметр отслеживания URL-адресов** — часть адреса, которая добавляется к ссылкам системами аналитики или присутствует в некоторых ссылках на веб-страницах. При выполнении запроса этот параметр отслеживания URL-адресов может обрабатываться серверной частью системы аналитики или сайта, которая будет извлекать из него информацию. Например, параметры отслеживания URL-адресов могут передавать информацию о кликах или рекламных кампаниях. Параметры отслеживания URL-адресов могут также использоваться системами защиты от мошенничества или обнаружения ботов.

**Куки** — файлы, которые сайты отправляют и сохраняют на устройствах. Эти файлы содержат различную информацию — как необходимую для функционирования сайта на устройстве, так и используемую в целях аналитики — уникальные идентификаторы для отслеживания активности посетителей на сайте, параметры рекламы и многое другое.

### Фильтры

Фильтры защиты от отслеживания AdGuard включают в себя:

- Фильтр счётчиков и систем аналитики
- Фильтр отслеживания по URL

### Назначение этих фильтров

**Фильтр счётчиков и систем аналитики** предназначен для блокировки трекеров, собирающих личные данные пользователей, и для улучшения конфиденциальности пользователей.

Что он блокирует:

- Скрипты систем аналитики
- Собственные скрипты отслеживания сайтов и приложений
- Замаскированные CNAME-трекеры
- Отслеживающие файлы куки
- Пиксели отслеживания
- Отслеживающие API браузеров
- Функции Privacy Sandbox в Google Chrome и его ответвлениях, используемых для отслеживания (Google Topics API, Protected Audience API)

**Фильтр отслеживания URL** предназначен для удаления параметров отслеживания с веб-адресов

### Ограничения и исключения

Фильтры защиты от отслеживания не должны блокировать трекер, если их блокировка может нарушить правильное функционирование сайта:

- Защита от ботов и мошенничества, если это мешает использованию сайта. Например, при использовании PerimeterX или hCaptcha блокировка вызывает проблемы, когда сайт пытается проверить посетителя с помощью капчи
- Системы отслеживания ошибок, такие как Sentry или Bugsnag, не блокируются

## Фильтры раздражителей

Фильтры раздражителей предназначены для блокировки элементов на страницах, которые не являются рекламой, но отвлекают и мешают взаимодействию с сайтом или потреблению контента. Это могут быть модальные окна и интерактивные формы, уведомления и запросы на согласие на использование куки, баннеры мобильных приложений и различные виджеты.

### Терминология

**Уведомление о куки** — форма, которая описывает типы и использование куки на сайте. Уведомление о куки появляется, когда пользователь посещает сайт. Оно информирует пользователя о том, что сайт использует файлы куки или другие технологии отслеживания для сбора и использования личной информации, а также объясняет, почему и кому передаётся собранная информация.

**CMP (Consent Management Platform)** — программное обеспечение, помогающее сайтам соблюдать правила использования файлов куки. CMP ограничивают использование файлов куки до получения согласия пользователя, предоставляют пользователям возможность принимать определённые файлы куки и управлять настройками конфиденциальности.

**Виджет** — элемент пользовательского интерфейса, расширяющий функциональность сайта. Веб-виджеты интегрированы в веб-страницы и могут включать интерактивные элементы, такие как кнопки, формы или баннеры. Они могут предоставлять пользователям доступ к определённым услугам или контенту, не требуя перехода на другие страницы.

**Попап** — окно, которое появляется над текущей веб-страницей. Он предназначен для отображения дополнительной информации, рекламы, уведомлений или форм ввода данных. Попапы обычно не дают посмотреть основной контент страницы, и для их закрытия требуется действие пользователя, что может раздражать.

### Фильтры

Для лучшей настройки фильтры раздражителей разделены по их назначению:

- Фильтр куки-уведомлений
- Фильтр всплывающих окон
- Фильтр баннеров мобильных приложений
- Фильтр виджетов
- Фильтр других раздражителей
- Фильтр раздражителей — комбинированный фильтр, включающий в себя все пять специализированных фильтров раздражителей

### Назначение этих фильтров

#### Фильтр куки-уведомлений

Этот фильтр предназначен для блокировки как уведомлений о файлах куки, так и запросов от платформ управления ими (CMP). К уведомлениям о куки и CMP могут применяться различные методы. В большинстве случаев достаточно просто скрыть или заблокировать соответствующие скрипты. Однако, когда функциональность сайта и отображение стороннего контента требуют согласия на использование файлов куки, применяются следующие методы:

- Скриптлеты используются для обхода запроса согласия (практически не применимы на сайтах с ограничениями на загрузку стороннего контента до принятия решения)
- Установка куки или ключа в локальное хранилище сайта таким образом, чтобы скрипт считал, что пользователь сделал выбор
- Имитация действий пользователя с помощью правила, которое нажимает указанную кнопку и прерывает её выполнение через 10 секунд после загрузки. Возможны два варианта:
    - Отклонить (за исключением функциональных файлов куки — в зависимости от системы CMP) — предпочтительный вариант, так как меньше риск загрузки дополнительных инструментов аналитики
    - Принять — этот вариант используется в крайнем случае, если другие методы не помогают. В этом случае сайт дополнительно проверяется на использование инструментов аналитики, которые затем блокируются **Фильтром счётчиков и систем аналитики**

**Ограничения и исключения**

В некоторых случаях решение о добавлении правил принимается разработчиками фильтров самостоятельно, в основном, когда выбор, сделанный при имитации действий, влияет на функциональность сайта. Например, на таком сайте может не работать история или настройки пользователя могут не сохраняться.

#### Фильтр всплывающих окон

Это фильтр, который блокирует различные всплывающие окна на веб-страницах, которые не являются необходимыми для нормального использования сайта, включая:

- Запросы на разрешение получать пуш-уведомления
- Попапы и формы подписки на новости, акции и различные события, в том числе сторонние каналы их получения (такие как Google News, Telegram)
- Попапы, призывающие пользователей отключить блокировщик рекламы и нарушающие конфиденциальность пользователя (на усмотрение разработчиков фильтров)
- Другие типы попапов, которые могут раздражать пользователей (на усмотрение разработчиков фильтров)

**Ограничения и исключения**

- Пуш-уведомления блокируются только на сайтах, где они не используются в практических целях. Например, в веб-клиентах электронной почты или инструментах, используемых в рабочих целях, такие уведомления не будут блокироваться
- Некоторые попапы, которые не попадают в описанные выше категории, но всё же мешают работе пользователя, также могут быть заблокированы. Например, предложения зарегистрироваться на сайте или попапы, знакомящие с функциями сайта. Решение принимают разработчики фильтра
- Content access measures that ask the user to pay to access the content must not be circumvented

#### Фильтр баннеров мобильных приложений

This is a filter that blocks banners and popups that encourage visitors to install mobile applications.

**Ограничения и исключения**

Баннеры, расположенные в шапках или меню сайтов, не блокируются, если они не анимированы и не занимают значительную часть используемого пространства. Если баннер расположен в футере, решение принимается разработчиками фильтра в каждом конкретном случае. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### Фильтр виджетов

This is a filter that blocks various widgets that are not essential for the functioning of the website or for interaction with it:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Ограничения и исключения**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### Фильтр других раздражителей

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Ограничения и исключения**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Social media filters

### Фильтры

AdGuard Social Media filters include:

- AdGuard Social Media filter

### Назначение этих фильтров

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Ограничения и исключения

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Other filters

This group contains filters that are not essential for blocking advertisements.

### Терминология

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on Search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Фильтры

- Фильтр поисковой рекламы и саморекламы
- AdGuard DNS filter
- AdGuard Experimental filter

### Назначение этих фильтров

#### Фильтр поисковой рекламы и саморекламы

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Ограничения и исключения**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Ограничения и исключения**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Ограничения и исключения**

- Rules should not explicitly break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
