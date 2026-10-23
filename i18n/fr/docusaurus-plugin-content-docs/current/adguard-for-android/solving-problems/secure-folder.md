---
title: Certificate installation in a Secure folder
sidebar_position: 12
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Save the certificate (at this stage, you can rename it to make it easier to locate it later, which you will need to do).
1. Lorsque la fenêtre contextuelle *Instructions d'installation* apparaît, **N'APPUYEZ PAS** sur **Ouvrir les paramètres**.
1. Réduisez l'application et accédez au *Dossier sécurisé*.
1. Appuyez sur le menu à trois points et accédez à **Paramètres** → **Autres paramètres de sécurité**.
1. Appuyez sur **Installer depuis le stockage de l’appareil** → **Certificat d’AC** → **Installer quand même**.
1. Confirmez l'installation avec votre clé graphique / mot de passe / empreinte digitale.
1. Trouvez et sélectionnez le certificat enregistré précédemment, puis appuyez sur **Terminé**.
1. Retournez dans l'application AdGuard et revenez à l'écran principal.
1. C'est fait ! Le certificat a été installé.
