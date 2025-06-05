---
title: Настройки
sidebar_position: 4
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

Вкладку _Настройки_ можно открыть, нажав на самую правую иконку в нижней части экрана. Этот раздел содержит различные настройки, информацию о приложении, лицензиях и подписках, а также о поддержке.

## Основные

Этот раздел помогает управлять внешним видом и поведением приложения: вы можете установить цветовую тему и язык, управлять уведомлениями и многое другое. Если вы хотите помочь команде AdGuard развивать приложение, можете включить опцию _Отправлять отчёты о сбоях_ и _Отправлять данные об использовании приложения_.

![Основные \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

В разделе _Обновления приложения и фильтров_ вы можете настроить автоматическое обновление фильтров и выбрать канал обновления приложения. Выберите _Релиз_ для большей стабильности и _Бета_ или _Nightly_ для раннего доступа к новым функциям.

![Обновления \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Расширенные настройки

_Автоматизация_ позволяет управлять AdGuard через приложения-таскеры.

_Watchdog_ помогает защитить AdGuard от отключения системой ([подробнее о режиме экономии заряда батареи Android](/adguard-for-android/solving-problems/background-work/)). Введённое значение будет интервалом в секундах между проверками Watchdog.

_Уровень логирования_ определяет, какие данные о работе приложения должны записываться. По умолчанию приложение собирает данные о своих событиях. _Подробный_ уровень фиксирует больше событий. Если возникнет проблема, этот уровень поможет команде AdGuard лучше понять проблему. Но он потребляет больше ресурсов — советуем включать его только по запросу команды поддержки. [Подробнее о сборе и отправке логов](/adguard-for-android/solving-problems/log/)

![Расширенные \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Раздел _Низкоуровневые настройки_ предназначен для продвинутых пользователей. [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![Низкоуровневые настройки \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Фильтрация

В этом разделе можно управлять настройками HTTPS-фильтрации, фильтрами и пользовательскими скриптами, а также настраивать прокси-сервер.

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### Фильтры

AdGuard блокирует рекламу, трекеры и раздражители, применяя правила из своих фильтров. Большинство функций из раздела _Защита_ работают на основе [фильтров AdGuard] (/general/ad-filtering/adguard-filters/#adguard-filters). Если вы включите _Базовую защиту_, автоматически включится Базовый фильтр AdGuard и Фильтр мобильной рекламы AdGuard. И наоборот: если отключить оба фильтра, _Базовая защита_ тоже будет отключена.

![Фильтры \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Для нормальной работы AdGuard достаточно фильтров, включённых по умолчанию. Но если вы хотите настроить блокировку рекламы под себя, вы можете использовать другие фильтры AdGuard или сторонние фильтры. Для этого выберите категорию и включите нужные фильтры. Чтобы добавить пользовательский фильтр, нажмите _Собственные фильтры_ → _Добавить свой фильтр_ и введите его URL-адрес или путь к файлу.

:::note

Если вы активируете слишком много фильтров, некоторые сайты могут работать некорректно.

:::

[Подробнее о фильтрах](https://adguard.com/ru/blog/what-are-filters.html)

### Расширения

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### Disable AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Сеть

#### HTTPS-фильтрация

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. При необходимости вы можете включить опцию _Фильтровать сайты с EV-сертификатами_.

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- _Local VPN_ filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## Лицензия

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Поддержка

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
