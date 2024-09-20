---
title: Сеть
sidebar_position: 9
---

:::info

В этой статье рассказывается об AdGuard для Mac — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

## Основное

![Сеть](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Автоматически фильтровать трафик приложений

By default, AdGuard blocks ads and trackers in most browsers ([Tor Browser is an exception](/adguard-for-mac/solving-problems/tor-filtering)). Эта настройка позволяет AdGuard блокировать рекламу и в приложениях.

Чтобы управлять отфильтрованными приложениями, нажмите _Приложения_.

### Фильтровать HTTPS-протокол

This setting allows AdGuard to filter the secure HTTPS protocol, which is currently used by most websites and apps. By default, websites with potentially sensitive information, such as banking services, are not filtered. Чтобы управлять исключениями HTTPS, нажмите _Исключения_.

По умолчанию AdGuard не фильтрует сайты с сертификатами Extended Validation (EV). При необходимости вы можете включить опцию _Фильтровать сайты с EV-сертификатами_.

## Исходящий прокси

Вы можете настроить AdGuard так, чтобы он пропускал весь трафик устройства через прокси-сервер.

## HTTP-прокси

Вы можете использовать AdGuard в качестве HTTP-прокси-сервера. Это позволит вам фильтровать трафик на других устройствах, подключенных к прокси-серверу.

Убедитесь, что ваш Mac и другое устройство подключены к одной сети, и введите порт прокси-сервера на устройстве, которое вы хотите направить через прокси-сервер (обычно в настройках сети). Чтобы фильтровать и HTTPS-трафик, [перенесите сертификат прокси-сервера AdGuard](http://local.adguard.org/cert) на это устройство. [Узнайте больше об установке прокси-сертификата](/guides/proxy-certificate)
