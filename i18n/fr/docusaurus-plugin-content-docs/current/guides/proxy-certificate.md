---
title: Comment installer un certificat proxy
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## Comment télécharger et installer le certificat

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Cliquez sur le bouton **Télécharger** . If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. Cliquez avec le bouton droit sur le dossier *Certificats* et cliquez sur **Toutes les tâches** → **Importer**.

1. Sur la page *Assistant d'importation de certificat* , cliquez sur **Suivant**.

1. Cliquez sur **Parcourir** pour importer le certificat.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Cochez la case **Placer tous les certificats dans le dépôt suivant** .

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Cliquez sur **Terminer**.

1. Press **Win**, then open **Settings**.

1. Sélectionnez **Réseau & Internet** → **Proxy**.

1. Désactivez *Détection automatique des paramètres* .

1. Cliquez sur **Configurer** dans l'onglet *Utiliser un serveur proxy* .

1. Activez la bascule. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. Pour le **Port**, saisissez le port choisi dans les paramètres réseau de l'application AdGuard de bureau.

1. Cliquez sur **Enregistrer**.

### Mac {#mac}

1. Notez l'adresse IP de votre ordinateur de bureau sur lequel AdGuard est installé.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Cliquez sur le bouton **Télécharger** . If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Double-cliquez sur le fichier de certificat téléchargé.

1. Saisissez le mot de passe de l'administrateur, puis cliquez sur **Modifier Keychain**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. Sous *Système*, mettez en évidence le certificat que vous avez ajouté.

1. Right-click it and select **Get Info** from the context menu.

1. Développez *Confiance* pour afficher les politiques de confiance pour le certificat.

1. Sous *Secure Sockets Layers (SSL)*, sélectionnez **Toujours faire confiance**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Cliquez sur **Détails...** et accédez à l'onglet **Proxies** .

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. Dans le champ **Port** , entrez le port choisi dans les paramètres réseau de l'application AdGuard.

### Android {#android}

1. Notez l'adresse IP de votre ordinateur de bureau sur lequel AdGuard est installé.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Depuis l'ordinateur avec AdGuard, suivez ce lien à l'aide d'un navigateur web : [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Cliquez sur le bouton **Télécharger** . If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Ouvrez les paramètres avancés du réseau Wi-Fi actif.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. Pour le **Port proxy**, saisissez le port choisi dans les paramètres réseau de l'application de bureau AdGuard.

### iOS {#ios}

1. Notez l'adresse IP de votre ordinateur de bureau sur lequel AdGuard est installé.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Depuis l'ordinateur avec AdGuard, suivez ce lien à l'aide d'un navigateur web : [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Cliquez sur le bouton **Télécharger** . If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Saisissez votre mot de passe et confirmez l'installation. Appuyez sur **Terminé**.

1. Allez dans **Paramètres** → **Général** → **À propos** → **Paramètres de confiance des certificats**. Activez le commutateur à côté de *AdGuard CA Personnel*. Le certificat est maintenant installé.

1. Sur cet appareil, ouvrez les paramètres avancés du réseau Wi-Fi actif.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. Pour le **Port proxy**, saisissez le port choisi dans les paramètres réseau de l'application de bureau AdGuard.
