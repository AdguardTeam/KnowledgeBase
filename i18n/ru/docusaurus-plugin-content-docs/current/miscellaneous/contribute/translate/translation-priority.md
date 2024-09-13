---
title: 'AdGuard в Crowdin: что переводить в первую очередь'
sidebar_position: 5
---

There are five major AdGuard projects on Crowdin — [AdGuard Applications](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), and [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases).

У нас нет чётких указаний, с каких файлов или продуктов проекта *AdGuard Applications*, а также проектов для баз знаний, начинать. Просто выберите любой понравившийся продукт.

Мы хотим подчеркнуть только пару моментов:

- The app is only available to users in those languages for which all translations have been completed on Crowdin;
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

Помимо сайтов в проекте AdGuard Websites есть файл для перевода [транзакционных писем](https://crowdin.com/project/adguard-websites/en#/emails). Вновь добавленные строки в этом файле также имеют высокий приоритет.
