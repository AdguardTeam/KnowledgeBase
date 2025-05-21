---
title: How to prioritize the translations of Crowdin files
sidebar_position: 5
---

There are seven AdGuard projects on Crowdin:

- [AdGuard Applications](https://crowdin.com/project/adguard-applications)
- [AdGuard Websites](https://crowdin.com/project/adguard-websites)
- [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base)
- [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base)
- [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases)
- AdGuard Mail Knowledge Base
- AdGuard Glossary

The first five are actively translated. *AdGuard Mail Knowledge Base* is not available for translation yet. *AdGuard Glossary*, yalnızca terimleri depolamak ve yönetmek için kullanılır. Terim eklemek veya düzenlemek istiyorsanız, bunu doğrudan düzenleyici çalışma alanında yapabilirsiniz.

![Terimleri ekleme *border](https://cdn.adtidy.org/content/kb/ad_blocker/miscellaneous/adguard_translations/adding_terms.png)

## Starting with the Applications Project

*AdGuard Applications* projesinde nereden başlayacağınıza dair kesin kurallar yoktur. Just choose any product you like.

There are just a couple of things we want to mention:

- An app becomes available in a language only after **all** its strings have been translated on Crowdin.
- Translate app store descriptions after the app itself. A description without a translated product is not useful.
- Some files and folders may be outdated — for example, `adguard-vpn-for-desktop` and `adguard-vpn-for-ios-ARCHIVED`. These should not be translated.

## Starting with the Websites Project

The situation is different in the *AdGuard Websites* project. Languages can be added to the website even if a full set of translations is not available. However, this depends on which files have already been translated. That’s why we recommend that you start with the most important files — they are listed below:

[AdGuard Ad Blocker website](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[AdGuard VPN website](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[AdGuard DNS website](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

Adding new strings as well as updating existing ones in these files requires special attention from the project translators and proofreaders.

Sitelere ek olarak, *AdGuard Websites* projesinde [işlemsel e-postalarını](https://crowdin.com/project/adguard-websites/en#/emails) çevirmek için bir dosya vardır. Newly added strings in this file also have a high translation priority.
