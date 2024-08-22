---
title: How to prioritize the translations of Crowdin files
sidebar_position: 5
---

There are five major AdGuard projects on Crowdin — [AdGuard Applications](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), and [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases).

We do not have clear guidelines on which files or products of the *AdGuard Applications* project to start with. Just choose any product you like.

There are just a couple of things we want to mention:

- The app is only available to users in those languages for which all translations have been completed on Crowdin;
- We recommend translating the descriptions for app stores in the second place, because without the translation of products themselves, the descriptions won't be needed.

The situation is different in the *AdGuard Websites* project. Languages can be added to the site even if a full set of translations is not available. However, this depends on which files have already been translated. That's why we recommend that you start with the most important files — they are listed below:

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

In addition to websites, there is a file for translating [transactional emails](https://crowdin.com/project/adguard-websites/en#/emails) in the AdGuard Websites project. Newly added strings in this file also have a high translation priority.
