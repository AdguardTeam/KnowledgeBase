---
title: 'AdGuard в Crowdin: что переводить в первую очередь'
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

The first five are actively translated. *AdGuard Mail Knowledge Base* is not available for translation yet. *AdGuard Glossary* is used solely for storing and managing terminology. If you want to add or edit terms, you can do it directly in the editor workspace.

![Adding terms *border](https://cdn.adtidy.org/content/kb/ad_blocker/miscellaneous/adguard_translations/adding_terms.png)

## Starting with the Applications Project

There are no strict guidelines on where to begin within the *AdGuard Applications* project. Just choose any product you like.

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

In addition to websites, there is a file for translating [transactional emails](https://crowdin.com/project/adguard-websites/en#/emails) in the *AdGuard Websites* project. Newly added strings in this file also have a high translation priority.
