---
title: 'AdGuard в Crowdin: что переводить в первую очередь'
sidebar_position: 5
---

В Crowdin есть пять основных проектов AdGuard — [AdGuard Applications](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), и [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases).

У нас нет чётких указаний, с каких файлов или продуктов проекта *AdGuard Applications*, а также проектов для баз знаний, начинать. Просто выберите любой понравившийся продукт.

Мы хотим подчеркнуть только пару моментов:

- Наше приложение становится доступным только на тех языках, для которых выполнены все переводы в Crowdin;
- Мы рекомендуем переводить описания для магазинов приложений во вторую очередь, потому что без перевода самих продуктов описания будут не нужны.

В проекте *AdGuard Websites* ситуация иная. Языки могут быть добавлены на сайт, даже если сайт полностью не переведён. Однако переводы некоторых файлов всё-таки необходимы для добавления локали. Именно с них мы и рекомендуем вам начинать — они перечислены ниже:

[Сайт блокировщика рекламы AdGuard (папка «adguard.com»‎)](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[Сайт AdGuard VPN (папка «adguard-vpn.com»‎)](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[Сайт AdGuard DNS (папка «adguard-dns.com»)](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

Добавление новых строк, а также обновление существующих в этих файлах требует особого внимания со стороны переводчиков и пруфридеров проекта.

Помимо сайтов в проекте AdGuard Websites есть файл для перевода [транзакционных писем](https://crowdin.com/project/adguard-websites/de#/emails). Вновь добавленные строки в этом файле также имеют высокий приоритет.
