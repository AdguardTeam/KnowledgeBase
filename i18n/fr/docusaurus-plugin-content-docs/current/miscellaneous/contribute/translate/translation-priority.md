---
title: Comment hiérarchiser les traductions des fichiers Crowdin
sidebar_position: 5
---

Il existe cinq grands projets AdGuard sur Crowdin - [AdGuard Applications](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), et [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases).

Nous n'avons pas de directives claires sur les fichiers ou les produits avec lesquels commencer travailler sur le projet *AdGuard Applications*. Choisissez simplement n'importe quel produit que vous préférez.

Il y a juste deux ou trois choses que nous voulons mentionner :

- Vous ne pouvez voir l'application que dans les langues pour lesquelles toutes les traductions sont effectuées dans Crowdin ;
- Nous vous recommandons de traduire les descriptions des magasins d'applications en deuxième lieu, car sans la traduction des produits eux-mêmes, les descriptions ne seront pas nécessaires.

La situation est différente dans le projet *AdGuard Websites*. Des langues peuvent être ajoutées au site même si un ensemble complet de traductions n'est pas disponible. Toutefois, cela dépend des fichiers qui ont déjà été traduits. C'est pourquoi nous vous recommandons de commencer par les fichiers les plus importants — ils sont répertoriés ci-dessous :

[Site Web du Bloqueur AdGuard](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[Site web AdGuard VPN](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[Site web AdGuard DNS](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

Adding new strings as well as updating existing ones in these files requires special attention from the project translators and proofreaders.

In addition to websites, there is a file for translating [transactional emails](https://crowdin.com/project/adguard-websites/en#/emails) in the AdGuard Websites project. Newly added strings in this file also have a high translation priority.
