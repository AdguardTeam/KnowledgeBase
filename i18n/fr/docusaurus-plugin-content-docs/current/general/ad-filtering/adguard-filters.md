---
title: Filtres AdGuard
sidebar_position: 2
---

:::info

Cet article concerne les filtres que nous développons et qui sont préinstallés dans AdGuard. Pour les découvrir, vous pouvez [télécharger l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Cet article concerne les filtres que nous créons pour les utiliser dans AdGuard et d'autres logiciels de blocage des publicités (par exemple, uBlock Origin). Les filtres sont des ensembles de règles au format texte utilisés par les applications et programmes AdGuard pour filtrer le contenu publicitaire et menaçant pour la vie privée, tels que les bannières, les pop-ups ou les traqueurs. Les filtres contiennent des listes de règles basées sur leur objectif. Les filtres de langue incluent des règles pour les segments linguistiques correspondants d'Internet (ex. : filtre allemand). Les filtres basés sur les tâches regroupent des règles qui accomplissent une tâche spécifique, comme le filtre des réseaux sociaux ou le filtre de protection contre le suivi. Activer ou désactiver un filtre facilite la gestion de la liste complète des règles d'un coup.

## Les filtres AdGuard

- Le **filtre de base** supprime les publicités sur les sites en anglais. Initialement basé sur [EasyList](https://easylist.to/) et modifié par nos soins. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- Le **filtre de protection contre le suivi** est une liste complète de divers compteurs en ligne et outils d'analyse web. Utilisez-le pour masquer vos actions en ligne et éviter le suivi. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- Le **filtre du suivi des URL** améliore la confidentialité en supprimant les paramètres de suivi des URL. Lorsqu'un utilisateur choisit de bloquer les paramètres de suivi en mode furtif, ce filtre sera activé automatiquement. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- Le **filtre des réseaux sociaux** supprime de nombreux boutons "Like" et "Tweet" ainsi que d'autres intégrations de réseaux sociaux sur les sites populaires. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- Le **filtre anti-nuisances** bloque les éléments irritants sur les pages web. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt). Comprend les filtres suivants d'AdGuard (chacun peut être activé séparément) :

    - **Avis de cookies** bloque les avis de cookies sur les pages web. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **Pop-ups** bloque tous les types de pop-ups qui ne sont pas nécessaires au fonctionnement des sites. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **Bannières d'applications mobiles** bloque les bannières qui promeuvent les applications mobiles des sites. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **Widgets** bloque les widgets tiers : assistants en ligne, chats de support, etc. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **Autres éléments gênants** bloque les éléments qui ne rentrent pas dans les catégories populaires de gêne. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)

- **Filtre de déblocage des publicités de recherche et des autopromotions** débloque les publicités qui peuvent être utiles aux utilisateurs. En savoir plus sur ce filtre sur [cette page](../search-ads). [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- Le filtre de **protection contre le suivi des e-mails** bloque les pixels de suivi intégrés dans les e-mails afin d’empêcher les expéditeurs de surveiller quand vous ouvrez les messages et de collecter des informations sur votre appareil ou votre activité. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_25_Mail_Tracking_Protection/filter.txt)
- **Filtre russe** supprime les publicités des sites en russe. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- **Filtre allemand** supprime les publicités des sites en allemand. Initialement basé sur le filtre [EasyList Germany](https://easylist.to/) et modifié selon les plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- **Filtre français** supprime les publicités des sites en français. Basé initialement sur la [Liste FR](https://forums.lanik.us/viewforum.php?f=91) et modifié selon les plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **Filtre japonais** supprime les publicités des sites en japonais. Basé initialement sur le filtre [Fanboy’s Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt) et modifié selon les plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **Filtre néerlandais** supprime les publicités des sites en néerlandais. Basé sur le filtre [EasyList Dutch](https://easylist.to/) et modifié selon les plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- **Filtre espagnol/portugais** supprime les publicités des sites en espagnol et portugais. Basé sur le filtre [Fanboy’s Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) et modifié selon les plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **Filtre turc** supprime les publicités des sites en turc. Créé selon les plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- **Filtre chinois** supprime les publicités des sites en chinois. Basé initialement sur le filtre [EasyList China](https://github.com/easylist/easylistchina) et modifié selon les plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **Filtre ukrainien** supprime les publicités des sites en ukrainien. En savoir plus sur ce filtre sur [cette page](https://adguard.com/en/blog/ukrainian-filter.html). [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_23_Ukrainian/filter.txt)
- **Filtre expérimental** teste de nouvelles règles de filtrage pouvant causer des conflits. Si elles fonctionnent correctement, elles sont ajoutées aux filtres principaux. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- **Filtre pour les publicités mobiles** bloque les publicités sur les appareils mobiles. Contient toutes les régies publicitaires mobiles connues. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **Filtre DNS** — composé de plusieurs autres filtres (filtre de base AdGuard, filtre des réseaux sociaux, filtre spyware, filtre pour les publicités mobiles, EasyList et EasyPrivacy) simplifié pour être mieux compatible avec le blocage DNS. Utilisé par [AdGuard DNS](https://adguard-dns.io/kb) pour bloquer les publicités et le suivi. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)

## Politique de filtres AdGuard

Notre politique de filtres définit ce que les filtres AdGuard doivent ou ne doivent pas bloquer, ainsi que les règles d'ajout et de suppression de règles des filtres. Lisez le texte complet de la [politique de filtres AdGuard](../filter-policy) pour plus de détails.

## Contribuer aux filtres AdGuard

Nous avons la chance d'avoir une communauté qui non seulement aime AdGuard mais contribue également à son amélioration. De nombreuses personnes s'engagent bénévolement de diverses manières pour améliorer l'expérience utilisateur d'AdGuard pour tout le monde. Vous êtes invité à rejoindre cette communauté et à faire une différence. Nous ferons notre part et récompenserons volontiers les membres les plus actifs. Alors, que pouvez-vous faire ?

### Signaler des problèmes

Nous comptons sur la communauté pour nous informer des problèmes liés à nos filtres. Cela nous aide à utiliser notre temps plus efficacement et à garder les filtres constamment mis à jour. Pour soumettre un rapport, veuillez utiliser cet [outil de signalement en ligne](https://agrd.io/report).

### Suggérer des règles de filtrage

Vous trouverez de nombreux problèmes ouverts dans le [dépôt GitHub des filtres](https://github.com/AdguardTeam/AdguardFilters/issues). Chacun d'eux se réfère à un problème avec un site web, tel qu'une publicité manquée ou un faux positif. Choisissez un problème et proposez vos propres règles dans les commentaires. Les ingénieurs de filtres AdGuard examineront vos suggestions et, si elles sont approuvées, ajouteront vos règles aux filtres AdGuard.

Voici la [documentation officielle](../create-own-filters) sur la syntaxe des règles de filtrage AdGuard. Veuillez la lire attentivement : elle vous aidera à créer vos propres règles de filtrage.

### Autres moyens de contribuer

Voici [une page dédiée](https://adguard.com/contribute.html) pour ceux qui souhaitent contribuer à AdGuard d'autres manières.
