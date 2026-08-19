---
title: Protection DNS
sidebar_position: 4
---

:::info

Cet article décrit AdGuard pour Windows v8.0, un bloqueur de publicité complet qui protège votre appareil au niveau du système. Il s'agit d'une version bêta encore en développement. Pour l'essayer, téléchargez la [version bêta d'AdGuard pour Windows](https://agrd.io/windows_beta).

:::

La protection DNS vous offre un meilleur contrôle sur la façon dont votre appareil se connecte à Internet. Il y a trois raisons principales pour lesquelles cela peut être utile :

## 1. Pour protéger votre vie privée contre votre FAI

Chaque fois que vous ouvrez un site web, par exemple `google.com`, votre navigateur envoie une requête à un serveur DNS pour obtenir en retour l'adresse IP du site web. En général, le serveur DNS appartient à votre fournisseur d'accès Internet, ce qui signifie qu'il peut suivre les sites web que vous consultez. Si vous changez de serveur DNS, comme AdGuard DNS, votre FAI ne voit plus votre activité en ligne.

## 2. Pour chiffrer votre trafic DNS

Les protocoles modernes comme DNS-over-TLS et DNS-over-HTTPS garantissent le chiffrement de vos requêtes DNS. Cela les protège contre l'interception, la modification ou l'espionnage par des attaquants.

## 3. Pour bloquer les contenus indésirables au niveau du DNS

La protection DNS peut filtrer les publicités, les traqueurs, les sites web d'hameçonnage et autres contenus nuisibles ou gênants avant même leur chargement dans votre navigateur ou vos applications. [Apprenez plus sur le filtrage DNS](https://adguard-dns.io/kb/general/dns-filtering/)

![Protection DNS](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns.png)

Voici ce que vous pouvez configurer dans la protection DNS :

## Choisissez un serveur DNS

![Serveurs DNS](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_server.png)

Vous pouvez choisir parmi plusieurs fournisseurs DNS fiables. AdGuard propose plusieurs options pour répondre à différents besoins :

- AdGuard DNS — bloque les publicités et les traqueurs.

- AdGuard DNS Protection Familiale — bloque les publicités, les traqueurs et le contenu pour adultes.

- AdGuard DNS Sans filtrage — offre une connexion sécurisée et fiable sans aucun filtrage.

Vous pouvez utiliser l'un de nos serveurs publics, ajouter votre propre serveur DNS personnalisé ou choisir une autre option de confiance dans notre [liste de fournisseurs DNS de confiance](https://adguard-dns.io/kb/general/dns-providers/).

## Ajout des filtres et des règles DNS

Pour affiner la protection, vous pouvez créer vos propres filtres DNS en utilisant la [syntaxe des règles DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/) ou importer des [filtres DNS](https://filterlists.com) prêts à l'emploi.

De plus, vous pouvez créer des règles DNS personnalisées pour bloquer, débloquer ou rediriger des domaines selon vos besoins. Utilisez notre constructeur de règles intégré.
