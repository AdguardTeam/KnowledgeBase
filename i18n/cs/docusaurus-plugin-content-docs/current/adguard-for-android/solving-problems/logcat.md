---
title: Jak získat záznam Logcat
sidebar_position: 4
---

## Obecné pokyny

Pro řešení problémů s pády téměř vždy nestačí běžný protokol. V takových případech potřebujeme k identifikaci původu problému systémový záznam. Níže je uveden návod, jak jej získat.

## Zachycení hlášení o chybě ze zařízení
Chcete-li získat hlášení o chybě přímo ze zařízení, postupujte takto:

1. Ujistěte se, že máte zapnuté [Možnosti pro vývojáře](https://developer.android.com/studio/run/device.html#developer-device-options).

2. V **Možnostech pro vývojáře** klepněte na **Vytvořit hlášení o chybě**.

![Hlášení o chybě *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

3. Vyberte požadovaný typ hlášení o chybě a klepněte na **Nahlásit**. >Po chvíli se zobrazí oznámení, že hlášení o chybě je připraveno (viz obrázek 2).

![Hlášení o chybě *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

4. Chcete-li sdílet hlášení o chybě, klepněte na oznámení.

![Hlášení o chybě *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

5. Odešlete tento protokol našemu týmu podpory.
> Poznámka: Náš tým podpory zpracuje vaši žádost mnohem rychleji, pokud ve zprávě uvedete číslo HelpDesk nebo číslo problému GitHub.

## Další pokyny (pro staré verze systému Android)

Na starých zařízeních se systémem Android taková možnost automatického zachycení hlášení o chybě neexistuje. To je třeba provést ručně podle tohoto návodu:

**Část #1: příprava zařízení**

1. Přepněte zařízení do režimu pro vývojáře. Postupujte takto: přejděte do **Nastavení** > **O zařízení** > klepněte na **Číslo sestavení** 7krát.

2. Přejděte na **Možnosti pro vývojáře**.

3. Zapněte **USB ladění**.

4. Navyšte **velikost vyrovnávací paměti** na 4 MB.

4 MB by mělo stačit na uložení záznamů, které potřebujeme, dokud nebudete schopni provést druhou část (získání záznamů ze zařízení);

**Důležité:** Po dokončení první části musíte problém znovu reprodukovat!


**Část #2: získání záznamu**

1. Připojte zařízení k počítači pomocí kabelu USB.

2. Stáhnětei a nainstalujte Minimal ADB:

<http://forum.xda-developers.com/showthread.php?t=2317790>

Přímý odkaz ke stažení:

<https://www.androidfilehost.com/?fid=24052804347803384>

3. Spusťte tento příkaz v konzole (otevře se po instalaci):
> adb logcat -v threadtime -d > C:\logcat.txt

Tento protokol nám zašlete prostřednictvím podpory nebo jiným způsobem.

**Alternativní způsob pro uživatele s přístupem ROOT:**

1. Stáhněte a spusťte [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

2. V menu vyberte **Zaznamenat**. Zvolte název souboru protokolu nebo stiskněte **OK**. Nyní můžete stisknout tlačítko **Domů**, CatLog bude pokračovat v nahrávání záznamu na pozadí.

3. Znovu reprodukujte problém.

4. Otevřete CatLog a stiskněte **Ukončit záznam** v menu.

5. Odešlete tento protokol našemu týmu podpory.
> Poznámka: Náš tým podpory zpracuje vaši žádost mnohem rychleji, pokud ve zprávě uvedete číslo HelpDesk nebo číslo problému GitHub.