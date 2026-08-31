---
title: Pokročilá nastavení
sidebar_position: 4
---

:::info

Tento článek popisuje AdGuard pro Windows v8.0, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Jedná se o beta verzi, která je stále ve vývoji. Chcete-li vyzkoušet, stáhněte si [beta verzi AdGuard pro Windows](https://agrd.io/windows_beta).

:::

Sekce _Pokročilá nastavení_ obsahuje možnosti, které přesahují to, co většina uživatelů obvykle potřebuje. AdGuard pro Windows funguje ihned po instalaci, ale tato nastavení mohou být užitečná ve zvláštních případech nebo při řešení problémů.

:::caution

Změna pokročilých nastavení bez jejich pochopení může způsobit problémy s výkonem, přerušit připojení k internetu nebo ovlivnit vaše zabezpečení a soukromí. Upravujte je pouze v případě, že víte, co děláte, nebo pokud vás k tomu vyzve náš tým podpory.

:::

## Vyloučit aplikaci z filtrování zadáním úplné cesty

Pokud chcete, aby AdGuard přeskočil filtrování konkrétní aplikace, zadejte zde její úplnou cestu k souboru. Můžete přidat více aplikací oddělením jejich cest středníky.

## Povolit vyskakovací oznámení AdGuardu

Povolením této funkce zobrazíte vyskakovací oznámení AdGuardu. Nezobrazují se příliš často a obsahují pouze důležité informace. Nejnovější oznámení můžete také znovu otevřít z nabídky v liště.

## Automaticky zachytávat URL adresy pro odběr filtrů

Pokud je tato funkce zapnutá, AdGuard automaticky detekuje odkazy na odběry filtrů (např. `abp:subscribe`) a otevře okno, které vám pomůže přidat je do vašich filtrů.

## Použít režim přesměrování ovladače

Při zapnutí této možnosti AdGuard přesměruje veškerý váš provoz na místní proxy server za účelem filtrování.

Pokud je vypnuto, AdGuard filtruje provoz přímo — bez přesměrování. V tomto režimu Windows vnímá AdGuard jako jedinou aplikaci připojenou k internetu, protože všechny ostatní aplikace procházejí přes něj. To může mírně zlepšit výkon, ale může snížit účinnost systémového firewallu.

## Otevřít AdGuard při startu systému

Povolením této možnosti se okno AdGuardu spustí automaticky při zapnutí počítače.

## Zapnout filtrování při spuštění systému

Od verze 7.12 AdGuard nezačne automaticky filtrovat provoz po zapnutí počítače, pokud není povolena možnost _Spustit AdGuard při spuštění systému_. Místo toho běží v pasivním “nečinném“ režimu.

Zapnutí této možnosti umožní AdGuardu okamžitě filtrovat provoz, dokonce i když aplikace ještě nebyla otevřena.

## Filtrovat localhost

Povolte tuto možnost, aby AdGuard mohl filtrovat provoz loopback (localhost), který některé aplikace používají ke komunikaci v rámci systému. Pokud je nainstalována AdGuard VPN, je toto nastavení vždy zapnuté, protože VPN to vyžaduje pro správnou funkci.

## Zachytit HAR

Slouží pouze k ladění. Je-li tato funkce povolena, vytvoří AdGuard soubor HAR (formát Archiv HTTP 1.2) s podrobnými informacemi o všech filtrovaných požadavcích. Můžete jej otevřít v aplikacích jako Fiddler.

Mějte na paměti: může to zpomalit vaše prohlížení.

## Zobrazit QUIC v záznamu filtrování

Pokud je tato funkce povolena, AdGuard zahrne provoz protokolu QUIC do logu filtrování, ale pouze u blokovaných požadavků.

## Blokovat Java

Některé webové stránky stále používají pluginy Java, které jsou založeny na zastaralé a nezabezpečené technologii. Z bezpečnostních důvodů můžete tyto pluginy deaktivovat.

Použití možnosti _Blokovat Java_ nemá vliv na JavaScript — ten zůstane povolený.

## Režim blokování pro pravidla DNS

Zvolte, jak bude AdGuard reagovat, když je doména blokována pravidlem DNS na základě syntaxe [hosts-style](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Vrátit chybu `REFUSED`
- Vrátit chybu `NXDOMAIN`
- Vrátit vlastní IP adresu

### Vlastní IPv4 adresa

Pokud je v _Režimu blokování pro pravidla DNS_ vybrána možnost _Vlastní IP adresa_, bude tato IP adresa vrácena jako odpověď na blokované požadavky A. Pokud nejsou zadáno nic, AdGuard odpoví výchozí chybou REFUSED.

### Vlastní IPv6 adresa

Pokud je v _Režimu blokování pro pravidla DNS_ vybrána možnost _Vlastní IP adresa_, bude tato IP adresa vrácena jako odpověď na blokované požadavky AAAA. Pokud nejsou zadáno nic, AdGuard odpoví výchozí chybou REFUSED.

## Záložní server

Zde nastavte záložní DNS servery. AdGuard je použije, pokud hlavní server DNS neodpoví ve lhůtě, kterou jste nastavili. Můžete:

- Použít výchozí systémové DNS servery
- Přidat vlastní záložní servery
- Nebo se rozhodnout záložní servery vůbec nepoužívat

## Časový limit DNS serveru

Určete, jak dlouho (v milisekundách) má AdGuard čekat na odpověď DNS, než přepne na záložní server. Pokud je pole prázdné nebo neplatné, výchozí hodnota je 5000 ms (5 sekund).

## Vlastní adresy bootstrap

Bootstrap je zprostředkující DNS server používaný k získání IP adresy zabezpečeného DNS serveru, který jste vybrali dříve v menu DNS ochrana. Taková "střední cesta" je nutná při použití protokolů, které označují adresu serveru písmeny (například DNS-over-TLS). V tomto případě funguje bootstrap jako překladač a převádí písmena na čísla, kterým systém rozumí.

V případě potřeby však můžete zde zadat různé IP adresy — budou vyzkoušeny v pořadí shora dolů. Pokud žádná nefunguje nebo není zadána žádná, AdGuard se vrátí k výchozím nastavením systému.

## DNS výjimky

Domény uvedené zde obcházejí servery AdGuard DNS. Jejich požadavky procházejí výchozím řešitelem systému a AdGuard na ně neuplatňuje žádná pravidla blokování.
