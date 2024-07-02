---
title: Настройки
sidebar_position: 4
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The _Settings_ tab can be accessed by tapping the right-most icon at the bottom of the screen. This section contains various settings, information about your app, license & subscription, and various support resources.

## Основное

Этот раздел помогает управлять внешним видом и поведением приложения: вы можете установить цветовую тему и язык, управлять уведомлениями и многое другое. If you want to help the AdGuard team detect app crashes and research usability, you can enable _Auto-report crashes_ and _Send technical and interaction data_.

![General \*mobile\_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Under _App and filter updates_, you can configure automatic filter updates and select an app update channel. Choose _Release_ for more stability and _Beta_ or _Nightly_ for early access to new features.

![Updates \*mobile\_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Расширенные настройки

_Automation_ allows you to manage AdGuard via tasker apps.

_Watchdog_ helps protect AdGuard from being disabled by the system ([read more about Android's battery save mode](/adguard-for-android/solving-problems/background-work/)). Введённое значение будет интервалом в секундах между проверками Watchdog.

_Logging level_ defines what data about the app's operation should be logged. По умолчанию приложение собирает данные о своих событиях. The _Debug_ level logs more events — enable it if asked by the AdGuard team to help them get a better understanding of the problem. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![Advanced \*mobile\_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

The _Low-level settings_ section is for expert users. [Read more about low-level settings](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings \*mobile\_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Фильтрация

В этом разделе можно управлять настройками HTTPS-фильтрации, фильтрами и пользовательскими скриптами, а также настраивать прокси-сервер.

![Filtering \*mobile\_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### Фильтры

AdGuard блокирует рекламу, трекеры и раздражители, применяя правила из своих фильтров. Most features from the _Protection_ section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable _Basic protection_, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, _Basic protection_ will also be disabled.

![Filters \*mobile\_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Для нормальной работы AdGuard достаточно фильтров, включённых по умолчанию. Но если вы хотите настроить блокировку рекламы под себя, вы можете использовать другие фильтры AdGuard или сторонние фильтры. Для этого выберите категорию и включите нужные фильтры. To add a custom filter, tap _Custom filters_ → _Add custom filter_ and enter its URL or file path.

:::note

Если вы активируете слишком много фильтров, некоторые сайты могут работать некорректно.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

### Пользовательские скрипты

Пользовательские скрипты — это мини-программы, написанные на JavaScript и меняющие поведение одного или нескольких сайтов. Для установки пользовательских скриптов нужна специальная программа — менеджер скриптов. AdGuard может играть эту роль и позволяет устанавливать пользовательские скрипты по URL или из файла.

![Userscripts \*mobile\_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra — это специальный пользовательский скрипт, который блокирует сложную рекламу и механизмы повторного внедрения рекламы на сайты.

#### Отключить AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Сеть

#### HTTPS-фильтрация

Чтобы блокировать рекламу и трекеры на большинстве сайтов и в большинстве приложений, AdGuard нужно фильтровать HTTPS-трафик. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Сертификат безопасности

Чтобы управлять зашифрованным трафиком, AdGuard устанавливает на устройство сертификат ЦС. Это безопасно: трафик фильтруется локально, а AdGuard проверяет безопасность соединения.

В старых версиях Android сертификат устанавливается автоматически. На Android 11 и выше сертификат нужно устанавливать вручную. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

Сертификата в пользовательском хранилище достаточно для фильтрации HTTPS-трафика в браузерах и некоторых приложениях. Однако есть приложения, которые доверяют только сертификатам из системного хранилища. Чтобы фильтровать HTTPS-трафик подобных приложений, вам понадобится установить сертификат AdGuard в системное хранилище. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### Приложения с HTTPS-фильтрацией

В этом разделе содержится список приложений, для которых AdGuard фильтрует HTTPS-трафик. Обратите внимание, что настройку можно применить ко всем приложениям только в том случае, если у вас есть сертификаты ЦС как в пользовательском, так и в системном хранилище.

##### Сайты с HTTPS-фильтрацией

Эта настройка позволяет вам управлять сайтами, для которых AdGuard должен фильтровать HTTPS-трафик.

HTTPS-фильтрация позволяет AdGuard фильтровать содержимое запросов и ответов, но мы никогда не собираем и не храним эти данные. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Вы также можете добавить в исключения сайты, которые считаете необходимыми, выбрав один из режимов:

- Исключить определённые сайты из HTTPS-фильтрации
- Фильтровать HTTPS-трафик только на сайтах, добавленных в исключения

По умолчанию мы также не фильтруем сайты с сертификатами Extended Validation (EV), например, сайты финансовых организаций. If needed, you can enable the _Filter websites with EV certificates_ option.

#### Прокси

Вы можете настроить AdGuard так, чтобы он пропускал весь трафик устройства через прокси-сервер. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

В этом разделе вы также можете настроить сторонний VPN для работы с AdGuard, ваш VPN-провайдер это позволяет.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Режим маршрутизации

Здесь вы можете выбрать метод фильтрации трафика.

- _Local VPN_ filters traffic through a locally created VPN. Это самый надёжный режим. Из-за ограничений Android это также единственный способ фильтрации трафика на системном уровне, доступный на нерутованных устройствах.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. Чтобы использовать другой VPN с AdGuard, вам необходимо перенастроить его для работы в режиме прокси и настроить исходящий прокси в AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. Одним из его существенных преимуществ является то, что его можно запускать параллельно с VPN. Этот режим требует root-доступа.

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. Для этого режима требуется root-доступ на Android 10 и выше.

## Лицензия

В этом разделе вы можете узнать больше о лицензии и управлять ей:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Войти в аккаунт AdGuard или ввести лицензионный ключ для активации лицензии
- Зарегистрироваться для активации 7-дневного пробного периода, если вы ещё не воспользовались им
- Refresh the license status from the three-dots menu (:)
- Открыть личный кабинет AdGuard, чтобы продлить или улучшить лицензию
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile\_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Поддержка

Этот раздел поможет, если у вас есть вопросы или предложения по улучшению AdGuard для Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile\_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. По возможности опишите проблему подробно и прикрепите логи приложения. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub — ещё один способ сообщать об ошибках и предлагать новые функции. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
