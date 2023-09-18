---
title: Как использовать Samsung Pay с AdGuard в Южной Корее
sidebar_position: 17
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Некоторые пользователи столкнулись с проблемой, из-за которой Samsung Pay не работает при запущенном AdGuard. Эта проблема возникает на устройствах, зарегистрированных в Южной Корее.

Что вызывает эту проблему? Иногда Samsung Pay не работает на устройствах с запущенными VPN-сервисами, и AdGuard — одно из таких приложений. By default, AdGuard uses a local VPN to filter traffic, which can cause problems when using Samsung Pay.

As a consequence, users had to disable AdGuard when making payments with Samsung Pay. This can be avoided with the *Detect Samsung Pay* feature. When this option is enabled, the AdGuard app is paused whenever the user opens the Samsung Pay app and resumes when the app is closed.

:::note

Эта функция будет работать только в том случае, если в настройках AdGuard выбран режим фильтрации «Локальный VPN». Если используется другой режим, Samsung Pay будет работать без перебоев.

:::

To enable *Detect Samsung Pay*, follow these steps:

1. Go to *Settings* → *General* → *Advanced*→ *Low-level settings*.

1. Scroll to *Detect Samsung Pay* and move the slider to the right.

1. Tap *Allow permissions* and give AdGuard access to information about the use of other apps.

We need it to collect statistics about the operation of Samsung Pay in order for the *Detect Samsung Pay* feature to work.

After enabling this feature, when you switch from Samsung Pay to AdGuard, the following message will appear as shown in the screenshot.

![samsungpay *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/samsungpay-with-adguard-in-south-korea/samsung_pay.png)

Alternatively, you can disable filtering for Samsung Pay in *App management*. Simply go to the *App management* screen (third tab from the bottom), find Samsung Pay in the list, and turn off the switch at *Route traffic through AdGuard*.
