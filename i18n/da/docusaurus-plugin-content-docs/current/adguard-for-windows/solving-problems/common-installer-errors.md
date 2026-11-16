---
title: Almindelige installer-fejl
sidebar_position: 7
---

:::info

Denne artikel omhandler AdGuard til Windows, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Denne artikel indeholder nogle af de mest almindelige fejl, som kan opleves under installationen af AdGuard til Windows, samt mulige måder at løse dem på.

### Fejl 5: Adgang nægtet {#error-5}

Denne fejlmeddelelse vises, hvis de nødvendige tilladelser ikke er tildelt. Der kan være flere årsager til, at AdGuard-installeren ikke har de tilladelser, som kræves for at afslutte installationsprocessen korrekt. Flg. trin kan prøves:

- Deaktivér midlertidigt antivirusprogrammet. Nogle antivirusprogrammer kan forstyrre installationen, afhængigt af deres indstillinger.

- Vælg en anden installationsmappe. Det er muligt, at den aktuelle installationsmappe har nogle adgangsbegrænsninger. Undgå også at vælge et eksternt drev, virtuelt drev mv.

- Genstart computeren. Nogle gange er tilladelsesproblemerne midlertidige og kan løses ved en genstart af PC'en.

### Fejl 112: Disken er fuld, Fejl 1632: Midlertidig mappe fuld eller utilgængelig {#error-112}

Disse er to forskellige fejl med meget ens løsninger. Som deres titler antyder, fandt AdGuard-installeren ikke nok diskplads til at fuldføre installationen. Flere ting kan forsøges for at løse problemet:

- Afinstallér nogle programmer, eller slet unødvendige filer fra det drev, hvor AdGuard forsøges installeret.

- Download, installér og kør [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), et gratis værktøj fra Malwarebytes. Det renser blandt andet systemet for alle mulige "filefterladenskaber", som måtte restere efter ukorrekte programafinstallationer mv. Det kan hjælpe med rense og frigøre diskplads.

- Genstart computeren. Nogle gange kan midlertidige filer optage en anseelig mængde diskplads, og genstart af PC'en er den mest pålidelige måde at slippe af med dem på.

### Fejl 1601: Windows-installationsprogram er utilgængeligt {#error-1601}

Man kan sige, at dette er en særlig underkategori af Fejl 1603. De mulige løsninger er ens:

- Start og genregistrér Microsoft Installer-tjenesten. Dette kræver lidt arbejde.

    - Tryk på *Win + R* og skriv **services.msc**.
    - På listen, find og dobbeltklik på *Windows Installer*.
    - Tryk på *Start*-knappen under *Tjenestestatus* og tryk på *OK*. Er tjenestestatussen **kører**, klik da først på *Stop* og dernæst på *Start*.
    - Tryk på *Win + R*, skriv ***msiexec /unregister*** og tryk på *Retur*.
    - Tryk igen på *Win + R*, skriv ***msiexec /regserver*** og tryk på *Retur*

- Genstart PC'en og start installationen forfra. Nogle gange er dette nok til at løse problemet.

### Fejl 1602: Afbrudt af bruger {#error-1602}

Denne fejlkode indikerer, at installationsprocessener på en eller anden måde er blevet afbrudt manuelt. Hvad der kan gøres, er:

- Undlad at lukke installationsvinduet. Når installationen er færdig, lukkes vinduet automatisk.

- Dukker et dialogvindue op under installationen, tryk på "Ja" for at tildele installationsprogrammet de nødvendige tilladelser. Klikkes på "Nej", afbrydes installationen.

- Undlad at starte andre processer, mens installationsprocessen kører.

### Fejl 1603: Fatal fejl under installationen {#error-1603}

Fejlen lyder mere skræmmende, end den faktisk er. Reelt er der tale om en ret generisk fejl med mange forskellige årsager, hvoraf nogle nemt kan rettes. Prøv flg. løsninger:

- Tryk på *Win*-tasten, søg efter *Kommandoprompt* og kør den. Skriv dernæst `sfc /scannow` på kommandolinjen og tryk på *Retur*.

- Vælg en anden installationsmappe. Det er muligt, at den aktuelle installationsmappe har nogle adgangsbegrænsninger. Undgå også at vælge et eksternt drev, virtuelt drev mv.

- Afinstallér AdGuard via vores særlige [afinstallationsværktøj](../../installation#advanced) og start derefter installationen forfra.

- Start og genregistrér Microsoft Installer-tjenesten. Dette kræver lidt arbejde.

    - Tryk på *Win + R* og skriv ***services.msc***.
    - På listen, find og dobbeltklik på *Windows Installer*.
    - Tryk på *Start*-knappen under *Tjenestestatus* og tryk på *OK*. Er tjenestestatussen **kører**, klik da først på *Stop* og dernæst på *Start*.
    - Tryk på *Win + R*, skriv ***msiexec /unregister*** og tryk på *Retur*.
    - Tryk igen på *Win + R*, skriv ***msiexec /regserver*** og tryk på *Retur*

- Få tildelt fulde tilladelser på installationsdrevet. En fejl 1603 vil blive vist, såfremt alle tilladelser til filplaceringen ikke er blevet tildelt. Løsningen er heller ikke så nem, som nogle af de øvrige muligheder:

    - Åbn *Stifinder*, højreklik på drevet med installationsplaceringen og vælg *Egenskaber*.
    - Gå til fanen *Sikkerhed* og klik på *Redigér*.
    - Klik på *SYSTEM* og sørg for, at feltet *Tillad* er markeret (hvis muligt) for alle punkter i *Tilladelser for SYSTEM*. Udfør samme tjek for *Administratorer*.
    - Klik på *OK* for at returnere til dialogboksen *Egenskaber*. Klik dernæst på *Avanceret*.
    - Klik på *Skift tilladelser*.
    - På fanen *Tilladelse*, dobbeltklik på *Administratorer*.
    - Vælg *Denne mappe, undermapper og filer* i feltet *Gælder for* og markér alle de tilgængelige *Basistilladelser*. Tryk dernæst på *OK*.
    - Udfør samme handling, som ovenfor (fra punkt 7), for *SYSTEM*.
    - Klik på *OK* hele vejen ud. Prøv at installere AdGuard igen.

### Fejl 1618: En anden installation er allerede i gang {#error-1618}

Denne fejl vises, når flere forekomster af AdGuard-installeren kører samtidigt. Hvad der skal gøres, hvis denne fejl ses:

- Genstart PC'en og start installationen forfra. Når computeren genstartes, stopper alle igangværende processer, inkl. alle forekomster af installeren.

- Klik ikke på installeren flere gange, selvom den (ser ud som om, at den) ikke starter med det samme. Somme tider tage det nogle sekunder at få vist installer-UI'en.

### Fejl 1638: En anden version af dette produkt er allerede installeret {#error-1638}

Det er meget sandsynligt, at AdGuard allerede er blevet installeret tidligere.

- Tjek, om AdGuard allerede er installeret på computeren. Det kan gøres ved at trykke på *Win*-tasten og skrive ***AdGuard***.

- Der findes måske nogle efterladenskaber fra en tidligere AdGuard-installation. Afinstallér AdGuard via vores særlige [afinstallationsværktøj](../../installation#advanced) og start derefter installationen forfra.

### Andre fejl {#other}

Opleves en fejl, der ikke er angivet ovenfor, er det muligt, at vi selv kan løse den. For at gøre det, behøver vi dog logfiler fra brugeren. Udfør derfor flg. trin:

- Find og arkivér **AdGuard-installationslogfilerne**, som beskrevet i [denne artikel](../installation-logs).

- Find **Hændelsesoversigt**-logfilerne og gem dem på disken. [Denne artikel](../system-logs) forklarer, hvordan dette gøres.

- Send en e-mail vedhæftet alle filer fra de to tidligere trin — inkl. en problembeskrivelse i beskedfeltet — til supportteamet via **support@adguard.com**. Vores tekniske supportmedarbejdere vil svare hurtigst muligt.
