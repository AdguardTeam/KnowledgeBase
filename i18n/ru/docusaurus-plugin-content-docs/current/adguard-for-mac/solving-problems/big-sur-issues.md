---
title: Проблемы совместимости с различными версиями macOS
sidebar_position: 4
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Известные проблемы

Каждый год Apple выпускает новую версию macOS, внедряя инновационные решения и добавляя полезные функции. Но некоторые из них, такие как Network Extensions API (Big Sur) или iCloud Private Relay (Monterey), вызывают проблемы у многих приложений, и AdGuard не исключение. В этой статье мы рассмотрим известные проблемы, характерные для каждой версии macOS, и возможные способы их решения.

### Монтерей 12: известные проблемы

Эти проблемы ещё не устранены компанией Apple или устранены лишь частично.

#### Совместимость с iCloud Private Relay

В настоящее время AdGuard и iCloud Private Relay не могут работать одновременно. AdGuard не может блокировать рекламу, так как iCloud Private Relay шифрует трафик до того, как AdGuard сможет фильтровать сетевые соединения. Использование iCloud Private Relay блокирует любую фильтрацию, включая локальную. Таким образом, AdGuard не может фильтровать трафик или выполнять DNS-фильтрацию в Safari. Поэтому по умолчанию AdGuard использует "default route", который отключает iCloud Private Relay.

Для более глубокого понимания этой проблемы читайте [эту статью](../icloud-private-relay).

**Рекомендуемое решение**

Мы рекомендуем использовать AdGuard вместе с более традиционным VPN-сервисом, таким как [AdGuard VPN](https://adguard-vpn.com/).

**Альтернативное решение**

Вы можете запретить AdGuard использовать "default route", отключив последний. Это можно сделать через Расширенные настройки → `network.extension.monterey.force.split.tunnel`. Имейте в виду, что в этом случае вы столкнётесь с проблемами, описанными выше.

![Расширенные настройки *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Совместимость с Защитой конфиденциальности в Почте

Приложение Почта Apple теперь использует прокси-сервер для скрытия IP-адреса пользователя при загрузке изображений из электронных писем. Но эта функция не работает при наличии активного VPN-соединения. Поскольку AdGuard рассматривается Почтой Apple как VPN, изображения не загружаются автоматически.

Для более глубокого понимания этой проблемы читайте [эту статью](../protect-mail-activity).

**Рекомендуемое решение**

Мы рекомендуем использовать более традиционный VPN-сервис, такой как AdGuard VPN, вместо новых функций конфиденциальности Apple.

### Monterey 12, Big Sur 11.6 и более поздние версии: существующие проблемы

Эти проблемы ещё не устранены компанией Apple или устранены лишь частично.

#### Совместимость с Cisco AnyConnect

AdGuard не будет работать вместе с Cisco AnyConnect, если находится в режиме фильтрации *Network Extension*. Вам нужно переключить AdGuard в режим *Автоматический прокси*. Чтобы сделать это, следуйте [инструкции](#automatic-proxy).

#### Совместимость с Flutter

Эта проблема решена в релизе Flutter 2.2, выпущенном в июне 2021 года. Но для приложений, разработанных на Flutter, проблема остаётся актуальной до выпуска обновлений.

Если вы используете Flutter параллельно с AdGuard в режиме Network Extension (или с любым другим приложением типа Transparent Proxy) на Monterey или Big Sur, вы столкнётесь с проблемами: проекты не будут открываться, а Flutter будет фактически сломан. Мы уже сообщили Apple об этом баге. Тем временем, вы можете использовать одно из этих временных решений:

1. Используйте AdGuard в режиме [Автоматический прокси](#automatic-proxy).

1. Disable SIP and switch AdGuard to Kernel Extension mode as explained [here](#kernel-extension).

#### VPN-приложения со старым API

Несмотря на то, что AdGuard отображается в системных настройках как VPN, конфликтов с другими приложениями на основе VPN возникнуть не должно. Но если вы используете VPN-приложение, скачанное не из App Store, есть шанс, что оно использует старое VPN API. В таком случае необходимо исключить его из фильтрации:

1. Откройте меню AdGuard.
1. Выберите *Настройки...*.
1. Переключитесь на вкладку *Сеть*.
1. Кликните по кнопке *Приложения...*.
1. Найдите приложение, которое вы хотите добавить в исключения, и уберите галочку напротив него.

![Фильтруемые приложения](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Исправленные проблемы

Эти проблемы уже решены разработчиками Apple, но могут встречаться на более старых версиях macOS Big Sur.

### Совместимость с Little Snitch 5

At this moment, Network Extension mode in AdGuard isn't compatible with [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. Эта проблема вызвана багом в Big Sur, о котором мы уже проинформировали Apple. Это позволяет надеяться, что в ближайших обновлениях он будет исправлен.

It needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to [**Automatic Proxy**](#automatic-proxy) filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug.

### Совместимость с локальными прокси

:::note

Now AdGuard can filter local proxies (mostly) without any problems. If you encounter any issues in OS versions 11.1+, or if you're using Big Sur 11.0, remove the local proxy from System settings and configure an upstream proxy in AdGuard by following the instruction below.

:::

To configure an upstream proxy in AdGuard for Mac in Big Sur:

1. Open AdGuard's settings  *Preferences → Network → Outbound proxy*.
2. Choose HTTP, HTTPS, SOCKS4 or SOCKS5, depending on your proxy type.
3. Fill in the fields:
    - `host` is the IP address of your proxy server,
    - `port` is the desired port number to be used by the proxy server,
    - `user` and `password` are corresponding username and password of your proxy (if needed). Ignore either or both when not applicable.

If you run into any problems, please contact our tech support at support@adguard.com.

#### Пример 1: Настройка вышестоящего прокси Shadowsocks

Here's an example of how to configure an upstream proxy for [Shadowsocks](https://shadowsocks.org).

First of all, you need a working server side for your proxy. Most likely, to set it up, you would use a JSON file like this (`server` and `password` values were chosen randomly here):

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

You can find more information about how to get started on [Shadowsocks website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Then you'd have to install Shadowsocks client on your Mac. Make sure that you select 'Manual Mode' or 'Auto Mode' in its settings! The configuration won't work if you select 'Global Mode' (or 'Auto Mode' in Big Sur versions prior to 11.1).

![Select Manual Mode or Auto Mode in settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Now go to *AdGuard menu → Advanced → Advanced Settings...* and set the *Value* area of the `upstream.proxy` setting to `socks5://localhost:1080`. Notice that you need to use "local_port" value from the JSON file here.

Because Shadowsocks uses SOCKS5, you also need to set the value of the `upstream.proxy.socks5udp` setting in AdGuard Advanced Settings to `true` to make AdGuard route UDP traffic to the proxy server.

#### Пример 2: Настройка вышестоящего прокси Surge

В версиях Big Sur 11.1 и выше не существует известных конфликтов между AdGuard и Surge. If you are using an older version of Big Sur (prior to 11.1), check that **System Proxy** in the bottom right corner is disabled. В противном случае Surge не будет работать вместе с AdGuard. On the other hand, **Enhanced Mode** can be enabled without causing a conflict in any Big Sur version.

![Configuring an upstream Surge proxy *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Now go to *Preferences → Network → Outbound proxy* and fill in the fields. For SOCKS5 proxy type:

- `host`: localhost
- `port`: 6153 For HTTP proxy type:
- `host`: localhost
- `port`: 6152

## Альтернативы использованию Network Extension

Невозможно предвидеть все потенциальные проблемы, которые могут возникнуть в Big Sur и Monterey, ведь существует бесчисленное количество комбинаций железа, софта и настроек. Так что если вы всё же столкнётесь с какими-либо сложностями, пожалуйста, напишите нам в поддержку — но также вы можете попробовать одно из альтернативных решений.

### Использовать режим фильтрации «Автоматический прокси» {#automatic-proxy}

Если вы столкнулись с проблемами в Big Sur или Monterey, которые нельзя решить способами, описанными выше, попробуйте переключить AdGuard в режим *Автоматический прокси*.

1. Откройте меню AdGuard.
1. Выберите *Настройки...*.
1. Переключитесь на вкладку *Сеть*.
1. Click the *Select Mode...* button.
1. Select *Automatic Proxy*.

![Switch AdGuard to Automatic proxy mode](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

AdGuard автоматически добавил **.pac-файл** в сетевые настройки вашего Mac, и теперь система будет распознавать AdGuard как прокси и попытается направлять через него весь трафик.

:::note

Некоторые приложения могут игнорировать эту настройку, и тогда их трафик не будет фильтроваться.

:::

### Переключение на Kernel Extension в Big Sur и Monterey {#kernel-extension}

By default AdGuard uses Network Extension framework in Big Sur and Monterey as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:

1. Click the *Apple symbol* in the Menu bar.
1. Click *Restart…*
1. Hold down *Command-R* to reboot into Recovery Mode.
1. Click *Utilities*.
1. Select *Terminal*.
1. Type `csrutil disable`.
1. Press *Return* or *Enter* on your keyboard.
1. Click the *Apple symbol* in the Menu bar.
1. Click *Restart…*

Теперь, когда SIP отключён, выполните следующие шаги для включения Kernel Extension:

![Включить расширение Kernel](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Откройте меню AdGuard.
1. Выберите *Настройки...*.
1. Переключитесь на вкладку *Сеть*.
1. Click the *Select Mode...* button.
1. Select *Kernel Extension*.
1. Confirm that you want to switch to Kernel Extension.

:::caution

Мы рекомендуем использовать этот метод только в том случае, если все остальные не дали результата, поскольку он может привести к непредвиденным последствиям.

:::
