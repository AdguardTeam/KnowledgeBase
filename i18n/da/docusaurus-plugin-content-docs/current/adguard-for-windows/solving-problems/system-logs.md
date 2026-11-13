---
title: Sådan indsamles Windows-systemlogfiler
sidebar_position: 6
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

:::note

Data og/eller filer tilgængelige i systemlogfiler behandles i overensstemmelse med [AdGuard Fortrolighedspolitik](https://adguard.com/en/privacy.html).

:::

For at analysere og diagnosticere forskellige potentielle problematikker, kan AdGuard-supporttjenesten have brug for Windows-systemlogfiler. Windows-hændelseslogfiler indeholder poster om alle opståede fejl med den installerede software, herunder AdGuard. Nedenfor beskriver en kort vejledning måden, hvorpå logfilerne om nødvendigt hentes og indsendes til vores supporttjeneste.

1. Tryk på *Win + r*

1. Skriv `eventvwr` i det åbnede vindue og klik på *OK*:

    ![Kør-vindue *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Begivenhedsoversigtsvinduet vises som på billedet.

    ![Begivenhedsoversigt *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Gør flg. for at gemme de nædvendige filer:

    - Åbn *Applikation*: *Begivenhedsoversigt (Lokal)* → *Windows-logfiler* → *Applikation*.

    - Højreklik på *Applikation* og vælg i rullemenuen *Gem Alle begivenheder som...*

    - Vælg et navn samt en destination og klik på *Gem*. Vælg *Vis information for følgende sprog*. Markér afkrydsningsfeltet ud for *Engelsk*. Klik på *OK*.

    - Åbn *System*: *Begivenhedsoversigt (Lokal)* → *Windows-logfiler* → *System*.

    - Højreklik på *System* og vælg i rullemenuen *Gem Alle begivenheder som...*

    - Vælg en destinationsmappe, angiv navnet og klik på *Gem*. Vælg *Vis information for følgende sprog*. Afkryds her feltet ud for *Engelsk*. Klik på *OK*.

Indsend de to netop filer gemte filer via **support@adguard.com**.

:::note

AdGuard er dedikeret til beskyttelse af brugerfortrolighed. Vi følger strikst vores [Fortrolighedspolitik](https://adguard.com/privacy/windows.html) og indsamler ingen private oplysninger om brugere. Før indsendelse af logfiler til supportteamet, bedes filen gennemgået, da den kan indeholde yderligere oplysninger, som muligvis ikke ønskes delt. Indeholder den sådanne uønskede oplysninger, anbefales disse slettet først.

:::
