---
title: Low-Level-Einstellungen
sidebar_position: 6
---

:::info

Dieser Artikel behandelt AdGuard für iOS, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

![Low-Level-Einstellungen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

Um die _Low-Level-Einstellungen_ zu öffnen, gehen Sie zu _Einstellungen_ → _Allgemein_ → (Aktivieren Sie den _Erweiterten Modus_, falls er deaktiviert ist) → _Erweiterte Einstellungen_ → _Low-Level-Einstellungen_.

Die meisten Einstellungen in diesem Abschnitt sollten nicht geändert werden: Verwenden Sie sie nur, wenn Sie sich sicher sind, was Sie tun, oder wenn das Support-Team Sie darum bittet. Einige Einstellungen können jedoch ohne Risiko geändert werden.

### IPv6 sperren {#blockipv6}

Bei jeder DNS-Anfrage, die zum Abrufen einer IPv6-Adresse gesendet wird, gibt unsere App eine leere Antwort zurück (als ob diese IPv6-Adresse nicht existieren würde). Jetzt gibt es eine Option, die IPv6-Adressen nicht zurückgibt. An dieser Stelle wird die Beschreibung dieser Funktion zu technisch: Die Konfiguration oder Deaktivierung von IPv6 ist ausschließlich Sache für fortgeschrittene Benutzer:innen. Für sie ist diese Funktion nützlich, für die anderen ist es nicht notwendig, ins Detail zu gehen.

### Bootstrap- und Fallback-Server {#bootstrap-fallback}

Fallback ist ein Backup-DNS-Server. Wenn Sie sich für einen DNS-Server entschieden haben und dieser nicht mehr funktioniert, ist ein Fallback erforderlich, um den Backup-DNS-Server einzustellen, bis der Hauptserver antwortet.

Bei Bootstrap ist es ein wenig komplizierter. Damit AdGuard für iOS einen benutzerdefinierten sicheren DNS-Server verwenden kann, muss unsere App zunächst ihre IP-Adresse abrufen. Zu diesem Zweck wird standardmäßig der System-DNS verwendet, aber manchmal ist dies aus verschiedenen Gründen nicht möglich. In solchen Fällen kann Bootstrap verwendet werden, um die IP-Adresse des ausgewählten sicheren DNS-Servers zu ermitteln. Hier sind zwei Beispiele, die zeigen, wann ein benutzerdefinierter Bootstrap-Server hilfreich sein kann:

1. Wenn ein Standard-DNS-Server des Systems nicht die IP-Adresse eines sicheren DNS-Servers zurückgibt und es nicht möglich ist, einen sicheren Server zu verwenden.
2. Wenn unsere App und das VPN eines Drittanbieters gleichzeitig verwendet werden und es nicht möglich ist, System DNS als Bootstrap zu verwenden.
