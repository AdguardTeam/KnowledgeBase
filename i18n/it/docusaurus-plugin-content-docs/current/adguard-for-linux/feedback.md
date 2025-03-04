---
title: Invio di feedback
sidebar_position: 4
---

## Segnala un problema o suggerisci una funzionalità

Se hai trovato un bug in AdGuard per Linux o desideri suggerire una nuova funzionalità, ecco come farlo:

- Compila il [modulo di feedback](https://surveys.adguard.com/en/adguard_linux/form.html).
- Crea un [problema su GitHub](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose). Ma prima di farlo, controlla il [repository](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue) per problemi simili.

:::note

Se desideri supportare l'implementazione di una nuova funzionalità o correzione di bug, puoi votarla su GitHub. Per votare, basta reagire con qualche emoji.

:::

## Raccogli e invia i registri

1. Abilita registrazione in modo debug:

    `adguard-cli config set log_level debug`

2. Riproduci il problema e cerca di ricordare l'ora esatta in cui si è verificato.

3. Attendi un po', quindi esporta i registri:

    `adguard-cli esporta-log`

    Il file di registro archiviato verrà scaricato nella cartella dell'app per impostazione predefinita, e il percorso degli appunti sarà scritto nella console.

4. Invia il file di registro a <devteam@adguard.com>. Includi l'ora dell'errore e allega un link al tuo problema su GitHub o il suo numero (appare come #numero accanto al titolo). In alternativa, puoi caricare il file di registro su Google Drive e condividerlo con <devteam@adguard.com>. Aggiungi il link del file al tuo problema su GitHub.

5. Riporta la modalità di registrazione a `info`:

    `adguard-cli config set log_level info`
