---
title: Installazione, configurazione e rimozione
sidebar_position: 2
---

## Installa AdGuard per Linux

Apri la riga di comando del tuo computer. In Linux, usa la scorciatoia da tastiera _Ctrl+Alt+T_. Sul tuo Mac, digita _Terminal_ nel campo di ricerca.

Per installare AdGuard, scegli la versione che meglio si adatta a te (rilascio, beta o nightly) e inserisci il rispettivo comando.

**Rilascio**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**Beta**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**Nightly**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Se necessario, inserisci la tua parola d'accesso di amministratore.

Premi `y` per creare un collegamento in `/usr/local/bin` all'eseguibile e attendi il completamento dell'installazione.

:::note

Puoi verificare la firma per dimostrare che si tratta di una versione ufficiale di AdGuard usando lo strumento `gpg`. [Leggi di più su GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Configurazione iniziale

AdGuard per Linux richiede una [licenza AdGuard](https://adguard.com/license.html). Se non hai ancora una licenza, puoi accedere o creare un profilo per ottenere un periodo di prova gratuito di 14 giorni. Se hai già una licenza, accedi per attivarla. Per farlo, segui questa guida passo-passo:

1. Dopo l'installazione, inserisci:

   ```sh
   adguard-cli activate
   ```

2. Quindi seleziona l'opzione desiderata:

   ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/1activate.png)

3. Una volta ottenuta la licenza, segui il collegamento fornito per procedere con l'attivazione:

   ![Activate license \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/2activate_link.png)

4. Dopo l'attivazione, puoi continuare a lavorare con il programma:

   ![Successful activation \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/3activate_success.png)

5. Puoi anche reimpostare la tua licenza inserendo:

   ```sh
   adguard-cli reset-license
   ```

   o vedere le informazioni sulla licenza digitando

   ```sh
   adguard-cli license
   ```

6. Ora devi approntare AdGuard CLI. Per avviare la configurazione guidata, inserisci:

   ```sh
   adguard-cli configure
   ```

   ![Setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/4configure.png)

   La procedura guidata farà domande di base obbligatorie per l'approntamento iniziale.

7. Dopo questo, puoi avviare la protezione di AdGuard inserendo

   ```sh
   adguard-cli start
   ```

   ![Start protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/5start.png)

8. Puoi controllare lo stato della protezione usando:

   ```sh
   adguard-cli status
   ```

   e fermarla con:

   ```sh
   adguard-cli stop
   ```

   ![Stop protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/6status-stop.png)

9. Per controllare la configurazione corrente, inserire:

   ```sh
   adguard-cli config show
   ```

   ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/7config_show.png)

   Il percorso del file di configurazione sarà altresì mostrato, e puoi − e dovresti − modificarlo direttamente. Contiene descrizioni di tutte le opzioni aggiuntive.

   Come alternativa, puoi usare i comandi:

   ```sh
   adguard-cli config get
   ```

   o:

   ```sh
   adguard-cli config set
   ```

   Tuttavia, sono pensati principalmente per la scrittura di script.

Per ulteriori informazioni sui comandi disponibili, controlla la sezione [Impostazioni e gestione della protezione](https://adguard.com/kb/adguard-for-linux/settings/).

## Disinstalla AdGuard per Linux

Per disinstallare AdGuard, inserisci:

Rilascio

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Se necessario, inserisci la tua parola d'accesso di amministratore.
