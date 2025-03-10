---
title: Защита от фишинга и вредоносных программ
sidebar_position: 3
---

Распространённой проблемой остаётся фишинг и вредоносное ПО. Для повышения безопасности мы включили в продукты AdGuard специальные фильтры, которые защитят вас от вредоносных и фишинговых сайтов. Мы классифицировали более 15 миллионов сайтов и создали базу данных из 1,5 миллиона сайтов, известных как фишинговые и вредоносные. Используя эту базу данных, AdGuard проверяет посещаемые вами сайты, чтобы защитить вас от онлайн-угроз.

:::note Важно

Мы не собираем и не используем информацию о посещаемых вами сайтах.

:::

## Как AdGuard проверяет сайты

Каждый раз, когда вы посещаете  сайт, ваш локальный клиент обменивается информацией с нашим внутренним сервером в виде хешей и хеш-префиксов. На основе этого обмена локальный клиент определяет, занесён ли сайт в базу потенциально опасных сайтов. Возможности такой проверки различаются для приложений и ресширений.

### В приложениях

AdGuard обеспечивает наилучшую защиту, проверяя как страницы, так и все загруженные на них объекты. AdGuard проверяет URL и доменные имена с помощью префиксов хешей, а не полных URL, поэтому не знает, какие сайты вы посещаете. Наши серверы отвечают на запрос приложения списком всех возможных адресов, соответствующих префиксу хеша. Когда на основе совпадений хеша обнаруживается потенциальная угроза, доступ к этому сайту немедленно блокируется.

![Предупреждение AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### В браузерных расширениях {#extension}

Наши браузерные расширения могут проверять только имена доменов, а не полные URL-адреса. Они также не могут проверять подзапросы. Если страница находится на безопасном домене, но на ней есть потенциально вредоносные элементы, они будут загружены. Расширение не сможет защитить от них. Проверка выполняется асинхронно, то есть одновременно с загрузкой страницы. Это тоже слегка повышает вероятность загрузки вредоносного ПО.

## Как настроить защиту от фишинга и вредоносного ПО в продуктах AdGuard

- **Для Windows**: Включите *Защиту от фишинга* в *Настройках*

    ![Защита от фишинга на Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Для Mac**: Включите модуль *Безопасность* в *Настройках*

    ![Безопасность на Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Для Android**: Включите *Защиту от фишинга* на вкладке *Защита*

    ![Защита от фишинга на Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **Для iOS**: Хотя отдельный модуль не предусмотрен, вы можете перейти в *Защиту Safari* → *Фильтры* → *Безопасность* и включить доступные фильтры. Кроме того, включите *DNS-защиту* и выберите один из серверов AdGuard DNS

    ![Безопасность на iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **Для браузерных расширений**: включите *Защиту от фишинговых и вредоносных сайтов* во вкладке *Настройки*. Для усиленной защиты перейдите в *Фильтры* → *Безопасность* и активируйте фильтры

    ![Защита от фишинга и вредоносных программ](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **Для приватного AdGuard DNS:** Включите защиту от вредоносных программ в *Настройках сервера* в разделе *Безопасность*

    ![Безопасность в DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Что мы блокируем

Мы используем два основных фильтра. Один защищает от фишинговых и мошеннических сайтов, которые пытаются украсть учётные данные пользователя. Другой блокирует доступ к сайтам, которые распространяют вредоносное ПО, что может привести к потере данных, утечке информации или повреждению устройства. Эти фильтры также защищают вас от сайтов с различными мошенническими схемами и обманом. Более подробную информацию можно найти в этой [статье на Википедии](https://ru.wikipedia.org/wiki/Фишинг).

## Поддержка наших фильтров

AdGuard ведёт обширную базу данных фишинговых и вредоносных сайтов, которая регулярно и автоматически обновляется по мере обнаружения новых угроз. Мы собираем информацию из различных надёжных и качественных источников, как публичных, так и от других компаний, и агрегируем её в общую базу данных опасных сайтов.

Мы автоматически анализируем жалобы на подозрительные сайты и тратим много времени на то, чтобы поддерживать актуальность базы данных, устранять ложные срабатывания и внедрять механизмы для их предотвращения в будущем.

### Как помочь

Любая помощь приветствуется! Если вы столкнулись с фишинговым или вредоносным сайтом, сообщите об этом по адресу <support@adguard.com>.

### Ложноположительные срабатывания

Изредка происходит так, что в фильтры AdGuard попадают сайты, которые не являются опасными. Мы следим, чтобы такого не происходило, но бывают разные случаи. Если вы столкнулись с подобным поведением AdGuard, сообщите о ложном срабатывании в поддержку по адресу <support@adguard.com>.

## Если вы сомневаетесь в сайте

Если вы подозреваете, что какой-то сайт может быть опасным, сначала проверьте его с помощью нашего [инструмента проверки безопасности](https://reports.adguard.com/welcome.html).

![Проверка безопасности](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
