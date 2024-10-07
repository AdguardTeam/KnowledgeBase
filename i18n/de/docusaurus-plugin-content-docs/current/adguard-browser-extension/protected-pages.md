---
title: Browser-geschützte Webseiten
sidebar_position: 6
---

:::info

In diesem Artikel geht es um die AdGuard Browsereweiterung, die nur Ihren Browser schützt. Um Ihr gesamtes Gerät zu schützen, [laden Sie die AdGuard-App herunter](https://adguard.com/download.html?auto=true)

:::

When using a web extension like AdGuard Browser Extension, there are certain restricted domains that prohibit access or permissions. Folglich ist es Werbeblocker-Erweiterungen nicht gestattet, mit dem Inhalt dieser Seiten zu interagieren oder ihn zu verändern. Mit anderen Worten: Sie dürfen Werbung und andere störende Elemente auf diesen Webseiten nicht sperren.

## Einschränkungen für Chromium-Browser

Chromium-basierte Browser, wie z. B. Google Chrome, führen eine Liste mit eingeschränkten Domains, auf die Erweiterungen nicht zugreifen dürfen. Zu diesen Domains gehören:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- URLs, die mit `chrome://`, `chrome-extension://` oder `https://chrome.google.com/webstore/` beginnen
- PDF-Dateien
- Seiten, auf denen Javascript deaktiviert ist
- Seiten mit Sicherheitswarnungen
- Fehlerseiten wie 404-Fehler und Netzwerkfehler
- URLs, die mit `view-source:` oder `data:` beginnen

## Einschränkungen des Firefox-Browsers

Auch der Firefox-Browser verfügt über eine Reihe von eingeschränkten Bereichen, in denen Erweiterungen nicht eingesetzt werden dürfen. Zu diesen eingeschränkten Domains gehören:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Ändern von Einschränkungen in Firefox

Das Ändern von erweiterten Einstellungen kann die Stabilität und Sicherheit von Firefox beeinträchtigen. Dies wird nur fortgeschrittenen Benutzer:innen empfohlen. Wenn Sie sich des damit verbundenen Risikos bewusst sind und dennoch Add-ons aktivieren möchten, die auf einer geschützten Seite nicht zugelassen sind, gehen Sie wie folgt vor:

1. Klicken Sie auf die Menüschaltfläche (Ⲷ) → **Add-ons und Themen** → **Erweiterungen**.
2. Klicken Sie auf die Erweiterung, die Sie auf Websites mit Einschränkungen aktivieren möchten (in diesem Fall AdGuard).
3. Wählen Sie **Zulassen** im Abschnitt **Auf Websites mit Einschränkungen ausführen**.

Alternativ können Sie auch:

1. Öffnen Sie einem neuen Tab und geben Sie **about:config** in die Adressleiste ein.
2. Drücken Sie **Eingabetaste**. Möglicherweise erhalten Sie eine Warnhinweis. Klicken Sie in diesem Fall auf **Risiko akzeptieren und fortfahren**.
3. Suchen Sie nach `extensions.webextensions.restrictedDomains`. Wenn Sie diese Einstellung nicht finden können, können Sie sie erstellen. Wählen Sie einfach den Typ **Boolean** und klicken Sie auf **+**, um ihn hinzuzufügen.
4. Klicken Sie auf die Schaltfläche neben dieser Einstellung und ändern Sie ihren Wert in `false`.
5. Starten Sie Firefox neu.

Weitere Informationen zu diesem Thema finden Sie in [dem Artikel auf der Support-Website von Mozilla](https://mzl.la/3POXoWi).
