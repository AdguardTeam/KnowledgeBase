---
title: Installazione, configurazione e rimozione
sidebar_position: 2
---

## Installa AdGuard per Linux

Per installare AdGuard, inserisci:

Versione

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Se necessario, inserisci la password di amministratore.

Premi `y` per creare un collegamento in `/usr/local/bin` all'eseguibile e attendi il completamento dell'installazione.

:::note

Puoi verificare la firma per dimostrare che si tratta di una versione ufficiale di AdGuard usando lo strumento `gpg`. [Leggi di più su GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Attiva la licenza

AdGuard per Linux richiede una [licenza AdGuard](https://adguard.com/license.html). Se non hai ancora una licenza, puoi accedere o creare un account per ottenere un periodo di prova gratuito di 14 giorni. Se hai già una licenza, accedi per attivarla.

Per accedere o creare un account, digitare:

```
adguard-cli activate
```

Per reimpostare la tua licenza, digita:

```
adguard-cli reset-license
```

Per vedere le informazioni sulla licenza, digita:

```
adguard-cli license
```

## Configurazione iniziale

Per far funzionare AdGuard, è necessario completare la configurazione iniziale. Ciò include l'installazione del Certificato CA di AdGuard, l'abilitazione dei filtri necessari e la selezione della modalità proxy.

Per avviare la configurazione guidata, inserisci:

```
adguard-cli configure
```

## Disinstalla AdGuard per Linux

Per disinstallare AdGuard, inserisci:

Versione

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Se necessario, inserisci la password di amministratore.
