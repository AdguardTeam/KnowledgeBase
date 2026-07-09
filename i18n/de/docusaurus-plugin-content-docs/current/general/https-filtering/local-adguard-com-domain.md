---
title: Domain local.adguard.org
sidebar_position: 3
---

Bei AdGuard für Windows, Mac und Android fällt auf, dass AdGuard ein kleines Skript zu jeder Webseite hinzufügt, das von der Domain `local.adguard.org` geladen wird.

Zunächst einmal: Keine Sorge, das ist keine echte Domain, und es gibt auch keinen echten Server mit diesem Namen. Diese Domain wird verwendet, um kosmetische Filter auf Webseiten anzuwenden, aber alles geschieht lokal direkt auf Ihrem Gerät, ohne Verbindung zu einem Server.

### Technische Erläuterungen

Aber was ist da los und warum wird das gemacht? Bitte lesen Sie die nachfolgenden technischen Erläuterungen.

1. AdGuard ist ein Inhaltsblocker auf Netzwerkebene und kann daher nicht einfach benutzerdefinierte JavaScript- und CSS-Funktionen zu Webseiten hinzufügen, wie dies bei Browsererweiterungen der Fall ist. Dies ist jedoch entscheidend für die Qualität der zu sperrenden Inhalte.
2. Zu diesem Zweck injiziert AdGuard ein „Inhaltsskript“, das wie folgt aussieht: `<script src="https://local.adguard.org/.../content-script.js">`. Dieses Inhaltsskript sorgt für das kosmetische Filtern, blendet Anzeigeninhalte aus oder entfernt sie von den Webseiten.
3. Verbindungen zur IP-Adresse der Domain `local.adguard.org` werden von AdGuard auf Netzwerkebene abgefangen und **lokal** verarbeitet. Aus diesem Grund hat diese Domain eine „statische“ IP-Adresse, die sich jahrelang nicht ändert.

**Warum muss dafür eine echte IP-Adresse verwendet werden?**

- Wir können `127.0.0.1` nicht verwenden, da die Browser es nicht akzeptieren.
- Die Verwendung einiger IP-Adressen aus den privaten Teilnetzen ist möglich, aber diese Lösung hat zwei Nachteile.
    - Erstens besteht ein geringes Risiko, dass es zu Überschneidungen mit einem bestehenden Intranet-Dienst kommt und der Zugang zu diesem unterbrochen wird.
    - Zweitens könnten einige DNS-Server dies als DNS-Rebinding-Angriff betrachten und sich weigern, auf `local.adguard.org` zu antworten.

### Überprüfung

Dies ist leicht zu überprüfen. Wenn Sie AdGuard deaktivieren, werden Sie feststellen, dass es einfach unmöglich ist, eine Verbindung zu `local.adguard.org` herzustellen, da es keinen Server mit dieser Adresse gibt. Versuchen Sie einfach, sie in Ihrem Browser zu öffnen, wenn AdGuard deaktiviert ist.
