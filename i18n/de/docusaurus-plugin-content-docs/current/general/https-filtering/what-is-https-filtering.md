---
title: Was ist HTTPS-Filterung?
sidebar_position: 1
---

### Was ist HTTPS?

HTTPS (HyperText Transfer Protocol Secure) ist eine Erweiterung des HTTP-Protokolls, das zur Erhöhung der Sicherheit Verschlüsselung unterstützt. Dieses Protokoll wird für die sichere Übertragung wertvoller Informationen wie persönlicher Daten, Kreditkartenangaben usw. verwendet.

Die Verwendung von HTTPS ist von großem Vorteil, da der verschlüsselte Datenverkehr vor dem Abhören durch Dritte geschützt ist, was wir nur begrüßen können. Die Akzeptanz von HTTPS hat in den letzten Jahren zugenommen, vor allem weil es von Google [gefördert wird](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) und auch wegen des Aufkommens der kostenlosen Zertifizierungsstelle [Let's Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

Das folgende Diagramm beschreibt den Unterschied zwischen dem einfachen HTTP-Protokoll und dem sicheren HTTPS-Protokoll.

![Was ist HTTPS?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### Was ist ein Sicherheitszertifikat?

Einfach ausgedrückt: HTTPS bedeutet Datenverschlüsselung. Aber es gibt immer noch ein Problem: Wie können Sie sicher sein, dass Sie eine verschlüsselte Verbindung mit der richtigen Website hergestellt haben? Hier kommen die Sicherheitszertifikate ins Spiel. Ein Zertifikat dient als Nachweis dafür, dass die Website wirklich die ist, welche sie vorgibt zu sein. Verfügt eine Website nicht über ein solches Zertifikat oder enthält das Zertifikat falsche Informationen, kann der Browser keine sichere Verbindung herstellen. Es ist wichtig, dass das von einer Website verwendete Zertifikat von einer Zertifizierungsstelle (CA) ausgestellt ist, der Ihr Browser vertraut. Eine solche Zertifizierungsstelle garantiert, dass das SSL-Zertifikat tatsächlich auf den Inhaber der Website ausgestellt ist.

### Warum muss AdGuard in der Lage sein, HTTPS-Verbindungen zu filtern?

Die meisten Websites verwenden jetzt HTTPS, und dies gilt auch für die Werbung. Hier sind einige beliebte Websites, auf denen Sie ohne HTTPS-Filterung keine Werbung entfernen können: youtube.com, facebook.com und x.com.

### Wie funktioniert die HTTPS-Filterung?

Wenn es einfach wäre, wäre HTTPS nicht so sicher. Wenn ein Browser versucht, eine Verbindung zu einem Server herzustellen, baut AdGuard zwei sichere Verbindungen auf: eine mit dem Browser (oder einer anderen App) und die andere mit dem Server. Der Browser muss AdGuard und den von ihm hergestellten Verbindungen vertrauen. Zu diesem Zweck generiert AdGuard ein spezielles (und einzigartiges) Stammzertifikat und installiert es im System und bei Bedarf auch in einigen Browsern (z.B. Firefox). AdGuard kann nun die Datenpakete innerhalb der sicheren Verbindung sehen und so seine Aufgabe erfüllen — Werbung und Tracker zu sperren.

Zum besseren Verständnis haben wir diesen Prozess abgebildet:

![How HTTPS filtering works](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### Ist mein Datenverkehr weiterhin verschlüsselt und sicher?

Ja, natürlich! Ihre Verbindung mit einem Remote-Server bleibt verschlüsselt und sicher. AdGuard, just like a browser, checks the server’s certificate before determining if the connection should be filtered or not.

Die HTTPS-Filterung hat jedoch ihre Nachteile. Die wichtigste ist, dass sie das eigentliche Zertifikat der Website vor dem Browser verbirgt. Stattdessen sieht der Browser das von AdGuard ausgestellte Zertifikat.

Aus diesem Grund haben wir zusätzliche Maßnahmen zur Verbesserung der Verbindungssicherheit ergriffen.

### Finanzwebseiten und Webseiten mit sensiblen persönlichen Daten

Standardmäßig filtert AdGuard keine Informationen auf Websites von Banken, Zahlungssystemen oder Websites mit wertvollen persönlichen Daten. Wir führen eine Liste von [Tausenden von Ausschlüssen](https://github.com/AdguardTeam/HttpsExclusions).

Wenn Sie der Meinung sind, dass eine Website in diese Liste aufgenommen werden sollte, lassen Sie es uns bitte [wissen](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Extended Validation (EV)-Zertifikate

Mit AdGuard können Sie das Filtern für alle Websites deaktivieren, die erweiterte Validierungszertifikate verwenden.

Ein EV-Zertifikat bietet ein höheres Sicherheitsniveau und mehr Garantien als ein normales Zertifikat und beweist, dass die Website nicht betrügerisch oder gefälscht ist.

### Probleme im Zusammenhang mit der HTTPS-Filterung

A [2017 study](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf) found that 5 to 10% of HTTPS connections were established by HTTPS filtering applications. Dies geschieht in der Regel durch verschiedene Arten von Antiviren-Software. Die schlechte Nachricht ist, dass 24 von 26 getesteten Antivirenprogrammen das Sicherheitsniveau der Verbindungen auf unterschiedliche Weise herabsetzen, während zwei Drittel der Verbindungen anfällig für Hackerangriffe sind.

Die Forscher kamen zu einem einfachen Schluss: Die Internet-Sicherheitsgemeinschaft sollte Anwendungen, die sichere Verbindungen filtern, besondere Aufmerksamkeit schenken. Und die Entwickler solcher Software müssen der Qualität der Filterimplementierung große Aufmerksamkeit schenken.

Wir möchten darauf hinweisen, dass AdGuard in der oben genannten Studie nicht getestet wurde. Wir haben die Schätzungen nach ihrer Testreihe durchgeführt, und zum Zeitpunkt der Prüfung hätten wir die maximale Punktzahl erhalten können — A\*. Dieses Ergebnis ist jedoch nicht perfekt. Während der Studie stellten die Forscher einige Punkte fest, die in der endgültigen Bewertung nicht berücksichtigt wurden.

Wir von AdGuard stimmen diesen Schlussfolgerungen voll und ganz zu. Wir wollen auch offen sein und über die Probleme sprechen, die wir derzeit haben, und über die Schritte, die wir unternehmen, um die Qualität und Sicherheit des Filtermechanismus zu verbessern. Die Liste dieser Probleme ist nach Priorität geordnet.

Die meisten der in der obigen Studie entdeckten Probleme stehen im Zusammenhang mit den Mechanismen zur Validierung von Zertifikaten. Darauf wollen wir uns zunächst konzentrieren. Wir arbeiten an einer separaten Bibliothek zur Zertifikatsvalidierung. Außerdem wollen wir die Software als Open Source anbieten. Ein [separater Artikel](../known-issues) listet alle bekannten Nachteile der HTTPS-Filterung in AdGuard und unsere Pläne, diese zu beheben, auf.

#### Probleme mit der HTTPS-Filterung unter Android 7+

[Ab Android 7](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html) müssen Entwickler explizit angeben, dass ihre Apps den vom Benutzer installierten Zertifikaten vertrauen. Nicht jeder will das, oder macht sich die Mühe. Was bedeutet das für AdGuard? AdGuard installiert ein Benutzerzertifikat, um den HTTPS-Verkehr filtern zu können. Wenn eine Anwendung diesem Zertifikat nicht vertraut, wird ihr HTTPS-Datenverkehr nicht gefiltert. Was ist zu tun?

Zunächst einmal ist zu erwähnen, dass viele Anwendungen (auch moderne) immer noch auf Benutzerzertifikate vertrauen. In dieser Hinsicht hat sich nichts geändert. Auch fast alle Browser vertrauen solchen Zertifikaten. Es mag einige exotische Browser geben, bei denen dies nicht der Fall ist, aber sie sind eine seltene Ausnahme von der gängigen Praxis.

Wenn Ihr Gerät gerootet ist, können Sie das AdGuard-Zertifikat in den Systemspeicher verschieben. Auf diese Weise müssen Sie sich keine Gedanken über die Berechtigungen machen, die eine bestimmte App hat oder nicht hat — der HTTPS-Verkehr wird für moderne Apps genauso gut gefiltert wie für ältere. Bitte beachten Sie, dass in diesem Fall einige zusätzliche Sicherheitseinschränkungen (z.B. HPKP oder `Expect-CT`) für AdGuard gelten.

### Wie kann man die HTTPS-Qualität manuell überprüfen?

Es gibt mehrere Websites, auf denen Sie die Qualität Ihrer HTTPS-Verbindung überprüfen können. Diese Websites prüfen, ob Ihr Browser (oder, in unserem Fall, Ihr Browser plus AdGuard) für gängige Sicherheitslücken anfällig ist. If you plan to use any program that filters HTTPS, not necessarily AdGuard (e.g., an antivirus), we advise that you check the connection quality using these websites.

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
