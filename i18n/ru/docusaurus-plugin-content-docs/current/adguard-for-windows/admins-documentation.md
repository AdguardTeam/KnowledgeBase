---
title: Документация для администраторов
sidebar_position: 5
---

Эта страница описывает детали централизованного управления настройками и политиками приложений AdGuard.

## 1. Скачайте MSI-установщик {#msi-download}

Скачайте [AdGuard MSI](https://static.adtidy.org/windows/setup.msi).

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

:::info

Starting with AdGuard v7.17 for Windows, automatic updates are enabled by default when you install the application from MSI. We recommend that you disable updates for a user so that AdGuard for Windows is updated centrally. To do this, add the ForbidCheckUpdates=Yes key, which is located at the following path: HKEY_LOCAL_MACHINE\SOFTWARE\Adguard.

In older versions of AdGuard for Windows automatic updates are disabled by default. To allow updates for a user, set the value of the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key to `YES` (case insensitive).

:::note

## 5. Протестируйте установку {#installation-test}

Запустите AdGuard на целевой машине. Откройте экран лицензии, чтобы проверить, что используется установленная вами лицензия. Возможно, вам придётся кликнуть по кнопке «Обновить статус», чтобы AdGuard проверил лицензионный ключ.
