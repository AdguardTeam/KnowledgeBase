---
title: Расширения Safari
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Safari extensions are mechanisms that allow implementing content blockers — thematic clusters of filters. For example, privacy-related filters are included in the content blocker with the corresponding name — _AdGuard Privacy_.

Content blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[В 2019 году](https://adguard.com/ru/blog/adguard-safari-1-5.html) компания Apple ввела ограничения на блокировщики рекламы для Safari, разрешив им одновременно использовать только 50 000 правил фильтрации. As this number was not enough for an ad blocker to provide a good filtering quality (_AdGuard Base Filter_ alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[В 2022 году](https://adguard.com/ru/blog/adguard-for-safari-1-11.html) Apple увеличила лимит правил фильтрации для каждого блокировщика контента до 150 000 правил, применяемых одновременно. Regarding AdGuard Mini for Mac, up to 900,000 rules can be enabled for all six content blockers.

Лимит был увеличен, но структура блокировщиков контента осталась прежней.

In _Safari extensions_, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in _Settings_ → _Filters_. In _Safari extensions_, you can only see the list of enabled filters and the number of enabled rules.

:::

## List of AdGuard Mini’s Safari extensions

### AdGuard Основные

_AdGuard Основные_ — это блокировщик контента с самыми необходимыми фильтрами для блокировки рекламы. We recommend keeping _AdGuard Base Filter_ always enabled.

### AdGuard Конфиденциальность

Это блокировщик контента, в котором собраны фильтры против счётчиков и инструментов веб-анатилики. _Фильтр счётчиков и систем аналитики_ включён по умолчанию.

### AdGuard Виджеты соцсетей

_AdGuard Виджеты соцсетей_ содержит фильтры, блокирующие кнопки, виджеты, скрипты и иконки социальных сетей. Other annoyance filters can also be found in this section: filters against popups, banners, cookie notices, and more. To enable them, find _Social Widgets_ in _Settings_ → _Filters_.

### AdGuard Безопасность

Этот блокировщик контента объединяет несколько фильтров, связанных с безопасностью. _Malware Domains Blocklist_ блокирует домены, которые распространяют вредоносное и шпионское ПО. _Spam404_ защищает от интернет-мошенников. _NoCoin Filter List_ нарушает работу браузерных криптомайнеров, таких как Coinhive.

### AdGuard Другие

_AdGuard Другие_ содержит фильтры с различными функциями. Например, в нём есть фильтр, который разблокирует поисковую рекламу и саморекламу сайтов. В некоторых случаях это помогает найти то, что нужно, потому что такая реклама более релевантна и менее навязчива, чем другие её виды.

:::note Примечание

We don’t have any “acceptable ads” paid by advertisers. Instead, we provide users with an option to see [search ads and websites’ self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Пользовательские

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

If you need more filters, you can add them to _AdGuard Custom_ extension.

To add a custom filter, go to _Settings_ → _Filters_ → _Custom filters_ and enter a URL or a local file path in the relevant field. Новые фильтры вы можете найти на [filterlists.com](https://filterlists.com/).
