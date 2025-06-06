---
title: Průvodce nízkoúrovňových nastavení
sidebar_position: 5
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

## Jak dosáhnout nízkoúrovňových nastavení

:::caution

Změna nízkoúrovňových nastavení může způsobit problémy s výkonem AdGuardu, přerušit internetové připojení nebo ohrozit zabezpečení a soukromí. Nízkoúrovňové funkce používejte pouze v případě, že jste zkušený uživatel a víte, co děláte, nebo pokud vás o to požádal náš tým podpory.

:::

Chcete-li přejít na _Nízkoúrovňová nastavení_, otevřete aplikaci AdGuard a klepněte na ikonu ozubeného kola v pravém dolním rohu obrazovky. Poté zvolte Obecné → Pokročilé → Nízkoůrovňová nastavení\*.

## Nízkoúrovňová nastavení

Ve verzi AdGuard pro Android v4.x jsme zcela přepracovali nízkoúrovňová nastavení. Přepracovali jsme seznam prostředí a uspořádali je do tematických skupin s vylepšenými popisy. Přidali jsme také ověřování vstupů a další bezpečnostní prvky.

### DNS ochrana

#### Záložní odchozí připojení

Zde můžete zadat záložní DNS řešitel, který se použije v případě nedostupnosti nakonfigurovaného serveru. Dostupné možnosti:

- _Automatický DNS_: Tuto možnost vyberte, pokud chcete použít systémový DNS nebo AdGuard DNS.
- _Nic_: Tuto možnost vyberte, pokud nechcete mít žádnou záložní možnost.
- _Vlastní DNS_: Tuto možnost vyberte a zadejte adresy běžného DNS IPv4 nebo IPv6, jednu na řádek. Tyto adresy budou použity jako upstreamy.

#### Záložní domény

Zde můžete uvést domény, které budou přesměrovány na záložní upstreamy, pokud jsou k dispozici. Můžete zadat více domén, jednu na řádek. Můžete použít omezené zástupné znaky.

#### Detekce vyhledávacích domén

Pokud je tato možnost povolena, AdGuard zjistí vyhledávací domény a automaticky je přesměruje záložním upstreamům, pokud jsou k dispozici.

#### Odchozí bootstrap připojení

Bootstrap DNS pro šifrované upstream DNS, například servery DoH, DoT a DoQ. Dostupné možnosti:

- _Automatický DNS_: Tuto možnost vyberte, pokud chcete použít systémový DNS nebo AdGuard DNS. Tato možnost je ve výchozím nastavení vybrána.
- _Vlastní DNS_: Tuto možnost vyberte a zadejte adresy běžného DNS IPv4 nebo IPv6, jednu na řádek. Tyto adresy budou použity jako bootstrap upstreamy.

#### Režim blokování pro pravidla stylu adblock

Zde můžete zadat typ odpovědi pro domény blokované DNS pravidly na základě syntaxe pravidla adblock (například `||example.org^`). Dostupné možnosti:

- _REFUSED_: Odezva pomocí REFUSED
- _NXDOMAIN_: Odezva pomocí NXDOMAIN
- _Vlastní IP adresa_: Tuto možnost vyberte, chcete-li odpovědět pomocí vlastní IP adresy. Pro blokované požadavky A je třeba zadat adresu IPv4 a pro blokované požadavky AAAA adresu IPv6.

#### Režim blokování pro pravidla hosts

Zde můžete zadat typ odpovědi pro domény blokované DNS pravidly na základě syntaxe pravidla hosts (například `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Odezva pomocí REFUSED
- _NXDOMAIN_: Odezva pomocí NXDOMAIN
- _Vlastní IP adresa_: Tuto možnost vyberte, chcete-li odpovědět pomocí vlastní IP adresy. Pro blokované požadavky A je třeba zadat adresu IPv4 a pro blokované požadavky AAAA adresu IPv6.

#### Časový limit DNS požadavku

Zde můžete zadat časový limit v milisekundách, po který bude AdGuard čekat na každý požadavek DNS, než jej přesměruje na záložní DNS řešitel. Pokud toto pole nevyplníte nebo zadáte neplatnou hodnotu, bude použita hodnota 5000 ms.
Pokud máte více upstreamů, bude záložní DNS použit až po vypršení časových limitů jednotlivých upstreamů.

#### Blokovaná odezva TTL

Zde můžete nastavit time-to-live (TTL) záznamu pro blokované domény. Výchozí hodnota je 3600 swkund.

#### Velikost mezipaměti DNS

Zde můžete zadat maximální počet odpovědí uložených v mezipaměti. Výchozí hodnota je 1000.

#### Blokování ECH

Pokud je toto nastavení povoleno, bude AdGuard blokovat TLS Encrypted Hello (ECH) v DNS odezvách.

#### Vyzkoušet HTTP/3 pro odchozí připojení DNS-over-HTTPS

Pokud je toto nastavení povoleno, bude AdGuard používat protokol HTTP/3 ke zrychlení řešení dotazů DNS pro DNS-over-HTTPS upstream. V opačném případě se AdGuard vrátí ke svému výchozímu chování a použije protokol HTTP/2 k odesílání všech DNS požadavků pro DNS-over-HTTPS.

#### Reakce na selhání SERVFAIL

Pokud je toto nastavení povoleno, odešle AdGuard klientovi odpověď SERVFAIL, pokud všechny upstreamy, včetně záložních, neodpoví. Pokud je toto nastavení zakázáno, nebude v takovém případě klientovi odeslána žádná odpověď.

#### Použít záložní řešení pro všechny domény

Pokud je toto nastavení povoleno, AdGuard použije záložní odchozí připojení pro všechny domény včetně nezáložních. V opačném případě se záložní upstream použije pouze pro záložní domény a vyhledávací domény, pokud je příslušná možnost povolena.

#### Ověřit odchozí připojení DNS

Pokud je toto nastavení povoleno, bude AdGuard před přidáním nebo aktualizací vlastních serverů DNS testovat upstreamy DNS.

#### Filtrování zabezpečeného DNS

Pokud je toto nastavení povoleno, bude AdGuard kromě běžných požadavků DNS filtrovat i šifrované požadavky DNS. Šifrovaný provoz DNS pochází většinou z prohlížeče Chrome a dalších prohlížečů s nastavením zabezpečeného DNS.

Toto nastavení má dva režimy:

- **Filtrování za chodu**. V tomto režimu bude AdGuard filtrovat přenosy DNS-over-HTTPS bez přesměrování na místní proxy server DNS. Použije server DNS zadaný v nastavení prohlížeče.

- **Přesměrování na DNS proxy**. V tomto režimu AdGuard přesměruje požadavky DNS-over-HTTPS na místní proxy server DNS za účelem filtrování. Použije server DNS vybraný v nastavení DNS aplikace AdGuard.

### Filtrování

#### Zachytit HAR

Pokud je toto nastavení povoleno, bude AdGuard zaznamenávat všechny filtrované požadavky HTTP ve formátu HAR 1.2 do podadresáře "har" v adresáři mezipaměti aplikace. Tyto soubory lze analyzovat pomocí nástroje Fiddler.

Toto nastavení může zpomalit zařízení. Používejte jej pouze pro účely ladění.

### HTTPS filtrování

#### Encrypted Client Hello

Pokud je toto nastavení povoleno, bude AdGuard v případě potřeby šifrovat soubory ClientHellos. Tato funkce vyžaduje, aby bylo povoleno filtrování HTTPS. Tato funkce používá místní proxy server DNS k vyhledání konfigurace ECH pro danou doménu. Pokud je nalezen, paket ClientHello bude zašifrován. Ujistěte se, že s touto funkcí používáte šifrovaný server DNS.

**O ClientHello and ECH**: Každé šifrované internetové připojení má i nešifrovanou část. Jedná se o první paket, který obsahuje název serveru, ke kterému se připojujete. Technologie Encrypted Client Hello je navržena tak, aby tento problém řešila šifrováním tohoto paketu.

#### Kontrola OCSP

Pokud je toto nastavení povoleno, bude AdGuard před připojením k webové stránce automaticky kontrolovat stav odvolání certifikátů SSL. Tato funkce vyžaduje, aby bylo povoleno filtrování HTTPS.

Pokud je kontrola dokončena během požadovaného časového limitu, AdGuard povolí připojení, pokud je certifikát platný, nebo okamžitě zablokuje připojení, pokud je certifikát odvolán.

Pokud ověření trvá příliš dlouho, AdGuard připojení povolí a zároveň pokračuje v kontrole stavu certifikátu na pozadí. Pokud je certifikát odvolán, budou současná i budoucí připojení k doméně zablokována.

#### Filtrování HTTP/3

Pokud je toto nastavení povoleno, bude AdGuard filtrovat kromě jiných typů požadavků také požadavky odeslané skrze HTTP/3. Tato funkce vyžaduje, aby bylo povoleno filtrování HTTPS.

**O HTTP/3**: Jedná se o nejnovější verzi protokolu HTTP založenou na protokolu QUIC.

### Odchozí proxy

#### Zobrazit nastavení Filtrovat požadavky DNS

Je-li toto nastavení povoleno, zobrazí se v dialogu _Přidat proxy server_ přepínač _Filtrovat požadavky DNS_. Chcete-li otevřít dialogové okno, otevřete **Nastavení**, přejděte na **Filtrování** → **Síť** → **Proxy** → **Proxy server** a klikněte na _+ Přidat proxy_. Zapnutím tohoto přepínače povolíte filtrování DNS požadavků procházejících přes zadaný odchozí proxy server.

### Ochrana

#### Rozsahy portů

Toto nastavení umožňuje zadat rozsahy portů, které mají být filtrovány. Zadejte rozsahy portů, jeden rozsah na řádek. Rozsah zadejte pomocí `..`. Např. `80..5221`.

#### Zaznamenat odstraněné HTML události

Pokud je toto nastavení povoleno, bude AdGuard zapisovat informace o blokovaných prvcích HTML do _Nedávné aktivity_. Chcete-li získat přístup k protokolům, přejděte do **Statistika** → **Nedávná aktivita**.

#### Ladění skripletů

Pokud je toto nastavení povoleno, aplikace bude zobrazovat informace o ladění v konzoli prohlížeče. V tomto režimu je aktivováno ladění skriptletů a prohlížeč zaznamenává události, které nastanou při použití pravidel skriptletů.

#### Vyloučené aplikace

Toto nastavení umožňuje zobrazit seznam balíčků a identifikátorů UID, které mají být vyloučeny z ochrany AdGuardem. Zadejte názvy balíčků, nebo UID, jeden na řádek. Pro komentáře můžete použít `//`.

#### Obcházení balíčků QUIC

Zde můžete zadat názvy balíčků, pro které má AdGuard obejít provoz QUIC. Zadejte názvy balíčků, jeden na řádek. Pro komentáře můžete použít `//`.

#### Překonfigurovat automatický proxy při změně sítě

Pokud je toto nastavení povoleno, ochrana AdGuardem se po připojení zařízení k jiné síti znovu spustí a znovu nakonfiguruje automatické parametry proxy. Toto nastavení platí pouze v případě, že je _Režim směrování_ nastaven na _Automatický proxy_.

#### Filtrování IPv6

Pokud je toto nastavení povoleno, bude AdGuard filtrovat sítě IPv6, pokud je k dispozici síťové rozhraní IPv6.

#### Rozsahy IPv4 vyloučené z filtrování

Zde můžete uvést rozsahy IPv4, které chcete z filtrování vyloučit. Na každý řádek zadejte jeden rozsah IP. Pro komentáře můžete použít `//`.

#### Rozsahy IPv6 vyloučené z filtrování

Zde můžete uvést rozsahy IPv6, které chcete z filtrování vyloučit. Na každý řádek zadejte jeden rozsah IP. Pro komentáře můžete použít `//`.

#### Zachování záznamů TCP pro odchozí sokety

Pokud je toto nastavení povoleno, AdGuard po uplynutí zadané doby odešle udržovací sondu, aby se ujistil, zda je připojení TCP funkční. Po systémem definovaném počtu neúspěšných pokusů o získání odpovědi ze serveru systém automaticky ukončí připojení TCP.

Toto nastavení vám umožňuje zadat:

- **Dobu nečinnosti** v sekundách před odesláním sond TCP keepalive odchozím soketům. Výchozí hodnota je 0. Pokud máte problémy s NAT, nastavte tuto hodnotu na 20.
- **Dobu mezi sondami keepalive** pro neodpovídajícího partnera. Výchozí hodnota je 0 swkund.

### Nastavení lokální VPN

#### Zpoždění obnovy u odvolané VPN

Zde můžete nastavit dobu prodlevy v milisekundách, než AdGuard znovu naplánuje obnovení ochrany VPN poté, co byla zrušena aplikací VPN třetí strany nebo odstraněním profilu VPN. Výchozí hodnota je 5000 ms.

#### Zpoždění při změně plánu pro obnovení odvolané VPN

Zde můžete nastavit dobu prodlevy v milisekundách, než AdGuard znovu naplánuje obnovení ochrany VPN poté, co byla zrušena aplikací VPN třetí strany nebo odstraněním profilu VPN. Výchozí hodnota je 5000 ms.

#### MTU

Zde můžete nastavit maximální přenosovou jednotku (MTU) rozhraní VPN. Jedná se o maximální velikost datového paketu používaného v místní síti VPN. Doporučený rozsah je 1500 –1900 bajtů.

#### Automatické obnovení VPN

Pokud je toto nastavení povoleno, lokální VPN AdGuardu se po vypnutí z důvodu nepřítomnosti sítě, tetheringu nebo režimu s nízkou spotřebou energie automaticky znovu zapne.

#### Zachycování paketů (PCAP)

Toto nastavení povoluje protokolování rozhraní TUN. Je-li tato funkce povolena, vytvoří AdGuard v adresáři mezipaměti aplikace soubor `timestamp.pcap`, například 1682599851461.pcap. Tento soubor obsahuje seznam všech síťových paketů přenášených prostřednictvím sítě VPN a lze jej analyzovat pomocí nástroje Wireshark.

#### Zahrnout bránu Wi-Fi v trasách VPN

Pokud je toto nastavení povoleno, budou IP adresy brány přidány do tras VPN při připojení zařízení k Wi-Fi.

#### Adresa IPv4

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. Výchozí hodnota je `172.18.11.218`.

#### Vynucené směrování LAN IPv4

Pokud je toto nastavení povoleno, bude AdGuard filtrovat všechna připojení LAN, včetně místního síťového provozu IPv4, i když je povolena možnost _Směrovat všechna připojení LAN IPv4_.

#### Nucené směrování všech LAN IPv4

Pokud je toto nastavení povoleno, AdGuard vyloučí připojení LAN z filtrování pro jednoduché sítě. To nemusí fungovat pro složité sítě. Toto nastavení platí pouze v případě, že je zakázána možnost _Vynutit směrování LAN IPv4_.

#### Adresa IPv6

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. Výchozí hodnota je `2001:db8:ad:0:ff::`.

### Různé

#### Zobrazit nástroje pro vývojáře na hlavní obrazovce

Pokud je toto nastavení povoleno, zobrazí AdGuard v pravém horním rohu domovské obrazovky aplikace ikonu **Nástroje vývojáře**.

**Nástroje vývojáře** je specializovaná sekce dostupná v aplikaci AdGuard pro Android v4.3 a novější, která je určena pro rychlou navigaci a přepínání mezi funkcemi. Umožňuje rychle povolit nebo zakázat vlastní filtry, přístup k protokolům, povolit různé protokoly a další funkce.

#### Detekce Samsung Pay

Pokud je toto nastavení povoleno, ochrana AdGuard se při otevření aplikace Samsung Pay pozastaví. Korejští uživatelé tuto funkci vyžadují, protože se u nich při zapnutém AdGuardu objevují [problémy se Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea).
