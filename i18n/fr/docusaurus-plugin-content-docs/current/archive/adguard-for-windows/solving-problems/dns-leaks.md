---
title: Fuites DNS possibles
sidebar_position: 10
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pour Windows autorise les utilisateurs à spécifier une adresse de serveur DNS pour résoudre des requêtes au lieu du serveur DNS système, qui est fourni par votre FAI s'il n'est pas remplacé dans les paramètres du système. L'utilisation d'un serveur DNS autre que celui par défaut peut protéger votre trafic DNS contre l'interception par le FAI. De plus, en choisissant un serveur DNS crypté et/ou filtrant, vous obtenez une couche de protection supplémentaire contre les mauvais acteurs et les publicités ennuyeuses.

De nombreux utilisateurs d'AdGuard pour Windows apprécient la fonctionnalité de protection DNS. Mais certains d'entre eux rencontrent le problème suivant : une vérification sur un site Web comme https://ipleak.net/ montre que les requêtes sont traitées par le serveur DNS par défaut au lieu de celui sélectionné. Dans cet article, nous vous expliquerons pourquoi cela se produit et comment l'éviter.

## Adresse DNS d’amorçage

Les adresses des serveurs DNS peuvent être écrites sous forme d'IPs ou de noms de domaine.
Dans le cas des adresses IP, il n'y a aucune difficulté : AdGuard transmet la requête DNS directement au serveur spécifié dans le module de protection DNS. Cependant, les adresses des serveurs DNS chiffrées, comme DoT ou DoH, sont le plus souvent écrites sous forme de noms de domaine. Dans ce cas, pour résoudre d’abord l’adresse du serveur DNS cryptée, AdGuard envoie une requête DNS à l’adresse d'amorçage, qui est par défaut un serveur DNS système. Cette connexion est ce que les services de contrôle perçoivent comme une fuite.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _List of custom bootstrap addresses_ section
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- click _Save_

## Serveur DNS de repli

Il pourrait arriver qu'AdGuard ne puisse pas atteindre le serveur spécifié à cause d'une connexion Internet faible, d'un délai dépassé défini par défaut ou de problèmes liés au serveur. Dans ce cas, il se connectera au serveur de repli, qui est par défaut un serveur DNS système. Cette connexion sera également considérée par le service de contrôle comme une fuite.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Use custom servers_ option
- then find the _List of custom fallback servers_ section and enter the custom fallback servers one per line

ou

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Don’t use fallback servers_ option

ou

- go to the _Advanced settings_
- scroll down to the _DNS server timeout period_ section
- saisissez un numéro aléatoire élevé
