---
title: Dvou-faktorové ověření
sidebar_position: 3
---

Dvou-faktorové ověřování (nebo 2FA) je metoda ověřování, která od uživatele vyžaduje další důkaz pro přihlášení, kromě obvyklé dvojice přihlašovacího jména a hesla. To se provádí z bezpečnostních důvodů. Webové stránky obvykle nabízejí takové metody 2FA, jako je kód zaslaný prostřednictvím SMS nebo speciální autentizační aplikace.

Přidání možnosti 2FA považujeme za přínos. Chápeme také, že jeho vynucování může některé uživatele dráždit. Proto jsme pro váš osobní účet na adguard.com vytvořili volitelnou funkci — ve výchozím nastavení je 2FA při registraci nového účtu vypnuto. Můžete to povolit ručně v nastavení. Pokud jde o aktuálně dostupné metody ověřování, používáme osvědčenou metodu: autentizační aplikaci pro Android nebo iOS. Můžete použít téměř jakoukoli takovou aplikaci, a je jich spousta.

Pro váš AdGuard účet doporučujeme nastavit dvoufaktorové ověřování. Nezabere vám to mnoho času, ale pomůže to ochránit vaše licenční klíče, předplatné a především všechny osobní údaje s účtem spojené.

## Jak to nastavit

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
