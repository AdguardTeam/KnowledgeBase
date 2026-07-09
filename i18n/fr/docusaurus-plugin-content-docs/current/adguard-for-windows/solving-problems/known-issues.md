---
title: Problèmes connus d'AdGuard pour Windows
sidebar_position: 11
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment il fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problèmes de compatibilité entre AdGuard pour Windows et AdGuard VPN pour Windows

Une fois installés, AdGuard pour Windows et AdGuard VPN commencent à fonctionner ensemble sans aucun effort de votre part. Cependant, la modification de certains de leurs paramètres par défaut peut entraîner un fonctionnement incorrect des applications lorsqu'elles s'exécutent en même temps.

Il existe deux paramètres spécifiques dans AdGuard pour Windows : *Utiliser le mode de pilote de redirection* et *Filtrer localhost*. Par défaut, le premier est désactivé, et le second est activé. Changer l'un de ces paramètres perturbera inévitablement le filtrage d'AdGuard si le Bloqueur AdGuard et AdGuard VPN sont activés sur votre appareil en même temps.

Changer ces paramètres est seulement nécessaire pour résoudre des problèmes liés au fonctionnement simultané du Bloqueur AdGuard et des applications au niveau du réseau telles que les antivirus, les VPN et les filtres réseau. Si vous rencontrez une situation où vous devez changer l'état par défaut des paramètres ci-dessus et souhaitez toujours que le Bloqueur AdGuard et AdGuard VPN fonctionnent simultanément et correctement — [créez un problème sur GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) afin que nous puissions vous aider personnellement.

Nous travaillons actuellement à surmonter les limitations énumérées ci-dessus concernant le fonctionnement simultané de nos applications.
