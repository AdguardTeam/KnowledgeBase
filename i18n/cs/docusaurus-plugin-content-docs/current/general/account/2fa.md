---
title: Dvou-faktorové ověření
sidebar_position: 3
---

Dvou-faktorové ověřování (nebo 2FA) je metoda ověřování, která od uživatele vyžaduje další důkaz pro přihlášení, kromě obvyklé dvojice přihlašovacího jména a hesla. To se provádí z bezpečnostních důvodů. Webové stránky obvykle nabízejí takové metody 2FA, jako je kód zaslaný prostřednictvím SMS nebo speciální autentizační aplikace.

Přidání možnosti 2FA považujeme za přínos. Chápeme také, že jeho vynucování může některé uživatele dráždit. Proto jsme pro váš osobní účet na adguard.com vytvořili volitelnou funkci — ve výchozím nastavení je 2FA při registraci nového účtu vypnuto. Můžete to povolit ručně v nastavení. Pokud jde o aktuálně dostupné metody ověřování, používáme osvědčenou metodu: autentizační aplikaci pro Android nebo iOS. Můžete použít téměř jakoukoli takovou aplikaci, a je jich spousta.

Pro váš AdGuard účet doporučujeme nastavit dvoufaktorové ověřování. Nezabere vám to mnoho času, ale pomůže to ochránit vaše licenční klíče, předplatné a především všechny osobní údaje s účtem spojené.

## Jak to nastavit

1. Přihlaste se ke svému [AdGuard účtu](https://auth.adguardaccount.com/login.html) a přejděte na kartu *Nastavení*:

 ![AdGuard Account settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_1.png)

1. Přejděte dolů na položku *Dvoufázové ověřování* a povolte ji:

 ![Two-factor authentication toggle *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_2.png)

1. Kód bude odeslán na e-mailovou adresu spojenou s vaším AdGuard účtem. Chcete-li povolit 2FA, zadejte kód a klikněte na *Povolit*.

 ![The verification code *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_3.png?)

Po povolení dvoufázového ověřování máte na výběr ze dvou možností:

- *Jednorázový e-mailový kód*: při přihlášení vás požádáme o zadání kódu, který jsme vám odeslali na e-mail

- *Kód z aplikace pro oveřování*: při přihlášení vás požádáme o kód z vaší aplikace pro ověřování

![The Change button *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_4.png)

:::note

Pokud používáte aplikaci pro ověřování, nezapomeňte si někam uložit **klíč nastavení**. V případě ztráty nebo krádeže mobilního telefonu je nutné obnovit účet.

![The setup key in the authenticator app *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/setup_key.png)

:::

Pokud je vše provedeno správně, zobrazí se tato informace při příštím přihlášení k účtu:

![The result *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_5.png)

:::note

Pokud se zobrazí chyba ověření, zkontrolujte hodiny na telefonu. V případě potřeby nastavte čas, protože příčinou chyby mohou být nesynchronizované hodiny.

:::
