---
title: Autentificare cu doi factori
sidebar_position: 3
---

Autentificarea cu doi factori (sau 2FA) este o metodă de autentificare care necesită o dovadă suplimentară de la utilizator pentru a se autentifica, pe lângă perechea obișnuită de nume de utilizator și parolă. Acest lucru se face din motive de securitate. Site-urile web oferă de obicei metode 2FA precum un cod trimis prin SMS sau o aplicație de autentificare specială.

Considerăm că adăugarea unei opțiuni 2FA este un beneficiu. De asemenea, înțelegem că impunerea acesteia poate irita unii utilizatori. De aceea, am făcut-o opțională pentru contul dvs. personal pe adguard.com — implicit, 2FA este dezactivat când vă înregistrați un nou cont. You can enable it manually in the settings. În ceea ce privește metodele de autentificare disponibile în prezent, folosim una testată și dovedită: o aplicație de autentificare pentru Android sau iOS. Puteți folosi aproape orice aplicație de acest gen, și există multe dintre ele.

Recomandăm să configurați autentificarea cu doi factori pentru contul dvs. AdGuard. Nu vă va lua mult timp, dar va ajuta la protejarea cheilor dvs. de licență, a abonamentelor și, cel mai important, a oricăror informații personale asociate cu contul.

## Cum să-l configurați

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
