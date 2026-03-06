---
title: Sparáva nastavení a ochrany
sidebar_position: 3
---

## Dostupné příkazy

Chcete-li získat seznam všech dostupných příkazů AdGuardu, zadejte:

```sh
adguard-cli --help-all
```

## Povolení a zakázání ochrany

### Zapnout ochranu

Chcete-li povolit ochranu, zadejte:

```sh
adguard-cli start
```

Tento příkaz se pokusí nakonfigurovat přesměrování na proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Vypnout ochranu

Chcete-li povolit zakázat, zadejte:

```sh
adguard-cli stop
```

Tento příkaz nejen zastaví proxy, ale také zastaví přesměrování provozu na něj.

### Zkontrolovat stav ochrany

Chcete-li zobrazit stav ochrany, zadejte:

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

### Restart protection

To restart the proxy server and reapply settings, enter:

```sh
adguard-cli restart
```

## Aktualizace

### Zkontrolovat aktualizace

Chcete-li zkontrolovat aktualizace, zadejte:

```sh
adguard-cli check-update
```

### Aktualizace AdGuardu pro Linux

Chcete-li aktualizovat AdGuard pro Linux, zadejte:

```sh
adguard-cli update
```

### Aktualizace výstupu skriptu

Chcete-li aktualizovat výstup skriptu aktualizace, zadejte:

```sh
adguard-cli update -v
```

## Konfigurace AdGuardu pro Linux

Pro konfiguraci AdGuardu pro Linux použijte příkaz `config`. Dílčí příkazy:

- `show [<section-name>]`: Show the current configuration in `proxy.yaml` (or a specific section)

  ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set <key> <value>`: Configure an option in `proxy.yaml`
  - `listen_ports.http_proxy`: Naslouchací port HTTP
  - `proxy_mode`: Režim proxy (`manuální` nebo `automatický`)

- `get <key>`: Get the current status of a setting

- `list-add <key> <value> [<value>...]`: Add one or more values to a list setting

- `list-remove <key> <value>`: Remove a value from a list setting

- `reset <key>`: Reset a setting to its default value

- `reset --all`: Reset all settings to their default values

:::note

Automatický režim lze použít pouze tehdy, že jsou splněny následující požadavky:

- `iptables` je nainstalován a spuštěn (buď `nft` nebo `legacy`)
- `iptables` podporuje tabulku `nat` jak pro IPv4, tak pro IPv6
- `iptables` podporuje řetězce `REDIRECT` a `QUEUE` jak pro IPv4, tak pro IPv6
- Balíček `sudo` je nainstalován

:::

## Správa filtrů

Pro konfiguraci AdGuardu pro Linux použijte příkaz `filters`. Dílčí příkazy:

- `list`: List installed and added filters

  - `--all`: Zobrazení všech filtrů

  ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `add`: Add a built-in filter by ID or name

- `install`: Instalace filtru. Enter the URL of the filter you want to install or local file
  - `--trusted`: Mark the custom filter as trusted
  - `--title`: Set a custom title for the filter

- `enable`: Povolení filtru. Zadejte název nebo ID filtru

  ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: Zakázání filtru. Zadejte název nebo ID filtru

- `remove`: Remove an internal or custom filter by ID

- `set-trusted`: Mark a custom filter as trusted or untrusted

- `set-title`: Set a custom title for a custom filter

Filter updates are handled by `adguard-cli check-update` (the `filters update` subcommand forwards to it).

## Manage DNS filters

Use the `dns filters` command to manage DNS filter lists. Dílčí příkazy:

- `list`: List installed and added DNS filters
  - `--all`: View all DNS filters
- `add`: Add a built-in DNS filter by ID or name
- `install`: Install a custom DNS filter from a URL or local file
  - `--title`: Set a custom title for the filter
- `enable`: Enable a DNS filter. Zadejte název nebo ID filtru
- `disable`: Disable a DNS filter. Zadejte název nebo ID filtru
- `remove`: Remove a DNS filter by ID
- `set-title`: Set a custom title for a DNS filter

DNS filter updates are handled by `adguard-cli check-update`.

## Manage userscripts

Use the `userscripts` command to manage userscripts. Dílčí příkazy:

- `list`: Show installed userscripts
- `install`: Install a userscript from a URL
- `remove`: Remove a userscript
- `enable`: Enable a userscript
- `disable`: Disable a userscript

Userscripts are updated by `adguard-cli check-update`.

## Změna poslechové adresy proxy v režimu ručního proxy

Ve výchozím nastavení naslouchá proxy na `127.0.0.1` — adrese zpětného síťového rozhraní.
Existují dva způsoby, jak zajistit, aby proxy naslouchal na jiném rozhraní:

1. Spusťte `adguard-cli config set listen_address <address>`, kde `<address>` je adresa, na které se má naslouchat.
2. Upravte konfigurační soubor přímo:
   - Chcete-li zjistit umístění konfiguračního souboru, spusťte `adguard-cli config show | grep "Config location"`.
   - Vyhledejte klíč `listen_address` a nastavte jeho hodnotu odpovídajícím způsobem. Chcete-li naslouchat na všech dostupných síťových rozhraních, nastavte adresu pro naslouchání na `0.0.0.0` nebo `::`.

Pokud je adresa pro naslouchání nastavena na cokoli jiného než `127.0.0.1`, je požadováno ověření proxy klienta. AdGuard CLI se nespustí, pokud není nakonfigurováno ověřování pomocí proxy:

- Při spuštění `adguard-cli config set listen_address <address>`, kde `<address>` není `127.0.0.1`, se AdGuard CLI zeptá na uživatelské jméno a heslo, pokud ještě není nakonfigurováno ověřování pomocí proxy.
- Při přímé úpravě konfiguračního souboru vyhledejte klíč `listen_auth`. Nastavte podklíč `enabled` na hodnotu `true` a `username` a `password` na neprázdné hodnoty.

## Konfigurace odchozího proxy

Můžete nastavit `outbound_proxy`, pokud chcete, aby AdGuard CLI fungoval přes jiný proxy server.

Existují dva způsoby, jak to nastavit:

### 1. Konfigurace přrs URL (doporučeno)

Naísto nastavování každé volby krok za krokem můžete nastavit všechny parametry na jednom řádku pomocí URL:

```sh
adguard-cli config set outbound_proxy https://user:pass@host:port
```

:::info

Podporované režimy jsou HTTP, HTTPS, SOCKS5 a SOCKS5.

:::

Můžete také rychle povolit nebo deaktivovat `outbound_proxy`:

```sh
adguard-cli config set outbound_proxy false
```

Nebo rychle smazat nastavení:

```sh
adguard-cli config set outbound_proxy ""
```

### 2. Konfigurace jednotlivých parametrů

K dispozici je také možnost nastavení jednotlivých parametrů:

```sh
adguard-cli config set outbound_proxy.enabled true
adguard-cli config set outbound_proxy.host localhost
adguard-cli config set outbound_proxy.port 3128
adguard-cli config set outbound_proxy.username user
adguard-cli config set outbound_proxy.password pass
```

Deaktivace ověřování certifikátů pro proxy HTTPS:

```sh
adguard-cli config set outbound_proxy.trust_any_certificate true
```

Povolení proxy SOCKS5 pro přenosy UDP:

```sh
adguard-cli config set outbound_proxy.udp_through_socks5_enabled true
```

:::note

Pokud váš proxy SOCKS5 nepodporuje UDP, připojení možná selžou.

:::

## Konfigurace AdGuard CLI pro jednotlivé aplikace

Uživatelé často musí ručně povolit filtrování pro určité prohlížeče. AdGuard pro Linux podporuje **konfiguraci pro jednotlivé aplikace**, což vám umožňuje aplikovat nastavení nebo pravidla individuálně na každou aplikaci namísto na celý systém.

Podrobnosti najdete v části `apps` v souboru `proxy.yaml`.

Sada předkonfigurovaných položek pro oblíbené webové prohlížeče je ve výchozím nastavení zahrnuta v souboru `browsers.yaml`.

### Kontrola aktuální konfigurace

Chcete-li zobrazit aktuální konfiguraci `outbound_proxy`, zadejte:

```sh
adguard-cli config show outbound_proxy
```

:::info Kompatibilita

Nastavení `outbound_proxy` přes URL je dostupné od AdGuardu pro Linux verze 1.1.26 nightly a hlavní verze 1.1.

:::

## Nastavení exportu a importu

Funkce exportu/importu vám umožňuje zálohovat konfiguraci AdGuard CLI a obnovit ji na stejném nebo jiném systému. To zahrnuje filtry, nastavení proxy a další možnosti konfigurace.

### Export nastavení

Chcete-li exportovat aktuální nastavení AdGuard CLI do archivu ZIP, použijte:

```sh
adguard-cli export-settings
```

Výstupní cestu můžete zadat pomocí příznaku `-o` nebo `--output`. Může se jednat buď o konkrétní cestu k souboru, nebo o adresář:

```sh
# Export to a specific file
adguard-cli export-settings -o "/path/to/settings.zip"

# Export to a directory (archive will be created with a standard name)
adguard-cli export-settings -o "/path/to/directory"
```

Pokud není zadána žádná výstupní cesta, nastavení se exportuje do pracovního adresáře se standardním názvem. Po úspěšném exportu příkaz zobrazí úplnou cestu, kde byl archiv vytvořen.

### Import nastavení

Chcete-li importovat nastavení AdGuard CLI ze ZIP archivu, použijte:

```sh
adguard-cli import-settings -i "/path/to/settings.zip"
```

Příznak `-i` nebo `--input` je povinný a určuje cestu k archivu nastavení, který se má importovat.
