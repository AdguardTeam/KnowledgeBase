---
title: Zwei-Faktor-Authentifizierung
sidebar_position: 3
---

Bei der Zwei-Faktor-Authentifizierung (oder 2FA) handelt es sich um eine Authentifizierungsmethode, bei der neben dem üblichen Paar aus Benutzername und Kennwort ein zusätzlicher Nachweis für die Anmeldung erforderlich ist. Dies geschieht aus Sicherheitsgründen. Websites bieten in der Regel solche 2FA-Methoden wie einen per SMS gesendeten Code oder eine spezielle Authentifizierungs-App an.

Wir sehen das Hinzufügen einer 2FA-Option als einen Vorteil. Wir verstehen auch, dass die Durchsetzung dieser Regelung einige Nutzer:innen irritieren kann. Deshalb haben wir diese Option für Ihr persönliches Konto auf adguard.com eingerichtet. Standardmäßig ist 2FA deaktiviert, wenn Sie ein neues Konto registrieren. Die 2FA kann manuell in den Einstellungen aktiviert werden. Was die derzeit verfügbaren Authentifizierungsmethoden angeht, so verwenden wir die bewährte Methode: eine Authentifizierungs-App für Android oder iOS. Sie können fast alle verfügbaren Apps verwenden, und es gibt viele davon.

Wir empfehlen die Einrichtung einer Zwei-Faktor-Authentifizierung für Ihr AdGuard-Konto. Es nimmt nicht viel Zeit in Anspruch, aber es hilft Ihnen, Ihre Lizenzschlüssel, Abonnements und vor allem alle persönlichen Daten, die mit Ihrem Konto verbunden sind, zu schützen.

## So richten Sie 2FA ein

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
