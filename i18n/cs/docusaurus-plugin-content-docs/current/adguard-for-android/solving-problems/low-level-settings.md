---
title: Průvodce nízkoúrovňových nastavení
sidebar_position: 6
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Jak dosáhnout nízkoúrovňových nastavení

:::caution

Změna *Nízkoúrovňových nastavení* může způsobit problémy s výkonem AdGuardu, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory.

:::

Chcete-li přejít na *Nízkoúrovňová nastavení*, otevřete aplikaci AdGuard a klepněte na ikonu ozubeného kola v pravém dolním rohu obrazovky. Poté zvolte *Obecné → Pokročilé → Nízkoůrovňová nastavení*.

## Nízkoúrovňová nastavení

V AdGuardu v4.0 pro Android jsme kompletně přepracovali nízkoúrovňová nastavení: rozdělili jsme je do tematických bloků, zpřehlednili jsme je, přidali jsme ověřování zadaných hodnot a další hodnoty. Některých nastavení jsme se zbavili a jiná jsme přidali.

### DNS ochrana

#### Záložní odchozí připojení

Zde můžete zadat záložní DNS řešitel, který se použije v případě nedostupnosti nakonfigurovaného serveru. Existují tři možnosti: *Automatický DNS*, *Žádný* a *Vlastní DNS*. Pokud není zadán žádný záložní server, použije se *Automatický DNS* — systémový DNS nebo AdGuard DNS. *Žádný* znamená, že není vůbec žádný záložní server. Výběrem možnosti *Vlastní DNS* můžete vypsat adresy serverů IPv4 a IPv6, které chcete použít jako upstreamy.

#### Záložní domény

Zde můžete uvést domény, které budou přesměrovány přímo na záložní upstreamy pokud existují.

#### Detekce vyhledávacích domén

Pokud je tato možnost povolena, AdGuard zjistí vyhledávací domény a automaticky je přepošle záložním upstreamům.

#### Odchozí bootstrap připojení

Bootstrap DNS pro servery DoH, DoT a DoQ. *Automatický DNS* — systémový DNS nebo AdGuard DNS — používá se ve výchozím nastavení. Výběrem možnosti *Vlastní DNS* můžete vypsat adresy serverů IPv4 a IPv6, které chcete použít jako bootsrap upstreamy.

#### Režim blokování pro pravidla stylu adblock

Zde můžete zadat typ odpovědi pro domény blokované DNS pravidly na základě syntaxe pravidla adblock (například `||example.org^`).

- Odezva s REFUSED (výchozí)
- Odezva s NXDOMAIN
- Odezva pomocí vlastní IP adresy (zde lze zadat adresy IPv4 a IPv6)

#### Režim blokování pro pravidla hosts

Zde můžete zadat typ odpovědi pro domény blokované DNS pravidly na základě syntaxe pravidla hosts (například `<ip> <domain> 0.0.0.0 example.com`).

- Odezva s REFUSED
- Odezva s NXDOMAIN
- Odezva pomocí vlastní IP adresy (zde lze zadat adresy IPv4 a IPv6) – výchozí

#### Časový limit DNS požadavku

Zde můžete zadat dobu v milisekundách, po kterou bude AdGuard čekat na odezvu od vybraného DNS serveru, než se uchýlí k nouzovému řešení. Pokud toto pole nevyplníte nebo zadáte neplatnou hodnotu, bude použita hodnota 5000.

#### Blokovaná odezva TTL

Zde můžete zadat hodnotu TTL (time to live), která bude vrácena jako odpověď na zablokovaný požadavek.

#### Velikost mezipaměti DNS

Zde můžete zadat maximální počet odpovědí uložených v mezipaměti. Výchozí hodnota je 1000.

#### Blokování ECH

Pokud je tato možnost povolena, AdGuard odstraní z DNS dotazů parametry Encrypted Client Hello.

#### Ignorovat nedostupný odchozí proxy

Tuto funkci povolte, aby AdGuard odesílal DNS požadavky DNS přímo, pokud je odchozí proxy nedostupný.

#### Vyzkoušet HTTP/3 pro odchozí připojení DNS-over-HTTPS

Ve výchozím nastavení jsou všechny DNS požadavky pro DNS-over-HTTPS odesílány prostřednictvím protokolu HTTP/2. Pokud je tato funkce povolena, používá AdGuard protokol HTTP/3 ke zrychlení řešení dotazů DNS pro upstreamy DoH.

#### Reakce na selhání SERVFAIL

Jakmile je tato funkce povolena, odešle AdGuard klientovi odpověď SERVFAIL, pokud všechna odchozí připojení, včetně záložních neodpoví. Pokud je toto nastavení zakázáno, klientovi se neodešle žádná odpověď.

#### Použít záložní řešení pro domény, které nejsou záložní

Tuto funkci povolte, pokud chcete, aby AdGuard používal záložní odchozí připojení pro všechny domény. V opačném případě se záložní odchozí připojení použije pouze pro záložní domény a vyhledávací domény, pokud je příslušná možnost povolena.

#### Ověřit odchozí připojení DNS

Umožněte AdGuardu testovat odchozí připojení DNS před přidáním nebo aktualizací vlastních DNS serverů.

### Filtrování

#### Zachytit HAR

Zde můžete povolit zachycení souboru HAR. Používejte to pouze pro účely ladění! Pokud je toto nastavení povoleno, AdGuard vytvoří adresář s názvem "har" uvnitř adresáře mezipaměti aplikace. Obsahuje informace o všech filtrovaných požadavcích HTTP ve formátu HAR 1.2 a lze je analyzovat pomocí programu Fiddler.

### HTTPS filtrování

#### Encrypted Client Hello

Každé šifrované internetové připojení má i nešifrovanou část. Jedná se o první paket, který obsahuje název serveru, ke kterému se připojujete. Technologie Encrypted Client Hello má tento problém vyřešit a zašifrovat poslední kousek nešifrovaných informací. Chcete-li to využít, povolte možnost *Encrypted ClientHello*. K vyhledání konfigurace ECH pro danou doménu používá místní proxy server DNS. Pokud je nalezen, paket ClientHello bude zašifrován.

#### Kontrola OCSP

Po povolení této možnosti se spustí asynchronní kontroly OCSP, aby se ověřilo, zda není SSL certifikát webové stránky odvolán.

Pokud se kontrola OCSP dokončí během minimálního časového limitu, AdGuard okamžitě zablokuje připojení, pokud je certifikát odvolán nebo naváže připojení, pokud je certifikát platný.

Pokud ověření trvá příliš dlouho, AdGuard naváže spojení a pokračuje v kontrole certifikátu na pozadí. Pokud je certifikát odvolán, budou současná i budoucí připojení k doméně zablokována.

#### Přesměrovat požadavky DNS skrze HTTPS

POKUD je povoleno, budou požadavky DNS-over-HTTPS přesměrovány na modul DNS ochrany. Doporučujeme vypnout záložní odchozí připojení a používat pouze šifrované DNS servery, aby bylo zachováno soukromí.

#### Filtrování HTTP/3

Pokud je tato možnost povolena, bude AdGuard filtrovat kromě jiných typů požadavků také požadavky odeslané skrze HTTP/3.

### Odchozí proxy

#### Zobrazit nastavení "Filtrovat požadavky DNS"

Je-li tato funkce povolena, zobrazí se v části *Nastavení ➝ Filtování ➝ Síť ➝ Proxy ➝ Proxy server ➝ Přidat proxy server* řetězec *Filtrovat DNS požadavky* s přepínačem vedle něj. Přepnutím přepínače můžete povolit filtrování DNS požadavků procházejících přes proxy.

### Ochrana

#### Rozsahy portů

Zde můžete zadat rozsahy portů, které mají být filtrovány.

#### Zaznamenat odstraněné HTML události

Pokud je tato funkce povolena, AdGuard zapíše blokované prvky HTML do záznamu filtrování.

#### Ladění skripletů

Pokud potřebujete aktivovat ladění skriptletů, povolte tuto funkci. V záznamech prohlížeče se pak objeví hlášení, že byla použita některá pravidla scripletu.

#### Vyloučené aplikace

Zde můžete uvést názvy balíčků a UID, které chcete z ochrany AdGuardem vyloučit.

#### Obcházení balíčků QUIC

Zde můžete zadat názvy balíčků, pro které má AdGuard obejít provoz QUIC.

#### Překonfigurovat automatický proxy při změně sítě

Toto nastavení povolte, pokud chcete, aby se ochrana restartovala a překonfigurovala automatické nastavení proxy, když se zařízení připojí k jiné síti. Stav tohoto nastavení ovlivňuje provoz pouze v případě, že je aktuální režim směrování nastaven na Automatický proxy.

#### Filtrování IPv6

Je-li tato možnost povolena, AdGuard filtruje sítě IPv6, pokud je k dispozici síťové rozhraní IPv6.

#### Rozsahy IPv4 vyloučené z filtrování

Filtrování rozsahů IPv4 uvedených v této části bude vypnuto.

#### Rozsahy IPv6 vyloučené z filtrování

Filtrování rozsahů IPv6 uvedených v této části bude vypnuto.

#### Zachování záznamů TCP pro odchozí sokety

Pokud je tato funkce povolena, AdGuard po uplynutí zadané doby odešle udržovací sondu, aby se ujistil, zda je připojení TCP funkční. Zde můžete zadat dobu nečinnosti protokolu udržení TCP před zahájením sond udržení a dobu mezi sondami udržení pro neodpovídajícího partnera.

Po systémem definovaném počtu neúspěšných pokusů o získání odpovědi ze serveru systém automaticky ukončí připojení TCP.

### Nastavení lokální VPN

#### Zpoždění obnovy u odvolané VPN

Zde můžete nastavit dobu prodlevy v milisekundách, než se AdGuard pokusí obnovit ochranu VPN poté, co byla zrušena aplikací VPN třetí strany nebo odstraněním profilu VPN. Výchozí hodnota je 5000 ms.

#### Zpoždění při změně plánu pro obnovení odvolané VPN

Zde můžete nastavit dobu prodlevy v milisekundách, než AdGuard znovu naplánuje obnovení ochrany VPN poté, co byla zrušena aplikací VPN třetí strany nebo odstraněním profilu VPN. Výchozí hodnota je 5000 ms.

#### MTU

Zde můžete nastavit maximální přenosovou jednotku (MTU) rozhraní VPN. Doporučený rozsah je 1500 –1900 bajtů.

#### Automatické obnovení VPN

Pokud je tato funkce povolena, automaticky znovu zapne místní síť VPN AdGuardu poté, co byla vypnuta z důvodu nepřítomnosti sítě, tetheringu nebo režimu s nízkou spotřebou energie.

#### Zachycování paketů (PCAP)

Pokud je tato funkce povolena, AdGuard vytvoří speciální soubor s názvem `timestamp.pcap` (např. 1682599851461.pcap). Obsahuje všechny síťové pakety přenášené prostřednictvím VPN. Tento soubor se nachází v adresáři mezipaměti aplikace a lze jej analyzovat pomocí programu Wireshark.

#### Zahrnout bránu Wi-Fi v trasách VPN

Pokud chcete, aby se IP adresy brány přidávaly do tras VPN při připojení k síti Wi-Fi, povolte tuto funkci.

#### Adresa IPv4

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. Ve výchozím nastavení je to `172.18.11.218`.

#### Vynucené směrování LAN IPv4

Je-li tato možnost povolena, AdGuard filtruje všechna připojení LAN, včetně místního síťového provozu IPv4, i když je povolena možnost *Směrovat všechna připojení IPv4 LAN*.

#### Nucené směrování všech LAN IPv4

Po aktivaci této funkce, AdGuard vyloučí připojení LAN z filtrování pro jednoduché sítě. Nemusí fungovat pro složité sítě. Funguje pouze s vypnutou možností *Vynuceně směrovat LAN IPv4*.

#### Adresa IPv6

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. Ve výchozím nastavení je to `2001:db8:ad:0:ff::`.

### Různé

#### Detekce Samsung Pay

Korejští uživatelé se mohou setkat s problémy se službou Samsung Pay, pokud je AdGuard zaptutý. Aktivací této funkce pozastavíte ochranu AdGuardem a můžete bez problémů používat aplikaci Samsung Pay.
