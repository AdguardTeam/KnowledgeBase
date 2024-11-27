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

Filter können mehr, als nur Werbung zu blockieren. There are filters that block tracking, social media widgets, and annoyances, such as cookie notices. Verschiedene Benutzer können unterschiedliche Kombinationen von Filtern wählen, um ihren persönlichen Vorlieben zu entsprechen. Es gibt Websites wie [filterlists.com](https://filterlists.com/), die sich auf Filterlisten spezialisiert haben und über große Datenbanken verfügen.

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

## Types of request handling in AdGuard

AdGuard handles requests according to filters, user rules and settings enabled by the user. As a result, a request can be blocked, modified, allowed or, when nothing is done to it, just processed.

Detailed information on how each request of yours has been handled by AdGuard can be found in the *Filtering log* (AdGuard for Windows, AdGuard for Mac, AdGuard Browser Extension) or *Recent activity* (AdGuard for iOS, AdGuard for Android).

Regarding AdGuard filters, you can also check [our filter policy](../filter-policy), which describes in detail what and why each of our filters blocks.

### Examples of blocked requests

AdGuard DNS filter blocks requests to ad domains, such as `ad.doubleclick.net`.

AdGuard Tracking Protection filter blocks tracking requests, such as `youtube.com/youtubei/log_event?`.

### Examples of allowed requests

AdGuard Base filter allows non-ad requests, such as `www.google.com/complete/search?q=`.

Filter unblocking search ads and self-promotion allows requests to search ad-related domains, such as `www.google.com/aclk?`.

Requests to websites that are added by the user to *Allowlist* are allowed.

### Examples of modified requests

Tracking protection feature with protection level set to *High* enables AdGuard URL Tracking filter which modifies requests by removing tracking parameters from them:

`https://www.rentio.jp/products/ax-n1b?click_from=top_newitems` → `https://www.rentio.jp/products/ax-n1b`

`https://www.baseballchannel.jp/npb/183688/?ref=ise` → `https://www.baseballchannel.jp/npb/183688/`

`https://www.gog.com/game/spec_ops_the_line?pp=2863d7ae605104eeef364e3f164d3404e20f680c&gad_source=1` → `https://www.gog.com/game/spec_ops_the_line`

Please note that *modified* events you see in the Filtering log or Recent activity refer not only to the cases when a request is modified, but also when:

- something on the page is changed (usually by cosmetic rules)
- the response is modified
