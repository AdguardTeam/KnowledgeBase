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

To access _Low-level settings_, open the AdGuard app and tap the gear icon in the lower-right corner of the screen. Then select _General → Advanced → Low-level settings_.

## Nízkoúrovňová nastavení

Ve verzi AdGuard v4.x pro Android jsme zcela přepracovali nízkoúrovňová nastavení. Přepracovali jsme seznam prostředí a uspořádali je do tematických skupin s vylepšenými popisy. Přidali jsme také ověřování vstupů a další bezpečnostní prvky.

### DNS ochrana

#### Záložní odchozí připojení

Zde můžete zadat záložní DNS řešitel, který se použije v případě nedostupnosti nakonfigurovaného serveru. Dostupné možnosti:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS.
- _None_: Select this option if you do not want to have any fallback.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Tyto adresy budou použity jako upstreamy.

#### Záložní domény

Zde můžete uvést domény, které budou přesměrovány na záložní upstreamy, pokud jsou k dispozici. Můžete zadat více domén, jednu na řádek. Můžete použít omezené zástupné znaky.

#### Detekce vyhledávacích domén

Pokud je tato možnost povolena, AdGuard zjistí vyhledávací domény a automaticky je přesměruje záložním upstreamům, pokud jsou k dispozici.

#### Odchozí bootstrap připojení

Bootstrap DNS pro šifrované upstream DNS, například servery DoH, DoT a DoQ. Dostupné možnosti:

- _Automatic DNS_: Select this option if you want to use the system DNS or AdGuard DNS. Tato možnost je ve výchozím nastavení vybrána.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Tyto adresy budou použity jako bootstrap upstreamy.

#### Režim blokování pro pravidla stylu adblock

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for example, `||example.org^`). Dostupné možnosti:

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Pro blokované požadavky A je třeba zadat adresu IPv4 a pro blokované požadavky AAAA adresu IPv6.

#### Režim blokování pro pravidla hosts

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax
(for example, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Pro blokované požadavky A je třeba zadat adresu IPv4 a pro blokované požadavky AAAA adresu IPv6.

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

- **Filter on the fly**. V tomto režimu bude AdGuard filtrovat přenosy DNS-over-HTTPS bez přesměrování na místní proxy server DNS. Použije server DNS zadaný v nastavení prohlížeče.

- **Redirect to DNS proxy**. V tomto režimu AdGuard přesměruje požadavky DNS-over-HTTPS na místní proxy server DNS za účelem filtrování. Použije server DNS vybraný v nastavení DNS aplikace AdGuard.

### Filtrování

#### Zachytit HAR

Pokud je toto nastavení povoleno, bude AdGuard zaznamenávat všechny filtrované požadavky HTTP ve formátu HAR 1.2 do podadresáře "har" v adresáři mezipaměti aplikace. Tyto soubory lze analyzovat pomocí nástroje Fiddler.

Toto nastavení může zpomalit zařízení. Používejte jej pouze pro účely ladění.

### HTTPS filtrování

#### Encrypted Client Hello

Pokud je toto nastavení povoleno, bude AdGuard v případě potřeby šifrovat soubory ClientHellos. Tato funkce vyžaduje, aby bylo povoleno filtrování HTTPS. Tato funkce používá místní proxy server DNS k vyhledání konfigurace ECH pro danou doménu. Pokud je nalezen, paket ClientHello bude zašifrován. Ujistěte se, že s touto funkcí používáte šifrovaný server DNS.

**About ClientHellos and ECH**: Every encrypted Internet connection has an unencrypted part. Jedná se o první paket, který obsahuje název serveru, ke kterému se připojujete. Technologie Encrypted Client Hello je navržena tak, aby tento problém řešila šifrováním tohoto paketu.

#### Kontrola OCSP

Pokud je toto nastavení povoleno, bude AdGuard před připojením k webové stránce automaticky kontrolovat stav odvolání certifikátů SSL. Tato funkce vyžaduje, aby bylo povoleno filtrování HTTPS.

Pokud je kontrola dokončena během požadovaného časového limitu, AdGuard povolí připojení, pokud je certifikát platný, nebo okamžitě zablokuje připojení, pokud je certifikát odvolán.

Pokud ověření trvá příliš dlouho, AdGuard připojení povolí a zároveň pokračuje v kontrole stavu certifikátu na pozadí. Pokud je certifikát odvolán, budou současná i budoucí připojení k doméně zablokována.

#### Filtrování HTTP/3

Pokud je toto nastavení povoleno, bude AdGuard filtrovat kromě jiných typů požadavků také požadavky odeslané skrze HTTP/3. Tato funkce vyžaduje, aby bylo povoleno filtrování HTTPS.

**About HTTP/3**: This is the latest version of the HTTP protocol, based on QUIC.

### Odchozí proxy

#### Zobrazit nastavení Filtrovat požadavky DNS

When this setting is enabled, the _Filter DNS requests_ switch is displayed in the _Add proxy server_ dialog. To access the dialog, open **Settings**, then go to **Filtering** → **Network** → **Proxy** → **Proxy server**, and click _+ Add proxy server_. Zapnutím tohoto přepínače povolíte filtrování DNS požadavků procházejících přes zadaný odchozí proxy server.

### Ochrana

#### Rozsahy portů

Toto nastavení umožňuje zadat rozsahy portů, které mají být filtrovány. Zadejte rozsahy portů, jeden rozsah na řádek. Use `..` to specify the range. For example, `80..5221`.

#### Zaznamenat odstraněné HTML události

If this setting is enabled, AdGuard will write information about blocked HTML elements to _Recent activity_. To access the logs, go to go to **Statistics** → **Recent activity**.

#### Ladění skripletů

Pokud je toto nastavení povoleno, aplikace bude zobrazovat informace o ladění v konzoli prohlížeče. V tomto režimu je aktivováno ladění skriptletů a prohlížeč zaznamenává události, které nastanou při použití pravidel skriptletů.

#### Vyloučené aplikace

Toto nastavení umožňuje zobrazit seznam balíčků a identifikátorů UID, které mají být vyloučeny z ochrany AdGuardem. Zadejte názvy balíčků, nebo UID, jeden na řádek. You can use `//` for comments.

#### Obcházení balíčků QUIC

Zde můžete zadat názvy balíčků, pro které má AdGuard obejít provoz QUIC. Zadejte názvy balíčků, jeden na řádek. You can use `//` for comments.

#### Překonfigurovat automatický proxy při změně sítě

Pokud je toto nastavení povoleno, ochrana AdGuardem se po připojení zařízení k jiné síti znovu spustí a znovu nakonfiguruje automatické parametry proxy. This setting only applies when _Routing mode_ is set to _Automatic proxy_.

#### Filtrování IPv6

Pokud je toto nastavení povoleno, bude AdGuard filtrovat sítě IPv6, pokud je k dispozici síťové rozhraní IPv6.

#### Rozsahy IPv4 vyloučené z filtrování

Zde můžete uvést rozsahy IPv4, které chcete z filtrování vyloučit. Na každý řádek zadejte jeden rozsah IP. You can use `//` for comments.

#### Rozsahy IPv6 vyloučené z filtrování

Zde můžete uvést rozsahy IPv6, které chcete z filtrování vyloučit. Na každý řádek zadejte jeden rozsah IP. You can use `//` for comments.

#### Zachování záznamů TCP pro odchozí sokety

Pokud je toto nastavení povoleno, AdGuard po uplynutí zadané doby odešle udržovací sondu, aby se ujistil, zda je připojení TCP funkční. Po systémem definovaném počtu neúspěšných pokusů o získání odpovědi ze serveru systém automaticky ukončí připojení TCP.

Toto nastavení vám umožňuje zadat:

- **Idle time**, in seconds, before sending TCP keepalive probes to outgoing sockets. Výchozí hodnota je 0. Pokud máte problémy s NAT, nastavte tuto hodnotu na 20.
- **Time between keepalive probes** for an unresponsive peer. Výchozí hodnota je 0 swkund.

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

Toto nastavení povoluje protokolování rozhraní TUN. When enabled, AdGuard creates a file `timestamp.pcap`, such as  1682599851461.pcap, in the app cache directory. Tento soubor obsahuje seznam všech síťových paketů přenášených prostřednictvím sítě VPN a lze jej analyzovat pomocí nástroje Wireshark.

#### Zahrnout bránu Wi-Fi v trasách VPN

Pokud je toto nastavení povoleno, budou IP adresy brány přidány do tras VPN při připojení zařízení k Wi-Fi.

#### Adresa IPv4

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. The default value is `172.18.11.218`.

#### Vynucené směrování LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the _Route all LAN IPv4 connections_ option is enabled.

#### Nucené směrování všech LAN IPv4

Pokud je toto nastavení povoleno, AdGuard vyloučí připojení LAN z filtrování pro jednoduché sítě. To nemusí fungovat pro složité sítě. This setting only applies if _Forcibly route LAN IPv4_ is disabled.

#### Adresa IPv6

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. The default value is `2001:db8:ad:0:ff::`.

### Různé

#### Zobrazit nástroje pro vývojáře na hlavní obrazovce

If this setting is enabled, AdGuard will display the **Developer tools** icon in the upper right corner of the app’s home screen.

**Developer tools** is a specialized section available in AdGuard for Android v4.3 and later, designed for quick navigation and switching between features. Umožňuje rychle povolit nebo zakázat vlastní filtry, přístup k protokolům, povolit různé protokoly a další funkce.

#### Detekce Samsung Pay

Pokud je toto nastavení povoleno, ochrana AdGuard se při otevření aplikace Samsung Pay pozastaví. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
