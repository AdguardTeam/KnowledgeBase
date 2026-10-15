---
title: Sådan genereres HAR-filer
sidebar_position: 5
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

:::note

HAR-filer behandles i overensstemmelse med [AdGuard Fortrolighedspolitik](https://adguard.com/en/privacy.html).

:::

## Hvad er HAR-filer?

HAR-formatet (HTTP ARchive) er en JSON-formateret arkivfil til logning af en webbrowsers interaktion med et websted. Specifikationerne for HAR-format definerer arkivdata for HTTP-transaktioner, som af en webbrowser bruges til at eksportere detaljerede oplysninger om de websider, den indlæser. En mere detaljeret beskrivelse af HAR-filformatet, inkl. specifikation, findes på webstedet [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## Sådan genereres HAR-filer

For at kunne blokere en bestemt annonce, der af en eller anden grund er svær at genskabe, er vi nogle gange nødt til at analysere den. Følg disse trin for at oprette HAR-filer:

1. Åbn AdGuard og gå til **Indstillinger** (⚙-ikonet nederste til højre).
2. Tryk på **Generelt** →**Avanceret** → **Lavniveauindstillinger**.
3. Rul ned og aktivér **Optag HAR** i afsnittet Filtrering.
4. Åbn appen og udfør de nødvendige handlinger for at genskabe problematikken.
5. Deaktivér **Capture HAR**.
6. Vend tilbage til **Avanceret**.
7. Tryk på **Eksportere logfiler og systemoplysninger** → **Tillad** (hvis nødvendigt) → **Gem**.

**Indsend den genererede fil med logfilerne til AdGuard-supporttjenesten.**

:::note

Supportteamet behandler sagen meget hurtigere, såfremt HelpDesk-sagsnummeret eller GitHub-problematiknummeret angives i henvendelsen.

:::

## Sådan analyseres HAR-filer

Her er nogle kilder, som kan anbefales til analyse af HAR-filer:

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) er et HAR-analysatorværktøj, der visualiserer HTTP Archive (HAR)-logfiler oprettet af HTTP-sporingsværktøjer.
- [Fiddler](https://www.telerik.com/fiddler) er en webfejlretningsproxy, der muliggør at opfange, inspicere og overvåge al HTTP(S)-trafik mellem computeren og internet, simulere forespørgsler samt diagnosticere netværksproblemer.
