---
title: Comment installer un certificat proxy
sidebar_position: 2
---

Les applications de bureau AdGuard (AdGuard pour Windows et AdGuard pour Mac) peuvent être utilisées comme proxy. Cela signifie que vous pouvez acheminer le trafic d'autres appareils via AdGuard (entièrement ou le trafic d'applications/navigateurs choisis).

:::note

Ces appareils doivent être sur le même réseau que le PC ou le Mac sur lequel AdGuard est installé.

:::

Le trafic HTTP sera filtré dans tous les cas, mais pour qu'AdGuard puisse filtrer le trafic HTTPS, vous devez installer manuellement le certificat AdGuard sur l'appareil connecté.

## Comment télécharger et installer le certificat

Selon le système d'exploitation de votre appareil (Windows/Mac/Android/iOS), suivez l'une de ces instructions :

### Windows {#windows}

1. Notez l'adresse IP de votre ordinateur de bureau sur lequel AdGuard est installé.

2. Assurez-vous que la protection AdGuard est activée. Cochez ensuite la case **Utiliser AdGuard comme proxy HTTP** dans l'onglet **Réseau** de ses paramètres.

3. Sur le même appareil avec AdGuard, suivez ce lien en utilisant n'importe quel navigateur : [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Cliquez sur le bouton **Télécharger** .

5. Transférez le fichier **cert.cer** téléchargé vers l'appareil dont vous souhaitez acheminer le trafic via AdGuard.

6. Sur cet appareil, appuyez sur le bouton **Win**, tapez `Gérer les certificats d'ordinateur` et appuyez sur **Entrée**.

7. Sur la page *Certificats - Ordinateur local* , recherchez le dossier *Autorités fiables de certification root* → *Certificats* .

8. Cliquez avec le bouton droit sur le dossier *Certificats* et cliquez sur **Toutes les tâches** → **Importer**.

9. Sur la page *Assistant d'importation de certificat* , cliquez sur **Suivant**.

10. Cliquez sur **Parcourir** pour importer le certificat.

11. Accédez au fichier de certificat **cert.cer** , sélectionnez-le, puis cliquez sur **Ouvrir**.

12. Cliquez sur **Suivant**.

13. Cochez la case **Placer tous les certificats dans le dépôt suivant** .

14. Assurez-vous que le champ *Dépôt de certificats* affiche *Autorités fiables de certification root* et cliquez sur **Suivant**.

15. Cliquez sur **Terminer**.

16. Appuyez sur la touche **Win** , puis ouvrez **Paramètres**.

17. Sélectionnez **Réseau & Internet** → **Proxy**.

18. Désactivez *Détection automatique des paramètres* .

19. Cliquez sur **Configurer** dans l'onglet *Utiliser un serveur proxy* .

20. Activez la bascule. Pour **Adresse IP du proxy**, saisissez l'adresse IP notée de votre ordinateur de bureau (étape 1). Pour le **Port**, saisissez le port choisi dans les paramètres réseau de l'application AdGuard de bureau.

21. Cliquez sur **Enregistrer**.

### Mac {#mac}

1. Notez l'adresse IP de votre ordinateur de bureau sur lequel AdGuard est installé.

2. Assurez-vous que la protection AdGuard est activée. Allez ensuite dans **Paramètres** → **Réseau** → **Proxy HTTP** et cochez la case **Utiliser AdGuard en tant que proxy HTTP**.

3. Depuis l'ordinateur avec AdGuard, suivez ce lien à l'aide d'un navigateur web : [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Cliquez sur le bouton **Télécharger** .

5. Transférez le fichier **cert.cer** téléchargé vers l'appareil dont vous souhaitez acheminer le trafic via AdGuard.

6. Double-cliquez sur le fichier de certificat téléchargé.

7. Saisissez le mot de passe de l'administrateur, puis cliquez sur **Modifier Keychain**.

8. Allez sur **Spotlight** (l'icône de recherche dans le coin supérieur droit), tapez "Keychain Access", puis sélectionnez **Accès Keychain** dans les résultats de recherche.

9. Sous *Système*, mettez en évidence le certificat que vous avez ajouté.

10. Faites un clic droit dessus et choisissez **Obtenir des informations** dans le menu contextuel.

11. Développez *Confiance* pour afficher les politiques de confiance pour le certificat.

12. Sous *Secure Sockets Layers (SSL)*, sélectionnez **Toujours faire confiance**.

13. Ouvrez **Préférences Système** → **Réseau** et choisissez la connexion active supérieure.

14. Cliquez sur **Détails...** et accédez à l'onglet **Proxies** .

15. Cochez deux cases : *Proxy Web (HTTP)* et *Proxy Web sécurisé (HTTPS)*. Dans le champ **Serveur** , saisissez l'adresse IP notée de votre ordinateur (étape 1). Dans le champ **Port** , entrez le port choisi dans les paramètres réseau de l'application AdGuard.

### Android {#android}

1. Notez l'adresse IP de votre ordinateur de bureau sur lequel AdGuard est installé.

2. Assurez-vous que la protection AdGuard est activée. Cochez ensuite la case **Utiliser AdGuard comme proxy HTTP** dans l'onglet **Réseau** de ses paramètres.

3. Depuis l'ordinateur avec AdGuard, suivez ce lien à l'aide d'un navigateur web : [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Cliquez sur le bouton **Télécharger** .

5. Transférez le fichier **cert.cer** téléchargé vers l'appareil dont vous souhaitez acheminer le trafic via AdGuard.

6. Trouvez et appuyez sur le certificat **cert.cer** précédemment téléchargé pour ouvrir le fichier.

7. Sur certains téléphones, vous pourriez être invité à saisir votre mot de passe de l'appareil. Faites cela, puis appuyez sur **OK**. Le certificat est maintenant installé.

8. Ouvrez les paramètres avancés du réseau Wi-Fi actif.

9. Basculez le **Type de proxy** sur **Manuel**. Pour le **Nom d'hôte du proxy**, saisissez l'adresse IP notée de votre ordinateur de bureau (étape 1). Pour le **Port proxy**, saisissez le port choisi dans les paramètres réseau de l'application de bureau AdGuard.

### iOS {#ios}

1. Notez l'adresse IP de votre ordinateur de bureau sur lequel AdGuard est installé.

2. Assurez-vous que la protection AdGuard est activée. Cochez ensuite la case **Utiliser AdGuard comme proxy HTTP** dans l'onglet **Réseau** de ses paramètres.

3. Depuis l'ordinateur avec AdGuard, suivez ce lien à l'aide d'un navigateur web : [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Cliquez sur le bouton **Télécharger** .

5. Transférez le fichier **cert.cer** téléchargé vers l'appareil dont vous souhaitez acheminer le trafic via AdGuard.

6. Ouvrez **Paramètres** → **Sécurité** → **Cryptage & Identifiants** → **Installer un certificat**. Les appareils Android ne font pas confiance aux certificats par défaut, il y aura donc un avertissement lorsque vous choisissez un **Certificat CA**. Appuyez sur **Installer quand même**.

7. Ouvrez **Paramètres** → **Profil téléchargé** et appuyez sur **Installer** dans le coin supérieur droit. Saisissez votre mot de passe et confirmez l'installation. Appuyez sur **Terminé**.

8. Allez dans **Paramètres** → **Général** → **À propos** → **Paramètres de confiance des certificats**. Activez le commutateur à côté de *AdGuard CA Personnel*. Le certificat est maintenant installé.

9. Sur cet appareil, ouvrez les paramètres avancés du réseau Wi-Fi actif.

10. Basculez le **Type de proxy** sur **Manuel**. Pour le **Nom d'hôte du proxy**, saisissez l'adresse IP notée de votre ordinateur (étape 1). Pour le **Port proxy**, saisissez le port choisi dans les paramètres réseau de l'application de bureau AdGuard.
