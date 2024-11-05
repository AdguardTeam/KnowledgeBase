---
title: Bekannte Kompatibilitätsprobleme mit Android-Anwendungen
sidebar_position: 16
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## VPN-Apps

Wenn Sie AdGuard im Filtermodus *Lokales VPN* verwenden, können Sie keine anderen VPN-Anwendungen gleichzeitig ausführen. Um dieses Problem zu lösen, schlagen wir vor, dass Sie:

- [AdGuard VPN](https://adguard-vpn.com/welcome.html) verwenden — sein *Integrierter Modus* ermöglicht das gleichzeitige Verwenden von zwei Anwendungen
- Ihre VPN-Anwendung so konfigurieren, dass sie als [Outbound-Proxy](../solving-problems/outbound-proxy.md) fungiert, und einen lokalen Outbound-Proxy mit den Parametern der Drittanbieter-Anwendung einrichten
- In den *Automatischen Proxy*-Modus wechseln. Wenn Sie dies tun, wird AdGuard kein lokales VPN mehr verwenden und stattdessen „iptables“ neu konfigurieren
- In den *Manuellen Proxy*-Modus wechseln. Öffnen Sie dazu *Einstellungen* → *Filtern* → *Netzwerk* → *Routing-Modus*

:::note Kompatibilität

Der *Automatische Proxy*-Modus ist nur auf gerooteten Geräten verfügbar. Für *Manuellen Proxy* ist das Rooten auf Geräten mit Android 10 oder höher erforderlich.

:::

## Privates DNS

Die Private DNS-Funktion wurde in Android Pie eingeführt. Vor Version Q hat Private DNS die DNS-Filterlogik von AdGuard nicht unterbrochen und die DNS-Weiterleitung durch AdGuard hat normal funktioniert. Aber ab Version Q zwingt das Vorhandensein von Private DNS Anwendungen dazu, den Datenverkehr über den Systemresolver statt über AdGuard umzuleiten. Siehe Android [devs blog](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) für weitere Details.

- Um das Problem mit Private DNS zu lösen, verwenden Sie die Regel `$network`

Einige Gerätehersteller halten die privaten DNS-Einstellungen verborgen und stellen den Modus „Automatisch“ als Standard ein. Es ist also nicht möglich, Private DNS zu deaktivieren, aber wir können das System dazu bringen, den Upstream für ungültig zu erachten, indem wir ihn mit einer `$network`-Regel sperren. Wenn das System zum Beispiel standardmäßig Google DNS verwendet, können wir die Regeln `|8.8.4.4^$network` und `|8.8.8.8^$network` hinzufügen, um Google DNS zu sperren.

## Nicht unterstützte Browser

### UC Browser: UC Browser, UC Browser für x86, UC Mini, UC Browser HD

Um den HTTPS-Datenverkehr filtern zu können, muss AdGuard ein Zertifikat zu den vertrauenswürdigen Benutzerzertifikaten des Geräts hinzufügen. Leider trauen UC-Browser den Benutzerzertifikaten nicht, so dass AdGuard dort keine HTTPS-Filterung durchführen kann.

- Um dieses Problem zu lösen, verschieben Sie das [Zertifikat in den Zertifikatspeicher des Systems](../solving-problems/https-certificate-for-rooted.md/)

:::note Kompatibilität

Erfordert Root-Zugriff.

:::

### Dolphin Browser: Dolphin Browser, Dolphin Browser Express

AdGuard kann seinen Datenverkehr nicht filtern, wenn er im Modus *Manueller Proxy* arbeitet, da dieser Browser die Proxy-Einstellungen des Systems ignoriert.

- Verwenden Sie den *Lokalen VPN*-Filtermodus, um dieses Problem zu lösen

### Opera mini: Opera mini, Opera mini mit Yandex

Opera mini leitet den Datenverkehr standardmäßig über einen Komprimierungs-Proxy, und AdGuard ist nicht in der Lage, ihn gleichzeitig zu dekomprimieren und zu filtern.

- Im Moment gibt es keine Lösung

### Puffin Browser: Puffin Browser, Puffin Browser Pro

Der Puffin-Browser leitet den Datenverkehr standardmäßig durch einen Komprimierungsproxy und AdGuard ist nicht in der Lage, ihn gleichzeitig zu dekomprimieren und zu filtern.

- Im Moment gibt es keine Lösung
