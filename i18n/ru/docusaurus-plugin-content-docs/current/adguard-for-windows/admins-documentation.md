---
title: Документация для администраторов
sidebar_position: 5
---

Эта страница описывает детали централизованного управления настройками и политиками приложений AdGuard.

## 1. Скачайте MSI-установщик {#msi-download}

Скачать [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Скачать [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

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

Если вы установили AdGuard для Windows из файла MSI, AdGuard не будет обновляться автоматически. Чтобы разрешить обновления вручную:

- В версиях, выпущенных после v7.16, удалите параметр `ForbidCheckUpdates` или установите для него значение `NO` (регистр не учитывается) в реестре в разделе `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- В версии 7.16 и более ранних установите значение `YES` (регистр не учитывается) для параметра `AllowCheckUpdates` для `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` в ОС x86 или для `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` в ОС x64. Любое другое значение или отсутствие значения для этого параметра отключит автоматические обновления.

Обратите внимание, что такая установка приложения и обновление вручную не рекомендуется и может привести к техническим проблемам.

:::

## 5. Протестируйте установку {#installation-test}

Запустите AdGuard на нужном устройстве. Откройте экран лицензии, чтобы убедиться, что используется указанная лицензия. Возможно, вам придётся нажать «Обновить статус», чтобы AdGuard проверил лицензионный ключ.
