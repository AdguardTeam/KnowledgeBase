---
title: Installation du certificat sur des appareils avec Android 11+
sidebar_position: 11
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Pour pouvoir [filtrer le trafic HTTPS](/general/https-filtering/what-is-https-filtering.md) (ce qui est extrêmement important car la plupart des publicités utilisent HTTPS), AdGuard doit installer son certificat dans le stockage utilisateur de votre appareil. Sur les anciennes versions d'Android, cela se faisait automatiquement, mais sur Android 11 et les versions ultérieures, les utilisateurs doivent l'installer manuellement.

![Certificat *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/screenCA.gif)

Suivez ces étapes pour installer le certificat AdGuard:

1. Ouvrez l'application. Sur l'écran *Accueil*, appuyez sur *le filtrage HTTPS est désactivé*.

1. Ensuite, vous verrez trois écrans :
    - Le filtrage HTTPS est essentiel pour le blocage des publicités
    - Le filtrage HTTPS d’AdGuard est sûr
    - Certificat AdGuard

1. Appuyez successivement sur *Continuer* → *Suivant* → *Enregistrer le certificat*.

1. Appuyez sur *Enregistrer* en bas du dossier *Téléchargements* ouvert.

1. Après l'enregistrement, copiez le texte du champ *Certificat AC* et appuyez sur *Ouvrir les paramètres*.

1. Ouvrez *Paramètres*, puis collez ou saisissez *Certificat AC* dans la barre de recherche. Appuyez sur l'option correspondante.

1. Il se peut qu'un message d'avertissement s'affiche. Si c'est le cas, appuyez sur *Installez quand même* et saisissez votre PIN si nécessaire.

1. Sélectionnez le fichier de certificat AdGuard. Son nom devrait ressembler à *adguard_1342_020322.crt*.

Vous êtes prêt ! Une fois le certificat installé avec succès, vous avez activé le filtrage HTTPS.

Si vous rencontrez des problèmes lors de l'installation manuelle du certificat (par exemple, si vous avez installé le certificat mais que l'application continue de l'ignorer), vous pouvez suivre l'une des solutions proposées ci-dessous.

1. Redémarrez AdGuard.
1. Essayez d'installer le certificat correct (AdGuard Personal CA) une fois de plus.

## Avertissements de sécurité

Dans les anciennes versions d'Android, le panneau des paramètres rapides affichait le message "Le réseau est peut-être surveillé". Appuyer dessus ouvrira une fenêtre avec des informations détaillées.

À partir d'Android 15, en plus du message "Le réseau est peut-être surveillé", les utilisateurs verront s'afficher une notification d'avertissement après l'installation d'un certificat et après le redémarrage de l'appareil : "Autorités de certification installées par un tiers inconnu." Cela signifie que le système a détecté des certificats tiers dans le magasin utilisateur. Appuyer sur la notification ouvre une liste de certificats dans le magasin de certificats utilisateur.

Malgré ces avertissements, votre trafic reste sécurisé. Votre connexion à des serveurs distants reste chiffrée. What AdGuard does is simply verify the server’s certificate before deciding whether to filter the connection — similar to how a browser works.

[Learn more about HTTPS filtering and how the certificate works](/general/https-filtering/what-is-https-filtering.md).

If you still encounter a problem and can’t install the certificate, please contact our support team at [support@adguard.com](mailto:support@adguard.com).
