---
title: Comment hiérarchiser les traductions des fichiers Crowdin
sidebar_position: 5
---

Il existe cinq projets majeurs d'AdGuard sur Crowdin — [Applications AdGuard](https://crowdin.com/project/adguard-applications), [Sites Web AdGuard](https://crowdin.com/project/adguard-websites), [Base de connaissances du Bloqueur AdGuard](https://crowdin.com/project/adguard-knowledge-base), [Base de connaissances d'AdGuard VPN](https://crowdin.com/project/adguard-vpn-knowledge-base), et [Base de connaissances d'AdGuard DNS](https://crowdin.com/project/adguard-knowledge-bases).

Nous n'avons pas de directives claires sur les fichiers ou les produits avec lesquels commencer travailler sur le projet *AdGuard Applications*. Choisissez simplement n'importe quel produit que vous préférez.

Il y a juste deux ou trois choses que nous voulons mentionner :

- L'application n'est disponible que pour les utilisateurs dans les langues pour lesquelles toutes les traductions ont été complétées sur Crowdin ;
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

L'ajout de nouvelles chaînes de caractères et la mise à jour des chaînes existantes dans ces fichiers requièrent une attention particulière de la part des traducteurs et des réviseurs du projet.

Outre les sites web, il existe un fichier pour la traduction des [e-mails transactionnels](https://crowdin.com/project/adguard-websites/en#/emails) dans le projet AdGuard Websites. Les chaînes nouvellement ajoutées dans ce fichier ont également une priorité de traduction élevée.
