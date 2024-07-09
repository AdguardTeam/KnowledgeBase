---
title: Browsing security
sidebar_position: 3
---

Каждый день десятки тысяч людей становятся жертвами вирусных атак или мошенничества в интернете. Чтобы защитить пользователей AdGuard от вредоносных и фишинговых сайтов, мы добавили в приложение AdGuard специальные фильтры.

На сегодняшний день мы классифицировали более 15 миллионов сайтов, и наши фильтры содержат около 1,5 миллиона фишинговых и вредоносных сайтов. Только вдумайтесь: 10% всех известных сайтов могут быть опасны для вас! Неискушённый пользователь легко может стать жертвой мошенников или хакеров. Мы надеемся, что использование защиты от вредоносных сайтов поможет избежать всех угроз, которые могут вам повстречаться.

## Как происходит проверка

Способ и качество проверки зависит от того, какой продукт вы используете. Если речь идёт об одном из наших браузерных расширений, то AdGuard проверяет только те страницы, которые вы посещаете. Если же вы используете AdGuard для Windows, Mac или Android, то, помимо самой страницы, мы проверяем и каждый загружаемый на неё объект.

### AdGuard для Windows, Mac и Android

Мы используем протокол [Safe Browsing API версии 2.2](https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec) для работы с фильтрами. Этот протокол позволяет сохранить ваши личные данные в полной безопасности. Наш сервер ничего не знает о тех сайтах, которые вы посещаете. Для проверок используются не открытые адреса, а префиксы их хешей.

The figure below provides a general understanding of how the Browsing security module works, using AdGuard for Windows as an example.

![Functioning algorithm of Browsing security module](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_adguard_for_windows.png)

### Браузерное расширение AdGuard

Браузерные расширения работают иначе, используя так называемый [*Lookup API*](https://github.com/AdguardTeam/AdguardForAndroid/issues/162#issue-115487668) для проверки адресов страниц, которые вы посещаете. Каждый раз, когда вы посещаете какой-либо сайт, ваш локальный клиент обменивается информацией с нашим внутренним сервером в виде хешей и хеш-префиксов. Based on this exchange, the local client determines whether or not the site is listed in the potentially dangerous sites database. Тем, кому этот процесс интересен на более глубоком уровне, будет полезна ссылка выше.

Обращаем ваше внимание на то, что мы никогда не получаем никакой информации, которая позволила бы нам определить, какие сайты вы посещаете, и каким-либо образом использовать эти данные.

An approximate algorithm of the functioning of the Browsing security module is shown in the picture below.

![Functioning algorithm of Browsing security module in AdGuard browser extensions.](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_extension.png)

## Фильтры AdGuard

В настоящее время мы поддерживаем два фильтра AdGuard. Один защищает от фишинга и мошеннических сайтов. Другой — от вредоносных сайтов, посещение которых может привести к заражению устройства вирусом.

### Фильтр фишинговых сайтов

*Фишинг* — вид интернет-мошенничества, целью которого является получение доступа к конфиденциальным данным пользователей — логинам и паролям. Если вас заинтересовала эта тема, советуем ознакомиться со [статьёй на Википедии](https://ru.wikipedia.org/wiki/Фишинг).

Помимо фишинговых сайтов, этот фильтр содержит также разнообразные мошеннические сайты. К ним относятся всевозможные обманные схемы, продажа несуществующего контента и тому подобное.

### Фильтр вредоносных сайтов

This filter contains links to pages that could execute malicious code, leading to potential leaks, data loss, or damage to a user’s device. Code execution can be authorized (for example, when downloading and running the executable file) or unauthorized (for example, when being attacked with spyware).

## How do we add new addresses to our filters?

Most of the work is automated, so you can be sure that new malware and phishing addresses are added to our database as quickly as possible.

### AdGuard Browsing security Community

An important tool for maintaining the highest level of filtering is the *AdGuard Browsing security Community*. Любой пользователь наших продуктов, будь то AdGuard для Windows или браузерное расширение, может стать участником сообщества и помогать нам в составлении фильтров AdGuard.

In the image below, you can see an algorithm of how Browsing security Community works:

![The way AdGuard Browsing security Community works](https://cdn.adtidy.org/public/Adguard/En/Articles/browsing_security_community.png)

### Как помочь

Мы с радостью примем любую помощь! Если хотите отправить нам жалобу на фишинговый или вредоносный сайт, напишите в поддержку на **support@adguard.com**.

### Ложноположительные срабатывания

Изредка происходит так, что в фильтры AdGuard попадают сайты, которые не являются опасными. Мы следим, чтобы такого не происходило, но бывают разные случаи. Если вы встретили подобное поведение AdGuard, пожалуйста, отправьте нам жалобу на ложноположительное срабатывание. Чтобы отправить такую жалобу, напишите в поддержку на **support@adguard.com**.
