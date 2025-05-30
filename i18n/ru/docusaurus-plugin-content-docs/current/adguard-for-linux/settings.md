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
