---
title: Comment installer un certificat proxy
sidebar_position: 2
---

Nos applications de bureau, AdGuard pour Windows et AdGuard pour Mac, peuvent être utilisées comme proxy pour d'autres appareils. Cela signifie que vous pouvez acheminer le trafic d'autres appareils via AdGuard (tout le trafic ou le trafic d'applications et de navigateurs spécifiques).

:::note

Ces appareils doivent être sur le même réseau que le PC ou le Mac où AdGuard est installé.

:::

Le trafic HTTP sera filtré dans tous les cas, mais pour qu'AdGuard puisse filtrer le trafic HTTPS, vous devez installer manuellement le certificat AdGuard sur l'appareil connecté.

## Comment télécharger et installer le certificat

Selon le système d'exploitation de l'appareil dont vous souhaitez filtrer le trafic, suivez l'une des instructions suivantes :

### Windows {#windows}

1. Notez l'adresse IP de votre ordinateur de bureau où AdGuard est installé.

1. Assurez-vous que la protection AdGuard est activée. Sur un ordinateur Windows, cochez la case **Utiliser AdGuard comme proxy HTTP** dans l'onglet **Réseau** de ses paramètres. Pour Mac, allez dans **Réglages** → **Préférences** → **Réseau** et activez le **Proxy HTTP**.

1. Sur le même ordinateur avec AdGuard, suivez ce lien : [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Cliquez sur le bouton **Télécharger** . Si le téléchargement ne démarre pas, essayez un autre navigateur, par exemple Firefox.

1. Transférez le fichier **cert.cer** téléchargé vers l'appareil sous Windows dont vous souhaitez acheminer le trafic via AdGuard. Vous pouvez utiliser un câble USB, Bluetooth ou des services cloud pour ça.

1. Sur cet appareil, appuyez sur le bouton **Win**, tapez `Gérer les certificats d'ordinateur` et appuyez sur **Entrée**.

1. Sur la page *Certificats — Ordinateur local*, trouvez le dossier *Autorités fiables de certification root* → *Certificats* .

1. Cliquez avec le bouton droit sur le dossier *Certificats* et cliquez sur **Toutes les tâches** → **Importer**.

1. Sur la page *Assistant d'importation de certificat* , cliquez sur **Suivant**.

1. Cliquez sur **Parcourir** pour importer le certificat.

1. Accédez au fichier de certificat **cert.cer** , sélectionnez-le, ensuite cliquez sur **Ouvrir**, puis sur **Suivant**.

1. Cochez la case **Placer tous les certificats dans le dépôt suivant** .

1. Assurez-vous que le champ *Dépôt de certificats* affiche *Autorités fiables de certification root* et cliquez sur **Suivant**.

1. Cliquez sur **Terminer**.

1. Appuyez sur **Win**, puis ouvrez **Paramètres**.

1. Sélectionnez **Réseau & Internet** → **Proxy**.

1. Désactivez *Détection automatique des paramètres* .

1. Cliquez sur **Configurer** dans l'onglet *Utiliser un serveur proxy* .

1. Activez la bascule. Pour l'**Adresse IP du proxy**, saisissez l'adresse IP de votre ordinateur de bureau, que vous avez notée à l'étape 1. Pour le **Port**, saisissez le port choisi dans les paramètres réseau de l'application AdGuard de bureau.

1. Cliquez sur **Enregistrer**.

### Mac {#mac}

1. Notez l'adresse IP de votre ordinateur de bureau où AdGuard est installé.

1. Assurez-vous que la protection AdGuard est activée. Sur un ordinateur Windows, cochez la case **Utiliser AdGuard comme proxy HTTP** dans l'onglet **Réseau** de ses paramètres. Pour Mac, allez dans **Réglages** → **Préférences** → **Réseau** et activez le **Proxy HTTP**.

1. Suivez ce lien à l'aide d'un navigateur web : [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Cliquez sur le bouton **Télécharger** . Si le téléchargement ne démarre pas, essayez un autre navigateur, par exemple Firefox.

1. Transférez le fichier **cert.cer** téléchargé vers l'appareil sous Mac dont vous souhaitez acheminer le trafic via AdGuard. Vous pouvez utiliser un câble USB, Bluetooth ou des services cloud pour ça.

1. Double-cliquez sur le fichier de certificat téléchargé.

1. Saisissez le mot de passe de l'administrateur, puis cliquez sur **Modifier Keychain**.

1. Allez sur la **Recherche Spotlight** (l'icône de recherche dans le coin supérieur droit), tapez `Keychain access`, puis sélectionnez **Trousseau d'accès** dans les résultats de recherche.

1. Sous *Système*, mettez en évidence le certificat que vous avez ajouté.

1. Faites un clic droit dessus et choisissez **Obtenir des informations** dans le menu contextuel.

1. Développez *Confiance* pour afficher les politiques de confiance pour le certificat.

1. Sous *Secure Sockets Layers (SSL)*, sélectionnez **Toujours faire confiance**.

1. Ouvrez **Préférences Système** → **Réseau** et selectionnez la connexion active en haut.

1. Cliquez sur **Détails...** et accédez à l'onglet **Proxies** .

1. Cochez deux cases : *Proxy Web (HTTP)* et *Proxy Web sécurisé (HTTPS)*. Dans le champ **Serveur** , saisissez l'adresse IP de votre ordinateur que vous avez notée à l'étape 1. Dans le champ **Port** , entrez le port choisi dans les paramètres réseau de l'application AdGuard.

### Android {#android}

1. Notez l'adresse IP de votre ordinateur de bureau où AdGuard est installé.

1. Assurez-vous que la protection AdGuard est activée. Sur un ordinateur Windows, cochez la case **Utiliser AdGuard comme proxy HTTP** dans l'onglet **Réseau** de ses paramètres. Pour Mac, allez dans **Réglages** → **Préférences** → **Réseau** et activez le **Proxy HTTP**.

1. Depuis l'ordinateur avec AdGuard, suivez ce lien à l'aide d'un navigateur web : [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Cliquez sur le bouton **Télécharger** . Si le téléchargement ne démarre pas, essayez un autre navigateur, par exemple Firefox.

1. Transférez le fichier **cert.cer** téléchargé vers l'appareil sous Android dont vous souhaitez acheminer le trafic via AdGuard. Vous pouvez utiliser un câble USB, Bluetooth ou des services cloud pour ça.

1. Trouvez et appuyez sur le certificat **cert.cer** précédemment téléchargé pour ouvrir le fichier et suivez les instructions pour installer le certificat.

1. Les appareils Android ne font pas confiance aux certificats par défaut, il y aura donc un avertissement — vous pouvez l'ignorer. Sur certains téléphones, vous pourriez être invité à saisir votre mot de passe de l'appareil. Faites ça, puis appuyez sur **OK**. Le certificat sera installé.

1. Ouvrez les paramètres avancés du réseau Wi-Fi actif.

1. Remplacez le **Type de proxy** par **Manuel**. Pour le **Nom d'hôte du proxy**, saisissez l'adresse IP de votre ordinateur de bureau, que vous avez notée à l'étape 1. Pour le **Port proxy**, saisissez le port choisi dans les paramètres réseau de l'application de bureau AdGuard.

### iOS {#ios}

1. Notez l'adresse IP de votre ordinateur de bureau où AdGuard est installé.

1. Assurez-vous que la protection AdGuard est activée. Sur un ordinateur Windows, cochez la case **Utiliser AdGuard comme proxy HTTP** dans l'onglet **Réseau** de ses paramètres. Pour Mac, allez dans **Réglages** → **Préférences** → **Réseau** et activez le **Proxy HTTP**.

1. Depuis l'ordinateur avec AdGuard, suivez ce lien à l'aide d'un navigateur web : [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Cliquez sur le bouton **Télécharger** . Si le téléchargement ne démarre pas, essayez un autre navigateur, par exemple Firefox.

1. Transférez le fichier **cert.cer** téléchargé vers l'appareil sous iOS dont vous souhaitez acheminer le trafic via AdGuard. Vous pouvez utiliser un câble USB, Bluetooth ou des services cloud pour ça.

1. Sur votre appareil iOS, ouvrez **Paramètres** → **Profil téléchargé** et appuyez sur **Installer** dans le coin supérieur droit. Saisissez votre mot de passe et confirmez l'installation. Appuyez sur **Terminé**.

1. Allez dans **Paramètres** → **Général** → **À propos** → **Paramètres de confiance des certificats**. Activez le commutateur à côté de *AdGuard CA Personnel*. Le certificat est maintenant installé.

1. Sur cet appareil, ouvrez les paramètres avancés du réseau Wi-Fi actif.

1. Remplacez le **Type de proxy** par **Manuel**. Pour le **Nom d'hôte du proxy**, tapez l'adresse IP de votre ordinateur de bureau que vous avez notée à l'étape 1. Pour le **Port proxy**, saisissez le port choisi dans les paramètres réseau de l'application de bureau AdGuard.
