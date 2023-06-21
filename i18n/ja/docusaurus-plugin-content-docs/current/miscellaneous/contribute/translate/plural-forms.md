---
title: 複数形がある言語の場合
sidebar_position: 4
---


世界の言語には、さまざまなところで違いがあります。 そのひとつが複数形で、複数形はローカライズの際に大きな困難を招くことがあります。

複数形のある言語に翻訳いただく場合は、複数形そのものについて、またはAdGuardの翻訳でどのように複数形が使われているのかについて、この記事をしっかり読んでいただくことを強くお勧めします。

## 複数形とは？ {#plurals}

名詞がいくつかの複数形の語形を持つ言語があります。 その使い方は、示される物の数によって異なります。

例えば、英単語は、 「*one star*」のように単数形で何かを語る場合と、 「*two stars*」のように複数形で語る場合の2つの語形を持っています。 星が５つでも26個でも、あるいは5302個でも、語尾の「s」は変わりません。 しかし、言語によっては、複数形が1つだけだったり、逆に2つ以上あったりもします。

英語とは対照的に、ポーランド語には名詞の複数形が3つあります。 そのうちの一つは、単数形で何かを語るときに使われ、もう一つの形は、複数形だが2〜4（12〜14を除く）で終わる個数に使われ、第三の形は、その他の個数に使われます。

以下の画像を見てみましょう。 ここでは、前に立つと語形が決まる数字のグループを見ることができます（ポーランド語の場合）。

![ポーランド語](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

理解を深めるために、1個・2個・5個の場合の英語とポーランド語の複数形を比べてみましょう。 

      英語の場合:                                                 ポーランド語の場合:
    
      1. It takes one hour.                                     1. Zajmuje to godzinę. 
      2. It takes two hours.                                    2. Zajmuje to dwie godziny. 
      3. It takes five hours.                                   3. Zajmuje to pięć godzin.

さて、ポーランド語の *'godzinę'* (「時間」) には3種類の形があるのに対し、英語では単語が形を変えるのは2回だけであることがわかります。

ポーランド語を除けば、ロシア語、セルビア語、スロバキア語、チェコ語など、3つの複数形を持つ言語やそれ以上の複数形を持つ言語がたくさんあります。 しかも、複数形に対する規則も様々です。 だからこそ、特定の言語にはいくつの複数形があり、それをどのように応用すべきかを知ることはとても大切なことなのです。

## 複数形がいくつあるのかは、どこで確認できますか？ {#where-to-learn}

複数形の使用が必要な翻訳に直面したとき、自分の言語にはどれだけの語形があるのか、すぐには気づけないかもしれません。

そういった情報を確認できるところをご紹介します。

[Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) は、幅広い言語リストを含んでいます。 異なる言語の複数形の数は、「nplurals=2」「nplurals=4」といった具合に表示されます。 イコール記号「=」の後の数字は、それぞれの言語の複数形の数を示します。

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

これは最も複雑な種類のAdGuard文字列で、主に`AdGuard Websites`プロジェクトで使用されています。

文と文の間にある縦棒記号や、原文のフレーズにある「**%count%**」というプレースホルダーに注意してください。これらは、翻訳で複数形の使用が必要なフレーズを識別するのに役立ちます。

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

さて、 `Standard license for %count% computer | Standard license for %count% computers`。

これを正しく訳すために知っておくべきことは？

縦棒記号で区切られた文章を「**テンプレート**」と呼ぶことにしましょう（異なる番号を持つフレーズのテンプレートとして機能するからです）。

例題に戻ると、英語には2つの複数形しかないので、それぞれ2つのテンプレートがあるはずです。

`Standard license for *%count%* computer | Standard license for *%count%* computers`

ここで、 **テンプレート①** は Standard license for *%count%* computer

**テンプレート②** は Standard license for *%count%* computers

もう一つ注意しなければならないのは、通常、定義する単語の前に位置する「**%count%**」というプレースホルダーです。 ユーザーに見える文章では、 **%count%** の代わりに、選択されているテンプレートに応じて異なる数字が表示されます。

他の言語（例えば3つの複数形がある言語）の場合、テンプレートは3つで、その間に2つの縦棒記号があるはずです。

例えば、上記のフレーズをスロバキア語に翻訳する場合、 [Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) のルールによれば、スロバキア語には3つの語形があり、正しい訳は以下のようになります:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![スロバキア語](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

この場合、スロバキア語の*"počítač"* (コンピュータ)という単語の3つの形式に応じて3つのテンプレートが表示されます。

*形式を1個無視して、スロバキア語のテンプレートを3つではなく2つだけ使用すると、システムは特定の数字に対して適切なテンプレートを取ることができなくなります。*その結果、英語の *Standard license for 5 computer* のように、文中に文法ミスが発生してしまいます。
> **特定の単語の語形がより少ない場合でも、常に言語にあるだけの最大数の語形を使用してください。**

例えば、セルビア語の *'računar'* （コンピュータ）には、2つの形しかありません。 しかし、セルビア語には3つの複数形があります。

![セルビア語](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

したがって、英語からセルビア語への訳語はこうなるべきです:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

この場合、最後の2つのテンプレートに違いがないことは明らかですが、このルールを守ることは非常に重要です。 **テンプレートの数は、それぞれの言語の複数形の数を反映する必要があります。**(このような複数形文字列の場合)。

### 簡単な要約 {#summury}

AdGuardのプロジェクトを翻訳する際には、複数形の使用を必要とするフレーズに細心の注意を払う必要があります。

最初の3つの種類は簡単に対応できるのですが、4つ目の種類（縦棒記号で区切られた文字列）はより注意深く翻訳する必要があります。

もう一度繰り返しますが、**縦棒記号**と**%count%**プレースホルダーの2つの重要な要素を持つフレーズに出会ったら、以下のことを行ってください:

+ 翻訳する言語の複数形ルールを参照してください。

> テンプレートは、その言語に含まれる複数形の数と一致させる必要があります（たとえ、特定単語自体の形式数が少ない場合でも、言語の数に合わせます）。 言語に2つの複数形がある場合、翻訳では2つのテンプレートを使用、言語に5つの複数形がある場合、翻訳では5つのテンプレートを使用、など。

+ テンプレートとテンプレートの間は、元の文字列と同じように縦棒記号を使用することを忘れないでください。

+ **%count%**プレースホルダーを翻訳したり、変更したり、削除したりしないでください。

これらの簡単なルールをもとに翻訳いただくと、AdGuardの開発者はローカライズプロセスにおける不必要な複雑さを回避することができ、大変助かります。