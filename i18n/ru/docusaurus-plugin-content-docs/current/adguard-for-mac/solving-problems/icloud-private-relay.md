---
title: iCloud Private Relay и AdGuard
sidebar_position: 7
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

## Краткое описание проблемы

По умолчанию AdGuard использует "default route", который отключает Частный узел iCloud (iCloud Private Relay).

Сейчас AdGuard и iCloud Private Relay не могут работать одновременно. AdGuard не может блокировать рекламу, так как iCloud Private Relay шифрует трафик до того, как AdGuard сможет фильтровать сетевые соединения. Использование iCloud Private Relay блокирует любую фильтрацию, включая локальную. Таким образом, AdGuard не может фильтровать трафик или выполнять DNS-фильтрацию в Safari. Но AdGuard по-прежнему фильтрует трафик в других браузерах. Если вы хотите использовать iCloud Private Relay, подумайте об установке [AdGuard для Safari](https://adguard.com/adguard-safari/overview.html).

То же самое касается использования любых VPN-приложений на Mac: либо вы используете iCloud Private Relay, либо VPN-сервис.

## Подробное описание проблемы

AdGuard для Mac теперь использует встроенный в macOS механизм фильтрации сокетов на основе network extensions API. Этот новый и довольно глючный механизм заменил старые добрые расширения Kernel. За последние полтора года мы сообщили Apple более чем о 20 (!) ошибках, связанных с новым методом фильтрации.

Network extensions API имеет VPN-подобную конфигурацию со списком записей типа route. На Big Sur мы использовали правила "split-tunnel", чтобы избежать создания правила "default route", поскольку оно вызывало проблемы на ранних версиях Big Sur.

На Monterey появилась функция iCloud Private Relay. Функции конфиденциальности в приложении Почта также используют серверы iCloud Private Relay.

Как следствие, AdGuard не может работать вместе с iCloud Private Relay и функциями конфиденциальности приложения Почта:

1. iCloud Private Relay применяется к соединениям на уровне библиотек — до того, как они достигают уровня сокета, где работает AdGuard.
2. iCloud Private Relay использует QUIC, который AdGuard не может блокировать в фильтруемых приложениях, поскольку фильтрация HTTP/3 пока не доступна.
3. Следовательно, AdGuard блокирует QUIC, включая и трафик iCloud Private Relay — иначе блокировка рекламы невозможна.
4. При использовании iCloud Private Relay и переключении AdGuard в режим "split-tunnel" невозможно открыть сайты в Safari.
5. Чтобы обойти эту проблему для Monterey, мы применяем правило "default route". Тогда Private Relay видит это правило, он автоматически отключается. Таким образом, AdGuard работает без проблем на Monterey, но iCloud Private Relay отключается.

`network.extension.monterey.force.split.tunnel` восстанавливает поведение Big Sur, но этот вариант может нарушить доступ к сайтам из-за (3) и (4). Мы продолжаем искать решение этой проблемы. Один из вариантов — внедрить HTTP/3-фильтрацию.

## Рекомендуемое решение

Мы рекомендуем использовать AdGuard вместе с более традиционным VPN-сервисом, таким как [AdGuard VPN](https://adguard-vpn.com/).

## Альтернативное решение

Вы можете запретить AdGuard использовать "default route", отключив последний. Это можно сделать через Расширенные настройки → `network.extension.monterey.force.split.tunnel`.

![Отключить маршрут по умолчанию в расширенных настройках *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Имейте в виду, что в этом случае вы столкнётесь с проблемами, описанными выше.
