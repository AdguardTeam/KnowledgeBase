---
title: Problèmes de lancement sur macOS
sidebar_position: 6
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Parfois, macOS peut provoquer la corruption du module d'extension réseau d'AdGuard, le rendant incapable d'utiliser l'application. Dans ce cas, vous devez suivre l'une de ces instructions, en fonction de la version de votre système d'exploitation.

## Problèmes de lancement sur macOS 11 et versions ultérieures

Si vous rencontrez des problèmes lors du lancement d'AdGuard pour Mac sur les systèmes d'exploitation Big Sur et Monterey, veuillez suivre ces instructions :

1. Redémarrez le Mac et passez en [mode de récupération](https://support.apple.com/en-us/HT201255).
1. Désactivez SIP (lancez **Terminal** depuis le menu **Utilitaires** et tapez `csrutil disable`).
1. Redémarrez le Mac.
1. Fermez l'application AdGuard, ouvrez le **Terminal** et tapez `systemextensionsctl reset`.
1. Redémarrez le Mac et passez en mode de récupération.
1. Activez SIP (lancez **Terminal** depuis le menu **Utilitaires** et tapez `csrutil enable`).
1. Lancez l'application AdGuard et activez la protection.

## Problèmes de lancement sur macOS 10

Si vous rencontrez des problèmes lors du lancement d'AdGuard pour Mac sur les systèmes d'exploitation Sierra, Mojave et Catalina, veuillez suivre ces instructions :

1. Ouvrez le Terminal **** et saisissez la commande `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Vérifiez que l'indicateur `restreint` n’est pas présent (comme sur la capture d’écran). ![Exemple de commande *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Redémarrez votre Mac en mode de récupération.
1. Ouvrez les **Utilitaires** → **Terminal**.
1. Saisissez `csrutil disable`.
1. Saisissez le mot de passe administrateur.
1. Redémarrez votre Mac.
1. Ouvrez le **Terminal** et saisissez la commande suivante : `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Redémarrez votre Mac en mode de récupération.
1. Ouvrez les **Utilitaires** → **Terminal** → Saisissez `csrutil enable` → Saisissez le mot de passe administrateur → Redémarrez votre Mac.
1. Activez la protection AdGuard.
