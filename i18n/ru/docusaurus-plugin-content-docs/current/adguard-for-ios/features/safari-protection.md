---
title: Safari protection
sidebar_position: 1
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

### Content blockers {#content-blockers}

Блокировщики контента служат «контейнерами» для хранения правил фильтрации, которые и выполняют основную работу: блокируют рекламу и трекинг. В AdGuard для iOS шесть блокировщиков контента: General, Privacy, Social, Security, Custom и Other. До недавнего времени Apple разрешал использовать только 50 000 правил фильтрации на один блокировщик контента, а в iOS 15 верхняя граница ограничения отодвинулась на отметку 150 000 правил.

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in _Advanced settings_ (tap the gear icon at the bottom right → _General_ → _Advanced settings_ → _Content blockers_).

![Content blockers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Для наилучшего качества фильтрации рекомендуем держать все блокировщики контента включёнными.

:::

### Filters {#filters}

Работа блокировщиков рекламы основана на фильтрах. Каждый фильтр — это список правил фильтрации. Когда вы пользуетесь интернетом со включённым блокировщиком рекламы, то последний постоянно проверяет посещаемые страницы и элементы на них. Всё, что соответствует каким-либо правилам фильтрации, он блокирует. Правила построены таким образом, чтобы блокировать трекеры, рекламу и многое другое.

Фильтры сгруппированы в тематические категории. To see the full list of these categories (not to be confused with content blockers), open the _Protection_ section by tapping the shield icon, then go to _Safari protection_ → _Filters_.

![Filter groups \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Всего категорий восемь, каждая объединяет несколько фильтров, служащих общей цели. Например, они блокируют рекламу, виджеты социальных сетей, уведомления о cookie или защищают пользователя от мошенников. To decide which filters suit your needs, read their descriptions and navigate by the labels (`ads`, `privacy`, `recommended`, etc.).

:::note

Больше включённых фильтров не гарантирует, что рекламы будет меньше. Большое количество одновременно включённых фильтров снижает качество блокировки рекламы.

:::

Категория пользовательских фильтров пуста по умолчанию, чтобы пользователи могли добавлять туда свои фильтры по URL. You can find filters on the Internet or even try to [create one by yourself](/general/ad-filtering/create-own-filters).

### User rules {#user-rules}

Here you can add new rules — either by entering them manually, or by using [the AdGuard manual blocking tool in Safari](#assistant). Используйте пользовательские правила, чтобы настроить фильтрацию Safari без добавления целого списка фильтров.

Learn [how to create your own ad filters](/general/ad-filtering/create-own-filters). Но обратите внимание, что не все они будут работать в Safari на iOS.

![User rules screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Allowlist {#allowlist}

The third section of the _Safari protection_ screen. Если вы хотите отключить блокировку рекламы на определённом сайте, Белый список поможет это сделать. It allows you to add domains and subdomains to exclusions. В AdGuard для iOS есть функция экспорта/импорта, благодаря которой можно переносить Белый список с одного устройства на другое.
