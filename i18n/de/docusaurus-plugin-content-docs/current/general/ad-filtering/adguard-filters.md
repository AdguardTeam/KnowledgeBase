---
title: AdGuard-Filter
sidebar_position: 2
---

:::info

In diesem Artikel geht es um die Filter, die wir entwickeln und die in AdGuard vorinstalliert sind. Um sie zu überprüfen, können Sie [die AdGuard-App herunterladen](https://agrd.io/download-kb-adblock)

:::

In diesem Artikel geht es um die Filter, die wir für AdGuard und andere Werbeblocker-Software (z. B. uBlock Origin) erstellen. Filter sind Regelsätze im Textformat, die von AdGuard-Apps und -Programmen verwendet werden, um Werbung und datenschutzgefährdende Inhalte wie Banner, Pop-ups oder Tracker herauszufiltern. Filter enthalten Listen von Regeln, die auf ihrem Zweck basieren. Sprachspezifische Filter enthalten Regeln für entsprechende Sprachsegmente des Internets (z. B. Deutscher Filter). Aufgabenbasierte Filter gruppieren Regeln, die eine bestimmte Aufgabe erfüllen, wie z. B. Social Media-Filter oder Tracking-Schutzfilter. Das Aktivieren oder Deaktivieren eines Filters erleichtert das gleichzeitige Arbeiten mit der gesamten Liste der Regeln.

## AdGuard-Filter

- **Basisfilter** entfernt Werbung von Websites mit englischsprachigem Inhalt. Ursprünglich basierend auf [EasyList](https://easylist.to/) und von uns modifiziert. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- **Tracking-Schutzfilter** — umfassende Liste verschiedener Online-Zähler und Webanalysetools. Verwenden Sie es, um Ihre Aktionen online auszublenden und eine Verfolgung zu vermeiden. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- **URL-Tracking-Filter** verbessert den Datenschutz, indem er Tracking-Parameter aus URLs entfernt. Dieser Filter wird automatisch aktiviert, wenn Sie im Modus Tracking-Schutz die Tracking-Parameter entfernen. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- **Social-Media-Filter** entfernt zahlreiche „Mag ich”- und „Tweet”-Schaltflächen und andere Social Media-Integrationen auf beliebten Websites. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- **Belästigungsfilter** sperrt störende Elemente auf Webseiten. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt). Enthält die folgenden AdGuard-Filter (sie können alle separat vom Belästigungsfilter aktiviert werden):

    - **Cookie-Hinweise-Filter** sperrt Cookie-Hinweise auf Webseiten. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **Pop-up-Filter** sperrt alle Arten von Pop-ups, die für den Betrieb von Websites nicht notwendig sind. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **Filter gegen Mobile-App-Banner** sperrt Banner, die für mobile Anwendungen von Websites werben. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **Widgets-Filter** sperrt Widgets von Drittanbietern: Online-Assistenten, Live-Support-Chats, usw. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **Sonstige Belästigungen** sperrt Elemente, die nicht unter die gängigen Kategorien von Belästigungen fallen. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)

- **Suchanzeigen und Eigenwerbung von Websites blockieren** hebt das Sperren von Werbung auf, die nützlich sein könnte. Erfahren Sie mehr über diesen Filter auf [dieser Seite](../search-ads). [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- **Russischer Filter** entfernt Werbung von Websites in russischer Sprache. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- **Deutscher Filter** entfernt Werbung von deutschsprachigen Websites. Ursprünglich auf dem Filter [EasyList Germany](https://easylist.to/) basierend und von uns geändert. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- **Französischer Filter** entfernt Werbung von französischsprachigen Websites. Ursprünglich basiert er auf dem Filter [Liste FR](https://forums.lanik.us/viewforum.php?f=91). Aufgrund von Beschwerden haben wir den Filter jedoch modifiziert. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **Japanischer Filter** entfernt Werbung von Websites auf Japanisch. Ursprünglich basiert er auf dem [Fanboy's Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt)-Filter. Aufgrund von Beschwerden haben wir den Filter jedoch modifiziert. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **Niederländischer Filter** entfernt Werbung von Websites auf Niederländisch. Ursprünglich basiert er auf dem Filter [EasyList Dutch](https://easylist.to/). Aufgrund von Beschwerden haben wir den Filter jedoch modifiziert. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- **Spanisch/Portugiesisch-Filter** entfernt Werbung von Websites in Spanisch und Portugiesisch. Ursprünglich basiert er auf dem [Fanboy's Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt) Filter. Aufgrund von Beschwerden haben wir den Filter jedoch modifiziert. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **Türkischer Filter** entfernt Werbung von türkischsprachigen Websites. Von uns auf Grundlage von Benutzerbeschwerden erstellt. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- **Chinesischer Filter** entfernt Werbung von Websites in chinesischer Sprache. Ursprünglich basiert er auf dem Filter [EasyList China](https://github.com/easylist/easylistchina). Aufgrund von Beschwerden haben wir den Filter jedoch modifiziert. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **Ukrainischer Filter** entfernt Werbung von Websites in ukrainischer Sprache. Erfahren Sie mehr über diesen Filter auf [dieser Seite](https://adguard.com/en/blog/ukrainian-filter.html). [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_23_Ukrainian/filter.txt)
- **Experimenteller Filter** dient dazu, einige neue Filterregeln zu testen, die möglicherweise Konflikte verursachen und die Funktionalität von Websites beeinträchtigen können. Wenn diese Regeln ohne Probleme funktionieren, werden sie zu den Hauptfiltern hinzugefügt. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- **Filter gegen mobile Werbung** sperrt Werbung auf mobilen Geräten. Enthält alle bekannten mobilen Werbenetzwerke. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **DNS-Filter** — setzt sich aus mehreren anderen Filtern zusammen (AdGuard Basisfilter, Social-Media-Filter, Spyware Filter, Filter gegen mobile Werbung, EasyList und EasyPrivacy) und wurde speziell vereinfacht, um besser mit dem Sperren von Werbung auf DNS-Ebene kompatibel zu sein. Dieser Filter wird von [AdGuard DNS](https://adguard-dns.io/kb)-Servern verwendet, um Werbung und Tracking zu sperren. [Regeln anzeigen](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)
- **Quick Fixes-Filter** wird verwendet, um schnell kritische Probleme bei der Filterung von Inhalten auf beliebten Websites zu beheben, ohne die MV3-Erweiterung zu aktualisieren. [Regeln anzeigen](https://filters.adtidy.org/extension/chromium-mv3/filters/24.txt)

## AdGuard-Filterrichtlinie

Unsere Filterrichtlinie definiert, was AdGuard-Filter sperren sollen und was nicht, sowie die Regeln für das Hinzufügen und Entfernen von Regeln aus Filtern. Lesen Sie den vollständigen Text der [AdGuard-Filterrichtlinie](../filter-policy) für detaillierte Informationen.

## Zu AdGuard-Filtern beitragen

Wir sind mit einer einzigartigen Community gesegnet, die AdGuard nicht nur liebt, sondern auch etwas zurückgibt. Viele Menschen engagieren sich auf unterschiedliche Weise, um die Benutzerfreundlichkeit von AdGuard für alle zu verbessern. Sie sind herzlich eingeladen, sich der Truppe anzuschließen und etwas zu bewirken. Wir werden unseren Teil dazu beitragen und die aktivste Community gerne belohnen. Was können Sie also tun?

### Probleme melden

Wir sind darauf angewiesen, dass die Community uns über Probleme mit unseren Filtern informiert. Es hilft uns, unsere Zeit effizienter zu nutzen und die Filter ständig zu aktualisieren. Um einen Bericht einzureichen, verwenden Sie bitte dieses [Web Reporting Tool](https://agrd.io/report).

### Filterregeln vorschlagen

Sie finden viele offene Fragen im [GitHub Filter Repository](https://github.com/AdguardTeam/AdguardFilters/issues). Sie beziehen sich jeweils auf ein Problem mit einer Website, z. B. eine fehlende Anzeige oder ein falsch positives Ergebnis. Wählen Sie ein Thema und schlagen Sie Ihre eigenen Regeln in den Kommentaren vor. Wir prüfen Ihre Vorschläge und fügen Ihre Regeln nach Genehmigung zu den AdGuard-Filtern hinzu.

Hier finden Sie die [offizielle Dokumentation](../create-own-filters) zur Syntax der AdGuard-Filterregeln. Bitte lesen Sie ihn sorgfältig durch: Er wird Ihnen helfen, Ihre eigenen Filterregeln zu erstellen.

### Andere Möglichkeiten, mitzuwirken

Hier ist [eine spezielle Seite](https://adguard.com/contribute.html) für Leute, die auf andere Weise zu AdGuard beitragen wollen.
