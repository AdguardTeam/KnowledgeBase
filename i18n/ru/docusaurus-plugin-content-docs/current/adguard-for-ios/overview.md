---
title: Обзор функций
sidebar_position: 1
---

:::info

В этой статье рассказывается об AdGuard для iOS — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://adguard.com/download.html?auto=true)

:::

Если вы будете искать AdGuard в App Store, то найдёте два приложения — [AdGuard](https://itunes.apple.com/app/id1047223162) и [AdGuard Pro](https://itunes.apple.com/app/id1126386264). Они созданы для блокировки рекламы и трекинга в Safari, в других браузерах и приложениях, а также для управления DNS-фильтрацией. Не дайте разным названиям себя обмануть, оба приложения одинаково блокируют рекламу на айфонах и айпадах. Раньше их функционал отличался из-за меняющихся принципов App Store, но теперь приложения [практически идентичны](https://adguard.com/ru/blog/updating-adguard-pro-for-ios.html). Так что если у вас уже есть AdGuard Pro, не нужно скачивать AdGuard и покупать там лицензию, и наоборот.

## Функции {#features}

У AdGuard и AdGuard Pro для iOS много функций для блокирования рекламы и трекеров и создания пользовательских правил, как в Safari, так и на уровне сети.

### Блокировщики контента {#content-blockers}

Блокировщики контента служат «контейнерами» для хранения правил фильтрации, которые и выполняют основную работу: блокируют рекламу и трекинг. В AdGuard для iOS шесть блокировщиков контента: General, Privacy, Social, Security, Custom и Other. До недавнего времени Apple разрешал использовать только 50 000 правил фильтрации на один блокировщик контента, а в iOS 15 верхняя граница ограничения отодвинулась на отметку 150 000 правил.

Все блокировщики контента, их статусы, используемые на данный момент фильтры и общее количество правил фильтрации можно найти на соответствующем экране в *Расширенных настройках* (нажмите на иконку шестерёнки в правом нижнем углу → *Общие* → *Расширенные настройки* → *Блокировщики контента*).

![Блокировщики контента *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Для наилучшего качества фильтрации рекомендуем держать все блокировщики контента включёнными.

:::

### Фильтры {#filters}

Работа блокировщиков рекламы основана на фильтрах. Каждый фильтр — это список правил фильтрации. Когда вы пользуетесь интернетом со включённым блокировщиком рекламы, то последний постоянно проверяет посещаемые страницы и элементы на них. Всё, что соответствует каким-либо правилам фильтрации, он блокирует. Правила построены таким образом, чтобы блокировать трекеры, рекламу и многое другое.

Фильтры сгруппированы в тематические категории. Чтобы увидеть полный список категорий (не путать с блокировщиками контента), откройте раздел *Защита*, нажав на изображение щита внизу экрана, затем выберите *Защита Safari* → *Фильтры*.

![Группы фильтров *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Всего категорий восемь, каждая объединяет несколько фильтров, служащих общей цели. Например, они блокируют рекламу, виджеты социальных сетей, уведомления о cookie или защищают пользователя от мошенников. Чтобы вам было легче решить, какие фильтры вам подходят, читайте их описания и ориентируйтесь по меткам (`ads`, `privacy`, `recommended` и т. д.).

:::note

Больше включённых фильтров не гарантирует, что рекламы будет меньше. Большое количество одновременно включённых фильтров снижает качество блокировки рекламы.

:::

Категория пользовательских фильтров пуста по умолчанию, чтобы пользователи могли добавлять туда свои фильтры по URL. Их можно найти в интернете или даже попробовать [создать самостоятельно](/general/ad-filtering/create-own-filters).

### Пользовательские правила {#user-rules}

В этом разделе вы можете добавлять новые правила — либо введя их вручную, либо используя [инструмент ручной блокировки AdGuard в Safari](#assistant). Используйте пользовательские правила, чтобы настроить фильтрацию Safari без добавления целого списка фильтров.

Узнайте, [как создавать свои фильтры](/general/ad-filtering/create-own-filters). Но обратите внимание, что не все они будут работать в Safari на iOS.

![Экран пользовательских правил *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Белый список {#allowlist}

Третий раздел на экране *Защита Safari*. Если вы хотите отключить блокировку рекламы на определённом сайте, Белый список поможет это сделать. Он позволяет добавлять домены и поддомены в список исключений. В AdGuard для iOS есть функция экспорта/импорта, благодаря которой можно переносить Белый список с одного устройства на другое.

### DNS-защита {#dns-protection}

[Модуль DNS-защиты](https://adguard-dns.io/kb/general/dns-filtering/) усиливает конфиденциальность, шифруя ваш DNS-трафик. В отличие от Защиты Safari, DNS-защита распространяется на всё устройство, то есть работает в других браузерах и приложениях. Включите этот модуль, чтобы шифровать DNS-трафик и блокировать отслеживающие домены. Это можно сделать на главном экране, нажав на изображение щита в верхней части экрана, или перейдя на вкладку *Защита * → *DNS-защита*.

:::note

Чтобы управлять DNS-настройками, приложения AdGuard требуют установить локальный VPN. Он не будет направлять ваш трафик через какие-либо удалённые серверы. Тем не менее, система попросит вас подтвердить разрешение на доступ.

:::

### Реализация DNS {#dns-implementation}

![Экран реализации DNS *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

В этом разделе есть две опции на выбор: AdGuard и Нативная. По сути, это два метода настройки DNS.

При выборе режима Нативной реализации DNS-запросы обрабатываются системой, а не приложением. Это означает, что AdGuard не нужно создавать локальный VPN. К сожалению, это не поможет вам обойти системные ограничения и использовать AdGuard вместе с другими приложениями на основе VPN: если включено любое VPN-приложение, нативный DNS игнорируется. Следовательно, вы не сможете локально фильтровать трафик или использовать наш новый [протокол DNS-over-QUIC (DoQ)](https://adguard.com/ru/blog/dns-over-quic.html).

### DNS-серверы {#dns-servers}

DNS-сервер — это вторая опция, которую вы увидите на экране DNS-защиты. В ней показаны выбранные в данный момент DNS-сервер и тип шифрования. Нажмите на кнопку «DNS-сервер», если хотите изменить один из этих параметров (или оба).

![DNS-серверы *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Серверы отличаются скоростью, используемым протоколом, надёжностью, политикой логирования и т. д. По умолчанию AdGuard предложит несколько DNS-серверов из числа наиболее популярных (включая AdGuard DNS). Нажмите на любой из них, чтобы изменить тип шифрования (если такая опция предусмотрена владельцем сервера) или перейти на домашнюю страницу сервера. Мы добавили такие ярлыки, как `Политика «Без логов»`, `Блокировка рекламы`, `Безопасность`, чтобы помочь вам сделать выбор.

Помимо этого, в нижней части экрана есть возможность добавить пользовательский DNS-сервер. Он поддерживает обычные серверы, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS и DNS-over-QUIC.

### Настройки сети {#network-settings}

![Экран сетевых настроек *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Пользователи также могут управлять DNS-защитой на экране Настройки сети. Опции *Фильтровать мобильные данные* и *Фильтровать Wi-Fi* включают или отключают DNS-защиту для соответствующих типов сети. Ниже, в разделе *Сети-исключения*, вы можете исключить определённые сети Wi-Fi из DNS-защиты (например, вы, возможно, захотите исключить домашнюю сеть, если используете [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS-фильтрация {#dns-filtering}

DNS filtering allows you to customize your DNS traffic by enabling AdGuard DNS filter, adding custom DNS filters, and using the DNS blocklist/allowlist.

How to access:

*Protection* icon (the shield icon in the bottom menu bar) → *DNS protection* → *DNS filtering*

![DNS filtering screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS-фильтры {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard will monitor your DNS traffic and block requests that match one or more rules. You can use filters such as [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) or add hosts files as filters. Multiple filters can be added simultaneously. To know how to do it, get acquainted with [this exhaustive manual](../solving-problems/system-wide-filtering).

#### Белый и чёрный список {#allowlist-blocklist}

On top of DNS filters, you can have targeted impact on DNS filtering by adding single domains to Blocklist or to Allowlist. Blocklist even supports the same DNS syntax, and both of them can be imported and exported, just like Allowlist in Safari content blocking.

### Расширенная защита {#advanced-protection}

In iOS 15 Apple has added the support for Safari Web Extensions, and we in turn added a new *Advanced protection* module to AdGuard for iOS. It allows AdGuard to apply advanced filtering rules, such as CSS rules, CSS selectors, and scriptlets, and therefore to deal even with the complex ads, such as YouTube ads.

![Advanced protection screen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_15_en.jpeg)

To enable *Advanced protection*, open the *Protection* tab by tapping the second left icon at the bottom of the screen, select the *Advanced protection* module, activate the feature by toggling the switch slider, and follow the instructions below.

:::note

The *Advanced protection* only works on iOS 15 and later versions. If you are using earlier versions of iOS, you will see the *YouTube ad blocking* module in the app instead of the *Advanced protection*.

:::

![Protection screen on iOS 14 and earlier *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_14_en.jpeg)

### Совместимость с AdGuard VPN {#compatibility}

In most cases, the ad blocker and the VPN application cannot work together, simply because there are certain system limitations. Nevertheless we've managed to find a solution to befriend [AdGuard VPN](https://adguard-vpn.com/) and AdGuard Ad Blocker. For your convenience we've added the *AdGuard VPN* block to the *Protection* section, so you can easily switch between two apps.

### Помощник {#assistant}

![Safari Assistant *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/assistant_en.jpeg)

Assistant is a tool that helps you manage filtering in Safari right from the browser without switching back to the app.

To see it, do the following: open Safari and tap the arrow-in-a-box symbol. Then scroll down to AdGuard/AdGuard Pro (depending on the app you use) and tap it to fetch a window with several options:

1. **Включить на этом сайте.** Выключите, чтобы добавить текущий домен в Белый список.
2. **Заблокировать элемент на этой странице.** Нажмите, чтобы перейти в режим «Блокировка элемента»: выберите любой элемент на странице, отрегулируйте размер, нажимая «+» или «-», воспользуйтесь предварительным просмотром, если необходимо, и нажмите на галочку, чтобы подтвердить. Выбранный элемент будет скрыт со страницы, а соответствующее правило — добавлено в Пользовательские правила. Уберите или отключите его, чтобы вернуть блокировку.
3. **Сообщить о проблеме на этой странице.** Открывает инструмент отправки веб-отчёта, с помощью которого вы сможете быстро обратиться к нашей команде поддержки. Используйте его, если заметили пропущенную рекламу или некорректную блокировку на странице.

:::tip

On iOS 15 devices, the Assistant features are available through [AdGuard Safari Web Extension](../web-extension), which enhances the capabilities of AdGuard for iOS and allows you to take advantage of iOS 15. With this web extension, AdGuard can apply advanced filter rules and, as a result, block more ads.

:::

### Активность {#activity}

This is the 'information hub' of AdGuard's DNS protection suite. You can quickswitch to it by tapping the third icon in the row at the screen bottom. N.b. this screen is only seen when DNS protection is enabled.

![Activity screen *mobile_border](https://cdn.adtidy.org/content/github/ad_blocker/ios/activity.png)

This is where AdGuard displays statistics about the device's DNS requests, such as total number, number of blocked requests and data saved by blocking them. AdGuard can display the statistics for a day, a week, a month or in total.

Below is the *Recent activity* feed. AdGuard stores the last 1500 DNS requests that have originated on your device and shows their attributes such as protocol type and target domain.

:::note

AdGuard does not send this information anywhere. It is 100% local and does not leave your device.

:::

Tap any request to view more details. There will also be buttons to add the request to Blocklist/Allowlist in one tap.

![Request details *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/request_info_en.jpeg)

Above the activity feed, there are *Most active* and *Most blocked* companies. Tap each to see data based on the last 1500 requests.

### Статистика {#statistics}

Aside from the *Activity* screen, you can find global statistics on the home screen and on widgets.

## Низкоуровневые настройки {#low-level-settings}

![Low-level settings *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

To open the *Low-level settings*, go to *Settings* → *General* → (Enable *Advanced mode* if it's off) → *Advanced settings* → *Low-level settings*.

For the most part, the settings in this section are best left untouched: only use them if you're sure about what you're doing, or if the support team has asked for them. But some settings could be changed without any risk.

### Блокировать IPv6 {#blockipv6}

For any DNS query sent to get an IPv6 address, our app returns an empty response (as if this IPv6 address does not exist). Now there is an option not to return IPv6 addresses. At this point the description of this function becomes too technical: configuring or disabling IPv6 is the exclusive domain of advanced users. Presumably, if you are one of them, it will be good to know that we now have this feature, if not — there is no need to dive into it.

### Bootstrap- и Fallback-серверы {#bootstrap-fallback}

Fallback is a backup DNS server. If you chose a DNS server and something happened to it, a fallback is needed to set the backup DNS server until the main server responds.

With Bootstrap, it’s a little more complicated. For AdGuard for iOS to use a custom secure DNS server, our app needs to get its IP address first. For this purpose, the system DNS is used by default, but sometimes this is not possible for various reasons. In such cases, Bootstrap could be used to get the IP address of the selected secure DNS server. Here are two examples to illustrate when a custom Bootstrap server might help:
1. Когда системный DNS-сервер, выбранный по умолчанию, не возвращает IP-адрес защищённого DNS-сервера и последний невозможно использовать.
2. Когда наше приложение и сторонний VPN используются одновременно и невозможно использовать системный DNS в качестве Bootstrap.

## Другие функции {#other-features}

While Safari content blocking and DNS protection are indisputably two major modules of AdGuard/AdGuard Pro, there are some other minor features that don't fall into either of them directly but still can be useful and are worth knowing about.

- **Тёмная тема**

![Light theme *mobile_border](https://cdn.adtidy.org/blog/new/26vo4homelight.jpeg)

![Dark theme *mobile_border](https://cdn.adtidy.org/blog/new/bgko8homedark.jpeg)

Residing right at the top of **Settings** → **General** screen, this setting allows you to switch between dark and light themes.

- **Виджеты**

![Widgets *mobile](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/widget_en.jpg)

AdGuard supports widgets that provide quick access to Safari content blocking and DNS protection switches, and also show global requests stats.

- **Автоматическое обновление только через Wi-Fi**

If this setting is enabled, AdGuard will use only Wi-Fi for background filter updates.

- **Инвертировать белый список**

An alternative mode for Safari filtering, it unblocks ads everywhere except for the specified websites from the list. Disabled by default.

- **Расширенный режим**

**Advanced mode** unlocks **Advanced settings**. We don't recommend messing with those, unless you know what you're doing or you have consulted with technical support first.

- **Сбросить статистику**

Clears all statistical data, such as number of requests, etc.

- **Сбросить настройки**

This option will reset all your settings.

- **Поддержка**

Use this option to contact support, report a missed ad (although we advise to use the Assistant or AdGuard's Safari Web extension for your own convenience), export logs or to make a feature request.

- **О программе**

Contains the current version of the app and an assortment of rarely needed options and links.
