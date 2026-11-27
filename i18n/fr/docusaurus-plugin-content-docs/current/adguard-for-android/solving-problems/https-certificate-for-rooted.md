---
title: Déplacer le certificat de l'AC vers le stockage système sur les appareils rootés
sidebar_position: 13
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard for Android can [filter encrypted HTTPS traffic](/general/https-filtering/what-is-https-filtering), thus blocking most ads and trackers on websites. Sur les appareils rootés, AdGuard vous permet de filtrer le trafic HTTPS dans les applications. Le filtrage HTTPS nécessite d'ajouter le certificat de l'AC AdGuard à la liste des certificats de confiance.

Sur les appareils non rootés, les certificats d'AC peuvent être installés dans le **stockage utilisateur**. Seul un sous-ensemble restreint d'applications (principalement des navigateurs) reconnaît les certificats d'autorité de certification installés dans le stockage de l'utilisateur, ce qui signifie que le filtrage HTTPS ne fonctionnera que pour ces applications.

Sur les appareils rootés, vous pouvez installer un certificat dans le **stockage système**. Ceci permettra à AdGuard de filtrer le trafic HTTPS dans d'autres applications également.

Voici comment faire.

## Comment installer le certificat AdGuard dans le stockage système

1. Ouvrez *AdGuard → Paramètres → Filtrage → Réseau → Filtrage HTTPS → Certificats de sécurité*.

1. Si vous n'avez pas encore de certificat, **installez l'AC Personnelle d'AdGuard dans le stockage utilisateur**. Cela permettra à AdGuard de filtrer le trafic HTTPS dans les navigateurs.

1. **Installez l'AC AdGuard Intermediate dans le stockage de certificats utilisateur**. Vous aurez besoin d'exécuter le module adguardcert Magisk qui permet de déplacer les certificats vers le stockage système.

    ![Installer le certificat *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. Installez la [dernière version du module **adguardcert** Magisk](https://github.com/AdguardTeam/adguardcert/releases/latest/).

1. Ouvrez *Magisk → Modules → Installer depuis le stockage* et sélectionnez le fichier **adguardcert** téléchargé. Le certificat d'AC personnel d'AdGuard se copié vers le stockage système.

    ![Ouvrir les modules Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Installer à partir du stockage *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Sélectionner asguardcert *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Appuyez sur **Redémarrer**.

    ![Redémarrer l'appareil *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Une fois le transfert effectué, **l'AC personnelle AdGuard** présente dans le stockage système vous permettra de filtrer le trafic HTTPS dans les applications, tandis que **l'AC AdGuard Intermediate** présente dans le stockage utilisateur vous permettra de filtrer le trafic HTTPS dans les navigateurs basés sur Chromium (voir ci-dessous pourquoi).

## Problèmes connus avec les navigateurs basés sur Chrome et Chromium

Chrome et les autres navigateurs basés sur Chromium nécessitent des logs de Transparence de Certificat (TC) pour les certificats situés dans le stockage système. Les logs TC ne contiennent pas d'informations à propos des certificats émis par les applications de filtrage HTTPS. Par conséquent, AdGuard nécessite un certificat supplémentaire dans le stockage utilisateur pour filtrer le trafic HTTPS dans ces navigateurs.

### Navigateur Bromite

De plus, dans le problème ci-dessus, Bromite ne fait pas confiance par défaut aux certificats dans le stockage utilisateur. Pour filtrer le trafic HTTPS dans cette application, ouvrez Bromite, accédez à `chrome://flags`, et définissez *Autoriser les certificats utilisateurs* à *Activé*. **Cela s'applique à la fois aux appareils rootés et non rootés**.
