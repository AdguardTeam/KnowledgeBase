---
title: Formes plurielles
sidebar_position: 4
---


Il y a beaucoup de différences entre les langues du monde. L'une de ces différences est l'utilisation de formes plurielles qui peuvent causer d'énormes difficultés en matière de localisation.

Nous vous recommandons vivement de lire attentivement cet article pour en savoir plus sur les formes plurielles et la façon dont elles sont utilisées dans les traductions AdGuard.

## Que signifient les formes plurielles ? {#plurals}

Les substantifs dans les langues différentes peuvent avoir plusieurs formes de mots au pluriel. Leur utilisation dépend du nombre de choses dont vous parlez.

For instance, English words have two word forms when speaking about something in the singular, like *'one star'*, and in the plural — *'two stars'*. It doesn’t matter if you say five, twenty six or even five hundred thirty two stars — the ending 's' will remain the same. Mais certaines langues ne peuvent contenir qu'une ou plusieurs formes plurielles.

Contrairement à l'anglais, la langue polonaise a trois formes plurielles de noms. One of them is used when speaking about something in the singular, another form is used in the plural but with numbers ending in 2-4, excluding 12-14, and the third form — for words with other numbers in front of them.

Let’s take a look at this picture. Vous pouvez voir ici les groupes de chiffres qui déterminent la forme d'un mot lorsqu'on se trouve en face de lui.

![Polonais](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

Pour mieux comprendre, établissons un petit parallèle entre l'anglais et le polonais :

      La version anglaise :                                                 Les équivalents polonais :
    
      1. forme - It takes one hour.                                     1. forme - Zajmuje to godzinę.
      2. forme - It takes two hours.                                    2. forme - Zajmuje to dwie godziny.
      3. forme - It takes five hours.                                   3. forme - Zajmuje to pięć godzin.

Maintenant c'est clair que le polonais *'godzinę'* (heure) a trois formes différentes, alors que le mot anglais ne change de forme avec des nombres donnés que deux fois.

Sans parler du polonais, il existe encore de nombreuses autres langues qui ont trois formes plurielles et plus, telles que le russe, le serbe, le slovaque, le tchèque, etc. Mais tous n'obéissent pas à la même règle. C'est pourquoi c'est si important de savoir combien de formes plurielles votre langue contient et comment vous pouvez les appliquer.

## Où peut-on apprendre plus sur le nombre de formes plurielles ? {#where-to-learn}

Faisant face à une traduction qui nécessite l'utilisation de pluriels, vous ne pourrez peut-être pas vous rendre compte tout de suite du nombre de formes de mots que contient votre langue.

Voici quelques sources d'informations que vous pouvez utiliser.

[Guide de localisation](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) contient une large liste de langues. Le nombre de formes plurielles pour les langues différentes est indiqué de la manière suivante : "nplurals=2", "nplurals=4", etc. Le chiffre après le signe égal '=' signifie le nombre de formes plurielles de la langue respective.

En outre, vous pouvez obtenir des informations sur les formes plurielles dans le répertoire [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR). Les règles plurielles CLDR indiquent une forme de mot supplémentaire pour les nombres décimaux (1.5 ; 2.3 ; 100.1…), mais nous ne les utilisons pas dans les traductions AdGuard.

## Les pluriels dans les traductions de AdGuard {#translations}

Tout d'abord, nous tenons à préciser que toutes les traductions AdGuard ne requièrent pas l'utilisation du pluriel.

Actuellement, nous avons 4 types de chaînes sur Crowdin qui impliquent l'utilisation de pluriels.

Examinons-les de plus près.

### 1. Phrases avec des clés de chaîne se terminant par `.singular`, `.dual`, `.plural` {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

La plupart d'entre elles sont représentées dans le projet `AdGuard for Windows` et consistent en seulement un ou deux mots :

- `jours;`
- `extensions;`
- `heures`

Veuillez prêter attention aux clés de chaîne de ces phrases et au champ "Contexte" où vous trouverez des remarques importantes sur les pluriels. Les clés de chaînes peuvent contenir des mots `Singular`, `Dual`, `Plural` (ex.`FormatDayDeclensionDual`). Dans ce cas, vous devez laisser la forme plurielle appropriée telle qu'elle est spécifiée dans la clé.

### 2. Les chaînes avec des noms singuliers et pluriels séparés par des virgules {#2type}

Ce type de chaînes est principalement concentré dans le projet `AdGuard for Android`.

Veuillez consulter l'exemple :

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

S'il existe 3 formes plurielles de noms dans votre langue (comme en polonais), veuillez écrire toutes les formes plurielles séparées par des virgules.

`heure, heures — godzinę, godziny, godzin`

Dans le cas où un nom n'a que 2 formes, ce n'est pas nécessaire d'écrire deux fois la même forme (*typiquement uniquement pour ce type de chaînes avec des pluriels !*). Cependant, ce ne sera pas une erreur si vous répétez le formulaire deux fois.

### 3. Les chaînes qui utilisent le modèle développé par Crowdin {#3type}

Il s'agit de la méthode la plus conviviale pour traduire les chaînes de caractères contenant des pluriels.

Crowdin suggère aux utilisateurs de traduire un certain nombre de phrases avec différentes formes plurielles.

Si votre langue ne propose qu'une seule forme plurielle, vous ne verrez alors qu'une seule phrase à traduire. S'il s'agit de trois formes ou plus, Crowdin vous fournira la chaîne divisée en deux ou trois autres chaînes à traduire.

Par exemple :

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Soyez attentifs pendant la traduction de ces chaînes et quand vous les approuvez. Si vous n'avez aucune idée de la signification du champ "Autre", il vous suffit de coller le même formulaire que dans le champ "Plusieurs". Les traductions des champs "Plusieurs" et "Autres" peuvent être identiques.

### 4. Les chaînes avec des modèles séparés par le signe de la barre verticale {#4type}

Il s'agit du type de chaînes AdGuard le plus compliqué qui est principalement utilisé dans le projet `AdGuard Websites`.

Pay close attention to a vertical bar sign between the sentences and **%count%** placeholders in original phrases — this will help you identify phrases where translations require the use of plural forms.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Maintenant, imaginons — vous faites face à une chaîne de ce genre : `Standard license for %count% computer | Standard license for %count% computers`.

Que faut-il savoir pour traduire cela correctement ?

Appelons les phrases qui sont divisées par un signe de barre verticale **"modèles"**, car elles servent en effet de modèles pour les phrases qui comportent des quantités différentes.

Pour en revenir à l'exemple, comme la langue anglaise ne comprend que deux formulaires, il devrait y avoir respectivement deux modèles :

`Standard license for *%count%* computer | Standard license for *%count%* computers`

where **template 1** is Standard license for *%count%* computer,

and **template 2** is Standard license for *%count%* computers

Une autre chose importante à laquelle vous devriez prêter attention c'est les espaces réservés **%count%** qui, comme d'habitude, se placent avant les mots qu'ils définissent. De différents nombres apparaîtront ici au lieu de **%count%**, en fonction des modèles choisis.

Dans le cas d'une langue ayant, par exemple, trois formes de pluriel, il doit y avoir trois modèles séparés par deux barres verticales.

Par exemple, lorsque nous traduisons la phrase mentionnée ci-dessus en slovaque, qui, selon la règle du [Guide de la localisation](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) a trois formes de mots, la traduction correcte sera comme suit :

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Slovaque](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

Dans ce cas, nous voyons trois modèles qui contiennent trois formes du mot *"počítač"* (ordinateur) en slovaque.

*Si nous ignorons l'une des formes et n'utilisons que deux modèles pour le slovaque au lieu de trois, le système ne pourra pas prendre un modèle approprié pour certains nombres* et, par conséquent, nous aurons des erreurs de grammaire dans les phrases, comme en anglais : *Standard license for 5 computer*.
> **Always use as many forms as there are in your language, even when the word itself has fewer word forms.**

Par exemple, le mot serbe *'računar'* (ordinateur) n'a que deux formes. Mais il existe 3 formes plurielles en serbe.

![Serbe](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Ainsi, la traduction de l'anglais vers le serbe devrait être :

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

Bien qu'il soit évident que les deux derniers modèles ne présentent aucune différence, il est très important de respecter la règle : **Le nombre de modèles doit refléter le nombre de formes plurielles de la langue concernée !**(typiquement pour ce type de chaînes avec des pluriels).

### Résumé bref {#summury}

Lors de la traduction de projets AdGuard, portez une attention particulière aux phrases qui nécessitent l'utilisation de formes plurielles.

Alors que les trois premiers types de chaînes sont plus ou moins faciles à réaliser, le quatrième type demande plus de vigilance.

Encore une fois : si vous rencontrez une phrase originale comportant deux éléments importants : **le signe de la barre verticale** et **%count%** les espaces réservés, veuillez faire ce qui suit :

- Référez-vous à la règle du pluriel d’une langue dans laquelle vous traduisez ;

The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms — two templates in translations; five plural forms — five templates, etc.

- N'oubliez pas d'utiliser le signe de la barre verticale entre les modèles, comme il est représenté dans les chaînes originales ;

- Ne traduisez pas, ne remplissez pas et ne supprimez pas les espaces réservés **%count%**.

By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process.
