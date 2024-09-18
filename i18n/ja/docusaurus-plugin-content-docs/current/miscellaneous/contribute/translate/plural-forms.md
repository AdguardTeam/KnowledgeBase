---
title: 複数形がある言語の場合
sidebar_position: 4
---


世界の言語には、さまざまなところで違いがあります。 そのひとつが複数形で、複数形はローカライズの際に大きな困難を招くことがあります。

複数形のある言語に翻訳いただく場合は、複数形そのものについて、またはAdGuardの翻訳でどのように複数形が使われているのかについて、この記事をしっかり読んでいただくことを強くお勧めします。

## 複数形とは？ {#plurals}

名詞がいくつかの複数形の語形を持つ言語があります。 その使い方は、示される物の数によって異なります。

For instance, English words have two word forms when speaking about something in the singular, like *'one star'*, and in the plural — *'two stars'*. It doesn’t matter if you say five, twenty six or even five hundred thirty two stars — the ending 's' will remain the same. しかし、言語によっては、複数形が1つだけだったり、逆に2つ以上あったりもします。

英語とは対照的に、ポーランド語には名詞の複数形が3つあります。 One of them is used when speaking about something in the singular, another form is used in the plural but with numbers ending in 2–4, excluding 12–14, and the third form — for words with other numbers in front of them.

Let’s take a look at this picture. ここでは、前に立つと語形が決まる数字のグループを見ることができます（ポーランド語の場合）。

![ポーランド語](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

理解を深めるために、1個・2個・5個の場合の英語とポーランド語の複数形を比べてみましょう。

      英語の場合:                                                 ポーランド語の場合:
    
      1. form — It takes one hour.                                     1. form — Zajmuje to godzinę.
      2. form — It takes two hours.                                    2. form — Zajmuje to dwie godziny.
      3. form — It takes five hours.                                   3. form — Zajmuje to pięć godzin.

さて、ポーランド語の *'godzinę'* (「時間」) には3種類の形があるのに対し、英語では単語が形を変えるのは2回だけであることがわかります。

ポーランド語を除けば、ロシア語、セルビア語、スロバキア語、チェコ語など、3つの複数形を持つ言語やそれ以上の複数形を持つ言語がたくさんあります。 しかも、複数形に対する規則も様々です。 That's why it's so important to know how many plurals your language has, and how to use them correctly.

## 複数形がいくつあるのかは、どこで確認できますか？ {#where-to-learn}

複数形の使用が必要な翻訳に直面したとき、自分の言語にはどれだけの語形があるのか、すぐには気づけないかもしれません。

そういった情報を確認できるところをご紹介します。

[Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) は、幅広い言語リストを含んでいます。 The number of plural forms for different languages is shown this way: `nplurals=2`, `nplurals=4` and so on. The numeral after the Equals sign `=` indicates the number of plural forms of the respective language.

また、 [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR)で複数形に関する情報を入手することもできます。 CLDR Plural Rulesでは、10進数（1.5; 2.3; 100.1…）に対する追加の語形が示されていますが、AdGuardの翻訳ではそのような数字は使用していません。

## AdGuardの翻訳における複数形について {#translations}

まず最初に、AdGuard翻訳のすべてで複数形の使用が必要というわけでもないことをお伝えしておきます。

現在、Crowdinでは、複数形の使用を伴う文字列を4種類扱っています。

それらを詳しく見ていきましょう。

### 1. String keyが `.singular`, `.dual`, `.plural` で終わるフレーズ {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

その多くは、 `AdGuard for Windows` プロジェクトで使用されており、それぞれ1～2語で構成されています:

- `days;`
- `extensions;`
- `hours`

このようなフレーズのstring keyと、複数形に関する重要な注意事項が記載されていたりする「Context」欄にご注目ください。 string keyには、 `Singular`, `Dual`, `Plural` という単語が含まれる場合があります（例:`FormatDayDeclensionDual`）。 この場合、keyで指定されているとおりに適切な複数形にしておく必要があります。

### 2. 単数・複数の名詞をカンマで区切った文字列 {#2type}

この種の文字列のほとんどは、 `AdGuard for Android`プロジェクトにあります。

こちらの例をご覧ください:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

あなたの言語で名詞の複数形が3つある場合（ポーランド語のように）、すべての複数形をカンマで区切って書いてください。

`hour, hours — godzinę, godziny, godzin`

名詞に2つの形しかない場合、同じ形を2回書く必要はありません（*※このような複数形文字列の場合のみ*）。 ただし、形を2回書いても間違いにはなりません。

### 3. Crowdin開発のパターンを使用する文字列 {#3type}

これは、複数形文字列の最も使いやすい翻訳方式です。

この場合、Crowdinは、ユーザーに対して、複数形の異なるフレーズを一定量翻訳することを提案します。

例えば、複数形が1つしかない言語の場合、翻訳するフレーズは1つ表示されます。 3つ以上の複数形がある場合、Crowdinは翻訳する文字列をさらに3つ以上に分割してくれます。

例えば、こんな感じです:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

これらの文字列を翻訳する際やApprove(✔️)する際には、十分な配慮をお願いします。 「Other」欄の意味がわからない場合は、「Many」欄と同じ複数形を貼り付けてください。 「Many」欄と「Other」欄の訳語は同じになっていることが可能です。

### 4. 縦棒記号で区切られた文字列 {#4type}

This is the most complicated type of AdGuard strings which is mostly used in the `AdGuard Websites` project.

Pay close attention to a vertical bar sign between the sentences and **%count%** placeholders in original phrases — this will help you identify phrases where translations require the use of plural forms.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

さて、 `Standard license for %count% computer | Standard license for %count% computers`。

これを正しく訳すために知っておくべきことは？

縦棒記号で区切られた文章を「**テンプレート**」と呼ぶことにしましょう（異なる番号を持つフレーズのテンプレートとして機能するからです）。

例題に戻ると、英語には2つの複数形しかないので、それぞれ2つのテンプレートがあるはずです。

`Standard license for *%count%* computer | Standard license for *%count%* computers`

where **template 1** is Standard license for *%count%* computer,

and **template 2** is Standard license for *%count%* computers

もう一つ注意しなければならないのは、通常、定義する単語の前に位置する「**%count%**」というプレースホルダーです。 ユーザーに見える文章では、 **%count%** の代わりに、選択されているテンプレートに応じて異なる数字が表示されます。

他の言語（例えば3つの複数形がある言語）の場合、テンプレートは3つで、その間に2つの縦棒記号があるはずです。

例えば、上記のフレーズをスロバキア語に翻訳する場合、 [Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) のルールによれば、スロバキア語には3つの語形があり、正しい訳は以下のようになります:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![スロバキア語](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

この場合、スロバキア語の*"počítač"* (コンピュータ)という単語の3つの形式に応じて3つのテンプレートが表示されます。

*形式を1個無視して、スロバキア語のテンプレートを3つではなく2つだけ使用すると、システムは特定の数字に対して適切なテンプレートを取ることができなくなります。*その結果、英語の *Standard license for 5 computer* のように、文中に文法ミスが発生してしまいます。
> **Always use as many forms as there are in your language, even when the word itself has fewer word forms.**

例えば、セルビア語の *'računar'* （コンピュータ）には、2つの形しかありません。 しかし、セルビア語には3つの複数形があります。

![セルビア語](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

したがって、英語からセルビア語への訳語はこうなるべきです:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

この場合、最後の2つのテンプレートに違いがないことは明らかですが、このルールを守ることは非常に重要です。 **テンプレートの数は、それぞれの言語の複数形の数を反映する必要があります。**(このような複数形文字列の場合)。

### 簡単な要約 {#summury}

AdGuardのプロジェクトを翻訳する際には、複数形の使用を必要とするフレーズに細心の注意を払う必要があります。

最初の3つの種類は簡単に対応できるのですが、4つ目の種類（縦棒記号で区切られた文字列）はより注意深く翻訳する必要があります。

もう一度繰り返しますが、**縦棒記号**と**%count%**プレースホルダーの2つの重要な要素を持つフレーズに出会ったら、以下のことを行ってください:

- 翻訳する言語の複数形ルールを参照してください。

The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms — two templates in translations; five plural forms — five templates, etc.

- テンプレートとテンプレートの間は、元の文字列と同じように縦棒記号を使用することを忘れないでください。

- **%count%**プレースホルダーを翻訳したり、変更したり、削除したりしないでください。

By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process.
