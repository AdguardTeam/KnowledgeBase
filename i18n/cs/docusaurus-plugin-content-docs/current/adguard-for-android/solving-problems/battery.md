---
title: Problémy se spotřebou baterie a datového provozu
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Někdy si můžete všimnout, že podle statistik integrovaných v systému Android spotřebovává AdGuard velké množství dat a/nebo zdrojů baterie.

Oba tyto problémy jsou dvě strany jedné mince. Vzhledem k tomu, že v procesu filtrování prochází veškerý datový provoz přes AdGuard, systém Android rozhodne, že je to právě AdGuard, kdo jej celý spotřebuje. Ve skutečnosti to ovšem není pravda.

Spotřeba baterie a datového provozu uvedená ve statistikách zařízení **neodpovídá skutečnosti**. Jde o to, že systém Android připisuje veškerý datový provoz přes Wi-Fi a mobilní sítě AdGuardu, který byl ve skutečnosti spotřebován jinými aplikacemi. Díky tomu se skutečný podíl AdGuardu na celkovém spotřebovaném datovém provozu a prostředcích baterie zvyšuje a podíl ostatních aplikací naopak klesá.

### Vlastní obrazovka statistik využití baterie

Abychom tuto mylnou představu zmírnili, přidali jsme novou obrazovku s názvem "Využití baterie". Můžete ji otevřít klepnutím na ikonu baterie v pravém horním rohu hlavní obrazovky.

![Statistiky baterie *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/battery/batterystats.png)

Uvnitř najdete graf, který zobrazuje spotřebu zdrojů baterie AdGuard za posledních 24 hodin s možností získat podrobnější údaje po jednotlivých hodinách klepnutím na tečky v grafu. Kromě toho je zde také číselný rozpis příslušných údajů a krátké technické vysvětlení.

### Skutečný příklad

Na níže uvedených snímcích obrazovky vidíte statistiky spotřeby zdrojů baterie za noc a následující ráno:

![Baterie 1 *mobile](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_1.png) ![Baterie 2 *mobile](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_2.png) ![Baterie 3 *mobile](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/battery_3.png)

Z těchto snímků obrazovky je patrné, že:

1. AdGuard je podle očekávání na vrcholu žebříčku. To je obecně typické pro chytré telefony (a vůbec ne pro tablety bez 4G, protože WiFi je mnohem méně "nákladná" z hlediska spotřeby baterie).

2. Na druhém snímku obrazovky si všimněte počtu odeslaných mobilních a Wi-Fi paketů, které byly připsány AdGuardu (odeslané mobilní pakety и odeslané Wi-Fi pakety).

3. Na třetím snímku jsou statistiky pro jednoho ze skutečných konzumentů provozu, Yandex.Browser. Nebyl mu připsán téměř žádný datový provoz, zatímco ve skutečnosti spotřeboval 70 % celkového datového provozu.

### Kolik prostředků baterie AdGuard skutečně spotřebovává?

Nejprve si řekneme něco málo z teorie a uvedeme si souvislosti s potřebnými údaji.

1. Android odvozuje spotřebu baterie podle takzvaného "Profilu napájení", který udává každý výrobce: <https://source.android.com/devices/tech/power/values.html>

2. Hlavní součástí tohoto profilu je soubor hodnot v mAh, které určují spotřebu baterie pro každou část zařízení: <https://source.android.com/devices/tech/power/values.html>

Například podle výše uvedené tabulky:

_wifi.active=_ 31mA dodatečná spotřeba v mAh způsobená výměnou dat Wi-Fi.

_radio.active=_ 100-300mA dodatečná spotřeba v mAh způsobená výměnou dat přes mobilní síť.

_cpu.active=_ 100-200mA dodatečná spotřeba v mAh způsobená prací procesoru.

3. AdGuard sám o sobě nespotřebovává téměř žádné prostředky, takže pro účely vyhodnocení spotřeby baterie se zbavme 'paketů Mobile/WiFi' a 'CPU'.

Vzorec pro výpočet spotřeby:
> "CPU TIME (ms)" X "cpu.active" / (60 * 60 * 1000) = "POWER USE mAh"

Doplňme do tohoto vzorce reálná čísla.

Vezmeme _CPU celkem_ z druhého snímku obrazovky a převedeme na milisekundy: 506000

Koeficient _cpu.active_ pro 2GHz bude roven zhruba 225mAh

Konečný výsledek
> 506000 * 225 / (60 * 60 * 1000) = 31,625mAh

### Závěr

Skutečná spotřeba je **několikanásobně nižší** než se uvádí ve statistikách systému Android. Místo 220mAh by to mělo být někde kolem 31-40mAh. Na druhou stranu spotřeba prohlížeče by neměla být 66mAh, ale ~200mAh.
