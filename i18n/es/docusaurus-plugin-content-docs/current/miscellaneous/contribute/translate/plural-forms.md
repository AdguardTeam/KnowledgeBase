---
title: Formas plurales
sidebar_position: 4
---


Hay muchas diferencias entre los idiomas del mundo. Una de estas diferencias es el uso de formas plurales que pueden causar grandes dificultades cuando se trata de un problema de localización.

Te recomendamos encarecidamente que leas correctamente este artículo para obtener más información sobre las formas plurales y cómo se utilizan en las traducciones de AdGuard.

## ¿Qué son las formas plurales? {#plurals}

Los sustantivos en diferentes idiomas pueden tener varias formas de palabras en plural. Su uso depende del número de cosas de las que se hable.

Por ejemplo, las palabras en inglés tienen dos formas de palabras cuando se habla de algo en singular, como *"one star"*, y en plural: *"two stars"*. No importa si dices cinco, veintiséis o incluso quinientas treinta y dos estrellas, la terminación ''s'' seguirá siendo la misma. Pero algunos idiomas pueden contener solo una o varias formas plurales.

A diferencia del inglés, el idioma polaco tiene tres formas plurales de sustantivos. Uno de ellos se usa cuando se habla de algo en singular, otra forma se usa en plural pero con números que terminan en 2–4, excluyendo 12–14, y la tercera forma, para palabras con otros números delante de ellos.

Echemos un vistazo a esta imagen. Aquí puedes ver los grupos de números que determinan la forma de una palabra cuando se encuentran frente a ella.

![Polaco](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

Dibujemos un pequeño paralelo entre el inglés y el polaco para una mejor comprensión:

      La versión en inglés:                                                 Los equivalentes polacos:
    
      1. forma: It takes one hour.                                     1. forma: Zajmuje a godzinę.
      2. forma: It takes two hours.                                    2. forma: Zajmuje a dwie godziny.
      3. forma: It takes five hours.                                   3. forma: Zajmuje a pięć godzin.

Ahora está claro que el polaco *'godzinę'* (hora) tiene tres formas diferentes, mientras que la palabra inglesa cambia su forma con números solo dos veces.

Además del polaco, hay muchos otros idiomas que tienen tres formas plurales y más, como el ruso, el serbio, el eslovaco, el checo, etc. Pero no todos obedecen a la misma regla. Por eso es tan importante saber cuántos plurales tiene tu idioma y cómo usarlos correctamente.

## ¿Dónde puedes aprender sobre el número de formas plurales? {#where-to-learn}

Cuando se enfrenta a una traducción que requiere el uso de plurales, es posible que no puedas darte cuenta de inmediato de cuántas formas de palabras contiene tu idioma.

Aquí hay algunas fuentes de información que puedes utilizar.

[La Guía de localización](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) contiene una amplia lista de idiomas. El número de formas plurales para diferentes idiomas se muestra de esta manera: `nplurales=2`, `nplurales=4` y así sucesivamente. The numeral after the Equals sign `=` indicates the number of plural forms of the respective language.

Además, puedes obtener información sobre formas plurales en el [Repositorio de datos de configuración regional común](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules) (CLDR) de Unicode. Las reglas CLDR Plural indican una forma de palabra adicional para los números decimales (1,5; 2,3; 100,1…), pero no las usamos en las traducciones de AdGuard.

## Plurales en las traducciones de AdGuard {#translations}

En primer lugar, queremos mencionar que no todas las traducciones de AdGuard requieren el uso de formas plurales.

Actualmente, tenemos 4 tipos de cadenas en Crowdin que implican el uso de plurales.

Veámoslos más de cerca.

### 1. Frases con claves de cadena que terminan en `.singular`, `.dual`, `.plural` {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

La mayoría de ellos están representados en el proyecto `AdGuard para Windows` y constan de solo una o dos palabras:

- `días;`
- `extensiones;`
- `horas`

Presta atención a las claves de cadena de dichas frases y al campo "Contexto", donde puedes ver algunas notas importantes sobre los plurales. Las claves de cadena pueden contener `Singular`, `Dual`, `Plural` palabras (ej.`FormatDayDeclensionDual`). En este caso, debes dejar la forma plural adecuada tal como se especifica en la clave.

### 2. Cadenas con sustantivos singulares y plurales separados por comas {#2type}

Este tipo de cadenas se concentra principalmente en el proyecto `AdGuard para Android`.

Mira el ejemplo:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

Si hay 3 formas plurales de sustantivos en tu idioma (como en polaco), escribe todas las formas plurales separadas por comas.

`hora, horas - godzinę, godziny, godzin`

En caso de que un sustantivo tenga solo 2 formas, no hay necesidad de escribir la misma forma dos veces (¡normalmente*solo para este tipo de strings con plurales!*). Sin embargo, no será un error si repites la forma dos veces.

### 3. Cadenas que usan el patrón desarrollado por Crowdin {#3type}

Este es el esquema más fácil de usar para traducir strings con plurales.

Crowdin sugiere a los usuarios que traduzcan cierta cantidad de frases con diferentes formas plurales.

Si tu idioma proporciona solo una forma plural, verás solo una frase para traducir. Si hay tres o más formas, Crowdin te proporcionará el string dividida en otras dos o tres cadenas para traducir.

Por ejemplo:

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

Está atento al traducir estas strings y aprobarlas. Si no tienes idea de lo que significa el campo "Other", simplemente pega el mismo formulario que está en el campo "Many". Las traducciones de los campos "Many" y "Other" pueden ser las mismas.

### 4. Strings con plantillas separadas por el signo de la barra vertical {#4type}

Este es el tipo más complicado de strings de AdGuard que se usa principalmente en el proyecto `AdGuard Websites`.

Presta mucha atención a un signo de barra vertical entre las oraciones y los placeholders **%count%** en las frases originales; esto te ayudará a identificar frases donde las traducciones requieren el uso de formas plurales.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

Ahora, imaginemos: se enfrentas a una string de este tipo: `Licencia estándar para %count% computadora | Licencia estándar para %count% computadores`.

¿Qué debes saber para traducirlo correctamente?

Llamemos a las oraciones que están divididas por un signo de barra vertical **"plantillas"**, porque en realidad sirven como plantillas para frases con números diferentes.

Volviendo al ejemplo, como el idioma inglés incluye solo dos formas, debería haber dos plantillas respectivamente:

`Licencia estándar para *%count%* computadora | Licencia estándar para *%count%* computadoras`

donde **plantilla 1** es la licencia Estándar para *%count%* computadora,

y **plantilla 2** es la licencia Estándar para *%count%* computadoras

Otra cosa importante a la que debes prestar atención son los placeholders **%count%** que, como de costumbre, se colocan antes de las palabras que definen. En lugar de **%count%** aquí aparecerán diferentes números dependiendo de las plantillas que se elijan.

En una situación con otro idioma que tiene, digamos, tres formas plurales, debe haber tres plantillas con dos barras verticales entre ellas.

Por ejemplo, cuando traducimos la frase mencionada anteriormente al eslovaco, que de acuerdo con la regla del [Guía de localización](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) tiene tres formas de palabras, la traducción correcta se verá así:

`**Štandartná licencia pre *%count%* počítač | Štandartná licencia pre *%count%* počítače | Štandartná licencia pre *%count%* počítačov**`

![Eslovaco](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

En este caso, vemos tres plantillas que contienen tres formas de la palabra *"počítač"* (computadora) en eslovaco.

*Si ignoramos una de las formas y usamos solo dos plantillas para eslovaco en lugar de tres, el sistema no podrá tomar una plantilla adecuada para ciertos números* y, como resultado, tendremos errores gramaticales en las oraciones, como en inglés: *Standard license for 5 computer*.
> **Siempre usa tantas formas como haya en tu idioma, incluso cuando la palabra en sí tiene menos formas.**

Por ejemplo, la palabra serbia *'računar'* (computadora) tiene solo dos formas. Pero hay 3 formas plurales en serbio.

![Serbio](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

Por lo tanto, la traducción del inglés al serbio debería ser:

`**Standardna licenca za *%count%* računar | Standardna licenca za *%count%* računara | Standardna licenca za *%count%* računara**`

Aunque es obvio que las dos últimas plantillas no tienen diferencias, es muy importante mantener la regla: **El número de plantillas debe reflejar el número de formas plurales del idioma respectivo!**(típicamente para este tipo de cadenas con plurales).

### Breve resumen {#summury}

Al traducir proyectos de AdGuard, presta mucha atención a las frases que requieren el uso de formas plurales.

Mientras que los tres primeros tipos de strings de este tipo son más o menos fáciles de ejecutar, el cuarto tipo exige más vigilancia.

Y de nuevo: si encuentras una frase original con dos elementos importantes: **, el signo de barra vertical** y **%count%** marcadores de posición, haz lo siguiente:

- Consulta la regla del plural de la lengua a la que traduces;

La cantidad de tus plantillas debe ser consistente con la cantidad de formas plurales que tiene tu idioma, incluso en los casos en que algunas palabras tienen menos formas plurales. Dos formas plurales, dos plantillas en traducciones; cinco formas plurales, cinco plantillas, etc.

- No olvides usar un signo de barra vertical entre las plantillas tal como se representa en los strings originales;

- No traduzcas, rellenes ni elimines los placeholders **%count%** .

Al seguir estas sencillas reglas, ayudarás a los desarrolladores de AdGuard a evitar muchas complicaciones innecesarias durante el proceso de localización.
