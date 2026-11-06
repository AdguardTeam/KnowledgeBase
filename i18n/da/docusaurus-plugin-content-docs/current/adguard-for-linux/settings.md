---
title: Indstillinger og beskyttelseshåndtering
sidebar_position: 3
---

## Tilgængelige kommandoer

For en liste over alle tilgængelige AdGuard-kommandoer, skriv:

```sh
adguard-cli --help-all
```

## Aktivere og deaktivere beskyttelse

### Aktivere beskyttelse

For at aktivere beskyttelse, skriv:

```sh
adguard-cli start
```

Denne kommando forsøger at opsætte en omdirigering til proxyen.

![Start beskyttelse \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Deaktivere beskyttelse

For at deaktivere beskyttelse, skriv:

```sh
adguard-cli stop
```

Denne kommando stopper ikke kun proxyen, men stopper også trafikomdirigeringen til den.

### Tjekke beskyttelsesstatus

For at få vist beskyttelsesstatus, skriv:

```sh
adguard-cli status
```

![Status/Stop beskyttelse \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/6status-stop.png)

### Genstarte beskyttelse

For at genstarte proxyserveren og genanvende indstillingerne, skriv:

```sh
adguard-cli restart
```

## Opdateringer

### Søg efter opdateringer

For at søge efter opdateringer, skriv:

```sh
adguard-cli check-update
```

### Opdatere AdGuard til Linux

For at opdatere AdGuard til Linux, skriv:

```sh
adguard-cli update
```

### Opdatere scriptoutput

For at få vist opdateringsscriptets output, skriv:

```sh
adguard-cli update -v
```

## Opsætte AdGuard til Linux

Brug `config`-kommandoen til opsætning af AdGuard til Linux. Underkommandoer:

- `show [<section-name>]`: Vis den aktuelle opsætning i `proxy.yaml` (eller et bestemt afsnit)

  ![Aktuel opsætning \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/7config_show.png)

- `set <key> <value>`: Opsæt en indstilling i `proxy.yaml`
  - `listen_ports.http_proxy`: HTTP-lytteport
  - `proxy_mode`: Proxy-tilstand (`manual` eller `auto`)

- `get <key>`: Hent aktuel status for en indstilling

- `list-add <key> <value> [<value>...]`: Tilføj en eller flere værdier til en listeindstilling

- `list-remove <key> <value>`: Fjern en værdi fra en listeindstilling

- `reset <key>`: Nulstil en indstilling til dens standardværdi

- `reset --all`: Nulstil alle indstillinger til deres standardværdier

:::note

Automatisk tilstand kan kun benyttes, såfremt flg. krav er opfyldt:

- `iptables` er installeret og kører (enten `nft` eller `legacy`)
- `iptables` understøtter `nat`-tabellen for både IPv4 og IPv6
- `iptables` understøtter kæderne `REDIRECT` og `QUEUE` for både IPv4 og IPv6
- Pakken `sudo` er installeret

:::

## Filterhåndtering

Brug `filters`-kommandoen til opsætning af AdGuard til Linux. Underkommandoer:

- `list`: Oplist installerede og tilføjede filtre

  - `--all`: Vis alle filtre

  ![Filterliste \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `add`: Tilføj et indbygget filter efter ID eller navn

- `install`: Installér et filter. Angiv URL'en til filteret, der ønskes installeret, eller en lokal fil
  - `--trusted`: Markér det tilpassede filter som betroet
  - `--title`: Angiv en valgfri titel til filteret

- `enable`: Aktivér et filter. Angiv navn eller ID på filteret

  ![Aktivere filtre \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Deaktivér et filter. Angiv navn eller ID på filteret

- `remove`: Fjern et internt eller tilpasset filter efter ID

- `set-trusted`: Markér et tilpasset filter som betroet eller ikke betroet

- `set-title`: Angiv en valgfri titel til et tilpasset filter

Filteropdateringer håndteres af `adguard-cli check-update` (underkommandoen `filters update` videresender til den).

## Håndtere DNS-filtre

Brug kommandoen `dns filters` til at håndtere DNS-filterlister. Underkommandoer:

- `list`: Oplist installerede og tilføjede DNS-filtre
  - `--all`: Se alle DNS-filtre
- `add`: Tilføj et indbygget DNS-filter efter ID eller navn
- `install`: Installér et tilpasset DNS-filter fra en URL eller en lokal fil
  - `--title`: Angiv en valgfri titel til filteret
- `enable`: Slå et DNS-filter til. Angiv navn eller ID på filteret
- `disable`: Slå et DNS-filter fra. Angiv navn eller ID på filteret
- `remove`: Fjern et DNS-filter efter ID
- `set-title`: Angiv en valgfri titel til et DNS-filter

DNS-filteropdateringer håndteres af `adguard-cli check-update`.

## Håndtere userscripts

Brug kommandoen `userscripts` til at håndtere userscripts. Underkommandoer:

- `list`: Vis installerede userscripts
- `install`: Installér et userscript fra en URL
- `remove`: Fjern et userscript
- `enable`: Slå et userscript til
- `disable`: Slå et userscript fra

Userscripts opdateres af `adguard-cli check-update`.

## Ændring af proxyserverens lytteadresse i manuel proxytilstand

Som standard lytter proxyen på `127.0.0.1` — adressen til loopback-netværksgrænsefladen.
Der er to måder at få proxy-serveren til at lytte på en anden grænseflade:

1. Kør `adguard-cli config set listen_address <address>`, hvor `<address>` er adressen, der skal lyttes på.
2. Redigér opsætningsfilen direkte:
   - For at bestemme opsætningsfilens placering, kør `adguard-cli config show | grep "Config location"`.
   - Se efter `listen_address`-nøglen og angiv dens værdi i overensstemmelse hermed. For at lytte på alle tilgængelige netværksgrænseflader, sæt lytteadressen til `0.0.0.0` eller `::`.

Er lytteadressen sat til andet end `127.0.0.1`, så kræves proxy-klientgodkendelse. AdGuard CLI starter ikke, medmindre proxy-godkendelse er opsat:

- Når `adguard-cli config set listen_address <address>` eksekveres, hvor `<address>` ikke er `127.0.0.1`, beder AdGuard CLI om et brugernavn og en adgangskode, hvis proxy-godkendelse ikke allerede er opsat.
- Når opsætningssfilen redigeres direkte, kig efter nøglen `listen_auth`. Sæt `enabled`-undernøglen til `true`, og `brugernavn` og `adgangskode` til ikke-tomme værdier.

## Opsæt udgående proxy

En `outbound_proxy` kan opsættes, såfremt AdGuard CLI skal fungere via en anden proxyserver.

Der er to måder, dette kan opsættes på:

### 1. Opsætning via URL (anbefalet)

I stedet for at indstille hver mulighed trin for trin, kan alle parametre opsættes med én linje via en URL:

```sh
adguard-cli config set outbound_proxy https://user:pass@host:port
```

:::info

Understøttede tilstande er HTTP, HTTPS, SOCKS4 og SOCKS5.

:::

`outbound_proxy` kan også hurtigt slås til/fra:

```sh
adguard-cli config set outbound_proxy false
```

Eller hurtigt rydde indstillingerne:

```sh
adguard-cli config set outbound_proxy ""
```

### 2. Opsætning af individuelle parameter

Muligheden for at justere bestemte parametre er også tilgængelig:

```sh
adguard-cli config set outbound_proxy.enabled true
adguard-cli config set outbound_proxy.host localhost
adguard-cli config set outbound_proxy.port 3128
adguard-cli config set outbound_proxy.username user
adguard-cli config set outbound_proxy.password pass
```

Slå certifikatbekræftelse for HTTPS-proxyer fra:

```sh
adguard-cli config set outbound_proxy.trust_any_certificate true
```

Slå SOCKS5-proxy til for UDP-trafik:

```sh
adguard-cli config set outbound_proxy.udp_through_socks5_enabled true
```

:::note

Understøtter SOCKS5-proxyen ikke UDP, fejler forbindelser sandsynligvis.

:::

## Pr. app AdGuard CLI-opsætning

Brugere skal ofte aktivere filtrering manuelt for bestemte webbrowsere. AdGuard til Linux understøtter **pr. app opsætning**, hvilket muliggør anvendelse af indstillinger eller regler individuelt på hver applikation i stedet for på systemniveau.

For detaljer, se afsnittet `apps` i `proxy.yaml`.

Et sæt præopsatte poster til populære webbrowsere er som standard inkluderet i `browsers.yaml`.

### Tjek af den aktuelle opsætning

For at se den aktuelle `outbound_proxy`-opsætning, skriv:

```sh
adguard-cli config show outbound_proxy
```

:::info Kompatibilitet

Opsætning af `outbound_proxy` via URL er tilgængelig fra og med AdGuard for Linux v1.1.26 nightly og v1.1 stabil udgivelse.

:::

## Eksport/import af indstillinger

Eksport-/importfunktionaliteten muliggør at tage en sikkerhedskopi af AdGuard CLI-opsætningen og gendanne den på samme eller et andet system. Dette omfatter filtre, proxyindstillinger og andre opsætningsindstilinger.

### Eksport af indstillinger

For at eksportere de aktuelle AdGuard CLI-indstillinger til et ZIP-arkiv, skriv:

```sh
adguard-cli export-settings
```

Outputstien kan angives vha. flagene `-o` eller `--output`. Dette kan være enten en specifik filsti eller en mappe:

```sh
# Eksport til en specifik fil
adguard-cli export-settings -o "/sti/til/settings.zip"

# Eksport til en mappe (arkiv oprettes med et standardnavn)
adguard-cli export-settings -o "/sti/til/mappe"
```

Er ingen outputsti angivet, eksporteres indstillingerne til arbejdsmappen med et standardnavn. Efter gennemført eksport viser kommandoen den fulde sti til placeringen af det oprettede arkiv.

### Import af indstillinger

For at importere AdGuard CLI-indstillinger fra et ZIP-arkiv, skriv:

```sh
adguard-cli import-settings -i "/sti/til/settings.zip"
```

Flagene "-i" eller "--input" er obligatorisk og angiver stien til indstillingsarkivet, der skal importeres.

## AdGuard Browser Assistent

AdGuard Browser Assistent muliggør håndtering af AdGuard-beskyttelse direkte fra webbrowseren.

![Assistent-vinduet \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/assistant_window.png)

### Sådan fungerer den

AdGuard Browser Assistent er en webbrowserudvidelse. Den muliggør hurtigt håndtering af AdGuard til Linux:

- Slå beskyttelse til/fra for et bestemt websted (kontakten under webstedsnavnet)
- Pausere beskyttelsen i 30 sekunder
- Deaktivere beskyttelse (pauseikonet øverste til højre)
- Blokere en annonce manuelt
- Anmelde fejlagtig blokering
- Håndtér HTTPS-filtrering (låseikonet ved siden af webstedsnavnet)

### Sådan installeres den

For at installere Native Messaging-manifester til webbrowserintegration, skriv:

```sh
adguard-cli install-browser-integration
```

For at afinstallere manifesterne, skriv:

```sh
adguard-cli install-browser-integration --uninstall
```

**Installation af AdGuard Browser Assistent-udvidelsen**:

1. Åbn [Assistent-siden](https://adguard.com/adguard-assistant/overview.html).
2. Vælg _Installér_ under webbrowsernavnet.
3. Installér Assistent fra webbrowserens udvidelsesbutik.

:::info Kompatibilitet

Understøttelse af AdGuard Browser Assistent er tilgængelig fra og med AdGuard til Linux v1.4.

:::
