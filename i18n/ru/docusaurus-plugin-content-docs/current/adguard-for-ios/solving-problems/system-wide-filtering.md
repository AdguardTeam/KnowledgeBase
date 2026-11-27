---
title: Как включить системную фильтрацию в AdGuard для iOS
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для iOS — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, сначала [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

## Фильтрация на системном уровне

Фильтрация на системном уровне — это блокировка рекламы и трекеров за пределами Safari, то есть в других браузерах и приложениях на вашем iOS-устройстве. iOS — достаточно закрытая операционная система, и Apple предоставляет ограниченные возможности для блокировки рекламы вне Safari. Единственный способ заблокировать рекламу и трекеры на уровне всей системы — использовать [DNS-фильтрацию](https://adguard-dns.io/kb/general/dns-filtering/). В этой статье рассказано, как её включить.

![Как работает DNS-фильтрация](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_ru.png)

Сначала включите DNS-защиту:

1. Откройте *AdGuard*.
2. Нажмите иконку *Защита* (значок щита в нижней строке меню).
3. Включите *DNS-защиту*.

![Экран DNS-защиты *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/dns_protection.png)

После включения DNS-защиты у вас есть три варианта:

- **Использовать DNS-фильтр AdGuard.** Чтобы включить его, перейдите в раздел *Защита* → *DNS-защита* → *DNS-фильтрация* → *DNS-фильтры* → *фильтр AdGuard DNS*. С этой опцией вы не привязаны к конкретному серверу блокировки — всё блокирует фильтр.
- **Использовать блокирующий DNS-сервер.** Перейдите в раздел *Защита* → *DNS-защита* → *DNS-сервер* и выберите *AdGuard DNS* или любой другой блокирующий сервер.
- **Добавить собственный DNS-фильтр или файл hosts.** Вы можете добавить несколько DNS-фильтров и файлов hosts. Имейте в виду, что использование слишком большого количества DNS-фильтров и файлов hosts может замедлить работу AdGuard.

:::info

If system-wide filtering stops blocking ads in apps on iOS 27 or later, check if *Connectivity Assist* is enabled. Learn more in [How to fix ad blocking in apps on iOS 27](/adguard-for-ios/solving-problems/how-to-fix-ad-blocking-in-apps-ios-27/).

:::

## Как добавить свой DNS-фильтр или файл hosts

For example, let’s add the [OISD Blocklist Big](https://oisd.nl/).

1. Скопируйте ссылку на OISD Blocklist Big: `https://big.oisd.nl`
2. Откройте *Защита* → *DNS-защита* → *DNS-фильтрация* → *DNS-фильтры*.
3. Нажмите *Добавить фильтр*.
4. Вставьте ссылку в поле URL-адреса фильтра.
5. Нажмите *Далее* → *Добавить*.

![Adding a DNS filter screen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/adding_dns_filter.png)

Add any number of DNS filters by repeating step 4 with a different URL. You can find various filter lists and their links at [filterlists.com](https://filterlists.com).
