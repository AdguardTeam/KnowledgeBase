---
title: Pluralformen
sidebar_position: 4
---


Es gibt viele Unterschiede zwischen den Sprachen der Welt. Einer dieser Unterschiede ist die Verwendung von Pluralformen, die große Schwierigkeiten bei der Lokalisierung verursachen können.

Wir empfehlen Ihnen dringend, diesen Artikel sorgfältig zu lesen, um mehr über Pluralformen und ihre Verwendung in AdGuard-Übersetzungen zu erfahren.

## Was bedeuten Pluralformen? {#plurals}

Substantive in verschiedenen Sprachen können mehrere Wortformen im Plural haben. Ihre Verwendung hängt von der Anzahl der Dinge ab, über die Sie sprechen.

For instance, English words have two word forms when speaking about something in the singular, like *'one star'*, and in the plural — *'two stars'*. It doesn’t matter if you say five, twenty six or even five hundred thirty two stars — the ending 's' will remain the same. Einige Sprachen können jedoch nur eine oder mehrere Pluralformen enthalten.

Im Gegensatz zum Englischen gibt es in der polnischen Sprache drei Substantivformen im Plural. One of them is used when speaking about something in the singular, another form is used in the plural but with numbers ending in 2-4, excluding 12-14, and the third form — for words with other numbers in front of them.

Let’s take a look at this picture. Hier sieht man die Zahlengruppen, die eine Wortform bestimmen, wenn sie davor stehen.

![Polnisch](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

Ziehen wir zum besseren Verständnis eine kleine Parallele zwischen Englisch und Polnisch:

      Die englische Version:                                                 Die polnischen Entsprechung:
    
      1. Form — It takes one hour.                                     1. Form — Zajmuje to godzinę.
      2. Form — It takes two hours.                                    2. Form — Zajmuje to dwie godziny.
      3. Form — It takes five hours.                                   3. Form — Zajmuje to pięć godzin.

Nun ist klar, dass die polnische *'godzinę'* (Stunde) drei verschiedene Formen hat, während das englische Wort seine Form bei gegebenen Zahlen nur zweimal ändert.

Außer Polnisch gibt es viele andere Sprachen, die drei Pluralformen und mehr haben, wie Russisch, Serbisch, Slowakisch, Tschechisch usw. Aber nicht alle halten sich an dieselbe Regel. Deshalb ist es so wichtig zu wissen, wie viele Pluralformen Ihre Sprache enthält und wie Sie diese anwenden können.

## Wo kann man etwas über die Anzahl der Pluralformen erfahren? {#where-to-learn}

Wenn Sie eine Phrase mit Pluralformen übersetzen, können Sie möglicherweise nicht sofort erkennen, wie viele Wortformen Ihre Sprache enthält.

Hier sind einige Informationsquellen, die Sie verwenden können.

[Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) enthält eine umfangreiche Liste von Sprachen. Die Anzahl der Pluralformen für verschiedene Sprachen wird folgendermaßen angezeigt: 'nplurals=2', 'nplurals=4' und so weiter. Die Zahl nach dem Gleichheitszeichen '=' gibt die Anzahl der Pluralformen der jeweiligen Sprache an.

Informationen zu Pluralformen finden Sie auch im [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR). Die CLDR-Pluralregeln geben eine zusätzliche Wortform für Dezimalzahlen an (1,5; 2,3; 100,1…), aber wir verwenden sie nicht in AdGuard-Übersetzungen.

## Pluralformen in AdGuard-Übersetzungen {#translations}

Zunächst möchten wir erwähnen, dass nicht jede AdGuard-Übersetzung die Verwendung von Pluralformen erfordert.

Derzeit haben wir 4 Arten von Strings auf Crowdin, die die Verwendung von Pluralformen beinhalten.

Schauen wir sie uns genauer an.

### 1. Phrasen mit String-Schlüsseln, die auf `.singular`, `.dual`, `.plural` enden {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

Die meisten von ihnen sind im Projekt `AdGuard for Windows` vertreten und bestehen nur aus einem oder zwei Wörtern:

- `days;`
- `extensions;`
- `hours`

Bitte achten Sie auf die Schlüssel solcher Phrasen und auf das Feld „Context“, wo Sie einige wichtige Hinweise zu Pluralformen sehen können. Die Schlüssel können `Singular`, `Dual`, `Plural` Wörter enthalten (z. B.`FormatDayDeclensionDual`). In diesem Fall sollten Sie die entsprechende Pluralform so belassen, wie sie im Schlüssel angegeben ist.

### 2. Strings mit Singular- und Pluralnomen, die durch Kommas getrennt sind {#2type}

Diese Art von Strings konzentriert sich hauptsächlich auf das `AdGuard for Android` Projekt.

Bitte schauen Sie sich das Beispiel an:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

Wenn es in Ihrer Sprache 3 Pluralformen von Substantiven gibt (wie im Polnischen), schreiben Sie bitte alle Pluralformen durch Kommas getrennt.

`hour, hours — godzinę, godziny, godzin`

Falls ein Substantiv nur 2 Formen hat, muss dieselbe Form nicht zweimal geschrieben werden (*normalerweise nur für diese Art von Strings mit Plural!*). Es ist jedoch kein Fehler, wenn Sie die Form zweimal wiederholen.

### 3. Strings, die das von Crowdin entwickelte Muster verwenden {#3type}

Dies ist das benutzerfreundlichste Schema zum Übersetzen von Strings mit Pluralformen.

Crowdin schlägt den Benutzern vor, die bestimmte Menge an Phrasen mit verschiedenen Pluralformen zu übersetzen.

Wenn Ihre Sprache nur eine Pluralform bietet, sehen Sie nur ein Formular mir einer zu übersetzenden Phrase. Wenn drei oder mehr Formen vorliegen, stellt Crowdin Ihnen die Formulare zur Verfügung, die in andere zwei oder drei zu übersetzende Phrasen unterteilt ist.

Zum Beispiel:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Bitte seien Sie aufmerksam, wenn Sie diese Strings übersetzen und genehmigen. Wenn Sie keine Ahnung haben, was das Feld „Other“ bedeutet, fügen Sie einfach die gleiche Form wie in das Feld „Many“ ein. Die Übersetzungen der Felder „Many“ und „Other“ können identisch sein.

### 4. Strings mit Vorlagen, die durch das vertikale Balkenzeichen getrennt sind {#4type}

Dies ist die komplizierteste Art von AdGuard-Strings, die am häufigsten in `AdGuard Websites`-Projekt verwendet wird.

Pay close attention to a vertical bar sign between the sentences and **%count%** placeholders in original phrases — this will help you identify phrases where translations require the use of plural forms.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Stellen Sie sich nun vor, Sie sehen eine solche Phrase: `Standard license for %count% computer | Standard license for %count% computers`.

Was sollte man wissen, um es richtig zu übersetzen?

Nennen wir die Sätze, die durch ein vertikales Strichzeichen getrennt sind, **„Vorlagen“**, weil sie eigentlich als Vorlagen für Sätze mit unterschiedlichen Nummern dienen.

Um auf das Beispiel zurückzukommen: Da die englische Sprache nur zwei Formen umfasst, sollte es jeweils zwei Vorlagen geben:

`Standard license for *%count%* computer | Standard license for *%count%* computers`

where **template 1** is Standard license for *%count%* computer,

and **template 2** is Standard license for *%count%* computers

Eine weitere wichtige Sache, auf die Sie Ihre Aufmerksamkeit richten sollten, sind **%count%**-Platzhalter, die wie üblich vor den Wörtern stehen, die sie definieren. Anstelle von **%count%** erscheinen hier unterschiedliche Zahlen, je nachdem, welche Vorlagen ausgewählt werden.

In einer Situation mit einer anderen Sprache, die beispielsweise drei Pluralformen hat, sollten drei Vorlagen mit zwei vertikalen Balkenzeichen dazwischen vorhanden sein.

Wenn wir zum Beispiel den oben erwähnten Satz ins Slowakische übersetzen, der gemäß der Regel von [Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) drei Wortformen hat, sieht die korrekte Übersetzung so aus:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Slowakisch](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

In diesem Fall sehen wir drei Vorlagen, die drei Formen des slowakischen Wortes *„počítač“* (Computer) enthalten.

*Wenn wir eine der Formen ignorieren und nur zwei statt drei Vorlagen für Slowakisch verwenden, kann das System für bestimmte Zahlen keine geeignete Vorlage verwenden*, und als Ergebnis haben wir Grammatikfehler in Sätzen, wie z. B. im Englischen: *Standard license for 5 computer*.
> **Always use as many forms as there are in your language, even when the word itself has fewer word forms.**

Zum Beispiel hat das serbische Wort *'računar'* (Computer) nur zwei Formen. Aber es gibt 3 Pluralformen im Serbischen.

![Serbisch](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Die Übersetzung aus dem Englischen ins Serbische sollte also lauten:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

Obwohl es offensichtlich ist, dass die letzten beiden Vorlagen keine Unterschiede aufweisen, ist es sehr wichtig, die Regel einzuhalten: **Die Anzahl der Vorlagen sollte die Anzahl der Pluralformen der jeweiligen Sprache widerspiegeln!**(typisch für diese Art von Strings mit Plural).

### Kurze Zusammenfassung {#summury}

Achten Sie beim Übersetzen von AdGuard-Projekten genau auf Formulierungen, die die Verwendung von Pluralformen erfordern.

Während die ersten drei Arten solcher Strings mehr oder weniger leicht durchzuführen sind, erfordert die vierte Art mehr Wachsamkeit.

Und noch einmal: Wenn Sie auf einen Originalsatz mit zwei wichtigen Elementen stoßen: **das vertikale Balkenzeichen** und **%count%**-Platzhalter, gehen Sie bitte wie folgt vor:

+ Beziehen Sie sich auf die Pluralregel einer Sprache, in die Sie übersetzen;

The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms — two templates in translations; five plural forms — five templates, etc.

+ Vergessen Sie nicht, ein vertikales Balkenzeichen zwischen Vorlagen zu verwenden, wie es in Originalphrasen dargestellt wird;

+ Die **%count%**-Platzhalter dürfen nicht übersetzt, ausgefüllt oder gelöscht werden.

By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process.
