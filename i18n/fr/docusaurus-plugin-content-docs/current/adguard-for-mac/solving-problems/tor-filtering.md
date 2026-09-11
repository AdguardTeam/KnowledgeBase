---
title: Configuration du filtrage dans le navigateur Tor
sidebar_position: 10
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Par défaut, Tor Browser est ajouté à la liste des applications filtrées d'AdGuard. Cependant, pour le filtrer, AdGuard doit modifier les paramètres de sécurité de Tor. Cela fera en sorte que Tor fasse confiance au certificat CA d’AdGuard.

Si vous décidez de filtrer Tor et ensuite vous le cochez dans *Préférences* → *Réseau* → *Applications*, AdGuard vous affichera cette boîte de dialogue :

![Boîte de dialogue AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

En mettant à jour les paramètres de Tor, AdGuard définira les éléments suivants :

`security.enterprise_roots.enabled`: true

Ce paramètre permet à Tor de faire confiance aux certificats racine. [Apprendre plus](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

L'épinglage par clé publique est une mesure de sécurité qui permet aux sites web de s'assurer que la connexion entre un site web et un utilisateur est authentique. Le site web publie une liste de clés publiques, ou épingles, auxquelles il fait confiance. Avec le niveau d'application défini sur 1, l'épinglage n'est pas appliqué pour les autorités de certification personnalisées. [Apprendre plus](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Pour appliquer les modifications, vous devrez redémarrer Tor Browser.

Si vous modifiez manuellement ces paramètres, le filtrage Tor sera arrêté.
