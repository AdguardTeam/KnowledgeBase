---
title: Authentification à deux facteurs
sidebar_position: 3
---

L'authentification à deux facteurs (ou 2FA) est une méthode d'authentification qui nécessite une preuve supplémentaire de la part de l'utilisateur pour se connecter, en plus de la paire habituelle d'identifiant et de mot de passe. Cette mesure est prise à des fins de sécurité. Les sites web proposent généralement des méthodes 2FA telles qu'un code envoyé par SMS ou une application d'authentification spéciale.

Nous considérons l’ajout de l'option 2FA comme un avantage. Nous comprenons également que son application peut irriter certains utilisateurs. C'est pourquoi nous l'avons rendu facultative pour votre compte personnel sur adguard.com : par défaut, 2FA est désactivée lorsque vous enregistrez un nouveau compte. Vous pouvez l'activer manuellement dans les paramètres. Quant aux méthodes d'authentification actuellement disponibles, nous utilisons celle qui a fait ses preuves : une application d'authentification pour Android ou iOS. Vous pouvez utiliser presque n'importe quelle application de ce type, et il y en a beaucoup.

Nous vous recommandons de mettre en place une authentification à deux facteurs pour votre compte AdGuard. Cela ne vous prendra pas longtemps, mais ça vous aidera à protéger vos clefs de licence, vos abonnements et, plus important encore, toutes les informations personnelles associées au compte.

## Comment la mettre en place

1. Log into your [AdGuard account](https://auth.adguard.com/login.html) and go to the *Settings* tab:

 ![AdGuard Account settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_1.png)

1. Scroll down to *Two-factor authentication* and enable it:

 ![Two-factor authentication toggle *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_2.png)

1. A code will be sent to the email address associated with your AdGuard account. To enable 2FA, enter the code and click *Enable*.

 ![The verification code *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_3.png?)

After you enable two-factor authentication, you have two options to choose from:

- *One-time email code*: when you log in, we will ask you to enter the code we sent to your email

- *Code from authenticator app*: when you log in, we will ask for a code from your authenticator app

![2FA options *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_4.png)

:::note

If you use the authenticator app, make sure to save the **setup key** somewhere. It will be necessary to recover your account in case your mobile phone gets lost or stolen.

![The setup key in the authenticator app *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/setup_key.png)

:::

If everything is done right, you will see this when you log into your account the next time:

![The result *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_5.png)

:::note

If you get an authentication error, check the clock on your phone. Adjust it if needed, as an unsynchronized clock may be the cause of the error.

:::
