---
title: Веб-расширение Safari
sidebar_position: 3
---

Веб-расширения добавляют дополнительные функции в Safari. Здесь вы можете найти [больше информации о веб-расширениях](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Как выглядит веб-расширение в Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_ru.png)

Веб-расширение AdGuard для Safari — это инструмент, который позволяет пользоваться преимуществами новых функций iOS 15. Он служит для расширения возможностей приложения AdGuard для iOS. С ним AdGuard может применять продвинутые правила фильтрации и, в конечном счёте, блокировать больше рекламы.

## Что оно делает

По умолчанию Safari предоставляет блокировщикам контента только базовые инструменты. Эти инструменты не позволяют добиться уровня блокировки, который доступен блокировщикам на других операционных системах (Windows, Mac, Android). Например, приложения AdGuard на других платформах могут использовать такие мощные средства борьбы с рекламой, как [CSS-правила](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [расширенные CSS-селекторы](/general/ad-filtering/create-own-filters#extended-css-selectors) и [скриптлеты](/general/ad-filtering/create-own-filters#scriptlets). Эти инструменты совершенно незаменимы при работе со сложной рекламой, например, с рекламой на YouTube.

Веб-расширение AdGuard для Safari дополняет AdGuard, давая ему возможность применять все эти типы правил фильтрации.

Помимо этого, веб-расширение AdGuard для Safari можно использовать, чтобы управлять приложением AdGuard для iOS прямо из браузера. Нажмите на кнопку *Расширения* — это иконка с пазлом, которая может быть расположена левее или правее адресной строки, в зависимости от типа вашего устройства. Найдите в списке расширений **AdGuard** и нажмите на него.

![Меню веб-расширения *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> На устройствах iPad веб-расширение AdGuard для Safari доступно напрямую — просто нажмите на иконку AdGuard в адресной строке браузера.

Вы увидите следующий список опций:

- **Включение/выключение защиты на текущем сайте**. Сдвиньте переключатель в положение «выкл.», чтобы полностью отключить работу AdGuard на текущем сайте и добавить соответствующее правило-исключение. Повторное нажатие по переключателю приведёт к возврату защиты для сайта и удалению данного правила. После каждого подобного действия может потребоваться некоторое время, чтобы изменения вступили в силу.

- **Ручная блокировка элемента на странице**. Нажмите кнопку *Заблокировать элементы на этой странице*, чтобы вызвать попап для блокировки элемента. Выберите любой элемент на странице, который хотите скрыть, настройте область выделения и после предпросмотра изменений подтвердите скрытие элемента. Соответствующее правило фильтрации будет добавлено в AdGuard (позже вы можете отключить или удалить это правило, чтобы вернуть отображение элемента).

- **Сообщить о проблеме**. Смахните меню вверх, чтобы показать кнопку *Сообщить о проблеме*. Используйте её, чтобы отправить отчёт о пропущенной рекламе или любой другой проблеме, встреченной на текущей странице.

## Как включить веб-расширение AdGuard в Safari

:::note

Веб-расширение AdGuard для Safari требует доступ к содержимому веб-страниц для своей работы, но не использует его ни для каких других целей, кроме как для блокировки рекламы.

:::

### В настройках iOS

Веб-расширение не является самостоятельным инструментом и требует наличия AdGuard для iOS. Если на вашем устройстве не установлен AdGuard для iOS, пожалуйста, сначала [установите его](../installation) и выполните первый запуск приложения, чтобы подготовить его к работе.

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### В Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
