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

As a consequence, AdGuard can’t work together with iCloud Private Relay and the Mail app privacy features:

1. iCloud Private Relay применяется к соединениям на уровне библиотек — до того, как они достигают уровня сокета, где работает AdGuard.
2. iCloud Private Relay is implemented with HTTP/3 CONNECT proxies.
3. Since AdGuard does not filter CONNECT HTTP/3 requests yet, it attempts to downgrade HTTP/3 proxy connections to HTTP/1.1, which results in blocking iCloud Private Relay traffic.
4. When you use iCloud Private Relay and switch AdGuard into the Split-Tunnel mode, you can’t open websites in Safari.
5. To work around this issue for Monterey, we apply the “default route” rule. Тогда Private Relay видит это правило, он автоматически отключается. Таким образом, AdGuard работает без проблем на Monterey, но iCloud Private Relay отключается.

The `network.extension.monterey.force.split.tunnel` option restores the “Big Sur” behavior, but this option may break access to websites due to (3) and (4). Мы продолжаем искать решение этой проблемы. One of the options is implementing HTTP/3 proxy filtering.

## Рекомендуемое решение

Мы рекомендуем использовать AdGuard вместе с более традиционным VPN-сервисом, таким как [AdGuard VPN](https://adguard-vpn.com/).

## Альтернативное решение

Вы можете запретить AdGuard использовать "default route", отключив последний. Это можно сделать через Расширенные настройки → `network.extension.monterey.force.split.tunnel`.

![Отключить маршрут по умолчанию в расширенных настройках *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Имейте в виду, что в этом случае вы столкнётесь с проблемами, описанными выше.
