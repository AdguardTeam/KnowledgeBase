---
title: Netzwerkeinstellungen
sidebar_position: 3
---

:::info

Dieser Artikel beschreibt AdGuard für Windows v8.0, einen umfassenden Werbeblocker, der Ihr Gerät auf Systemebene schützt. Es handelt sich hierbei um eine Beta-Version, die sich noch in der Entwicklung befindet. Um es auszuprobieren, laden Sie die [Beta-Version von AdGuard für Windows](https://agrd.io/windows_beta) herunter.

:::

In diesem Abschnitt können Sie festlegen, wie AdGuard Ihren Internetverkehr filtern soll, und erhalten zusätzliche Werkzeuge zur Steuerung netzwerkbezogener Funktionen.

![Netzwerk-Einstellungen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## AdGuard als einen HTTP-Proxy verwenden

Aktivieren Sie diese Option, damit AdGuard als HTTP-Proxy genutzt werden kann. Der gesamte Datenverkehr, der darüber geleitet wird, wird gefiltert — nicht nur auf Ihrem Computer, sondern auch auf anderen Geräten in Ihrem Heimnetzwerk.

Um den Datenverkehr auf anderen Geräten filtern zu können, installieren Sie das Root-Zertifikat von AdGuard auf diesen Geräten und richten Sie den Proxy manuell ein.

Weitere Einstellungen sind standardmäßig aktiviert.

## HTTPS-Filterung

Die meisten Websites verwenden heute HTTPS-Verschlüsselung. Ohne HTTPS-Filterung kann AdGuard Werbung auf Websites wie YouTube, Facebook oder X (ehemals Twitter) nicht blockieren.

Wir empfehlen, die Option _HTTPS filtern_ aktiviert zu lassen, es sei denn, Sie haben einen bestimmten Grund, sie zu deaktivieren.

Mit dieser Option haben Sie folgende Möglichkeiten:

- Das AdGuard-Zertifikat neu Installieren oder herunterladen

- Websites zu einer Liste hinzufügen, die nicht gefiltert wird

- Auswählen, ob Websites mit EV-Zertifikaten (Extended Validation) gefiltert werden sollen

## Proxy für App- und Filter-Updates

Hier können Sie festlegen, welchen Proxy AdGuard zum Herunterladen von Filter-Updates oder neuen App-Versionen verwenden soll — den System-Proxy, einen benutzerdefinierten Proxy oder gar keinen Proxy.

![Proxy-Einstellungen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## SockFilter-Treiber verwenden

Aktivieren Sie diese Option, um den SockFilter-Treiber zu verwenden, der dabei hilft, Werbung und Tracker in Apps unter Windows 8 und höher zu blockieren.

Wenn diese Option deaktiviert ist, wechselt AdGuard stattdessen zum älteren WFP-Treiber.
