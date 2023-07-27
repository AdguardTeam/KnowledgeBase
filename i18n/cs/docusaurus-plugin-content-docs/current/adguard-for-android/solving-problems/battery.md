---
title: Problémy se spotřebou baterie a datového provozu
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Na zařízeních se systémem Android 6 a starším se v integrovaných statistikách často připisovalo vysoké využití dat a/nebo baterie AdGuardu. Bylo to proto, že AdGuard počítal veškerý provoz, který filtroval z různých aplikací. V důsledku toho byl podíl AdGuardu na celkovém využití dat a baterie nadhodnocen, zatímco podíl ostatních aplikací byl podhodnocen.

With Android 7, however, this scenario has improved. Nyní se údaje uvedené ve vestavěných statistikách využití dat systému Android velmi blíží skutečnosti, i když v údajích o využití baterie jsou drobné nesrovnalosti.

However, AdGuard users can always get a true picture of the situation on the *Battery usage* screen.

### Vlastní obrazovka statistik využití baterie

Přístup k ní získáte v sekci *Statistiky* → *Využití baterie*.

![Statistiky baterie *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Uvnitř najdete graf, který zobrazuje spotřebu zdrojů baterie AdGuard za posledních 24 hodin s možností získat podrobnější údaje po jednotlivých hodinách klepnutím v grafu. Kromě toho je zde také číselný rozpis příslušných údajů a krátké technické vysvětlení.

### Kolik prostředků baterie AdGuard skutečně spotřebovává?

First, let us lay down a bit of theory and links with necessary data.

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
