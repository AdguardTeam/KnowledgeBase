---
title: Защита от фишинга и вредоносных программ
sidebar_position: 3
---

Распространённой проблемой остаётся фишинг и вредоносное ПО. Для повышения безопасности мы включили в продукты AdGuard специальные фильтры, которые защитят вас от вредоносных и фишинговых сайтов. Мы классифицировали более 15 миллионов сайтов и создали базу данных из 1,5 миллиона сайтов, известных как фишинговые и вредоносные. Используя эту базу данных, AdGuard проверяет посещаемые вами сайты, чтобы защитить вас от онлайн-угроз.

:::note Важно

Мы не собираем и не используем информацию о посещаемых вами сайтах.

:::

## Как AdGuard проверяет сайты?

Каждый раз, когда вы посещаете  сайт, ваш локальный клиент обменивается информацией с нашим внутренним сервером в виде хешей и хеш-префиксов. На основе этого обмена локальный клиент определяет, занесён ли сайт в базу потенциально опасных сайтов. There is a difference in the scope of this check for apps and extensions.

### В приложениях

AdGuard provides the best possible protection by inspecting both the pages and all objects loaded on them. AdGuard checks URLs and domain names using hash prefixes, not the full URLs, so our servers retain no information about the websites you visit and your personal information is completely safe. Our servers respond to the app’s query with a list of all possible addresses that match the hash prefix. When a potential threat is detected based on hash matches, access to that website is immediately blocked.

![DNS-предупреждение](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_diana.png)

### В браузерных расширениях

Наши браузерные расширения могут проверять только имена доменов, а не полные URL-адреса. They are also unable to check subqueries. This means that if there are potentially malicious elements on the page, they will be loaded even if the page itself is from a safe domain. The extension won’t be able to protect against them. It's also important to note that the check performed is asynchronous, i.e. it happens at the same time as the page is loaded, so it’s possible that malware could be loaded as well.

## Setting up phishing and malware protection in AdGuard products

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

![Безопасность в Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Кроме того, включите *DNS-защиту* и выберите один из серверов AdGuard DNS

![Безопасность в iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **Для расширений браузера**: включите *Защитe от фишинговых и вредоносных сайтов* на вкладке *Настройки*. Для усиленной защиты перейдите в *Фильтры* → *Безопасность* и активируйте доступные фильтры

![Защита от фишинга и вредоносных программ](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **Для приватного DNS AdGuard:** Включите защиту от вредоносных программ в *Настройках сервера* в разделе *Безопасность*

![Безопасность в DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Что мы блокируем

Мы используем два основных фильтра: один защищает от фишинговых и мошеннических сайтов, которые пытаются украсть учётные данные пользователя, а другой блокирует доступ к сайтам. Эти сайты, как известно, распространяют вредоносное ПО, что может привести к потере данных, утечке информации или повреждению устройства. These filters also protect you from websites with various scams and fraudulent schemes. Более подробную информацию можно найти в этой [статье на Википедии](https://ru.wikipedia.org/wiki/Фишинг).

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
