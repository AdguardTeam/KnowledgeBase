---
title: Документация для администраторов
sidebar_position: 5
---

Эта страница описывает детали централизованного управления настройками и политиками приложений AdGuard.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. Если выбрана эта политика, AdGuard будет предпочитать эту лицензию всему, что пользователь может ввести через интерфейс. Этот лицензионный ключ будет использоваться для проверки статуса лицензии.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Убедитесь, что оба сервера доступны.

## 4. Push the MSI out to your network {#msi-push}

Если вы обычно используете для этого SMS или другие инструменты, можете выкатывать MSI-установщик AdGuard с их помощью, как вы бы делали с любым другим пакетом.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Вы должны запускать эти команды с правами администратора.

:::

Если вы хотите установить AdGuard на машину с Windows 7, убедитесь, что на ней установлен .NET 4 Client Profile: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Если вы установили AdGuard для Windows из файла MSI, AdGuard не будет обновляться автоматически. Чтобы разрешить обновления вручную:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Любое другое значение или отсутствие значения для этого параметра отключит автоматические обновления.

Обратите внимание, что такая установка приложения и обновление вручную не рекомендуется и может привести к техническим проблемам.

:::

## 5. Test your installation {#installation-test}

Запустите AdGuard на нужном устройстве. Откройте экран лицензии, чтобы убедиться, что используется указанная лицензия. Возможно, вам придётся нажать «Обновить статус», чтобы AdGuard проверил лицензионный ключ.
