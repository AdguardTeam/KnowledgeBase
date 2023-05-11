---
title: Jak shromažďovat systémové záznamy Windows
sidebar_position: 5
---

K analýze a diagnostice různých problémů, které mohou potenciálně nastat, může služba podpory AdGuard potřebovat soubory záznamů Windows. Záznamy událostí systému Windows obsahují záznamy o všech chybách, které se vyskytnou v nainstalovaném softwaru, včetně AdGuardu. Níže je uveden stručný návod popisující způsoby, jak získat soubory záznamů a v případě potřeby je odeslat službě podpory.

1. Stiskněte *Win + R*

2. V zobrazeném okně napište `eventvwr` a klikněte na *OK*:

![Run window *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

3. Zobrazí se okno Prohlížeče událostí, jak je znázorněno na obrázku.

![Event viewer *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

Chcete-li uložit soubory, které potřebujeme, postupujte takto:

- Otevřete *Aplikace*: *Prohlížeč událostí (místní)* → *Záznamy systému Windows* → *Aplikace*.

- Klikněte pravým tlačítkem na *Aplikace* a v rozevíracím menu vyberte *Uložit všechny události jako...*

- Vyberte název a místo uložení a klikněte na *Uložit*. Vyberte *Zobrazit informace pro následující jazyky*. Musíte zaškrtnout políčko vedle *Angličtiny*. Klikněte na *OK*.

- Otevřete *Systém*: *Prohlížeč událostí (místní)* → *Záznamy systému Windows* → *Systém*.

- Klikněte pravým tlačítkem na *Systém* a v rozevíracím menu vyberte *Uložit všechny události jako...*

- Vyberte cílovou složku, zadejte název a klikněte na *Uložit*. Vyberte *Zobrazit informace pro následující jazyky*. Musíte zaškrtnout políčko vedle *Angličtiny*. Klikněte na *OK*.

Odešlete prosím dva soubory, které jste nedávno uložili na adresu **support@adguard.com**.
