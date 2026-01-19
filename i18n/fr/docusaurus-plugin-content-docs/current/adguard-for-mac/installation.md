---
title: 'Installation'
sidebar_position: 2
---

:::info

Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment cela fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Configuration requise

**Operating system version:** macOS 12 or later

**RAM :** au moins 2 Go

**Navigateurs :** Safari, Chrome, Firefox, Opera, Yandex.Browser et tout autre navigateur compatible macOS

**Espace disque libre :** 120 Mo

## Installation

Pour installer AdGuard pour Mac sur votre ordinateur, lancez votre navigateur, tapez *adguard.com* dans la barre d'adresse et appuyez sur **Télécharger** [sur la page qui s'ouvre](https://adguard.com/download.html?auto=1).

![Téléchargez l'application *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Attendez que *AdguardInstaller.dmg* soit téléchargé et faites double clic dessus dans la liste des fichiers téléchargés dans le panneau Dock.

![Double-cliquez pour ouvrir le fichier](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

L'icône AdGuard apparaîtra sur votre bureau. Cliquez dessus pour ouvrir l'application d'installation et double-cliquez sur l'icône AdGuard dans la fenêtre ouverte.

![Double-cliquez sur l'icône AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Au premier lancement de AdGuard, votre système d'exploitation vous avertira que cette application a été téléchargée depuis Internet. Cliquez sur **Ouvrir**.

![Cliquez sur Ouvrir](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

À l'étape suivante, vous devrez cliquer sur **Installer**.

![Cliquez sur Installer](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Attendez que l’installateur télécharge les fichiers requis.

![Attendez que les fichiers nécessaires soient téléchargés](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

Pour utiliser l'application, vous aurez besoin du mot de passe administrateur de votre compte macOS. Saisissez le mot de passe lorsque vous y êtes invité dans la boîte de dialogue et appuyez sur **OK**.

![Saisissez le mot de passe](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Vous verrez alors apparaître un assistant d'installation rapide dans lequel il vous sera proposé de configurer la protection en fonction de vos besoins. Vous pouvez soit commencer à peaufiner tout de suite ("C'est parti !") ou sauter pour l'instant ("Laisser tel quel").

![Configurez la protection](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

Et voilà, AdGuard est installé sur votre Mac !

### Installation on older versions of macOS

Users with older versions of macOS (Big Sur 11, Catalina 10.15, or earlier) won’t find a compatible app version on the AdGuard Ad Blocker website — these OS versions are no longer supported in the latest releases.

However, you still can [download an older, compatible version](https://agrd.io/adguard_for_mac_v2-17)

## Désinstallation

### Mode régulier

Tout d’abord, ouvrez l’application Finder en cliquant sur l’icône correspondante :

![Ouvrez le Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Accédez à la section Applications. Trouvez AdGuard, faites un clic droit dessus et choisissez **Déplacer vers la corbeille**.

![Déplacez AdGuard vers la corbeille *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Options avancées

**N'utilisez cette instruction que si vous savez ce que vous faites ou si notre service d'assistance vous a spécifiquement recommandé la "désinstallation avancée". Effectuez également toutes les étapes de la "désinstallation régulière" en premier lieu.**

1. Ensuite, supprimez les fichiers AdGuard suivants :
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (dossier)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (fichier)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (dossier)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (fichier)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (fichier)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (fichier)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (fichier)

    Pour cela, ouvrez l’application Terminal, puis entrez et exécutez les commandes suivantes :

    ```bash
    sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"
    rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"
    rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. Exécutez l'application **Activity Monitor** .
1. À l’aide de l’outil de recherche, recherchez le processus **cfprefsd**.

    ![Exécutez le moniteur d'activité](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Arrêtez le processus en cours d'exécution sous l'utilisateur (pas celui exécuté sous root). Pour ça, cliquez sur le processus, puis sur X en haut à gauche. Confirmez l'action dans la fenêtre de dialogue.

    ![Confirmez](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard est maintenant supprimé de votre ordinateur.
