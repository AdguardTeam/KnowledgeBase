---
title: Známé problémy
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Poslední aktualizace: 17. září 2024

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

Tento problém lze řešit dvěma způsoby:

- Pomocí našeho [Asistenta prohlížeče](https://adguard.com/adguard-assistant/overview.html). Toto rozšíření prohlížeče vám pomůže spravovat filtrování přímo z prohlížeče a umožní vám zkontrolovat originální certifikát jakékoli webové stránky

  ![Certificate Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- Navštívením sekce *Nedávná aktivita* v AdGuardu pro Android nebo sekce *Záznam filtrování* v AdGuardu pro Windows a AdGuardu pro macOS. Zatímco v Asistentu prohlížeče můžete zobrazit pouze certifikát webové stránky, v Nedávné aktivitě můžete zkontrolovat certifikát libovolného serveru použitého v dílčím požadavku nebo prohlížeči, a to s asistentem prohlížeče nebo bez něj. Chcete-li zobrazit certifikát touto metodou, postupujte podle následujících pokynů.

#### Zkontrolujte originální certifikát v AdGuardu pro Android

1. Klikněte na ikonu Statistiky na navigačním panelu.
2. Přejděte na *Nedávná aktivita*.
3. Klikněte na požadavek, jehož certifikát chcete zkontrolovat, aby se otevřely detaily požadavku.
4. Přejděte dolů na *Původní certifikát*. Klikněte pro více informací.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Zkontrolujte originální certifikát v AdGuardu pro Windows

1. Přejděte do *Nastavení* → *Blokování reklam* → *Záznam filtrování*.
2. Klikněte na požadavek, jehož certifikát chcete zkontrolovat, aby se otevřely detaily požadavku.
3. V části *TLS* klikněte na *Zobrazit certifikát webové stránky*.

![Filtering log AdGuard for Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Zkontrolujte originální certifikát v AdGuardu pro macOS

1. Klikněte na ikonu ozubeného kola. V rozevírací nabídce přejděte na *Pokročilé* → *Protokol programu....*.
2. Klikněte na požadavek, jehož certifikát chcete zkontrolovat, aby se otevřely detaily požadavku.
3. Klikněte na *Zobrazit certifikát*.

![Filtering log AdGuard for Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Transparentnost certifikátu

Díky moderní kryptografii dokáží prohlížeče obvykle odhalit škodlivé webové stránky, které jsou opatřeny padělanými nebo falešnými certifikáty SSL. Současné kryptografické mechanismy však nejsou tak dobré při odhalování škodlivých webových stránek, pokud jsou vybaveny chybně vydanými certifikáty nebo certifikáty, které byly vydány kompromitovanou nebo nepoctivou certifikační autoritou (CA). Transparentnost certifikátů si klade za cíl odstranit tyto hrozby založené na certifikátech tím, že zpřístupní vydávání a existenci certifikátů SSL kontrole ze strany vlastníků domén, certifikačních autorit a uživatelů domén.

Produkty AdGuard, které používají [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) počínaje verzí **1.11**, budou implementovat zásady založené na [Chrome Certificate Transparency Policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Máte připomínky nebo návrhy?

Pokud chcete něco doplnit, nahlásit chyby nebo položit dotaz, kontaktujte nás na: `devteam@adguard.com`.
