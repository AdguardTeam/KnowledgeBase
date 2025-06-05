---
title: Низкоуровневые настройки
sidebar_position: 5
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

## Как получить доступ к Низкоуровневым настройкам

:::caution

Изменение <em x-id="3">Низкоуровневых настроек</em> может вызвать проблемы с производительностью AdGuard, нарушить подключение к интернету или поставить под угрозу вашу безопасность и конфиденциальность. Открывайте этот раздел, только если вы знаете, что делаете, или если вас попросила об этом наша команда поддержки.

:::

To access _Low-level settings_, open the AdGuard app and tap the gear icon in the lower-right corner of the screen. Then select _General → Advanced → Low-level settings_.

## Низкоуровневые настройки

For AdGuard v4.x for Android we’ve completely redesigned the low-level settings. Мы внесли изменения в список настроек и разбили их на тематические группы с улучшенными описаниями. Мы также добавили проверку ввода и другие защитные механизмы.

### DNS-защита

#### Резервные серверы

Здесь вы можете указать резервный DNS-резолвер, который будет использоваться, если настроенный сервер недоступен. Доступные варианты:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS.
- _None_: Select this option if you do not want to have any fallback.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Эти адреса будут использованы как upstream-серверы.

#### Резервные домены

Здесь можно перечислить домены, которые будут перенаправлены на резервные upstream-серверы, если они доступны. Вы можете ввести несколько доменов, по одному в строке. Использование подстановочных знаков ограничено.

#### Обнаруживать search-домены

Если эта настройка включена, AdGuard будет определять search-домены и автоматически перенаправлять их на резервные upstream-серверы.

#### Bootstrap DNS-серверы

Bootstrap DNS для зашифрованных upstream DNS-серверов, таких как DoH, DoT и DoQ. Доступные варианты:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS. Этот параметр выбран по умолчанию.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Эти адреса будут использованы как bootstrap upstream-серверы.

#### Режим блокировки для правил adblock

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for example, `||example.org^`). Доступные варианты:

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Потребуется ввести IPv4-адрес для блокированных A-запросов и IPv6-адрес для блокированных AAAA-запросов.

#### Режим блокировки для правил hosts

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax
(for example, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Потребуется ввести IPv4-адрес для блокированных A-запросов и IPv6-адрес для блокированных AAAA-запросов.

#### Время ожидания DNS-запроса

Здесь вы можете указать время ожидания в миллисекундах для каждого DNS-запроса. AdGuard будет выдерживать указанный промежуток времени, прежде чем перенаправить запрос на резервный DNS-резолвер. Если вы не заполните это поле или введёте некорректное значение, будет использовано значение 5000 мс.
Если у вас несколько upstream-серверов, резервный DNS будет использоваться только после окончания времени ожидания для каждого upstream-сервера.

#### TTL заблокированного ответа

Здесь вы можете установить время жизни (TTL) записи для заблокированных доменов. Значение по умолчанию — 3600 секунд.

#### Размер кеша DNS

Здесь вы можете указать максимальное количество кешируемых ответов. Значение по умолчанию — 1000.

#### Блокировка ECH

If this setting is enabled, AdGuard will block TLS Encrypted Hello (ECH) in DNS responses.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DNS-over-HTTPS upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### SERVFAIL failure response

If this setting is enabled, AdGuard will send a SERVFAIL response to the client if all upstreams, including the fallback ones, fail to reply. If this setting is disabled, no response will be sent to the client in such a case.

#### Use fallback for all domains

If this setting is enabled, AdGuard will use fallback upstreams for all domains, including non-fallback ones. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validate DNS upstreams

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

#### Filter secure DNS

If this setting is enabled, AdGuard will filter encrypted DNS requests in addition to plain DNS requests. Encrypted DNS traffic mostly comes from Chrome and other browsers that have a secure DNS setting.

This setting has two modes:

- **Filter on the fly**. In this mode, AdGuard will filter DNS-over-HTTPS traffic without redirecting it to the local DNS proxy. It will use the DNS server specified in the browser settings.

- **Redirect to DNS proxy**. In this mode, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy for filtering. It will use the DNS server selected in the DNS settings of the AdGuard app.

### Фильтрация

#### Capture HAR

If this setting is enabled, AdGuard will log all filtered HTTP requests in HAR 1.2 format to the “har” subdirectory in the app cache directory. These files can be analyzed with the Fiddler tool.

This setting may slow down your device. Use it for debugging purposes only.

### HTTPS-фильтрация

#### Encrypted Client Hello

If this setting is enabled, AdGuard will encrypt ClientHellos, if necessary. This feature requires HTTPS filtering to be enabled. This feature uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, the ClientHello packet will be encrypted. Make sure to use an encrypted DNS server with this feature.

**About ClientHellos and ECH**: Every encrypted Internet connection has an unencrypted part. This is the very first packet that contains the name of the server you are connecting to. Encrypted Client Hello technology is designed to solve this problem by encrypting this packet.

#### OCSP checking

If this setting is enabled, AdGuard will automatically check the revocation status of SSL certificates before connecting to a website. This feature requires HTTPS filtering to be enabled.

If the check is completed within the required timeout, AdGuard will  allow the connection if the certificate is valid or immediately block the connection if the certificate is revoked.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Если сертификат отозван, текущие и будущие подключения к домену будут заблокированы.

#### Фильтровать HTTP/3

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types. This feature requires HTTPS filtering to be enabled.

**About HTTP/3**: This is the latest version of the HTTP protocol, based on QUIC.

### Исходящий прокси

#### Show the Filter DNS requests setting

When this setting is enabled, the _Filter DNS requests_ switch is displayed in the _Add proxy server_ dialog. To access the dialog, open **Settings**, then go to **Filtering** → **Network** → **Proxy** → **Proxy server**, and click _+ Add proxy server_. Turning on that switch enables filtering of DNS requests passing through the specified outbound proxy.

### Защита

#### Port ranges

This setting allows you to specify the port ranges that should be filtered. Enter port ranges, one range per line. Use `..` to specify the range. For example, `80..5221`.

#### Log removed HTML events

If this setting is enabled, AdGuard will write information about blocked HTML elements to _Recent activity_. To access the logs, go to go to **Statistics** → **Recent activity**.

#### Scriptlet debugging

If this setting is enabled, the app will display debugging information in the browser console. In this mode, debugging in scriptlets is activated, and the browser logs the events that occur when applying scriptlet rules are applied.

#### Excluded apps

This setting allows you to list the packages and UIDs to exclude from AdGuard protection. Enter package names or UIDs, one per line. You can use `//` for comments.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic. Enter package names, one per line. You can use `//` for comments.

#### Reconfigure Automatic proxy when network changes

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy parameters when your device connects to another network. This setting only applies when _Routing mode_ is set to _Automatic proxy_.

#### IPv6 filtering

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Here you can list the IPv4 ranges to exclude from filtering. Enter one IP range per line. You can use `//` for comments.

#### IPv6 ranges excluded from filtering

Here you can list the IPv6 ranges to exclude from filtering. Enter one IP range per line. You can use `//` for comments.

#### TCP keepalive for outgoing sockets

If this setting is enabled, AdGuard will send a keepalive probe after the specified time interval to ensure that the TCP connection is still alive. After a system-defined number of unsuccessful attempts to get a response from the server, the system will automatically close the TCP connection.

This setting allows you to specify:

- **Idle time**, in seconds, before sending TCP keepalive probes to outgoing sockets. The default value is 0. If you are having problems with NAT, set this to 20.
- **Time between keepalive probes** for an unresponsive peer. The default value is 0 seconds.

### Настройки локального VPN

#### Recovery delay for revoked VPN

Here you can set the delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. This is the maximum size of the data packet used in your local VPN. The recommended range is 1500-1900 bytes.

#### Restore VPN automatically

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Packet capture (PCAP)

This setting enables logging of TUN interfaces. When enabled, AdGuard creates a file `timestamp.pcap`, such as  1682599851461.pcap, in the app cache directory. This file lists all network packets transmitted through the VPN and can be analyzed using the Wireshark tool.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when the device is on Wi-Fi.

#### IPv4 address

Here you can specify the IP address that will be used to create a TUN interface. The default value is `172.18.11.218`.

#### Forcibly route LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the _Route all LAN IPv4 connections_ option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if _Forcibly route LAN IPv4_ is disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. The default value is `2001:db8:ad:0:ff::`.

### Разное

#### Show Developer tools on the main screen

If this setting is enabled, AdGuard will display the **Developer tools** icon in the upper right corner of the app’s home screen.

**Developer tools** is a specialized section available in AdGuard for Android v4.3 and later, designed for quick navigation and switching between features. It allows you to quickly enable or disable custom filters, access logs, enable various logs, and more.

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused when you open the Samsung Pay app. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
