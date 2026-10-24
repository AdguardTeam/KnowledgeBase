---
title: Safari-beskyttelse
sidebar_position: 1
---

:::info

Denne artikel omhandler AdGuard til iOS, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

### Indholdsblockere {#content-blockers}

Indholdsblockere fungerer som 'beholdere' til filtreringsregler, som udfører det reelle arbejde med at blokere annoncer og sporing. AdGuard til iOS indeholder seks indholdsblockere: Generelt, Fortrolighed, Socialt, Sikkerhed, Tilpasset og Andet. Tidligere tillod Apple kun hver indholdsblocker at indeholde maksimalt 50K filtreringsregler, men med iOS 15-udgivelsen er den øvre grænse hævet til 150K regler.

Alle indholdsblockere, deres status, hvilke tematiske filtre de pt. inkluderer og det samlede antal brugte filtreringsregler kan findes på den respektive skærm i _Avancerede indstillinger_ (tryk på tandhjulsikonet nederst til højre → _Generelt_ → _Avancerede indstillinger_ → _Indholdsblockere_).

![Indholdsblockere \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Hold alle indholdsblockere aktiveret for bedst mulig filtreringskvalitet.

:::

### Filtre {#filters}

Indholdsblockeres funktion er baseret på filtre, nogle gange også omtalt som filterlister. Hvert filter er en liste over filtreringsregler. Er en adblocker aktiv, når der surfes, tjekker den konstant de besøgte sider og deres elementer mod disse filtreringsregler og blokerer alt, der matcher. Regler er udviklet til at blokere annoncer, trackere og mere.

Alle filtre er grupperet i tematiske kategorier. For en komplet liste over disse kategorier (ikke at forveksle med indholdsblockere), åbn afsnittet _Beskyttelse_ ved at trykke på skjoldikonet og dernæst gå til _Safari-beskyttelse_ → _Filtre_\*.

![Filtergrupper \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Der er otte af disse, hver kategori samler flere filtre, som tjener og deler et fælles formål, f.eks. blokering af annoncer, widgets til sociale medier, meddelelser om cookies, og beskytter brugeren mod online-svindel. For at afgøre, hvilke filtre som opfylder de aktuelle behov, læs deres beskrivelser og navigér efter etiketterne (`annoncer`, `fortrolighed`, `anbefalet` mv.).

:::note

Flere aktiverede filtre garanterer ikke automatisk færre annoncer. Et stort antal forskellige filtre, som er aktiveret samtidigt, reducerer kvaliteten af adblocking.

:::

Tilpasset filtre-kategorien er som standard tom, så brugere kan tilføje deres filtre efter URL. Man kan finde filtre på nettet eller endda prøve at [oprette et selv](/general/ad-filtering/create-own-filters).

### Brugerregler {#user-rules}

Her kan nye regler tilføjes — enten ved at angive dem manuelt eller ved brug af [AdGuards manuelle blockingværktøj i Safari](#assistant). Brug dette værktøj til at tilpasse Safari-filtrering uden at tilføje en hel filterliste.

Læs om, [hvordan egne filtre oprettes](/general/ad-filtring/create-own-filters). Bemærk dog, at mange af dem ikke fungerer i Safari på iOS.

![Brugerreglerskærm \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Hvidliste {#allowlist}

Det tredje afsnit på skærmen _Safari-beskyttelse_. Ønskes adblocking deaktiveret på et bestemt websted, vil Hvidliste være til hjælp. Den muliggør at føje domæner og underdomæner til undtagelser. AdGuard til iOS har en funktion til import/eksport, så hvidlisten fra én enhed nemt kan overføres til en anden.
