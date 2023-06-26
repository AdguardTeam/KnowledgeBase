---
title: Проблемы совместимости с различными версиями macOS
sidebar_position: 4
---

:::info

This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

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

This problem is solved in Flutter 2.2, released in June 2021. But to fix it for applications developed in Flutter, you need to wait for updates.

If you use Flutter alongside AdGuard in "Network Extension" mode (or any other "Transparent Proxy"-type app) in Monterey or Big Sur, you will run into problems: projects won't open and Flutter will be effectively broken. We have already reported this bug to Apple. Meanwhile, you can use these temporary solutions:

1) Use AdGuard in [Automatic Proxy](#automatic-proxy) mode.

2) Disable SIP and switch AdGuard to Kernel Extension mode as explained [here](#kernel-extension).

#### VPN-приложения со старым API

Despite AdGuard is displayed as a VPN in system settings, it shouldn't cause any conflicts when working alongside other VPN-based apps. However, if you're using a VPN-based app that was downloaded from outside App Store, there's a chance it uses the old VPN API and you have to exclude it from filtering:

1) Open AdGuard's menu. 2) Select *Preferences...*. 3) Switch to the *Network* tab. 4) Click the *Applications...* button. 5) Find the app you want to exclude and uncheck the checkbox next to it.

![Filtered applications](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Исправленные проблемы

These problems have been fixed by Apple by now but can be encountered in the older versions of macOS Big Sur.

### Совместимость с Little Snitch 5

At this moment, Network Extension mode in AdGuard isn't compatible with [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a chance to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. This problem is directly caused by a bug in Big Sur, and we've already informed Apple about it. This leaves us to believe that this issue will get resolved in one of the next updates.

It needs to be said that this problem can't be solved by disabling connections monitoring in Little Snitch, because this action doesn't unload Little Snitch's extension from the system. We recommend to switch to [**Automatic Proxy**](#automatic-proxy) filtering mode when running AdGuard alongside with Little Snitch on Big Sur, at least until Apple fixes the bug.

### Совместимость с локальными прокси

:::note

Now AdGuard can filter local proxies (mostly) without any problems. Если вы всё же столкнулись с какими-либо трудностями на OS 11.1 и выше или если вы используете Big Sur 11.0, уберите локальный прокси из системных настроек и настройте вышестоящий прокси в AdGuard, следуя инструкции ниже.

:::

Чтобы настроить вышестоящий прокси в AdGuard для Mac на Big Sur, перейдите в *Меню AdGuard → Дополнительно → Расширенные настройки...*. Кликните по области *Значение* настройки `upstream.proxy`, чтобы настроить прокси.

![Настройки прокси в AdGuard for Mac на Big Sur](https://cdn.adtidy.org/content/kb/ad_blocker/mac/proxy_en.jpg)

Введите строку вида `scheme://user:password@host:port`, где

* `scheme` имеет значение `http`, `https`, `socks4` или `socks5`, в зависимости от типа прокси,

Если вы используете тип прокси `socks5`, установите значение настройки `upstream.proxy.socks5udp` как `true`, чтобы AdGuard направлял UDP-трафик через прокси-сервер.

* `user` и `password` — имя пользователя и пароль от вашего прокси соответственно (если требуются). Игнорируйте эти параметры, если один или оба не применимы к данному прокси,
* `host` — IP-адрес вашего прокси-сервера,
* `port` — желаемый номер порта, который будет использоваться прокси-сервером.

:::note Example

`socks5://localhost:6322` will configure a SOCKS5 local proxy that listens to port 6322 and doesn't require a username or a password.

:::

Нажмите *Применить*, чтобы заставить AdGuard пересылать весь трафик через настроенный прокси-сервер.

Если у вас возникли трудности, напишите в поддержку: support@adguard.com.

#### Пример 1: Настройка вышестоящего прокси Shadowsocks

Здесь на примере [Shadowsocks](https://shadowsocks.org) проиллюстрирована настройка вышестоящего прокси в AdGuard.

Прежде всего, вам потребуется настроить работу серверной части прокси. Вероятнее всего, для этого вы будете использовать JSON-файл наподобие этого (значения полей `server` и `password` здесь выбраны случайным образом):

```
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

Подробнее почитать о том, как начать работать с Shadowsocks, можно [на их сайте](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Затем надо установить клиент Shadowsocks на Mac. Убедитесь, что вы выбрали Ручной или Автоматический режим в настройках. Конфигурация с Global Mode работать не будет. В версиях Big Sur ниже 11.1 также не будет работать Автоматический режим.

![Выберите Ручной или Автоматический режим в настройках *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Перейдите в *Меню AdGuard → Дополнительно → Расширенные настройки...* и впишите в поле *Значение* настройки `upstream.proxy` строку `socks5://localhost:1080`. Обратите внимание, что здесь необходимо использовать значение "local_port" из JSON-файла, упомянутого выше.

Поскольку Shadowsocks использует SOCKS5, вам также понадобится изменить значение настройки `upstream.proxy.socks5udp` в Расширенных настройках AdGuard на `true`, чтобы AdGuard направлял UDP-трафик вашего Mac через прокси-сервер.

#### Пример 2: Настройка вышестоящего прокси Surge

В версиях Big Sur 11.1 и выше не существует известных конфликтов между AdGuard и Surge. Если вы используете более старую версию Big Sur, убедитесь, что в правом нижнем углу отключён **системный прокси**. В противном случае Surge не будет работать вместе с AdGuard. С другой стороны, **Enhanced Mode** включать можно на любой версии системы, он не вызовет конфликтов.

![Настройка вышестоящего прокси Surge *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/surge.jpg)

Теперь перейдите в *Меню AdGuard → Дополнительно → Расширенные настройки...* и впишите в поле *Значение* настройки `upstream.proxy` строку `socks5://localhost:6153` или `http://localhost:6152`, в зависимости от типа прокси, который вы хотите использовать. Обратите внимание, что нужно использовать значение **port**, указанное в разделе **Events** вкладки **Activity** в вашем клиенте Surge.

Если вы выбрали протокол SOCKS5, измените значение настройки `upstream.proxy.socks5udp` в Расширенных настройках AdGuard на `true`, чтобы AdGuard мог пропускать UDP-трафик через прокси-сервер.

## Альтернативы использованию Network Extension

Невозможно предвидеть все потенциальные проблемы, которые могут возникнуть в Big Sur и Monterey, ведь существует бесчисленное количество комбинаций железа, софта и настроек. Так что если вы всё же столкнётесь с какими-либо сложностями, пожалуйста, напишите нам в поддержку — но также вы можете попробовать одно из альтернативных решений.

### Использовать режим фильтрации «Автоматический прокси» {#automatic-proxy}

Если вы столкнулись с проблемами в Big Sur или Monterey, которые нельзя решить способами, описанными выше, попробуйте переключить AdGuard в режим *Автоматический прокси*.

1) Open AdGuard's menu. 2) Select *Preferences...*. 3) Switch to the *Network* tab. 4) Кликните по кнопке *Выбрать режим...*. 5) Выберите *Автоматический прокси*.

![Переключите AdGuard в режим «Автоматический прокси»](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

AdGuard автоматически добавил **.pac-файл** в сетевые настройки вашего Mac, и теперь система будет распознавать AdGuard как прокси и попытается направлять через него весь трафик.

:::note

Some apps may ignore this system setting and their traffic will not be filtered.

:::

### Переключение на Kernel Extension в Big Sur и Monterey {#kernel-extension}

По умолчанию на Big Sur и Monterey AdGuard использует фреймворк Network Extension, так как старый фреймворк Kernel Extension там отключён. Это может вызывать проблемы совместимости, но чтобы включить Kernel Extension обратно, вам сначала потребуется отключить системную настройку безопасности (System Integrity Protection, или SIP). Чтобы отключить SIP, следуйте этой инструкции:

1) Кликните по *символу Apple* в строке меню. 2) Кликните *Перезагрузить…* 3) Зажмите *Command-R*, чтобы запустить систему в режиме восстановления. 4) Кликните по кнопке *Утилиты*. 5) Выберите *Терминал*. 6) Вбейте в появившемся окне `csrutil disable`. 7) Нажмите на клавиатуре клавишу *Return* или *Enter*. 8) Кликните по *символу Apple* в строке меню. 9) Кликните *Перезагрузить…*

Теперь, когда SIP отключён, выполните следующие шаги для включения Kernel Extension:

![Включить расширение Kernel](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1) Open AdGuard's menu. 2) Select *Preferences...*. 3) Switch to the *Network* tab. 4) Кликните по кнопке *Выбрать режим...*. 5) Выберите *Расширение Kernel*. 6) Подтвердите, что хотите переключиться на него.

:::caution

Мы рекомендуем использовать этот метод только в том случае, если все остальные не дали результата, поскольку он может привести к непредвиденным последствиям.

:::
