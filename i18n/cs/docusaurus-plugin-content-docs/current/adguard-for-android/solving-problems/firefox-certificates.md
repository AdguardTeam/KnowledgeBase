---
title: Ruční instalace bezpečnostního certifikátu do prohlížeče Firefox
sidebar_position: 11
---

Aby AdGuard úspěšně filtroval přenosy HTTPS ve Firefoxu, musí prohlížeč důvěřovat certifikátu AdGuard. Toho lze dosáhnout různě pro různé verze Firefoxu.

### Metoda 1

> Tato metoda funguje ve Firefoxu pro Android verze 90.0 a novější.

Chcete-li, aby Firefox důvěřoval certifikátu AdGuard, proveďte následující kroky:

1. Spusťte prohlížeč.
2. Přejděte do **Nastavení** → **O Firefoxu**.

![O prohlížeči Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

3. Klepněte pětkrát na logo Firefox.
4. Přejděte do **Nastavení** → **Tajná nastavení**.

![Tajná nastavení *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

5. Zapněte přepínač **Použít certifikáty CA třetích stran**.

### Metoda 2

> Tato metoda bude fungovat pouze na zařízeních s **root přístupem**.

1. [Instalace a konfigurace](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB;
> Na platformě Windows mohou majitelé zařízení **Samsung** potřebovat nainstalovat [tento nástroj](https://developer.samsung.com/mobile/android-usb-driver.html).
2. Aktivace **Režimu pro vývojáře** a povolení **USB ladění**:
    - V telefonu otevřete **Nastavení**;
    - Přejděte do sekce **Systém** (poslední položka v nabídce). V této sekci vyhledejte podpoložku **Informace o telefonu**;
    - Sedmkrát klepněte na řádek **Číslo sestavení**. Poté se zobrazí oznámení **Nyní jste vývojářem** (v případě potřeby zadejte kód pro odemčení zařízení);
    - Otevřete **Nastavení systému** → **Možnosti pro vývojáře** → přejeďte dolů a zapněte **USB ladění** → po pečlivém přečtení varování potvrďte, že je ladění povoleno v okně **Povolit ladění USB**.
3. Nainstalujte prohlížeč [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (hlavní verze);
4. Otevřete **nastavení AdGuardu** → **Síť** → **HTTPS filtrování** → Instalovat certifikát do prohlížeče **Firefox** → **INSTALOVAT PRO STARŠÍ VERZE**;
5. Otevřete složku `data/data/org.mozilla.firefox/files/mozilla` pomocí příkazu `adb shell su` a `cd data/data/...`, poté přejděte do složky s názvem `xxxxxxx.default` a zapamatujte si její název;
6. V uvedené složce nás zajímají dva soubory:
    - `cert9.db`
    - `key4.db`
7. Tyto soubory musíme přesunout do složky prohlížeče, kde došlo k problému s bezpečnostním certifikátem:
- `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.
8. Úplný příkaz bude vypadat takto:
    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

V případě, že jste obdrželi systémové oznámení **oprávnění zamítnuto**, měli byste zadané soubory nejprve přesunout do adresáře bez oprávnění. Poté byste je měli přesunout do potřebné složky v prohlížeči Firefox.

Úplný příkaz by měl vypadat takto:
- `adb shell su`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
- `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
- `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
- `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

Pokud příkaz `adb shell su` nefunguje, měli byste nejprve zkusit `adb shell` a poté `su`.