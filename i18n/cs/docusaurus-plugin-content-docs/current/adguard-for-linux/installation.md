---
title: Instalace, nastavení a odinstalace
sidebar_position: 2
---

## Instalace AdGuardu pro Linux

Otevřete příkazový řádek v počítači. V systému Linux použijte klávesovou zkratku _Ctrl+Alt+T_. V počítači Mac zadejte do vyhledávacího pole _Terminal_.

Chcete-li nainstalovat AdGuard, vyberte verzi, která vám lépe vyhovuje (hlavní, beta nebo nightly), a zadejte příslušný příkaz.

**Hlavní**:

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

V případě potřeby zadejte heslo správce.

Stiskněte `y`, abyste vytvořili odkaz v `/usr/local/bin` na spustitelný soubor a počkejte na dokončení instalace.

:::note

Podpis můžete ověřit pomocí nástroje `gpg`, abyste prokázali, že se jedná o oficiální verzi AdGuardu. [Více na GitHubu](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Počáteční nastavení

AdGuard pro Linux vyžaduje [licenci AdGuardu](https://adguard.com/license.html). Pokud ještě nemáte licenci, můžete se přihlásit nebo si vytvořit účet a získat 14denní zkušební verzi zdarma. Pokud již licenci máte, přihlaste se a aktivujte ji. Postupujte podle tohoto průvodce krok za krokem:

1. Po instalaci zadejte:

   ```sh
   adguard-cli activate
   ```

2. Poté vyberte požadovanou možnost:

   ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation1.png)

3. Po získání licence pokračujte v aktivaci pomocí poskytnutého odkazu:

   ![Activate license \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

4. Po aktivaci můžete s programem dále pracovat:

   ![Successful activation \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

5. Licenci můžete obnovit také zadáním:

   ```sh
   adguard-cli reset-license
   ```

   nebo zobrazit informace o licenci zadáním

   ```sh
   adguard-cli license
   ```

6. Nyní je třeba nastavit rozhraní AdGuard CLI. Chcete-li spustit průvodce konfigurací, zadejte:

   ```sh
   adguard-cli configure
   ```

   ![Setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation4.png)

   Průvodce se zeptá na základní otázky potřebné pro počáteční nastavení.

7. Poté můžete spustit ochranu AdGuardem zadáním příkazu

   ```sh
   adguard-cli start
   ```

   ![Start protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation5.png)

8. Stav ochrany můžete zkontrolovat pomocí:

   ```sh
   adguard-cli status
   ```

   a zastavit pomocí:

   ```sh
   adguard-cli stop
   ```

   ![Stop protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

9. Chcete-li zkontrolovat aktuální konfiguraci, zadejte:

   ```sh
   adguard-cli config show
   ```

   ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

   Zobrazí se také cesta ke konfiguračnímu souboru, který můžete a měli byste přímo upravit. Obsahuje popisy všech dalších možností.

   Alternativně můžete použít příkazy:

   ```sh
   adguard-cli config get
   ```

   nebo:

   ```sh
   adguard-cli config set
   ```

   Jsou však primárně určeny pro skriptování.

Další informace o dostupných příkazech naleznete v [Nastavení a správa ochrany] (https://adguard.com/kb/adguard-for-linux/settings/).

## Odinstalace AdGuardu pro Linux

Chcete-li odinstalovat AdGuard, zadejte:

Hlavní

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

V případě potřeby zadejte heslo správce.
