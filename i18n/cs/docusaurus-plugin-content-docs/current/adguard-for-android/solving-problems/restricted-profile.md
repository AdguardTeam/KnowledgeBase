---
title: Problémy způsobené používáním profilu s omezeným režimem
sidebar_position: 10
---

Majitelé telefonů a tabletů nebo TV s operačním systémem Android 7+ se mohou potýkat s problémem způsobeným používáním **profilu s Omezeným režimem**. Pokud máte takový profil, **AdGuard**, stejně jako ostatní aplikace využívající VPN, získá omezení pro selektivní filtrování provozu VPN. V důsledku toho nemůže AdGuard spustit ochranu v **režimu lokální VPN**. Jednou z příčin této situace může být také používání profilu **Duální aplikace/Duální Messenger** ve vašem zařízení. Níže jsou popsána doporučení, která můžete použít v případě výskytu tohoto problému.

## Řešení

Problém můžete vyřešit třemi způsoby:

### Možnost 1: Udělení oprávnění aplikaci AdGuard pomocí ADB

> Upozorňujeme, že tento přístup je k dispozici od verze **AdGuardu v3.5 nightly 6**. Pokud používáte starší verzi, můžete získat nejnovější aktualizace [zde](https://adguard.com/adguard-android/overview.html).

1. Aktivace **Režimu pro vývojáře** a povolení **USB ladění**:
- V telefonu otevřete **Nastavení**;
- Přejděte do sekce **Systém** (poslední položka v nabídce). V této sekci vyhledejte podpoložku **Informace o telefonu**;
- Sedmkrát klepněte na řádek **Číslo sestavení**. Poté se zobrazí oznámení **Nyní jste vývojářem** (v případě potřeby zadejte kód pro odemčení zařízení);
- Otevřete **Nastavení systému** → **Možnosti pro vývojáře** → přejeďte dolů a zapněte **USB ladění** → po pečlivém přečtení varování potvrďte, že je ladění povoleno v okně **Povolit ladění USB**.

> Pokud máte nějaké potíže nebo otázky, úplné pokyny naleznete [zde](https://developer.android.com/studio/debug/dev-options).

2. [Instalace a konfigurace](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB;
> Na platformě Windows mohou majitelé zařízení **Samsung** potřebovat nainstalovat [tento nástroj](https://developer.samsung.com/mobile/android-usb-driver.html).
3. Připojte zařízení pomocí **USB kabelu** k počítači nebo notebooku, na který jste nainstalovali **ADB**;
4. Otevřete **příkazový řádek** v počítači:
- **Cmd.exe**, pokud používáte **Windows**;
- **Terminal**, pokud používáte **macOS**;
5. Zadejet příkaz `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` a stiskněte **Enter**.

### Možnost 2: Odebrání *Uživatelského účtu s omezeným přístupem*

Informace o tom, jak spravovat uživatelské účty ze zařízení s Androidem, [naleznete zde](https://support.google.com/a/answer/6223444?hl=en).

> Upozorňujeme, že v některých případech jsou uživatelské účty s omezeným přístupem vytvořeny implicitně a nelze je odstranit. Například při používání funkcí Duální Messenger nebo Duální aplikace na zařízeních **Samsung** nebo **LG**. Níže si přečtěte, jak v těchto případech problém vyřešit.

### Možnost 3: Použití AdGuardu v *režimu místního HTTP proxy* (vyžaduje root)

Chcete-li tento režim povolit, otevřete **Nastavení AdGuardu** → **Síť** → **Metoda filtrování** → **Lokální HTTP proxy**

## Zařízení LG a Samsung

S podobným problémem se mohou setkat také majitelé telefonů **LG** nebo **Samsung**. Může to být způsobeno použitím funkce **Duální aplikace/Duální Messenger** (která automaticky vytvoří omezený profil). Chcete-li tento problém vyřešit, musíte tuto funkci vypnout.

### Samsung

- Otevřete **Nastavení**;
- Stiskněte **Pokročilé**;
- Přejeďte dolů a stiskněte **Duální Messenger**;
- Zakažte **Duální Messenger** pro všechny aplikace;
- Uzamkněte zařízení na 5 minut;
- Odemkněte obrazovku a zkuste profil VPN vytvořit znovu.

### LG

- Otevřete **Nastavení**;
- Vyberte kartu **Obecné**;
- Přejeďte dolů a stiskněte **Duální aplikace**;
- Odeberte všechny aplikace ze seznamu;
- Restartujte zařízení.