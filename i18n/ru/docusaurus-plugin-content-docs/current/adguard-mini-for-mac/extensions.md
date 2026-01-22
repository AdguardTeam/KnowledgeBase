---
title: Расширения Safari
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Что такое расширения Safari

Расширения Safari — это небольшие программы, которые помогают увеличить функциональность браузера Safari. С их помощью пользователи могут улучшить работу в интернете, добавляя функции, которые не встроены в браузер. AdGuard Mini for Mac uses extensions primarily to apply filtering rules on websites opened in Safari.

## Как это работает

Чтобы блокировать рекламу, трекеры и раздражители на сайтах, AdGuard использует правила фильтрации. The rules from AdGuard’s and your custom filters are converted into ones comprehensible by Safari and are integrated into 6 Safari extensions:

- AdGuard Основные
- AdGuard Конфиденциальность
- AdGuard Виджеты соцсетей
- AdGuard Безопасность
- AdGuard Пользовательские
- AdGuard Другие

Каждое расширение блокировки контента может включать до 150 000 активных правил фильтрации. Количество правил в большинстве групп фильтров не превышает 150 000. Однако если вы активируете слишком много языковых или пользовательских фильтров, вы можете превысить лимит. В таких случаях случайные правила, превышающие лимит, будут автоматически отключаться, что может привести к некорректной блокировке. **We strongly recommend activating only the filters you need**.

There is also one more extension responsible for other features: _AdGuard for Safari_, which adds the AdGuard icon next to the search bar in Safari and allows using advanced rules to block complex ads.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/check-extensions.png)

Подробнее о каждом расширении ниже.

## Расширения для блокировки контента

_AdGuard General_ applies rules from filters that you can find in _Settings_ → _Filters_ → _Ad blocking_ and _Language-specific_. Это расширение ориентировано на комплексную блокировку рекламы и включает фильтры для рекламы на определённых языках.

_AdGuard Privacy_ applies rules from filters located in _Filters_ → _Privacy_. Это расширение блокирует механизмы отслеживания и гарантирует, что ваши действия в интернете останутся конфиденциальными.

_AdGuard Social_ applies rules from filters that can be found in _Filters_ → _Social Widgets_ and _Filters_ → _Annoyances_. It blocks popups, social media buttons, online assistant windows, and other elements on webpages that you might find annoying.

_AdGuard Security_ applies rules from filters under _Filters_ → _Security_. Это расширение выявляет и блокирует потенциально опасные элементы, защищая пользователей от вредоносного контента.

_AdGuard Other_ applies rules from filters that don’t fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ applies rules from filters that you add on your own to _Custom filters_.

User rules and allowlist rules are included in every extension.

## AdGuard для Safari

_AdGuard for Safari_ activates the AdGuard icon next to the search bar. It’s useful if you want to quickly set up protection for a specific website or block ads manually.

_AdGuard for Safari_ extension also contains advanced rules that aren’t converted to the format supported by Safari. These include [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets), which allow AdGuard to block complex ads, such as those on YouTube.

## Как управлять расширениями Safari

1. Open Safari and click _Safari_ in the upper left corner of the screen to expand the menu.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Click _Settings..._

3. Select _Extensions_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Почему AdGuard для Safari нужны разрешения

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to webpage content** and **access to browsing history**. Here’s why it needs these permissions:

- Access to webpage content is required for manual ad blocking and advanced blocking rules to work correctly
- Доступ к истории просмотров нужен для проверки статуса защиты на сайтах и определения того, какие расширенные правила следует применять

Мы не используем эти данные в других целях и никому их не передаём. Подробности читайте [в Политике конфиденциальности](https://adguard.com/privacy.html).
