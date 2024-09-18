---
title: 复数形式
sidebar_position: 4
---


众所周知，世界上的语言之间存在很多差异。 其中一个是使用复数形式，翻译成不同语言可能会造成很大困难。

因此，我们强烈建议您好好阅读本文，以详细了解复数形式以及翻译 AdGuard 时如何使用它们。

## 复数形式是什么意思？ {#plurals}

不同语言的名词可以有几种复数形式。 它们的用法取决于单词前面的特定数字，以指示该单词表示的数目。

例如，当谈论不同数量时，英语单词有两种单词形式。例如 *'one star'* 或 *'two stars'*。 无论您说的是五颗星，二十六颗星还是五百三十二颗星，结尾 's' 都将保持不变。 但是有些语言只有一种形式，反之，有些语言也可以有更多种复数形式。

与英语相比，波兰语里的名词具有三种复数形式。 在说单数形式时使用一种形式，复数形式时以 2-4 数字为结尾的名词（不包括 12-14）使用另一种形式；但还有第三种形式，前面带有其他数字的单词。

让我们来看看这张图片。 在这里，可以看到一组数字。按这些数字要选择数字后面的单词形式。

![波兰语](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

我们来在英语和波兰语之间做个小比较，以便更好理解：

      英文版：                                                  波兰语等效：
    
      1. 形式 - It takes one hour.                                     1. 形式 - Zajmuje to godzinę.
      2. 形式 - It takes two hours.                                    2. 形式 - Zajmuje to dwie godziny.
      3. 形式 - It takes five hours.                                   3. 形式 - Zajmuje to pięć godzin.

现在很明显的是，波兰语 *'godzinę'*（小时）具有三种不同的形式，而英语单词仅更改两次单词形式。

除波兰语之外，世界上还有许多其他具有三种复数形式的语言，包括俄语，塞尔维亚语，斯洛伐克语，捷克语等语言。 但并非所有语言都遵循相同语法规则。 这就是了解您的语言包含多少种复数形式以及如何正确应用它们如此重要的原因。

## 在哪里可以了解复数形式的变体数量？ {#where-to-learn}

当您需要使用复数形式的翻译时，您很可能无法立即意识到某些语言的单词形式的数量。

以下是您可以使用的一些信息来源。

[本地化指南](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) 包含广泛的语言列表。 不同语言复数形式的数量以这种方式显示：`nplurals=2`、`nplurals=4`，依此类推。 The numeral after the Equals sign `=` indicates the number of plural forms of the respective language.

此外，您还可以在 [Unicode 通用语言环境数据存储库](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules)（CLDR）中获取有关复数形式的相关信息。 CLDR 复数规则，即指十进制数字（1.5; 2.3; 100.1…）的其他词形式。但在 AdGuard 翻译中我们不使用它们。

## AdGuard 翻译中的复数形式 {#translations}

首先，您得明白并非每个 AdGuard 译文都需要使用复数形式。

当前，我们在 Crowdin 上有四种使用复数形式字符串的类型。

我们来仔细看看它们。

### 1. 带有 `.singular`、`.dual`、`.plural` 作为结尾的字符串键的短语 {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

其中大多数属于 `AdGuard for Windows` 项目中，仅包含一两个单词：

- `days；`
- `extensions；`
- `hours`

请注意字符串键，在 "Context" 字段中您会看到一些关于复数形式的重要注解。 字符串键可能包含 `Singular`、 `Dual`、 `Plural` 单词（例如`FormatDayDeclensionDual`）。 在这种情况下，您应该保留键中指定的适当复数形式。

### 2. 单数和复数名词字符串以逗号分隔 {#2type}

这种字符串主要在 `AdGuard for Android` 项目中。

请看示例：

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

如果您的语言名词具有三种复数形式（正如波兰语)，请用逗号分隔每一个复数形式。

`hour, hours — godzinę, godziny, godzin`

如果一个名词只有两种形式，则无需重复写同一形式（*通常仅适用于这种带有复数形式的字符串！*）。 但是，如果您把同一个形式重写两次也不会出错。

### 3. 使用 Crowdin 发展模式的字符串 {#3type}

这是进行复数字符串翻译的最佳用户友好的方案。

Crowdin 为用户提供翻译一定数量具有不同复数形式的短语的功能。

如果您的语言仅有一种复数形式，则您只会看到一个要翻译的短语。 如果语言具有三种形式，Crowdin 将为您提供被分出另外两到三部分的字符串进行翻译。

例如：

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

在翻译和批准这些字符串时，请注意一下， 如果您不知道 “Other” 字段的含义，则只需粘贴与 “ Many” 字段中相同的表单即可。 “Many” 和 “Other” 字段的内容可以相同。

### 4. 带有用竖线分隔模板的字符串 {#4type}

这是最复杂的 AdGuard 字符串类型，通常在 `AdGuard Websites` 项目中使用。

请密切注意句子与原始短语中的 **%count%** 占位符之间的竖线符号。这将帮助您识别需要使用复数形式短语的翻译。

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

现在，我们来想象一下。您将面临这样的短语：`"Standard license for %count% computer | Standard license for %count% computers"`。

您应该知道哪些信息才能正确翻译它？

这些用竖线符号的句子称为**“ templates”**，因为它们被用作具有不同数字的短语的模板。

回到示例，由于英语仅包含两种复数形式，因此应分别有两个模板：

`Standard license for *%count%* computer | Standard license for *%count%* computers`

其中**模板 （template）1** – *％count％* 台计算机（computer）的标准许可，

和**模板（template）2** – *％count％* 台计算机（computers）的标准许可

您应注意的另一重要事项是 **％count％** 占位符，通常在其定义的单词前出现。 根据选择的模板，此处将显示不同的数字，而不是 **％count％** 。

在另一种语言具有三种复数形式的情况下，应该有三个模板，即两个竖线符号。

例如，当我们将上面提到的短语翻译成斯洛伐克语时，根据 [Localization Guide](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) 的规则，它具有三种词形，正确的翻译应该是这样的：

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![斯洛伐克语](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

在这种情况下，我们看到三个模板，其中包含斯洛伐克语中单词 *"počítač"* （计算机）的三种形式。

*如果我们忽略其中一种形式，而只为斯洛伐克语使用两个，而不是三个模板，则系统将无法为某些数字采用适当的模板*。结果是，句子中将出现语法错误，例如英语：*Standard license for 5 computer（正确应是：Standard license for 5 computers）*。
> **始终使用您所在语言中尽可能多的形式，即使单词本身的词形较少。**

例如，塞尔维亚单词 *'računar'*（计算机（computer））只有两种形式。 但是塞尔维亚语有 3 种复数形式。

![塞尔维亚语](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

因此，英语翻译成塞尔维亚语是：

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

尽管很明显，最后两个模板没有区别，但保持规则非常重要：**模板的数量应反映相应语言的复数形式** (通常针对这种带复数的字符串)。

### 简短的摘要 {#summury}

在翻译 AdGuard 项目时，请密切注意需要使用复数形式的短语。

尽管前三种类型的字符串或多或少容易执行，但第四类要求更高的警惕性。

重申一次：如果您遇到包含两个重要元素的原始词组：**竖线符号**和 **％count％** 占位符，请执行以下操作：

- 指翻译成一种语言的复数规则；

模板的数量应该与您的语言包含的复数形式的数量一致，即使某些单词本身的形式相对较少。 两种复数形式对应翻译中的两个模板；五个复数形式对应五个模板等。

- 不要忘记在模板之间使用竖线符号；

- 请勿翻译，填写或删除 **％count％** 占位符。

通过遵循这些简单的规则，您将会帮助 AdGuard 开发人员避免翻译过程中发生的许多不必要的复杂问题。
