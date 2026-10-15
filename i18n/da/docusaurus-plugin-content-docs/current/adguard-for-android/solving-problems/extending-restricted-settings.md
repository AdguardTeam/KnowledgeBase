---
title: Problemer forårsaget af udvidede restriktive indstillinger
sidebar_position: 17
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

I et forsøg på at forbedre brugerfortroligheden har Google udvidet restriktionsindstillingerne i Android 15. Flere indstillinger, såsom _App-brugsadgang_, kræver nu en ekstra tilladelse for at kunne aktiveres. Da funktionerne i _[Firewall](/adguard-for-android/features/protection/firewall)_ og _[Detektér Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south- korea)_ kræver, at indstillingen _App-brugsadgang_ er aktiveret mhp. korrekt funktion, kan der opleves problemer under brug af dem. Følg nedenstående trin for at løse disse problemer:

:::note

AdGuard har en striks nul logning-politik, hvilket betyder, at vi hverken indsamler eller sender brugerdata til tredjeparter. Vi beder kun om adgang til data, uden hvilke appen ikke vil kunne fungere.

:::

## Basisvejledning

1. Gå til **Indstillinger** på Android-enheden.
2. Tryk på **Apps**.
3. Tryk på **AdGuard**

![AdGuard i Apps \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted1.png)

Kan den ikke findes, tryk først på **Vis alle apps** eller **App-info**.

1. Tryk på **Mere** (⁝) → _Tillad begrænsede indstillinger_.

![Tillad begrænsede indstillinger \*mobil](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted2.png)

Følg skærmvejledningen.

Færdig! Nu vil funktionerne _Firewall_ og _Detektér Samsung Pay_ fungere korrekt.

![Begrænsede indstillinger tilladt for AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/restricted3.png)

## OneUI 7.0-brugere

På Samsung-enheder med OneUI 7.0 følger app-tilladelsesindstillingerne en anden sti. Følg disse trin for at opsætte adgang til app-brug:

1. Åbn _Systemindstillinger_ → _Apps_

![App-indstillinger \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/apps.jpg)

1. Tryk på menuikonet (⋮) øverste til højre og vælg _Særlig adgang_

![Særlig adgang \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/three-dots.jpg)

1. Vælg _Brugsdataadgang_

![Særlig adgang-menu \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/special.jpg)

1. Find og aktivér _AdGuard_

![Brugsdataadgang \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/problems-caused-by-extending-restricted-settings/usage_data.jpg)

Færdig!
