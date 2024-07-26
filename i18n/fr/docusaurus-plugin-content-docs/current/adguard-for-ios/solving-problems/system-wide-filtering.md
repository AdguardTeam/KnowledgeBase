---
title: Comment activer le filtrage à l'échelle du système dans AdGuard pour iOS
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour iOS, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir de vos propres yeux comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## À propos du filtrage à l'échelle du système

Le filtrage à l'échelle du système consiste à bloquer les publicités et les traqueurs au-delà du navigateur Safari, c'est-à-dire dans d'autres applications et navigateurs. Cet article vous expliquera comment l'activer sur votre appareil iOS.

Sur iOS, le seul moyen de bloquer les publicités et les traqueurs à l'échelle du système est d'utiliser [le filtrage DNS](https://adguard-dns.io/kb/general/dns-filtering/).

Tout d'abord, vous devez activer la protection DNS. Pour cela :

1. Ouvrez *AdGuard pour iOS*.
2. Appuyez sur l'icône *Protection* (la deuxième icône dans la barre de menu inférieure).
3. Activer le commutateur de *protection DNS*.

![Écran de protection DNS *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Si votre objectif est de bloquer les publicités et les traqueurs à l'échelle du système, trois options sont disponibles :

 1. Utilisez le filtre AdGuard DNS (*Protection* (l'icône du bouclier dans le menu du bas) → *Protection DNS* → *Filtrage DNS* → *Filtres DNS* → *Filtre AdGuard DNS*).
 2. Utilisez le serveur AdGuard DNS (*Protection* (l'icône du bouclier dans le menu inférieur) → *Protection DNS* → *Serveur DNS* → *AdGuard DNS*) ou un autre serveur DNS de blocage selon vos préférences.
 3. Ajoutez un filtre DNS personnalisé/fichier d'hôtes de votre choix.

La première et la troisième option présentent plusieurs avantages :

- Vous pouvez utiliser n'importe quel serveur DNS à votre discrétion et vous n'êtes pas lié à un serveur de blocage spécifique, car le filtre effectue le blocage.
- Vous pouvez ajouter plusieurs filtres DNS et/ou fichiers hôtes (même si en utiliser trop pourrait ralentir AdGuard).

![Comment fonctionne le filtrage DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## Comment ajouter un filtre DNS/fichier d'hôtes personnalisé

Vous pouvez ajouter n'importe quel filtre DNS ou fichier d'hôtes de votre choix.

Pour les besoins de l'exemple, ajoutons [OISD Blocklist Big](https://oisd.nl/).

1. Copiez ce lien `: https://big.oisd.nl` (c'est un lien pour le filtre OISD Blocklist Big filter)
2. Ouvrez *Protection* (l'icône du bouclier dans le menu du bas) → *Protection DNS* → *Filtrage DNS* → *Filtres DNS*.
3. Appuyez sur *Ajouter un filtre*.
4. Collez le lien dans le champ URL du filtre.
5. Appuyez sur *Suivant* → *Ajouter*.

![Ajout d'un écran de filtre DNS *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Ajoutez n'importe quel nombre d'autres filtres DNS de la même manière en collant une URL différente à l'étape 4. Vous pouvez trouver divers filtres et liens vers ceux-ci [ici](https://filterlists.com).
