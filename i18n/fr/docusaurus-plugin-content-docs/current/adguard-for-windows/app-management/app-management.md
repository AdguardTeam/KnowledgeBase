---
title: Gestion des applications
sidebar_position: 1
---

:::info

Cet article décrit AdGuard pour Windows v8.0, un bloqueur de publicité complet qui protège votre appareil au niveau du système. Il s'agit d'une version bêta encore en développement. Pour l'essayer, téléchargez la [version bêta d'AdGuard pour Windows](https://agrd.io/windows_beta).

:::

Dans la section _Gestion des applications_, vous pouvez gérer les paramètres de routage et de filtrage pour toutes les applications installées sur votre appareil.

Une fois qu'AdGuard détecte qu’une app est en ligne, elle est automatiquement ajoutée à la _Gestion des applications_, et son trafic est acheminé via AdGuard.

Par défaut, AdGuard filtre tout le trafic, mais vous pouvez choisir ce qu'il faut exclure.

AdGuard filtre également le trafic HTTPS, car la plupart des sites Web utilisent aujourd'hui HTTPS. Ceci est particulièrement important pour bloquer les publicités sur des sites comme youtube.com, facebook.com, et x.com, où il est impossible de retirer les publicités sans filtrage HTTPS.

Lorsque le routage et le filtrage sont activés pour une application, les icônes situées sous chaque application apparaissent en vert.

Vous pouvez laisser les paramètres tels quels, désactiver à la fois le filtrage et le routage, ou les affiner manuellement pour chaque app. Vous pouvez également accéder aux statistiques de l'application.

![Statistiques de l'application](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Fonctionnement du filtrage et du routage des applications dans AdGuard pour Windows v8.0

AdGuard pour Windows v8.0 introduit une logique mise à jour pour la gestion des applications. Cela permet d’éviter les problèmes de compatibilité tout en vous donnant le contrôle sur les applications qui sont filtrées. Voyons comment cela fonctionne.

Il existe des applications "sans problème" et "problématiques". Certaines applications sont considérées comme "problématiques" et peuvent ne pas fonctionner correctement lorsqu'elles sont acheminées par AdGuard. Cela peut être causé par des fonctionnalités telles que l'interception HTTPS ou la mise en proxy.

Pour éviter de perturber les applications dès le départ, AdGuard ne filtre pas tout de manière indiscriminée. À la place, il s’appuie sur une liste de compatibilité — un ensemble d’applications connues pour fonctionner correctement avec le filtrage activé.

:::note

"Ne pas tout filtrer" ne signifie pas "ne rien filtrer". Les applications de confiance (comme les navigateurs) sont toujours filtrées.

:::

Chaque application dispose de trois couches de traitement indépendantes : le routage du trafic via AdGuard, le filtrage (blocage des publicités et des traceurs) et le filtrage HTTPS (interception du trafic chiffré).

Ces valeurs sont déterminées par trois sources :

- _Liste de compatibilité_

  Des applications testées par notre équipe et confirmées comme correctes avec le filtrage.
  Cette liste est mise à jour grâce à des tests internes et aux rapports des utilisateurs dans le [dépôt dédié au recensement des problèmes de compatibilité d'AdGuard](https://github.com/AdguardTeam/CompatibilityIssues).

- _Listes d'exclusion_

  Listes distinctes pour le routage, le filtrage et le filtrage HTTPS. Cela inclut des applications connues pour dysfonctionner lorsque le filtrage est appliqué.

- _Filtrer les applications inconnues_

  Ce paramètre définit la manière dont toutes les autres applications (non présentes dans aucune liste) sont gérées.

:::info

Les listes de compatibilité sont continuellement mises à jour — et vous pouvez aider à les améliorer. Si vous remarquez qu'une application ne fonctionne pas correctement lorsque le filtrage est activé, **signalez-le sur [GitHub](https://github.com/AdguardTeam/CompatibilityIssues)** ou contactez le service d'assistance via l'application. Vos commentaires aident à améliorer AdGuard pour tout le monde.

:::

## Filtrer les applications inconnues

![Filter unknown apps \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/app-management.png)

Le paramètre _Filtrer les applications inconnues_ est activé par défaut et détermine la façon dont AdGuard gère les nouvelles applications qui ne figurent pas encore dans les listes de compatibilité ou d'exclusion

Lorsque cette option est activée, le trafic de l'application est acheminé via AdGuard, le filtrage standard est appliqué et **le filtrage HTTPS n'est PAS activé automatiquement**. Ceci est intentionnel : l’interception HTTPS est la partie la plus sensible du traitement du trafic et peut affecter le comportement de l’application.

Lorsqu'il est désactivé, les nouvelles applications ne sont pas traitées par AdGuard — vous devrez configurer manuellement le routage pour elles.

Voici un aperçu rapide de la façon dont les différentes catégories d'applications se comportent selon ce paramètre :

| Catégorie de l'application                                                                                    | Activé (par défaut)                    | Désactiver                                              |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| Compatible ou sans problème (p. ex., navigateurs)          | · Routage ✅ <br /> · Filtrage ✅ <br /> · Filtrage HTTPS ✅ | Même comportement — ne dépend pas du commutateur        |
| Problématique (provenant des listes d'exclusion, le filtrage peut entraîner des problèmes) | · Routage ❌ <br /> · Filtrage ❌ <br /> · Filtrage HTTPS ❌ | Même comportement — ne dépend pas du commutateur        |
| Autres / (nouvellement détectés, inconnus, non présents dans les listes)                   | · Routage ✅ <br /> · Filtrage ✅ <br /> · Filtrage HTTPS ❌ | Non acheminé via AdGuard, doit être activé manuellement |

:::info Que se passe-t-il lors de la réinitialisation

Si vous cliquez sur **Réinitialiser par défaut**, deux choses se produisent :

1. Toutes les autorisations spécifiques à l’application sont supprimées (définies sur « non configuré »).
2. Des règles prédéfinies sont appliquées aux applications sûres connues (telles que les navigateurs), y compris le filtrage HTTPS.

:::
