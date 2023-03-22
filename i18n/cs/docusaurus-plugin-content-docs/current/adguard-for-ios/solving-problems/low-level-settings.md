---
title: Průvodce nízkoúrovňových nastavení
sidebar_position: 5
---

## Jak dosáhnout nízkoúrovňových nastavení

> Změna *Nízkoúrovňových nastavení* může způsobit problémy s výkonem AdGuardu, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory.

Chcete-li přejít na *Nízkoúrovňová nastavení*, klepněte na ikonu ozubeného kola v pravém dolním rohu obrazovky a otevřete *Nastavení*. Vyberte sekci *Obecné* a poté přepněte přepínač *Pokročilý režim*, poté se níže zobrazí sekce *Pokročilá nastavení*. Klepnutím na *Pokročilá nastavení* přejděte do části *Nízkoúrovňová nastavení*.

## Nízkoúrovňová nastavení

### Režim Tunel

Existují dva hlavní režimy tunelu: *Dělený* a *Úplný*. Režim *Dělený tunel* poskytuje kompatibilitu aplikací AdGuard a takzvaných "Osobních VPN". V režimu *Úplný tunel* nemůže žádná jiná VPN pracovat současně s AdGuardem.

Existuje specifická funkce režimu *Dělený tunel*: pokud proxy server DNS nefunguje dobře, například pokud se odpověď ze serveru AdGuard DNS nevrátila včas, systém iOS jej "zneplatní" a přesměruje provoz přes server DNS zadaný v nastavení systému iOS. V tuto chvíli nejsou blokovány žádné reklamy a provoz DNS není šifrován.

V režimu *Úplný tunel* se používá pouze server DNS zadaný v nastavení AdGuardu. Pokud neodpovídá, internet jednoduše nefunguje. Zapnutý režim *Úplný tunel* může způsobit nesprávný výkon některých programů (například FaceTime) a vést k problémům s aktualizacemi aplikací.

Ve výchozím nastavení používá AdGuard režim *Dělený tunel* jako nejstabilnější možnost.

K dispozici je také další režim nazvaný *Úplný tunel (bez ikony VPN)*. Tento režim je naprosto stejný jako režim *Úplný tunel*, ale je nastaven tak, že se v systémovém řádku nezobrazuje ikona VPN.

### Režim blokování

V tomto modulu můžete vybrat způsob, jakým bude AdGuard reagovat na dotazy DNS, které mají být blokovány: REFUSED — odezva s kódem REFUSED NXDOMAIN — odezva s kódem NXDOMAIN Unspecified IP — odezva s nulovou IP adresou Custom IP — odezva s ručně nastavenou IP adresou

### Blokování IPv6

Posunutím přepínače doprava zapnete blokování dotazů IPv6 (požadavky AAAA).

### Blokovaná odezva TTL

Zde můžete zadat hodnotu TTL (time to live), která bude vrácena jako odpověď na zablokovaný požadavek.

### Bootstrap servery

Pro DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC je vyžadován bootstrap server pro získání IP adresy hlavního serveru DNS. Pokud není zadán, použije se jako bootstrap server DNS server z nastavení systému iOS.

### Záložní server

Zde můžete zadat alternativní server, na který bude požadavek přesměrován, pokud hlavní server neodpoví. Pokud není zadán, použije se jako záložní server systémový DNS server. Je také možné zadat `žádný`, v tomto případě nebude nastaven žádný záložní server a bude použit pouze hlavní DNS server.

### Doba obnovení aplikace na pozadí

Zde můžete vybrat frekvenci, s jakou bude aplikace na pozadí kontrolovat aktualizace filtrů. Všimněte si, že kontroly aktualizací nebudou prováděny častěji než v zadané periodě, ale přesné intervaly nemusí být dodrženy.
