---
title: Обзор функций
sidebar_position: 1
---

У AdGuard есть ряд продуктов для блокировки рекламы и трекеров на различных платформах. Один из самых популярных продуктов AdGuard — это бесплатное расширение, которое работает в пяти популярных браузерах: Chrome, Firefox, Edge, Opera и Яндекс Браузере. Browser extensions include basic ad-blocking features but cannot be compared with full-featured desktop programs, such as [AdGuard for Windows](/adguard-for-windows/overview) and [AdGuard for Mac](/adguard-for-mac/overview).

![AdGuard Browser extension for Chrome *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_overview.png)

## Доступность {#br-extension}

[Браузерное расширение AdGuard](https://adguard.com/en/adguard-browser-extension/overview.html) доступно почти для всех популярных браузеров. Вы можете легко найти расширение в интернет-магазине вашего браузера или на нашем официальном сайте.

![Available for most popular browsers *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_availability.png)

> У нас есть отдельное расширение для Safari. C момента выхода [Safari 13](https://adguard.com/en/blog/adguard-safari-1-5.html) большинство расширений столкнулись с проблемами, и многие из них перестали работать. We had to develop a [separate extension for Safari](/adguard-for-safari/overview) that has some differences in comparison with the extension described in this article.

**Не забывайте, что функциональность любого расширения строго ограничена возможностями самого браузера.** Для полноценной защиты на уровне системы используйте отдельную программу для компьютера или мобильного устройства. Ниже мы опишем [её преимущества](#comparison).

## Блокировка рекламы {#adblocker}

Блокировка рекламы — ключевая функция любого блокировщика, и AdGuard не исключение. Расширение успешно блокирует рекламу на любом сайте в браузере, в котором оно установлено. Ad blocking is based on so-called filter lists, or simply [filters](/general/ad-filtering/how-ad-blocking-works). Фильтры можно включить или отключить в настройках расширения. Вы можете настроить блокировку рекламы, активировав определённые фильтры.

### Фильтры {#filters}

Фильтры — это наборы правил, написанные на специальном языке. Блокировщик рекламы интерпретирует правила и выполняет их. В результате вы перестаёте видеть рекламу на сайтах.

![Filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Фильтры сгруппированы в соответствии с их ролью. Например, существуют фильтры, блокирующие рекламу или удаляющие виджеты социальных сетей, фильтры для защиты конфиденциальности и т. п. Вы можете включить как отдельные фильтры, так и всю группу сразу.

![Ad blocking filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

#### Собственные фильтры {#custom}

По названию чаще всего можно понять, для чего нужен фильтр. Вопросы может вызвать группа *Собственные фильтры*.

![Custom filters *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

В этой вкладке вы можете добавить фильтры, которых нет в расширении по умолчанию. В интернете есть [множество фильтров в открытом доступе](https://filterlists.com). Кроме того, вы можете создавать и добавлять свои собственные фильтры. Фактически, вы можете создать любой набор фильтров и настроить блокировку рекламы так, как вам нравится.

To add a filter, just click *Add custom filter*, enter the URL or the file path of the filter you want to be added and click *Next*.

![Add a custom filter *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

### Пользовательские правила {#user-rules}

*Пользовательские правила* — это ещё один инструмент, который поможет вам настроить блокировку рекламы.

![User rules *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Вы можете добавить новые правила несколькими способами. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

Вы также можете импортировать готовый список фильтров из текстового файла. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the [Custom filters](#custom) tab.

Кроме того, вы можете экспортировать собственные правила фильтрации. Этот вариант удобен для переноса списка правил между браузерами или устройствами.

Когда вы добавляете сайт в белый список (подробнее об этом [ниже](#allowlist)) или используете Помощник для скрытия элемента на странице, соответствующее правило также сохраняется в *Пользовательские правила*.

### Белый список {#allowlist}

*Белый список* используется для исключения определённых сайтов из фильтрации. Правила блокировки не применяются к сайтам из списка.

![Allowlist *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

*Белый список* тоже можно инвертировать: вы можете разблокировать рекламу везде, кроме сайтов, добавленных в этот список. To do that, activate the *Invert allowlist* option.

![Invert allowlist *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Также вы можете импортировать и экспортировать существующие белые списки. Это полезно, например, если вы хотите применять одинаковые правила в каждом из ваших браузеров.

## Антитрекинг {#stealth-mode}

*Антитрекинг* защищает личные данные от онлайн-трекеров и мошенников.

![Stealth Mode *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_stealth_mode.png)

В режиме Антитрекинга вы можете запретить сайту видеть поисковые запросы, которые вы использовали, чтобы найти его в интернете, автоматически удалять сторонние и собственные куки-файлы сайта и т. д. A [separate article](/general/stealth-mode) is devoted to all these features.

> Обратите внимание, что некоторые из опций *Антитрекинга*, доступных в полноценных приложениях, отсутствуют в браузерных расширениях из-за технических ограничений.

## Другие функции и опции {#other}

Помимо больших ключевых модулей браузерного расширения AdGuard, есть ещё несколько специфических функций, которые можно настроить во вкладках расширения *Основные* и *Дополнительные настройки*.

### Основные {#general}

In the *General* tab, you can allow search ads and the [self-promotion of websites](/general/ad-filtering/search-ads), enable the automatic activation of language-specific filters, indicate the filters update interval, etc.

![General *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_general.png)

Besides, here you can enable [*Phishing and malware protection*](/general/browsing-security).

You can save your settings configuration by clicking the *Export settings* button. Настройки будут сохранены в виде файла .json. To upload the previously saved settings configuration, use the *Import settings* function. Вы можете использовать эту функцию, чтобы быстро переключаться между различными профилями настроек или перенести конфигурацию настроек в другой браузер.

### Дополнительные настройки {#misc}

Раздел *Дополнительные настройки* содержит набор настроек, связанных с блокировкой рекламы и удобством использования приложения.

![Additional settings *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_additional_settings.png)

В этой вкладке можно активировать оптимизированные фильтры, включить уведомления об обновлениях расширений, открыть *Журнал фильтрации* или сбросить статистику заблокированной рекламы и трекеров.

Кроме того, вы можете помочь нам в разработке фильтров, прислав статистику по применяемым правилам: какие из них срабатывают, на каких сайтах и как часто. Все данные строго анонимны; эта опция отключена по умолчанию.

### О программе {#about}

В разделе *О программе* можно найти информацию о текущей версии, ссылки на Лицензионное соглашение и Политику конфиденциальности, а также на репозиторий браузерного расширения на GitHub.

![About *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_about.png)

## Главное меню расширения {#main-menu}

На главную страницу расширения можно попасть, нажав на значок расширения на панели инструментов браузера.

![Main menu *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_main.png)

На главном экране можно скрыть любой элемент на сайте вручную (это добавит новое *пользовательское правило*) или открыть *Журнал фильтрации*, чтобы посмотреть информацию о трафике вашего браузера. Там же можно заблокировать запросы на ходу и просмотреть отчёт о безопасности сайта. Если вы заметили пропущенную рекламу, вы можете пожаловаться на некорректную блокировку. Наши разработчики фильтров рассмотрят жалобу и исправят проблему. Там же можно посмотреть статистику по применённым правилам фильтрации.

Все запросы, сделанные браузером, отображаются в *Журнале фильтрации* вместе с подробной информацией о каждом запросе. *Журнал фильтрации* позволяет, например, отследить, какие запросы заблокировало расширение. В Журнале также можно заблокировать или разблокировать любой запрос в два клика. Там же можно отсортировать запросы, что может помочь, если вы создаёте свои правила фильтрации. *Журнал фильтрации* можно открыть из главного меню или настроек (во вкладке «Дополнительные настройки»).

Значки в правом верхнем углу главного меню отвечают за настройки расширения и приостановку защиты.

## Браузерное расширение и приложения AdGuard: что лучше? {#comparison}

Главное преимущество отдельных приложений AdGuard — они могут блокировать рекламу во всех браузерах и почти во всех приложениях. Вы можете использовать разные браузеры одновременно — приложение будет одинаково хорошо фильтровать рекламу и защищать от онлайн-угроз в каждом из них.

Возможности расширений, блокирующих рекламу, строго ограничены политикой браузеров. Браузеры могут ограничивать блокировку рекламы, и расширениям приходится под это подстраиваться. Поэтому, например, в расширениях не поддерживаются некоторые типы правил фильтрации. Функциональность приложений для компьютеров не ограничена, поэтому они лучше блокируют рекламу и трекеры.

Расширение AdGuard бесплатно, просто в установке, и использует фильтры для блокировки рекламы и угроз. В полноценных приложениях помимо фильтров есть целый список расширенных функций, а сами они более мощные и эффективные. Подробнее — в таблице ниже.

![Extension vs. App *border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_comparison.png)

`1` – в пределах ограничений браузера и только в том браузере, где расширение установлено;

`2` — расширение не может обнаруживать запросы от других расширений. Если вредоносное или трекинговое расширение отправляет запрос на свой сервер, чтобы показать вам рекламу или отследить вашу активность, браузерное расширение AdGuard не сможет заблокировать этот запрос;

`3` — из-за ограничений браузера расширения могут блокировать не все виды рекламы и угроз. Некоторые элементы могут попасть на страницу и замедлить процесс загрузки. Приложение же, в отличие от расширения, блокирует рекламу ещё до того, как она загрузится в браузер. Это экономит трафик и ускоряет загрузку страниц.