---
title: Расширенные (низкоуровневые) настройки
sidebar_position: 7
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Ранее известные как низкоуровневые настройки, расширенные настройки содержат параметры, которые выходят за рамки компетенции среднего пользователя и не находят применения в повседневном использовании. AdGuard для Windows функционирует без необходимости изменять любой из низкоуровневых параметров. Однако они предоставляют дополнительные возможности в некоторых сложных ситуациях или при решении нестандартных проблем.

:::caution

Изменение *Расширенных настроек* может вызвать проблемы с производительностью AdGuard, нарушить подключение к интернету или поставить под угрозу вашу безопасность и конфиденциальность. Вносить изменения в эти настройки следует только в том случае, если вы уверены в том, что делаете, или если об этом вас попросила наша служба поддержки.

:::

## Как перейти к Расширенным настройкам

Чтобы попасть в *Расширенные настройки*, на главном экране откройте *Настройки → Основные настройки* и прокрутите вниз до *Расширенных настроек*. Или выберите *Расширенные → Расширенные настройки...* в трей-меню.

## Расширенные настройки

После того как вы откроете Расширенные настройки, вам будут представлены следующие опции:

### Блокировать TCP Fast Open

Если эта функция включена, AdGuard будет блокировать TCP Fast Open в браузере Edge. Чтобы применить настройки, необходимо перезапустить браузер.

### Использовать Encrypted Client Hello

У каждого зашифрованного интернет-соединения есть незашифрованная часть. Это самый первый пакет, который содержит имя сервера, к которому вы подключаетесь. Технология Encrypted Client Hello должна решить эту проблему и зашифровать последний бит незашифрованной информации. Чтобы воспользоваться ей, включите опцию *Использовать Encrypted Client Hello*. Она использует локальный DNS-прокси для поиска ECH-конфигурации для домена. Если она найдена, пакет Client Hello будет зашифрован.

### Проверять прозрачность сертификатов сайтов

Проверяет подлинность всех сертификатов для домена на основе политики прозрачности сертификатов Chrome. Если сертификат не соответствует политике прозрачности сертификатов Chrome, AdGuard не будет фильтровать сайт. Chrome, в свою очередь, будет блокировать его.

### Включить проверку отзыва сертификатов SSL/TLS

Если эта опция включена, она запускает асинхронные проверки OCSP, чтобы проверить, не отозван ли SSL/TLS-сертификат сайта.

Если проверка OCSP завершается в течение минимального тайм-аута, AdGuard немедленно заблокирует соединение, если сертификат отозван, или установит соединение, если сертификат действителен.

Если проверка занимает слишком много времени, AdGuard установит соединение и продолжит проверку в фоновом режиме. Если сертификат отозван, текущие и будущие подключения к домену будут заблокированы.

### Показывать AdGuard VPN в настройках

Эта опция позволяет отобразить вкладку AdGuard VPN в Настройках, чтобы приложение и сайт продукта было удобно открывать.

### Исключите приложение из фильтрации, введя полный путь

Если вы хотите, чтобы AdGuard не фильтровал конкретные приложения, укажите полный путь к ним, и приложения будут исключены из фильтрации. Разделите разные пути точкой с запятой.

### Включить всплывающие уведомления AdGuard

Включите эту функцию, чтобы видеть всплывающие уведомления AdGuard. Они появляются не слишком часто и содержат только важную информацию. Вы также можете использовать трей-меню, чтобы вызвать последнее всплывающее уведомление.

### Автоматически перехватывать URL-адрес фильтра

Включите эту функцию, если вы хотите, чтобы AdGuard автоматически перехватывал URL фильтра (например, `abp:subscribe` и т.п.) и открывал диалог установки пользовательского фильтра.

### Фильтровать HTTP/3

Если эта настройка включена, AdGuard будет фильтровать запросы, отправленные по протоколу HTTP/3, в дополнение к другим типам запросов.

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### Использовать драйвер в режиме перенаправления

Если эта опция включена, AdGuard перехватывает весь трафик и перенаправляет его на локальный прокси-сервер для дальнейшей фильтрации.

В противном случае AdGuard будет фильтровать весь трафик на лету, без перенаправления. При этом система будет считать AdGuard единственным приложением, которое подключается к интернету (другие приложения будут направляться через него). Минусом является то, что это сделает системный брандмауэр менее эффективным. А плюсом — то, что этот подход работает немного быстрее.

### Открывать главное окно при запуске системы

Включите эту опцию, чтобы главное окно AdGuard открывалось при каждом запуске системы. Эта настройка не влияет на то, запущена ли реальная фильтрация или нет. Она находится в разделе *Настройки → Общие настройки*.

### Включать фильтрацию при запуске системы

Начиная с версии 7.12, служба AdGuard по умолчанию не фильтрует трафик после запуска ОС, если отключена опция «Запускать AdGuard при старте системы». Другими словами, служба AdGuard запускается в режиме «ожидания». Включите эту опцию, чтобы AdGuard фильтровал трафик, даже если приложение не запущено.

:::note

До версии 7.12 сервис AdGuard по умолчанию запускался в режиме фильтрации, даже если опция *Запускать AdGuard при старте системы* была отключена. Если вас устраивало прежнее поведение, включите эту опцию.

:::

### Фильтровать локальные адреса

Если вы хотите, чтобы AdGuard фильтровал соединения loopback, установите флажок. Эта опция всегда будет включена, если у вас установлен AdGuard VPN, потому что в противном случае он не сможет работать.

### Не фильтровать указанные диапазоны IP-адресов

Если вы не хотите, чтобы AdGuard фильтровал определённые подсети, включите эту функцию и укажите IP-диапазоны в нотации CIDR (например, 98.51.100.14/24) в разделе **IP-диапазоны, исключённые из фильтрации** ниже.

### Включить запись HAR

Эта опция должна быть включена **только в целях отладки**. Если включить эту опцию, AdGuard создаст файл в формате HAR 1.2 с информацией обо всех отфильтрованных HTTP-запросах. Этот файл можно проанализировать с помощью приложения Fiddler. Обратите внимание, что это может значительно замедлить просмотр веб-страниц.

### Добавлять пробел к обычному HTTP-запросу

Добавляет дополнительный пробел между методом HTTP и URL и удаляет пробел после поля «Host:», чтобы избежать «глубокую проверку пакетов». Например, правило

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Настроить размер фрагментации начального пакета TLS

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. Если указан недопустимый размер, будет использоваться значение, установленное системой. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Размер фрагмента обычного HTTP-запроса

Настраивает размер фрагментации HTTP-запроса. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Допустимые значения: 1–1500. Если указан недопустимый размер, будет использоваться значение, установленное системой. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Показывать QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Включить поддержку активности TCP

Допустимые значения: 1–1500. Если указан недопустимый размер, будет использоваться значение, установленное системой.

### Интервал проверки активности TCP

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Тайм-аут ожидания TCP

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Блокировать Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### Время ожидания ответа DNS-сервера

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Использовать HTTP/3 для DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Использовать резервные upstream DNS-серверы

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Выполнять запросы к upstream DNS-серверам параллельно

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Всегда отвечать на неудачные DNS-запросы

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Включить фильтрацию зашифрованных DNS-запросов

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### Режим блокировки для правил hosts

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Ответ ошибкой «Refused»
- Ответ ошибкой «NxDomain»
- Ответ пользовательским IP-адресом

### Режим блокировки для правил adblock

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Ответ ошибкой «Refused»
- Ответ ошибкой «NxDomain»
- Ответ пользовательским IP-адресом

### Пользовательский IPv4-адрес

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Пользовательский IPv6-адрес

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Резервные (fallback) серверы

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Не использовать резервные серверы;
- Использовать системные серверы;
- Использовать пользовательские серверы.

### Блокировать ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Список пользовательских резервных (fallback) серверов

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Список пользовательских bootstrap-адресов

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS-исключения

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Исключить указанные сети Wi-Fi (SSID) из DNS-фильтрации

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
