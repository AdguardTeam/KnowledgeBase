---
title: Problémy s filtrováním v prohlížeči Chrome 142+ při použití ovladače TDI
sidebar_position: 14
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock).

:::

Někteří uživatelé AdGuardu pro Windows si mohou všimnout, že [aplikace přestává filtrovat provoz v prohlížečích založených na Chromiu](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). Od verze Google Chrome 142+ se provoz prohlížeče jednoduše nezobrazuje na úrovni ovladače TDI, což brání AdGuardu v jeho kontrole nebo filtrování.

Toto chování není chybou AdGuardu, ale výsledkem nedávných změn architektury a zabezpečení v moderních prohlížečích.

## Proč se to děje

Prohlížeče založené na Chromium (Chrome, Edge, Brave, Vivaldi, atd.) posilovali svou bezpečnostní architekturu. Jednou významnou změnou je přesunutí citlivých interních procesů do sandboxu [Windows AppContainer](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), včetně síťové služby, která zpracovává veškerý provoz prohlížeče.

### Co se změnilo v Chrome 142

Od verze Chrome 142 se proces síťové služby nyní standardně spouští uvnitř AppContainer.

V takovém případě aplikace spuštěné v AppContainer nepoužívají starší síťové rozhraní TDI, ale jejich provoz je směrován přes modernější stack WSK (Winsock Kernel). V důsledku toho ovladač TDI nemůže vidět, zachytit ani zpracovat připojení procházející přes WSK a veškerý provoz prohlížeče se stává pro ovladač TDI používaný AdGuardem neviditelným.

Toto chování je zcela řízeno zásadami sandboxingu prohlížeče Chrome a interními experimenty (terénními zkouškami), nikoli uživatelskými nastaveními.

## Proč to ovlivňuje AdGuard

Ovladač TDI je zastaralá technologie systému Windows, která již mnoho let není společností Microsoft podporována a je považována za zastaralou. Není kompatibilní s moderními modely izolace a sandboxingu používanými prohlížeči.

Z tohoto důvodu se viditelnost provozu založená na TDI stává stále nestabilnější. V některých prohlížečích již zcela zmizel a nakonec přestane fungovat úplně.

AdGuard již považuje ovladač TDI za zastaralý a v rámci vývoje produktu se plánuje jeho úplné odstranění.

## Dočasné řešení

Určité změny v registru systému Windows mohou přimět prohlížeč, aby přestal používat AppContainer, což způsobí, že jeho procesy budou opět spuštěny v režimu bez sandboxu. Síťová služba přestane používat stack WSK a přejde na síťovou cestu, kterou může vidět ovladač TDI. AdGuard poté znovu získá schopnost filtrovat provoz prohlížeče.

### Jak upravit registr v prohlížečích založených na Chromium

:::warning

K úpravám registru jsou vyžadována práva správce. Nesprávné změny mohou ovlivnit stabilitu a bezpečnost systému nebo prohlížeče. Před úpravou větve registru vždy vytvořte její zálohu.

Než budete pokračovat, mějte na paměti, že toto řešení snižuje bezpečnost sandboxu/AppContaineru, čímž se prohlížeč stává méně izolovaným. Platí pro celý systém, protože upravuje `HKLM`, a měl by být používán pouze pro ladění, dočasná řešení, v kontrolovaných prostředích nebo v případech, kdy je zachycování provozu založené na TDI nezbytně nutné.

Nemělo by se to **používat** plošně na počítačích koncových uživatelů. **Pokračujte pouze tehdy, pokud rozumíte důsledkům.**

:::

#### Použití souborů .reg

Potřebné změny registru můžete provést automaticky pomocí jednoho z níže uvedených předem vygenerovaných souborů .reg. Každý soubor zakazuje sandboxing AppContainer/Network Service pro konkrétní prohlížeč založený na Chromium:

- [Stáhnout Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Stáhnout Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Stáhnout Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Stáhnout Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Stáhnout Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Stáhnout YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

Tyto změny můžete vrátit zpět pomocí souborů .reg pro vrácení změn, které jsou k dispozici níže. Tyto soubory odstraní větve registru, které byly přidány přímou verzí:

- [Undo Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Chrome.reg)
- [Undo Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Chromium.reg)
- [Undo Edge.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Edge.reg)
- [Undo Brave.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Brave.reg)
- [Undo Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_Vivaldi.reg)
- [Undo YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/Undo_DisableAppContainer_YandexBrowser.reg)

#### Explicitní úprava registru

Pokud váš prohlížeč není uveden v seznamu, postupujte podle níže uvedených pokynů a vytvořte potřebné položky registru:

1. Určete jeho větev zásad kontrolou oficiální dokumentace dodavatele nebo otevřením interní stránky zásady. V Chrome přejděte na `chrome://policy`. Ostatní prohlížeče používají podobnou cestu.

2. Určete správnou větev registru pro váš prohlížeč. Různé prohlížeče založené na Chromiu používají různé cesty zásad v rámci `HKLM`. Mělo by se řídit modelem `HKLM\SOFTWARE\Policie\<Vendor>\<Product>`.

3. Otevřít editor registru:

   - Stiskněte _Win + R_
   - Napište _regedit_ a stiskněte _Enter_
   - Potvrďte výzvu UAC spuštěním jako správce

4. Zálohujte větev zásad:

   - V levém panelu přejděte na `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`
   - Klikněte pravým tlačítkem myši na _Zásady_ → _Exportovat_
   - Uložte soubor jako _Policies_backup.reg_

   Pokud se něco pokazí, můžete zálohu obnovit dvojitým kliknutím na tento soubor.

5. Přejděte na klíč zásad vašeho prohlížeče:

   - Rozbalte cestu `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Policies_.
   - Vyhledejte složku odpovídající vašemu prohlížeči.

Pokud klíč neexistuje, můžete jej vytvořit ručně. Příklad pro Chrome:

- Klikněte pravým tlačítkem myši na _Zásady_ → _Nový_ → _Klíč_ a pojmenujte jej `Google`
- Uvnitř `Google` vytvořte další klíč s názvem `Chrome`

Opakujte stejnou logiku pro prohlížeče Chromium, Edge, Brave, Vivaldi, Yandex Browser atd. Měli byste získat klíč, který vypadá jako `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>`.

1. Přidejte požadované hodnoty registru:

   - Ve správném klíči klikněte na pravý panel → _Nový_ → _DWORD (32bitová) hodnota_

   - Pojmenujte jej `RendererAppContainerEnabled`

   - Dvakrát na něj klikněte a nastavte:

     - **Value:** 0
     - **Base:** Hexadecimální nebo decimální (obojí je v pořádku)

   - Opakujte postup a vytvořte druhý DWORD \`NetworkServiceSandboxEnabled\`.

   - Nastavte jeho hodnotu na 0.

   Oba parametry musí být `REG_DWORD` a mít hodnotu **0**.

2. Zavřete prohlížeč a použijte nastavení. Chcete-li zajistit, aby byla zásada načtena:

   - Úplně zavřete prohlížeč
   - Zkontrolujte Správce úloh a ujistěte se, že žádné procesy jako _chrome.exe_, _msedge.exe_, _brave.exe_ nezůstávají spuštěné
   - Znovu otevřete prohlížeč

3. Ověřte, zda byly zásady použity otevřením prohlížeče zásad v prohlížeči.

Měly by být aktivní následující zásady:

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

Pokud jsou k dispozici, klikněte na _Znovu načíst zásadu_.

Hotovo!

## Trvalé řešení

Plánujeme přidat podporu pro ovladač SockFilter v nadcházejících verzích. Problém vyřeší odstraněním konfliktů ve stacku WFP. [Další informace](https://github.com/AdguardTeam/AdguardForWindows/issues/5780).
