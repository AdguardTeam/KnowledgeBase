---
title: Průvodce pokročilým (nízkoúrovňovým) nastavením
sidebar_position: 7
---

Pokročilá nastavení, dříve známá jako nízkoúrovňová nastavení většinou obsahují nastavení, která přesahují kompetence běžného uživatele a nemají uplatnění při každodenním používání. AdGuard pro Windows je navržen tak, aby fungoval, aniž by bylo nutné cokoliv měnit, ale v některých případech nebo při řešení neobvyklého problému poskytuje další možnosti.

> Změna *Pokročilých nastavení* může nečekaně způsobit problémy s výkonem AdGuardu, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory.

## Jak dosáhnout pokročilých nastavení

Chcete-li přejít na *Pokročilá nastavení*, v hlavním okně klikněte na *Nastavení → Obecná nastavení* a přejděte dolů na *Pokročilá nastavení*. Případně vyberte *Pokročilé → Pokročilá nastavení...* v menu.

## Pokročilá nastavení

Jakmile otevřete Pokročilá nastavení, zobrazí se vám následující možnosti:

### Blokovat TCP Fast Open

Pokud je tato funkce povolena, zablokuje AdGuard v prohlížeči Edge funkci TCP Fast Open. Chcete-li použít nastavení, budete muset restartovat prohlížeč.

### Vyloučit aplikaci z filtrování zadáním úplné cesty

Pokud chcete, aby AdGuard nefiltroval konkrétní aplikace, zadejte k nim úplnou cestu a tyto aplikace budou z filtrování vyloučeny. Jednotlivé cesty oddělte středníky.

### Povolit vyskakovací oznámení AdGuardu

Povolením této funkce zobrazíte vyskakovací oznámení AdGuardu. Nezobrazují se příliš často a obsahují pouze důležité informace. Poslední vyskakovací oznámení můžete vyvolat také pomocí menu.

### Automaticky zachytávat URL adresy pro odběr filtrů

Tuto funkci povolte, pokud chcete, aby AdGuard automaticky zachycoval adresy URL pro přihlášení k odběru filtrů (tj. `abp:subscribe` a podobné) a otevíral dialogové okno pro instalaci vlastního filtru.

### Použít režim přesměrování ovladače

Pokud je tato možnost povolena, AdGuard zachytí veškerý provoz a přesměruje jej na místní proxy pro další filtrování.

V opačném případě bude AdGuard filtrovat veškerý provoz za běhu bez přesměrování. V tomto případě bude systém považovat AdGuard za jedinou aplikaci, která se připojuje k internetu (ostatní aplikace jsou směrovány přes něj). Nevýhodou je, že se tím sníží účinnost systémové brány Firewall. Výhodou je, že tento přístup funguje o něco rychleji.

### Otevřít hlavní okno při startu systému

Tuto možnost povolte, aby se po načtení systému otevřelo hlavní okno AdGuardu. Všimněte si, že toto nastavení nemá vliv na to, zda je skutečná služba filtrování spuštěna, nebo ne, toto nastavení se nachází v *Nastavení → Obecná nastavení*

### Filtrovat localhost

Pokud chcete, aby AdGuard filtroval zpětná připojení, zaškrtněte toto políčko. Tato možnost bude vždy zapnutá, pokud máte nainstalovanou AdGuard VPN, protože jinak nebude fungovat.

### Povolit zápis HAR

Tato možnost by měla být zapnuta **pouze pro účely ladění**. Pokud zaškrtnete toto políčko, AdGuard vytvoří soubor obsahující informace o všech filtrovaných požadavcích HTTP ve formátu HAR 1.2. Tento soubor lze analyzovat pomocí aplikace Fiddler. Upozorňujeme, že to může výrazně zpomalit prohlížení webu.

### Zobrazit QUIC

Umožňuje zobrazit záznamy protokolu QUIC v záznamech filtrování. Pouze pro blokované požadavky.

### Blokovat Java

Některé webové stránky a webové služby stále podporují zásuvné moduly Java. Rozhraní API, které slouží jako základ pro zásuvné moduly Java, obsahuje závažné bezpečnostní chyby. Tyto zásuvné moduly můžete z bezpečnostních důvodů zakázat. Nicméně, i když se rozhodnete použít možnost *Blokovat Java*, JavaScript bude stále povolen.

### Akce použitá na blokované požadavky DNS

Zde můžete vybrat způsob, jakým bude AdGuard reagovat na dotazy DNS, které mají být blokovány:

* Odpověď s chybou "Refused"
* Odpověď s chybou "NxDomain"
* Odpověď s vlastní IP adresou

### Vlastní IPv4 adresa

Pokud je vybrána "Vlastní IP adresa" jako akce použitá pro blokované požadavky DNS, zde byste měli zadat adresu IPv4, která bude vrácena jako odpověď pro blokované požadavky "A". Pokud nejsou zadáno nic, AdGuard odpoví výchozí chybou "Refused".

### Vlastní IPv6 adresa

Pokud je vybrána "Vlastní IP adresa" jako akce použitá pro blokované požadavky DNS, zde byste měli zadat adresu IPv6, která bude vrácena jako odpověď pro blokované požadavky "AAAA". Pokud nejsou zadáno nic, AdGuard odpoví výchozí chybou "Refused".

### Záložní server

Zde můžete zadat alternativní DNS server, na který bude požadavek DNS přesměrován, pokud hlavní server neodpoví v časovém limitu uvedeném v následující části. Na výběr jsou tři možnosti:

* Nepoužívat záložní servery;
* Použít výchozí systémové servery;
* Použít vlastní servery.

### Časový limit DNS serveru

Zde můžete zadat dobu v milisekundách, po kterou bude AdGuard čekat na odezvu od vybraného DNS serveru, než se uchýlí k nouzovému řešení. Pokud toto pole nevyplníte nebo zadáte neplatnou hodnotu, bude použita hodnota 5000.

### Seznam vlastních záložních serverů

Pokud chcete, aby AdGuard používal vlastní záložní servery, uveďte je v této části po jednom na řádek.

### Seznam vlastních bootstrap adres

Bootstrap je zprostředkující DNS server používaný k získání IP adresy zabezpečeného DNS serveru, který jste vybrali dříve v menu *DNS ochrana*. Taková "střední cesta" je nutná při použití protokolů, které označují adresu serveru písmeny (například DNS-over-TLS). V tomto případě funguje bootstrap jako překladač a převádí písmena na čísla, kterým systém rozumí.

Ve výchozím nastavení je použit systémový překladač DNS a bootstrap požadavek je odeslán prostřednictvím portu 53. Pokud vám to nevyhovuje, uveďte zde IP adresy DNS serverů, které budou použity k určení adresy šifrovaného DNS serveru v pořadí shora dolů. Zadané IP adresy budou použity v uvedeném pořadí. Pokud zadáte neplatné adresy nebo nezadáte žádné, budou použity systémové IP adresy.

### DNS výjimky

Všechny DNS požadavky na domény zde uvedené budou přesměrovány na výchozí systémový DNS server namísto DNS serveru zadaného v nastavení aplikace. Na tyto požadavky se také neuplatní pravidla DNS blokování.

### Blokovat ECH

Pokud je tato možnost povolena, AdGuard odstraní z dotazů parametry Encrypted Client Hello.

### Povolit filtrování zabezpečených DNS požadavků

Pokud je tato funkce povolena, přesměruje AdGuard kromě běžných DNS požadavků také zabezpečené DNS požadavky na místní DNS proxy.
