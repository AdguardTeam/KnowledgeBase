---
title: Průvodce pokročilým (nízkoúrovňovým) nastavením
sidebar_position: 7
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Pokročilá nastavení, dříve známá jako nízkoúrovňová nastavení většinou obsahují možnosti, které přesahují kompetence běžného uživatele aí při každodenním používání se nepoužívají. AdGuard pro Windows je navržen tak, aby fungoval, aniž by bylo nutné cokoliv měnit, ale v některých případech nebo při řešení neobvyklého problému poskytuje další funkce.

:::caution

Mindlessly changing _Advanced Settings_ can potentially cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory.

:::

## Jak dosáhnout pokročilých nastavení

To go to _Advanced settings_, in the main windows click _Settings → General Settings_ and scroll down to _Advanced Settings_. Alternatively, select _Advanced → Advanced settings..._ in the tray menu.

## Pokročilá nastavení

Jakmile otevřete Pokročilá nastavení, zobrazí se vám následující možnosti:

### Blokovat TCP Fast Open

Pokud je tato funkce povolena, zablokuje AdGuard v prohlížeči Edge funkci TCP Fast Open. Chcete-li použít nastavení, budete muset restartovat prohlížeč.

### Použít Encrypted Client Hello

Každé šifrované internetové připojení má i nešifrovanou část. Jedná se o první paket, který obsahuje název serveru, ke kterému se připojujete. Technologie Encrypted Client Hello má tento problém vyřešit a zašifrovat poslední kousek nešifrovaných informací. To benefit from it, enable the _Use Encrypted Client Hello_ option. K vyhledání konfigurace ECH pro danou doménu používá místní proxy server DNS. Pokud je nalezen, paket Client Hello bude zašifrován.

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

Enable this feature if you want AdGuard to automatically intercept filter subscription URLs (i.e. `abp:subscribe` and alike) and to open a custom filter installation dialog.

### Filtrování HTTP/3

Pokud je tato možnost povolena, bude AdGuard filtrovat kromě jiných typů požadavků také požadavky odeslané skrze HTTP/3.

**Omezení**:

- Prohlížeče založené na Chrome nepřijímají uživatelské certifikáty, proto v nich není podporováno filtrování HTTP/3.
- Prohlížeče založené na Firefoxu se ve výchozím nastavení chovají podobně, ale můžete nastavit možnost `network.http.http3.disable_when_third_party_roots_found` v `about:config` na `false`, aby byly povoleny uživatelské certifikáty pro HTTP/3.
- Safari podporuje filtrování HTTP/3 bez další konfigurace.

### Použít režim přesměrování ovladače

Pokud je tato možnost povolena, AdGuard zachytí veškerý provoz a přesměruje jej na místní proxy pro další filtrování.

V opačném případě bude AdGuard filtrovat veškerý provoz za běhu bez přesměrování. V tomto případě bude systém považovat AdGuard za jedinou aplikaci, která se připojuje k internetu (ostatní aplikace jsou směrovány přes něj). Nevýhodou je, že se tím sníží účinnost systémové brány Firewall. Výhodou je, že tento přístup funguje o něco rychleji.

### Otevřít hlavní okno při startu systému

Tuto možnost povolte, aby se po načtení systému otevřelo hlavní okno AdGuardu. This setting, which doesn't affect whether the actual filtering service is launched or not, is located in _Settings → General Settings_.

### Zapnout filtrování při spuštění systému

Od verze 7.12 služba AdGuard ve výchozím nastavení nefiltruje provoz po spuštění operačního systému, pokud je zakázána možnost Spustit AdGuard při startu systému. Jinými slovy, služba AdGuard je spuštěna v režimu „nečinnosti“. Tuto možnost povolte, aby AdGuard filtroval provoz i v případě, že aplikace není spuštěna.

:::note

Before v7.12, the AdGuard service started in filtering mode by default (even if the _Launch AdGuard at system start-up_ was disabled). Pokud vám vyhovovalo staré chování, tuto možnost povolte.

:::

### Filtrovat localhost

Pokud chcete, aby AdGuard filtroval zpětná připojení, zaškrtněte toto políčko. Tato možnost bude vždy zapnutá, pokud máte nainstalovanou AdGuard VPN, protože jinak nebude fungovat.

### Vyloučit zadané rozsahy IP z filtrování

If you don't want AdGuard to filter particular subnets, enable this feature and specify the IP ranges in the CIDR notation (e.g. 98.51.100.14/24) in the **IP ranges excluded from filtering** section below.

### Povolit zápis HAR

This option should be enabled **only for debugging purposes**. Zaškrtnutím tohoto políčka vytvoří AdGuard soubor ve formátu HAR 1.2 obsahující informace o všech filtrovaných HTTP požadavcích. Tento soubor lze analyzovat pomocí aplikace Fiddler. Upozorňujeme, že to může výrazně zpomalit prohlížení webu.

### Přidat do běžného požadavku HTTP dodatečnou mezeru

Přidá dodatečnou mezeru mezi metodu HTTP a URL adresu a odstraní mezeru za polem "Host:", aby se zabránilo hloubkové kontrole paketů. Např. požadavek

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

bude převeden na

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the _Protect from DPI_ Stealth mode option is enabled.

### Upravit velikost fragmentu úvodního paketu TLS

Určuje velikost fragmentace paketů TCP, čímž se zabrání hloubkové kontrole paketů. Tato možnost má vliv pouze na zabezpečený (HTTPS) provoz.

Pokud je tato možnost povolena, AdGuard rozdělí počáteční paket TLS (paket Client Hello) na dvě části: první má zadanou délku a druhá obsahuje zbytek až do délky celého počátečního paketu TLS.

Platné hodnoty: 1–1500. Pokud je zadána neplatná velikost, použije se hodnota vybraná systémem. This option is only applied when the _Protect from DPI_ Stealth mode option is enabled.

### Velikost fragmentu běžného požadavku HTTP

Upraví velikost fragmentace požadavků HTTP. Tato možnost má vliv pouze na prostý HTTP provoz. Pokud je tato možnost povolena, AdGuard rozdělí počáteční paket na dvě části: první má zadanou délku a druhá obsahuje zbytek až do délky celého původního paketu.

Platné hodnoty: 1–1500. Pokud je zadána neplatná velikost, použije se hodnota vybraná systémem. This option is only applied when the _Protect from DPI_ Stealth mode option is enabled.

### Zobrazit QUIC

Umožňuje zobrazit záznamy protokolu QUIC v záznamech filtrování. Pouze pro blokované požadavky.

### Povolit udržování TCP

Platné hodnoty: 1–1500. Pokud je zadána neplatná velikost, použije se hodnota vybraná systémem.

### Interval udržování TCP

Zde můžete zadat dobu nečinnosti v sekundách před odesláním udržovací sondy. Pokud je zadána 0, použije se hodnota vybraná systémem.

:::note

This setting only works when the _Enable TCP keepalive_ option is enabled.

:::

### Časový limit udržování TCP

Zde můžete zadat dobu v sekundách před odesláním další udržovací sondy neodpovídajícímu partnerovi. Pokud je zadána 0, použije se hodnota vybraná systémem.

:::note

This setting only works when the _Enable TCP keepalive_ option is enabled.

:::

### Blokovat Java

Některé webové stránky a webové služby stále podporují zásuvné moduly Java. Rozhraní API, které slouží jako základ pro zásuvné moduly Java, obsahuje závažné bezpečnostní chyby. Tyto zásuvné moduly můžete z bezpečnostních důvodů zakázat. Nevertheless, even if you decide to use _Block Java_ option, JavaScript will still be enabled.

### Časový limit DNS serveru

Zde můžete zadat dobu v milisekundách, po kterou bude AdGuard čekat na odezvu od vybraného DNS serveru, než se uchýlí k nouzovému řešení. Pokud toto pole nevyplníte nebo zadáte neplatnou hodnotu, bude použita hodnota 5000.

### Použít HTTP/3 pro DNS-over-HTTPS

Povolí HTTP/3 pro odchozí připojení DNS-over-HTTPS, aby se urychlilo připojení, pokud vybrané odchozí připojení tento protokol podporuje. To znamená, že povolení této možnosti nezaručuje, že všechny požadavky DNS budou odesílány prostřednictvím HTTP/3.

### Použít záložní DNS odchozích připojení

Běžné dotazy budou přesměrovány na záložní odchozí server, pokud všechny požadavky DNS na vybrané odchozí připojení selžou.

### Paralelní dotazování na odchozí připojení DNS

Všechny odchozí připojení budou dotazovány paralelně a je vrácena první odpověď. Vzhledem k tomu, že dotazy DNS jsou prováděny paralelně, zvyšuje se povolením této funkce rychlost internetu.

### Vždy odpovídat na neúspěšné DNS dotazy

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Povolit filtrování zabezpečených DNS požadavků

Kromě běžných DNS požadavků bude AdGuard přesměrovávat zabezpečené DNS požadavky na místní DNS proxy.

### Režim blokování pro pravidla hosts

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Odpověď s chybou "Refused"
- Odpověď s chybou "NxDomain"
- Odpověď s vlastní IP adresou

### Režim blokování pro pravidla stylu adblock

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- Odpověď s chybou "Refused"
- Odpověď s chybou "NxDomain"
- Odpověď s vlastní IP adresou

### Vlastní IPv4 adresa

Pokud je v režimu blokování pro pravidla pro hostitele, nebo v režimu blokování pro pravidla typu adblock vybrána vlastní IP adresa, bude tato IP adresa vrácena v odpovědi na blokované požadavky A. Pokud nejsou zadáno nic, AdGuard odpoví výchozí chybou "Refused".

### Vlastní IPv6 adresa

Pokud je v režimu blokování pro pravidla pro hostitele, nebo v režimu blokování pro pravidla typu adblock vybrána vlastní IP adresa, bude tato IP adresa vrácena v odpovědi na blokované požadavky AAAA. Pokud není zadáno nic, AdGuard odpoví výchozí chybou "Refused".

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

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in _DNS protection_. Taková "střední cesta" je nutná při použití protokolů, které označují adresu serveru písmeny (například DNS-over-TLS). V tomto případě funguje bootstrap jako překladač a převádí písmena na čísla, kterým systém rozumí.

Ve výchozím nastavení je použit systémový překladač DNS a bootstrap požadavek je odeslán prostřednictvím portu 53. Pokud vám to nevyhovuje, uveďte zde IP adresy DNS serverů, které budou použity k určení adresy šifrovaného DNS serveru v pořadí shora dolů. Zadané IP adresy budou použity v uvedeném pořadí. Pokud zadáte neplatné adresy nebo nezadáte žádné, budou použity systémové IP adresy.

### DNS výjimky

Všechny DNS požadavky na domény zde uvedené budou přesměrovány na výchozí systémový DNS server namísto DNS serveru zadaného v nastavení aplikace. Na tyto požadavky se také neuplatní pravidla DNS blokování.

### Vyloučit zadané názvy sítí Wi-Fi (SSID) z DNS filtrování

DNS ochrana nebude fungovat pro sítě Wi-Fi uvedené v této části. Zadejte názvy sítí Wi-Fi (SSID), jeden na řádek. To může být užitečné, pokud je určitá síť Wi-Fi již chráněna pomocí AdGuard Home nebo jiným systémem DNS ochrany. V tomto případě je zbytečné znovu filtrovat DNS požadavky.
