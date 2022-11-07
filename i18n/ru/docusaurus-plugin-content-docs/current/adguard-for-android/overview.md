---
title: Обзор функций
sidebar_position: 1
---

> Обратите внимание: AdGuard для Android не следует путать с Блокировщиком контента AdGuard. Блокировщик контента AdGuard — это приложение, представленное в Google Play. Он подчиняется политике Google, вследствие чего его функциональность ограничена. AdGuard для Android — это, наоборот, мощное приложение, которое позволяет блокировать рекламу, управлять другими приложениями и выполнять другие функции, описанные в этой статье. AdGuard для Android можно скачать только [на сайте AdGuard](https://adguard.com/adguard-android/overview.html).

## Блокировка рекламы

Основная цель любого блокировщика — блокировать рекламу, и у большинства программ AdGuard одинаковые алгоритмы фильтрации. Механизм фильтрации рекламы изображён на картинке ниже.

![Блокировка рекламы](https://cdn.adguard.com/public/Adguard/Blog/manifestv3/adblockingworks.png)

Хотя блокировка рекламы кажется очевидной, есть несколько пунктов, которые стоит упомянуть. Главный пункт: AdGuard работает как универсальный фильтр. Он «просеивает» трафик ваших браузеров и приложений и решает, что делать с тем или иным веб-запросом. Это работает за счёт фильтров — списков специальных правил. В программе уже есть предустановленный набор фильтров, который постоянно обновляется. Но вы также можете добавить собственные фильтры и правила фильтрации.

Большинство блокировщиков для Android используют этот принцип, но их функциональность по сравнению с AdGuard ограничена. Узнать больше о различиях AdGuard для Android и других блокировщиков можно [в этой статье](https://adguard.com/en/blog/adguard-vs-adaway-dns66.html).

## Filters

В AdGuard используются различные фильтры: наши и сторонние, отсортированные по языку и назначению. Например, фильтры в категории «Раздражители» сильно отличаются от фильтров для рекламы на конкретном языке.

![Filters](https://cdn.adguard.com/content/kb/ad_blocker/android/features/filters1.png)

Больше о фильтрах можно узнать из их описания в приложении или из этой статьи.

## Собственные фильтры

![Собственные фильтры](https://cdn.adguard.com/content/kb/ad_blocker/android/features/custom-filters.png)

AdGuard позволяет создавать собственные фильтры, используя те же типы правил, что и в наших фильтрах. Если вы хотите попробовать, почитайте [статью о создании собственных фильтров](/general/ad-filtering/create-own-filters.md). В ней описан синтаксис правил AdGuard и есть много примеров.

> Совет: используйте функцию импорта, чтобы перенести свои правила на другое устройство.

## HTTPS-фильтрация

Сейчас большинство сайтов работают через HTTPS — защищённый веб-протокол. Так сложилось, что рекламщики тоже не остаются в стороне и активно пользуются этим протоколом, поэтому HTTPS-фильтрация очень важна для современного блокировщика рекламы.

![Что такое HTTPS](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https.png)

Чтобы фильтровать HTTPS-трафик, AdGuard должен установить сертификат в хранилище на устройстве пользователя. В более старых версиях ОС Android это делалось автоматически во время первичной настройки. Сертификат также можно было установить позже через настройки AdGuard. На Android 11 и более новых версиях автоматическая установка сертификата больше не доступна. Теперь сертификат нужно устанавливать вручную.

Вот инструкция по установке:

1. Перейдите на главный экран приложения и нажмите *Включить* рядом с сообщением *HTTPS-фильтрация выключена* (оно будет выделено оранжевым цветом, если сертификат AdGuard ещё не установлен).

2. Появится новый экран. Нажмите *Далее*, затем ещё раз *Далее* и *Сохраните его сейчас*, когда вам будет предложено загрузить сертификат AdGuard.

3. Когда сертификат загрузится, вы увидите новый экран. Нажмите *Откройте настройки безопасности*.

4. Откроются системные настройки. Пролистайте до раздела *Дополнительные настройки*, перейдите в него и далее в раздел *Шифрование и учетные данные* (название разделов может отличаться в зависимости от устройства — главное выбрать дополнительные настройки безопасности).

5. Нажмите *Установка сертификатов* > *Сертификат центра сертификации*.

6. Появится окно с предупреждением. Прочитайте его и нажмите *Все равно установить*, чтобы продолжить.

7. Выберите только что загруженный сертификат AdGuard. Вы должны увидеть всплывающее уведомление об успешной установке сертификата.

8. Сертификат AdGuard успешно установлен, HTTPS-фильтрация работает!

> Если вы обновите систему с Android 10 до Android 11, есть вероятность, что установленный ранее сертификат будет принят. Если нет, вы увидите на главном экране сообщение *HTTPS-фильтрация выключена*. В этом случае нужно будет повторно установить сертификат вручную.

Если у вас возникли проблемы с установкой сертификата, прочитайте [эту статью](/adguard-for-android/solving-problems/manual-certificate.md) или обратитесь в нашу [команду поддержки](/support/contact.md).

> **We want to emphasize that AdGuard Ad Blocker will function without HTTPS filtering. However, it won't be able to properly filter ads on sites that use the HTTPS protocol (most of sites do that). So if you want to use the full functionality of the app and get the best ad filtering quality and processing speed, we strongly recommend you to activate HTTPS-filtering.**

## Антитрекинг

Many websites gather information about their visitors, such as their IP addresses, information about the browser and operating system installed, screen resolution, and even what page the user came or was redirected from. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. Stealth Mode safeguards your personal information from such data and statistics gathering systems.

You can flexibly adjust the work of Stealth Mode: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn all the main features and options you can manage in the Stealth mode settings, [read this article](/general/stealth-mode.md).

![Антитрекинг](https://cdn.adguard.com/content/kb/ad_blocker/android/features/stealth-mode.png)

## Browsing Security

The Internet is a pretty dangerous place where your device can be attacked by viruses, whereas your personal or financial information can be stolen. Such terms as malware or phishing have become commonplace.

Phishing is a fraudulent online practice aimed at obtaining sensitive information like usernames, passwords, credit card details and such from internet users. This form of fraud, effected through spoof emailing and fake websites posing as trusted mediums like banks, social services etc., is causing more financial damage every year. As for malware (malicious software), it is as the name suggests — any type of software designed with the intent to damage the personal computer or other device it gets into. What once began as a prank now is a tool to steal confidential information from users and businesses.

![Антифишинг](https://cdn.adguard.com/content/kb/ad_blocker/android/features/browsing-security.png)

Fortunately, AdGuard's Browsing Security module protects you from visiting phishing and malicious websites. It also warns you about malware being downloaded onto your device. In case you want to learn more about Browsing Security, read [this article](/general/browsing-security.md).

> But note that AdGuard for Android is not an antivirus. It will neither stop the actual download of a virus nor delete the already existing ones. For the complete protection of your device, we recommend using AdGuard in tandem with a dedicated AV tool.

![Предупреждение Антифишинга](https://cdn.adguard.com/content/kb/ad_blocker/android/features/browsing_security_warning.png)

At the same time, we'd like to emphasize that your personal data is *not* transferred anywhere, and AdGuard does *not* know which websites you are visiting. The security check is not performed against an open web address (URL) but through hash prefixes (hash is a certain data structure that renders unambiguous each address added to the base). However, you can send us information on the websites you visit to improve the database, if you opt to. Learn more about AdGuard's phishing and malware protection.

# Control your apps

One of the main stated purposes of AdGuard for Android is to give users back the full control over their devices. With AdGuard, you can see comprehensive information about all web requests coming through your device. No app will be able to go online without you knowing.

## Apps management

In the Apps Management module you can choose which apps should have Wi-Fi or mobile data access, which will be filtered by AdGuard and which not. You can also change the background Internet access rules for your apps when the screen is locked. These settings can be applied to all installed apps at once or on the individual basis.

![Управление приложениями](https://cdn.adguard.com/content/kb/ad_blocker/android/features/apps-management.png)

You can find extra settings in the upper right corner of the Apps Management screen. They will help you fine-tune AdGuard for Android to your preference. For example, you can make the common settings applicable to each and every app, or select the apps which need a more detailed approach.

![Chrome](https://cdn.adguard.com/content/kb/ad_blocker/android/features/chrome.png)

By tapping the icons, you will see a screen showing app-specific traffic to help you make more informed decisions. AdGuard is of help not only with ad filtering and privacy protection, it can aid your device function better, saving battery life and traffic as well.

## Filtering log

In the Filtering Log, you can directly observe all web requests made by browsers and apps. Thanks to this feature, you have full control over all processes on your device.

![Журнал фильтрации](https://cdn.adguard.com/content/kb/ad_blocker/android/features/filtering-log.png)

You can block each request right there in one tap (or unblock it, if the request is already blocked). There's also detailed information about each request, although it is mostly aimed at the advanced users, particularly those who create their own filtering rules. We will be elaborating on it just a bit further below.

## Пользовательские правила

As mentioned above, AdGuard for Android uses a set of filters to block ads. And then there is the User rules section that allows you to create and adjust your own filtering rules. It is located in the Settings tab of the AdGuard menu.

![Пользовательские правила](https://cdn.adguard.com/content/kb/ad_blocker/android/features/user-rules.png)

When you first install AdGuard, the User rules section is empty. To fill it with rules, you will need to understand the basics of the rules syntax. Don't worry if you are not familiar with it, here's a good place to start should you feel an urge to delve deeper into custom rules creation.

By the way, whenever you use Filtering Log to block anything, a corresponding rule will appear in User rules, so use it if you ever want to undo the blocking. And generally speaking, Filtering Log and User rules go together particularly well: you can use the former to monitor requests in order to build a correct rule for the User rules.

## DNS-фильтрация

The DNS Filtering module allows to configure DNS settings on the user's device, including the chosen DNS server, DNS protocol, and DNS filters that block ads and trackers.

![AdGuard DNS](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

A bit of a theory refresher: DNS stands for "Domain name system", and its purpose is to translate domain names into something browsers can understand, i.e. IP addresses. So, each time you go to a website, your browser sends a DNS request to a server, usually determined by your ISP. That server either redirects the request to another (upstream) server or replies with an IP address. If you use a special DNS server instead of a default one, it can send unsafe and potentially dangerous requests to the "void". Thus, the responses with the IP addresses won't be received and "bad requests" will be nipped in the bud.

DNS filtering has its own separate tab within the AdGuard for Android app home screen. Here you can choose which type of DNS you wish to use (it can be either regular DNS or high security DNS — we will get to that later on) as well as enable DNS-level blocking.

## DNS blocking

DNS blocking is a standalone feature that complements AdGuard protection suite.

![Механизм DNS](https://cdn.adguard.com/public/Adguard/Blog/android-features/DNS-mechanism.jpg)

There are two methods of DNS blocking:

1. Some DNS servers can block DNS requests to potentially harmful domains.
2. There is built-in DNS filtering that works right on your device and can block DNS requests, in addition to what's blocked by the selected DNS server.

How exactly does DNS filtering work? It has a special DNS filter which contains a large list of ad and tracker domains, which it uses in conjunction with User rules to recognize 'bad' requests. Every request is checked against this filter, and if there's a hit, instead of forwarding it to the DNS server, it is being rerouted to a 'blackhole'.

The simplicity of this approach is both a benefit and a disadvantage. The main advantage of this approach is that it's both battery life friendly and traffic-saving. Once a domain is blocked, it won't be requested again within an hour. The disadvantage would be the "roughness" of this method: specific URLs can't be blocked, only whole domains. Sometimes the only way to block ads by DNS is to add a rule that will break something at the same time. In this case, we just don't add this rule and the ad remains unblocked — because the alternative where the website does not work at all is even worse.

## DNS-серверы

But AdGuard for Android "DNS package" does not end just there. One of the useful perks is an option to select *absolutely any* DNS server to use. At your service is a list consisting of dozens of servers to choose from, from our own AdGuard DNS servers to other popular providers like Google DNS, Cloudflare and others. On top of that, if your favorite server is not in the default list, you still can enter its address manually and use it anyway. See the comprehensive list of popular DNS providers — you can find many DNS servers there and any to AdGuard with a tap of a finger.

There are several reasons to use a custom DNS server instead of one offered by your ISP by default. Some servers are faster, some provide ad blocking or parental control solutions, some enhance your privacy etc.

But DNS servers not only vary by function. Besides, they can also differ by supported protocol types. There are three main types of protocols that DNS servers work over: HTTPS, TLS, and QUIC. Correspondingly, there are DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) and DNS-over-QUIC (DoQ). While the first two are standard protocols, the third (DoQ) is experimental, yet the most outstanding one. We'll describe it later. Choosing a DNS server from a trusted provider is essential to protect DNS traffic. When user's DNS traffic is safe, their privacy and security are increased, and it's easier to prevent eavesdropping and manipulation of DNS data via man-in-the-middle attacks (MITMs).

### DNS-over-QUIC

DNS-over-QUIC (DoQ) is a rather new encryption protocol and AdGuard DNS is the first public resolver that supports it. Unlike DoH and DoT, it uses QUIC as a transport protocol and finally brings DNS back to its roots — working over UDP. It brings all the good things that QUIC has to offer — out-of-the-box encryption, reduced connection times, better performance when data packets are lost. Also, QUIC is supposed to be a transport-level protocol and there are no risks of metadata leaks that could happen with DoH.

To learn more about DNS-over-QUIC, check out [this article](https://adguard.com/en/blog/dns-over-quic.html) dedicated entirely to it.

To enable DoQ in AdGuard for Android, perform the following steps:

* Open the app, then open the side menu
* Go to *Settings > DNS Filtering* and enable it
* Select any of AdGuard DNS servers from the list of available servers
* Under *Server type* choose *DNS-over-QUIC*

## DNS user filter

It is very much like the regular User filter, but for DNS requests.

![Пользовательский DNS-фильтр](https://cdn.adguard.com/content/kb/ad_blocker/android/features/dns-user-filter.png)

You'll find DNS user filter at *Settings > DNS Filtering > DNS Requests blocking*. DNS User filter supports two types of syntax: a limited portion of AdGuard syntax and "hosts" syntax. You can read more about it in our Knowledge Base.

## Custom DNS filters

You can add any [custom DNS filters](https://filterlists.com/) or custom hosts lists. A useful feature considering how popular hosts lists are among Internet users.

![DNS-фильтры](https://cdn.adguard.com/content/kb/ad_blocker/android/features/dns-filters.png)

This option is available on the *Settings > DNS Filtering > DNS Requests blocking* screen.

## Proxy and TOR

A proxy server is basically another computer serving as a hub that processes your internet requests. You can set up AdGuard to route all your device's traffic through any proxy — and you'll be able to configure the whole thing right inside the app. And here is [an instruction on how to set up a proxy](/adguard-for-android/solving-problems/outbound-proxy.md).

> Some popular VPN providers offer an alternative way to use their service as a proxy. This can be used to run them alongside AdGuard in local VPN mode.

![Настройки прокси](https://cdn.adguard.com/content/kb/ad_blocker/android/features/proxy-settings.png)

Contrary to a popular opinion, using a proxy server is not just about bypassing access restriction to geoblocked resources. It is about security! If you are using a proxy server, intruders won't know what websites you visit. You can also use AdGuard along with the anonymity network TOR (we have already integrated AdGuard with Tor for your convenience!). Here is a [Wiki article](https://en.wikipedia.org/wiki/Tor_(anonymity_network)) where the whole concept of TOR network is nicely explained in case you wish to find out more.

## Extensions support

Userscripts (we also call them extensions) are basically mini-programs written in Javascript that extend the functionality of one or more websites. Usually, you'd need some special userscript manager to add them, and it's traditionally more of a desktop thing. But with AdGuard everything is possible! Now you can add any userscripts by URL or load them from a file, and AdGuard will serve as a userscript manager and take care of the rest. Go to *Settings > Extensions* to enable some of the pre-installed extensions or to add custom userscripts.

![Расширения](https://cdn.adguard.com/content/kb/ad_blocker/android/features/extensions.png)

By the way, you can tap any added userscript to see more details, and to reinstall or delete it.

## Совместимость с AdGuard VPN

The best kind of compatibility is when you install two apps and they just start working together. Presuming you already have AdGuard ad blocker installed, just download AdGuard VPN from Play Store (you can get there right from the ad blocker app, there's an item in General settings).

![Совместимость](https://cdn.adguard.com/content/kb/ad_blocker/android/features/compatibility.png)

Both apps will detect each other and do everything that's needed for smooth joint work. All that will be left for you is to enjoy both ad-free Internet and the benefits of a VPN. By the way, it works the other way around just as well: install AdGuard ad blocker on top of an already-running AdGuard VPN and you're good.

If you'd like to disable Compatibility Mode for any reason, it's very simple to do so from AdGuard ad blocker settings, just toggle the switch. Additionally, you can add AdGuard ad blocker and AdGuard VPN tiles to your device's notification bar and toggle them in one tap at your own will — thanks to Compatibility Mode the configuration will change immediately and silently.

## Лицензия

While some ot the features in AdGuard for Android are free, others require [purchasing a license](https://adguard.com/en/license.html). There are Personal (up to three devices) and Family (up to 9 devices), Yearly and Lifetime license keys. The premium version offers the following features to its users:
* Антитрекинг
* Антифишинг
* Расширения
* Ad blocking in all apps (not only browsers)
* Собственные фильтры

Read [this article](/general/license/activation.md) to learn how to activate the license key.

## Другие функции

There are too many features to describe them all in detail, so let us simply list them here:

* When you visit certain screens for the first time, there will appear tooltips that describe the purpose of that screen and its main features
* You can export or import AdGuard settings (for a faster switch between the settings profiles or to transfer your profile between different devices)
* Select an update channel, i.e. the mode in which the application receives its updates (stable release channel, less stable beta channel and raw ["nightly" channel](https://adguard.com/en/blog/nightly-builds/)
* By tapping a little battery icon on the main screen of the app you will get to the "Battery Usage" screen. System battery stats [are often wrong](/adguard-for-android/solving-problems/battery.md), so we decided to have our own, one that would reflect the real state of things
* You can change the app's language in the General Settings tab