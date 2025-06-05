---
title: Installation du certificat sur des appareils avec Android 11+
sidebar_position: 11
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Pour pouvoir [filtrer le trafic HTTPS](/general/https-filtering/what-is-https-filtering.md) (ce qui est extrêmement important car la plupart des publicités utilisent HTTPS), AdGuard doit installer son certificat dans le stockage utilisateur de votre appareil. Sur les anciennes versions d'Android, cela se faisait automatiquement, mais sur Android 11 et les versions ultérieures, les utilisateurs doivent l'installer manuellement.

![Certificat *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Suivez ces étapes pour installer le certificat AdGuard:

1. Lorsque vous voyez la notification *Filtrage HTTPS désactivé*, appuyez sur *Activer*.

1. Ensuite, vous verrez trois écrans qui expliquent :
    - Pourquoi filtrer le trafic HTTPS
    - La sécurité de ce processus de filtrage
    - La nécessité du certificat AdGuard

    Consecutively tap *Next* → *Next* → *Save certificate*.

1. Tap *Save* at the bottom of the opened *Download* folder.

1. After saving, tap *Open Settings*.

1. Tap *More security settings* → *Encryption & credentials* → *Install a certificate* → *CA certificate*.

1. You might see a warning. If so, tap *Install anyway* and enter your PIN if necessary.

1. Select the AdGuard certificate file. Its name should look like *adguard_1342_020322.crt*.

You're all set! Once the certificate is installed successfully, you've enabled HTTPS filtering.

Veuillez noter que les étapes fournies sont basées sur le smartphone Google Pixel 7. If you're using a different Android device, the exact menu names or options might vary. For easier navigation consider searching for a certificate by entering “certificate” or “credentials” in the settings search bar.

If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below.

1. Redémarrez AdGuard.
2. Essayez d'installer le certificat correct (AdGuard Personal CA) une fois de plus.

Si vous rencontrez toujours un problème et ne pouvez pas installer le certificat, veuillez contacter notre Équipe d'assistance à l'adresse <support@adguard.com>.
