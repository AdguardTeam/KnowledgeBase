---
title: Installation, Einrichtung und Entfernung
sidebar_position: 2
---

## AdGuard für Linux installieren

Um AdGuard zu installieren, geben Sie ein:

Release

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Beta-Version

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly-Version

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Geben Sie bei Bedarf Ihr Admin-Passwort ein.

Drücken Sie `y`, um einen Link in `/usr/local/bin` auf die ausführbare Datei zu erstellen und warten Sie, bis die Installation abgeschlossen ist.

:::note

Sie können die Signatur überprüfen, um zu beweisen, dass es sich um eine offizielle Version von AdGuard handelt, indem Sie das Tool `gpg` verwenden. [Erfahren Sie mehr auf GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Lizenz aktivieren

AdGuard für Linux erfordert eine [AdGuard-Lizenz] (https://adguard.com/license.html). Wenn Sie noch keine Lizenz haben, können Sie sich anmelden oder ein Konto erstellen, um eine kostenlose 14-tägige Testversion zu erhalten. Wenn Sie bereits eine Lizenz besitzen, melden Sie sich an, um sie zu aktivieren.

Um sich anzumelden oder ein Konto zu erstellen, geben Sie ein:

```
adguard-cli activate
```

Um Ihre Lizenz zurückzusetzen, geben Sie ein:

```
adguard-cli reset-license
```

Um die Lizenzinformationen anzuzeigen, geben Sie ein:

```
adguard-cli license
```

## Ersteinrichtung

Um AdGuard nutzen zu können, führen Sie die Ersteinrichtung durch. Dazu gehören die Installation des AdGuard CA-Zertifikats, die Aktivierung der erforderlichen Filter und die Auswahl des Proxy-Modus.

Um den Konfigurationsassistenten zu starten, geben Sie ein:

```
adguard-cli configure
```

## AdGuard für Linux deinstallieren

Um AdGuard zu deinstallieren, geben Sie ein:

Release

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta-Version

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly-Version

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Geben Sie bei Bedarf Ihr Admin-Passwort ein.
