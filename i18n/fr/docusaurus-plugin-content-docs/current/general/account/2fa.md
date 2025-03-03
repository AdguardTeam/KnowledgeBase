---
title: Authentification à deux facteurs
sidebar_position: 3
---

L'authentification à deux facteurs (ou 2FA) est une méthode d'authentification qui nécessite une preuve supplémentaire de la part de l'utilisateur pour se connecter, en plus de la paire habituelle d'identifiant et de mot de passe. Cette mesure est prise à des fins de sécurité. Les sites web proposent généralement des méthodes 2FA telles qu'un code envoyé par SMS ou une application d'authentification spéciale.

Nous considérons l’ajout de l'option 2FA comme un avantage. Nous comprenons également que son application peut irriter certains utilisateurs. C'est pourquoi nous l'avons rendu facultative pour votre compte personnel sur adguard.com : par défaut, 2FA est désactivée lorsque vous enregistrez un nouveau compte. Vous pouvez l'activer manuellement dans les paramètres. Quant aux méthodes d'authentification actuellement disponibles, nous utilisons celle qui a fait ses preuves : une application d'authentification pour Android ou iOS. Vous pouvez utiliser presque n'importe quelle application de ce type, et il y en a beaucoup.

Nous vous recommandons de mettre en place une authentification à deux facteurs pour votre compte AdGuard. Cela ne vous prendra pas longtemps, mais ça vous aidera à protéger vos clefs de licence, vos abonnements et, plus important encore, toutes les informations personnelles associées au compte.

## Comment la mettre en place

1. Connectez-vous à votre [ compte AdGuard](https://auth.adguard.com/login.html) et accédez à l'onglet *Paramètres* :

 ![Paramètres du compte AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_1.png)

1. Faites défiler vers le bas jusqu'à *L'authentification à deux facteurs* et activez-la :

 ![Bascule de l'authentification à deux facteurs *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_2.png)

1. Un code sera envoyé à l'adresse électronique associée à votre compte AdGuard. Pour activer 2FA, saisissez le code et cliquez sur *Activer*.

 ![Le code de vérification *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_3.png?)

Après avoir activé l'authentification à deux facteurs, vous avez deux options à choisir :

- *Code de courriel à usage unique*: lorsque vous vous connecterez, nous vous demanderons de saisir le code que nous vous avons envoyé à votre courriel

- *Code de l'application d'authentification*: lorsque vous vous connectez, nous vous demanderons un code de votre application d'authentification

![Options 2FA *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_4.png)

:::note

Si vous utilisez une application d'authentification, assurez-vous de noter la **clé de paramètres** quelque part. Vous en aurez besoin pour récupérer votre compte en cas de perte ou de vol de votre appareil mobile.

![La clé de configuration dans l'application d'authentification *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/setup_key.png)

:::

Si tout est bien fait, vous verrez ceci lors de votre prochaine connexion à votre compte :

![Le résultat *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_5.png)

:::note

Si vous voyez une erreur d'authentification, vérifiez l'horloge de votre téléphone. Ajustez-la si nécessaire, car une horloge non synchronisée peut entraîner des erreurs.

:::
