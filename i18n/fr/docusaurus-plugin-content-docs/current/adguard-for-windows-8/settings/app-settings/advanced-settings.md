---
title: Paramètres avancés
sidebar_position: 4
---

:::info

Cet article décrit AdGuard pour Windows v8.0, un bloqueur de publicité complet qui protège votre appareil au niveau du système. Il s'agit d'une version bêta encore en développement. Pour l'essayer, téléchargez la [version bêta d'AdGuard pour Windows](https://agrd.io/windows_beta).

:::

La section _Paramètres avancés_ contient des options qui vont au-delà des besoins habituels de la plupart des utilisateurs. AdGuard pour Windows fonctionne parfaitement dès l'installation, mais ces paramètres peuvent être utiles dans des cas particuliers ou pour le dépannage.

:::caution

La modification des paramètres avancés sans les comprendre peut entraîner des problèmes de performance, interrompre votre connexion Internet ou affecter votre sécurité et votre confidentialité. Ne les modifiez que si vous savez ce que vous faites ou si notre équipe d'assistance vous le demande.

:::

## Exclure une application du filtrage en saisissant son chemin complet

Si vous souhaitez que AdGuard ignore le filtrage d'une app spécifique, saisissez ici son chemin complet de fichier. Vous pouvez ajouter plusieurs apps en séparant leurs chemins par des points-virgules.

## Activer les notifications pop-up AdGuard

Activez cette fonctionnalité pour voir les notifications contextuelles d'AdGuard. Ils n'apparaissent pas trop souvent et contiennent uniquement des informations importantes. Vous pouvez également rouvrir la dernière notification depuis le menu de la barre d'état système.

## Intercepter automatiquement les liens d'abonnement aux filtres

Lorsque cette option est activée, AdGuard détecte automatiquement les liens d'abonnement aux filtres (comme `abp:subscribe`) et ouvre une fenêtre pour vous aider à les ajouter à vos filtres.

## Utiliser le mode pilote de redirection

Avec cette option activée, AdGuard redirige tout votre trafic vers un serveur proxy local pour le filtrage.

Si cette fonction est désactivée, AdGuard filtre directement le trafic, sans le rediriger. Dans ce mode, Windows considère AdGuard comme la seule application se connectant à Internet, puisque toutes les autres applications passent par elle. Cela peut légèrement améliorer les performances, mais risque de réduire l'efficacité du pare-feu système.

## Ouvrir AdGuard au démarrage du système

Activez cette option pour que la fenêtre AdGuard s'ouvre automatiquement au démarrage de votre PC.

## Activer le filtrage au démarrage du système

Depuis la version 7.12, AdGuard ne filtre pas le trafic automatiquement dès le démarrage de votre PC, sauf si l'option _Lancer AdGuard au démarrage du système_ est activée. Il fonctionne en mode de « veille » passif à la place.

L'activation de cette option permet à AdGuard de filtrer immédiatement le trafic, même si l'application n'a pas encore été ouverte.

## Filtrer localhost

Activez cette option pour permettre à AdGuard de filtrer le trafic de bouclage (localhost), utilisé par certaines applications pour communiquer à l'intérieur du système. Si AdGuard VPN est installé, ce paramètre est toujours activé car le VPN en a besoin pour fonctionner correctement.

## Capture HAR

C'est un outil uniquement pour le débogage. Lorsqu'elle est activée, AdGuard créera un fichier HAR (format HTTP Archive 1.2) contenant des informations détaillées sur toutes les requêtes filtrées. Vous pouvez l'ouvrir dans des applications comme Fiddler.

Attention : cela peut ralentir votre navigation.

## Afficher QUIC dans le journal de filtrage

Lorsque cette option est activée, AdGuard inclut le trafic du protocole QUIC dans le journal de filtrage, mais uniquement pour les requêtes bloquées.

## Bloquer Java

Certains sites Web utilisent encore des plug-ins Java, qui reposent sur une technologie obsolète et non sécurisée. Vous pouvez désactiver ces plug-ins pour des raisons de sécurité.

L'utilisation de l'option _Bloquer Java_ n'affecte pas JavaScript — il restera activé.

## Mode de blocage pour les règles DNS

Choisissez comment AdGuard réagit lorsqu'un domaine est bloqué par une règle DNS basée sur la [syntaxe de type hosts](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Retour avec l'erreur `REFUSED`
- Retour avec l'erreur `NXDOMAIN`
- Retour avec une adresse IP personnalisée

### Adresse IPv4 personnalisée

Si l'option _Adresse IP personnalisée_ est sélectionnée dans le _Mode de blocage des règles DNS_, cette adresse IP sera renvoyée en réponse aux requêtes A bloquées. Si rien n'est spécifié, AdGuard répondra avec l'erreur REFUSED par défaut.

### Adresse IPv6 personnalisée

Si l'option _Adresse IP personnalisée_ est sélectionnée dans le _Mode de blocage des règles DNS_, cette adresse IP sera renvoyée en réponse aux requêtes AAAA bloquées. Si rien n'est spécifié, AdGuard répondra avec l'erreur REFUSED par défaut.

## Serveurs Fallback

Définissez les serveurs DNS de secours ici. AdGuard les utilisera si le serveur DNS principal ne répond pas dans le délai dépassé que vous définissez. Vous pouvez :

- Utiliser les serveurs DNS par défaut de votre système
- Ajouter des serveurs personnalisés de secours
- Ou choisir de ne pas utiliser du tout de serveurs de secours

## Délai d'attente du serveur DNS

Spécifiez la durée (en millisecondes) pendant laquelle AdGuard doit attendre une réponse DNS avant de passer à un serveur de secours. S'il est laissé vide ou invalide, la valeur par défaut est de 5000 ms (5 secondes).

## Adresses d'amorçage personnalisées

Un serveur d'amorçage est un serveur DNS intermédiaire utilisé pour obtenir l'adresse IP du serveur DNS sécuritaire que vous avez choisi précédemment dans la Protection DNS. Un "territoire neutre" est nécessaire lors de l'utilisation de protocoles qui désignent l'adresse du serveur par des lettres (comme DNS-over-TLS, par exemple). Dans ce cas, l'amorçage agit comme un traducteur, transformant les lettres en chiffres que votre système peut comprendre.

Mais si nécessaire, vous pouvez spécifier ici de différentes adresses IP — elles seront essayées dans l'ordre, de haut en bas. Si rien ne fonctionne ou rien n’est saisi, AdGuard reviendra aux paramètres par défaut du système.

## Exclusions DNS

Les domaines répertoriés ici contournent les serveurs DNS d'AdGuard. Leurs requêtes passent par le résolveur par défaut du système, et AdGuard n'applique aucune règle de blocage à celles-ci.
