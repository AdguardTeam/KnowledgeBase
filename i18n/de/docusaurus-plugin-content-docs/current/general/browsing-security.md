---
title: Schutz vor Phishing und Malware
sidebar_position: 3
---

Phishing und Malware sind nach wie vor ein häufiges Problem. Um die digitale Sicherheit zu erhöhen, haben wir spezielle Filter in die AdGuard-Produkte integriert, die Sie vor bösartigen und Phishing-Websites schützen. Bis heute haben wir über 15 Millionen Websites kategorisiert und eine Datenbank mit 1,5 Millionen Websites aufgebaut, die für Phishing und Malware bekannt sind. Anhand dieser Datenbank überprüft AdGuard die von Ihnen besuchten Websites, um Sie vor Online-Bedrohungen zu schützen.

:::note Wichtig

Wir sammeln und verwenden grundsätzlich keine Informationen über die von Ihnen besuchten Websites.

:::

## Wie werden Websites von AdGuard überprüft?

Jedes Mal, wenn Sie eine Website besuchen, tauscht Ihr lokaler Client Informationen mit unserem Backend-Server in Form von Hashes und Hash-Präfixen aus. Auf der Grundlage dieses Austauschs bestimmt der lokale Client, ob die Website in der Datenbank für potenziell gefährliche Websites aufgeführt ist oder nicht. Es gibt einen Unterschied im Umfang dieser Prüfung für Apps und Erweiterungen.

### In Apps

AdGuard bietet den bestmöglichen Schutz, indem es sowohl die Seiten als auch alle auf ihnen geladenen Objekte überprüft. AdGuard prüft URLs und Domain-Namen anhand von Hash-Präfixen, nicht anhand der vollständigen URLs, so dass unsere Server keine Informationen über die von Ihnen besuchten Websites speichern und Ihre persönlichen Daten vollkommen sicher sind. Unsere Server antworten auf die Anfrage der App mit einer Liste aller möglichen Adressen, die mit dem Hash-Präfix übereinstimmen. Wenn eine potenzielle Bedrohung auf der Grundlage von Hash-Übereinstimmungen erkannt wird, wird der Zugriff auf diese Website sofort gesperrt.

![AdGuard-Warnung](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### In Browsererweiterungen {#extension}

Unsere Browsererweiterungen können nur Domain-Namen prüfen, keine vollständigen URLs. Sie sind auch nicht in der Lage, Unterabfragen zu überprüfen. Das bedeutet, dass potenziell bösartige Elemente auf der Seite geladen werden, auch wenn die Seite selbst von einer sicheren Domain stammt. Die Erweiterung kann davor nicht schützen. Zu beachten ist auch, dass die Prüfung asynchron erfolgt, d. h. gleichzeitig mit dem Laden der Seite, so dass möglicherweise auch Malware geladen wird.

## Einrichten von Phishing- und Malware-Schutz in AdGuard-Produkten

- **Für Windows**: Aktivieren Sie das Modul *Internetsicherheit* im Menü *Einstellungen*

    ![Internetsicherheit in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Für Mac**: Aktivieren Sie das Modul *Sicherheit* in *Einstellungen*

    ![Sicherheit in macOS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Für Android**: Aktivieren Sie *Internetsicherheit* im Tab *Schutz*

    ![Internetsicherheit in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **Für iOS**: Obwohl es kein separates Modul gibt, können Sie zu *Safari-Schutz* → *Filter* → *Sicherheit* wechseln und die verfügbaren Filter aktivieren. Aktivieren Sie außerdem *DNS-Schutz* und wählen Sie einen der AdGuard DNS-Server

    ![Sicherheit in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **Für Browsererweiterungen**: Aktivieren Sie *Schutz vor Phishing und Malware* im Tab *Einstellungen*. Um den Schutz zu verbessern, gehen Sie zu *Filter* → *Sicherheit* und aktivieren Sie die Filter

    ![Schutz vor Phishing und Malware](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **Für Privates AdGuard DNS:** Aktivieren Sie den Malware-Schutz in *Servereinstellungen* unter *Sicherheit*

    ![Sicherheit im DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Was wird gesperrt

Wir bieten zwei primäre Filter an: einen, der vor Phishing- und betrügerischen Websites schützt, die versuchen, Benutzeranmeldeinformationen zu stehlen, und einen weiteren, der den Zugriff auf Websites sperrt, von denen bekannt ist, dass sie Malware verbreiten, was zu Datenverlust, Informationslecks oder Schäden an Ihrem Gerät führen könnte. Diese Filter schützen Sie auch vor Websites mit verschiedenen Betrugsversuchen und betrügerischen Machenschaften. Ausführlichere Informationen finden Sie in diesem [Wikipedia-Artikel](https://en.wikipedia.org/wiki/Phishing).

## Wartung unserer Filter

AdGuard unterhält eine umfangreiche Datenbank mit Phishing- und Malware-Websites, die regelmäßig und automatisch aktualisiert wird, sobald neue Bedrohungen entdeckt werden. Wir sammeln Informationen aus einer Vielzahl von zuverlässigen, qualitativ hochwertigen Quellen, sowohl öffentlichen als auch von anderen Unternehmen, und fassen sie in einer gemeinsamen Datenbank über gefährliche Websites zusammen.

Wir analysieren automatisch Beschwerden über verdächtige Websites und verbringen viel Zeit damit, die Datenbank auf dem neuesten Stand zu halten, falsch positive Meldungen zu bereinigen und Mechanismen zu implementieren, um sie in Zukunft zu verhindern.

### Möchten Sie mithelfen?

Jede Hilfe ist willkommen! Wenn Sie auf eine Phishing- oder Malware-Website stoßen, melden Sie sie bitte an <support@adguard.com>.

### Falsch-positive Antworten

Gelegentlich werden den AdGuard-Filtern auch einige nicht bösartige Websites hinzugefügt. Wir tun unser Bestes, um den Prozentsatz der Falschmeldungen zu verringern, aber sie kommen trotzdem vor. Wenn Sie dieses Verhalten von AdGuard feststellen, melden Sie bitte den Fehlalarm an unseren technischen Support unter <support@adguard.com>.

## Wenn Sie eine Website für verdächtig halten

Wenn Sie vermuten, dass eine bestimmte Website gefährlich sein könnte, überprüfen Sie sie zunächst mit unserem [Sicherheits-Check-Tool](https://reports.adguard.com/welcome.html).

![Sicherheitsprüfung](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
