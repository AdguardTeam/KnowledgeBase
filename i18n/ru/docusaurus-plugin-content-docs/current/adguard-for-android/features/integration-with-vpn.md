---
title: Интеграция с AdGuard VPN
sidebar_position: 8
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

AdGuard для Android создает локальный VPN для фильтрации трафика. Получается, другие VPN-приложения нельзя использовать, пока работает AdGuard для Android. However, both AdGuard and [AdGuard VPN](https://adguard-vpn.com/) apps have Integrated modes that let you use them together.

В этом режиме AdGuard VPN выступает в роли исходящего прокси-сервера, через который AdGuard направляет свой трафик. Это позволяет AdGuard создавать VPN-интерфейс и блокировать рекламу и трекеры локально, а AdGuard VPN направляет весь трафик через удалённый сервер.

Если вы отключите AdGuard VPN, AdGuard перестанет использовать его в качестве исходящего прокси. Если вы отключите AdGuard, AdGuard VPN будет маршрутизировать трафик через собственный VPN-интерфейс.

If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable _Integration with AdGuard VPN_ automatically. Это работает и наоборот. Обратите внимание, что при включённой интеграции вы не сможете управлять исключениями приложений и подключаться к DNS-серверам из приложения AdGuard VPN. Вы можете указать приложения, которые будут маршрутизироваться через VPN-туннель, через _Настройки_ → _Фильтрация_ → _Сеть_ → _Прокси_ → _Приложения, работающие через прокси_. Чтобы выбрать DNS-сервер, откройте AdGuard → _Защита_ → _DNS-защита_ → _DNS-сервер_.
