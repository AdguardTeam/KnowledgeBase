---
title: Autenticazione a due fattori
sidebar_position: 3
---

L'autenticazione a due fattori (o A2F) è un metodo d'autenticazione che richiede un'ulteriore prova da parte dell'utente per accedere, oltre alla solita coppia di nome utente e password. Lo si fa per una questione di sicurezza. I siti web di solito offrono metodi di 2FA come un codice inviato via SMS o un'app speciale di autenticazione.

Vediamo l'aggiunta dell'opzione di A2F come un vantaggio. Inoltre, comprendiamo che imporla potrebbe irritare alcuni utenti. Ecco perché l'abbiamo resa facoltativa per il vostro account personale su adguard.com: di default, la 2FA è disattivata quando si registra un nuovo account. Puoi abilitarla manualmente nelle impostazioni. Quanto ai metodi di autenticazione correntemente disponibili, utilizziamo quelli collaudati: un'app di autenticazione per Android e iOS. Puoi utilizzare quasi tutte le app di questo tipo e ne esistono molte.

Consigliamo di configurare l'autenticazione a due fattori per il tuo profilo di AdGuard. Non ti ci vorrà molto, ma ti aiuterà a proteggere le chiavi di licenza, gli abbonamenti e, soprattutto, le informazioni personali associate all'account.

## Come configurarla

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
