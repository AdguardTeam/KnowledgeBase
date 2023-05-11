---
title: Průvodce nízkoúrovňových nastavení
sidebar_position: 6
---

## Jak dosáhnout nízkoúrovňových nastavení

> Změna *Nízkoúrovňových nastavení* může způsobit problémy s výkonem AdGuardu, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory.

Chcete-li přejít na *Nízkoúrovňová nastavení*, otevřete hlavní nabídku, klepněte na *Nastavení*, vyberte *Pokročilé* a v dolní části obrazovky vyhledejte *Nízkoúrovňová nastavení*.

## Nízkoúrovňová nastavení

`pref.boot.startup.delay`

Zde můžete nastavit zpoždění spuštění AdGuardu po startu zařízení (v sekundách). Toto nastavení je relevantní pouze v případě, že je povoleno automatické spuštění AdGuardu (Nastavení → Obecné → Automatické spuštění AdGuardu).

`pref.dns.blocking.type`

Zde můžete vybrat způsob, jakým bude AdGuard reagovat na blokované dotazy DNS:

0 - znamená blokování požadavků s odezvou *Refused* pro pravidla filtrování sítě ** a s *Unspecified IP* pro pravidla *Hosts*. 1 - znamená blokování požadavků s odezvou *NXDomain* pro všechny druhy pravidel filtrování. 2 - znamená blokování požadavků s odezvou *Unspecified IP* pro všechny druhy pravidel filtrování. 3 - znamená blokování požadavků s odezvou *Unspecified IP* pro všechny druhy pravidel filtrování. 4 - znamená blokování požadavků s odezvou *Refused* pro všechny druhy pravidel filtrování.

Pokud zadaná hodnota není platná, použije se ve výchozím nastavení hodnota 1.

`pref.dns.bootstrap`

Bootstrap DNS pro servery DoH, DoT a DoQ. Ve výchozím nastavení se používá systémový DNS server.

`pref.dns.detect.search.domains`

Pokud je tato funkce zapnuta, AdGuard detekuje vyhledávací domény a automaticky je přeposílá na záložní upstreamy, pokud existují.

`pref.dns.fallback`

Zde můžete zadat záložní DNS řešitel, který bude použit, když nakonfigurovaný server nebude k dispozici. Pokud není zadán, použije se jako náhradní řešení výchozí DNS systému. Řetězec "none" znamená, že se záloha vůbec neprovádí.


`pref.dns.fallback.domains`

Zde můžete uvést domény, které budou přímo přesměrovány na záložní upstreamy (pokud existují).

`pref.dns.timeout`

Zde můžete zadat časový limit v milisekundách, který se použije pro každý požadavek DNS. Prosím, berte na vědomí, že pokud používáte vícero odchozích DNS serverů, záložní DNS server se použije až po vypršení platnosti požadavků všech odchozích DNS serverů.

`pref.enforce.https.filtering`

Zde jsou již uvedeny názvy balíčků aplikací, pro které AdGuard vynucuje filtrování HTTPS. Tento seznam můžete přidat s jakoukoli aplikací, i když je cílen na systém Android 7+. Předtím však zkontrolujte, zda aplikace důvěřuje certifikátu HTTPS AdGuardu, který je umístěn v úložišti uživatele, nebo zda vývojáři tuto možnost neposkytli.

`pref.enforce.paused.notification`

Vynucení oznámení o pozastavené ochraně, i když je ikona oznámení nastavena na hodnotu Vypnuto (pro Android Oreo a nižší).

`pref.excluded.packages`

Zde můžete uvést balíčky a UID, které chcete z filtrování vyloučit.

`pref.filtered.ports`

Zde můžete vypsat porty, na kterých budou připojení filtrována.

`pref.har.capture`

Zde můžete povolit zachycení souboru HAR. Používejte to pouze pro účely ladění! Pokud je toto nastavení povoleno, AdGuard vytvoří adresář s názvem "har" uvnitř adresáře mezipaměti aplikace. Obsahuje informace o všech filtrovaných požadavcích HTTP ve formátu HAR 1.2 a lze je analyzovat pomocí programu Fiddler.

`pref.https.ignored.errors`

Pro zde uvedené domény a názvy balíčků budou vypnuta oznámení, že nedůvěřují certifikátu HTTPS AdGuardu.

`pref.https.opportunistic`

Pokud je tato funkce povolena, AdGuard obejde přenosy všech aplikací, které nedůvěřují našemu certifikátu. Ve výchozím nastavení je funkce povolena.

`pref.ipv4.routs.excluded`

Zde najdete seznam rozsahů IPv4 vyloučených z filtrování. Například není filtrováno připojení k privátním rozsahům IP. V případě potřeby můžete tento seznam přidat.

`pref.ipv6.routs.excluded`

Zde můžete uvést rozsahy IPv6, které chcete z filtrování vyloučit.

`pref.notify.on.unknown.ca`

Když je tato funkce povolena, zobrazí vám AdGuard oznámení, pokud některá aplikace nedůvěřuje našemu certifikátu HTTPS.

`pref.proxy.block.ipv6`

Pokud je tato funkce povolena, AdGuard při práci v režimu "Proxy s automatickým nastavením" blokuje všechna internetová připojení přes IPv6.

`pref.proxy.disable.reconfigure`

Zde můžete zakázat automatickou rekonfiguraci kořenového proxy serveru AdGuardu při změně síťového připojení.

`pref.quic.bypass.packages`

Zde můžete uvést seznam balíčků, pro které bude AdGuard obcházet provoz QUIC.

`pref.removed.html.log`

Pokud je tato funkce povolena, zobrazuje AdGuard informace o blokovaných prvcích HTML v záznamu filtrování.

`pref.root.clear.youtube`

Pokud je tato funkce povolena, AdGuard při spuštění vymaže data aplikace YouTube a zablokuje reklamy v YouTube. Je vyžadován přístup root.

`pref.root.set.oom_adj`

Pokud je tato funkce povolena, AdGuard nastaví minimální hodnotu `oom_score_adj` pro svůj vlastní proces, aby zůstal spuštěný po celou dobu. Vyžaduje root přístup.

`pref.samsungpay.autopause.enable`

Pokud je tato funkce povolena, ochrana AdGuardem se pozastaví, když otevřete aplikaci Samsung Pay. Vyžaduje přístup k používání.

`pref.vpn.android10.mitigate`

Pokud je tato funkce povolena, AdGuard použije řešení, které zmírňuje problém s měkkými restarty způsobenými chybou systému Android 10.

`pref.vpn.capture`

Pokud je tato funkce povolena, AdGuard vytvoří speciální soubor s názvem "tun.pcap". Obsahuje všechny síťové pakety přenášené prostřednictvím VPN. Tento soubor se nachází v adresáři mezipaměti aplikace a lze jej analyzovat pomocí programu Wireshark.

`pref.vpn.disable.pause`

Tato funkce deaktivuje automatické pozastavení VPN v případě nepřítomnosti sítě, tetheringu nebo úsporného režimu.

`pref.vpn.disable.reconfigure`

Tato funkce zakazuje automatickou rekonfiguraci VPN v případě nepřítomnosti sítě, tetheringu nebo úsporného režimu.

`pref.vpn.ipv4.address`

TUN z IPv4 adres.

`pref.vpn.ipv4.bypass`

Pokud je tato funkce povolena, bude VPN nakonfigurována tak, aby obcházela veškerý provoz IPv4. V tomto případě bude IPv4 fungovat, ale nebude filtrována.

`pref.vpn.ipv4.force.complex`

Pokud je tato funkce povolena, VPN obejde síť LAN, pokud je to možné. Nicméně, při rozsáhlé síti není LAN obcházena a filtrování zahrnuje všechna připojení, včetně lokálních.

`pref.vpn.ipv4.force.default`

Tato funkce vypne trasy, které používáme pro vyloučení LAN připojení z filtrování.

`pref.vpn.ipv6.address`

TUN z IPv6 adres.

`pref.vpn.ipv6.bypass`

Pokud je tato funkce povolena, bude VPN nakonfigurována tak, aby obcházela veškerý provoz IPv6. V tomto případě bude IPv6 fungovat, ale nebude filtrována.

`pref.vpn.ipv6.disable`

Tato funkce násilně zakáže filtrování pro sítě IPv6. V takovém případě nebude IPv6 fungovat vůbec.

`pref.vpn.ipv6.force`

Tato funkce násilně povolí filtrování pro sítě IPv6. Aplikace ve výchozím nastavení nefiltruje IPv6 v systému Lollipop a u některých mobilních operátorů.

`pref.vpn.tun.mtu`

Zde můžete nastavit maximální přenosovou jednotku (MTU) rozhraní VPN. Doporučený interval pro experimenty je od 1500 do 9000.

`Reset`

Vždy můžete resetovat nízkoúrovňová nastavení na výchozí hodnoty.
