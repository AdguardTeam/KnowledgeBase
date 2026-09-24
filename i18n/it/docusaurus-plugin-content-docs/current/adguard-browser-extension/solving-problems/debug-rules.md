---
title: How to debug rules in the MV3 extension
sidebar_position: 2
---

In the [AdGuard Browser Extension MV3](/adguard-browser-extension/mv3-version), the Filtering log only shows the approximate rules that were applied, which we call “assumed rules”. Ciò accade perché il browser non fornisce dettagli sulle specifiche regole dichiarative utilizzate, a meno che l'estensione non sia in un formato "non compresso". Per informazioni più precise, dovrai installare tu stesso la versione scompattata dell'estensione nel tuo browser.

Queste istruzioni sono pensate anche per i casi problematici in cui si desidera modificare staticamente le regole fornite con l'estensione. Nella maggior parte dei casi, dovrebbe essere sufficiente utilizzare _Regole utente_ nell'estensione.

## Prerequisiti

1. **Git:** [Installa Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Installa Node.js](https://nodejs.org/it/download/package-manager)

3. **Yarn:** [Installa Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Come clonare l'estensione

1. Clonare il repositorio:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Passare alla ripartizione:

   ```bash
   cd AdguardBrowserExtension
   ```

3. Passare al ramo `v5.0`:

   ```bash
   git checkout v5.0
   ```

4. Installare le dipendenze:

   ```bash
   yarn install
   ```

## Come costruire l'estensione

1. Passare al ramo `v5.0`:

   ```bash
   git checkout v5.0
   ```

2. Eseguire il seguente comando nel terminale:

   ```bash
   yarn dev chrome-mv3
   ```

3. For Opera, run `yarn dev opera-mv3` instead — the built extension will
   be located in the `./build/dev/opera-mv3` directory.

4. The built extension will be located in the directory:

   ```bash
   ./build/dev/chrome-mv3
   ```

## Come installare decompresso nel browser

1. Attivare la modalità sviluppatore:

   ![Developer mode \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Fare clic su _Carica decompresso_:

   ![Load unpacked \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Selezionare la ripartizione dell'estensione e fare clic su `Seleziona`:

   ![Select \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

Ecco fatto!

## Come eseguire il debug delle regole

1. Trova e modifica la regola di cui hai bisogno nella ripartizione `./Extension/filters/chromium-mv3` nei file `.txt`.

2. Convertire le regole dal formato txt alla forma dichiarativa:

   ```bash
   yarn convert-declarative
   ```

3. Costruire nuovamente l'estensione:

   ```bash
   yarn dev chrome-mv3
   ```

4. Ricaricare l'estensione nel browser:

   ![Reload extension \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
