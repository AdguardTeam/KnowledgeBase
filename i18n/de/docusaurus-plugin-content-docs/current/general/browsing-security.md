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

### In browser extensions {#extension}

Unsere Browsererweiterungen können nur Domain-Namen prüfen, keine vollständigen URLs. Sie sind auch nicht in der Lage, Unterabfragen zu überprüfen. Das bedeutet, dass potenziell bösartige Elemente auf der Seite geladen werden, auch wenn die Seite selbst von einer sicheren Domain stammt. Die Erweiterung kann davor nicht schützen. Zu beachten ist auch, dass die Prüfung asynchron erfolgt, d. h. gleichzeitig mit dem Laden der Seite, so dass möglicherweise auch Malware geladen wird.

## Einrichten von Phishing- und Malware-Schutz in AdGuard-Produkten

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![Schutz vor Phishing und Malware](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Was wird gesperrt

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## Wartung unserer Filter

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### Möchten Sie mithelfen?

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### Falsch-positive Antworten

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## Wenn Sie eine Website für verdächtig halten

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
