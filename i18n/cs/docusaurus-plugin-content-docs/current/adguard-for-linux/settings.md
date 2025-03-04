---
title: Sparáva nastavení a ochrany
sidebar_position: 3
---

Chcete-li získat seznam všech dostupných příkazů AdGuardu, zadejte:

```
adguard-cli --help-all
```

## Povolení a zakázání ochrany

Chcete-li povolit ochranu, zadejte:

```
adguard-cli start
```

Chcete-li povolit zakázat, zadejte:

```
adguard-cli stop
```

Chcete-li zobrazit stav ochrany, zadejte:

```
adguard-cli status
```

## Zkontrolovat aktualizace

Chcete-li zkontrolovat aktualizace, zadejte:

```
adguard-cli check-update
```

Chcete-li aktualizovat AdGuard pro Linux, zadejte:

```
adguard-cli update
```

Chcete-li zobrazit výstup skriptu aktualizace, zadejte:

```
adguard-cli update -v
```

## Konfigurace AdGuardu pro Linux

Pro konfiguraci AdGuardu pro Linux použijte příkaz `config`. Dílčí příkazy:

- `show`: Zobrazení aktuální konfigurace v souboru `proxy.yaml`
- `set`: Konfigurace volby v souboru `proxy.yaml`
    - `listen_ports.http_proxy`: Naslouchací port HTTP
    - `proxy_mode`: Režim proxy (`manuální` nebo `automatický`)
- `get`: Zjištění aktuálního stavu výše uvedených možností

## Správa filtrů

Pro konfiguraci AdGuardu pro Linux použijte příkaz `filters`. Dílčí příkazy:

- `list`: Seznam nainstalovaných filtrů
    - `--all`: Zobrazení všech filtrů
- `install`: Instalace filtru. Zadejte adresu URL filtru, který chcete nainstalovat
- `enable`: Povolení filtru. Zadejte název nebo ID filtru
- `disable`: Zakázání filtrování. Zadejte název nebo ID filtru
- `update`: Aktualizace filtrů
