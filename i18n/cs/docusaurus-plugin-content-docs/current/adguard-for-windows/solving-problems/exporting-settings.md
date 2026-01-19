---
title: Jak se po aktualizaci na verzi v8.0 vrátit k předchozí verzi
sidebar_position: 12
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Změny v AdGuard pro Windows v8.0 jsou významné a doufáme, že se vám nová verze bude líbit. Je však pravděpodobné, že něco nepůjde tak, jak jste očekávali. Verze 8.0 je velmi odlišná; koneckonců je to první noční verze. Pokud vám rozhraní verze 8.0 nevyhovuje nebo jste narazili na příliš mnoho problémů s funkčností/stabilitou, můžete obnovit předchozí verzi i s jejími nastaveními.

Abyste měli jistotu, že vaše nastavení zůstanou během celého procesu zachována, doporučujeme je před upgradem na verzi 8.0 exportovat. V případě potřeby můžete znovu nainstalovat verzi 7 a importovat zpět uložená nastavení.

Alternativně je k dispozici také následující metoda:

1. Po aktualizaci na verzi 8 otevřete složku `C:\ProgramData\Adguard\Backups` a vyhledejte soubor ZIP s názvem podobným jako `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Zkopírujte tento soubor ZIP někam mimo `C:\ProgramData\Adguard`, například na pracovní plochu. To je důležité, protože v dalším kroku bude smazán.
3. Odinstalujte verzi 8.0 se zapnutou volbou **odstranit nastavení**.
4. Nainstalujte předchozí sestavení. Odkaz ke stažení najdete v sekci _Assets_ [na GitHubu].(https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. Ukončením verze 7 ze systémové lišty zastavte filtrování.
6. Rozbalte obsah souboru ZIP z prvního kroku a nahraďte následující soubory:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` and `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Spusťte AdGuard.

Vše připraveno!
