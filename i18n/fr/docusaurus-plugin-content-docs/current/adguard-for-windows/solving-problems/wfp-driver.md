---
title: Pilote WFP
sidebar_position: 1
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Pour filtrer le trafic réseau, AdGuard utilise un pilote réseau. Il y a deux options : pilote TDI et pilote WFP. Bien qu'un pilote WFP soit généralement préférable et est activé par défaut pour toutes les versions récentes de Windows (Windows 8 et ultérieures), il peut potentiellement causer des problèmes de compatibilité, notamment avec certains antivirus. Ces problèmes et les erreurs qui en découlent peuvent être très différents dans chaque cas.

Si vous rencontrez un problème que vous soupçonnez d'en être la cause, vous pouvez toujours passer au pilote réseau TDI, plus ancien mais plus stable. Pour cela :

1. Accédez à *Paramètres → Réseau*.

2. Désactivez le pilote WFP comme indiqué sur cette image :

![Pilote WFP *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
