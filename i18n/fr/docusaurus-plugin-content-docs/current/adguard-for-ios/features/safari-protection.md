---
title: Protection Safari
sidebar_position: 1
---

:::info

Cet article parle de AdGuard pour iOS, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

### Bloqueurs de contenu {#content-blockers}

Les bloqueurs de contenu servent de « conteneurs » pour les règles de filtrage qui effectuent le véritable travail de blocage des publicités et de suivi. AdGuard pour iOS contient six bloqueurs de contenu : Général, Confidentialité, Social, Sécurité, Personnalisé et Autre. Auparavant, Apple n'autorisait chaque bloqueur de contenu qu'à contenir un maximum de 50 000 règles de filtrage, mais avec la sortie d'iOS 15, la limite supérieure est passée à 150 000 règles.

Tous les bloqueurs de contenu, leur état, les filtres thématiques qu'ils incluent actuellement et le nombre total de règles de filtrage utilisées peuvent être consultés sur l'écran correspondant dans les _Paramètres avancés_ (appuyez sur l'icône en forme de roue dentée en bas à droite → _Général_ → _Paramètres avancés_ → _Bloqueurs de contenu_).

![Bloqueurs de contenu \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Gardez tous les bloqueurs de contenu activés pour une qualité de filtrage optimale.

:::

### Filtres {#filters}

Le travail des bloqueurs de contenu est basé sur des filtres, parfois également appelés listes de filtres. Chaque filtre est une liste de règles de filtrage. Si vous disposez d'un bloqueur de publicités activé lors de la navigation, il vérifie en permanence les pages visitées et les éléments qui s'y trouvent par rapport à ces règles de filtrage et bloque tout ce qui correspond. Des règles sont développées pour bloquer les publicités, les trackers et bien plus encore.

Tous les filtres sont regroupés en catégories thématiques. Pour voir la liste complète de ces catégories (à ne pas confondre avec les bloqueurs de contenu), ouvrez la section _Protection_ en appuyant sur l'icône en forme de bouclier, puis accédez à _Protection Safari_ → _Filtres_.

![Groupes de filtres \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Il y en a huit, chaque catégorie regroupe plusieurs filtres qui servent et partagent un objectif commun, à savoir le blocage des publicités, les widgets de réseaux sociaux, les notifications de cookies, la protection de l'utilisateur contre les escroqueries en ligne. Pour décider quels filtres répondent à vos besoins, lisez leurs descriptions et naviguez selon les étiquettes (« annonces », « confidentialité », « recommandé », etc.).

:::note

Un plus grand nombre de filtres activés ne garantit pas qu'il y aura moins de publicités. Un grand nombre de filtres différents activés simultanément réduit la qualité du blocage des publicités.

:::

La catégorie des filtres personnalisés est vide par défaut pour que les utilisateurs puissent y ajouter leurs filtres par URL. Vous pouvez trouver des filtres sur Internet ou même essayer d'en [créer un vous-même](/general/ad-filtering/create-own-filters).

### Règles utilisateur {#user-rules}

Ici, vous pouvez ajouter de nouvelles règles — soit en les saisissant manuellement, soit en utilisant [l'outil de blocage manuel AdGuard dans Safari](#assistant). Utilisez cet outil pour personnaliser le filtrage Safari sans ajouter une liste complète de filtres.

Apprenez [comment créer vos propres filtres publicitaires] (/general/ad-filtering/create-own-filters). Mais veuillez noter que beaucoup d’entre eux ne fonctionneront pas dans Safari sur iOS.

![Écran des règles utilisateur \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Liste d’autorisation {#allowlist}

La troisième section de l'écran _Protection Safari_. Si vous souhaitez désactiver le blocage des publicités sur un certain site web, la liste d’autorisation vous sera utile. Elle vous permet d'ajouter des domaines et sous-domaines aux exclusions. AdGuard pour iOS dispose d'une fonctionnalité d'importation/exportation, de sorte que la liste d'autorisation d'un appareil peut être facilement transférée à un autre.
