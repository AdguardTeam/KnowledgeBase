---
title: Plural forms
sidebar_position: 4
---


There are a lot of differences between the world’s languages. One of these differences is the use of plural forms that can cause huge difficulties when it comes to localization issue.

We strongly recommend you to properly read this article to learn more about plural forms and how they are being used in AdGuard translations.

## What do plural forms mean? {#plurals}

Nouns in different languages can have several plural word forms. Their usage depends on the number of things you are talking about.

For instance, English words have two word forms when speaking about something in the singular, like *'one star'*, and in the plural — *'two stars'*. It doesn’t matter if you say five, twenty six or even five hundred thirty two stars — the ending 's' will remain the same. But some languages can contain only one or many plural forms.

In contrast to English, the Polish language has three plural forms of nouns. One of them is used when speaking about something in the singular, another form is used in the plural but with numbers ending in 2–4, excluding 12–14, and the third form — for words with other numbers in front of them.

Şu resme bir göz atalım. Here you can see the groups of numerals which determine a word form when standing in front of it.

![Lehçe](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

Let’s draw a small parallel between English and Polish for better understanding:

      The English version:                                                 The Polish equivalents:
    
      1. form — Bir saat sürer.                                     1. form — Zajmuje to godzinę.
      2. form — İki saat sürer.                                    2. form — Zajmuje to dwie godziny.
      3. form — Beş saat sürer.                                   3. form — Zajmuje to pięć godzin.

Now it is clear that the Polish *'godzinę'* (hour) has three different forms, whereas the English word changes its form with given numbers only twice.

Except for Polish, there are a lot of other languages that have three plural forms and more, such as Russian, Serbian, Slovak, Czech etc. Ancak hepsi aynı kurala uymaz. That's why it's so important to know how many plurals your language has, and how to use them correctly.

## Where can you learn about the number of plural forms? {#where-to-learn}

When you are faced with a translation that requires the use of plurals, you may not be able to realize right away how many word forms your language contains.

Here are some sources of information you can use.

[Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) contains a wide list of languages. The number of plural forms for different languages is shown this way: `nplurals=2`, `nplurals=4` and so on. The numeral after the Equals sign `=` indicates the number of plural forms of the respective language.

Also, you can get information about plural forms in the [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR). The CLDR Plural Rules indicate an additional word form for decimal numbers (1.5; 2.3; 100.1…), but we don’t use them in AdGuard translations.

## Plurals in AdGuard translations {#translations}

First of all, we want to mention that not every AdGuard translation requires the use of plural forms.

Currently, we have 4 types of strings on Crowdin that involve the use of plurals.

Gelin onlara daha yakından bakalım.

### 1. Phrases with string keys ending in `.singular`, `.dual`, `.plural` {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

Bunların çoğu `Windows için AdGuard` projesinde temsil edilir ve yalnızca bir veya iki kelimeden oluşur:

- `days;`
- `extensions;`
- `hours`

Please pay attention to the string keys of such phrases and to the "Context" field where you can see some important notes about plurals. The string keys may contain `Singular`, `Dual`, `Plural` words (ex.`FormatDayDeclensionDual`). In this case, you should leave the appropriate plural form as it is specified in the key.

### 2. Strings with singular and plural nouns separated by commas {#2type}

This kind of strings is mostly concentrated in the `AdGuard for Android` project.

Lütfen örneğe bakın:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

If there are 3 plural forms of nouns in your language (like in Polish), please write all plural forms separated by commas.

`hour, hours — godzinę, godziny, godzin`

In case a noun has only 2 forms, there is no need to write the same form twice (*typically only for this type of strings with plurals!*). However, it won't be a mistake if you repeat the form twice.

### 3. Strings that use the Crowdin-developed pattern {#3type}

This is the most user-friendly scheme of translating strings with plurals.

Crowdin suggests to users that they translate the certain amount of phrases with different plural forms.

If your language provides only one plural form, then you will see only one phrase to translate. If three or more forms, Crowdin will provide you with the string divided into other two or three strings to translate.

Örneğin:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Please be attentive when translating these strings and approving them. If you have no idea what the "Other" field means, then just paste the same form as it is in the "Many" field. The translations of "Many" and "Other" fields can be the same.

### 4. Strings with templates separated by the vertical bar sign {#4type}

This is the most complicated type of AdGuard strings which is mostly used in the `AdGuard Websites` project.

Pay close attention to a vertical bar sign between the sentences and **%count%** placeholders in original phrases — this will help you identify phrases where translations require the use of plural forms.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Now, let’s imagine — you are faced with such a string: `Standard license for %count% computer | Standard license for %count% computers`.

What should you know to translate it correctly?

Let's call the sentences which are divided by a vertical bar sign **"templates"**, because actually they serve as templates for phrases with different numbers.

Coming back to the example, as the English language includes only two forms, there should be two templates respectively:

`Standard license for *%count%* computer | Standard license for *%count%* computers`

where **template 1** is Standard license for *%count%* computer,

and **template 2** is Standard license for *%count%* computers

Another important thing you should pay your attention to is **%count%** placeholders that, as usual, take place before the words they define. Instead of **%count%** here will appear different numbers depending on which templates are being chosen.

In a situation with another language that has, let’s say, three plural forms, there should be three templates with two vertical bar signs between them.

For example, when we translate the above mentioned phrase into Slovak, that according to the rule of [Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) has three word forms, the correct translation will look so:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Slovakça](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

In this case, we see three templates which contain three forms of the word *"počítač"* (computer) in Slovak.

*If we ignore one of the forms and use only two templates for Slovak instead of three, the system won’t be able to take an appropriate template for certain numbers* and, as a result, we will have grammar mistakes in sentences, like in English: *Standard license for 5 computer*.
> **Always use as many forms as there are in your language, even when the word itself has fewer word forms.**

For example, the Serbian word *'računar'* (computer) has only two forms. But there are 3 plural forms in Serbian.

![Sırpça](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Thus, the translation from English into Serbian should be:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

Although it is obvious that the last two templates have no differences, it is very important to keep the rule: **The number of templates should reflect the number of plural forms of the respective language!**(typically for this type of strings with plurals).

### Short summary {#summury}

When translating AdGuard projects pay your close attention to phrases which require the use of plural forms.

While first three types of such strings are more or less easy to perform, the fourth type demands more vigilance.

And again: if you come across an original phrase with two important elements: **the vertical bar sign** and **%count%** placeholders, please do the following:

- Refer to the plural rule of a language you translate into;

The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms — two templates in translations; five plural forms — five templates, etc.

- Do not forget to use a vertical bar sign between templates as it is represented in original strings;

- Do not translate, fill in or delete **%count%** placeholders.

By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process.
