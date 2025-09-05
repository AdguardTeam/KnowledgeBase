---
title: Odeslání zpětné vazby
sidebar_position: 4
---

## Nahlášení problému nebo navržení funkce

Pokud jste v AdGuardu pro Linux našli chybu nebo chcete navrhnout novou funkci, zde je návod, jak to udělat:

- Vyplňte [formulář zpětné vazby](https://surveys.adguard.com/en/adguard_linux/form.html).
- Vytvořte problém na [GitHubu](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose). Ještě předtím se ale podívejte do [repozitáře](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue), kde najdete podobné problémy.

:::note

Pokud chcete podpořit zavedení nové funkce nebo opravu chyby, můžete pro ni hlasovat na GitHubu. Chcete-li hlasovat, stačí reagovat pomocí emoji.

:::

## Shromažďování a odesílání záznamů

1. Povolte protokolování ladění:

   `adguard-cli config set log_level debug`

2. Reprodukujte problém a pokuste se zapamatovat si přesný čas, kdy k němu došlo.

3. Chvíli počkejte a pak protokoly exportujte:

   `adguard-cli export-logs`

   Archivovaný soubor protokolu bude ve výchozím nastavení stažen do složky aplikace a cesta k protokolům bude zapsána do konzoly.

4. Odešlete soubor se záznamem na <devteam@adguard.com>. Uveďte čas chyby a připojte odkaz na problém nebo jeho číslo na GitHubu (zobrazuje se jako #číslo vedle názvu). Soubor se záznamem můžete také nahrát na Disk Google a odeslat jej na <devteam@adguard.com>. Přiložte odkaz na soubor do svého problému na GitHubu.

5. Přepněte režim protokolování zpět na `info`:

   `adguard-cli config set log_level info`
