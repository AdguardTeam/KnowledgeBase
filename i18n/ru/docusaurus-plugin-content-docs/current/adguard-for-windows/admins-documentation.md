---
title: Документация для администраторов
sidebar_position: 5
---

Эта страница описывает детали централизованного управления настройками и политиками приложений AdGuard.

## 1. Скачайте MSI-установщик {#msi-download}

Download the [AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi)

Download the [AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)

## 2. Настройте параметры сети {#settings-configuring}

На машинах, соединённых с доменом Active Directory, настройки политики могут также храниться в регистре `HKEY_LOCAL_MACHINE` по следующему пути: `Software\Policies\AdGuard\`.

Единственная поддерживаемая политика — `LicenseKey`. Если выбрана эта политика, AdGuard будет предпочитать эту лицензию всему, что пользователь может ввести через интерфейс. Этот лицензионный ключ будет использоваться для проверки статуса лицензии.

## 3. Убедитесь, что серверы AdGuard доступны {#servers-available}

AdGuard подключается к двум хостам: `api.adguard.org` и `filters.adtidy.org`. Убедитесь, что оба сервера доступны.

## 4. Выкатите MSI-установщик в сеть {#msi-push}

Если вы обычно используете для этого SMS или другие инструменты, можете выкатывать MSI-установщик AdGuard с их помощью, как вы бы делали с любым другим пакетом.

Или же вы можете запустить MSI на целевой машине напрямую (и фоново) при помощи этой команды: `Msiexec /q /i AdGuard.msi`

Если вам нужно накатить обновление, используйте эту команду: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Вы должны запускать эти команды с правами администратора.

:::

Если вы хотите установить AdGuard на машину с Windows 7, убедитесь, что на ней установлен .NET 4 Client Profile: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

If you have installed AdGuard for Windows from an MSI file, AdGuard will not be updated automatically. Чтобы разрешить обновления вручную:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Any other value or no value for this parameter will disable automatic updates.

Please note that such installation of the application and manual updates are not recommended and can cause technical problems.

:::

## 5. Протестируйте установку {#installation-test}

Запустите AdGuard на целевой машине. Open the license screen to check that it is using the specified license. Возможно, вам придётся кликнуть по кнопке «Обновить статус», чтобы AdGuard проверил лицензионный ключ.
