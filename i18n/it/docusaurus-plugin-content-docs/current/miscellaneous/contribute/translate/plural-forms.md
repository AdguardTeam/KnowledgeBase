---
title: Forme plurali
sidebar_position: 4
---


Esistono molte differenze tra le lingue del mondo. Una di queste, è l'utilizzo delle forme plurali che possono causare enormi difficoltà, relativamente ai problemi di localizzazione.

Ti suggeriamo vivamente di leggere correttamente questo articolo, per scoprire di più sulle forme plurali e su come sono utilizzate nelle traduzioni di AdGuard.

## Cosa significano le forme plurali? {#plurals}

I sostantivi in diverse lingue, possono avere diverse forme plurali. Il loro utilizzo dipende dal numero di cose di cui parli.

Ad esempio, le parole in inglese hanno due forme, parlando di qualcosa al singolare, come *'one star'* e, al plurale, *'two stars'*. Non importa che tu dica cinque, ventisei o persino cinquecentotrentadue stars (stelle), la 's' finale rimarrà la stessa. Ma certe lingue possono contenere soltanto una o più forme plurali.

A differenza dell'inglese, il polacco ha tre forme plurali dei sostantivi. Una di esse è utilizzata parlando di qualcosa al singolare, un'altra al plurale ma con numeri che terminano per 2 o 4, esclusi 12 e 14, e la terza: per parole precedute da altri numeri.

Diamo un'occhiata a quest'immagine. Qui, puoi vedere il gruppo di numeri che determinano la forma di una parola, quando ci si trova di fronte.

![Polacco](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

Facciamo un piccolo parallelo tra l'inglese e il polacco, per una migliore comprensione:

      La versione inglese:                                                 Gli equivalenti in polacco:
    
      1. forma - It takes one hour.                                     1. forma - Zajmuje to godzinę.
      2. forma - It takes two hours.                                    2. forma - Zajmuje to dwie godziny.
      3. forma - It takes five hours.                                   3. forma - Zajmuje to pięć godzin.

Ora, è chiaro che il polacco *'godzinę'* (ora) abbia tre forme differenti, mentre la parola in inglese cambia la sua forma con certi numeri soltanto due volte.

A eccezione del polacco, esistono molte altre lingue dotate di tre forme plurali o più, come il russo, il serbo, lo slovacco, il ceco, etc. Ma non tutte seguono la stessa regola. Ecco perché è così importante sapere quante forme plurali sono contenute dalla tua lingua e come puoi applicarle.

## Dove puoi scoprire il numero delle forme plurali? {#where-to-learn}

Quando ti trovi di fronte una traduzione che richiede l'uso dei plurali, potresti non accorgerti immediatamente di quante forme plurali sono contenute dalla tua lingua.

Ecco alcune fonti di informazioni che puoi utilizzare.

La [Guida di Localizzazione](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) contiene un ampio elenco di lingue. Il numero di forme plurali per le diverse lingue è mostrato come segue: 'nplurals=2', 'nplurals=4' e così via. Il numero dopo il segno Uguale '=' indica il numero di forme plurali della rispettiva lingua.

Inoltre, puoi ottenere le informazioni sulle forme plurali nella [Repository Locale di Dati Comuni Unicode](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR). Le Regole Plurali CLDR indicano una forma aggiuntiva della parola per i numeri decimali (1,5; 2,3; 100,1…), ma non le utilizziamo nelle traduzioni di AdGuard.

## Plurali nelle traduzioni di AdGuard {#translations}

Prima di tutto, vogliamo ricordare che non tutte le traduzioni di AdGuard richiedono l'utilizzo delle forme plurali.

Correntemente, abbiamo 4 tipi di stringhe su Crowdin che implicano l'uso dei plurali.

Diamogli un'occhiata più da vicino.

### 1. Frasi contenenti chiavi di stringa in `.singular`, `.dual`, `.plural` {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

Gran parte di esse sono rappresentate nel progetto `AdGuard per Windows` e consistono esclusivamente di una o due parole:

- `giorni;`
- `estensioni;`
- `ore`

Sei pregato di prestare attenzione alle chiavi di stringhe di tali frasi e al campo "Contesto", dove puoi trovare importanti note sulle forme plurali. Le chiavi di stringhe potrebbero contenere parole `Singular`, `Dual`, `Plural` (es.`FormatDayDeclensionDual`). In questo caso, dovresti lasciare la forma plurale appropriata come specificata nella chiave.

### 2. Le stringhe contenenti sostantivi singolari e plurali, separate da virgole {#2type}

Questo tipo di stringhe si concentra per lo più nel progetto `AdGuard per Android`.

Sei pregato di guardare l'esempio:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

Se nella tua lingua esistono 3 forme plurali di sostantivi (come in polacco), sei pregato di scriverle tutte, separandole con delle virgole.

`ora, ore — godzinę, godziny, godzin`

Nel caso in cui un sostantivo abbia soltanto 2 forme, non è necessario scrivere due volte la stessa forma (*tipicamente soltanto per questo tipo di stringhe contenenti plurali!*). Tuttavia, non sarà un errore ripetere la stessa forma due volte.

### 3. Stringhe che utilizzano il modello sviluppato da Crowdin {#3type}

Questo è lo schema più intuitivo per tradurre le stringhe contenenti plurali.

Crowdin suggerisce agli utenti di tradurre un certo numero di frasi con diverse forme plurali.

Se la tua lingua fornisce soltanto una forma plurale, visualizzerai soltanto una frase da tradurre. Se prevede tre o più forme, Crowdin ti fornirà la stringa, divisa in altre due o tre stringhe da tradurre.

Ad esempio:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Sei pregato di prestare attenzione traducendo e approvando tali stringhe. Se non hai idea di cosa significhi il campo "Altro", incolla semplicemente la stessa forma del campo "Molti". Le traduzioni dei campi "Molti" e "Altro" possono essere le stesse.

### 4. Stringhe con modelli separati dal simbolo della barra verticale {#4type}

Questo è il tipo più complicato di stringhe di AdGuard, prevalentemente utilizzato nel progetto `AdGuard Websites`.

Presta particolare attenzione al simbolo della barra verticale tra le frasi e ai segnaposto **%count%** nelle frasi originali: ti aiuteranno a identificare dove le traduzioni richiedono l'utilizzo delle forme plurali.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Ora, immaginiamo di trovarci di fronte a una stringa del genere: `Standard license for %count% computer | Standard license for %count% computers`.

Cosa dovresti sapere per tradurlo correttamente?

Le frasi divise da un simbolo della barra verticale sono dette **"modelli"**, poiché servono effettivamente da modelli per frasi con numeri diversi.

Tornando all'esempio, poiché la lingua inglese include soltanto due forme, dovrebbero esser rispettivamente presenti due modelli:

`Standard license for *%count%* computer | Standard license for *%count%* computers`

dove **modello 1** –Standard license for *%count%* computer,

e **modello 2** – Standard license for *%count%* computers

Un'altra cosa importante a cui dovresti prestare attenzione sono i segnaposto **%count%** che, solitamente, si trovano prima delle parole che definiscono. Invece di **%count%**, qui, appariranno vari numeri, a seconda di quali modelli sono scelti.

In una situazione con un'altra lingua avente, per esempio, tre forme plurali, dovrebbero essere presenti tre modelli separati da due simboli della barra verticale.

Ad esempio, traducendo la suddetta frase in slovacco, che secondo la regola della [Guida di Localizzazione](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) contiene tre forme della parola, la traduzione corretta sarà la seguente:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Slovacco](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

In questo caso, vediamo tre modelli contenenti tre forme della parola *"počítač"* (computer) in Slovacco.

*Se ignoriamo una di queste forme e utilizziamo soltanto due modelli per lo slovacco, invece di tre, il sistema non riuscirà a prelevare un modello appropriato per certi numeri* e, di conseguenza, avremo errori grammaticali nelle frasi, come in inglese: *Standard license for 5 computer*.
> **Always use as many forms as there are in your language, even when the word itself has fewer word forms.**

Ad esempio, la parola serba *'računar'* (computer) prevede soltanto due forme. Ma in serbo esistono 3 forme plurali.

![Serbo](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Pertanto, la traduzione dall'inglese al serbo dovrebbe essere:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

Sebbene sia ovvio che gli ultimi due modelli non presentino differenze, è molto importante seguire la regola: **Il numero di modelli dovrebbe riflettere il numero di forme plurali della rispettiva lingua!** (tipicamente, per questo tipo di stringhe contenenti plurali).

### Riepilogo breve {#summury}

Traducendo i progetti di AdGuard, presta particolare attenzione alle frasi che richiedono l'utilizzo di forme plurali.

Sebbene i primi tre tipi di tali stringhe siano più o meno facili da tradurre, il quarto richiede una maggiore attenzione.

E ancora: se ti imbatti in una frase originale con due elementi importanti: **il simbolo della barra verticale** e i segnaposto **%count%**, sei pregato di procedere come segue:

+ Fai riferimento alla regola del plurale della lingua verso cui traduci;

The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms – two templates in translations; five plural forms – five templates, etc.

+ Non dimenticarti di utilizzare un simbolo barra verticale tra i modelli, come rappresentato nelle stringhe originali;

+ Non tradurre, riempire o eliminare i segnaposto **%count%**.

By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process.
