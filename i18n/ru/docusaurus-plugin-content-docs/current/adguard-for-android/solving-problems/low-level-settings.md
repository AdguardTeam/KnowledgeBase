---
title: Низкоуровневые настройки
sidebar_position: 6
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

## Как получить доступ к Низкоуровневым настройкам

:::caution

Изменение *Низкоуровневых настроек* может вызвать проблемы с производительностью AdGuard, нарушить подключение к интернету или поставить под угрозу вашу безопасность и конфиденциальность. Заходите в этот раздел, только если вы уверены в своих действиях или наша служба поддержки попросила вас об этом.

:::

To go to *Low-level settings*, open the AdGuard app and tap the gear icon in the lower right corner of the screen. Then choose *General → Advanced → Low-level settings*.

## Низкоуровневые настройки

For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others.

### DNS-защита

#### Резервные серверы

Здесь вы можете указать резервный DNS-резолвер, который будет использоваться, если настроенный сервер недоступен. There are three options: *Automatic DNS*, *None*, and *Custom DNS*. If no fallback server is specified, the *Automatic DNS* — the system DNS or AdGuard DNS — will be used. *None* means no fallback at all. Selecting *Custom DNS* allows you to list IPv4 and IPv6 server addresses to use as upstreams.

#### Резервные домены

Здесь вы можете перечислить домены, которые будут перенаправлены напрямую на резервные апстримы, если они существуют.

#### Обнаруживать search-домены

If this option is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams.

#### Bootstrap DNS-серверы

Загрузочный DNS для серверов DoH, DoT и DoQ. The *Automatic DNS* - the system DNS or AdGuard DNS - is used by default. By selecting *Custom DNS*, you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams.

#### Режим блокировки для правил adblock

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for instance, `||example.org^`).

*  Отвечать кодом REFUSED (по умолчанию)
*  Отвечать кодом NXDOMAIN
*  Отвечать пользовательским IP-адресом (здесь можно указать адреса IPv4 и IPv6)

#### Режим блокировки для правил hosts

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, `<ip> <domain> 0.0.0.0 example.com`).

*  Отвечать кодом REFUSED
*  Отвечать кодом NXDOMAIN
*  Отвечать пользовательским IP-адресом (здесь можно указать адреса IPv4 и IPv6) — по умолчанию

#### Время ожидания DNS-запроса

В этом поле вы можете указать время в миллисекундах, в течение которого AdGuard будет ждать ответа от выбранного DNS-сервера, прежде чем прибегнуть к резервному. Если вы не заполните это поле или введёте недопустимое значение, будет использовано значение 5000.

#### Заблокированный ответ TTL

Здесь вы можете указать значение TTL (время жизни пакета данных в протоколе IP), которое будет возвращено в ответ на заблокированный запрос.

#### Размер кеша DNS

Here you can specify the maximum number of cached responses. Значение по умолчанию — 1000.

#### Блокировка ECH

Если опция включена, AdGuard удаляет из DNS-ответов параметры Encrypted Client Hello.

#### Игнорировать недоступный исходящий прокси-сервер

Enable this feature to make AdGuard send DNS requests directly if the outbound proxy is unavailable.

#### Пробовать HTTP/3 для upstream-серверов DNS-over-HTTPS

By default, all DNS requests for DNS-over-HTTPS are sent via HTTP/2 protocol. If enabled, AdGuard uses HTTP/3 to speed up DNS query resolution for DoH upstreams.

#### Отвечать на ошибку кодом SERVFAIL

Once enabled, AdGuard sends a SERVFAIL response to the client if all upstreams, including fallback ones, fail to reply. When this setting is disabled, no response is sent to the client.

#### Использовать резервный сервер для нерезервных доменов

Enable this feature if you want AdGuard to use fallback upstream for all domains. Otherwise, fallback upstream will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Проверять upstream-серверы DNS

Включите, чтобы AdGuard мог проверять upstream-серверы DNS перед добавлением или обновлением пользовательских DNS-серверов.

### Фильтрация

#### Записывать HAR

Здесь вы можете включить захват файла HAR. Используйте его только для целей отладки! Если настройка включена, AdGuard создаст папку har в кеш-директории приложения. Она будет содержать информацию обо всех отфильтрованных HTTP-запросах в формате HAR 1.2, и её можно будет проанализировать с помощью программы Fiddler.

### HTTPS-фильтрация

#### Encrypted Client Hello

У каждого зашифрованного интернет-соединения есть незашифрованная часть. Это самый первый пакет, который содержит имя сервера, к которому вы подключаетесь. Технология Encrypted Client Hello должна решить эту проблему и зашифровать последний бит незашифрованной информации. Чтобы воспользоваться ей, включите опцию *Использовать Encrypted Client Hello*. It uses a local DNS proxy to look for the ECH configuration for the domain. Если она найдена, пакет ClientHello будет зашифрован.

#### Проверка OCSP

Если эта опция включена, она запускает асинхронные проверки OCSP, чтобы проверить, не отозван ли SSL/TLS-сертификат сайта.

Если проверка OCSP завершается в течение минимального тайм-аута, AdGuard немедленно заблокирует соединение, если сертификат отозван, или установит соединение, если сертификат действителен.

Если проверка занимает слишком много времени, AdGuard установит соединение и продолжит проверку в фоновом режиме. Если сертификат отозван, текущие и будущие подключения к домену будут заблокированы.

#### Перенаправлять запросы DNS-over-HTTPS

IF enabled, DNS-over-HTTPS requests will be redirected to the DNS Protection module. We recommend disabling fallback upstreams and use only encrypted DNS servers to maintain privacy.

### Исходящий прокси

#### Показывать настройку «Фильтровать DNS-запросы»

When this feature is enabled, the string *Filter DNS requests* appears in the *Settings ➝ Filtering ➝ Network ➝ Proxy ➝ Proxy server ➝ Add proxy server* section with the switch next to it. By toggling the switch, you can enable filtering of DNS requests passing through the proxy.

### Защита

#### Диапазоны портов

Here you can specify port ranges that should be filtered.

#### Фиксировать удаление HTML-элементов

If enabled, AdGuard records blocked HTML elements in the filtering log.

#### Отладка скриптлетов

If you need to activate debugging of scriptlets, enable this feature. Then there will be messages in the browser log that some scriplet rules have been applied.

#### Исключённые приложения

Here you can list package names and UIDs that you want to exclude from AdGuard protection.

#### Пакеты для обхода QUIC

Here you can specify package names for which AdGuard should bypass QUIC traffic.

#### Перенастраивать Автоматический прокси при изменении сети

Enable this setting if you want the protection to restart to reconfigure the automatic proxy settings when the device connects to another network. The state of this setting affects operation only if the current routing mode is Automatic proxy.

#### Фильтрация IPv6

Фильтрует сети IPv6 при наличии IPv6-интерфейсов.

#### Диапазоны IPv4-адресов, исключённые из фильтрации

Filtering for IPv4 ranges, listed in this section, will be disabled.

#### Диапазоны IPv6-адресов, исключённые из фильтрации

Filtering for IPv6 ranges, listed in this section, will be disabled.

#### TCP keepalive для исходящих сокетов

If enabled, AdGuard sends a keepalive probe after the specified time period to ensure if the TCP connection is alive. Here you can specify the TCP keepalive idle time before starting keepalive probes and time between keepalive probes for an unresponsive peer.

After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection.

### Настройки локального VPN

#### Время ожидания для остановленного VPN

Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. Значение по умолчанию — 5000 мс.

#### Задержка для восстановления отключённого VPN

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. Значение по умолчанию — 5000 мс.

#### MTU

Здесь вы можете установить максимальное значение передачи данных MTU через VPN. Рекомендуемый диапазон: 1500–1900 байт.

#### Автоматически возобновлять работу VPN

If enabled, this feature automatically re-enables AdGuard’s local VPN after it has been turned off due to network absence, tethering, or low-power mode.

#### Захват пакетов (PCAP)

If enabled, AdGuard will create the special file name `timestamp.pcap` (for instance, 1682599851461.pcap). Он содержит все сетевые пакеты, передаваемые через VPN. Этот файл находится в папке кэша приложения и может быть проанализирован с помощью программы Wireshark.

#### Включить шлюз Wi-Fi в маршруты VPN

If you want the gateway IP addresses to be added to VPN routes when on Wi-Fi, enable this feature.

#### IPv4-адрес

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `172.18.11.218`.

#### Принудительно маршрутизировать LAN IPv4

When enabled, AdGuard filters all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Маршрутизировать все IPv4-подключения в локальной сети

Once enabled, AdGuard excludes LAN connections from filtering for simple networks. Может не работать для сложных сетей. Works only with the *Forcibly route LAN IPv4* option disabled.

#### IPv6-адрес

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `2001:db8:ad:0:ff::`.

### Разное

#### Обнаруживать Samsung Pay

Korean users may encounter issues with Samsung Pay when AdGuard is enabled. Activate this feature to pause AdGuard's protection and use the Samsung Pay app seamlessly.
