---
title: Paramètres réseau
sidebar_position: 3
---

:::info

Cet article décrit AdGuard pour Windows v8.0, un bloqueur de publicité complet qui protège votre appareil au niveau du système. Il s'agit d'une version bêta encore en développement. Pour l'essayer, téléchargez la [version bêta d'AdGuard pour Windows](https://agrd.io/windows_beta).

:::

Cette section vous permet de gérer la façon dont AdGuard filtre votre trafic Internet et fournit des outils supplémentaires pour contrôler les fonctionnalités liées au réseau.

![Paramètres réseau](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## Utiliser AdGuard comme proxy HTTP

Activez cette option pour que AdGuard fonctionne en tant que proxy HTTP. Tout le trafic qui le traverse sera soumis au filtrage — pas seulement sur votre ordinateur, mais aussi sur d'autres appareils de votre réseau domestique.

Pour filtrer le trafic sur d'autres appareils, installez-y le certificat racine d'AdGuard et configurez le proxy manuellement.

Les autres paramètres sont activés par défaut.

## Filtrage HTTPS

La plupart des sites Web utilisent aujourd'hui le chiffrement HTTPS. Sans filtrage HTTPS, AdGuard ne peut pas bloquer les publicités sur des sites Web comme YouTube, Facebook ou X (Twitter).

Nous vous recommandons de laisser l'option _Filtrer HTTPS_ activée, sauf si vous avez une raison particulière de la désactiver.

Avec cette option, vous pouvez :

- Réinstaller ou télécharger le certificat AdGuard

- Ajouter des sites Web à une liste qui ne sera pas filtrée

- Choisir de filtrer ou pas les sites web dotés de certificats EV (Extended Validation)

## Proxy pour les mises à jour des applications et des filtres

Ici, vous pouvez choisir quel proxy AdGuard doit utiliser pour télécharger les mises à jour des filtres ou les nouvelles versions de l'app — le proxy système, un proxy personnalisé ou aucun proxy.

![Paramètres du proxy](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## Utiliser le pilote SockFilter

Activez cette option pour utiliser le pilote SockFilter, qui aide à bloquer les publicités et les traqueurs dans les apps sur Windows 8 et versions ultérieures.

Si cette option est désactivée, AdGuard passera au pilote WFP plus ancien.
