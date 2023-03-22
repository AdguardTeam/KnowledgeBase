---
title: Funktionsübersicht
sidebar_position: 1
---

AdGuard für Mac verdient als eines unserer Hauptprodukte eine vollständige Anleitung. Wir haben uns entschlossen, neuen Benutzern zu helfen und einige feinere, aber weniger offensichtliche Punkte hervorzuheben, die selbst erfahrene AdGuard für Mac-Fans möglicherweise übersehen haben.

AdGuard für Mac ist ein eigenständiger Werbeblocker für macOS. Während AdGuard für Safari aufgrund der Inhaltsblockierung von Safari [in seinen Werbeblockerfunktionen](https://adguard.com/en/blog/youtube-ads-in-safari-explained.html) eingeschränkt ist, ist AdGuard für Mac vollwertig und kann seinen Benutzern mehr bieten. Wir stellen Ihnen die wichtigsten Funktionen vor.

## Startseite

![Startseite *mobil](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Mainscreen.png)

Das erste, was Sie beim Start sehen, ist ein Bildschirm mit einem großen Ein / Aus-Schalter. Unten werden verschiedene Statistiken (Werbung blockiert, Tracker blockiert, gespeicherte Daten) seit der Installation oder seit dem letzten Zurücksetzen der Statistiken angezeigt.

Um mit der Konfiguration von AdGuard für Mac zu beginnen, müssen Sie auf das Zahnrad in der oberen rechten Ecke des Fensters klicken und „Einstellungen“ auswählen.

## Allgemeine Einstellungen

![Allgemein](https://cdn.adtidy.org/content/kb/ad_blocker/mac/General.jpg)

Die Beschreibungen unter den Optionstiteln scheinen selbsterklärend zu sein, aber dennoch:

**Sprachspezifische Filter automatisch aktivieren**. Wenn Sie diese Option aktivieren, müssen Sie beim Besuch einer fremden Website nicht alle Filter manuell auswählen, was Ihnen Zeit spart.

**AdGuard beim Anmelden starten**. Eine einfache und bequeme Funktion, mit der Sie sich keine Gedanken darüber machen müssen, ob Sie Ihren Werbeblocker aktiviert haben oder nicht, und einfach sicher sein können, dass Werbung immer blockiert wird.

**Werbung in Suchmaschinen und Eigenwerbung der Websites zulassen**. Diese Option kann für Online-Käufer nützlich sein: Anstatt alle Ihre bevorzugten E-Shops und Websites zur Zulassungsliste hinzuzufügen, können Sie einfach [Eigenwerbung und Suchanzeigen ausschließen](/general/ad-filtering/search-ads) vom Filtern. AdGuard erkennt diese automatisch und lässt sie zu, während alles andere werbeähnlich entfernt wird.

**Menüleistensymbol ausblenden**. Wenn Sie das Menüleistensymbol nicht sehen möchten, können Sie es ausblenden. Aber keine Sorge: Auch wenn Sie es aus der Menüleiste entfernen, läuft AdGuard im Hintergrund weiter.

Aus demselben Fenster können Sie auf die oben erwähnte Zulassungsliste zugreifen, zu der Sie Websites hinzufügen können, die AdGuard nicht filtern soll. Klicken Sie einfach auf die entsprechende Schaltfläche am unteren Rand des Fensters.

## Filter

![Filter](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Filters.jpg)

Filter sind die wichtigste treibende Kraft hinter dem Werbeblocker-Modul. Um zu verstehen, wie das Filtern funktioniert, machen Sie sich mit unserem [umfassenden Artikel](https://adguard.com/en/blog/how-ad-blocking-is-done.html) vertraut. Aber im Wesentlichen sind Filterlisten Sätze von Regeln, die in einer speziellen Sprache geschrieben sind, und Ihr Werbeblocker ist ein Interpreter dieser Regeln, der sie dann umsetzt. Das Ergebnis ist, dass Sie keine Werbung mehr auf Websites sehen und das Web-Erlebnis genießen.

Einige Filterlisten (AdGuards Basisfilter, Belästigungsfilter, EasyList usw.) sind vorinstalliert, während andere spezifische, an Ihre Vorlieben angepasste, zusätzlich heruntergeladen und Ihrem Programm hinzugefügt werden können.

Neben den allgemeineren und universell einsetzbaren Filtern (wie Basisfilter) bietet AdGuard eine umfangreiche Menge an Filtern für jeden Anlass:
* Filter zur Verhinderung von Tracking (Tracking-Schutzfilter),
* sprachspezifische Werbefilter, die Inhalte in einer ausgewählten Sprache blockieren,
* Social-Media-Filter, der die Schaltflächen „Gefällt mir“ und „Teilen“ entfernt,
* Belästigungsfilter für Cookie-Warnungen, In-Page-Pop-ups und andere der gleichen Art,
* und sogar ein Filter, der einige Anzeigen entsperrt, anstatt sie zu blockieren – Filter für Suchanzeigen und Eigenwerbung.

AdGuard-Filter werden automatisch aktualisiert. Unsere Entwickler erstellen sie alle basierend auf dem erhaltenen Benutzerfeedback. Sie können anderen AdGuard-Benutzern (und perspektivisch sich selbst) jederzeit helfen, indem Sie uns Berichte direkt aus dem Assistenten der App oder von der [-Website](https://agrd.io/report) senden. Wenn Sie mehr über AdGuard-Filter wissen möchten, finden Sie hier [einige Informationen](/general/ad-filtering/adguard-filters).

## Benutzerregeln

![Benutzerregeln](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Filters.jpg)

Ein weiterer wichtiger Bestandteil des Werbeblocker-Moduls sind seine Benutzerregeln. Wenn Sie etwas Programmiererfahrung haben und Ihre eigenen Regeln erstellen möchten, die besser angepasst sind als die bereits verfügbaren Standardfilter, dann können Sie sich daran versuchen. Die Syntax, die AdGuard für seine Filterregeln verwendet, basiert auf der jeder anderen Werbeblockierung-Erweiterung, jedoch mit erheblichen Ergänzungen, die ihre Möglichkeiten erweitern. Der gesamte Prozess der Regelerstellung in all seinen Nuancen wird in diesen umfassenden Anleitungen beschrieben. Wenn Sie also einige benutzerdefinierte Regeln schreiben und überprüfen möchten, wie gut Sie programmieren können, folgen Sie einfach den Schritten, die wir in [diesem Artikel](/general/ad-filtering/create-own-filters) beschrieben haben.

## DNS

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/DNS.jpg)

Die DNS-Filterung ist eine der nützlichsten Funktionen, dank derer Ihr gesamter DNS-Verkehr verschlüsselt wird. Wenn Sie den Standard-DNS-Server Ihres Internetanbieters verwenden, ist Ihr DNS-Datenverkehr wahrscheinlich nicht verschlüsselt und anfällig für Snooping und Hijacking.

Im DNS-Panel können Sie die DNS-Server von bekannten DNS-Anbietern auswählen oder sogar benutzerdefinierte DNS-Server hinzufügen. Sie können auch Domains zur DNS-Sperrliste oder -Zulassungsliste hinzufügen und komplizierte Regeln mithilfe der DNS-Regelsyntax hinzufügen. Schließlich können Sie [DNS-Filter Ihrer Wahl hinzufügen](https://filterlists.com).

## Privatsphäre

![Privatsphäre](https://cdn.adtidy.org/content/kb/ad_blocker/mac/StealthMode.jpg)

Dieses Modul ist ein sehr nützliches Tool, das Ihnen hilft, Ihre Privatsphäre vor Websites zu wahren, die versuchen, Informationen über Sie wie Ihre IP-Adresse, Computerparameter, Browsereinstellungen und sogar die Startseite, von der Sie weitergeleitet wurden, zu speichern, ganz zu schweigen vom Inhalt des Einkaufswagens wenn wir von Webshops sprechen. Wenn diese Liste von Informationen, die möglicherweise mit zwielichtigen Dritten geteilt werden können, Sie nicht zweimal nachdenken lässt, dann dürfen wir hinzufügen, dass sie in den meisten Fällen auch solche persönlichen Daten wie Ihr Alter, Ihr Jahreseinkommen, Ihre Krankengeschichte, Ihre physische Adresse und die Namen Ihrer Kinder erhalten. Das Eliminieren von Dingen wie unerwünschten Cookies oder das heimliche Einfügen von Tracking-Parametern in Ihren Browser ist das, was der Privatsphärenmodus am besten kann.

Der Privatsphären-Modus enthält eine Vielzahl von Optionen, die eine flexible Konfiguration gewährleisten. Sie sind in mehrere Kategorien unterteilt, und für einen unvorbereiteten Benutzer werden viele von ihnen verwirrend und vielleicht sogar kompliziert erscheinen. Wir haben jede Option mit einem Hinweis versehen, um den Mangel auszugleichen – Hinweise werden angezeigt, wenn Sie mit der Maus über das Symbol mit einem Fragezeichen fahren. Wenn Sie dennoch mehr über das gesamte Konzept erfahren möchten, empfehlen wir Ihnen, mit diesem [Artikel](/general/stealth-mode) fortzufahren.

## Internetsicherheit

![Sicherheit](https://cdn.adtidy.org/content/kb/ad_blocker/mac/BrowsingSecurity.jpg)

Als nächstes haben wir das Sicherheitsfenster, in dem sich ein Modul befindet, das auch als Internetsicherheit bekannt ist. Es bietet Schutz vor bösartigen und Phishing-Websites.

> Beachten Sie, dass AdGuard kein Antivirus ist, sondern ein völlig anderes Programm. Es zeigt Ihnen eine Warnung, wenn Sie im Begriff sind, auf eine infizierte Domain zu gehen, aber es kann Sie nicht daran hindern, etwas Verdächtiges herunterzuladen oder Ihnen helfen, mit bereits vorhandenen Viren fertig zu werden. Phishing ist ein weit verbreiteter Internetbetrug, der darauf abzielt, persönliche Daten (Passwörter, Bankkontodaten usw.) zu stehlen. Es wird mithilfe gefälschter Websites durchgeführt, die beliebte Websites oder echte Dienste wie Webshops oder soziale Netzwerke nachahmen. Viele Phishing-Websites haben URLs, die sich nur in wenigen Symbolen von den echten unterscheiden, um Sie abzuschrecken. Wenn ein Benutzer seine Daten auf einer solchen Website eingibt, landen sie definitiv in den falschen Händen.

Internetsicherheit bietet starken Schutz vor solchen Vorfällen. Gleichzeitig werden die persönlichen Daten des Nutzers nirgendwo übertragen, und die AdGuard-Server wissen nicht, welche Websites der Nutzer besucht, da die Sicherheitsprüfung nicht über die offene Webadresse (URL), sondern über Hash-Präfixe erfolgt (Hash ist eine bestimmte Datenstruktur, die jede zur Basis hinzugefügte Adresse eindeutig macht).

Einige Websites sind selbst nicht bösartig, aber sie können Elemente enthalten, die von anderen Websites in ihre Struktur eingebaut wurden. Im Gegensatz zu Browser-Plugins prüft das Internetsicherheit-Modul jedes Objekt, das in eine Website eingebaut ist, und gewährleistet so maximalen Schutz.

Wenn Sie uns bei der Perfektionierung dieses Moduls helfen möchten, können Sie das untere Kästchen neben dem Satz „Helfen Sie uns bei der Entwicklung von Browsing-Sicherheitsfiltern“ markieren. Dadurch kann Ihr Computer uns relevante Informationen über betrügerische Websites senden, auf die Sie beim Surfen im Internet stoßen könnten – und unsere Entwickler werden sicherstellen, dass sie am Ende Ihrer Sperrliste gesperrt werden.

## Browser-Assistent

![Assistent](https://cdn.adtidy.org/content/kb/ad_blocker/mac/BrowserAssistant.jpg)

Die Hauptfunktion des AdGuard Browser-Assistenten besteht darin, die Filterung direkt vom Browser aus zu verwalten. Früher war es ein einfaches Benutzerskript, das in die AdGuard für Mac-App integriert wurde, die dann zu einer vollwertigen Browsererweiterung wurde. Erfahren Sie mehr über die [Vorteile, die sie bietet](../browser-assistant).

![Pop-up-Menü des Assistenten *mobil](https://cdn.adtidy.org/content/kb/ad_blocker/mac/safari_assistant_pop-up_menu.jpg)

Bei der Erstinstallation von AdGuard (während des Einführungsprozesses) werden Sie aufgefordert, den Browser-Assistenten für Ihren Standardbrowser zu installieren. Falls Sie es verpasst haben, können Sie es [jederzeit für jeden Browser](https://adguard.com/en/adguard-assistant/overview.html) herunterladen.

## Erweiterungen

![Erweiterungen](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Extensions.jpg)

Erweiterungen sind kleine Programme, die genau das tun, was ihr Name andeutet – sie erweitern die Funktionalität. Und AdGuard verwendet mehrere eigene Erweiterungen, auch Userscripts genannt, um seinen Funktionsumfang zu erweitern:

**1. AdGuard Assistent** (Legacy-Version) Diese Erweiterung unterstützt den Benutzer beim Ändern grundlegender AdGuard-Einstellungen im Browser, ohne dass die App selbst geöffnet werden muss. Wie der Browser-Assistent funktioniert auch der Legacy-Assistent mit allen macOS-kompatiblen Browsern. Mit diesem kleinen Tool können Sie mehrere Dinge tun, ohne den Browser verlassen zu müssen: eine bestimmte Website auf die Liste der nicht blockierten Seiten setzen, ein besonders störendes Element auf der Seite auswählen und blockieren, die Website melden, wenn sie es trotzdem schafft, Werbung zu Ihnen durchzuschleusen.

> Beachten Sie, dass es sich bei dieser Version des Assistenten um eine alte Version handelt, die auf neuen Systemen nicht mehr verwendet werden kann, da sie durch den vollwertigen Browser-Assistenten ersetzt wurde. Der ältere Assistent kann jedoch hilfreich sein, wenn es keine Browser-Assistent-Erweiterung für Ihren Browser gibt.

**2. AdGuard Extra** wird verwendet, um die komplizierteren Fälle von Werbeblockern zu lösen, denen Sie begegnen könnten. Wir empfehlen Ihnen, es immer eingeschaltet zu lassen, es sei denn, Sie haben einen schwerwiegenden Grund, dies nicht zu tun.

**3. AdGuard Popup-Blocker** verhindert, dass all diese lästigen Popup-Fenster geöffnet werden, wenn Sie Websites anzeigen. Sperrt Werbe-Pop-ups auf Websites.

Eine der wichtigen Funktionen von AdGuard für Mac ist, dass die Anwendung als browserübergreifender Userscript-Manager fungieren kann. Sie können ganz einfach beliebige Skripte hinzufügen und vorhandene verwalten, ohne jedes Mal den Browser wechseln zu müssen.

## Netzwerk

![Netzwerk](https://cdn.adtidy.org/content/kb/ad_blocker/mac/NetworkFiltering.jpg)

Dieses letzte Panel ist der Netzwerkfilterung gewidmet, und Sie finden hier zusätzliche Funktionen. Wir empfehlen, die ersten beiden zu aktivieren: „Anwendungen automatisch filtern“ und „HTTPS-Protokoll filtern“. Dies ist eine wichtige zusätzliche Vorsichtsmaßnahme, um Ihren Webspace besser zu filtern. HTTP ist das primäre Protokoll zur Übertragung von Informationen über das Internet. Die meisten Daten, einschließlich Werbung, werden darüber übertragen, aber es hat einen Nachteil — die Verbindung ist unverschlüsselt. Dank der HTTPS-Filterfunktion von AdGuard wird nicht nur der HTTP-Verkehr gefiltert, sondern auch der HTTPS-Verkehr (S steht für „sicher“).

Außerdem gibt es die Optionen „Websites mit EV-Zertifikaten nicht filtern“ und „AdGuard als HTTP-Proxy verwenden“. Extended Validation (EV) SSL-Zertifikate bieten eine stärkere Sicherheitsgarantie; die Inhaber solcher Websites müssen ein gründliches und weltweit standardisiertes Identitätsprüfungsverfahren durchlaufen, das durch EV-Richtlinien definiert ist. Aus diesem Grund vertrauen einige Benutzer Websites mit solchen Zertifikaten und ziehen es vor, sie nicht zu filtern.

Was die zweite Option betrifft – nun ja, tatsächlich können Sie AdGuard als normalen HTTP-Proxy-Server verwenden. Der gesamte Datenverkehr, der über diese Schnittstelle läuft, wird gefiltert. Dieser Proxy wird auch in Ihrem lokalen Netzwerk verfügbar sein, so dass Sie ihn zur Filterung des Datenverkehrs auf anderen Geräten verwenden können, die den Proxy direkt erreichen können. Um den Datenverkehr auf einem anderen mit dem Proxy verbundenen Gerät zu filtern, müssen Sie dort ein AdGuard-Root-Zertifikat installieren. Nachdem Sie den Proxy konfiguriert haben, öffnen Sie Ihren Browser und gehen Sie auf [diese Seite](http://local.adguard.org/cert).

## Andere Optionen

Es gibt andere nützliche AdGuard-Optionen, die in diesem Artikel nicht unbemerkt bleiben sollten, da sie viel zur Benutzererfahrung beitragen.

### Lizenz

Zuerst gibt es die Registerkarte Lizenz, die Sie über das Dropdown-Hauptmenü öffnen können (diejenige, die geöffnet wird, sobald Sie auf das Zahnradsymbol oben rechts im Hauptfenster klicken). Auf dieser Registerkarte können Sie sehen, welchen Lizenztyp Sie verwenden, seinen Status und seine Gültigkeitsdauer überprüfen.

![Lizenz](https://cdn.adtidy.org/content/kb/ad_blocker/mac/License.jpg)

Auf derselben Registerkarte können Sie Ihren Lizenzstatus aktualisieren, Ihre Lizenz erneuern oder den Lizenzschlüssel mit den entsprechenden Schaltflächen zurücksetzen.

### Support

Klicken Sie auf das Zahnradsymbol in der oberen rechten Ecke, wählen Sie „Support“ und Sie können einen Fehlerbericht oder eine Feature-Anfrage an unser Support-Team senden. Stellen Sie jedoch sicher, dass Sie Ihre echte E-Mail-Adresse hinzufügen, da die Nachricht ohne sie nicht gesendet wird.

![Support](https://cdn.adtidy.org/content/kb/ad_blocker/mac/Support.jpg)

Um eine verpasste Anzeige oder eine defekte Website zu melden, folgen Sie bitte dem Link über dem Nachrichtenfenster, wir verwenden ein separates Meldetool für diese Art von Problemen.

Es ist möglich, Ihrer Nachricht einen Diagnosebericht beizufügen, Sie müssen nur das Kontrollkästchen im unteren Teil der Registerkarte aktivieren.

### Updates prüfen

Zu guter Letzt. Sie können nach Filter- und Programmaktualisierungen suchen, indem Sie auf die entsprechenden Menüoptionen im Dropdown-Menü klicken (klicken Sie auf das Zahnradsymbol, um es zu sehen).
