---
title: So beheben Sie den Fehler `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`
sidebar_position: 12
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Bei aktivierter [HTTPS-Filterung](/general/https-filtering/what-is-https-filtering) in AdGuard für Windows kann es vorkommen, dass der Zugriff auf bestimmte Websites wie google.com und youtube.com nicht möglich ist. Anstatt eine Website zu öffnen, zeigen Browser mit strikter Zertifikatsanbindung den Fehler `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` an.

Hier finden Sie eine Liste der betroffenen Browser:

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

Wenn Ihr Standardbrowser einer dieser Browser ist, gehen Sie wie folgt vor, um das Problem zu lösen:

1. Geben Sie `about:config` in die Adresszeile Ihres Browsers ein
2. Geben Sie in dem daraufhin angezeigten Menü `security.cert_pinning.enforcement_level` in das Suchfeld ein.
3. Ändern Sie den Parameter `security.cert_pinning.enforcement_level` von 2 auf 1.
