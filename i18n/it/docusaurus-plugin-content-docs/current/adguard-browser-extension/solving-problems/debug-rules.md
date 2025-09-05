---
title: Come eseguire il debug delle regole in AdGuard per Chrome MV3
sidebar_position: 2
---

In [AdGuard per Chrome MV3](/adguard-browser-extension/mv3-version), il registro di filtraggio mostra solo le regole approssimative applicate, che chiamiamo "regole presunte". Ciò accade perché il browser non fornisce dettagli sulle specifiche regole dichiarative utilizzate, a meno che l'estensione non sia in un formato "non compresso". Per informazioni più precise, dovrai installare tu stesso la versione scompattata dell'estensione nel tuo browser.

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

3. L'estensione compilata sarà posizionata nella ripartizione:

   ```bash
   ./build/dev/chrome-mv3
   ```

## Come installare decompresso nel browser

1. Attivare la modalità sviluppatore:

   ![Modalita sviluppatore](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Fare clic su _Carica decompresso_:

   ![Carica decompresso](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Selezionare la ripartizione dell'estensione e fare clic su `Seleziona`:

   ![Seleziona](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

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

   ![Ricarica estensione](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
