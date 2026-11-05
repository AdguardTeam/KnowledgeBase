---
title: Installation, opsætning og afinstallation
sidebar_position: 2
---

## Installér AdGuard til Linux

Åbn en kommandolinje på computeren. I Linux, brug tastaturgenvejen _Ctrl+Alt+T_. I Mac, skriv _Terminal_ i søgefeltet.

For at installere AdGuard, vælg den ønskede version (udgivelse/beta/natlig) og indtast den respektive kommando.

**Udgivelse**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**Beta**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**Nightly**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Om nødvendigt, angiv admin-adgangskoden.

Tryk `y` for at oprette et link i `/usr/local/bin` til den eksekverbare, og afvent installationens færdiggørelse.

:::note

Via `gpg`-værktøjet kan signaturen bekræftes for at bevise, at det er en officiel AdGuard-version. [Læs mere på GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Indledende opsætning

AdGuard til Linux kræver en [AdGuard-licens](https://adguard.com/license.html). Haves endnu ingen licens, log ind eller opret en konto for at få en gratis 14-dages prøveperiode. Haves allerede en licens, log ind for at aktivere den. For at gøre dette, følg denne trin-for-trin vejledning:

1. Efter installation, indtast:

   ```sh
   adguard-cli activate
   ```

2. Vælg dernæst den ønskede mulighed:

   ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/1activate.png)

3. Når man har en licens, følg det angivne link for at fortsætte med aktiveringen:

   ![Aktivere licens \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

4. Efter aktivering kan brugen af programmet fortsættes:

   ![Gennemført aktivering \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

5. Licensen kan også nulstilles ved at skrive:

   ```sh
   adguard-cli reset-license
   ```

   eller se licensoplysningerne ved at indtaste

   ```sh
   adguard-cli license
   ```

6. Dernæst skal AdGuard CLI opsættes. For at eksekvere opsætningsguiden, skriv:

   ```sh
   adguard-cli configure
   ```

   ![Opsætning \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/4configure.png)

   Guiden stiller basisspørgsmål krævet for den indledende opsætning.

7. Dernæst kan AdGuard-beskyttelsen startes ved at indtaste

   ```sh
   adguard-cli start
   ```

   ![Start beskyttelse \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/5start.png)

8. Beskyttelsesstatussen kan tjekkes ved at bruge:

   ```sh
   adguard-cli status
   ```

   og stoppe den med:

   ```sh
   adguard-cli stop
   ```

   ![Stop beskyttelse \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/6status-stop.png)

9. For at tjekke den aktuelle opsætning, indtast:

   ```sh
   adguard-cli config show
   ```

   ![Aktuel opsætning \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/7config_show.png)

   Stien til opsætningsfilen vises også, og filen kan — og bør — redigeres direkte. Den indeholder beskrivelser af alle yderligere muligheder.

   Alternativt kan der bruges flg. kommandoer:

   ```sh
   adguard-cli config get
   ```

   eller:

   ```sh
   adguard-cli config set
   ```

   De er dog primært beregnet til scripting.

For yderligere oplysninger om de tilgængelige kommandoer, tjek afsnittet [Indstillinger og beskyttelseshåndtering](https://adguard.com/kb/adguard-for-linux/settings/).

## Afinstallation af AdGuard til Linux

For at afinstallere AdGuard, skriv:

Udgivelse

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Om nødvendigt, angiv admin-adgangskoden.
