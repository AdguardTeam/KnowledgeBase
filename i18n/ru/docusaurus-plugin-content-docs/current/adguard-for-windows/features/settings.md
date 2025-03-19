---
title: Настройки
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

Раздел _Настройки_ требует наибольшего внимания. Здесь вы можете настроить приложение в соответствии с вашими требованиями: блокировать определённые элементы или сайты, использовать DNS-сервер доверенного провайдера, удалять сторонние куки и так далее.

![Настройки \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Основные настройки

Здесь вы можете настроить язык и тему (Тёмная или Светлая), включение AdGuard при запуске системы и бесшумные автоматические обновления, выбрать канал обновления и установить интервал проверки обновлений. Если AdGuard для Windows работает некорректно и поддержка попросила вас [собрать логи](/adguard-for-windows/solving-problems/adguard-logs.md), вам тоже следует перейти в _Настройки_.

![Расширенные настройки \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

В самом низу экрана вы найдёте _Расширенные настройки_. Изменение некоторых из них может потенциально вызвать проблемы с работой AdGuard, нарушить интернет-соединение или поставить под угрозу вашу безопасность и конфиденциальность. Заходите в этот раздел, только если вы уверены в своих действиях, или наша служба поддержки попросила вас об этом. [В отдельной статье](/adguard-for-windows/solving-problems/low-level-settings.md) рассказали, что находится в _Расширенных настройках_.

### Блокировщик рекламы

Это основной модуль AdGuard для Windows, блокирующий рекламу на сайтах, которые вы посещаете, и в приложениях, установленных на вашем устройстве. To filter out advertising and privacy-threatening content such as banners, popups, or trackers AdGuard uses different filters — groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). [Что такое фильтры и как они работают](/general/ad-filtering/how-ad-blocking-works)

![Блокировка рекламы \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

В модуле Блокировщик рекламы вы можете:

- включить автоматическую активацию языковых фильтров,
- отключить блокировку [поисковой рекламы и саморекламы](/general/ad-filtering/search-ads),
- отключить рекламу в меню «Пуск» на Windows 11,
- активировать предустановленные фильтры, такие как _Базовый фильтр_,
- установить фильтры из списка или добавить пользовательский фильтр, нажав на кнопку _Добавить фильтр_,
- внести изменения в существующие группы правил с помощью _Редактора фильтров_,
- посмотреть все запросы, отправленные браузерами и приложениями, установленными на вашем компьютере, в _Журнале фильтрации_. В нём вы также можете заблокировать или разблокировать любой запрос, создав пользовательское правило,
- составлять фильтр из собственных правил, написанных вручную, импортированных или созданных с помощью расширения Помощник AdGuard.

Прежде чем начать вручную писать собственные правила, прочитайте наше подробное [руководство по синтаксису](/general/ad-filtering/create-own-filters).

### Защита от трекинга

Многие сайты собирают данные о посетителях: IP-адреса, информацию о браузере и операционной системе, разрешении экрана и даже странице, с которой пользователь перешёл на сайт. Чтобы сохранить индивидуальные настройки, личные предпочтения или «узнать» посетителя при повторном визите, некоторые сайты помечают браузер специальными файлами cookie. Антитрекинг призван защитить вашу личную информацию от подобных систем, собирающих данные и статистику.

![Защита от трекинга \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Работа этого модуля гибко настраивается: например, вы можете запретить сайту узнавать, что вы искали в поисковой системе, прежде чем попасть на этот сайт. Вы также можете автоматически удалять cookie, как принадлежащие сайту, так и сторонние, и отключить определение местоположения в браузере — оно может использоваться для отслеживания ваших перемещений.

[Больше о Защите от трекинга](/general/stealth-mode)

### Защита от фишинга

Защита от фишинга надёжно защищает от вредоносных и мошеннических сайтов. Нет, AdGuard для Windows — это не антивирус. Он не остановит загрузку вируса, если она уже началась, и не удалит уже существующие вирусы. Но он предупредит вас, если вы собираетесь перейти на сайт, домен которого был добавлен в нашу базу «ненадёжных сайтов», или загрузить файл с такого сайта. [Как работает Защита от фишинга](/general/browsing-security)

In this module, you can:

- включить уведомления для блокировки запросов к вредоносным и фишинговым сайтам,
- активировать звуковые уведомления,
- согласиться отправлять анонимную информацию, связанную с безопасностью, на сервер AdGuard, чтобы помочь нам поддерживать базу вредоносных и фишинговых сайтов в актуальном состоянии.

![Защита от фишинга \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

[Больше о Защите от фишинга](/general/browsing-security)

### DNS-защита

Есть три важные причины, по которым вам может понадобиться изучить настройки DNS-защиты. Во-первых, чтобы вас не отслеживал интернет-провайдер. Каждый раз, когда вы открываете сайт, например, `google.com`, ваш браузер отправляет запрос на DNS-сервер, чтобы получить взамен IP-адрес сайта. Обычно DNS-сервер принадлежит вашему интернет-провайдеру, что позволяет ему отслеживать ваши действия в интернете. Во-вторых, для шифрования вашего DNS-трафика. И в-третьих — чтобы [блокировать контент на уровне DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS-защита \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Начиная с версии 7.20, вы также можете добавлять фильтры, просто выбирая их из списка заранее созданных, доверенных фильтров. Для удобства они сгруппированы в четыре категории:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS-фильтры \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental Control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by Parental Control.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Браузерный помощник

![Browser Assistant \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
