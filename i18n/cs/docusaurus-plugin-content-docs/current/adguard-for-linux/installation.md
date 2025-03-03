---
title: Instalace, nastavení a odinstalace
sidebar_position: 2
---

## Instalace AdGuardu pro Linux

Chcete-li nainstalovat AdGuard, zadejte:

Hlavní

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

V případě potřeby zadejte heslo správce.

Stiskněte `y`, abyste vytvořili odkaz v `/usr/local/bin` na spustitelný soubor a počkejte na dokončení instalace.

:::note

Podpis můžete ověřit pomocí nástroje `gpg`, abyste prokázali, že se jedná o oficiální verzi AdGuardu. [Více na GitHubu](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Aktivace licence

AdGuard pro Linux vyžaduje [licenci AdGuardu](https://adguard.com/license.html). Pokud ještě nemáte licenci, můžete se přihlásit nebo si vytvořit účet a získat 14denní zkušební verzi zdarma. Pokud již licenci máte, přihlaste se a aktivujte ji.

Chcete-li se přihlásit nebo si vytvořit účet, zadejte:

```
adguard-cli activate
```

Chcete-li obnovit licenci, zadejte:

```
adguard-cli reset-license
```

Chcete-li zobrazit informace o licenci, zadejte:

```
adguard-cli license
```

## Počáteční nastavení

Chcete-li AdGuard zprovoznit, proveďte počáteční nastavení. To zahrnuje instalaci certifikátu AdGuard CA, povolení potřebných filtrů a výběr režimu proxy serveru.

Chcete-li spustit průvodce konfigurací, zadejte:

```
adguard-cli configure
```

## Odinstalace AdGuardu pro Linux

Chcete-li odinstalovat AdGuard, zadejte:

Hlavní

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

V případě potřeby zadejte heslo správce.
