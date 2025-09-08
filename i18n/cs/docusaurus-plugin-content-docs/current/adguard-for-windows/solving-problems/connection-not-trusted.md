---
title: Problémy související s certifikátem
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Aby mohl AdGuard filtrovat provoz HTTPS a účinně blokovat reklamy a slídiče, vygeneruje speciální (a jedinečný) kořenový certifikát a nainstaluje jej do systémového úložiště. Více informací o tom, proč je certifikát vyžadován, najdete v [tomto článku](/general/https-filtering/what-is-https-filtering).

Prohlížeče obvykle důvěřují AdGuard certifikátu, jakmile je přidán do systémového úložiště certifikátů během procesu instalace. V některých případech to však nestačí a můžete narazit na varování nebo chyby. Nejčastěji se to stává v prohlížečích založených na Firefoxu, jako jsou Mozilla Firefox, PaleMoon, Waterfox atd., nebo v prohlížeči Yandex.Browser.

Zde jsou některé běžné problémy:

- [*Potenciální chyba bezpečnostního rizika* v prohlížečích založených na Firefoxu](#potential-security-risk-error-in-firefox-based-browsers)
- [Upozornění na certifikát Yandex.Browser](#yandexbrowser-certificate-warning)
- [V prohlížečích Firefox se neaktualizují neoficiální doplňky](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## *Potenciální chyba bezpečnostního rizika* v prohlížečích založených na Firefoxu

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Starší verze Firefoxu a prohlížeče na něm založené nedůvěřují certifikátům ze systémového úložiště, ale pouze certifikátům z místního úložiště. Od verze 68 Firefox důvěřuje systémovým certifikátům, ale stále se můžete setkat s chybou "Připojení není důvěryhodné". Pokud se něco takového stane, zkuste nejprve kliknout na tlačítko *Přeinstalovat certifikát* — najdete to na kartě *Síť*.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Pokud to nepomůže, postupujte podle pokynů pro ruční přidání AdGuard certifikátu do úložiště Firefoxu.

> Tento návod je určen pro prohlížeč Firefox. Názvy tlačítek a položek menu se mohou v různých prohlížečích Firefox lišit.

1. Spusťte AdGuard.

1. Přejděte na [http://local.adguard.org/cert](http://local.adguard.org/cert) a klikněte na tlačítko *Stáhnout*. Prohlížeč by měl začít stahovat soubor **cert.cer**.

    Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

    Stránku pro stažení můžete otevřít také kliknutím na odkaz prostřednictvím aplikace AdGuard v *Nastavení → Síť → HTTPS filtrování*.


:::

    ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Otevřete prohlížeč a poté otevřete *Nastavení*.

1. Přejděte na kartu *Soukromí a zabezpečení*.

1. Přejděte dolů na položku *Certifikáty* a klikněte na tlačítko *Zobrazit certifikáty*.

    ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Vyberte kartu *Autority*.

1. Klikněte na *Importovat...*.

    ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Vyhledejte stažený soubor **cert.cer** a klikněte na *Otevřít*.

1. Zaškrtněte políčko *Důvěřovat tomuto certifikátu k identifikaci webových stránek* a poté klikněte na *OK*.

    ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Úspěšně jste nainstalovali AdGuard certifikát. Restartujte prohlížeč a chyba by měla zmizet.

## Upozornění na certifikát Yandex.Browser

Pokud používáte AdGuard pro Windows i Yandex.Browser, možná jste na toto upozornění narazili:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Proč k tomu došlo

AdGuard i Yandex berou bezpečnost uživatelů na internetu velmi vážně. Současná politika společnosti Yandex je varovat uživatele před certifikátem, který není prohlížečem rozpoznán. Není to nepodložené, protože někdy mohou škodlivé aplikace vložit vlastní certifikáty a využít je k poškození systému a krádeži soukromých dat.

AdGuard však mezi důvěryhodné certifikáty přidává také svůj certifikát. To vede k varovné zprávě, na kterou jste narazili.

### Jak tento problém vyřešit

Nejjednodušší způsob je kliknout na tlačítko **Přejít na web**. Tím řeknete prohlížeči Yandex.Browser, aby si certifikát AdGuardu alespoň na chvíli zapamatoval jako důvěryhodný. Obvykle se tato zpráva již nezobrazuje, ale není vyloučeno, že se občas z nějakých důvodů objeví. V takových případech stačí znovu stisknout stejné tlačítko *(ujistěte se, že se jedná o certifikát AdGuardu!)*.

Vypnutím HTTPS filtrování v AdGuardu také zabráníte tomu, aby prohlížeč Yandex.Browser tuto zprávu znovu zobrazoval, ale má to velkou nevýhodu: zobrazí se všechny reklamy, které se načítají pomocí HTTPS (včetně **vlastních reklam společnosti Yandex**) — např. na webových stránkách YouTube, Facebook, Instagram a mnoha dalších. Pokud chcete zachovat vysokou kvalitu blokování reklam, důrazně vám to nedoporučujeme.

## V prohlížečích Firefox se neaktualizují neoficiální doplňky

Pokud používáte prohlížeče Firefox a máte doplňky, které nejsou z oficiálního katalogu Mozilly — a v AdGuardu je povoleno filtrování HTTPS — tyto doplňky nebude možné aktualizovat. Zde je důvod.

Při aktualizaci doplňků Firefox kontroluje, zda je připojení k aktualizačnímu serveru zabezpečeno certifikátem vydaným důvěryhodnou certifikační autoritou. Prohlížeče založené na prohlížeči Firefox důvěřují pouze certifikátům certifikačních autorit zařazených do integrovaného seznamu Mozilly — jedná se o bezpečnostní opatření k blokování potenciálně nebezpečných aktualizací.

Certifikát AdGuardu, ačkoliv je zabezpečený, není na tomto seznamu. Proto jsou domény Mozilla z filtrování HTTPS v AdGuardu vyloučeny.

Neoficiální doplňky však používají pro aktualizace servery třetích stran a ty nejsou ve výchozím nastavení z filtrování HTTPS vyloučeny. Když tedy Firefox kontroluje připojení, vidí místo původního certifikátu certifikát AdGuard — a aktualizaci zablokuje.

Pokud potřebujete zkontrolovat aktualizace takových doplňků, zvažte dočasné vypnutí AdGuardu.
