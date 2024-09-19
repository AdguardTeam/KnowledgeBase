---
title: Gerootete Geräte
sidebar_position: 7
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Aufgrund der Sicherheitsmaßnahmen des Android-Betriebssystems sind einige AdGuard-Funktionen nur auf gerooteten Geräten verfügbar. Hier ist eine Liste von ihnen:

- **HTTPS-Filterung in den meisten Apps** erfordert [Installation eines CA-Zertifikats im Systemspeicher](/adguard-for-android/features/settings#security-certificates), da die meisten Apps den Zertifikaten im Benutzerspeicher nicht vertrauen. Die Installation eines Zertifikats in den Systemspeicher ist nur auf gerooteten Geräten möglich
- Der [**Automatische Proxy**-Routing-Modus](/adguard-for-android/features/settings#routing-mode) erfordert Root-Zugriff aufgrund der Einschränkungen von Android bei der systemweiten Datenverkehrsfilterung
- Der [**Manuelle Proxy**-Routing-Modus](/adguard-for-android/features/settings#routing-mode) erfordert unter Android 10 und höher Root-Zugriff, da es nicht mehr möglich ist, den Namen der App zu ermitteln, die mit einer von AdGuard gefilterten Verbindung verbunden ist
