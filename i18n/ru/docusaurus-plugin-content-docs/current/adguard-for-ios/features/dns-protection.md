---
title: DNS-защита
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для iOS — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

[DNS protection module](https://adguard-dns.io/kb/general/dns-filtering/) enhances your privacy by encrypting your DNS traffic. В отличие от Защиты Safari, DNS-защита распространяется на всё устройство, то есть работает в других браузерах и приложениях. Включите этот модуль, чтобы шифровать DNS-трафик и блокировать отслеживающие домены. You can do this on the home screen by tapping the shield icon at the top of the screen, or by going to the _Protection_ → _DNS protection_ tab.

:::note

Чтобы управлять DNS-настройками, приложения AdGuard требуют установить локальный VPN. Он не будет направлять ваш трафик через какие-либо удалённые серверы. Тем не менее, система попросит вас подтвердить разрешение на доступ.

:::

### Реализация DNS {#dns-implementation}

![Экран реализации DNS \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

В этом разделе есть две опции на выбор: AdGuard и Нативная. По сути, это два метода настройки DNS.

При выборе режима Нативной реализации DNS-запросы обрабатываются системой, а не приложением. Это означает, что AdGuard не нужно создавать локальный VPN. К сожалению, это не поможет вам обойти системные ограничения и использовать AdGuard вместе с другими приложениями на основе VPN: если включено любое VPN-приложение, нативный DNS игнорируется. Следовательно, вы не сможете фильтровать трафик локально или использовать наш новый протокол [DNS-over-QUIC (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS-серверы {#dns-servers}

Следующий раздел, который вы увидите на экране DNS-защиты, — это DNS-сервер. В ней показаны выбранные в данный момент DNS-сервер и тип шифрования. Нажмите на кнопку «DNS-сервер», если хотите изменить один из этих параметров (или оба).

![DNS-серверы \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Серверы отличаются скоростью, используемым протоколом, надёжностью, политикой логирования и т. д. По умолчанию AdGuard предложит несколько DNS-серверов из числа наиболее популярных (включая AdGuard DNS). Нажмите на любой из них, чтобы изменить тип шифрования (если такая опция предусмотрена владельцем сервера) или перейти на домашнюю страницу сервера. Мы добавили такие ярлыки, как `Политика «Без логов»`, `Блокировка рекламы`, `Безопасность`, чтобы помочь вам сделать выбор.

Помимо этого, в нижней части экрана есть возможность добавить пользовательский DNS-сервер. Он поддерживает обычные серверы, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS и DNS-over-QUIC.

#### Базовая HTTP-аутентификация для DNS-over-HTTPS

This feature brings the authentication capabilities of the HTTP protocol to DNS, which does not have built-in authentication. Authentication in DNS is useful if you want to restrict access to your custom DNS server to specific users.

To enable this feature:

1. In AdGuard DNS, go to _Server settings_ → _Devices_ → _Settings_ and change the DNS server to the one with authentication. Clicking _Deny other protocols_ will remove other protocol usage options, leaving only DNS-over-HTTPS authentication enabled and preventing its use by third parties. Copy the generated address.

![DNS-over-HTTPS with authentication](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. In AdGuard for iOS, go to the _Protection tab_ → _DNS protection_ → _DNS server_ and paste the generated address into the _Add a custom DNS server_ field. Save and select the new configuration.

To check if everything is set up correctly, visit our [diagnostics page](https://adguard.com/en/test.html).

### Network settings {#network-settings}

![Network settings screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Пользователи также могут управлять DNS-защитой на экране Настройки сети. _Filter mobile data_ and _Filter Wi-Fi_ enable or disable DNS protection for the respective network types. Further down, at _Wi-Fi exceptions_, you can exclude particular Wi-Fi networks from DNS protection (for example, you might want to exclude your home network if you use [AdGuard Home](https://adguard.com/adguard-home/overview.html)).

### DNS filtering {#dns-filtering}

DNS-фильтрация позволяет настроить DNS-трафик: можно включить DNS-фильтр AdGuard, добавить собственные DNS-фильтры и использовать чёрный или белый список DNS.

Как найти функцию:

_Protection_ (the shield icon in the bottom menu bar) → _DNS protection_ → _DNS filtering_

![DNS filtering screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filters {#dns-filters}

Similar to filters that work in Safari, DNS filters are sets of rules written according to special [syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard будет отслеживать ваш DNS-трафик и блокировать запросы, подходящие под одно или несколько правил. You can use filters such as [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) or add hosts files as filters. Также вы можете добавить несколько фильтров одновременно. To know how to do it, get acquainted with [this exhaustive manual](adguard-for-ios/solving-problems/system-wide-filtering).

#### Allowlist and Blocklist {#allowlist-blocklist}

Вы можете точечно влиять на DNS-фильтрацию не только с помощью DNS-фильтров, но и добавляя отдельные домены в списки. Чёрный список даже поддерживает тот же синтаксис для DNS-фильтрации, и оба списка можно импортировать и экспортировать, как и Белый список в блокировке контента Safari.
