---
title: Průvodce nízkoúrovňových nastavení
sidebar_position: 5
---

:::info

Tento článek popisuje AdGuard pro iOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Jak dosáhnout nízkoúrovňových nastavení

:::caution

Změna *Nízkoúrovňových nastavení* může způsobit problémy s výkonem AdGuardu, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto sekci byste měli otevřít pouze v případě, že víte, co děláte, nebo vás o to požádal náš tým podpory.

:::

Chcete-li přejít na *Nízkoúrovňová nastavení*, klepněte na ikonu ozubeného kola v pravém dolním rohu obrazovky a otevřete *Nastavení*. Vyberte sekci *Obecné* a poté přepněte přepínač *Pokročilý režim*, poté se níže zobrazí sekce *Pokročilá nastavení*. Klepnutím na *Pokročilá nastavení* přejděte do části *Nízkoúrovňová nastavení*.

## Nízkoúrovňová nastavení

### Režim Tunel

Existují dva hlavní režimy tunelu: *Dělený* a *Úplný*. Režim *Dělený tunel* poskytuje kompatibilitu aplikací AdGuard a takzvaných "Osobních VPN". V režimu *Úplný tunel* nemůže žádná jiná VPN pracovat současně s AdGuardem.

There is a specific feature of the *Split-Tunnel* mode: In case of poor DNS proxy performance, for example, if the response from the AdGuard DNS server isn't returned in timely, iOS will instead reroute traffic through the DNS server specified in the iOS settings. V tuto chvíli nejsou blokovány žádné reklamy a provoz DNS není šifrován.

V režimu *Úplný tunel* se používá pouze server DNS zadaný v nastavení AdGuardu. Pokud neodpovídá, internet jednoduše nefunguje. Enabled *Full-Tunnel* mode may negatively impact the performance of some programs (e.g., FaceTime) and cause app update issues.

Ve výchozím nastavení používá AdGuard režim *Dělený tunel* jako nejstabilnější možnost.

K dispozici je také další režim nazvaný *Úplný tunel (bez ikony VPN)*. Tento režim je naprosto stejný jako režim *Úplný tunel*, ale je nastaven tak, že se v systémovém řádku nezobrazuje ikona VPN.

### Režim blokování

V tomto modulu můžete vybrat způsob, jakým bude AdGuard reagovat na dotazy DNS, které mají být blokovány:

- Výchozí: — odezva s nulovou IP, pokud je blokováno pravidly ve stylu Adblock; odezva pomocí IP adresy uvedené v pravidle, pokud je blokováno pravidly /etc/hosts-style
- REFUSED: — odezva pomocí kódu REFUSED
- NXDOMAIN: — odezva pomocí kódu NXDOMAIN
- Nespecifikovaná IP — odezva s nulovou IP adresou
- Vlastní IP — odezva s ručně nastavenou IP adresou

### Blokování IPv6

Posunutím přepínače doprava zapnete blokování dotazů IPv6 (požadavky AAAA). DNS požadavky typu AAAA nebudou vyřešeny, lze tedy zpracovávat pouze dotazy IPv4.

### Blokovaná odezva TTL

Zde můžete nastavit dobu, po kterou má zařízení ukládat odezvu na požadavek DNS do mezipaměti. Během zadané doby time-to-live (v sekundách) může být požadavek načten z mezipaměti bez opětovného dotazování serveru DNS.

### Bootstrap servery

Pro DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC je vyžadován bootstrap server pro získání IP adresy hlavního serveru DNS. Pokud není zadán, použije se jako bootstrap server DNS server z nastavení systému iOS.

### Záložní server

Zde můžete zadat alternativní server, na který bude požadavek přesměrován, pokud hlavní server neodpoví. Pokud není zadán, použije se jako záložní server systémový DNS server. Je také možné zadat `žádný`, v tomto případě nebude nastaven žádný záložní server a bude použit pouze hlavní DNS server.

### Doba obnovení aplikace na pozadí

Zde můžete vybrat frekvenci, s jakou bude aplikace na pozadí kontrolovat aktualizace filtrů. Všimněte si, že kontroly aktualizací nebudou prováděny častěji než v zadané periodě, ale přesné intervaly nemusí být dodrženy.
