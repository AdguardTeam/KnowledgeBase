---
title: Formas plurais
sidebar_position: 4
---


Existem muitas diferenças entre as línguas do mundo. Uma dessas diferenças é o uso de formas plurais que podem trazer grandes dificuldades na questão da localização.

Recomendamos fortemente que você leia este artigo com atenção para saber mais sobre as formas plurais e como elas estão sendo usadas nas traduções do AdGuard.

## O que quer dizer "formas plurais"? {#plurals}

Substantivos em diferentes idiomas podem ter várias formas plurais. Seu uso depende do número de coisas sobre as quais você está falando.

Por exemplo, as palavras em inglês têm duas formas quando se fala de algo no singular, como *"one star"* e, no plural, *"two stars"*. Não importa se você disser cinco, vinte e seis ou mesmo quinhentas e trinta e duas estrelas, o final "s" permanecerá o mesmo. Mas algumas línguas podem conter apenas uma ou várias formas plurais.

Em contraste com o inglês, a língua polonesa tem três formas plurais de substantivos. Uma delas é usada para falar sobre algo no singular, outra forma é usada no plural, mas com números terminando em 2–4, excluindo 12–14, e a terceira forma para palavras com outros números na frente delas.

Vamos dar uma olhada nesta imagem. Aqui pode ver os grupos de numerais que determinam a forma de uma palavra quando está em frente a ela.

![Polonês](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

Vamos traçar um pequeno paralelo entre o inglês e o polonês para melhor compreensão:

      A versão em inglês:                                                 Os equivalentes poloneses:
    
      1. forma — It takes one hour.                                     1. forma — Zajmuje para godzinę.
      2. forma — It takes two hours.                                    2. forma — Zajmuje para dwie godziny.
      3. forma — It takes five hours.                                   3. forma — Zajmuje to pięć godzin.

Agora está claro que o polonês *'godzinę'* (hora) tem três formas diferentes, enquanto a palavra em inglês muda sua forma com determinados números apenas duas vezes.

Com exceção do polonês, existem muitos outros idiomas que têm três formas plurais e mais, como russo, sérvio, eslovaco, tcheco etc. Mas nem todos obedecem à mesma regra. É por isso que é tão importante saber quantas formas plurais seu idioma contém e como utilizá-las de forma correta.

## Onde você pode aprender sobre o número de formas plurais? {#where-to-learn}

Quando você se depara com uma tradução que exige o uso de plurais, talvez não consiga perceber imediatamente quantas formas de palavras seu idioma contém.

Aqui estão algumas fontes de informação que você pode usar.

[O Guia de Localização](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) contém uma ampla lista de idiomas. O número de formas plurais para diferentes idiomas é mostrado desta forma: `nplurals=2`, `nplurals=4` e assim por diante. The numeral after the Equals sign `=` indicates the number of plural forms of the respective language.

Além disso, você pode obter informações sobre formas plurais no [Unicode Common Locale Data Repository](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR). As regras do plural CLDR indicam uma forma de palavra adicional para números decimais (1,5; 2,3; 100,1…), mas não as usamos nas traduções do AdGuard.

## Plurais nas traduções do AdGuard {#translations}

Em primeiro lugar, queremos mencionar que nem toda tradução do AdGuard requer o uso de formas plurais.

Atualmente, temos 4 tipos de strings no Crowdin que envolvem o uso de plurais.

Vamos dar uma olhada mais de perto nelas.

### 1. Frases com chaves de string terminando em `.singular`, `.dual`, `.plural` {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

A maioria deles é representada no projeto `AdGuard for Windows` e consiste em apenas uma ou duas palavras:

- `dias;`
- `extensões;`
- `horas`

Por favor, preste atenção às chaves de string de tais frases e ao campo "Contexto", onde você pode ver alguns detalhes importantes sobre plurais. As chaves de string podem conter palavras no `Singular`, `Dual` ou no `Plural` (ex.`FormatDayDeclensionDual`). Nesse caso, você deve deixar o plural apropriado conforme especificado na chave.

### 2. Strings com substantivos singulares e plurais separados por vírgulas {#2type}

Esse tipo de sequência está concentrado principalmente no projeto `AdGuard para Android`.

Por favor, veja o exemplo:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

Se houver 3 formas plurais de substantivos em seu idioma (como em polonês), escreva todas as formas plurais separadas por vírgulas.

`hora, horas — godzinę, godziny, godzin`

No caso de um substantivo ter apenas 2 formas, não há necessidade de escrever a mesma forma duas vezes (*tipicamente apenas para este tipo de strings com plurais!*). No entanto, não será um erro se você repetir o formulário duas vezes.

### 3. Strings que usam o padrão desenvolvido pelo próprio Crowdin {#3type}

Este é o esquema mais amigável de tradução de strings com plurais.

Crowdin sugere aos usuários que traduzam certa quantidade de frases com diferentes formas plurais.

Se o seu idioma fornecer apenas uma forma plural, você verá apenas uma frase para traduzir. Se houver três ou mais formulários, o Crowdin fornecerá a string dividida em outras duas ou três strings para traduzir.

Por exemplo:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Por favor, esteja atento ao traduzir essas strings e aprová-las. Se você não tem ideia do que significa o campo "Outros", basta colar a mesma forma que estiver no campo "Muitos". As traduções dos campos "Muitos" e "Outros" podem ser as mesmas.

### 4. Strings com modelos separados pelo sinal de barra vertical {#4type}

Este é o tipo mais complicado de strings do AdGuard, usado principalmente no projeto `AdGuard Websites`.

Preste muita atenção a um sinal de barra vertical entre as frases e espaços reservados **%count%** nas frases originais, isso ajudará você a identificar frases em que as traduções exigem o uso de formas plurais.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Agora, vamos imaginar — você se depara com essa string: `Licença padrão para %count% computador | Licença padrão para %count% computadores`.

O que você precisa saber para traduzi-lo corretamente?

Vamos chamar as sentenças que são divididas por um sinal de barra vertical **de "modelos"**, porque na verdade elas servem como moldes para frases com números diferentes.

Voltando ao exemplo, como a língua inglesa inclui apenas duas formas, deve haver dois templates respectivamente:

`Licença padrão para *%count%* computador | Licença padrão para *%count%* computadores`

onde o **modelo 1** é a Licença padrão para *%count%* computador,

e o **modelo 2** é a Licença padrão para *%count%* computadores

Outra coisa importante a que você deve prestar atenção são os espaços reservados **%count%** que, como sempre, ocorrem antes das palavras que definem. Em vez de **%count%** aqui aparecerão números diferentes dependendo de quais modelos estão sendo escolhidos.

Em uma situação com outro idioma que tenha, digamos, três formas plurais, deve haver três modelos com dois sinais de barra vertical entre eles.

Por exemplo, quando traduzimos a frase acima mencionada para o eslovaco, que de acordo com a regra do [Guia de Localização](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) tem três formas de palavras, a tradução correta ficará assim:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Eslovaco](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

Neste caso, vemos três modelos que contêm três formas da palavra *"počítač"* (computador) em eslovaco.

*Se ignorarmos uma das formas e usarmos apenas duas predefinições para o eslovaco em vez de três, o sistema não conseguirá aceitar uma predefinição adequada para determinados números* e, como resultado, teremos erros gramaticais nas frases, como em inglês: *Standard license for 5 computer*.
> **Sempre use tantas formas quantas houver em seu idioma, mesmo quando a própria palavra não precisa de todas elas.**

Por exemplo, a palavra sérvia *'računar'* (computador) tem apenas duas formas. Mas existem 3 formas plurais em sérvio.

![Sérvio](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Assim, a tradução do inglês para o sérvio deve ser:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

Embora seja óbvio que os dois últimos modelos não têm diferenças, é muito importante manter a regra: **O número de modelos deve refletir o número de formas plurais do respectivo idioma!**(normalmente para este tipo de strings com plurais).

### Breve resumo {#summury}

Ao traduzir projetos do AdGuard, preste muita atenção às frases que exigem o uso de formas plurais.

Enquanto os três primeiros tipos de strings são mais ou menos fáceis de fazer, o quarto tipo exige mais atenção.

E novamente: se você encontrar uma frase original com dois elementos importantes: **o sinal de barra vertical** e placeholders **%count%**, faça o seguinte:

- Consulte a regra do plural do idioma para o qual você traduz;

O número de seus modelos deve ser consistente com o número de formas plurais que seu idioma inclui, mesmo nos casos em que algumas palavras tenham menos formas. Duas formas plurais — dois modelos em traduções; cinco formas plurais — cinco modelos, etc.

- Não se esqueça de usar um sinal de barra vertical entre os modelos da forma que é representado nas strings originais;

- Não traduza, preencha ou exclua os placeholders **%count%**.

Ao seguir essas regras simples, você ajudará os desenvolvedores do AdGuard a evitar muitas complicações desnecessárias durante o processo de localização.
