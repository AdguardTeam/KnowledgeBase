---
title: How to debug rules in the MV3 extension
sidebar_position: 2
---

In the [AdGuard Browser Extension MV3](/adguard-browser-extension/mv3-version), the Filtering log only shows the approximate rules that were applied, which we call “assumed rules”. Dies liegt daran, dass der Browser keine Details darüber liefert, welche spezifischen deklarativen Regeln verwendet wurden, es sei denn, die Erweiterung liegt in einem „entpackten" Format vor. Um genaue Informationen zu erhalten, müssen Sie die entpackte Version der Erweiterung selbst in Ihrem Browser installieren.

Diese Anweisungen sind auch für problematische Fälle gedacht, in denen Sie die statisch mit der Erweiterung gelieferten Regeln ändern wollen. In den meisten Fällen sollte die Verwendung von _Benutzerregeln_ in der Erweiterung ausreichen.

## Voraussetzungen

1. **Git:** [Git installieren](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Node.js installieren](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Yarn installieren](https://classic.yarnpkg.com/lang/en/docs/install)

## So klonen Sie die Erweiterung

1. Klonen Sie das Repository:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Wechseln Sie in den Ordner:

   ```bash
   cd AdguardBrowserExtension
   ```

3. Wechseln Sie zum Zweig `v5.0`:

   ```bash
   git checkout v5.0
   ```

4. Installieren Sie Abhängigkeiten:

   ```bash
   yarn install
   ```

## So erstellen Sie eine Erweiterung

1. Wechseln Sie zum Zweig `v5.0`:

   ```bash
   git checkout v5.0
   ```

2. Führen Sie den folgenden Befehl im Terminal aus:

   ```bash
   yarn dev chrome-mv3
   ```

3. For Opera, run `yarn dev opera-mv3` instead — the built extension will
   be located in the `./build/dev/opera-mv3` directory.

4. The built extension will be located in the directory:

   ```bash
   ./build/dev/chrome-mv3
   ```

## So installieren Sie entpackte Erweiterung im Browser

1. Aktivieren Sie den Entwicklermodus:

   ![Entwicklermodus](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Klicken Sie auf _Entpackt laden_:

   ![Entpackt laden](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Wählen Sie den Ordner der Erweiterung und klicken Sie auf `Auswählen`:

   ![Auswählen](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

Das war's!

## So debuggen Sie Regeln

1. Suchen Sie die gewünschte Regel im Ordner `./Extension/filters/chromium-mv3` in den `.txt`-Dateien und ändern Sie sie.

2. Konvertieren Sie die Regeln von txt in deklarative Form:

   ```bash
   yarn convert-declarative
   ```

3. Erstellen Sie die Erweiterung erneut:

   ```bash
   yarn dev chrome-mv3
   ```

4. Laden Sie die Erweiterung erneut im Browser:

   ![Erweiterung neu laden](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
