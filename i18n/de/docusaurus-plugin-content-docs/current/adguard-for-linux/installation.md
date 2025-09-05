---
title: Installation, Einrichtung und Entfernung
sidebar_position: 2
---

## AdGuard für Linux installieren

Öffnen Sie die Befehlszeile auf Ihrem Computer. Unter Linux verwenden Sie das Tastaturkürzel _Strg+Alt+T_. Auf dem Mac geben Sie _Terminal_ in das Suchfeld ein.

Um AdGuard zu installieren, wählen Sie die Version, die Ihnen am besten gefällt (Release, Beta oder Nightly) und geben Sie den entsprechenden Befehl ein.

**Release**:

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

Geben Sie bei Bedarf Ihr Admin-Passwort ein.

Drücken Sie `y`, um einen Link in `/usr/local/bin` auf die ausführbare Datei zu erstellen und warten Sie, bis die Installation abgeschlossen ist.

:::note

Sie können die Signatur überprüfen, um zu beweisen, dass es sich um eine offizielle Version von AdGuard handelt, indem Sie das Tool `gpg` verwenden. [Erfahren Sie mehr auf GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Ersteinrichtung

AdGuard für Linux erfordert eine [AdGuard-Lizenz](https://adguard.com/license.html). Wenn Sie noch keine Lizenz erworben haben, können Sie sich anmelden oder ein Konto erstellen, um eine kostenlose 14-tägige Testversion zu erhalten. Wenn Sie bereits eine Lizenz besitzen, melden Sie sich an, um sie zu aktivieren. Folgen Sie dazu dieser Schritt-für-Schritt-Anleitung:

1. Geben Sie nach der Installation Folgendes ein:

   ```sh
   adguard-cli activate
   ```

2. Wählen Sie dann die gewünschte Option:

   ![adguard-cli aktivieren \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation1.png)

3. Sobald Sie eine Lizenz besitzen, folgen Sie dem angegebenen Link, um mit der Aktivierung fortzufahren:

   ![Lizenz aktivieren \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

4. Nach der Aktivierung können Sie mit der Anwendung weiterarbeiten:

   ![Erfolgreich aktiviert \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

5. Sie können Ihre Lizenz zurücksetzen, indem Sie Folgendes eingeben:

   ```sh
   adguard-cli reset-license
   ```

   oder die Lizenzinformationen anzeigen, indem Sie eingeben

   ```sh
   adguard-cli license
   ```

6. Jetzt müssen Sie AdGuard CLI einrichten. Um den Konfigurationsassistenten zu starten, geben Sie ein:

   ```sh
   adguard-cli configure
   ```

   ![Einrichtung \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation4.png)

   Der Assistent stellt grundlegende Fragen, die für die Ersteinrichtung erforderlich sind.

7. Danach können Sie den AdGuard-Schutz starten, indem Sie eingeben

   ```sh
   adguard-cli start
   ```

   ![Schutz starten \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation5.png)

8. Sie können den Schutzstatus überprüfen mit:

   ```sh
   adguard-cli status
   ```

   und stoppen mit:

   ```sh
   adguard-cli stop
   ```

   ![Schutz anhalten \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

9. Um die aktuelle Konfiguration zu überprüfen, geben Sie Folgendes ein:

   ```sh
   adguard-cli config show
   ```

   ![Aktuelle Einrichtung \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

   Dabei wird auch der Pfad zur Konfigurationsdatei angezeigt, die Sie direkt bearbeiten sollten. Sie enthält Beschreibungen aller zusätzlichen Optionen.

   Als Alternative können Sie diese Befehle verwenden:

   ```sh
   adguard-cli config get
   ```

   oder:

   ```sh
   adguard-cli config set
   ```

   Sie sind jedoch in erster Linie für die Skripterstellung gedacht.

Weitere Informationen zu den verfügbaren Befehlen finden Sie im Abschnitt [Einstellungen und Schutzverwaltung](https://adguard.com/kb/adguard-for-linux/settings/).

## AdGuard für Linux deinstallieren

Um AdGuard zu deinstallieren, geben Sie ein:

Release

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

Geben Sie bei Bedarf Ihr Admin-Passwort ein.
