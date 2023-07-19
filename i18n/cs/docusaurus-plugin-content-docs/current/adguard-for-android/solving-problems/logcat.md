---
title: Jak získat systémové záznamy
sidebar_position: 4
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Někdy nemusí běžný záznam stačit k identifikaci původu problému. V takových případech je nutný systémový záznam. Níže jsou uvedeny pokyny, jak je shromáždit a získat: prostřednictvím možností pro vývojáře a Logcat.

## Zachycení hlášení o chybě ze zařízení

Chcete-li získat hlášení o chybě přímo ze zařízení, postupujte takto:

1. Ujistěte se, že máte zapnuté [Možnosti pro vývojáře](https://developer.android.com/studio/run/device.html#developer-device-options).

2. V **Možnostech pro vývojáře** klepněte na **Vytvořit hlášení o chybě**.

![Hlášení o chybě *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

3. Select the type of bug report you want and tap **Report**.

:::note

Po chvíli se zobrazí oznámení, že hlášení o chybě je připraveno (viz obrázek 2).

:::

![Hlášení o chybě *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

4. Chcete-li sdílet hlášení o chybě, klepněte na oznámení.

![Hlášení o chybě *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

5. Odešlete tento protokol našemu týmu podpory.

:::note

Náš tým podpory zpracuje vaši žádost mnohem rychleji, pokud ve zprávě uvedete číslo HelpDesk nebo číslo problému GitHub.

:::

## Zachycení hlášení o chybě prostřednictvím Logcat

Na zařízeních se systémem Android 7 a nižším není možné automaticky odesílat hlášení o chybách. Pak je můžete zachytit ručně pomocí Logcat — standardního nástroje příkazového řádku systému Android, který vypíše záznamy systémových zpráv.

Postupujte podle těchto pokynů:

**Část #1: příprava zařízení**

1. Přepněte zařízení do režimu pro vývojáře. Postupujte takto: přejděte do **Nastavení** → **O zařízení** → klepněte na **Číslo sestavení** 7krát.

2. Přejděte na **Možnosti pro vývojáře**.

3. Zapněte **USB ladění**.

4. Increase **Logger buffer** sizes to 4 MB per log buffer.

4 MB by mělo stačit na uložení záznamů, které potřebujeme, dokud nebudete schopni provést druhou část (získání záznamů ze zařízení);

**Část #2: reprodukujte problém**

Po dokončení první části je důležité problém reprodukovat.

1. Reprodukujte problém.

2. Zapamatujte si/zapište si datum a čas reprodukce a později je uveďte v e-mailu pro naši podporu.

**Část #3: získání záznamu**

1. Připojte zařízení k počítači pomocí kabelu USB.

2. Stáhněte [Android SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools#downloads). V části Stahování vyberte příslušný odkaz ke stažení pro váš operační systém. Po klepnutí na odkaz se stáhne soubor ZIP. Soubory ADB (Android Debug Bridge) můžete ze souboru ZIP rozbalit a uložit kamkoli chcete.

3. Otestujte, zda ADB funguje správně: připojte zařízení Android k počítači pomocí kabelu USB, otevřete příkazový řádek, prostředí PowerShell nebo Terminal a spusťte následující příkaz:

`adb devices`

Příklad úspěšného výsledku:

![Krok 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

4. Poté spusťte následující příkaz (vložte příslušnou cestu):

`adb logcat -v threadtime -d > C:\Program Files\platform-tools\logs.txt`

Pošlete vytvořený `txt` soubor a čas, kdy byl problém reprodukován (z části #2) našemu týmu podpory na adresu support@adguard.com.

### Alternativní způsob pro uživatele s přístupem ROOT:

1. Stáhněte a spusťte [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

2. V menu vyberte **Zaznamenat**. Zvolte název souboru protokolu nebo stiskněte **OK**. Nyní můžete stisknout tlačítko **Domů**, CatLog bude pokračovat v nahrávání záznamu na pozadí.

3. Znovu reprodukujte problém.

4. Otevřete CatLog a stiskněte **Ukončit záznam** v menu.

5. Odešlete tento protokol našemu týmu podpory.

:::note

Náš tým podpory zpracuje vaši žádost mnohem rychleji, pokud ve zprávě uvedete číslo HelpDesk nebo číslo problému GitHub.

:::
