---
title: Wie Werbeblockierung funktioniert
sidebar_position: 1
---

AdGuard bietet viele Werbeblocker-Produkte für verschiedene Plattformen, jedes mit seinen eigenen einzigartigen Funktionen. Was sie aber alle eint, ist, dass sie Werbung und Tracker blockieren. In diesem Artikel wird beschrieben, wie Werbeblocker von innen funktionieren.

:::note

Die DNS-Filterung wird hier nicht behandelt. Es ist eine andere Art, Werbung zu sperren, mit ihren eigenen Vor- und Nachteilen. Folgen Sie diesem Link, um [mehr über DNS-Filterung](https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work) zu erfahren.

:::  

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Allgemeines Prinzip

Filterlisten, auch Filter genannt, sind das Herzstück eines jeden Werbeblockers. Filter sind buchstäblich Listen von Regeln, die in einer speziellen Syntax geschrieben sind. Werbeblocker können diese komplexe Syntax verstehen. Sie interpretieren die Filterregeln und führen auf der Grundlage der Regeln Aktionen für den Webverkehr durch: Sie sperren bestimmte Elemente, verändern Webseiten auf bestimmte Weise usw.

![Wie Werbeblocker funktionieren](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png)

## Filterlisten

Um die Funktionsweise von Werbeblockern besser zu verstehen, ist es wichtig, die grundlegenden Prinzipien der Filter zu kennen.

Die Filterregeln, aus denen die Filter bestehen, werden nicht automatisch erstellt. Sie werden von professionellen und freiwilligen Filterbetreuern entwickelt, die mithilfe von Browser-Entwicklerkonsolen und anderen Tools (wie dem Filterprotokoll von AdGuard) festlegen, welche Regeln eine bestimmte Anzeige oder einen Tracker sperren sollen. Diese Beschreibung des Prozesses ist sehr vereinfacht — einige Werbeanzeigen sind besonders schwer zu sperren und erfordern mehrere Regeln, mehrere Iterationen und die Verwendung einer komplexen Syntax.

Und selbst wenn eine Regel schließlich zu einem Filter hinzugefügt wird, bedeutet das nicht, dass sie dort für immer bleibt. Die Werbung ändert sich, die Möglichkeiten, dieselbe Werbung auf denselben Websites zu schalten, ändern sich, und die Filterregeln müssen sich ebenfalls ändern. Manchmal werden Regeln hinfällig, eine neue Werbung wird angezeigt oder eine neue Filterregel wird benötigt, um die gleiche Werbung zu sperren. Filter werden oft von einer Person gepflegt, aber selbst für ein Team von Betreuern ist es unmöglich, das gesamte Web ständig zu überwachen. Aus diesem Grund verfügen viele Werbeblocker über Tools, mit denen Sie auf einfache Weise Probleme mit dem Filter melden können.

![Filter-Aktualisierungsschema](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png)

Sie [haben Zugang zu einem speziellen Web Reporting Tool](https://reports.adguard.com/new_issue.html). Dank Benutzerbeschwerden können sich Filterentwickler auf die Korrektur ihrer Filterlisten konzentrieren und nicht darauf, das Internet nach neuen und alten nicht blockierten Anzeigen zu durchsuchen.

Filter können mehr, als nur Werbung zu blockieren. Es gibt Filter, die Tracking, Widgets für soziale Medien und lästige Cookies-Hinweise sperren. Verschiedene Benutzer können unterschiedliche Kombinationen von Filtern wählen, um ihren persönlichen Vorlieben zu entsprechen. Es gibt Websites wie [filterlists.com](https://filterlists.com/), die sich auf Filterlisten spezialisiert haben und über große Datenbanken verfügen.

Wir entwickeln und pflegen [unsere eigenen Filterlisten](../adguard-filters), die mit AdGuard oder anderen Werbeblockern verwendet werden können.

## Arten von Filterregeln

Es gibt viele Arten von Filterregeln, die unterschiedlichen Zwecken dienen. Abhängig von dem von Ihnen verwendeten Werbeblocker und insbesondere von Ihrem Betriebssystem werden einige Arten von Regeln möglicherweise nicht unterstützt.

### Grundlegende Filterregeln

Um auf einer Webseite oder in einer App angezeigt zu werden, muss die Werbung zunächst von einem Server geladen werden. Dazu muss der Browser oder die App eine Webanforderung senden. Die einfachste Methode, um zu verhindern, dass eine Werbung auf Ihrem Bildschirm angezeigt wird, besteht darin, diese Anfrage zu sperren, so dass sie den Server nicht erreicht und somit auch keine Antwort erfolgt.

Grundsätzlich können alle AdGuard Werbeblocker-Produkte Webanfragen gemäß den aktiven Filterregeln sperren. Diese Methode ist sehr effektiv, um die Werbung zu stoppen, hat aber auch einige Nachteile. Die offensichtlichste ist: Der Platz, den eine Werbung eingenommen hat, bleibt leer oder wird durch eine verbliebene Werbung besetzt.

### Kosmetische Filterregeln

Jede Webseite hat ein Document Object Model (DOM), ein HTML-Dokument, das die Struktur und die Elemente dieser Seite enthält. Da Werbung auch Seitenelemente sind, werden sie im DOM erfasst. Werbeblocker können Teile des DOM entfernen, während Filterregeln ihnen helfen zu verstehen, welche Teile Werbung sind und entfernt werden sollten und welche Teile intakt bleiben sollten.

Mit dieser Methode können Sie die oben erwähnten Leerräume und Reste von Werbung vermeiden und auch andere kompliziertere Aufgaben durchführen.

### HTML-Filterregeln

In den meisten Fällen reicht es aus, die oben genannten grundlegenden und kosmetischen Regeln zum Filtern von Werbung anzuwenden. Wenn es jedoch notwendig ist, den HTML-Code der Seite selbst zu ändern, bevor sie geladen wird, benötigen Sie Filterregeln für HTML-Inhalte. Mit diesen Regeln können Sie die HTML-Elemente festlegen, die ausgeschnitten werden sollen, bevor der Browser die Seite überhaupt lädt.

Diese Regeln sind recht kompliziert und erfordern, dass dem Werbeblocker bestimmte Zugriffsrechte eingeräumt werden, weshalb sie nicht von allen Plattformen unterstützt werden. Derzeit funktionieren diese Regeln nur im AdGuard-Add-on für Firefox und in den AdGuard-Apps für Windows, Mac und Android.

:::info

Es gibt noch andere Arten von Filterregeln, die jedoch mehr technisches Wissen erfordern, um ihre Funktionsweise zu verstehen. Wenn Sie daran interessiert sind, [sehen Sie sich unseren umfassenden Leitfaden zu Filterregeln in dem verlinkten Artikel an](../create-own-filters).

:::

## Arten der Anfragenbearbeitung in AdGuard

AdGuard bearbeitet Anfragen gemäß den aktivierten Filtern, Benutzerregeln und Einstellungen. Als Ergebnis kann eine Anfrage blockiert, geändert, zugelassen oder, wenn nichts damit geschieht, einfach nur verarbeitet werden.

Detaillierte Informationen darüber, wie jede Ihrer Anfragen von AdGuard behandelt wurde, finden Sie im *Filter-Protokoll* (AdGuard für Windows, AdGuard für Mac, AdGuard Browsererweiterung) oder *Letzte Aktivität* (AdGuard für iOS, AdGuard für Android).

Bezüglich der AdGuard-Filter können Sie auch [unsere Filterrichtlinie](../filter-policy)lesen, in der detailliert beschrieben wird, was jeder unserer Filter blockiert und warum.

### Beispiele für blockierte Anfragen

Der DNS-Filter von AdGuard sperrt Anfragen an Werbedomains, wie z.B. `ad.doubleclick.net`.

Der Filter „AdGuard Tracking Protection“ sperrt Tracking-Anfragen, wie z.B. `youtube.com/youtubei/log_event?`.

### Beispiele für zulässige Anfragen

Der AdGuard Basisfilter erlaubt auch werbefreie Anfragen, wie z.B. `www.google.com/complete/search?q=`.

Filter, die Suchanzeigen und Eigenwerbung entsperren, ermöglichen die Suche nach werbebezogenen Domains, wie `www.google.com/aclk?`.

Anfragen an Websites, die zur *Freigabeliste* hinzugefügt wurden, sind zulässig.

### Beispiele für geänderte Anfragen

Die Funktion Tracking-Schutz mit der Schutzstufe *Hoch* aktiviert den AdGuard URL-Tracking-Filter, der Anfragen verändert, indem er Tracking-Parameter aus ihnen entfernt:

`https://www.rentio.jp/products/ax-n1b?click_from=top_newitems` → `https://www.rentio.jp/products/ax-n1b`

`https://www.baseballchannel.jp/npb/183688/?ref=ise` → `https://www.baseballchannel.jp/npb/183688/`

`https://www.gog.com/game/spec_ops_the_line?pp=2863d7ae605104eeef364e3f164d3404e20f680c&gad_source=1` → `https://www.gog.com/game/spec_ops_the_line`

Bitte beachten Sie, dass *geänderte* Ereignisse, die Sie im Filter-Protokoll oder in der Letzten Aktivität sehen, sich nicht nur auf die Fälle beziehen, in denen eine Anfrage geändert wurde, sondern auch, wenn:

- etwas auf der Seite geändert wird (normalerweise durch kosmetische Regeln)
- die Antwort geändert wird
