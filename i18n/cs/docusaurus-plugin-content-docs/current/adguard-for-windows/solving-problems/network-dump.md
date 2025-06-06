---
title: Jak shromáždit výpis (dump) sítě pomocí Wireshark
sidebar_position: 12
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Někdy je při diagnostice síťových problémů nutné zjistit, jak přesně zařízení komunikuje s Internetem. Shromáždění výpisu sítě nám umožní analyzovat tento provoz a zjistit příčinu problému. V tomto návodu vám ukážeme, jak zachytit výpis sítě pomocí Wireshark.

::: note

Údaje a soubory poskytnuté v souborech dump jsou zpracovávány v souladu se [Zásadami ochrany osobních údajů AdGuardu](https://adguard.com/privacy.html).

:::

## 1. Nainstalujte Wireshark

Stáhněte si Wireshark z [oficiální stránky](https://www.wireshark.org/download.html). Spusťte instalační program a postupujte podle pokynů. Po vyzvání nainstalujte Npcap — tento ovladač je nezbytný pro zachycení síťových paketů programem Wireshark.

## 2. Připravte se na zachycení

Než začnete, **zavřete všechny nepotřebné programy a záložky prohlížeče**. To pomůže omezit množství nesouvisejících dat ve výpisu.

## 3. Zachyťte síťový provoz

Otevřete Wireshark a uvidíte seznam síťových rozhraní. Vyberte si to, které potřebujete: Pokud používáte kabelové připojení, vyberte možnost Ethernet, nebo bezdrátové připojení, pokud používáte Wi-Fi.

Pokud si nejste jisti, které rozhraní zvolit, vyberte to, které má v grafu největší aktivitu — čím vyšší je graf, tím více provozu jím prochází.

![Main screen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/main_screen.png)

Poklepáním na vybrané rozhraní spustíte zachycení provozu. Nyní reprodukujte problém, který se u vás vyskytl, a ujistěte se, že jste provedli pouze nezbytné akce, které problém vyvolaly, a že jste se vyhnuli jakýmkoli jiným procesům. To pomáhá izolovat problém a zajistit, aby byl zaznamenán příslušný provoz.

## 4. Zastavte zachytávání a uložte výpis

Po reprodukci problému klikněte na červené tlačítko Stop v horní části, čímž zachytávání ukončíte.

![Capture process \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/capturing_process.png)

Chcete-li data uložit, stiskněte klávesovou zkratku Ctrl+S, zadejte název souboru a vyberte formát .pcapng. To je vše — soubor výpisu sítě je připraven.

Při zasílání výpisu uveďte také časovou osu událostí. Popište hlavní kroky, které jste provedli, například kdy jste aplikaci spustili, a kroky, které vedly k problému, a uveďte přibližný čas, kdy k problému došlo.
