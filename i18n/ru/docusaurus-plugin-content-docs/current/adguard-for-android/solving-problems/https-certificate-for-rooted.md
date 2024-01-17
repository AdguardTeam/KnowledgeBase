---
title: Перемещение сертификата ЦС в системное хранилище на рутованных устройствах
sidebar_position: 14
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard для Android может [фильтровать зашифрованный HTTPS-трафик](/general/https-filtering/what-is-https-filtering), блокируя большую часть рекламы и трекеров на сайтах. На рутованных устройствах AdGuard также может фильтровать HTTPS-трафик в приложениях. Чтобы HTTPS-фильтрация работала, нужно добавить ЦС-сертификат AdGuard в список доверенных сертификатов.

На нерутованных устройствах сертификаты устанавливаются **в пользовательское хранилище**. Только некоторые приложения (в основном браузеры) доверяют таким сертификатам. HTTPS-фильтрация ограничивается этими приложениями.

На рутованных устройствах сертификат можно установить **в системное хранилище**. Это позволит AdGuard фильтровать HTTPS-трафик и в других приложениях.

Вот как это сделать.

## Как установить сертификат AdGuard в системное хранилище

1. Откройте *AdGuard → Настройки → Фильтрация → Сеть → HTTPS-фильтрация → Сертификаты безопасности*.

1. Если у вас ещё нет сертификата, **установите AdGuard Personal CA в пользовательское хранилище**. Так AdGuard сможет фильтровать HTTPS-трафик в браузерах.

1. **Установите AdGuard Intermediate CA в пользовательское хранилище**. Он понадобится для запуска модуля adguardcert в Magisk. Благодаря этому модулю можно будет переместить сертификаты в системное хранилище.

    ![Установите сертификат *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. Установите [последнюю версию **модуля adguardcert**](https://github.com/AdguardTeam/adguardcert/releases/latest/).

1. Откройте *Magisk → Модули → Установить из хранилища* и выберите загруженный файл **adguardcert**. AdGuard Personal CA будет перемещён из пользовательского хранилища в системное.

    ![Откройте модули Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Установите модуль из хранилища *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Выберите adguardcert *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Нажмите **Перезагрузить**.

    ![Перезагрузите устройство *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Когда **AdGuard Personal CA** будет перемещён в системное хранилище, AdGuard сможет фильтровать HTTPS-трафик в приложениях. **AdGuard Intermediate CA** в пользовательском хранилище позволит фильтровать HTTPS в браузерах на основе Chromium (ниже мы объясним, почему).

## Известные проблемы с Chrome и браузерами на основе Chromium

Chrome и другие браузеры на базе Chromium требуют логов Certificate Transparency (CT) для сертификатов, находящихся в системном хранилище. Эти логи не содержат сведений о сертификатах, выданных приложениями с HTTPS-фильтрацией. Поэтому для фильтрации HTTPS-трафика в этих браузерах приложению AdGuard нужен дополнительный сертификат в пользовательском хранилище.

### Браузер Bromite

Помимо проблемы браузеров на основе Chromium, Bromite по умолчанию не доверяет сертификатам в пользовательском хранилище. Чтобы фильтровать HTTPS-трафик в Bromite, в поисковой строке браузера введите `chrome://flags` и *включите* опцию *Разрешить пользовательские сертификаты*. **Это относится как к рутованным, так и к нерутованным устройствам**.
