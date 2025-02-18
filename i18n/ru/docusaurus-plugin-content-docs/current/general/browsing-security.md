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

### In browser extensions {#extension}

Наши браузерные расширения могут проверять только имена доменов, а не полные URL-адреса. Они также не могут проверять подзапросы. Если страница находится на безопасном домене, но на ней есть потенциально вредоносные элементы, они будут загружены. Расширение не сможет защитить от них. Проверка выполняется асинхронно, то есть одновременно с загрузкой страницы. Это тоже слегка повышает вероятность загрузки вредоносного ПО.

## Как настроить защиту от фишинга и вредоносного ПО в продуктах AdGuard

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![Защита от фишинга и вредоносных программ](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Что мы блокируем

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## Поддержка наших фильтров

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### Как помочь

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### Ложноположительные срабатывания

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## Если вы сомневаетесь в сайте

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
