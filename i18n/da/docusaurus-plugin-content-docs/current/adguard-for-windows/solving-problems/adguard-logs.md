---
title: How to collect AdGuard logs
sidebar_position: 3
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

:::note

Data and files provided in logs are processed in accordance with the [AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

To diagnose problems you may encounter while using AdGuard, our support team may need AdGuard log files. These files record errors and other events that occur in the application. This article explains how to change the logging level, collect the logs, and send them to support.

AdGuard til Windows tilbyder to logningsniveauer: *Standard* og *Fejlfinding*. Til de fleste former for fejlfinding er *Fejlfinding* tilstrækkelig, men det kan gøre appen langsommere.

## Sådan skiftes logningsniveau {#change-level}

Logningsniveau kan skiftes på én af to måder:

### Mulighed 1: Via appen

Gå til AdGuard-indstillinger → *Support* → *Logfiler*, og vælg *Fejlfinding* i rullemenuen *Logningsniveau*.

![Rullemenu Logningsniveau på siden Support *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/support_logs.png)

### Mulighed 2: Via systembakkemenu

Right-click the AdGuard icon in the system tray, select *Advanced* → *Logging level*, and choose *Debug*.

![Logningsniveau i bakkemenu *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/tray_menu_debug.png)

## Debug logs {#debug-logs}

For de fleste problemer giver fejlfindingslogfiler supportteamet tilstrækkelige oplysninger til at identificere og løse problemet.

1. Indstil logningsniveauet til *Fejlfinding* via en af de metoder, som er beskrevet [ovenfor](#change-level).

1. Genskab problematikken. Notér det nøjagtige tidspunkt — det hjælper vores supportteam med at finde de relevante logposter og løse problemet hurtigere.

1. Go to AdGuard settings → *Support* → *Logs*, and click *Export logs and system info*.

    Når eksporten er fuldført, vises en bekræftelsesmeddelelse. Der kan klikkes på *Vis i mappe* for at åbne den mappe, hvori det eksporterede arkiv med logfiler og systemoplysninger er gemt.

    :::note

    Skift logningsniveauet tilbage til *Standard*, når logfilerne er eksporteret. Niveauet *Fejlfinding* gør applikationen langsommere.


:::

1. Indsend arkivet til **support@adguard.com**, beskriv problemet og angiv det klokkeslæt, hvor problemet blev genskabt.

## Trace logs {#trace-logs}

Nogle gange kan supportteamet anmode om *sporingslogfiler*. Sporingslogning registrerer flere detaljer end fejlfindingslogning og er kun tilgængelig via kommandolinjen.

1. Exit AdGuard by right-clicking the AdGuard icon in the tray menu and choosing *Exit AdGuard*.

    ![Exit AdGuard *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/exit_adguard.png)

    If prompted to keep the service running in the background, make sure to stop it — the service must not be running when you start AdGuard with trace logging.

1. Open the command prompt (type `cmd` in the Start menu search).

1. Kør AdGuard med sporingslogning aktiveret:

    ```text
    C:\"Program Files"\Adguard\Adguard.exe /trace
    ```

1. Genskab problematikken. Notér det nøjagtige tidspunkt — det hjælper vores supportteam med at finde de relevante logposter og løse problemet hurtigere.

1. Eksportér de indsamlede logfiler: Gå til Indstillinger → *Support* → *Logfiler* → *Eksportere logfiler og systemoplysninger*.

    Hvis logfilen er stor, bare rolig – vi har behøver så mange detaljer som muligt for at løse problemet.

1. Når sporingslogfilerne er eksporteret, så luk AdGuard og genstart den normalt for at returnere til standardlogningsniveauet.

## Diagnostisk rapport {#diagnostic-report}

Når supporten kontaktes via formularen i Indstillinger → *Support*, kan en diagnosticeringsrapport inkluderes, der automatisk vedhæfter applikationslogfiler sammen med andre systemoplysninger.

Diagnostikrapporten omfatter:

- Oplysninger om systemet
- En liste over kørende processer
- Oplysninger om AdGuard-indstillinger, herunder aktiverede filtre og installerede udvidelser
- Applikationslogfiler

For at bruge denne mulighed, markér afkrydsningsfeltet *Tilføj diagnosticeringsrapport*, før beskeden afsendes.

![Valgmulighed for diagnosticeringsrapport *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/solving_problems/add_report.png)

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::
