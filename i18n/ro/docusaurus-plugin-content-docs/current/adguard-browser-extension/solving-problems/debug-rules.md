---
title: Cum să depanăm regulile în AdGuard pentru Chrome MV3
sidebar_position: 2
---

În [AdGuard pentru Chrome MV3](/adguard-browser-extension/mv3-version), jurnalul de filtrare arată doar regulile aproximative care au fost aplicate, pe care le numim „reguli asumate”. Acest lucru se datorează faptului că browserul nu oferă detalii despre care reguli declarative specifice au fost utilizate, cu excepția cazului în care extensia este într-un format „nepachetat”. Pentru a obține informații precise, va trebui să instalați versiunea nepachetata a extensiei în browserul dumneavoastră.

Aceste instrucțiuni sunt, de asemenea, destinate cazurilor problematice în care doriți să modificați regulile care sunt incluse static în extensie. În cele mai multe cazuri, utilizarea _Reguli utilizator_ în extensie ar trebui să fie suficientă.

## Condiții preliminare

1. **Git:** [Instalați Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Instalați Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Instalați Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Cum să clonați extensia

1. Clonați repozitoriul:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Navigați la director:

   ```bash
   cd AdguardBrowserExtension
   ```

3. Comutați pe ramura `v5.0`:

   ```bash
   git checkout v5.0
   ```

4. Instalați dependențele:

   ```bash
   yarn install
   ```

## Cum să construiți extensia

1. Comutați pe ramura `v5.0`:

   ```bash
   git checkout v5.0
   ```

2. Rulați următoarea comandă în terminal:

   ```bash
   yarn dev chrome-mv3
   ```

3. Extensia construită va fi localizată în directorul:

   ```bash
   ./build/dev/chrome-mv3
   ```

## Cum să instalați nepachetat în browser

1. Activați modul pentru dezvoltatori:

   ![Mod pentru dezvoltatori](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Faceți clic pe _Încărcați nepachetat_:

   ![Load unpacked](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Selectați directorul extensiei și faceți clic pe `Selectați`:

   ![Selectați](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

Asta e tot!

## Cum să depanăm regulile

1. Găsiți și modificați regula de care aveți nevoie în directorul `./Extension/filters/chromium-mv3` în fișierele `.txt`.

2. Convertiți regulile din txt în formă declarativă:

   ```bash
   yarn convert-declarative
   ```

3. Construiți din nou extensia:

   ```bash
   yarn dev chrome-mv3
   ```

4. Reîncărcați extensia în browser:

   ![Reîncărcați extensia](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
