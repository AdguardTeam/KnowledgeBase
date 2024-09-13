---
title: Průvodce nízkoúrovňových nastavení
sidebar_position: 6
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Jak dosáhnout nízkoúrovňových nastavení

:::caution

Změna *Nízkoúrovňových nastavení* může způsobit problémy s výkonem AdGuardu, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto sekci byste měli otevřít pouze v případě, že víte, co děláte, nebo vás o to požádal náš tým podpory.

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

- Odezva s REFUSED
- Odezva s NXDOMAIN
- Odezva pomocí vlastní IP adresy (zde lze zadat adresy IPv4 a IPv6)

#### Režim blokování pro pravidla hosts

Zde můžete zadat typ odpovědi pro domény blokované DNS pravidly na základě syntaxe pravidla hosts (například `<ip> <domain> 0.0.0.0 example.com`).

- Odezva s REFUSED
- Odezva s NXDOMAIN
- Odezva pomocí vlastní IP adresy (zde lze zadat adresy IPv4 a IPv6)

#### Časový limit DNS požadavku

Zde můžete zadat dobu v milisekundách, po kterou bude AdGuard čekat na odezvu od vybraného DNS serveru, než se uchýlí k nouzovému řešení. Pokud toto pole nevyplníte nebo zadáte neplatnou hodnotu, bude použita hodnota 5000.

#### Blokovaná odezva TTL

Zde můžete zadat hodnotu TTL (time to live), která bude vrácena jako odpověď na zablokovaný požadavek.

#### Velikost mezipaměti DNS

Zde můžete zadat maximální počet odpovědí uložených v mezipaměti. Výchozí hodnota je 1000.

#### Blokování ECH

Pokud je tato možnost povolena, AdGuard odstraní z DNS dotazů parametry Encrypted Client Hello.

#### Ignorovat nedostupný odchozí proxy

Pokud je toto nastavení povoleno, bude AdGuard v případě nedostupnosti odchozího proxy serveru odesílat DNS požadavky napřímo.

#### Vyzkoušet HTTP/3 pro odchozí připojení DNS-over-HTTPS

Pokud je toto nastavení povoleno, bude AdGuard používat protokol HTTP/3 ke zrychlení řešení dotazů DNS pro odchozí připojení DoH. V opačném případě se AdGuard vrátí ke svému výchozímu chování a použije protokol HTTP/2 k odesílání všech DN požadavkůS pro DNS-over-HTTPS.

#### Reakce na selhání SERVFAIL

Pokud je toto nastavení povoleno a všechna odchozí připojení, včetně záložních, neodpovídají, odešle AdGuard klientovi odpověď SERVFAIL.

#### Použít záložní řešení pro domény, které nejsou záložní

Pokud je toto nastavení povoleno, AdGuard použije záložní odchozí připojení pro všechny domény. V opačném případě se záložní odchozí připojení použije pouze pro záložní domény a vyhledávací domény, pokud je příslušná možnost povolena.

#### Ověřit odchozí připojení DNS

Pokud je toto nastavení povoleno, bude AdGuard před přidáním nebo aktualizací vlastních DNS serverů testovat odchozí připojení DNS.

#### Filtrování zabezpečeného DNS

Pokud je toto nastavení zapnuto, AdGuard použije všechny povolené DNS filtry a uživatelská pravidla DNS na šifrovaný provoz DNS-over-HTTPS (DoH), nikoli pouze na běžný DNS. Provoz DoH většinou pochází z Chrome a dalších prohlížečů, které mají nastavení *Zabezpečený DNS* (nebo podobné). Můžete použít *Filtrování zabezpečeného DNS* ve dvou různých režimech:

- **Filtrování za chodu**. V tomto režimu AdGuard použije všechny povolené DNS filtry a uživatelská pravidla DNS na provoz DoH, ale nepřesměruje jej na místní proxy server DNS. Pokud je v nastavení prohlížeče uveden DNS server, bude tento server zpracovávat provoz DoH pro tento prohlížeč

- **Přesměrování na DNS proxy**. V tomto režimu AdGuard použije všechny povolené DNS filtry a uživatelská pravidla DNS na přenosy DoH tak, že je přesměruje na místní proxy server DNS. Server DNS zadaný v nastavení DNS AdGuardu bude zpracovávat veškerý provoz DoH

### Filtrování

#### Zachytit HAR

Pokud je toto nastavení povoleno, bude AdGuard zachycovat soubory HAR. Vytvoří adresář s názvem “har” uvnitř adresáře mezipaměti aplikace a přidá do něj informace o všech filtrovaných požadavcích HTTP ve formátu HAR 1.2, které lze analyzovat pomocí programu Fiddler.

Používejte to pouze pro účely ladění!

### HTTPS filtrování

#### Encrypted Client Hello

Každé šifrované internetové připojení má i nešifrovanou část. Jedná se o první paket, který obsahuje název serveru, ke kterému se připojujete. Technologie Encrypted Client Hello má tento problém vyřešit a zašifrovat poslední kousek nešifrovaných informací. Chcete-li to využít, povolte možnost *Encrypted ClientHello*. K vyhledání konfigurace ECH pro danou doménu používá místní proxy server DNS. If it is found, Client Hello packet will be encrypted.

#### Kontrola OCSP

Pokud je toto nastavení povoleno, bude AdGuard provádět asynchronní kontroly OCSP, aby zjistil stav odvolání certifikátu SSL webové stránky.

Pokud se kontrola OCSP dokončí během požadovaného časového limitu, AdGuard okamžitě zablokuje připojení, pokud je certifikát odvolán nebo naváže připojení, pokud je certifikát platný.

Pokud ověření trvá příliš dlouho, AdGuard připojení povolí a zároveň pokračuje v kontrole stavu certifikátu na pozadí. Pokud je certifikát odvolán, budou současná i budoucí připojení k doméně zablokována.

#### Přesměrovat požadavky DNS skrze HTTPS

Pokud je toto nastavení povoleno, bude AdGuard kromě běžných DNS požadavků přesměrovávat požadavky DNS-over-HTTPS na místní proxy server DNS. Doporučujeme vypnout záložní odchozí připojení a používat pouze šifrované DNS servery, aby bylo zachováno soukromí.

#### Filtrování HTTP/3

Pokud je toto nastavení povoleno, bude AdGuard filtrovat kromě jiných typů požadavků také požadavky odeslané skrze HTTP/3.

### Odchozí proxy

#### Zobrazit nastavení "Filtrovat požadavky DNS"

Pokud je toto povoleno, v dialogovém okně *Přidat proxy server* se zobrazí přepínač *Filtrovat DNS požadavky*. Slouží k povolení filtrování DNS požadavků procházejících přes zadaný proxy.

### Ochrana

#### Rozsahy portů

Zde můžete zadat rozsahy portů, které mají být filtrovány.

#### Zaznamenat odstraněné HTML události

Pokud je toto nastavení povoleno, AdGuard zaznamená blokované prvky HTML v sekci *Nedávná aktivita*.

#### Scriptlet debugging

Pokud je toto nastavení povoleno, bude aktivováno ladění skriptletů a protokol prohlížeče bude zaznamenávat použití pravidel skriptletů.

#### Vyloučené aplikace

Zde můžete uvést názvy balíčků a UID, které chcete z ochrany AdGuardem vyloučit.

#### Obcházení balíčků QUIC

Zde můžete zadat názvy balíčků, pro které má AdGuard obejít provoz QUIC.

#### Překonfigurovat automatický proxy při změně sítě

Pokud je toto nastavení povoleno, ochrana AdGuardem se po připojení zařízení k jiné síti znovu spustí a znovu nakonfiguruje automatické nastavení proxy. Toto nastavení platí pouze v případě, že je *Režim směrování* nastaven na *Automatický proxy*.

#### Filtrování IPv6

Pokud je toto nastavení povoleno, bude AdGuard filtrovat sítě IPv6, pokud je k dispozici síťové rozhraní IPv6.

#### Rozsahy IPv4 vyloučené z filtrování

Filtrování rozsahů IPv4 uvedených v této části je vypnuto.

#### Rozsahy IPv6 vyloučené z filtrování

Filtrování rozsahů IPv6 uvedených v této části je vypnuto.

#### Zachování záznamů TCP pro odchozí sokety

Pokud je toto nastavení povoleno, AdGuard po uplynutí zadané doby odešle udržovací sondu, aby se ujistil, zda je připojení TCP funkční. Zde můžete zadat dobu nečinnosti před spuštěním sond udržení a dobu mezi sondami udržení pro neodpovídajícího partnera.

Po systémem definovaném počtu neúspěšných pokusů o získání odpovědi ze serveru systém automaticky ukončí připojení TCP.

### Nastavení lokální VPN

#### Zpoždění obnovy u odvolané VPN

Zde můžete nastavit dobu prodlevy v milisekundách, než se AdGuard pokusí obnovit ochranu VPN poté, co byla zrušena aplikací VPN třetí strany nebo odstraněním profilu VPN. Výchozí hodnota je 5000 ms.

#### Zpoždění při změně plánu pro obnovení odvolané VPN

Zde můžete nastavit dobu prodlevy v milisekundách, než AdGuard znovu naplánuje obnovení ochrany VPN poté, co byla zrušena aplikací VPN třetí strany nebo odstraněním profilu VPN. Výchozí hodnota je 5000 ms.

#### MTU

Zde můžete nastavit maximální přenosovou jednotku (MTU) rozhraní VPN. Doporučený rozsah je 1500 –1900 bajtů.

#### Automatické obnovení VPN

Pokud je toto nastavení povoleno, lokální VPN AdGuardu se po vypnutí z důvodu nepřítomnosti sítě, tetheringu nebo režimu s nízkou spotřebou energie automaticky znovu zapne.

#### Zachycování paketů (PCAP)

Pokud je toto nastavení povoleno, AdGuard vytvoří soubor `timestamp.pcap` (např. 1682599851461.pcap) v adresáři mezipaměti aplikace. Tento soubor obsahuje seznam všech síťových paketů přenesených skrze VPN a lze jej analyzovat pomocí programu Wireshark.

#### Zahrnout bránu Wi-Fi v trasách VPN

Pokud je toto nastavení povoleno, budou IP adresy brány přidány do tras VPN při připojení k Wi-Fi.

#### Adresa IPv4

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. Ve výchozím nastavení je to `172.18.11.218`.

#### Vynucené směrování LAN IPv4

Pokud je toto nastavení povoleno, AdGuard bude filtrovat všechna připojení LAN, včetně místního síťového provozu IPv4, i když je povolena možnost *Směrovat všechna připojení IPv4 LAN*.

#### Nucené směrování všech LAN IPv4

Pokud je toto nastavení povoleno, AdGuard vyloučí připojení LAN z filtrování pro jednoduché sítě. To nemusí fungovat pro složité sítě. Toto nastavení platí pouze v případě, že je zakázána možnost *Vynutit směrování LAN IPv4*.

#### Adresa IPv6

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. Ve výchozím nastavení je to `2001:db8:ad:0:ff::`.

### Různé

#### Detekce Samsung Pay

Pokud je toto nastavení povoleno, ochrana AdGuardem bude během používání Samsung Pay pozastavena. Korejští uživatelé tuto funkci vyžadují, protože při zapnutém AdGuardu mají problémy se [Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea).
