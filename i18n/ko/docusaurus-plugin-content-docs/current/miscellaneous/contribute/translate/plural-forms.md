---
title: 복수형
sidebar_position: 4
---


전 세계 언어에는 많은 차이가 있습니다. 이러한 차이점 중 하나는 현지화 문제와 관련하여 큰 어려움을 야기할 수 있는 복수형 사용입니다.

복수형에 대한 자세한 내용과 AdGuard 번역에서 복수형이 어떻게 사용되는지 알아보려면 이 글을 읽어보세요.

## 복수형은 무엇을 의미하나요? {#plurals}

어떤 언어의 명사는 여러 복수형 단어 형태를 가질 수 있습니다. 사용법은 대화하는 대상의 수에 따라 다릅니다.

예를 들어, 영어 단어는 단수형으로 무언가를 말할 때 두 가지 단어 형태를 갖습니다. 예를 들어 *'one star'*와 같고, 복수형으로는 *'two stars'*와 같습니다. 별 5개, 26개, 또는 532개라고 말하더라도 마지막 글자 's'는 동일하게 유지됩니다. 그러나 일부 언어에는 복수형이 하나 또는 여러 개가 포함될 수 있습니다. 별 5개, 26개, 또는 532개라고 말하더라도 마지막 글자 's'는 동일하게 유지됩니다. 그러나 일부 언어에는 복수형이 하나 또는 여러 개만 포함될 수 있습니다.

영어와 달리 폴란드어에는 세 가지 복수형 명사가 있습니다. 그 중 하나는 단수로 무언가를 말할 때 사용되고, 다른 형태는 복수형으로 사용되지만 12~14를 제외하고 2~4로 끝나는 숫자가 사용되며, 세 번째 형태는 앞에 다른 숫자가 붙은 단어에 사용됩니다.

이 사진을 살펴보겠습니다. 여기에서 단어 앞에 있을 때 단어의 형태를 결정하는 숫자 그룹을 볼 수 있습니다.

![폴란드어](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png)

이해를 돕기 위해 영어와 폴란드어를 조금 비유해 보겠습니다.

      영어：                                                  폴란드어：
    
      1. 형식 — It takes one hour.                                     1. 형식 — Zajmuje to godzinę.
      2. 형식 — It takes two hours.                                    2. 형식 — Zajmuje to dwie godziny.
      3. 형식 — It takes five hours.                                   3. 형식 — Zajmuje to pięć godzin.

폴란드어 *'godzinę'*(시간)은 세 가지 형태가 있는 반면 영어 단어는 주어진 숫자에 따라 형태가 두 번만 바뀝니다.

폴란드어 외에도 러시아어, 세르비아어, 슬로바키아어, 체코어 등 3개 이상의 복수형이 있는 언어가 많이 있습니다. 하지만 모두 같은 규칙을 따르는 것은 아닙니다. 그렇기 때문에 언어에 복수형이 몇 개나 있는지, 그리고 복수형을 올바르게 사용하는 방법을 아는 것이 매우 중요합니다.

## 복수형 수에 대한 정보는 어디에서 확인할 수 있나요? {#where-to-learn}

복수형을 사용해야 하는 번역에 직면했을 때 해당 언어에 얼마나 많은 단어 형태가 포함되어 있는지 바로 알아차리지 못할 수 있습니다.

다음은 사용할 수 있는 몇 가지 정보 출처입니다.

[현지화 가이드](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html)에는 다양한 언어 목록이 포함되어 있습니다. 다른 언어의 복수형 수는 `nplurals=2`, `nplurals=4` 등과 같은 방식으로 표시됩니다. The numeral after the equals sign `=` indicates the number of plural forms of the respective language.

또한 [Unicode Common Locale Data Repository(CLDR)](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules)에서 복수형에 대한 정보를 확인할 수 있습니다. CLDR 복수형 규칙은 10진수(1.5, 2.3, 100.1…)에 대한 추가 단어 형식을 나타내지만 AdGuard 번역에는 사용하지 않습니다.

## AdGuard 번역의 복수형 {#translations}

우선, 모든 AdGuard 번역에 복수형을 사용해야 하는 것은 아닙니다.

현재 Crowdin에는 복수형을 사용하는 4가지 유형의 문자열이 있습니다.

자세히 살펴보겠습니다.

### 1. `.singular`, `.dual`, `.plural`로 끝나는 문자열 키가 있는 구문이 있습니다. {#1type}

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png)

대부분은 `AdGuard for Windows` 프로젝트에 표시되며 한두 개의 단어로만 구성됩니다.

- `days`
- `extensions`
- `hours`

이러한 구문의 문자열 키와 복수형에 대한 몇 가지 중요한 메모를 볼 수 있는 'Context' 필드에 주의하세요. 문자열 키에는 `Singular`, `Dual`, `Plural`의 단어가 포함될 수 있습니다(예: `FormatDayDeclensionDual`). 이 경우에는 키에 지정된 대로 적절한 복수형을 그대로 두어야 합니다.

### 2. 단수 및 복수 명사가 쉼표로 구분된 문자열 {#2type}

이러한 종류의 문자열은 대부분 `AdGuard for Android` 프로젝트에 집중되어 있습니다.

다음 예를 살펴보세요.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png)

폴란드어와 같이 사용 중인 언어에 복수형 명사가 3개가 있는 경우, 모든 복수형을 쉼표로 구분하여 작성하세요.

`hour, hours — godzinę, godziny, godzin`

명사의 형식이 2개만 있는 경우 같은 형식을 두 번 쓸 필요가 없습니다. *이 규칙은 복수가 포함된 문자열에만 적용됩니다.* 하지만 형식을 두 번 반복해도 괜찮습니다.

### 3. Crowdin이 개발한 패턴을 사용하는 문자열 {#3type}

이것은 복수형이 포함된 문자열을 번역하는 가장 사용자 친화적인 방식입니다.

Crowdin은 사용자에게 다양한 복수형을 가진 특정 양의 문구를 번역할 것을 제안합니다.

언어가 복수형 하나만 제공하는 경우, 번역할 구문은 하나만 표시됩니다. 형식이 3개 이상인 경우, Crowdin은 번역할 문자열을 다른 2개 또는 3개의 문자열로 나누어 제공합니다.

예를 들어

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png)

이러한 문자열을 번역하고 승인할 때는 세심한 주의를 기울여 주세요. 'Other' 필드의 의미를 모른다면 'Many' 필드에 있는 것과 동일한 형식을 붙여넣기만 하면 됩니다. 'Many' 및 'Other' 필드의 번역은 동일할 수 있습니다.

### 4. 세로 막대 기호로 구분된 템플릿이 있는 문자열 {#4type}

이는 `AdGuard Websites` 프로젝트에서 주로 사용되는 가장 복잡한 유형의 AdGuard 문자열입니다.

문장 사이의 세로 막대 기호에 주의하세요. **%count%** 플레이스홀더에 주목하세요. 이렇게 하면 번역에서 복수형을 사용해야 하는 구문을 식별하는 데 도움이 됩니다.

![crowdin *border](https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png)

이제 “`%count%대의 컴퓨터용 일반 라이선스 | %count%대의 컴퓨터용 일반 라이선스`”라는 문자열이 표시된다고 가정해 보겠습니다.

올바르게 번역하려면 무엇을 알아야 하나요?

세로 막대 기호로 구분된 문장을 **'템플릿'**이라고 부릅시다. 실제로는 숫자가 다른 문구의 템플릿 역할을 하기 때문입니다.

다시 예시로 돌아와서 영어에는 두 가지 형식만 포함되어 있으므로 각각 두 개의 템플릿이 있어야 합니다.

`컴퓨터**%count%**대의 기기에서 사용 가능한 일반 라이선스 | 컴퓨터** %count%*대의 기기에서 사용 가능한 일반 라이선스`

**템플릿 1**은 *%count%*컴퓨터용 일반 라이선스입니다.

**템플릿 2**은 *%count%*컴퓨터용 일반 라이선스입니다.

주의해야 할 또 다른 중요한 사항은 다음과 같습니다. **%count%** 플레이스홀더는 평소와 같이 정의하는 단어 앞에 위치합니다. 대신 **%count%** 대신 선택되는 템플릿에 따라 다른 숫자가 표시됩니다.

예를 들어, 복수형이 3개인 다른 언어가 있는 상황에서는 그 사이에 세로 막대 기호 2개가 있는 템플릿 3개가 있어야 합니다.

예를 들어, 위에 언급된 문구를 슬로바키아어로 번역하면, [현지화 가이드](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html) 규칙에 따라 세 가지 단어 형태가 있는데, 올바른 번역은 다음과 같습니다.

`Štandartná licencia pre %count% počítač | Štandartná licencia pre %count% počítače | Štandartná licencia pre %count% počítačov`

![슬로바키아어](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png)

이 경우 슬로바키아어로 ‘počítač’(컴퓨터)라는 단어의 세 가지 형식이 포함된 세 가지 템플릿이 표시됩니다.

*형식 중 하나를 무시하고 슬로바키아어에 3개가 아닌 2개의 템플릿만 사용하면 시스템이 특정 숫자에 적합한 템플릿을 사용할 수 없어* 결과적으로 영어와 같이 문장에 문법 오류가 발생하게 됩니다: *컴퓨터 5대용 일반 라이선스입니다*.
> **단어 자체의 단어 형식이 적은 경우에도 항상 해당 언어의 단어 수만큼의 형식을 사용하세요.**

예를 들어, 세르비아어 단어 *'računar'*(컴퓨터)에는 두 가지 형식이 있습니다. 하지만 세르비아어에는 3가지 복수형이 있습니다.

![세르비아어](https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png)

따라서 영어에서 세르비아어로 번역해야 합니다.

`Standardna licenca za %count% računar|Standardna licenca za %count% računara | Standardna licenca za %count% računara`

마지막 두 템플릿에는 차이가 없는 것은 분명하지만 규칙을 지키는 것이 매우 중요합니다: **템플릿의 수는 해당 언어의 복수형 수를 반영해야 합니다!**(일반적으로 복수형이 포함된 문자열의 경우).

## 간단한 요약 {#summary}

AdGuard 프로젝트를 번역할 때는 복수형을 사용해야 하는 문구에 세심한 주의를 기울이세요.

처음 세 가지 유형의 문자열은 어느 정도 수행하기 쉽지만 네 번째 유형은 더 많은 주의가 필요합니다.

다시 한 번 강조하지만, **세로 막대 기호** 및 **%count%** 자리 표시자를 발견하면 다음을 수행하세요.

- 번역하는 언어의 복수형 규칙을 참조하세요.

템플릿의 수는 언어에 포함된 복수형 수와 일치해야 하며, 일부 단어의 경우 그 자체의 형식이 더 적은 경우에도 마찬가지입니다. 복수형 2개 — 번역 템플릿 2개, 복수형 5개 — 템플릿 5개 등입니다.

- 템플릿은 원래 문자열로 표시되므로 템플릿 사이에 세로 막대 기호를 사용하는 것을 잊지 마세요.

- **%count%** 플레이스홀더를 번역, 입력 또는 삭제하지 마세요.

이러한 간단한 규칙을 따르면 AdGuard 개발자가 현지화 과정에서 불필요한 복황한 상황을 피할 수 있습니다.
