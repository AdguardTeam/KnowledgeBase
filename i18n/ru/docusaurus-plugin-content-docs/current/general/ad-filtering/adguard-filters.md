---
title: Фильтры AdGuard
sidebar_position: 2
---

Эта статья посвящена фильтрам, которые мы создаём для использования в AdGuard и в других блокировщиках рекламы (например, uBlock Origin). Фильтры — это наборы правил в текстовом формате, опираясь на которые, приложения и программы AdGuard фильтруют рекламу и контент, угрожающий вашей конфиденциальности, такой как баннеры, всплывающие окна или трекеры. Обычно фильтр состоит из правил с похожим назначением. Например, правила, нацеленные на конкретный сегмент интернета (Немецкий фильтр, Русский фильтр и т. д.). либо служащие определённой цели (Фильтр счётчиков и систем аналитики, Фильтр виджетов социальных сетей и т. д.), объединяются в один фильтр. Соответственно, их можно включать и выключать как единое целое.

## Фильтры AdGuard

* **Base filter** removes ads from websites with English content. Изначально он основан на фильтре [EasyList ](https://easylist.to/) и доработан нами. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
* **Фильтр счётчиков и системы аналитики** содержит наиболее полный список различных интернет-счётчиков и систем интернет-аналитики. Используйте его, чтобы избежать отслеживания. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
* **URL Tracking filter** enhances privacy by removing tracking parameters from URLs. Когда пользователь включает блокировку параметров отслеживания в модуле Антитрекинга, автоматически включается этот фильтр. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
* **Social media filter** removes numerous "Like" and "Tweet" buttons and other social media integrations on popular websites. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
* **Annoyances filter** blocks irritating elements on web pages. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt) Включает следующие фильтры AdGuard (все они могут быть включены независимо от фильтра раздражителей):
    * **Cookie Notices** blocks cookie notices on web pages. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    * **Popups** blocks all kinds of pop-ups that are not necessary for websites' operation. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    * **Mobile App Banners** blocks banners that promote mobile apps of websites. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    * **Widgets** blocks third-party widgets: online assistants, live support chats, etc. [View rules](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    * **Other Annoyances** blocks elements that do not fall under the popular categories of annoyances. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)
* **Filter unblocking search ads and self-promotions** unblocks ads that may be useful to users. Подробнее о фильтре можете узнать на [этой странице](search-ads.md). [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
* **Russian filter** removes ads from websites in Russian. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
* **German filter** removes ads from websites in German. Изначально основан на фильтре [EasyList Germany](https://easylist.to/) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
* **French filter** removes ads from websites in French. Изначально основан на фильтре [Liste FR ](https://forums.lanik.us/viewforum.php?f=91) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
* **Japanese filter** removes ads from websites in Japanese. Изначально основан на фильтре F[Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
* **Dutch filter** removes ads from websites in Dutch. Изначально основан на фильтре [EasyList Dutch](https://easylist.to/) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
* **Spanish/Portuguese filter** removes ads from websites in Spanish and Portuguese. Изначально основан на фильтре [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
* **Turkish filter** removes ads from websites in Turkish. Создан нами в соответствии с жалобами пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
* **Chinese filter** removes ads from websites in Chinese. Изначально основан на фильтре [EasyList China](http://abpchina.org/forum/forum.php) и доработан нами исходя из жалоб и сообщений пользователей. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
* **Experimental filter** serves to test some new filtering rules that can potentially cause conflicts and mess with websites' work. В случае успешной проверки правила из этого фильтра добавляются в основные фильтры. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
* **Mobile ads filter** blocks ads on mobile devices. Содержит все известные нам рекламные сети. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
* **DNS-фильтр** составлен из нескольких фильтров (Базовый фильтр AdGuard, Фильтр социальных сетей, Фильтр счётчиков и систем аналитики, Фильтр мобильной рекламы, EasyList и EasyPrivacy) и специально упрощён для лучшей совместимости с блокировкой рекламы на DNS-уровне. Этот фильтр используется серверами [AdGuard DNS](https://adguard-dns.io/kb) для блокировки рекламы и трекинга. [Посмотреть правила](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)

## Политика фильтров AdGuard

Наша политика фильтрации определяет, что фильтры AdGuard должны блокировать, а что нет, а также регулирует порядок добавления и удаления правил из фильтров. Чтобы узнать больше, прочтите полный текст политики фильтров [AdGuard](filter-policy.md).

## Участвовать в развитии фильтров AdGuard

Нам очень повезло иметь вокруг себя сообщество, которое не только любит AdGuard, но и непосредственно поддерживает нас. Большое количество людей становятся волонтёрами и самыми различными способами помогают улучшить AdGuard для себя и всех остальных. Вы тоже можете помочь! Мы, в свою очередь, счастливы вознаградить наиболее активных членов сообщества. Что можно сделать?

### Сообщать о проблемах

Мы полагаемся на сообщество в вопросе обратной связи по нашим фильтрам. Таким образом мы можем быть уверены, что наши фильтры всегда релевантны и мы эффективно их обновляем. Чтобы сообщить о проблеме (незаблокированная реклама, ложное срабатывание), используйте этот [веб-инструмент](https://agrd.io/report).

### Предложить правило фильтрации

В нашем [репозитории фильтров на GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) вы найдёте большое количество открытых задач. Каждая из них относится к проблеме на каком-либо сайте — пропущенная реклама, ложное срабатывание и т. д. Выбирайте любую и предлагайте в комментариях новые правила для фильтров. Инженеры фильтров AdGuard рассмотрят ваше предложение и добавят правило в фильтры, если оно окажется корректным.

Здесь вы можете найти [официальную документацию](/general/ad-filtering/create-own-filters.md) по синтаксису правил фильтрации AdGuard. Вам потребуется ознакомиться с ней перед тем, как вы сможете создавать собственные правила фильтрации.

### Другие способы помочь

У нас есть [специальная страница](https://adguard.com/contribute.html), на которой вы можете узнать больше о способах поучаствовать в развитии AdGuard.



