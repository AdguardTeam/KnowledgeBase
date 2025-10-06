---
title: Установка, настройка и удаление
sidebar_position: 2
---

## Установка AdGuard для Linux

Откройте командную строку на компьютере. На Linux используйте комбинацию клавиш _Ctrl+Alt+T_. На Mac введите _Терминал_ в поле поиска.

Для установки выберите наиболее подходящую вам версию AdGuard — релиз, бета или nightly — и введите соответствующую команду.

**Релиз**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**Бета**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**Nightly**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

При необходимости введите пароль администратора.

Нажмите `y`, чтобы создать ссылку в `/usr/local/bin` на исполняемый файл, и дождитесь завершения установки.

:::note

Вы можете проверить подпись и убедиться, что это официальная версия AdGuard, используя инструмент `gpg`. [Подробнее на GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Первичная настройка

Для AdGuard для Linux нужна [лицензия AdGuard](https://adguard.com/license.html). Если у вас ещё нет лицензии, вы можете войти или создать аккаунт, чтобы получить бесплатную 14-дневную пробную версию. Если у вас уже есть лицензия, войдите, чтобы активировать её. Для этого следуйте этой пошаговой инструкции:

1. После установки введите:

   ```sh
   adguard-cli activate
   ```

2. Затем выберите нужную опцию:

   ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation1.png)

3. Перейдите по ссылке, чтобы активировать лицензию:

   ![Активировать лицензию \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

4. После активации вы можете продолжить пользоваться программой:

   ![Успешная активация \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

5. Вы также можете сбросить лицензию, введя:

   ```sh
   adguard-cli reset-license
   ```

   или просмотреть информацию о лицензии, введя

   ```sh
   adguard-cli license
   ```

6. Теперь нужно настроить AdGuard CLI. Для запуска мастера настройки введите:

   ```sh
   adguard-cli configure
   ```

   ![Установка \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation4.png)

   Мастер задаст основные вопросы, необходимые для первоначальной настройки.

7. После этого вы можете запустить защиту AdGuard, введя

   ```sh
   adguard-cli start
   ```

   ![Включить защиту \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation5.png)

8. Вы можете проверить статус защиты, используя:

   ```sh
   adguard-cli status
   ```

   и остановить её с помощью:

   ```sh
   adguard-cli stop
   ```

   ![Остановить защиту \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

9. Чтобы просмотреть текущую конфигурацию, введите:

   ```sh
   adguard-cli config show
   ```

   ![Текущая настройка \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

   Также будет показан путь к файлу конфигурации, который можно и нужно редактировать напрямую. В нём содержатся описания всех дополнительных опций.

   Или вы можете использовать команды:

   ```sh
   adguard-cli config get
   ```

   или:

   ```sh
   adguard-cli config set
   ```

   Однако в первую очередь они предназначены для написания скриптов.

Чтобы сбросить лицензию, введите:

## Удаление AdGuard для Linux

Чтобы удалить AdGuard, введите:

Релиз

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Бета

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

При необходимости введите пароль администратора.
