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

**Omezení**:

- Prohlížeče založené na Chrome nepřijímají uživatelské certifikáty, proto v nich není podporováno filtrování HTTP/3.
- Prohlížeče založené na Firefoxu se ve výchozím nastavení chovají podobně, ale můžete nastavit možnost `network.http.http3.disable_when_third_party_roots_found` v `about:config` na `false`, aby byly povoleny uživatelské certifikáty pro HTTP/3.
- Safari podporuje filtrování HTTP/3 bez další konfigurace.

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

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Upravit velikost fragmentu úvodního paketu TLS

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. Pokud je zadána neplatná velikost, použije se hodnota vybraná systémem. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Velikost fragmentu běžného požadavku HTTP

Upraví velikost fragmentace požadavků HTTP. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

Platné hodnoty: 1–1500. Pokud je zadána neplatná velikost, použije se hodnota vybraná systémem. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### Zobrazit QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Povolit udržování TCP

Platné hodnoty: 1–1500. Pokud je zadána neplatná velikost, použije se hodnota vybraná systémem.

### Interval udržování TCP

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Časový limit udržování TCP

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Blokovat Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### Časový limit DNS serveru

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### Použít HTTP/3 pro DNS-over-HTTPS

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### Použít záložní DNS odchozích připojení

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### Paralelní dotazování na odchozí připojení DNS

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### Vždy odpovídat na neúspěšné DNS dotazy

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### Povolit filtrování zabezpečených DNS požadavků

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

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

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### Vlastní IPv6 adresa

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### Záložní server

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- Nepoužívat záložní servery;
- Použít výchozí systémové servery;
- Použít vlastní servery.

### Blokovat ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Seznam vlastních záložních serverů

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### Seznam vlastních bootstrap adres

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS výjimky

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Vyloučit zadané názvy sítí Wi-Fi (SSID) z DNS filtrování

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
