---
title: Problèmes de compatibilité avec différentes versions de macOS
sidebar_position: 4
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problèmes existants actuellement

Chaque année, Apple publie une nouvelle version de macOS, introduisant des solutions innovantes et ajoutant de nouvelles fonctionnalités utiles. Mais certains d'entre eux, comme l'API d'Extensions système (Big Sur) ou le Relais privé iCloud (Monterey), posent des problèmes à de nombreuses applications, AdGuard ne faisant pas exception. Dans cet article, nous passons en revue les problèmes connus spécifiques à chaque version de macOS et les moyens possibles de les résoudre.

### Monterey 12 : problèmes actuels

Ces problèmes ne sont pas encore résolus par Apple, ou seulement partiellement.

#### Compatibilité avec le Relais privé iCloud

Actuellement, AdGuard et le Relais privé iCloud ne peuvent pas fonctionner en même temps. AdGuard n'est pas en mesure de bloquer les publicités car le Relais privé iCloud crypte le trafic avant qu'AdGuard puisse filtrer les connexions réseau. Lorsque le Relais privé iCloud est actif, tout filtrage (y compris le filtrage local) devient impossible. AdGuard ne peut donc pas filtrer le trafic ou effectuer un filtrage DNS dans Safari. C'est pourquoi, par défaut, AdGuard utilise la "route par défaut" qui désactive le Relais Privé iCloud.

Pour une compréhension plus approfondie de ce problème, lisez [cet article](../icloud-private-relay).

**Solution recommandée**

Nous vous recommandons d'utiliser AdGuard avec un service VPN plus traditionnel tel que [AdGuard VPN](https://adguard-vpn.com/).

**Solution alternative**

Vous pouvez empêcher AdGuard d'utiliser la "route par défaut" en la désactivant. Cela peut être fait via Paramètres avancés → `network.extension.monterey.force.split.tunnel`. Notez que l'activation de ce paramètre entraînera les problèmes décrits ci-dessus.

![Paramètres avancés *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Compatibilité avec l'activité Protect Mail

L'application Mail d'Apple utilise désormais un proxy pour masquer l'adresse IP de l'utilisateur lors du téléchargement d'images à partir d'e-mails. Pourtant, cela ne fonctionnera pas s'il y a une connexion VPN active. AdGuard étant considéré comme un VPN, les images ne seront pas préchargées automatiquement.

Pour une compréhension plus approfondie de ce problème, lisez [cet article](../protect-mail-activity).

**Solution recommandée**

À ce stade, nous vous recommandons d'utiliser un service VPN plus traditionnel, tel que [AdGuard VPN](https://adguard-vpn.com/), au lieu des nouvelles fonctionnalités de confidentialité d'Apple.

### Monterey 12, Big Sur 11.6 et versions ultérieures : problèmes existants actuellement

Ces problèmes ne sont pas encore résolus par Apple, ou seulement partiellement.

#### Compatibilité avec Cisco AnyConnect

AdGuard ne fonctionnera pas avec Cisco AnyConnect en mode *Extension réseau* . Vous devez mettre AdGuard en mode *Proxy automatique.*. Pour faire cela, suivez [cette instruction](#automatic-proxy).

#### Compatibilité avec Flutter

Ce problème est résolu dans Flutter 2.2, sorti en juin 2021. Mais pour résoudre ce problème pour les applications développées dans Flutter, vous devez attendre les mises à jour.

Si vous utilisez Flutter avec AdGuard en mode "Extension réseau" (ou toute autre application de type "Proxy transparent") à Monterey ou Big Sur, vous rencontrerez des problèmes : les projets ne s'ouvriront pas et Flutter sera effectivement interrompu. Nous avons déjà signalé ce bug à Apple. En attendant, vous pouvez utiliser ces solutions temporaires :

1. Utilisez AdGuard en mode [Proxy automatique](#automatic-proxy) .

1. Désactivez SIP et basculez AdGuard en mode Extension de noyau comme expliqué [ici](#kernel-extension).

#### Applications VPN avec API existante

Bien qu'AdGuard soit affiché comme VPN dans les paramètres système, il ne devrait provoquer aucun conflit lorsque vous travaillez avec d'autres applications basées sur VPN. However, if a VPN-based app downloaded outside the App Store is used, there is a risk that it uses the old VPN API and needs to be excluded from filtering:

1. Ouvrez le menu AdGuard.
1. Sélectionnez *Préférences...*.
1. Passez à l’onglet *Réseau* .
1. Cliquez sur le bouton *Applications...* .
1. Recherchez l’application que vous souhaitez exclure et décochez la case à côté.

![Applications filtrées](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Problèmes déjà résolus

Ces problèmes ont été résolus par Apple mais peuvent être rencontrés dans les anciennes versions de macOS Big Sur.

### Compatibilité avec Little Snitch 5

Pour le moment, le mode Extension réseau dans AdGuard n'est pas compatible avec [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a risk to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. Ce problème est directement causé par un bug de Big Sur, et nous en avons déjà informé Apple. Cela nous fait penser que ce problème sera résolu dans l'une des prochaines mises à jour.

However, disabling connection monitoring in Little Snitch doesn't solve the issue, as this doesn't unload the Little Snitch extension from the system memory. Nous vous recommandons de passer au mode de filtrage Proxy automatique [****](#automatic-proxy) lors de l'exécution d'AdGuard avec Little Snitch sur Big Sur, au moins jusqu'à ce qu'Apple corrige le bogue.

### Compatibilité avec les proxys locaux

:::note

AdGuard peut désormais filtrer les proxys locaux (la plupart du temps) sans aucun problème. Si vous rencontrez des problèmes dans les versions 11.1+ du système d'exploitation, ou si vous utilisez Big Sur 11.0, supprimez le proxy local des paramètres système et configurez un proxy en amont dans AdGuard en suivant les instructions ci-dessous.

:::

Pour configurer un proxy en amont dans AdGuard pour Mac dans Big Sur :

1. Ouvrez les paramètres d'AdGuard *Préférences → Réseau → Proxy sortant*.
2. Choisissez HTTP, HTTPS, SOCKS4 ou SOCKS5, selon votre type de proxy.
3. Remplissez les champs :
    - `hôte` est l'adresse IP de votre serveur proxy,
    - `port` est le numéro de port souhaité à utiliser par le serveur proxy,
    - `utilisateur` et `mot de passe` sont le nom d'utilisateur et le mot de passe correspondants de votre proxy (si nécessaire). Ignorez l'un ou les deux lorsque cela n'est pas applicable.

Si vous rencontrez des problèmes, veuillez contacter notre service d'assistance technique à l'adresse support@adguard.com.

#### Exemple 1 : Configuration d'un proxy Shadowsocks en amont

Voici un exemple de configuration d'un proxy en amont pour [Shadowsocks](https://shadowsocks.org).

Tout d’abord, vous avez besoin d’un serveur fonctionnel pour votre proxy. Très probablement, pour le configurer, vous utiliseriez un fichier JSON comme celui-ci (les valeurs`server` et `password` ont été choisies au hasard ici) :

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

More information on how to get started can be found on the [Shadowsocks website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Vous devrez ensuite installer le client Shadowsocks sur votre Mac. Veillez à sélectionner "Mode manuel" ou "Mode auto" dans les réglages ! La configuration ne fonctionnera pas si vous sélectionnez "Mode Global" (ou "Mode Automatique" dans les versions de Big Sur antérieures à 11.1).

![Sélectionnez le mode manuel ou le mode automatique dans les paramètres *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Allez maintenant dans le menu *AdGuard → Avancé → Paramètres avancés...* et définissez la zone *Valeur* du paramètre `upstream.proxy` sur `socks5://localhost:1080`. Notez que vous devez utiliser ici la valeur "local_port" du fichier JSON.

Puisque Shadowsocks utilise SOCKS5, vous devez également définir la valeur du paramètre `upstream.proxy.socks5udp` dans les paramètres avancés d'AdGuard sur `true` pour qu'AdGuard achemine le trafic UDP vers le serveur proxy.

#### Exemple 2 : Configuration d'un proxy Surge en amont

Dans Big Sur v11.1+, il n'y a aucun conflit connu entre AdGuard et le proxy Surge. Si vous utilisez une version plus ancienne de Big Sur (antérieure à la version 11.1), vérifiez que le **proxy système** dans le coin inférieur droit est désactivé. Sinon, Surge ne fonctionnera pas avec AdGuard. D'autre part, **Le mode avancé** peut être activé sans provoquer de conflit dans n'importe quelle version de Big Sur.

![Configuration d'un proxy Surge en amont *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Allez maintenant dans *Préférences → Réseau → Proxy sortant* et remplissez les champs. Pour le type de proxy SOCKS5 :

- `hôte`: localhost
- `port` : 6153 Pour le type de proxy HTTP :
- `hôte`: localhost
- `port`: 6152

## Les alternatives à l’utilisation d’une extension réseau

C'est impossible de prévoir tous les problèmes possibles qui peuvent survenir dans Big Sur ou Monterey, il existe d'innombrables configurations matérielles/logicielles et de paramètres différents. Si vous rencontrez des problèmes de compatibilité, veuillez contacter notre équipe d'assistance, mais n'hésitez pas à essayer d'abord l'une de ces solutions de contournement.

### Utilisation du mode de filtrage "Proxy automatique" {#automatic-proxy}

Si vous rencontrez des problèmes avec Big Sur ou Monterey qui ne peuvent être résolus par aucune des méthodes ci-dessus, vous pouvez essayer de passer AdGuard en mode *Proxy automatique* .

1. Ouvrez le menu AdGuard.
1. Sélectionnez *Préférences...*.
1. Passez à l’onglet *Réseau* .
1. Cliquez sur le bouton *Sélectionner le mode...* .
1. Sélectionnez *Proxy automatique*.

![Basculez AdGuard en mode proxy automatique](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

AdGuard a automatiquement ajouté un fichier **.pac** aux paramètres réseau de votre Mac, pour que le système considère AdGuard comme un proxy et essaie d'envoyer tout le trafic via AdGuard.

:::note

Certaines applications peuvent ignorer ce paramètre système et leur trafic ne sera pas filtré.

:::

### Activation de l'extension du noyau à Big Sur et Monterey {#kernel-extension}

Par défaut, AdGuard utilise le framework d'extension réseau dans Big Sur et Monterey, car l'ancien framework d'extension de noyau y est désactivé. Cela peut entraîner des problèmes de compatibilité, mais pour réactiver l'extension du noyau, vous devez d'abord désactiver la protection de l'intégrité du système (SIP). Pour désactiver SIP, suivez ces instructions :

1. Cliquez sur le *symbole Apple* dans la barre de menu.
1. Cliquez sur *Redémarrer…*
1. Maintenez la touche *Commande-R* enfoncée pour redémarrer en mode de récupération.
1. Cliquez sur *Utilitaires*.
1. Sélectionnez *Terminal*.
1. Tapez `csrutil disable`.
1. Appuyez sur la touche *Retour* ou *Entrée* de votre clavier.
1. Cliquez sur le *symbole Apple* dans la barre de menu.
1. Cliquez sur *Redémarrer…*

Maintenant que SIP est désactivé, voici comment activer l'extension du noyau :

![Activation de l'extension du noyau](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Ouvrez le menu AdGuard.
1. Sélectionnez *Préférences...*.
1. Passez à l’onglet *Réseau* .
1. Cliquez sur le bouton *Sélectionner le mode...* .
1. Sélectionnez *Extension du noyau*.
1. Confirmez que vous souhaitez passer à l'extension du noyau.

:::caution

Cependant, nous recommandons d'utiliser cette méthode uniquement si tout le reste échoue, car cela pourrait entraîner des problèmes inattendus.

:::
