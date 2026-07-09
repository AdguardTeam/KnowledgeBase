---
title: 'AdGuard в Crowdin: что переводить в первую очередь'
sidebar_position: 5
---

На платформе Crowdin есть семь проектов AdGuard:

- [AdGuard Applications (Приложения AdGuard)](https://crowdin.com/project/adguard-applications)
- [AdGuard Websites (Сайты AdGuard)](https://crowdin.com/project/adguard-websites)
- [AdGuard Ad Blocker Knowledge Base (База знаний Блокировщика рекламы AdGuard)](https://crowdin.com/project/adguard-knowledge-base)
- [AdGuard VPN Knowledge Base (База знаний AdGuard VPN)](https://crowdin.com/project/adguard-vpn-knowledge-base)
- [AdGuard DNS Knowledge Base (База знаний AdGuard DNS)](https://crowdin.com/project/adguard-knowledge-bases)
- AdGuard Mail Knowledge Base (База знаний AdGuard Mail)
- AdGuard Glossary (Глоссарий AdGuard)

Первые пять активно переводятся. *База знаний AdGuard Mail* пока недоступна для перевода. *Глоссарий AdGuard* используется исключительно для хранения и управления терминологией. Если вы хотите добавить или редактировать термины, вы можете сделать это прямо в рабочем пространстве редактора.

![Добавление терминов *border](https://cdn.adtidy.org/content/kb/ad_blocker/miscellaneous/adguard_translations/adding_terms.png)

## Начало работы с проектом AdGuard Applications

В проекте *AdGuard Applications* нет строгих рекомендаций относительно того, с чего начинать. Просто выберите любой понравившийся продукт.

Мы хотим подчеркнуть только пару моментов:

- Приложение становится доступным на определённом языке только после того, как **все** его строки будут переведены на Crowdin.
- Переводите описания для магазинов приложений после самого приложения. Описание без переведённого продукта бесполезно.
- Некоторые файлы и папки могут быть устаревшими — например, `adguard-vpn-for-desktop` и `adguard-vpn-for-ios-ARCHIVED`. Их не следует переводить.

## Начало работы с проектом AdGuard Websites

В проекте *AdGuard Websites* ситуация иная. Языки могут быть добавлены на сайт, даже если сайт полностью не переведён. Однако это зависит от того, какие файлы уже переведены. Поэтому мы рекомендуем вам начать с самых важных файлов — они перечислены ниже:

[Сайт блокировщика рекламы AdGuard](https://crowdin.com/project/adguard-websites/en#/adguard.com)

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

Помимо сайтов, в проекте *AdGuard Websites* есть файл для перевода [транзакционных писем](https://crowdin.com/project/adguard-websites/en#/emails). Вновь добавленные строки в этом файле также имеют высокий приоритет.
