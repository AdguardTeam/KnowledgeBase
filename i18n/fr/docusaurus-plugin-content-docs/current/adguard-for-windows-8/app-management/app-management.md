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

To avoid breaking apps out of the box, AdGuard does not filter everything indiscriminately. Instead, it relies on a compatibility list — a set of apps that are known to work correctly with filtering enabled.

:::note

“Not filtering everything” does not mean “filter nothing.” Trusted apps (like browsers) are always filtered.

:::

Each app has three independent processing layers: traffic routing through AdGuard, filtering (blocking ads and trackers), and HTTPS filtering (interception of encrypted traffic).

These are determined by three sources:

- _Compatibility list_

  Apps that have been tested by our team and are confirmed to work correctly with filtering.
  This list is updated through internal testing and user reports in the [dedicated repository for listing AdGuard compatibility issues](https://github.com/AdguardTeam/CompatibilityIssues).

- _Exclusion lists_

  Separate lists for routing, filtering, and HTTPS filtering. These include apps known to break when filtering is applied.

- _Filter unknown apps_

  This setting defines how all other apps (not present in any list) are handled.

:::info

The compatibility lists are continuously updated — and you can help improve them. If you notice that an app does not work correctly with filtering enabled, **report it on [GitHub](https://github.com/AdguardTeam/CompatibilityIssues)** or contact support via the app. Your feedback helps improve AdGuard for everyone.

:::

## Filter unknown apps

![Filter unknown apps \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/app-management.png)

The _Filter unknown apps_ setting is enabled by default and determines how AdGuard handles new apps that are not yet present in the compatibility or exclusion lists

When enabled, app traffic is routed through AdGuard, regular filtering is applied, and **HTTPS filtering is NOT enabled automatically**. This is intentional: HTTPS interception is the most sensitive part of traffic processing and may affect app behavior.

When disabled, new apps are not processed by AdGuard — you will need to manually configure routing for them.

Here is a quick overview of how different app categories behave depending on this setting:

| App category                                                                                    | Toggle on (default)                      | Toggle off                                           |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| Compatible, or problem-free (e.g., browsers) | · Routing ✅ <br /> · Filtering ✅ <br /> · HTTPS filtering ✅ | Same behavior — does not depend on toggle            |
| Problematic (from exclusion lists, filtering may cause issues)               | · Routing ❌ <br /> · Filtering ❌ <br /> · HTTPS filtering ❌ | Same behavior — does not depend on toggle            |
| Others / (newly detected, unknown, not in lists)                             | · Routing ✅ <br /> · Filtering ✅ <br /> · HTTPS filtering ❌ | Not routed through AdGuard, must be enabled manually |

:::info What happens on reset

If you click **Reset to default**, two things happen:

1. All app-specific permissions are cleared (set to “not configured”).
2. Predefined rules are applied to known safe apps (such as browsers), including HTTPS filtering.

:::
