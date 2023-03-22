---
title: Formes plurielles
sidebar_position: 4
---


Il y a beaucoup de différences entre les langues du monde. L'une de ces différences est l'utilisation de formes plurielles qui peuvent causer d'énormes difficultés en matière de localisation.

Nous vous recommandons vivement de lire attentivement cet article pour en savoir plus sur les formes plurielles et la façon dont elles sont utilisées dans les traductions AdGuard.

## Que signifient les formes plurielles ? {#plurals}

Les substantifs dans les langues différentes peuvent avoir plusieurs formes de mots au pluriel. Leur utilisation dépend du nombre de choses dont vous parlez.

Par exemple, les mots anglais ont deux formes de mots lorsqu'ils parlent de quelque chose au singulier, comme *'one star'*, et au pluriel – *'two stars'*. Peu importe que vous disiez cinq, vingt-six ou même cinq cent trente-deux 'stars' (étoiles), la terminaison « s » restera la même. Mais certaines langues ne peuvent contenir qu'une ou plusieurs formes plurielles.

Contrairement à l'anglais, la langue polonaise a trois formes plurielles de noms. L'une d'entre elles est utilisée pour parler de quelque chose au singulier, une autre forme est utilisée au pluriel, mais avec des nombres se terminant par 2-4, à l'exclusion de 12-14, et la troisième forme - pour les mots avec d'autres nombres devant eux.

Jetons un coup d'œil à cette image. Vous pouvez voir ici les groupes de chiffres qui déterminent la forme d'un mot lorsqu'on se trouve en face de lui.

![Polonais](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

> Trouvez d'autres exemples [ici](https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals).

Pour mieux comprendre, établissons un petit parallèle entre l'anglais et le polonais : 

      La version anglaise :                                                 Les équivalents polonais :
    
      1. forme - It takes one hour.                                     1. forme - Zajmuje to godzinę. 
      2. forme - It takes two hours.                                    2. forme - Zajmuje to dwie godziny. 
      3. forme - It takes five hours.                                   3. forme - Zajmuje to pięć godzin.

Maintenant c'est clair que le polonais *'godzinę'* (heure) a trois formes différentes, alors que le mot anglais ne change de forme avec des nombres donnés que deux fois.

Sans parler du polonais, il existe encore de nombreuses autres langues qui ont trois formes plurielles et plus, telles que le russe, le serbe, le slovaque, le tchèque, etc. But not all of them obey the same rule. That's why it is so important to know how many plural forms your language contains and how you can apply them.

## Where can you learn about the number of plural forms? {#where-to-learn}

When you are faced with a translation that requires the use of plurals, you may not be able to realize right away how many word forms your language contains.

Here are some sources of information you can use.

[Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) contains a wide list of languages. The number of plural forms for different languages is shown this way: 'nplurals=2', 'nplurals=4' and so on. The numeral after the Equals sign '='  means the number of plural forms of the respective language.

Also, you can get information about plural forms in the [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR). The CLDR Plural Rules indicate an additional word form for decimal numbers (1.5; 2.3; 100.1…), but we don’t use them in AdGuard translations.

## Plurals in AdGuard translations {#translations}

First of all, we want to mention that not every AdGuard translation requires the use of plural forms.

Currently, we have 4 types of strings on Crowdin that involve the use of plurals.

Let's take a closer look at them.

### 1. Phrases with string keys ending in `.singular`, `.dual`, `.plural` {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

Most of them are represented in the `AdGuard for Windows` project and consist of only one or two words:

- `days;`
- `extensions;`
- `hours`

Please pay attention to the string keys of such phrases and to the "Context" field where you can see some important notes about plurals. The string keys may contain `Singular`, `Dual`, `Plural` words (ex.`FormatDayDeclensionDual`). In this case, you should leave the appropriate plural form as it is specified in the key.

### 2. Strings with singular and plural nouns separated by commas {#2type}

This kind of strings is mostly concentrated in the `AdGuard for Android` project.

Please look at the example:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

If there are 3 plural forms of nouns in your language (like in Polish), please write all plural forms separated by commas.

`hour, hours — godzinę, godziny, godzin`

In case a noun has only 2 forms, there is no need to write the same form twice (*typically only for this type of strings with plurals!*). However, it won't be a mistake if you repeat the form twice.

### 3. Strings that use the Crowdin-developed pattern {#3type}

This is the most user-friendly scheme of translating strings with plurals.

Crowdin suggests to users that they translate the certain amount of phrases with different plural forms.

If your language provides only one plural form, then you will see only one phrase to translate. If three or more forms, Crowdin will provide you with the string divided into other two or three strings to translate.

For example:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Please be attentive when translating these strings and approving them. If you have no idea what the "Other" field means, then just paste the same form as it is in the "Many" field. The translations of "Many" and "Other" fields can be the same.

### 4. Strings with templates separated by the vertical bar sign {#4type}

This is the most complicated type of AdGuard strings which is mostly used in `AdGuard Websites` project.

Pay close attention to a vertical bar sign between the sentences and **%count%** placeholders in original phrases – this will help you identify phrases where translations require the use of plural forms.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Now, let’s imagine — you are faced with such a string: `Standard license for %count% computer | Standard license for %count% computers`.

What should you know to translate it correctly?

Let's call the sentences which are divided by a vertical bar sign **"templates"**, because actually they serve as templates for phrases with different numbers.

Coming back to the example, as the English language includes only two forms, there should be two templates respectively:

`Standard license for *%count%* computer | Standard license for *%count%* computers`

where **template 1** – Standard license for *%count%* computer,

and **template 2** – Standard license for *%count%* computers

Another important thing you should pay your attention to is **%count%** placeholders that, as usual, take place before the words they define. Instead of **%count%** here will appear different numbers depending on which templates are being chosen.

In a situation with another language that has, let’s say, three plural forms, there should be three templates with two vertical bar signs between them.

For example, when we translate the above mentioned phrase into Slovak, that according to the rule of [Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) has three word forms, the correct translation will look so:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Slovak](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

In this case, we see three templates which contain three forms of the word *"počítač"* (computer) in Slovak.

*If we ignore one of the forms and use only two templates for Slovak instead of three, the system won’t be able to take an appropriate template for certain numbers* and, as a result, we will have grammar mistakes in sentences, like in English: *Standard license for 5 computer*.
> **Always use as many forms as there are in your language, even when the word itself has fewer word forms.**

For example, the Serbian word *'računar'* (computer) has only two forms. But there are 3 plural forms in Serbian.

![Serbian](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Thus, the translation from English into Serbian should be:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

Although it is obvious that the last two templates have no differences, it is very important to keep the rule: **The number of templates should reflect the number of plural forms of the respective language!**(typically for this type of strings with plurals).

### Short summary {#summury}

When translating AdGuard projects pay your close attention to phrases which require the use of plural forms.

While first three types of such strings are more or less easy to perform, the fourth type demands more vigilance.

And again: if you come across an original phrase with two important elements: **the vertical bar sign** and **%count%** placeholders, please do the following:

+ Refer to the plural rule of a language you translate into;

> The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms – two templates in translations; five plural forms – five templates, etc.

+ Do not forget to use a vertical bar sign between templates as it is represented in original strings;

+ Do not translate, fill in or delete **%count%** placeholders.

By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process.