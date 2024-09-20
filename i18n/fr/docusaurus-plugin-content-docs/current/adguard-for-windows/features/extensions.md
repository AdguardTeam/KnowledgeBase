---
title: Extensions
sidebar_position: 3
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard peut accroître considérablement les fonctionnalités des sites web en agissant comme un [gestionnaire de scripts utilisateur](/general/userscripts). Les utilisateurs d'AdGuard peuvent ajouter leurs propres scripts et gérer les scripts existants.

![Extensions \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Détecter automatiquement les scripts utilisateur**

Si cette option est activée, AdGuard définira automatiquement les requêtes du navigateur vers les scripts utilisateur et suggérera leur installation. Sinon, les extensions peuvent être téléchargées et installées manuellement.

Les extensions suivantes sont installées avec AdGuard :

![Scripts utilisateur préinstallés \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**Assistant AdGuard**

L'Assistant AdGuard est un ancien assistant que vous pouvez utiliser si le [nouvel Assistant](/adguard-for-windows/browser-assistant.md) n'est pas disponible pour votre navigateur. Le nom de cette extension est tout à fait délibéré : elle aide en fait l'utilisateur à modifier les paramètres de base d'AdGuard directement dans le navigateur, sans avoir besoin d'ouvrir l'application elle-même. AdGuard Assistant fonctionne avec tous les navigateurs compatibles avec Microsoft Windows. En outre, l'icône de l'assistant AdGuard ne s'affichera pas sur les sites web répertoriés comme des exceptions par l'utilisateur et sur certaines pages web où il existe un risque d'affichage de contenu incorrect.

**AdGuard Extra**

C'est une extension personnalisée conçue pour lutter contre la technique de réinsertion des publicités bloquées — ce qu'on appelle le contournement des bloqueurs de publicités/réinjection de publicités. Les deux sont des méthodes anti-bloqueur de publicité avancées qui continuent de gagner en popularité parmi les annonceurs.

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**Bloqueur AdGuard de fenêtres pop-up**

Cette extension empêche l'ouverture de fenêtres pop-up lorsque vous consultez des pages web. Certaines fenêtres pop-up sont considérées comme utiles — elles peuvent contenir des paramètres pour l'administration du site ou des informations de référence supplémentaires affichées lorsque l'on clique sur un lien. C'est pourquoi vous pouvez désactiver le Bloqueur si nécessaire. Cette extension ne fonctionne pas non plus sur les sites web ajoutés à la liste d'exceptions d'AdGuard. Elle est désactivée par défaut, mais vous pouvez l'activer dans les paramètres de l'application. You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

Web of Trust vous permet de voir la réputation de chaque site web en fonction des opinions de ses utilisateurs. Le site web est noté selon un certain nombre de critères précis : confiance, sécurité, etc. Cette extension est désactivée par défaut, mais vous pouvez l'activer dans les paramètres de l'application. Veuillez noter qu'AdGuard n'est pas le développeur de cette extension.

### Réseau

L'avant-dernier module est consacré au filtrage du réseau, et vous y trouverez des options supplémentaires liées au réseau. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. Ce sont des précautions supplémentaires importantes pour mieux filtrer votre espace web. La plupart des sites web utilisent désormais HTTPS, et il en va de même pour la publicité. From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![Paramètres réseau \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

Dans ce module, vous pouvez cocher la case "Utiliser AdGuard comme proxy HTTP" pour utiliser AdGuard comme proxy HTTP standard qui filtrera tout le trafic qui le traverse. Vous pouvez également activer la fonction _Filtrer les sites web avec des certificats EV_. Les certificats SSL à Validations Étendues (ou EV) offrent une garantie de sécurité plu forte ; les propriétaires de tels sites web doivent passer par un processus de vérification de l'identité complète et globalement normalisé défini dans les directives des EV. C'est la raison pour laquelle certains utilisateurs font confiance aux sites web dotés de tels certificats et préfèrent ne pas les filtrer.

Et pour finir, il y a une section avec les paramètres du proxy. Là, vous pouvez spécifier quel serveur proxy AdGuard doit utiliser pour mettre à jour les filtres, obtenir de nouvelles versions, etc.

### AdGuard VPN

La dernière section est dédiée à AdGuard VPN — un outil idéal qui assure sécurité et anonymat à chaque fois que vous naviguez sur Internet. Vous pouvez le télécharger en cliquant sur le bouton _Télécharger_ ou accéder au site web AdGuard VPN en cliquant sur le bouton _Page d'accueil_.

Comment AdGuard VPN fonctionne-t'il ? Sans entrer dans les détails techniques, nous pouvons dire que le VPN crée un tunnel crypté sécurisé entre l'ordinateur ou l'appareil mobile de l'utilisateur et un serveur VPN distant. De cette manière, la confidentialité des données est préservée, ainsi que l'anonymat de l'utilisateur, car un observateur tiers voit l'adresse IP du serveur VPN et non l'adresse IP réelle de l'utilisateur.

**Ce que AdGuard VPN fait :**

- dissimule votre localisation réelle et vous aide à rester anonyme
- modifie votre adresse IP pour protéger vos données contre le suivi
- crypte votre trafic pour le rendre illisible aux tiers
- vous permet de configurer où utiliser le VPN et où ne pas le faire (fonction d'exclusions)

Pour obtenir plus d'informations sur AdGuard VPN, consultez la [Base de connaissances AdGuard VPN](https://adguard-vpn.com/kb/).
