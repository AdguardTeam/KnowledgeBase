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

Enable this to allow AdGuard to filter loopback (localhost) traffic, which some apps use to communicate within the system. If AdGuard VPN is installed, this setting is always on because the VPN requires it to work properly.

## Zachytit HAR

This is for debugging only. When enabled, AdGuard will create a HAR file (HTTP Archive 1.2 format) with detailed info about all filtered requests. You can open it in apps like Fiddler.

Keep in mind: it may slow down your browsing.

## Show QUIC in the filtering log

When enabled, AdGuard will include QUIC protocol traffic in the filtering log — but only for blocked requests.

## Blokovat Java

Some websites still use Java plug-ins, which rely on outdated and insecure technology. You can disable these plug-ins for security.

Using the _Block Java_ option does not affect JavaScript — it will remain enabled.

## Blocking mode for DNS rules

Choose how AdGuard responds when a domain is blocked by a DNS rule based on the [hosts-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Return a `REFUSED` error
- Return a `NXDOMAIN` error
- Return a custom IP address

### Vlastní IPv4 adresa

If _Custom IP address_ is selected in _Blocking mode for DNS rules_, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default REFUSED error.

### Vlastní IPv6 adresa

If _Custom IP address_ is selected in _Blocking mode for DNS rules_, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default REFUSED error.

## Záložní server

Set backup DNS servers here. AdGuard will use them if the main DNS server doesn’t respond within the timeout you set. You can:

- Use your system’s default DNS servers
- Add custom fallback servers
- Or choose not to use fallback servers at all

## DNS server timeout

Specify how long (in milliseconds) AdGuard should wait for a DNS response before switching to a fallback server. If left empty or invalid, the default is 5000 ms (5 seconds).

## Custom bootstrap addresses

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in DNS protection. Such a “middle ground” is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). V tomto případě funguje bootstrap jako překladač a převádí písmena na čísla, kterým systém rozumí.

But if needed, you can specify different IP addresses here — they’ll be tried in the order from top to bottom. If none work or nothing is entered, AdGuard will fall back to system defaults.

## DNS výjimky

Domains listed here bypass AdGuard DNS servers. Their requests go through the system’s default resolver, and AdGuard does not apply any blocking rules to them.
