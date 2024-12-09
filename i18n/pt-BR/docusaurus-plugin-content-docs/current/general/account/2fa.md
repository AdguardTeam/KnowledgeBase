---
title: Autenticação de dois fatores
sidebar_position: 3
---

A autenticação de dois fatores (ou 2FA) é um método de autenticação que requer uma evidência adicional do usuário para fazer login, além do par usual de nome de usuário e senha. Isso é feito por motivos de segurança. Os sites geralmente oferecem métodos 2FA, como um código enviado por SMS ou um aplicativo de autenticação especial.

Consideramos que a adição de uma opção 2FA é uma vantagem. Também entendemos que a sua aplicação pode irritar alguns usuários. É por isso que a tornamos isso para sua conta pessoal em adguard.com. Por padrão, o 2FA é desativado quando você registra uma nova conta. Você pode ativá-lo manualmente nas configurações. Quanto aos métodos de autenticação disponíveis atualmente, usamos o testado e aprovado: um aplicativo autenticador para Android ou iOS. Você pode usar quase qualquer aplicativo desse tipo, e há muitos deles.

Recomendamos configurar a autenticação de dois fatores para sua conta AdGuard. Isso não levará muito tempo, mas ajudará a proteger suas chaves de licença, assinaturas e, o mais importante, todas as informações pessoais associadas à sua conta.

## Como configurá-lo

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
