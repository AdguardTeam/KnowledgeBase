---
title: Domaine local.adguard.org
sidebar_position: 3
---

Les utilisateurs d'AdGuard pour Windows, Mac et Android ont pu remarquer qu'AdGuard ajoute un petit script à chaque page web, qui est chargé à partir du domaine `local.adguard.org` .

Tout d'abord, ne vous inquiétez pas, il ne s'agit pas d'un vrai domaine, et il n'y a en fait aucun serveur réel portant ce nom. Ce domaine est utilisé pour appliquer le filtrage cosmétique aux pages web, mais tout est fait localement, directement sur votre appareil, sans connexion à un serveur quelconque.

### Explication technique

Mais que se passe-t-il et pourquoi est-ce fait ? Veuillez lire l'explication technique ci-dessous.

1. AdGuard est un bloqueur de contenu au niveau du réseau, il ne peut donc pas simplement ajouter du JavaScript et du CSS personnalisés aux pages web comme le font les extensions de navigateur. Cependant, cela est crucial pour un bon blocage de contenu.
2. Pour faire ça, AdGuard injecte un "script de contenu" qui ressemble à ceci : `<script src="https://local.adguard.org/.../content-script.js">`. Ce "script de contenu" se charge du filtrage cosmétique, cache ou supprime le contenu publicitaire des pages web.
3. Les connexions à l'adresse IP du domaine `local.adguard.org` sont interceptées par AdGuard au niveau du réseau et **traitées localement**. C'est pourquoi ce domaine a une adresse IP "statique" qui ne change pas pendant des années.

**Pourquoi avons-nous besoin d'utiliser une véritable adresse IP pour cela ?**

- Nous ne pouvons pas utiliser `127.0.0.1` car les navigateurs ne l'accepteront pas.
- C'est possible d’utiliser une adresse IP provenant de sous-réseaux privés, mais cette solution présente deux inconvénients.
    - Tout d'abord, il y a un léger risque de croiser un service intranet existant et d'y interrompre l'accès.
    - Deuxièmement, certains serveurs DNS peuvent considérer ça comme une attaque de reliure DNS et refuser de répondre à `local.adguard.org`.

### Vérification

Ceci est facile à vérifier. Si vous désactivez AdGuard, vous verrez que c'est tout simplement impossible d'établir une connexion à `local.adguard.org` car il n'y a pas de serveur avec cette adresse. Essayez de l'ouvrir dans votre navigateur lorsque AdGuard est désactivé.
