---
title: Známé problémy
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Last update: September 17, 2024

Pochopení tohoto článku může vyžadovat základní znalosti o šifrování, TLS a HTTPS.

Nejprve se podívejte na tento jednoduchý diagram, který ukazuje obecnou strukturu protokolu HTTPS:

![What is HTTPS filtering?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard zkopíruje vlastnosti připojení TLS, které používá váš prohlížeč:

- AdGuard používá stejnou verzi TLS
- AdGuard používá stejné šifrovací metody (šifry) jako váš prohlížeč

V podstatě to znamená, že pokud používáte moderní a bezpečný prohlížeč, bude brát v úvahu všechny známé problémy TLS a nebude se pokoušet používat nebezpečné šifry.

**Jak AdGuard postupuje v případě pochybností o platnosti certifikátu?** V takových případech AdGuard zcela ukončí filtrování všech připojení k této doméně a ponechá veškerá rozhodnutí na prohlížeči.

## Známé problémy

HTTPS filtrování v AdGuardu má své nevýhody. Téměř všechny z nich mají být odstraněny v několika příštích verzích AdGuardu.

Všechny nám známé problémy a předpokládané termíny jejich oprav jsou uvedeny níže.

### Kontrola originálu certifikátu

Největší nevýhodou mechanismu HTTPS filtrování je, že skrývá skutečný certifikát webové stránky. Nemůžete jednoduše zkontrolovat jeho originální certifikát, protože vidíte pouze ten, který vydal AdGuard.

This problem can be solved in 2 ways:

- By using our [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website

  ![Certificate Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the *Recent activity* section in AdGuard for Android or the *Filtering log* section in AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. To view the certificate using this method, follow the instructions below.

#### Inspect original certificate in AdGuard for Android

1. Click the Statistics icon on the navigation bar.
2. Go to *Recent activity*.
3. Click the request whose certificate you want to inspect to open the request details.
4. Scroll down to *Original certificate*. Click for more info.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspect original certificate in AdGuard for Windows

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Under the *TLS* section, click *View website certificate*.

![Filtering log AdGuard for Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspect original certificate in AdGuard for macOS

1. Click the gear icon. In the drop-down menu, go to *Advanced* → *Filtering log...*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Click *View certificate*.

![Filtering log AdGuard for Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Transparentnost certifikátu

Díky moderní kryptografii dokáží prohlížeče obvykle odhalit škodlivé webové stránky, které jsou opatřeny padělanými nebo falešnými certifikáty SSL. Současné kryptografické mechanismy však nejsou tak dobré při odhalování škodlivých webových stránek, pokud jsou vybaveny chybně vydanými certifikáty nebo certifikáty, které byly vydány kompromitovanou nebo nepoctivou certifikační autoritou (CA). Transparentnost certifikátů si klade za cíl odstranit tyto hrozby založené na certifikátech tím, že zpřístupní vydávání a existenci certifikátů SSL kontrole ze strany vlastníků domén, certifikačních autorit a uživatelů domén.

Produkty AdGuard, které používají [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) počínaje verzí **1.11**, budou implementovat zásady založené na [Chrome Certificate Transparency Policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Máte připomínky nebo návrhy?

Pokud chcete něco doplnit, nahlásit chyby nebo položit dotaz, kontaktujte nás na: `devteam@adguard.com`.
