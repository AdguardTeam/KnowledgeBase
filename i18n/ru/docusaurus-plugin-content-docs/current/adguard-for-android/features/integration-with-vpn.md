---
title: Интеграция с AdGuard VPN
sidebar_position: 8
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

AdGuard для Android создает локальный VPN для фильтрации трафика. Получается, другие VPN-приложения нельзя использовать, пока работает AdGuard для Android. However, both AdGuard and [AdGuard VPN](https://adguard-vpn.com/) apps have Integrated modes that let you use them together.

In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard Ad Blocker routes its traffic. Это позволяет AdGuard создавать VPN-интерфейс и блокировать рекламу и трекеры локально, а AdGuard VPN направляет весь трафик через удалённый сервер.

Если вы отключите AdGuard VPN, AdGuard перестанет использовать его в качестве исходящего прокси. Если вы отключите AdGuard, AdGuard VPN будет маршрутизировать трафик через собственный VPN-интерфейс.

If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable _Integration with AdGuard VPN_ automatically. Это работает и наоборот. Обратите внимание, что при включённой интеграции вы не сможете управлять исключениями приложений и подключаться к DNS-серверам из приложения AdGuard VPN. You can specify apps to be routed through your VPN tunnel via _Settings_ → _Filtering_ → _Network_ → _Proxy_ → _Apps operating through proxy_. To select a DNS server, open AdGuard → _Protection_ → _DNS protection_ → _DNS server_.
