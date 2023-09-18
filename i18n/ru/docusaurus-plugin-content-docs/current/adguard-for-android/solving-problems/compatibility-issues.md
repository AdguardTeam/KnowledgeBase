---
title: Известные проблемы совместимости с приложениями для Android
sidebar_position: 16
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## VPN-приложения

If you are using AdGuard in the *Local VPN* filtering mode, you cannot run other VPN apps at the same time. To solve this problem, we suggest that you:

- Use [AdGuard VPN](https://adguard-vpn.com/welcome.html) — its *Integrated mode* allows two apps to operate simultaneously
- Configure your VPN app to act as an [outbound proxy](../solving-problems/outbound-proxy.md) and set up a local outbound proxy using the parameters from the third-party app
- Switch to the *Automatic proxy* mode. When you do that, AdGuard will no longer use local VPN and will reconfigure iptables instead
- Switch to the *Manual proxy* mode. To do this, go to *Settings* →  *Filtering* → *Network* → *Routing mode*

:::note Совместимость

The *Automatic proxy* mode is only accessible on rooted devices. For *Manual proxy*, rooting is required on devices running on Android 10 or later.

:::

## Приватный DNS

Функция приватного DNS была представлена в Android Pie. До версии Q приватный DNS не нарушал логику фильтрации AdGuard DNS, и переадресация DNS через AdGuard работала нормально. Но, начиная с версии Q, наличие Private DNS вынуждает приложения перенаправлять трафик через системный резолвер вместо AdGuard. Более подробную информацию можно найти [в блоге разработчиков Android](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html).

- Чтобы решить проблему с Частным DNS, используйте правило `$network`

Некоторые производители устройств скрывают настройки приватного DNS и устанавливают автоматический режим по умолчанию. Таким образом, отключить приватный DNS невозможно, но можно заставить систему думать, что upstream недействителен, заблокировав его с помощью правила `$network`. Например, если система использует Google DNS по умолчанию, мы можем добавить правила `|8.8.4.4^$network` и `|8.8.8.8^$network`, чтобы заблокировать Google DNS.

## Неподдерживаемые браузеры

### UC браузеры: UC Browser, UC Browser для x86, UC Mini, UC Browser HD

Чтобы фильтровать HTTPS-трафик, AdGuard потребует у пользователя добавить сертификат в доверенные. К сожалению, браузеры семейства UC не доверяют пользовательским сертификатам, поэтому AdGuard не может выполнять в них HTTPS-фильтрацию.

- To solve this problem, move the [certificate to the system certificate store](../solving-problems/https-certificate-for-rooted.md/)

:::note Совместимость

Требуется root-доступ.

:::

### Браузер Dolphin: Браузер Dolphin, Экспресс-браузер Dolphin

AdGuard cannot filter its traffic when operating in the *Manual proxy* mode because this browser ignores system proxy settings.

- Use the *Local VPN* filtering mode to solve this problem

### Opera mini: Opera mini, Opera mini с Яндексом

Opera mini по умолчанию пропускает трафик через прокси-сервер сжатия, а AdGuard не может распаковывать и фильтровать его одновременно.

- На данный момент решения нет

### Браузер Puffin: Браузер Puffin, Браузер Puffin Pro

Браузер Puffin по умолчанию пропускает трафик через прокси-сервер сжатия, а AdGuard не может распаковывать и фильтровать его одновременно.

- На данный момент решения нет
