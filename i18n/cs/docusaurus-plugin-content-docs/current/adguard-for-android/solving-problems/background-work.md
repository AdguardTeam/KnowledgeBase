---
title: Jak chránit AdGuard před ukončením systémem
sidebar_position: 9
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

V některých případech aplikace nezůstanou na pozadí (”naživu” nebo v režimu spánku) kvůli optimalizační funkci operačního systému Android nebo takzvanému ”režimu úspory baterie” — tato funkce může aplikace na pozadí ukončit. Může být nepohodlné je znovu spouštět pokaždé, když se zavřou. Chcete-li se vyhnout ukončení aplikace na pozadí, musíte postupovat podle kroků, které jsme popsali zvlášť pro každého výrobce (verzi) operačního systému Android. Všimněte si, že pokyny různých výrobců jsou většinou velmi podobné.

## Asus

Informace o zařízeních Asus ještě zdaleka nejsou vyčerpávající, takže problémů může být více, než je zde uvedeno. Tuto část článku se chystáme aktualizovat, jakmile budeme vědět více.

Hlavní zdroj potenciálních problémů s prací na pozadí v zařízeních Asus je spojen s optimalizační aplikací Power Master. Je předinstalovaná a má poměrně agresivní výchozí nastavení, např. blokování spouštění aplikací a ukončování úloh na pozadí při vypnutí obrazovky. Chcete-li se ujistit, že práce aplikací na pozadí funguje, nastavte následující:

1. Přejděte na **Správce telefonu** → **PowerMaster** → **Nastavení** (nebo **Možnosti spořiče baterie**) → Zrušte zaškrtnutí **Vyčistit v režimu pozastavení**

1. Přejděte na **Správce telefonu** → **PowerMaster** → **Nastavení** (nebo **Možnosti spořiče baterie**) → Zrušte zaškrtnutí **Automaticky odmítnout spuštění aplikací**

Případně můžete místo úplného zrušení zaškrtnutí pole **Automaticky odmítnout spuštění aplikací** přejít na **Nastavení** → **Možnosti spořiče baterie** → **Správce automatického spuštění** → **AdGuard** a zrušit zaškrtnutí.

## Xiaomi

Xiaomi (a zejména MIUI) patří mezi nejproblematičtější, pokud jde o práci na pozadí. Je známo, že omezují procesy na pozadí, mají nestandardní oprávnění a chybí k nim řádná dokumentace. Někdy aplikace na telefonech Xiaomi prostě nefungují správně a nedá se s tím nic moc dělat. Níže jsou uvedeny některé akce, které se můžete pokusit provést, pokud narazíte na potíže týkající se práce AdGuardu na pozadí v různých zařízeních Xiaomi.

### MIUI 13+ a HyperOS

Depending on the MIUI and HyperOS versions, there are two ways to change the battery optimization settings on your phone and block ads more efficiently.

Option 1

1. Go to **Settings** → **Apps** → **Permissions** → **Background autostart** and allow AdGuard to run in the background

1. Return to **Settings** → **Apps** → **Manage apps** → **AdGuard** and uncheck **Pause app activity if unused**

1. Go to **Battery saver** and tap **No restrictions**

Option 2

1. Go to **Settings** → **Apps** → **Manage apps** → **AdGuard** and enable **Autostart**

1. Go to **Battery saver** and tap **No restrictions**

Hotovo! You have successfully set up AdGuard to work in the background.

### MIUI 12.0.8

Chcete-li aplikaci AdGuard úspěšně spustit na pozadí, proveďte následující kroky:

In **Settings** → **Apps** → **Manage apps**, scroll down to locate **AdGuard** and set **Autostart** to “On”.

![Nastavení Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Přejděte dolů na **Spořič baterie**, klepněte na něj a nastavte možnost “Bez omezení“.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

V položce **Další oprávnění** nastavte všechna možná oprávnění na “Zapnuto“

Spusťte aplikaci **Zabezpečení**.

Klepněte na ikonu **Ozubeného kola** v pravém horním rohu obrazovky.

![Nastavení Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Klepněte na **Zvýšit rychlost** v Nastavení funkcí.

![Nastavení Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Klepněte na **Uzamknout aplikace**.

![Nastavení Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

Na obrazovce **Uzamknout aplikace** nastavte přepínač pro aplikaci AdGuard do polohy Zapnuto.

![Nastavení Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

To je vše! Úspěšně jste připnuli aplikaci AdGuard.

### MIUI 12

Přejděte na **Nastavení** → **Aplikace** → **Správce aplikací** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Nastavte Automatické spuštění na “Zapnuto“
- Nastavte všechna možná oprávnění v části Další oprávnění na “Zapnuto“
- Nastavte spořiče baterie na **Bez omezení**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Nyní spusťte správce aktivních aplikací přejetím prstu nahoru ze spodní části obrazovky a vyhledejte aplikaci AdGuard.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Klepněte na ni a podržte ji, dokud se neobjeví nabídka. Vyberte ikonu zámku.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

Nad oknem aplikace by se měla objevit ikona zámku.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Chcete-li, aby vaše aplikace úspěšně běžela na pozadí, nakonfigurujte její nastavení následovně:

- Nastavte Automatické spuštění na “Zapnuto“

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Nastavení** → **Baterie a výkon** → vypněte funkci **Spořič baterie**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Poté otevřete **Nastavení spořiče baterie aplikace** → **AdGuard** → **Bez omezení**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Všechny modely

Následující kroky by měly být provedeny na jakémkoli zařízení Xiaomi, které stále ukončují aplikaci AdGuard:

#### Správa napájení

Povolte následující:

- **Nastavení** → **Pokročilá nastavení** → **Správce baterie** → nastavte **Plán napájení** na **Výkon**
- **Nastavení zařízení** → **Pokročilá nastavení** → **Správce baterie** → **Chráněné aplikace** — AdGuard musí mít příznak **Chráněno**
- **Nastavení zařízení** → **Aplikace** → **AdGuard** → **Baterie** → **Energeticky náročné výzvy** a **Po vypnutí obrazovky nechat spuštěno**
- **Nastavení** → **Další nastavení** → **Baterie a výkon** → **Správa využití baterie aplikacemi** a zde:

1. Přepněte režimy úspory baterie do polohy “Vypnuto“
1. Vyberte následující možnosti: **Úspora baterie na pozadí** → **Vybrat aplikaci** → **AdGuard** → **Nastavení na pozadí** → **Bez omezení**

#### Spořič baterie

Nastavte **Zabezpečení** → **Baterie** → **Spořič baterie** → **AdGuard** na **Bez omezení**

#### Připnutí aplikace

Chcete-li nastavit práci AdGuardu na pozadí pro zařízení Xiaomi, měli byste věnovat pozornost položkám Baterie a Oprávnění.

- Klepněte na **Nedávné úkoly** a přejeďte prstem dolů, aby byly *viditelné* možnosti (jak je znázorněno na snímku obrazovky):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Klepněte na ikonu **zámku**. Tím zabráníte tomu, aby zařízení Xiaomi automaticky ukončilo AdGuard. Mělo by to vypadat takto:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Přejděte na **Baterie**

- Vyberte **spořič baterie**

- Vyhledejte a vyberte **AdGuard**

- Nastavte následující **Nastavení na pozadí**:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Přejděte na **Oprávnění**

- Vyberte **Automatické spuštění**

- Ujistěte se, že je pro AdGuard zapnuta funkce automatického spuštění:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

V mnoha Samsung zařízeních se aplikace nepoužívaná po dobu 3 dnů nemůže spustit z pozadí. Abyste tomu zabránili, měli byste vypnout možnosti **Adaptivní baterie** a **Uspat aplikace**. Upozorňujeme, že po aktualizaci aplikace nebo operačního systému se tato nastavení často vrátí na výchozí hodnoty a je třeba je znovu vypnout.

### Android 11+

V systému Android 11, Samsung ve výchozím nastavení zabraňuje aplikacím (včetně AdGuardu) pracovat na pozadí, dokud je nevyloučíte z optimalizace baterie. Chcete-li se ujistit, že AdGuard nebude na pozadí ukončován, proveďte následující:

1. Uzamkněte AdGuard v Nedávných aplikacích

    - Otevřete **Nedávné aplikace**.
    - Vyhledejte AdGuard.
    - Dlouze stiskněte ikonu AdGuardu.

1. Aby AdGuard správně fungoval:

    Přejděte do **Nastavení** → **Aplikace** → **AdGuard** → **Baterie** → **Optimalizace využití baterie**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    V rozevírací nabídce vyberte **Vše**. Poté v seznamu vyhledejte AdGuard a nastavte jeho stav na **Neoptimalizovat** (u některých modelů může existovat přepínač, který budete muset vypnout).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    V některých zařízeních může být příslušné nastavení pojmenováno jinak a umístěno na jiných místech. Jednou z možných cest je:

    **Nastavení** → **Aplikace** → nabídka (⁝) → **Speciální přístup** → **Optimalizace využití baterie** → Vyhledejte v seznamu AdGuard a zrušte jeho zaškrtnutí

1. Vypněte automatickou optimalizaci. K tomu je třeba:

    Otevřete nabídku **Baterie** → nabídka (⁝) → Vyberte **Automatizace** → Zde vypněte všechna nastavení

    Přesná cesta se opět může lišit, například na některých zařízeních byste měli přejít na:

    **Nastavení** telefonu → **Péče o zařízení** → Klepněte na nabídku se 3 tečkami (⁝) → **Pokročilé** → Vypnout **Automatickou optimalizaci** a **Nastavení optimalizace**

1. Pokud je v telefonu přítomna, vypněte funkci Adaptivní baterie:

    Otevřete **Nastavení** telefonu → **Baterie** → **Další nastavení baterie** → vypněte **Adaptivní baterii**

1. Zakažte aplikace v režimu spánku (přesný název tohoto nastavení a cesta k němu se mohou lišit v závislosti na zařízení):

    Otevřete **Nastavení** telefonu → **Baterie** → **Omezení používání na pozadí** → vypněte **Uspávání nepoužívaných aplikací**

### Android 9 a 10

- Přejděte do **Nastavení telefonu** → **Péče o zařízení** → Klepněte na položku **Baterie** → (⁝) **nabídka se třemi tečkami** → **Nastavení** a zrušte zaškrtnutí **Uspávání nepoužívaných aplikací** a **Automatické vypnutí nepoužívaných aplikací**.

- Zkontrolujte **Nastavení telefonu** → **Aplikace** → **AdGuard** → **Baterie** → **Omezení na pozadí** je pro AdGuard nastaveno na **Aplikace může používat baterii na pozadí**.

- Odeberte AdGuard z aplikací v režimu spánku. K tomu je potřeba:

    1. Přejděte do **Nastavení telefonu** → **Péče o zařízení**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Klepněte na ikonu **Baterie**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Klepněte na **nabídku se třemi tečkami** → **Nastavení**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Klepněte na **Aplikace v režimu spánku**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. **Probuďte** AdGuard za použití ikony koše

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Starší zařízení Samsung

U prvních zařízení Samsung není potřeba nastavovat operaci na pozadí. Pokud se ve vašem případě aplikace AdGuard po chvíli zavírá nebo mizí z nedávných úloh, proveďte následující kroky:

- Klepněte na tlačítko **Nedávné úlohy**, klepněte na ikonu **Další nastavení**. Mělo by to vypadat takto:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Klepněte na **Uzamknout aplikace**:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Klepněte na ikonu zámku

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Společnost Huawei a její přizpůsobení systému Android **EMUI** patří k nejproblematičtějším na trhu, pokud jde o nestandardní omezení procesů na pozadí. Ve výchozím nastavení se prakticky všechny aplikace, které pracují na pozadí, potýkají s problémy a nakonec se přestanou fungovat.

### Spouštění aplikací na některých zařízeních s EMUI 8, 9 a 10 (Huawei P20, Huawei P20 Lite, Huawei Mate 10…)

Tato funkce může, ale nemusí být dostupná pro všechna zařízení nebo může být označena jinak.

1. Přejděte do **Nastavení** telefonu → **Baterie** → **Spouštění aplikací**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Vypněte **Spravovat vše automaticky**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Nastavte AdGuard na **Spravovat ručně** a zapněte všechny přepínače.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Zakažte **Správce spouštění**, který zabraňuje automatickému spouštění aplikací po zapnutí telefonu.

    Přejděte do **Nastavení** → **Vše** → **Správce spoštění** → přepněte AdGuard do polohy Vypnuto

    Pro spolehlivé procesy na pozadí může být také nutné odinstalovat **PowerGenie**, jak je popsáno níže.

### Zařízení s EMUI 9+ a PowerGenie

:::note

V telefonech s EMUI 9+ (Android P+) je k dispozici aplikace PowerGenie, která nutí ukončit všechny aplikace, které nejsou na seznamu povolených společnosti Huawei, a neposkytuje uživatelům žádné možnosti konfigurace. Níže naleznete návod, jak ji odinstalovat.

:::

Společnost Huawei je při ukončování aplikací ve svých zařízeních velmi vynalézavá. Kromě všech níže popsaných nestandardních opatření pro správu napájení představili v systému Android Pie aplikaci pro ukončování úloh integrovanou přímo do rozhraní EMUI 9.

Jmenuje se **PowerGenie** a ukončuje všechny aplikace, které nejsou na seznamu povolených. Na jejich předdefinovaný seznam povolených nelze přidávat vlastní aplikace. To znamená, že neexistuje jiný způsob, jak opravit správnou funkčnost aplikací v Huawei, než odinstalovat PowerGenie.

Bohužel se jedná o systémovou aplikaci, kterou lze plně odinstalovat pouze pomocí ADB (Android Debug Bridge).

:::note Zdroj

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**Musíte**:

Není to potvrzeno, ale je možné, že PowerGenie stačí zakázat v **Nastavení telefonu** → **Aplikace**. Pokud je toto nastavení v nastavení vašeho zařízení přítomno, můžete následující kroky přeskočit. Bude však nutné to znovu použít při každém restartu zařízení. Pokud takové nastavení není k dispozici, postupujte podle těchto pokynů:

1. [Nainstalujte ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) do vašeho PC;

1. Připojte telefon pomocí datového kabelu;

1. Povolte [Možnosti pro vývojáře](https://developer.android.com/studio/debug/dev-options.html);

1. Povoltee **USB ladění** v možnostech pro vývojáře v telefonu;

1. V počítači spusťte následující příkazy:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running

`adb shell pm stopservice hwPfwService`

### Zařízení s EMUI 6+ (a některá zařízení s EMUI 5)

- **Nastavení telefonu** → **Pokročilá nastavení** → **Správce baterie** → nastavte **Plán napájení** na **Výkon**;
- **Nastavení telefonu** → **Pokročilá nastavení** → **Správce baterie** → **Chráněné aplikace** — AdGuard musí mít příznak **Chráněno**;
- **Nastavení telefonu** → **Aplikace** → **Vaše aplikace** → **Baterie** → **Energeticky náročné výzvy** `[uncheck]` a **Po vypnutí obrazovky neuspávat** `[check]`;
- **Nastavení telefonu** → **Aplikace** → **Pokročilé (dole)** → **Ignorovat optimalizaci** → Klikněte na Povoleno → **Všechny aplikace** → Vyhledejte AdGuard ze seznamu a nastavte na **Povolit**.

#### Huawei P9 Plus

Otevřete nastavení zařízení → **Aplikace** → **Nastavení** → **Speciální přístup** → vyberte **Ignorovat optimalizace baterie** → a pro AdGuard vyberte **Povolit**.

### Huawei P20, Huawei Honor 9 Lite a Huawei Mate 9 Pro

Otevřete nastavení zařízení → **Baterie** → **Spouštění aplikací ** nastavte AdGuard na **Spravovat ručně** a zkontrolujte, zda je vše zapnuto.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Nastavení zařízení** → **Baterie** → **Spouštění aplikací** → nastavte AdGuard na **Spravovat ručně** a zkontrolujte, zda je vše zapnuto. Pro spolehlivé procesy na pozadí může být také nutné odinstalovat PowerGenie, jak je popsáno výše.

### Starší zařízení Huawei

Stará zařízení Huawei se nastavují nejsnadněji, stačí provést dva jednoduché kroky k uzamčení AdGuardu na pozadí, aby nebyl ukončen spořičem baterie nebo procesem ukončování na pozadí.

- Klepněte na tlačítko **Nedávné úlohy**:

    ![Huawei recent apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Klepněte na ikonu zámku:

    ![Huawei lock *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Kromě toho byste pro efektivnější nastavení práce AdGuardu na pozadí měli otevřít nastavení zařízení a provést následující kroky:

- Jděte na **Nastavení** → otevřete **Správce baterie** → nastavte **Plán napájení** na **Výkon**;
- Poté zvolte **Chráněné aplikace** ve **Správci baterie** a zkontrolujte, zda je AdGuard chráněn;
- Jděte na **Aplikace** v hlavním nastavení a klepněte na AdGuard → vyberte **Baterie** → zapněte **Energeticky náročné výzvy** a **Neuspávat po vypnutí obrazovky**;
- Poté v sekci **Aplikace** otevřete **Nastavení** (dole) → **Speciální přístup** → vyberte **Ignorovat optimalizaci baterie** → stiskněte **Povoleno** → **Všechny aplikace** → v seznamu vyhledejte AdGuard a nastavte na **Odmítnout**.

## Meizu

Meizu má téměř stejný přístup k omezování procesů na pozadí jako Huawei a Xiaomi. Zakázání práce AdGuardu a dalších aplikací na pozadí se tak můžete vyhnout úpravou následujících nastavení:

- Jděte na **Pokročilá nastavení** → otevřete **Správce baterie** → nastavte **Plán napájení** na **Výkon**;
- Poté zvolte **Chráněné aplikace** ve **Správci baterie** a zkontrolujte, zda je AdGuard chráněn;
- Jděte na **Aplikace** v hlavním nastavení a klepněte na AdGuard → vyberte **Baterie** → zapněte **Energeticky náročné výzvy** a **Neuspávat po vypnutí obrazovky**.

## Nokia

Zařízení Nokia se systémem Android 9+ mají **vypnutý spořič energie Evenwell**, který byl hlavním viníkem ukončování základních procesů. Pokud se AdGuard na vašem telefonu Nokia stále ukončuje, podívejte se na [ starší pokyny](https://dontkillmyapp.com/hmd-global).

### Nokia 1 (Android Go)

1. [Nainstalujte ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) do vašeho PC;

1. Připojte telefon pomocí datového kabelu;

1. Povolte [Možnosti pro vývojáře](https://developer.android.com/studio/debug/dev-options.html);

1. Povolte **USB ladění** v možnostech pro vývojáře v telefonu;

1. Odinstalujte balíček **com.evenwell.emm** pomocí následujících příkazů ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 a 5.1

V těchto zařízeních je k dispozici nástroj **DuraSpeed**, který ukončuje všechny aplikace na pozadí. Nelze ho odinstalovat ani zakázat běžnými prostředky. Tyto akce vyžadují ADB, a i když to zakážete, DuraSpeed se při restartu znovu aktivuje. K automatickému vypnutí DuraSpeed potřebujete aplikaci Tasker, například [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid).

1. [Nainstalujte ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) do vašeho PC;

1. Připojte telefon pomocí datového kabelu;

1. Povolte [Možnosti pro vývojáře](https://developer.android.com/studio/debug/dev-options.html);

1. Povoltee **USB ladění** v možnostech pro vývojáře v telefonu;

1. Zadáním tohoto příkazu umožněte aplikaci MacroDroid (nebo jiné aplikaci pro automatizaci) zapisovat do globálního úložiště nastavení:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Vytvořte úlohu spouštěnou při **Startu zařízení**, která provede následující:

    - Nastavení systému: typ **Obecné**, název `setting.duraspeed.enabled`, hodnota **-1**
    - Nastavení systému: typ **Systém**, název `setting.duraspeed.enabled`, hodnota **-1**
    - Nastavení systému: typ **Obecné**, název `setting.duraspeed.enabled`, hodnota **0**
    - Nastavení systému: typ **Systém**, název `setting.duraspeed.enabled`, hodnota **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    Potřebujete nastavit typ **Obecný** i **Systém**. Na snímku obrazovky je jako příklad zobrazen pouze obecný.


:::

### Další modely Nokia

- Přejděte do **Nastavení** telefonu → **Aplikace** → **Zobrazit všechny aplikace**.

- Klepněte na nabídku v pravém horním rohu → **Zobrazit systémové aplikace**.

Vyhledejte v seznamu aplikaci **Spořič energie**, vyberte ji a klepněte na **Vynutit ukončení**. Na chvíli se ukončí, ale v určitém okamžiku se znovu spustí.

Od této chvíle by měl AdGuard fungovat normálně a používat standardní optimalizace baterie Androidu, dokud se nerestartuje spořič energie.

Alternativní, trvalejší řešení pro technicky zdatnější uživatele:

1. [Nainstalujte ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) do vašeho PC;

1. Připojte telefon pomocí datového kabelu;

1. Povolte [Možnosti pro vývojáře](https://developer.android.com/studio/debug/dev-options.html);

1. Povoltee **USB ladění** v možnostech pro vývojáře v telefonu;

1. Odinstalujte balíček **com.evenwell.powersaving.g3** pomocí následujících příkazů ADB:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Někdy se při každém vypnutí obrazovky ukončují služby na pozadí (včetně služeb pro přístupnost, které je pak třeba znovu povolit). Zatím to lze obejít takto:

Přejděte na **Centrum zabezpečení** → klepněte na **Oprávnění k ochraně soukromí** → **Správce spouštění** a povolte spouštění aplikace AdGuard na pozadí.

Další řešení:

- Připněte AdGuard na obrazovce nedávných aplikací aplikací
- Povolte AdGuard v seznamu aplikací uvnitř “správce spouštění“ a “plovoucího seznamu aplikací“ bezpečnostní aplikaci (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Vypněte optimalizaci baterie

## OnePlus

Nejproblematičtější jsou zařízení s operačním systémem OxygenOS, který se vyznačuje čištěním mezipaměti a paměti RAM včetně optimalizace operačního systému. Kromě toho může OxygenOS přerušit práci AdGuardu, pokud ho delší dobu nepoužíváte. Chcete-li se těmto nežádoucím následkům vyhnout, postupujte podle následujících pokynů.

### Uzamčení aplikace

- Přejděte na **Nastavení**

- **Baterie** → **Optimalizace baterie**

- Vyhledejte AdGuard

- Klepněte na něj a vyberte možnost **Neoptimalizovat**

- Klepněte na **Hotovo** pro uložení

- Otevřete nabídku nedávných aplikací (jak je znázorněno na tomto snímku obrazovky):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Uzamkněte aplikaci AdGuard:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

Na některých telefonech OnePlus existuje také funkce nazvaná Automatické spouštění aplikací a hloubková optimalizace, která zabraňuje práci aplikací na pozadí. Deaktivujte ji pro AdGuard.

:::

### Optimalizace baterie

- Otevřete nastavení zařízení → **Baterie** → **Optimalizace baterie** → přepněte na **Všechny aplikace** seznam (menu nahoře) → vyberte AdGuard → a aktivujte **Neoptimalizovat**

- Otevřete nastavení zařízení → **Baterie** → **Optimalizace baterie** → (⁝) nabídka se třemi tečkami → **Pokročilá optimalizace** → Zakázat hloubkovou optimalizaci

### Automatické spouštění aplikací

Funkce automatického spouštění aplikací (v některých OnePlus telefonech) v podstatě zabraňuje práci aplikací na pozadí. Deaktivujte ji pro AdGuard.

### Vylepšená / pokročilá optimalizace

Pro OnePlus 6 a novější:

- Otevřete **Nastavení systému** → **Baterie** → **Optimalizace baterie** → (⁝) nabídka se třemi tečkami → **Pokročilá optimalizace**
- Vypněte **Hloubkovou optimalizaci** / **Adaptivní baterii**
- Vypněte **Optimalizaci v režimu spánku**. OnePlus se snaží zjistit, kdy obvykle spíte a v těchto chvílích vypne síťová připojení telefonu. Toto nastavení zabrání doručování okamžitých oznámení.

Pro OnePlus 6 a starší:

- Vypněte **Nastavení systému** → **Baterie** → **Optimalizace baterie** → (⁝) nabídka se třemi tečkami → **Vylepšená optimalizace**.

### Chování při vymazávání nedávných aplikací

Za normálních okolností se aplikace po přejetí nezavře. U OnePlus to však může fungovat jinak. Vymazání nedávných aplikací může být nastaveno tak, že přejetím prstu nahoru po aplikaci ji zavřete. Návrat do “normálního“ režimu:

Přejděte na **Nastavení** → **Pokročilé** → **Správa nedávných aplikací** → Přepněte na **Normální mazání**

## Sony

Společnost Sony byla prvním vývojářem mobilního operačního systému, která zavedla nestandardní optimalizaci procesů na pozadí. Nazývá se **režim STAMINA** a okamžitě přeruší všechny procesy na pozadí, pokud je povolen. Možné řešení:

Přejděte do **Nastavení** → **Baterie** → vypněte **režim STAMINA**

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

V systému Android 11+ je na stejné obrazovce s režimem STAMINA nastavení s názvem **Adaptivní baterie**, to byste měli také vypnout.

Je také třeba AdGuard vyjmout z funkce úspory energie:

**System settings** → **Apps & Notifications** → **Advanced** → **Special app access** → **Power saving feature** → Switch AdGuard to **Excepted**

## Wiko

Zařízení Wiko jsou problematická z hlediska nestandardních optimalizací procesů na pozadí. Chcete-li nechat AdGuard pracovat na pozadí, proveďte následující:

- Přejděte do **Asistent telefonu** → **Baterie** → vypněte **režim Eco**
- Vraťte se zpět a přejděte do sekce **Ruční režim**
- Klepněte na ikonu **Ozubeného kola** vpravo nahoře → **Seznam povolených aplikací na pozadí** → Vyberte **AdGuard**

## Zařízení Pixel/Nexus/Nubia/Essential

Čistý operační systém Android obvykle není v konfliktu s aplikacemi pracujícími na pozadí, ale pokud se potýkáte s nějakými problémy, musíte zapnout režim **Trvalá síť VPN**.

- Přejděte do **Nastavení** → **Síť a Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Klepněte na **VPN** a vyberte **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Nastavte režim **Trvalá síť VPN**

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)
