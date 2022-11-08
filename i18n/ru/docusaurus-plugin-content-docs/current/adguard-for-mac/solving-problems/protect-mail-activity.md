---
title: Protect Mail Activity and AdGuard
sidebar_position: 8
---

## In a nutshell

Apple's Mail app now uses a proxy to hide a user's IP address when downloading images from emails.

![Mail privacy protection](https://cdn.adguard.com/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

However, it won't work if there's an active VPN connection. As it treats AdGuard as a VPN, it won't preload images automatically.

Apple explains this issue [here](https://support.apple.com/HT212797).

## Подробное описание проблемы

AdGuard для Mac теперь использует встроенный в macOS механизм фильтрации сокетов на основе network extensions API. Этот новый и довольно глючный механизм заменил старые добрые расширения Kernel. За последние полтора года мы сообщили Apple более чем о 20 (!) ошибках, связанных с новым методом фильтрации.

Network extensions API имеет VPN-подобную конфигурацию со списком записей типа route. On Big Sur, AdGuard used "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases. These problems were solved in Monterey so nothing prevents us from using the "default route" rule.

На Monterey появилась функция iCloud Private Relay. Функции конфиденциальности в приложении Почта также используют серверы iCloud Private Relay.

В результате AdGuard не может работать вместе с iCloud Private Relay и функциями конфиденциальности приложения Почта:
1. iCloud Private Relay применяется к соединениям на уровне библиотек — до того, как они достигают уровня сокета, где работает AdGuard.
2. iCloud Private Relay uses QUIC, which AdGuard can't filter because HTTP/3 filtering is not yet available.
3. Поэтому AdGuard блокирует QUIC, включая и трафик iCloud Private Relay — иначе блокировка рекламы невозможна.
4. При использовании iCloud Private Relay и переключении AdGuard в режим "split-tunnel" невозможно открыть сайты в Safari.
5. Чтобы обойти эту проблему для Monterey, мы применяем правило "default route". Тогда Private Relay видит это правило, он автоматически отключается. Таким образом, AdGuard работает без проблем на Monterey, но iCloud Private Relay отключается.

`network.extension.monterey.force.split.tunnel` восстанавливает поведение Big Sur, но этот вариант может нарушить доступ к сайтам из-за (3) и (4). Мы продолжаем искать решение этой проблемы. Один из вариантов — внедрить HTTP/3-фильтрацию.

## Рекомендуемое решение
At this point, we recommend using a more traditional VPN service, such as [AdGuard VPN](https://adguard-vpn.com/), instead of the new Apple's privacy features.
