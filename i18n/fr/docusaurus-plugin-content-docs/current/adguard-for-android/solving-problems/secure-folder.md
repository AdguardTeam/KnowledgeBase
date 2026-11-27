---
title: Installation du certificat dans un dossier sécurisé
sidebar_position: 12
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Si vous installez AdGuard [dans le *Dossier sécurisé*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) sur votre Android (cela s'applique principalement aux appareils Samsung), vous pourriez rencontrer certaines difficultés lors de l'installation du certificat HTTPS. Le *Dossier sécurisé* a son propre espace de stockage pour les certificats. Toutefois, si vous suivez les [instructions habituelles d'installation du certificat](/adguard-for-android/features/settings#https-filtering), celui-ci sera installé dans la mémoire principale et n'aura aucune incidence sur votre bloqueur de publicités situé dans le *Dossier sécurisé*. Pour installer le certificat pour AdGuard pour Android dans le stockage du *Dossier sécurisé*, suivez plutôt ces instructions :

1. Après avoir installé l'application et connecté le VPN local, appuyez sur *Le filtrage HTTPS est désactivé* sur l'écran principal.
1. Appuyez sur **Continuer** → **Suivant** → **Enregistrer le certificat**.
1. Enregistrez le certificat (à ce stade, vous pouvez le renommer pour le retrouver plus facilement par la suite, ce dont vous aurez besoin).
1. Lorsque la fenêtre contextuelle *Instructions d'installation* apparaît, **N'APPUYEZ PAS** sur **Ouvrir les paramètres**.
1. Réduisez l'application et accédez au *Dossier sécurisé*.
1. Appuyez sur le menu à trois points et accédez à **Paramètres** → **Autres paramètres de sécurité**.
1. Appuyez sur **Installer depuis le stockage de l’appareil** → **Certificat d’AC** → **Installer quand même**.
1. Confirmez l'installation avec votre clé graphique / mot de passe / empreinte digitale.
1. Trouvez et sélectionnez le certificat enregistré précédemment, puis appuyez sur **Terminé**.
1. Retournez dans l'application AdGuard et revenez à l'écran principal.
1. C'est fait ! Le certificat a été installé.
