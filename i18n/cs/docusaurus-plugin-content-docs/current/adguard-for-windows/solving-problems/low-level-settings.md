---
title: Průvodce pokročilým (nízkoúrovňovým) nastavením
sidebar_position: 7
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Pokročilá nastavení, dříve známá jako nízkoúrovňová nastavení většinou obsahují možnosti, které přesahují kompetence běžného uživatele aí při každodenním používání se nepoužívají. AdGuard pro Windows je navržen tak, aby fungoval, aniž by bylo nutné cokoliv měnit, ale v některých případech nebo při řešení neobvyklého problému poskytuje další funkce.

:::caution

Změna *Pokročilých nastavení* může nečekaně způsobit problémy s výkonem AdGuardu, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory.

:::

## Jak dosáhnout pokročilých nastavení

Chcete-li přejít na *Pokročilá nastavení*, v hlavním okně klikněte na *Nastavení → Obecná nastavení* a přejděte dolů na *Pokročilá nastavení*. Případně vyberte *Pokročilé → Pokročilá nastavení...* v menu.

## Pokročilá nastavení

Jakmile otevřete Pokročilá nastavení, zobrazí se vám následující možnosti:

### Blokovat TCP Fast Open

Pokud je tato funkce povolena, zablokuje AdGuard v prohlížeči Edge funkci TCP Fast Open. Chcete-li použít nastavení, budete muset restartovat prohlížeč.

### Použít Encrypted Client Hello

Každé šifrované internetové připojení má i nešifrovanou část. Jedná se o první paket, který obsahuje název serveru, ke kterému se připojujete. Technologie Encrypted Client Hello má tento problém vyřešit a zašifrovat poslední kousek nešifrovaných informací. Chcete-li to využít, povolte možnost *Použít Encrypted Client Hello*. K vyhledání konfigurace ECH pro danou doménu používá místní proxy server DNS. Pokud je nalezen, paket Client Hello bude zašifrován.

### Zkontrolovat transparentnost certifikátů webových stránek

Ověřuje pravost všech certifikátů pro doménu na základě zásad transparentnosti certifikátů Chrome. Pokud certifikát není v souladu se zásadami Chrome Certificate Transparency, AdGuard webové stránky nefiltruje. Chrome to zase zablokuje.

### Povolit kontrolu odvolání certifikátů SSL/TLS

Po povolení této možnosti se spustí asynchronní kontroly OCSP, aby se ověřilo, zda není SSL/TLS certifikát webové stránky odvolán.

Pokud se kontrola OCSP dokončí během minimálního časového limitu, AdGuard okamžitě použije výsledek: zablokuje připojení, pokud je certifikát odvolán nebo naváže připojení, pokud je certifikát platný.

Pokud ověření trvá příliš dlouho, AdGuard naváže spojení a pokračuje v kontrole na pozadí. Pokud je certifikát odvolán, budou současná i budoucí připojení k doméně zablokována.

### Zobrazit AdGuard VPN v nastavení

Povolení této možnosti umožňuje zobrazit kartu AdGuard VPN v nastavení pro snadné otevření aplikace a webové stránky produktu.

### Vyloučit aplikaci z filtrování zadáním úplné cesty

Pokud chcete, aby AdGuard nefiltroval konkrétní aplikace, zadejte k nim úplnou cestu a tyto aplikace budou z filtrování vyloučeny. Jednotlivé cesty oddělte středníky.

### Povolit vyskakovací oznámení AdGuardu

Povolením této funkce zobrazíte vyskakovací oznámení AdGuardu. Nezobrazují se příliš často a obsahují pouze důležité informace. Poslední vyskakovací oznámení můžete vyvolat také pomocí menu.

### Automaticky zachytávat URL adresy pro odběr filtrů

Tuto funkci povolte, pokud chcete, aby AdGuard automaticky zachycoval adresy URL pro přihlášení k odběru filtrů (tj. `abp:subscribe` a podobné) a otevíral dialogové okno pro instalaci vlastního filtru.

### Filtrování HTTP/3

Pokud je tato možnost povolena, bude AdGuard filtrovat kromě jiných typů požadavků také požadavky odeslané skrze HTTP/3.

### Použít režim přesměrování ovladače

Pokud je tato možnost povolena, AdGuard zachytí veškerý provoz a přesměruje jej na místní proxy pro další filtrování.

V opačném případě bude AdGuard filtrovat veškerý provoz za běhu bez přesměrování. V tomto případě bude systém považovat AdGuard za jedinou aplikaci, která se připojuje k internetu (ostatní aplikace jsou směrovány přes něj). Nevýhodou je, že se tím sníží účinnost systémové brány Firewall. Výhodou je, že tento přístup funguje o něco rychleji.

### Otevřít hlavní okno při startu systému

Tuto možnost povolte, aby se po načtení systému otevřelo hlavní okno AdGuardu. Toto nastavení nemá vliv na to, zda je skutečná služba filtrování spuštěna, nebo ne, toto nastavení se nachází v *Nastavení → Obecná nastavení*.

### Zapnout filtrování při spuštění systému

Od verze 7.12 služba AdGuard ve výchozím nastavení nefiltruje provoz po spuštění operačního systému, pokud je zakázána možnost Spustit AdGuard při startu systému. Jinými slovy, služba AdGuard je spuštěna v režimu „nečinnosti“. Tuto možnost povolte, aby AdGuard filtroval provoz i v případě, že aplikace není spuštěna.

:::note:::note

Před verzí 7.12 se služba AdGuard ve výchozím nastavení spouštěla v režimu filtrování (i když byla zakázána volba *Spustit AdGuard při startu systému*). Pokud vám vyhovovalo staré chování, tuto možnost povolte.

:::

### Filtrovat localhost

Pokud chcete, aby AdGuard filtroval zpětná připojení, zaškrtněte toto políčko. Tato možnost bude vždy zapnutá, pokud máte nainstalovanou AdGuard VPN, protože jinak nebude fungovat.

### Vyloučit zadané rozsahy IP z filtrování

Pokud nechcete, aby AdGuard filtroval určité podsítě, povolte tuto funkci a zadejte rozsahy IP v notaci CIDR (např. 98.51.100.14/24) v části **Rozsahy IP vyloučené z filtrování** níže.

### Povolit zápis HAR

Tato možnost by měla být zapnuta **pouze pro účely ladění**. Zaškrtnutím tohoto políčka vytvoří AdGuard soubor ve formátu HAR 1.2 obsahující informace o všech filtrovaných HTTP požadavcích. Tento soubor lze analyzovat pomocí aplikace Fiddler. Upozorňujeme, že to může výrazně zpomalit prohlížení webu.

### Přidat do běžného požadavku HTTP dodatečnou mezeru

Přidá dodatečnou mezeru mezi metodu HTTP a URL adresu a odstraní mezeru za polem "Host:", aby se zabránilo hloubkové kontrole paketů. Např. požadavek

`GET /foo/bar/ HTTP/1.1
Host: example.org`

bude převeden na

`GET /foo/bar/ HTTP/1.1
Host: example.org`

Tato možnost se použije pouze v případě, že je povolena možnost *Ochrana před DPI* v Režimu utajení.

### Upravit velikost fragmentu úvodního paketu TLS

Určuje velikost fragmentace paketů TCP, čímž se zabrání hloubkové kontrole paketů. Tato možnost má vliv pouze na zabezpečený (HTTPS) provoz.

Pokud je tato možnost povolena, AdGuard rozdělí počáteční paket TLS (paket Client Hello) na dvě části: první má zadanou délku a druhá obsahuje zbytek až do délky celého počátečního paketu TLS.

Platné hodnoty: 1–1500. Pokud je zadána neplatná velikost, použije se hodnota vybraná systémem. Tato možnost se použije pouze v případě, že je povolena možnost *Ochrana před DPI* v Režimu utajení.

### Velikost fragmentu běžného požadavku HTTP

Upraví velikost fragmentace požadavků HTTP. Tato možnost má vliv pouze na prostý HTTP provoz. Pokud je tato možnost povolena, AdGuard rozdělí počáteční paket na dvě části: první má zadanou délku a druhá obsahuje zbytek až do délky celého původního paketu.

Platné hodnoty: 1–1500. Pokud je zadána neplatná velikost, použije se hodnota vybraná systémem. Tato možnost se použije pouze v případě, že je povolena možnost *Ochrana před DPI* v Režimu utajení.

### Zobrazit QUIC

Umožňuje zobrazit záznamy protokolu QUIC v záznamech filtrování. Pouze pro blokované požadavky.

### Povolit udržování TCP

Pravidelné odesílání paketů TCP přes neaktivní připojení, aby se zajistilo jeho fungování a resetování časových limitů NAT. Tato možnost může být užitečná pro obejití přísného nastavení překladu síťových adres (NAT), které používají někteří poskytovatelé internetových služeb.

### Interval udržování TCP

Zde můžete zadat dobu nečinnosti v sekundách před odesláním udržovací sondy. Pokud je zadána 0, použije se hodnota vybraná systémem.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Toto nastavení funguje pouze v případě, že je povolena možnost *Povolit udržování TCP*.

:::

### Časový limit udržování TCP

Zde můžete zadat dobu v sekundách před odesláním další udržovací sondy neodpovídajícímu partnerovi. Pokud je zadána 0, použije se hodnota vybraná systémem.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Toto nastavení funguje pouze v případě, že je povolena možnost *Povolit udržování TCP*.

:::

### Blokovat Java

Některé webové stránky a webové služby stále podporují zásuvné moduly Java. Rozhraní API, které slouží jako základ pro zásuvné moduly Java, obsahuje závažné bezpečnostní chyby. Tyto zásuvné moduly můžete z bezpečnostních důvodů zakázat. Nicméně, i když se rozhodnete použít možnost *Blokovat Java*, JavaScript bude stále povolen.

### Časový limit DNS serveru

Zde můžete zadat dobu v milisekundách, po kterou bude AdGuard čekat na odezvu od vybraného DNS serveru, než se uchýlí k nouzovému řešení. Pokud toto pole nevyplníte nebo zadáte neplatnou hodnotu, bude použita hodnota 5000.

### Použít HTTP/3 pro DNS-over-HTTPS

Povolí HTTP/3 pro odchozí připojení DNS-over-HTTPS, aby se urychlilo připojení, pokud vybrané odchozí připojení tento protokol podporuje. To znamená, že povolení této možnosti nezaručuje, že všechny požadavky DNS budou odesílány prostřednictvím HTTP/3.

### Použít záložní DNS odchozích připojení

Běžné dotazy budou přesměrovány na záložní odchozí server, pokud všechny požadavky DNS na vybrané odchozí připojení selžou.

### Paralelní dotazování na odchozí připojení DNS

Všechny odchozí připojení budou dotazovány paralelně a je vrácena první odpověď. Vzhledem k tomu, že dotazy DNS jsou prováděny paralelně, zvyšuje se povolením této funkce rychlost internetu.

### Vždy odpovídat na neúspěšné DNS dotazy

Pokud se překládání adres nezdařilo v každém z předávaných odchozích připojení a také v záložních doménách, bude odpovědí na požadavek DNS `SERVFAIL`.

### Povolit filtrování zabezpečených DNS požadavků

Kromě běžných DNS požadavků bude AdGuard přesměrovávat zabezpečené DNS požadavky na místní DNS proxy.

### Režim blokování pro pravidla hosts

Zde můžete vybrat způsob, jakým bude AdGuard reagovat na domény blokované pravidly DNS na základě [syntaxe pravidla hosts](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Odpověď s chybou "Refused"
- Odpověď s chybou "NxDomain"
- Odpověď s vlastní IP adresou

### Režim blokování pro pravidla stylu adblock

Zde můžete vybrat způsob, jakým bude AdGuard reagovat na domény blokované pravidly DNS na základě [syntaxe stylu ad-block](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Odpověď s chybou "Refused"
- Odpověď s chybou "NxDomain"
- Odpověď s vlastní IP adresou

### Vlastní IPv4 adresa

Pokud je v režimu blokování pro pravidla pro hostitele, nebo v režimu blokování pro pravidla typu adblock vybrána vlastní IP adresa, bude tato IP adresa vrácena v odpovědi na blokované požadavky A. Pokud nejsou zadáno nic, AdGuard odpoví výchozí chybou "Refused".

### Vlastní IPv6 adresa

Pokud je v režimu blokování pro pravidla pro hostitele, nebo v režimu blokování pro pravidla typu adblock vybrána vlastní IP adresa, bude tato IP adresa vrácena v odpovědi na blokované požadavky AAAA. Pokud nejsou zadáno nic, AdGuard odpoví výchozí chybou "Refused".

### Záložní server

Zde můžete zadat alternativní DNS server, na který bude požadavek DNS přesměrován, pokud hlavní server neodpoví v časovém limitu uvedeném v následující části. Na výběr jsou tři možnosti:

- Nepoužívat záložní servery;
- Použít výchozí systémové servery;
- Použít vlastní servery.

### Blokovat ECH

Pokud je tato možnost povolena, AdGuard odstraní z dotazů parametry Encrypted Client Hello.

### Seznam vlastních záložních serverů

Pokud chcete, aby AdGuard používal vlastní záložní servery, uveďte je v této části po jednom na řádek.

### Seznam vlastních bootstrap adres

Bootstrap je zprostředkující DNS server používaný k získání IP adresy zabezpečeného DNS serveru, který jste vybrali dříve v menu *DNS ochrana*. Taková "střední cesta" je nutná při použití protokolů, které označují adresu serveru písmeny (například DNS-over-TLS). V tomto případě funguje bootstrap jako překladač a převádí písmena na čísla, kterým systém rozumí.

Ve výchozím nastavení je použit systémový překladač DNS a bootstrap požadavek je odeslán prostřednictvím portu 53. Pokud vám to nevyhovuje, uveďte zde IP adresy DNS serverů, které budou použity k určení adresy šifrovaného DNS serveru v pořadí shora dolů. Zadané IP adresy budou použity v uvedeném pořadí. Pokud zadáte neplatné adresy nebo nezadáte žádné, budou použity systémové IP adresy.

### DNS výjimky

Všechny DNS požadavky na domény zde uvedené budou přesměrovány na výchozí systémový DNS server namísto DNS serveru zadaného v nastavení aplikace. Na tyto požadavky se také neuplatní pravidla DNS blokování.

### Vyloučit zadané názvy sítí Wi-Fi (SSID) z DNS filtrování

DNS ochrana nebude fungovat pro sítě Wi-Fi uvedené v této části. Zadejte názvy sítí Wi-Fi (SSID), jeden na řádek. To může být užitečné, pokud je určitá síť Wi-Fi již chráněna pomocí AdGuard Home nebo jiným systémem DNS ochrany. V tomto případě je zbytečné znovu filtrovat DNS požadavky.
