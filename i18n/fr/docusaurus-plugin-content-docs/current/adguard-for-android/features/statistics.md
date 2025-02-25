---
title: Statistiques
sidebar_position: 3
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicités multifonctionnel qui protège votre appareil au niveau système. Pour voir comment il fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Le module _Statistiques_ est accessible en appuyant sur l'onglet _Statistiques_ (quatrième icône à partir de la gauche en bas de l'écran). Cette fonctionnalité vous offre une vue d'ensemble de ce qui se passe avec le trafic sur votre appareil : combien de requêtes sont envoyées et vers quelles entreprises, la quantité de données téléchargées et envoyées, quelles requêtes sont bloquées, et bien plus encore. Vous pouvez choisir d'afficher les statistiques pour la période de temps sélectionnée : 24 heures, 7 jours, 30 jours ou tout le temps.

![Statistiques \*mobile\_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Les statistiques sont organisées en différentes sections.

### Requêtes

Cette section montre le nombre de publicités bloquées, de traqueurs et le nombre total de requêtes. Vous pouvez filtrer les requêtes par type de données : données mobiles, Wi-Fi ou toutes les données combinées.

L'_Activité récente_, anciennement appelée _Journal de filtrage_, montre les 10 000 dernières requêtes traitées par AdGuard. Appuyez sur le menu à trois points (⋮), puis sur _Personnaliser_ pour filtrer les requêtes par statut (_régulier_, _bloqué_, _modifié_ ou _autorisé_) ou par origine (_première partie_ ou _tiers_).

Vous pouvez appuyer sur une requête pour voir ses détails et ajouter une règle de blocage ou de déblocage en un seul clic.

### Utilisation des données

Cette section affiche la quantité de données téléchargées et envoyées ainsi que le trafic économisé pour le type de données sélectionné (données mobiles, Wi-Fi ou toutes). Appuyez sur _enregistré_, _téléchargé_ ou _téléchargé_ pour afficher le graphique de l'utilisation des données au fil du temps.

### Applications

Cette section affiche les statistiques pour toutes les applications installées sur votre appareil. Vous pouvez trier les applications par le nombre de publicités ou de traqueurs bloqués, ou par le nombre de requêtes envoyées.

Tap _View all apps_ to expand the list of your apps, sorted by the number of ads, trackers, or requests.

![List of apps \*mobile\_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

If you tap an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to.

### Companies

This section displays companies that your device reaches out to. What does it mean? AdGuard detects the domains your device sends requests to and determines which companies they belong to. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS statistics

This section shows data about the requests handled by _DNS protection_. You can see the total number of requests sent and how many were blocked by AdGuard in figures and graphs. You'll also find statistics on the amount of traffic saved and data downloaded and uploaded.

### Battery usage

This section displays statistics on the device resources used by AdGuard during the last 24 hours. The data may differ from the stats displayed in your device settings. This happens because the system attributes the traffic of all filtered apps to AdGuard. Thus, the device shows that AdGuard consumes more resources than it actually does. [Read more about battery and traffic consumption issues](/adguard-for-android/solving-problems/battery/).
