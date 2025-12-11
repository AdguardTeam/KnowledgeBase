---
title: Настройки и управление защитой
sidebar_position: 3
---

## Доступные команды

Чтобы увидеть список всех доступных команд AdGuard, введите:

```sh
adguard-cli --help-all
```

## Включить и отключить защиту

### Включить защиту

Чтобы включить защиту, введите:

```sh
adguard-cli start
```

Эта команда позволяет настроить перенаправление на прокси-сервер.

![Включить защиту \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Отключить защиту

Чтобы отключить защиту, введите:

```sh
adguard-cli stop
```

Эта команда не только останавливает работу прокси-сервера, но и прекращает перенаправление трафика на него.

### Проверить статус защиты

Чтобы просмотреть статус защиты, введите:

```sh
adguard-cli status
```

![Статус/Отключить защиту \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Обновления

### Проверить обновления

Чтобы проверить наличие обновлений, введите:

```sh
adguard-cli check-update
```

### Обновление AdGuard для Linux

Чтобы обновить AdGuard для Linux, введите:

```sh
adguard-cli update
```

### Вывод скрипта обновления

Чтобы просмотреть вывод скрипта обновления, введите:

```sh
adguard-cli update -v
```

## Настройте AdGuard для Linux

Используйте команду `config` для настройки AdGuard для Linux. Подкоманды:

- `show`: показать текущую конфигурацию в `proxy.yaml`

  ![Текущая настройка \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: настроить параметр в `proxy.yaml`
  - `listen_ports.http_proxy`: порт прослушивания HTTP
  - `proxy_mode`: режим прокси-сервера (`manual` или `auto`)

- `get`: получить текущий статус указанных выше опций

## Управлять фильтрами

Используйте команду `filters` для настройки AdGuard для Linux. Подкоманды:

- `list`: список установленных фильтров

  - `--all`: просмотреть все фильтры

  ![Список фильтров \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: установить фильтр. Введите URL-адрес фильтра, который хотите установить

- `enable`: включить фильтр. Введите имя или ID фильтра

  ![Включить фильтры \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: отключить фильтр. Введите имя или ID фильтра

- `update`: обновить фильтры

## Изменение адреса прослушивания прокси-сервера в режиме ручной настройки прокси

По умолчанию прокси-сервер прослушивает `127.0.0.1` — адрес сетевого интерфейса loopback.
Можно сделать так, чтобы прокси-сервер слушал другой интерфейс. Есть два способа:

1. Выполните команду `adguard-cli config set listen_address <address>`, где `<address>` — адрес для прослушивания.
2. Отредактируйте файл конфигурации напрямую:
   - Чтобы определить местоположение файла конфигурации, выполните команду `adguard-cli config show | grep "Config location"`.
   - Найдите ключ `listen_address` и установите его значение соответствующим образом. Чтобы прослушивать все доступные сетевые интерфейсы, установите значение `0.0.0.0` или `::` для адреса прослушивания.

Если в качестве адреса прослушивания задано значение, отличное от `127.0.0.1`, — требуется аутентификация прокси-клиента. AdGuard CLI не запустится, если не настроена аутентификация прокси:

- При запуске `adguard-cli config set listen_address <address>`, где `<address>` не 127.0.0.1, AdGuard CLI запросит имя пользователя и пароль, если прокси-аутентификация ещё не настроена.
- При редактировании файла конфигурации напрямую найдите ключ `listen_auth`. Установите для подключа `enabled` значение `true`, а для `username` и `password` \` — непустые значения.

## Настроить исходящий прокси

Вы можете настроить `outbound_proxy`, если хотите, чтобы AdGuard CLI работал через другой прокси-сервер.

Есть два способа настройки:

### 1. Настроить через URL (рекомендуется)

Вместо того чтобы настраивать каждую опцию пошагово, вы можете задать все параметры в одной строке, используя URL:

```sh
adguard-cli config set outbound_proxy https://user:pass@host:port
```

:::info

Поддерживаемые режимы: HTTP, HTTPS, SOCKS, и SOCKS5.

:::

Вы также можете быстро включить или отключить `outbound_proxy`:

```sh
adguard-cli config set outbound_proxy false
```

Или быстро очистить настройки:

```sh
adguard-cli config set outbound_proxy ""
```

### 2. Настроить отдельные параметры

Также есть возможность настроить отдельные параметры:

```sh
adguard-cli config set outbound_proxy.enabled true
adguard-cli config set outbound_proxy.host localhost
adguard-cli config set outbound_proxy.port 3128
adguard-cli config set outbound_proxy.username user
adguard-cli config set outbound_proxy.password pass
```

Отключить проверку сертификата для HTTPS-прокси:

```sh
adguard-cli config set outbound_proxy.trust_any_certificate true
```

Включить прокси SOCKS5 для UDP-трафика:

```sh
adguard-cli config set outbound_proxy.udp_through_socks5_enabled true
```

:::note

Если ваш прокси SOCKS5 не поддерживает UDP, соединения могут не работать.

:::

## Настройка AdGuard CLI для каждого приложения

Пользователям часто приходится вручную включать фильтрацию для определённых браузеров. AdGuard для Linux поддерживает **конфигурацию для каждого приложения**, позволяя применять настройки или правила индивидуально к каждому приложению, а не ко всей системе.

За подробностями обратитесь к разделу `apps` в файле `proxy.yaml`.

Набор преднастроенных записей для популярных интернет-браузеров включён в файл `browsers.yaml` по умолчанию.

### Проверка текущей конфигурации

Чтобы просмотреть текущую конфигурацию `outbound_proxy`, введите:

```sh
adguard-cli config show outbound_proxy
```

:::info Совместимость

Настройка `outbound_proxy` через URL доступна, начиная с AdGuard для Linux 1.1.26 nightly и стабильной версии 1.1.

:::
