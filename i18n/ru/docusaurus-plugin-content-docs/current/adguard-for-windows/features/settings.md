---
title: Настройки
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает.

:::

Раздел _Настройки_ требует наибольшего внимания. Здесь вы можете настроить приложение в соответствии с вашими требованиями: блокировать определённые элементы или сайты, использовать DNS-сервер доверенного провайдера, удалять сторонние куки и так далее.

### Основные настройки

Здесь вы можете настроить язык и тему (Тёмная или Светлая), включение AdGuard при запуске системы и тихие автоматические обновления, выбрать канал обновления и установить интервал проверки обновлений. Если AdGuard для Windows работает некорректно и поддержка попросила вас [собрать логи](/adguard-for-windows/solving-problems/adguard-logs.md), вам тоже следует перейти в _Настройки_.

![Настройки \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

В самом низу экрана вы найдёте _Расширенные настройки_. Изменение некоторых из них может потенциально вызвать проблемы с работой AdGuard, нарушить интернет-соединение или поставить под угрозу вашу безопасность и конфиденциальность. Заходите в этот раздел, только если вы уверены в своих действиях, или наша команда поддержки попросила вас об этом. [В отдельной статье](/adguard-for-windows/solving-problems/low-level-settings.md) рассказали, что находится в _Расширенных настройках_.

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Блокировка рекламы

Это основной модуль AdGuard для Windows, блокирующий рекламу на сайтах, которые вы посещаете, и в приложениях, установленных на вашем устройстве. Для фильтрации рекламы и контента, угрожающего конфиденциальности, такого как баннеры, всплывающие окна или трекеры, AdGuard использует разные фильтры — группы правил с похожим назначением, написанные с использованием [специального синтаксиса](/general/ad-filtering/create-own-filters). [Что такое фильтры и как они работают](/general/ad-filtering/how-ad-blocking-works)

![Блокировка рекламы \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

В модуле Блокировка рекламы вы можете:

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

Many websites gather information about their visitors, such as their IP addresses, browser and operating system details, screen resolution, and the webpage from which the user came or was redirected. Some websites use cookies to mark and identify your browser, save your personal settings and preferences. This allows them to “recognize” you on your next visit. Tracking protection safeguards your personal information from these data- and statistics-gathering systems.

![Tracking protection levels \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection1.png)

You can adjust the _Tracking Protection_ settings as needed. For example, you can prevent websites from receiving the search request that you used to find them on the Internet, automatically delete third- and first-party cookies, and disable location sharing in your browser, to prevent tracking of your whereabouts.

![Tracking protection custom features \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection2.png)

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### Защита от фишинга

Browsing security gives strong protection against malicious and phishing websites. No, AdGuard for Windows is not an antivirus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

In this module, you can:

- enable notifications to block requests to malicious and phishing sites,
- activate sound notifications,
- agree to submit anonymous security-related info to the AdGuard server to help us keep the malicious and phishing websites database up to date.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

In case you want to learn more about Browsing security, read [this article](/general/browsing-security).

### DNS Protection

There are three significant reasons why you might want to explore the DNS protection settings. First, to avoid being tracked by your ISP. Каждый раз, когда вы открываете сайт, например, `google.com`, ваш браузер отправляет запрос на DNS-сервер, чтобы получить взамен IP-адрес сайта. Usually, the DNS server belongs to your ISP, which allows them to track your online activity. Second, to encrypt you DNS traffic. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Родительский контроль

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

The module checks the contents of webpages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### Браузерный помощник

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
