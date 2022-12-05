---
title: iCloud Private Relay и AdGuard
sidebar_position: 7
---

## Краткое описание проблемы

По умолчанию AdGuard использует "default route", таким образом отключая iCloud Private Relay.

Сейчас AdGuard и iCloud Private Relay не могут работать одновременно. AdGuard не может блокировать рекламу, так как iCloud Private Relay шифрует трафик до того, как AdGuard сможет фильтровать сетевые соединения.  Использование iCloud Private Relay блокирует любую фильтрацию, включая локальную. Таким образом, AdGuard не может фильтровать трафик или выполнять DNS-фильтрацию в Safari. Но AdGuard по-прежнему фильтрует трафик в других браузерах. Если вы хотите использовать iCloud Private Relay, подумайте об установке [AdGuard для Safari](https://adguard.com/adguard-safari/overview.html).

То же самое касается использования любых VPN-приложений на Mac: либо вы используете iCloud Private Relay, либо VPN-сервис.

## Подробное описание проблемы

AdGuard для Mac теперь использует встроенный в macOS механизм фильтрации сокетов на основе network extensions API. Этот новый и довольно глючный механизм заменил старые добрые расширения Kernel. За последние полтора года мы сообщили Apple более чем о 20 (!) ошибках, связанных с новым методом фильтрации.

Network extensions API имеет VPN-подобную конфигурацию со списком записей типа route. На Big Sur мы использовали правила "split-tunnel", чтобы избежать создания правила "default route", поскольку оно вызывало проблемы на ранних версиях Big Sur.

На Monterey появилась функция iCloud Private Relay. Privacy features of the Mail app also use Private Relay servers.

As a result, AdGuard can't work together with iCloud Private Relay and the Mail app privacy features:
1. iCloud Private Relay is applied to connections at the library level — before they reach the socket level, where AdGuard operates.
2. iCloud Private Relay использует QUIC, который AdGuard не может блокировать в фильтруемых приложениях, поскольку фильтрация HTTP/3 пока не доступна.
3. As AdGuard blocks QUIC, including iCloud Private Relay traffic — otherwise, ad blocking is impossible.
4. При использовании iCloud Private Relay и переключении AdGuard в режим "split-tunnel" невозможно открыть сайты в Safari.
5. Чтобы обойти эту проблему для Monterey, мы применяем правило "default route". Тогда Private Relay видит это правило, он автоматически отключается. Таким образом, AdGuard работает без проблем на Monterey, но iCloud Private Relay отключается.

`network.extension.monterey.force.split.tunnel` восстанавливает поведение Big Sur, но этот вариант может нарушить доступ к сайтам из-за (3) и (4). Мы продолжаем искать решение этой проблемы. Один из вариантов — внедрить HTTP/3-фильтрацию.

## Рекомендуемое решение

Мы рекомендуем использовать AdGuard вместе с более традиционным VPN-сервисом, таким как [AdGuard VPN](https://adguard-vpn.com/).

## Альтернативное решение

Вы можете запретить AdGuard использовать "default route", отключив последний.  Это можно сделать через Расширенные настройки -> `network.extension.monterey.force.split.tunnel`.

![Отключить маршрут по умолчанию в расширенных настройках](https://cdn.adguard.com/public/Adguard/kb/mac/mac_adguard_advanced_settings_ru.png)

Имейте в виду, что в этом случае вы столкнётесь с проблемами, описанными выше.
