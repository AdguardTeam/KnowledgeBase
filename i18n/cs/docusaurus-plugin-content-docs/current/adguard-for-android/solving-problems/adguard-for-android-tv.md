---
title: Jak nainstalovat AdGuard pro Android TV
sidebar_position: 17
---

:::info

Tento článek popisuje AdGuard pro Android TV, blokátor reklam, který chrání vaši TV na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android TV](https://agrd.io/tvapk)

:::

Ve většině případů nelze do TV nainstalovat soubor ze standardních prohlížečů, ale můžete si stáhnout prohlížeč z obchodu Google Play, který tuto funkci má. In our guide, we will go through an example of installation using the TV Bro browser, but there are other options and you can choose the one that better suits your needs. Případně můžete použít aplikaci [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader).

## Instalace aplikace AdGuard pro Android TV z prohlížeče v TV

1. Nainstalujte [prohlížeč TV Bro](https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) do své Android TV.

2. Stáhněte a nainstalujte AdGuard pro Android TV:

- Otevřete nainstalovaný prohlížeč TV Bro ve vaší Android TV.
- Do adresního řádku prohlížeče zadejte `https://agrd.io/tvapk` a stiskněte _Enter_ nebo následujte odkaz.
- Prohlížeč automaticky zahájí stahování instalačního souboru AdGuard pro Android TV.
- Po dokončení stahování vyberte v ovládacím panelu prohlížeče položku _Stažené soubory_ a poté vyberte stažený soubor.
- Ve zprávě s upozorněním povolte instalaci souborů z prohlížeče.
- Vraťte se do prohlížeče, otevřete _Stažené soubory_ a klikněte na stažený soubor.
- V zobrazeném systémovém okně klikněte na _Instalovat_, poté na _Hotovo_ nebo _Otevřít_.

Hotovo, AdGuard pro Android TV je nainstalován.

1. Spusťte AdGuard pro Android TV:

- Po dokončení instalace vyhledejte aplikaci AdGuard v seznamu nainstalovaných aplikací v Android TV.
- Klikněte na ikonu AdGuard a spusťte aplikaci.
- Nastavení dokončete podle pokynů na obrazovce.

## Instalace aplikace AdGuard pro Android TV skrze ADB

1. Zkontrolujte, zda je v PC nainstalován Android Debug Bridge (ADB). Pokud ne, můžete postupovat podle pokynů na webu XDA Developers: [Průvodce instalací ADB](https://www.xda-developers.com/install-adb-windows-macos-linux).

2. Stáhněte [AdGuard pro Android TV] (https://agrd.io/tvapk).

3. V nastavení TV přejděte na _System_ → _Informace_ a 7krát stiskněte číslo sestavení, abyste odemkli možnosti pro vývojáře. Povolte _USB ladění_.

4. Zapište si IP adresu vaší Android TV:

   - V Android TV přejděte do Nastavení.
   - Vyberte _System_ → _Informace_.
   - Vyhledejte _Síť_ a vyberte _Wi-Fi_ nebo _Ethernet_ v závislosti na typu vašeho připojení.
   - Přejděte do sekce Síť a vyhledejte _IP adresu_. Zapište tuto IP adresu.

5. Připojte Android TV skrze ADB:

   - Otevřete Terminál nebo příkazový řádek v PC.
   - Zadejte příkaz `adb connect` a vložte IP adresu své TV.
   - Připojení bude navázáno.

6. Nainstalujte AdGuard pro Android TV skrze ADB:

   - V Terminálu zadejte příkaz `adb install Downloads/adguard_tv.apk`. V případě potřeby nahraďte `Downloads/adguard_tv.apk` vlastní cestou.
   - Počkejte, až se v Terminálu zobrazí zpráva o úspěšné instalaci aplikace.
