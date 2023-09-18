---
title: Low-level settings guide
sidebar_position: 6
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## How to reach Low-level settings

:::caution

Изменение *Низкоуровневых настроек* может вызвать проблемы с производительностью AdGuard, нарушить подключение к интернету или поставить под угрозу вашу безопасность и конфиденциальность. Заходите в этот раздел, только если вы уверены в своих действиях или наша служба поддержки попросила вас об этом.

:::

Чтобы перейти к *Низкоуровневым настройкам*, откройте приложение AdGuard и коснитесь значка шестерёнки в правом нижнем углу экрана. Затем выберите *Общие → Дополнительные → Низкоуровневые настройки*.

## Низкоуровневые настройки

В AdGuard 4.0 для Android мы полностью переработали низкоуровневые настройки: разделили их на тематические блоки, сделали более понятными, добавили проверку введённых значений и другие меры предосторожности, избавились от одних настроек и добавили другие.

### DNS-защита

#### Резервные серверы

Здесь вы можете указать резервный DNS-резолвер, который будет использоваться, если настроенный сервер недоступен. Существует три варианта: *Автоматический DNS*, *Отсутствует* и *Пользовательский DNS*. Если резервный сервер не указан, то будет использоваться *Aвтоматический DNS* — системный DNS-сервер или AdGuard DNS. *Отсутствует* означает отсутствие запасного варианта. Выбирая *Пользовательский DNS*, вы можете использовать IPv4- и IPv6-адреса в качестве upstream-серверов.

#### Резервные домены

Здесь вы можете перечислить домены, которые будут перенаправлены напрямую на резервные апстримы, если они существуют.

#### Обнаруживать search-домены

If this setting is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams.

#### Bootstrap DNS-серверы

Загрузочный DNS для серверов DoH, DoT и DoQ. По умолчанию используется *Автоматический DNS* — системный DNS-сервер или AdGuard DNS. Выбирая *Пользовательский DNS*, вы можете использовать IPv4- и IPv6-адреса в качестве upstream-серверов.

#### Режим блокировки для правил adblock

Здесь можно указать тип ответа для доменов, блокируемых правилами DNS на основе синтаксиса правил adblock (например, `||example.org^`).

- Отвечать кодом REFUSED
- Отвечать кодом NXDOMAIN
- Отвечать пользовательским IP-адресом (здесь можно указать адреса IPv4 и IPv6)

#### Режим блокировки для правил hosts

Здесь можно указать тип ответа для доменов, блокируемых правилами DNS на основе синтаксиса правил hosts (например, `<ip> <domain> 0.0.0.0 example.com`).

- Отвечать кодом REFUSED
- Отвечать кодом NXDOMAIN
- Отвечать пользовательским IP-адресом (здесь можно указать адреса IPv4 и IPv6)

#### Время ожидания DNS-запроса

В этом поле вы можете указать время в миллисекундах, в течение которого AdGuard будет ждать ответа от выбранного DNS-сервера, прежде чем прибегнуть к резервному. Если вы не заполните это поле или введёте недопустимое значение, будет использовано значение 5000.

#### Заблокированный ответ TTL

Здесь вы можете указать значение TTL (время жизни пакета данных в протоколе IP), которое будет возвращено в ответ на заблокированный запрос.

#### Размер кеша DNS

Здесь вы можете указать максимальное количество кешируемых ответов. Значение по умолчанию — 1000.

#### Блокировка ECH

Если опция включена, AdGuard удаляет из DNS-ответов параметры Encrypted Client Hello.

#### Игнорировать недоступный исходящий прокси-сервер

If this setting is enabled, AdGuard will send DNS requests directly when the outbound proxy is unavailable.

#### Пробовать HTTP/3 для upstream-серверов DNS-over-HTTPS

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DoH upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### Отвечать на ошибку кодом SERVFAIL

If this setting is enabled and all upstreams, including fallback ones, fail to respond, AdGuard will send a SERVFAIL response to the client.

#### Использовать резервный сервер для нерезервных доменов

If this setting is enabled, AdGuard will use fallback upstreams for all domains. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Проверять upstream-серверы DNS

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

### Фильтрация

#### Записывать HAR

If this setting is enabled, AdGuard will capture HAR files. It will create a directory named "har" inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.

Use it only for debugging purposes!

### HTTPS-фильтрация

#### Encrypted Client Hello

У каждого зашифрованного интернет-соединения есть незашифрованная часть. Это самый первый пакет, который содержит имя сервера, к которому вы подключаетесь. Технология Encrypted Client Hello должна решить эту проблему и зашифровать последний бит незашифрованной информации. Чтобы воспользоваться ей, включите опцию *Использовать Encrypted Client Hello*. Она использует локальный DNS-прокси для поиска ECH-конфигурации для домена. Если она найдена, пакет ClientHello будет зашифрован.

#### Проверка OCSP

If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Если сертификат отозван, текущие и будущие подключения к домену будут заблокированы.

#### Перенаправлять запросы DNS-over-HTTPS

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy.

#### Filter HTTP/3

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

### Outbound proxy

#### Показывать настройку «Фильтровать DNS-запросы»

If this is enabled, the *Filter DNS requests* switch will be displayed in the *Add proxy server* dialog. Use it to enable filtering of DNS requests passing through the specified proxy.

### Защита

#### Диапазоны портов

Здесь вы можете указать диапазоны портов, которые должны быть отфильтрованы.

#### Фиксировать удаление HTML-элементов

If this setting is enabled, AdGuard will record blocked HTML elements in *Recent activity*.

#### Отладка скриптлетов

If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied.

#### Исключённые приложения

Здесь вы можете перечислить имена пакетов и UID, которые вы хотите исключить из защиты AdGuard.

#### Пакеты для обхода QUIC

Здесь вы можете указать имена пакетов, для которых AdGuard должен обходить трафик QUIC.

#### Перенастраивать Автоматический прокси при изменении сети

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if *Routing mode* is set to *Automatic proxy*.

#### Фильтрация IPv6

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### Диапазоны IPv4-адресов, исключённые из фильтрации

Filtering for the IPv4 ranges listed in this section is disabled.

#### Диапазоны IPv6-адресов, исключённые из фильтрации

Filtering for the IPv6 ranges listed in this section is disabled.

#### TCP keepalive для исходящих сокетов

If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer.

После заданного системой количества неудачных попыток получить ответ от сервера система автоматически закрывает TCP-соединение.

### Настройки локального VPN

#### Время ожидания для остановленного VPN

Здесь вы можете установить время задержки в миллисекундах, прежде чем AdGuard попытается восстановить VPN-защиту после её отзыва сторонним VPN-приложением или удалением VPN-профиля. The default value is 5000 ms.

#### Задержка для восстановления отключённого VPN

Здесь вы можете установить время задержки в миллисекундах, прежде чем AdGuard перенесёт восстановление VPN-защиты после того, как она была отозвана сторонним VPN-приложением или путём удаления VPN-профиля. The default value is 5000 ms.

#### MTU

Здесь вы можете установить максимальное значение передачи данных MTU через VPN. Рекомендуемый диапазон: 1500–1900 байт.

#### Автоматически возобновлять работу VPN

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Захват пакетов (PCAP)

If this setting is enabled, AdGuard will create a file `timestamp.pcap` (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program.

#### Включить шлюз Wi-Fi в маршруты VPN

If this setting is enabled, the gateway IP addresses will be added to to VPN routes when on Wi-Fi.

#### IPv4-адрес

Здесь вы можете ввести IP-адрес, который будет использоваться для создания интерфейса TUN. По умолчанию это `172.18.11.218`.

#### Принудительно маршрутизировать LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Маршрутизировать все IPv4-подключения в локальной сети

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### IPv6-адрес

Здесь вы можете ввести IP-адрес, который будет использоваться для создания интерфейса TUN. По умолчанию это `2001:db8:ad:0:ff::`.

### Разное

#### Обнаруживать Samsung Pay

If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
