---
title: Autenticación de dos factores
sidebar_position: 3
---

La autenticación de dos factores (o 2FA) es un método de autenticación que requiere una prueba adicional del usuario para iniciar sesión, además del par habitual de nombre de usuario y contraseña. Esto se hace por seguridad. Los sitios web generalmente ofrecen métodos 2FA como un código enviado por SMS o una aplicación de autenticación especial.

Vemos la adición de una opción 2FA como un beneficio. También entendemos que su aplicación puede irritar a algunos usuarios. Por ello, lo hemos hecho opcional para tu cuenta personal en adguard.com y 2FA está desactivado cuando registras una nueva cuenta. Puedes habilitarlo manualmente en la configuración. En cuanto a los métodos de autenticación disponibles actualmente, utilizamos uno probado: una aplicación de autenticación para Android o iOS. Puedes utilizar casi cualquier aplicación de este tipo y hay muchas.

Recomendamos configurar la autenticación de dos factores para tu cuenta AdGuard. No te llevará mucho tiempo, pero te ayudará a proteger tus claves de licencia, suscripciones y, lo más importante, cualquier información personal asociada a tu cuenta.

## Cómo configurarlo

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
