---
title: Problémy související s certifikátem
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Aby mohl AdGuard filtrovat provoz HTTPS a účinně blokovat reklamy a slídiče, vygeneruje speciální (a jedinečný) kořenový certifikát a nainstaluje jej do systémového úložiště. You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

Prohlížeče obvykle důvěřují AdGuard certifikátu, jakmile je přidán do systémového úložiště certifikátů během procesu instalace. V některých případech to však nestačí a můžete narazit na varování nebo chyby. Nejčastěji se to stává v prohlížečích založených na Firefoxu, jako jsou Mozilla Firefox, PaleMoon, Waterfox atd., nebo v prohlížeči Yandex.Browser.

Zde jsou některé běžné problémy:

- [_Potential Security Risk_ error in Firefox-based browsers](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser certificate warning](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potential Security Risk_ error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Starší verze Firefoxu a prohlížeče na něm založené nedůvěřují certifikátům ze systémového úložiště, ale pouze certifikátům z místního úložiště. Od verze 68 Firefox důvěřuje systémovým certifikátům, ale stále se můžete setkat s chybou "Připojení není důvěryhodné". If something like this happens, first try to click the _Reinstall Certificate_ button — you will find it in the _Network_ tab.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Pokud to nepomůže, postupujte podle pokynů pro ruční přidání AdGuard certifikátu do úložiště Firefoxu.

> Tento návod je určen pro prohlížeč Firefox. Názvy tlačítek a položek menu se mohou v různých prohlížečích Firefox lišit.

1. Spusťte AdGuard.

2. Go to [https://local.adguard.org/cert](https://local.adguard.org/cert) and click the _Download_ button. The browser should start downloading **cert.cer** file.

   Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

   You can also open the download page by clicking the link via the AdGuard app at _Settings → Network → HTTPS filtering_.

   :::

   ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Open your browser and then open _Settings_.

4. Go to _Privacy & Security_ tab.

5. Scroll down to _Certificates_ and click the _View Certificates_ button.

   ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Select _Authorities_ tab.

7. Click _Import..._.

   ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Browse the downloaded **cert.cer** file and click _Open_.

9. Check the _Trust this CA to identify websites_ box and then click _OK_.

   ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Úspěšně jste nainstalovali AdGuard certifikát. Restartujte prohlížeč a chyba by měla zmizet.

## Upozornění na certifikát Yandex.Browser

Pokud používáte AdGuard pro Windows i Yandex.Browser, možná jste na toto upozornění narazili:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Proč k tomu došlo

AdGuard i Yandex berou bezpečnost uživatelů na internetu velmi vážně. Současná politika společnosti Yandex je varovat uživatele před certifikátem, který není prohlížečem rozpoznán. Není to nepodložené, protože někdy mohou škodlivé aplikace vložit vlastní certifikáty a využít je k poškození systému a krádeži soukromých dat.

AdGuard však mezi důvěryhodné certifikáty přidává také svůj certifikát. To vede k varovné zprávě, na kterou jste narazili.

### Jak tento problém vyřešit

The easiest way is to click the **Go to site** button. Tím řeknete prohlížeči Yandex.Browser, aby si certifikát AdGuardu alespoň na chvíli zapamatoval jako důvěryhodný. Obvykle se tato zpráva již nezobrazuje, ale není vyloučeno, že se občas z nějakých důvodů objeví. In such cases, simply press the same button again _(make sure it is AdGuard's certificate!)_.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. Pokud chcete zachovat vysokou kvalitu blokování reklam, důrazně vám to nedoporučujeme.

## V prohlížečích Firefox se neaktualizují neoficiální doplňky

Pokud používáte prohlížeče Firefox a máte doplňky, které nejsou z oficiálního katalogu Mozilly — a v AdGuardu je povoleno filtrování HTTPS — tyto doplňky nebude možné aktualizovat. Zde je důvod.

Při aktualizaci doplňků Firefox kontroluje, zda je připojení k aktualizačnímu serveru zabezpečeno certifikátem vydaným důvěryhodnou certifikační autoritou. Prohlížeče založené na prohlížeči Firefox důvěřují pouze certifikátům certifikačních autorit zařazených do integrovaného seznamu Mozilly — jedná se o bezpečnostní opatření k blokování potenciálně nebezpečných aktualizací.

Certifikát AdGuardu, ačkoliv je zabezpečený, není na tomto seznamu. Proto jsou domény Mozilla z filtrování HTTPS v AdGuardu vyloučeny.

Neoficiální doplňky však používají pro aktualizace servery třetích stran a ty nejsou ve výchozím nastavení z filtrování HTTPS vyloučeny. Když tedy Firefox kontroluje připojení, vidí místo původního certifikátu certifikát AdGuard — a aktualizaci zablokuje.

Pokud potřebujete zkontrolovat aktualizace takových doplňků, zvažte dočasné vypnutí AdGuardu.
