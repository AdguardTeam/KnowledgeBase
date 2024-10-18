---
title: Веб-расширение Safari
sidebar_position: 3
---

Веб-расширения добавляют дополнительные функции в Safari. Здесь вы можете найти [больше информации о веб-расширениях](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Как выглядит веб-расширение в Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_ru.png)

Веб-расширение AdGuard для Safari — это инструмент, который позволяет пользоваться преимуществами новых функций iOS 15. Он служит для расширения возможностей приложения AdGuard для iOS. С ним AdGuard может применять продвинутые правила фильтрации и, в конечном счёте, блокировать больше рекламы.

## Что оно делает

By default, Safari provides only basic tools for content blockers. These tools don't offer the level of performance found in content blockers on other operating systems (Windows, Mac, Android). For example, AdGuard apps on other platforms can use such powerful anti-ad weapons as [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Unfortunately, these utilities are absolutely irreplaceable when dealing with more complex cases, such as pre-roll ads on YouTube.

Веб-расширение AdGuard для Safari дополняет AdGuard, давая ему возможность применять все эти типы правил фильтрации.

Помимо этого, веб-расширение AdGuard для Safari может быть использовано для управления приложением AdGuard для iOS прямо из браузера. Нажмите на кнопку *Расширения* — это иконка с пазлом, которая может быть расположена левее или правее адресной строки, в зависимости от типа вашего устройства. Найдите в списке расширений **AdGuard** и нажмите на него.

![Меню веб-расширения *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_ru.png)

> On iPads, AdGuard's Safari web extension can be accessed directly by tapping the AdGuard icon in the browser's address bar.

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

После того, как вы выполнили эти действия, откройте раздел *Настройки → Safari → Расширения*.

![Выберите "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_ru.png)

![Выберите "Расширения" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_ru.png)

Найдите раздел **Разрешить эти расширения** и выберите **AdGuard** среди доступных расширений. Нажмите на него и включите переключатель.

![Выберите "AdGuard" в разделе РАЗРЕШИТЬ ЭТИ РАСШИРЕНИЯ *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_ru.png)

Коснитесь его, затем включите переключатель. На том же экране установите разрешение *Все сайты* для AdGuard на *Разрешить* или *Спрашивать*. Если вы выберете *Разрешить*, вам не придётся давать разрешение каждый раз, когда вы посещаете новый сайт. Если вы не уверены, выберите *Спрашивать*, чтобы выдавать разрешения для каждого сайта.

![Настройки расширения *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_ru.png)

### В Safari

You can also enable the AdGuard extension from the Safari browser. To do it, tap *Extensions* (if you don't see it next to the address bar, tap the `aA` icon).

![В Safari коснитесь значка aA * mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_ru.png)

Затем найдите опцию *Управлять расширениями* и выберите её. В открывшемся окне активируйте переключатель **AdGuard**.

![Расширения *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_ru.png)

![Расширения *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_ru.png)

Если вы используете этот метод, вам всё равно может потребоваться открыть настройки Safari, чтобы выдать расширению AdGuard необходимые разрешения.

Теперь AdGuard должен появиться среди доступных расширений в Safari. Нажмите на него, а затем на жёлтую иконку с символом **i**. Включите **Расширенную защиту**, нажав кнопку *Включить* и подтвердив действие.

:::note

Если вы используете AdGuard для iOS без Premium-подписки, вы не сможете включить **Расширенную защиту**.

:::

В качестве альтернативы вы можете включить **Расширенную защиту** прямо в приложении, во вкладке **Защита** (вторая иконка слева в нижнем ряду).

Веб-расширение AdGuard для Safari работает только на iOS версий 15 и выше.
