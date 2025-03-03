---
title: Установка, настройка и удаление
sidebar_position: 2
---

## Установите AdGuard для Linux

Чтобы установить AdGuard, введите:

Релиз

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Бета

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

При необходимости введите пароль администратора.

Нажмите `y`, чтобы создать ссылку в `/usr/local/bin` на исполняемый файл, и дождитесь завершения установки.

:::note

Вы можете проверить подпись и убедиться, что это официальная версия AdGuard, используя инструмент `gpg`. [Подробнее на GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Активировать лицензию

Для AdGuard для Linux нужна [лицензия AdGuard](https://adguard.com/license.html). Если у вас ещё нет лицензии, вы можете войти или создать аккаунт, чтобы получить бесплатную 14-дневную пробную версию. Если у вас уже есть лицензия, войдите, чтобы активировать её.

Чтобы войти или создать аккаунт, введите:

```
adguard-cli activate
```

Чтобы сбросить лицензию, введите:

```
adguard-cli reset-license
```

Чтобы просмотреть информацию о лицензии, введите:

```
adguard-cli license
```

## Первичная настройка

Чтобы запустить AdGuard, завершите начальную настройку. В неё входит установка сертификата AdGuard CA, включение необходимых фильтров и выбор режима прокси-сервера.

Для запуска мастера настройки введите:

```
adguard-cli configure
```

## Удалите AdGuard для Linux

Чтобы удалить AdGuard, введите:

Релиз

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Бета

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

При необходимости введите пароль администратора.
