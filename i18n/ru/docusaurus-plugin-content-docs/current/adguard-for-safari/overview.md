---
title: Обзор функций
sidebar_position: 1
---

:::info

This article is about AdGuard for Safari, which safeguards only your Safari browser. To protect your entire device, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

AdGuard для Safari был разработан в соответствии с ограничениями Apple для браузерных расширений, блокирующих рекламу. Это самый популярный блокировщик рекламы для Safari. Хотя он менее мощный, чем десктопные приложения AdGuard, он бесплатен и может защитить вас от рекламы, трекеров, фишинга и вредоносных сайтов.

## Общие {#general}

![Вкладка «Общие»](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

Первая вкладка — это экран «Общие», где вы можете настроить основные параметры: уведомления, интервалы обновления и открытие AdGuard при запуске системы. Вы также можете выбрать отображение значка AdGuard в строке меню. Там же можно включить [блокировщики контента](#contentblockers), чтобы блокировать рекламу, трекеры, раздражители и т. д.

## Фильтры {#filters}

![Вкладка «Фильтры»](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

Фильтр — это список правил, написанных в специальном синтаксисе. Блокировщики контента считывают эти правила и блокируют рекламу или запросы к опасным сайтам.

Фильтры объединены в восемь тематических категорий: *Блокировка рекламы, Конфиденциальность, Виджеты соцсетей, Фильтры раздражителей, Безопасность, Языковые фильтры, Пользовательские и Другие фильтры*.

Read more about [AdGuard filters](/general/ad-filtering/adguard-filters) or [ad filtering in general](/general/ad-filtering/how-ad-blocking-works).

In the Filters tab, you can enable the whole category or separate filters. Changes in the Filters tab are reflected in the Content Blockers section (located in the General tab).

## Блокировщики контента {#contentblockers}

![Content blockers tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

A content blocker is a thematic cluster of filters. Privacy-related filters are included in the content blocker with the corresponding name — *AdGuard Privacy*.

Content Blockers were designed for two reasons: to structure filters and to conform to Apple’s restrictions.

[In 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), Apple put limitations on ad blockers for Safari, allowing them to use only 50,000 filtering rules simultaneously. As this number was not enough for an ad blocker to provide a good filtering quality (AdGuard Base Filter alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules.

[In 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple increased the filtering rule limit for each content blocker to 150,000 rules applied simultaneously. Regarding AdGuard for Safari, up to 900,000 rules can be enabled for all six content blockers.

Whereas the limit has been increased, the structure of content blockers has remained the same.

In the Content blockers tab, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

Управлять включёнными фильтрами можно на вкладке «Фильтры». В разделе «Блокировщики контента» отображается только их список.

:::

### AdGuard Основные {#adguard_general}

*AdGuard Основные* — это блокировщик контента с самыми необходимыми фильтрами для блокировки рекламы. Мы рекомендуем всегда держать Базовый фильтр AdGuard включённым.

### AdGuard Конфиденциальность {#adguard_privacy}

Это блокировщик контента, в котором собраны фильтры против счётчиков и инструментов веб-анатилики. *Фильтр счётчиков и систем аналитики* включён по умолчанию.

### AdGuard Виджеты соцсетей {#adguard_social}

*AdGuard Виджеты соцсетей* содержит фильтры против кнопок, виджетов, скриптов и иконок социальных сетей. В этом разделе можно найти и другие фильтры раздражителей: фильтры против всплывающих окон, баннеров мобильных приложений, уведомлений о файлах cookie и т. п. Чтобы включить их, найдите *Виджеты социальных сетей* на вкладке «Фильтры».

### AdGuard Безопасность {#adguard_security}

Этот блокировщик контента объединяет несколько фильтров, связанных с безопасностью. *Malware Domains Blocklist* блокирует домены, которые распространяют вредоносное и шпионское ПО. *Spam404* защищает от интернет-мошенников. *NoCoin Filter List* нарушает работу браузерных криптомайнеров, таких как Coinhive.

### AdGuard Другие {#adguard_other}

*AdGuard Другие* содержит фильтры с различными функциями. Например, в нём есть фильтр, который разблокирует поисковую рекламу и саморекламу сайтов. В некоторых случаях это помогает найти то, что нужно, потому что такая реклама более релевантна и менее навязчива, чем другие её виды.

:::note Disclaimer

We don’t have any ‘acceptable ads’ paid by advertisers. Вместо этого мы даём пользователям возможность включить отображение [поисковой рекламы и саморекламы сайтов](/general/ad-filtering/search-ads).

:::

### AdGuard Пользовательские {#adguard_custom}

![Вкладка «Пользовательские»](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

Если вам нужно больше фильтров, вы можете добавить их в разделе *AdGuard Пользовательские*. Чтобы добавить пользовательский фильтр, введите его URL или путь к файлу. Новые фильтры вы можете найти на [filterlists.com](https://filterlists.com/).

## Пользовательские правила {#userrules}

Пользовательские правила можно использовать, чтобы настроить блокировку под себя. Их можно добавить вручную или импортировать. Когда вы блокируете элемент на странице, они создаются автоматически. Чтобы добавить собственные правила фильтрации, используйте [специальный синтаксис](/general/ad-filtering/create-own-filters).

## О программе {#about}

![Вкладка «О программе»](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

На вкладке «О программе» находится информация о текущей версии продукта и ссылки на юридические документы. Там же находится ссылка на наш репозиторий на GitHub. Там вы можете следить за развитием продукта, предлагать новые функции и сообщать об ошибках.

:::note Reminder

AdGuard for Safari can be downloaded for free [from the App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259). Подробная инструкция по установке доступна [в Базе знаний](../installation).

:::
