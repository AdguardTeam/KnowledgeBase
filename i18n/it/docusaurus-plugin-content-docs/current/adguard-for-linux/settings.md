---
title: Gestione impostazioni e protezione
sidebar_position: 3
---

Per ottenere una lista di tutti i comandi AdGuard disponibili, inserisci:

```
adguard-cli --help-all
```

## Abilita e disabilita protezione

Per abilitare la protezione, inserisci:

```
adguard-cli start
```

Per disabilitare la protezione, inserire:

```
adguard-cli stop
```

Per vedere lo stato della protezione, inserisci:

```
adguard-cli status
```

## Controlla gli aggiornamenti

Per controllare gli aggiornamenti, inserisci:

```
adguard-cli check-update
```

Per aggiornare AdGuard per Linux, inserisci:

```
adguard-cli update
```

Per vedere il risultato del codice di aggiornamento, inserisci:

```
adguard-cli update -v
```

## Configura AdGuard per Linux

Usa il comando `config` per configurare AdGuard per Linux. Sotto-comandi:

- `show`: Mostra la configurazione corrente in `proxy.yaml`
- `set`: Configura un'opzione in `proxy.yaml`
    - `listen_ports.http_proxy`: porta HTTP di ascolto
    - `proxy_mode`: Modalità proxy (`manuale` o `automatico`)
- `get`: Ottieni lo stato attuale delle opzioni soprastanti

## Gestisci i filtri

Usa il comando `filters` per configurare AdGuard per Linux. Sotto-comandi:

- `list`: Elenca i filtri installati
    - `--all`: Vedi tutti i filtri
- `install`: installa un filtro. Inserisci l'URL del filtro che desideri installare
- `enable`: Abilita un filtro. Inserisci il nome o l'ID del filtro
- `disable`: disabilita un filtro. Inserisci il nome o l'ID del filtro
- `update`: aggiorna i filtri
