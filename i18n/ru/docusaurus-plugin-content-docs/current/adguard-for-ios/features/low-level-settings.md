---
title: Низкоуровневые настройки
sidebar_position: 6
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

![Low-level settings \*mobile\_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

To open the _Low-level settings_, go to _Settings_ → _General_ → (Enable _Advanced mode_ if it's off) → _Advanced settings_ → _Low-level settings_.

В основном, настройки этого раздела лучше не трогать: используйте их, только если уверены в том, что делаете, или если об этом попросила команда поддержки. Однако некоторые настройки можно изменять самостоятельно.

### Block IPv6 {#blockipv6}

На любой запрос к DNS-серверу на получение IPv6-адреса наше приложение возвращает пустой ответ, как будто этого адреса не существует. Новая функция позволяет не возвращать IPv6-адреса. Её дальнейшее описание получится слишком техническим: всё-таки настройка или отключение IPv6 — это исключительная прерогатива продвинутых пользователей. Если вы один из них, то наверняка и так знаете, что это за функция, если нет — то и нет необходимости погружаться в эти детали.

### Bootstrap and Fallback servers {#bootstrap-fallback}

Fallback — это резервный DNS-сервер. Если вы выбрали DNS-сервер и с ним что-то случилось, необходим такой запасной вариант, который будет использоваться, пока не отвечает основной.

С Bootstrap чуть сложнее. Чтобы AdGuard для iOS мог использовать кастомный защищённый DNS-сервер, наше приложение должно сначала получить его IP-адрес. Для этой цели по умолчанию используется системный DNS, но иногда это невозможно по разным причинам. В таких случаях для получения IP-адреса выбранного DNS-сервера можно использовать Bootstrap. Вот два примера случаев, когда кастомный Bootstrap-сервер может помочь:

1. Когда системный DNS-сервер, выбранный по умолчанию, не возвращает IP-адрес защищённого DNS-сервера и последний невозможно использовать.
2. Когда наше приложение и сторонний VPN используются одновременно и невозможно использовать системный DNS в качестве Bootstrap.
