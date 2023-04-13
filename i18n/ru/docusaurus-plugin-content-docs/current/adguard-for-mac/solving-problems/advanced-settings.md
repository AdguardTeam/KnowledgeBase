---
title: Гид по расширенным настройкам
sidebar_position: 9
---

## Как перейти к расширенным настройкам

> Изменение *Низкоуровневых настроек* может вызвать проблемы с производительностью AdGuard, нарушить подключение к интернету или поставить под угрозу вашу безопасность и конфиденциальность. Заходите в этот раздел, только если вы уверены в своих действиях или наша служба поддержки попросила вас об этом. Чтобы перейти на страницу *Расширенные настройки*, нажмите на иконку AdGuard в трей-меню → на иконку шестерёнки → Дополнительно → Расширенные настройки.

## Расширенные настройки

`network.extension.exclude.domains`

Перечисленные домены будут исключены из фильтрации в режиме *Сетевого расширения*. Разделяйте значения запятыми или переносом строки.

`network.extension.exclude.ports`

Перечисленные порты будут исключены из фильтрации в режиме *Сетевого расширения*. Разделяйте значения запятыми или переносом строки.

`network.extension.route.exclude`

Перечисленные маршруты будут исключены из фильтрации в режиме *Сетевого расширения*. Используйте IP-адрес или значение CIDR, чтобы задать маршрут. Разделяйте значения запятыми или переносом строки.

`network.extension.http.downgrade.bundleids`

Здесь можно задать список приложений, для которых протокол HTTP/2 будет понижен до HTTP/1.1 в режиме фильтрации *Сетевое расширение*. Идентификаторы приложений (bundle ID) разделяются запятой или переносом строки.

`network.extension.monterey.force.split.tunnel`

Здесь можно запретить AdGuard использовать маршрут по умолчанию, который включён в режиме *Сетевого расширения* на macOS Monterey. AdGuard использует маршрут по умолчанию, чтобы отключить Частный узел iCloud и Защиту конфиденциальности в Почте, так как не может работать с ними одновременно.

Более подробную информацию о проблеме вы найдёте [в этой статье](../icloud-private-relay).

`network.extension.dns.redirect.exclude.bundleids`

Здесь можно указать список приложений, осуществляющих DNS-запросы напрямую, а не через DNS-резолвер (например, некоторые VPN-клиенты или приложения с DNS-фильтрацией). Для них *в режиме Сетевого расширения* DNS-фильтрация будет отключена. Идентификаторы приложений (bundle ID) следует разделять запятой или переносом строки.

`network.dns.filter.secure.request`

Redirects secure DNS requests to a local DNS proxy, if there is one available.

`network.https.ocsp.check`

Установив значение `true`, вы включите проверку отзыва HTTPS-сертификатов.

`network.tcp.keepalive.enabled`

Periodically sends TCP packets over an idle connection to ensure that it remains active and to renew NAT timeouts.

`network.tcp.keepalive.interval.seconds`

Idle time, in seconds, before sending a keepalive probe. If 0 is specified, the system will use the default value.

`network.tcp.keepalive.timeout.seconds`

Time, in seconds, before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

`network.https.ech.enabled`

Uses a local DNS proxy to look for configs in the ECH Config Lists. If found, encrypts ClientHellos.

`network.https.enforce.certificate.transparency`

Verifies the authenticity of all certificates for the domain based on Chrome Certificate Transparency Policy.

`network.filtering.localnetwork`

Установив значение `true`, вы включите фильтрацию локальной сети.

`network.filtering.localhost`

Установив значение `true`, вы включите фильтрацию loopback-соединений.

`dns.proxy.bootstrap.ips`

Сюда можно внести IP-адреса DNS-серверов, которые будут использоваться для определения адреса зашифрованного DNS-сервера.

`dns.proxy.fallback.ips`

Здесь можно указать список IP-адресов DNS-серверов, которые будут использоваться в качестве резервных в случае, есть зашифрованный DNS-сервер не будет отвечать.

`dns.proxy.fallback.on.upstreams.failure.enabled`

Normal queries will be redirected to a fallback upstream if all normal upstreams fail.

`dns.proxy.detect.search.domains`

Эта опция включает автоопределение домена локальной сети, который будет автоматически перенаправляться на резервный DNS-сервер вместо основного.

`dns.proxy.fallback.domains`

Здесь можно перечислить домены, для которых будет использоваться резервный DNS-сервер вместо основного.

`dns.proxy.adblockrules.blocking.mode`

Здесь вы можете указать тип ответа DNS-сервера на заблокированные запросы, соответствующие правилам в стиле блокировщика рекламы.

* 0 — respond with REFUSED
* 1 — respond with NXDOMAIN
* 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.hostrules.blocking.mode`

Здесь вы можете указать тип ответа DNS-сервера на заблокированные запросы, соответствующие правилам hosts:

* 0 — respond with REFUSED
* 1 — respond with NXDOMAIN
* 2 — respond with 0.0.0.0 or the addresses specified in `dns.proxy.blocking.response.IPv4.address` and/or `dns.proxy.blocking.response.IPv6.address`

`dns.proxy.blocking.response.IPv4.address`

Здесь вы можете указать IPv4-адрес, который будет возвращаться в ответ на заблокированные "A" запросы, когда в `dns.proxy.adblockrules.blocking.mode` или в `dns.proxy.hostrules.blocking.mode` выбран тип ответа "ADDRESS".

`dns.proxy.blocking.response.IPv6.address`

Здесь вы можете указать IPv6-адрес, который будет возвращаться в ответ на заблокированные "AAAA" запросы, когда в `dns.proxy.adblockrules.blocking.mode` или в `dns.proxy.hostrules.blocking.mode` выбран тип ответа "ADDRESS".

`dns.proxy.block.AAAA.requests`

Здесь вы можете активировать блокировку DNS-запросов IPv6.

`dns.proxy.blocked.response.TTL.in.seconds`

Здесь вы можете указать значение TTL (время жизни пакета данных в протоколе IP), которое будет возвращено в ответ на заблокированный запрос.

`dns.proxy.parallel.upstream.queries.enabled`

All upstreams are queried simultaneously. The first response is returned.

`dns.proxy.servfail.on.upstreams.failure.enabled`

Responds to upstream failure with a SERVFAIL packet.

`dns.proxy.http3.enabled`

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection.

`dns.proxy.block.encrypted.client.hello.response`

Removes the Encrypted Client Hello parameters from responses.

`stealth.antidpi.http.split.fragment.size`

Adjusts the size of the HTTP request fragmentation. Accepted values: 1–1500. If an invalid size is specified, the system will use the default value.

`stealth.antidpi.clienthello.split.fragment.size`

This option specifies the size of TCP packet fragmentation, which helps avoid deep packet inspection. Accepted values: 1–1500. If an invalid size is specified, the system will use the default value.

`stealth.antidpi.http.space.juggling`

Adds extra space between the HTTP method and the URL and removes space after the "Host:" field.

`subscription.link.interception.userscript`

Активируйте эту функцию, если хотите, чтобы AdGuard автоматически перехватывал URL-адреса пользовательских скриптов и открывал диалоговое окно установки.

`subscription.link.interception.filter`

Активируйте эту функцию, если хотите, чтобы AdGuard автоматически перехватывал URL-адреса подписки (например, abp:subscribe) и открывал диалоговое окно установки пользовательского фильтра.
