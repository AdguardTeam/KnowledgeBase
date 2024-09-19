---
title: WFP-драйвер
sidebar_position: 1
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Для фильтрации сетевого трафика AdGuard использует сетевой драйвер. Существует два варианта: драйвер TDI и драйвер WFP. While a WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. Подобные ошибки могут выражаться совершенно по-разному, это зависит от конкретного случая.

Если вы столкнулись с проблемой, которая предположительно была связана с совместимостью, вы всегда можете перейти на более старый, но более стабильный сетевой драйвер TDI. Для этого:

1. Перейдите в *Настройки → Сеть*.

2. Disable the WFP driver as it’s done in this picture:

![WFP driver *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
