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

### Filtrování

#### Zachytit HAR

If this setting is enabled, AdGuard will capture HAR files. It will create a directory named "har" inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.

Use it only for debugging purposes!

### HTTPS filtrování

#### Encrypted Client Hello

Každé šifrované internetové připojení má i nešifrovanou část. Jedná se o první paket, který obsahuje název serveru, ke kterému se připojujete. Technologie Encrypted Client Hello má tento problém vyřešit a zašifrovat poslední kousek nešifrovaných informací. Chcete-li to využít, povolte možnost *Encrypted ClientHello*. K vyhledání konfigurace ECH pro danou doménu používá místní proxy server DNS. Pokud je nalezen, paket ClientHello bude zašifrován.

#### Kontrola OCSP

If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Pokud je certifikát odvolán, budou současná i budoucí připojení k doméně zablokována.

#### Přesměrovat požadavky DNS skrze HTTPS

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy.

#### Filtrování HTTP/3

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

### Outbound proxy

#### Zobrazit nastavení "Filtrovat požadavky DNS"

If this is enabled, the *Filter DNS requests* switch will be displayed in the *Add proxy server* dialog. Use it to enable filtering of DNS requests passing through the specified proxy.

### Ochrana

#### Rozsahy portů

Zde můžete zadat rozsahy portů, které mají být filtrovány.

#### Zaznamenat odstraněné HTML události

If this setting is enabled, AdGuard will record blocked HTML elements in *Recent activity*.

#### Ladění skripletů

If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied.

#### Vyloučené aplikace

Zde můžete uvést názvy balíčků a UID, které chcete z ochrany AdGuardem vyloučit.

#### Obcházení balíčků QUIC

Zde můžete zadat názvy balíčků, pro které má AdGuard obejít provoz QUIC.

#### Překonfigurovat automatický proxy při změně sítě

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if *Routing mode* is set to *Automatic proxy*.

#### Filtrování IPv6

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### Rozsahy IPv4 vyloučené z filtrování

Filtering for the IPv4 ranges listed in this section is disabled.

#### Rozsahy IPv6 vyloučené z filtrování

Filtering for the IPv6 ranges listed in this section is disabled.

#### Zachování záznamů TCP pro odchozí sokety

If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer.

Po systémem definovaném počtu neúspěšných pokusů o získání odpovědi ze serveru systém automaticky ukončí připojení TCP.

### Nastavení lokální VPN

#### Zpoždění obnovy u odvolané VPN

Zde můžete nastavit dobu prodlevy v milisekundách, než se AdGuard pokusí obnovit ochranu VPN poté, co byla zrušena aplikací VPN třetí strany nebo odstraněním profilu VPN. The default value is 5000 ms.

#### Zpoždění při změně plánu pro obnovení odvolané VPN

Zde můžete nastavit dobu prodlevy v milisekundách, než AdGuard znovu naplánuje obnovení ochrany VPN poté, co byla zrušena aplikací VPN třetí strany nebo odstraněním profilu VPN. The default value is 5000 ms.

#### MTU

Zde můžete nastavit maximální přenosovou jednotku (MTU) rozhraní VPN. Doporučený rozsah je 1500 –1900 bajtů.

#### Automatické obnovení VPN

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Zachycování paketů (PCAP)

If this setting is enabled, AdGuard will create a file `timestamp.pcap` (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program.

#### Zahrnout bránu Wi-Fi v trasách VPN

If this setting is enabled, the gateway IP addresses will be added to to VPN routes when on Wi-Fi.

#### Adresa IPv4

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. Ve výchozím nastavení je to `172.18.11.218`.

#### Vynucené směrování LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Nucené směrování všech LAN IPv4

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### Adresa IPv6

Zde můžete zadat IP adresu, která bude použita pro vytvoření rozhraní TUN. Ve výchozím nastavení je to `2001:db8:ad:0:ff::`.

### Různé

#### Detekce Samsung Pay

If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
