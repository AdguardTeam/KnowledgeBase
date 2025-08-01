---
title: Jak shromažďovat systémové záznamy Windows
sidebar_position: 5
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Údaje a/nebo soubory poskytnuté v systémových protokolech jsou zpracovávány v souladu se [Zásadami ochrany osobních údajů AdGuardu](https://adguard.com/en/privacy.html).

:::

K analýze a diagnostice různých problémů, které mohou potenciálně nastat, může služba podpory AdGuard potřebovat soubory záznamů Windows. Záznamy událostí systému Windows obsahují záznamy o všech chybách, které se vyskytnou v nainstalovaném softwaru, včetně AdGuardu. Níže je uveden stručný návod popisující způsoby, jak získat soubory záznamů a v případě potřeby je odeslat službě podpory.

1. Stiskněte *Win + R*

1. V zobrazeném okně napište `eventvwr` a klikněte na *OK*:

    ![Run window *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Zobrazí se okno Prohlížeče událostí, jak je znázorněno na obrázku.

    ![Event viewer *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Chcete-li uložit soubory, které potřebujeme, postupujte takto:

    - Otevřete *Aplikace*: *Prohlížeč událostí (místní)* → *Záznamy systému Windows* → *Aplikace*.

    - Klikněte pravým tlačítkem na *Aplikace* a v rozevíracím menu vyberte *Uložit všechny události jako...*

    - Vyberte název a místo uložení a klikněte na *Uložit*. Vyberte *Zobrazit informace pro následující jazyky*. Musíte zaškrtnout políčko vedle *Angličtiny*. Klikněte na *OK*.

    - Otevřete *Systém*: *Prohlížeč událostí (místní)* → *Záznamy systému Windows* → *Systém*.

    - Klikněte pravým tlačítkem na *Systém* a v rozevíracím menu vyberte *Uložit všechny události jako...*

    - Vyberte cílovou složku, zadejte název a klikněte na *Uložit*. Vyberte *Zobrazit informace pro následující jazyky*. Musíte zaškrtnout políčko vedle *Angličtiny*. Klikněte na *OK*.

Odešlete prosím dva soubory, které jste nedávno uložili na adresu **support@adguard.com**.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

AdGuard se zavazuje chránit vaše soukromí. Přísně dodržujeme naše [Zásady ochrany osobních údajů](https://adguard.com/privacy/windows.html) a neshromažďujeme žádné soukromé informace o uživatelích. Před odesláním protokolů týmu podpory si soubor prohlédněte, protože může obsahovat další informace, které nechcete sdílet. Pokud takové osobní údaje obsahuje, doporučujeme je nejprve smazat.

:::
