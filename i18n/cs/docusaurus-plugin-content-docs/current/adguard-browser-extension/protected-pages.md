---
title: Stránky chráněné prohlížečem
sidebar_position: 4
---

:::info

Tento článek je o Rozšíření prohlížeče AdGuard, které chrání pouze váš prohlížeč. Chcete-li chránit celé zařízení, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Při používání webového rozšíření, jako je Rozšíření prohlížeče AdGuard, existují určité omezené domény, které zakazují přístup nebo oprávnění. Rozšíření pro blokování reklam proto nemohou zasahovat do obsahu těchto stránek ani jej měnit. Jinými slovy, není jim dovoleno blokovat reklamy a další obtěžující prvky na těchto webových stránkách.

## Omezení prohlížeče Chromium

Prohlížeče založené na platformě Chromium, jako je např. Google Chrome, udržují seznam omezených domén, ke kterým rozšíření nemají přístup. Mezi tyto domény patří:

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- URLs začínající na `chrome://`, `chrome-extension://` nebo `https://chrome.google.com/webstore/`
- Soubory PDF
- Stránky, kde je zakázán JavaScript
- Stránky s bezpečnostními upozorněními
- Chybové stránky, jako jsou chyby 404 a chyby sítě
- URL začínající na `view-source:` nebo `data:`

## Omezení prohlížeče Firefox

Podobně má prohlížeč Firefox vlastní sadu omezených domén, ve kterých není povoleno používat rozšíření. Mezi tyto omezené domény patří:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Úprava omezení v prohlížeči Firefox

Změna pokročilých nastavení může ovlivnit stabilitu a zabezpečení prohlížeče Firefox. Tato možnost je doporučena pouze pro pokročilé uživatele. Pokud jste si vědomi souvisejícího rizika, a přesto chcete povolit doplňky zakázané na chráněné stránce, postupujte podle následujících kroků:

1. Klikněte na tlačítko nabídky → **Doplňky a motivy** → **Rozšíření**.
2. Klikněte na rozšíření, které chcete povolit na stránkách s omezeními (v tomto případě AdGuard).
3. V části **Spustit na webech s omezeními** vyberte **Povolit**.

Případně můžete:

1. Otevřete novou kartu a do adresního řádku napište **about:config**.
2. Stiskněte **Return**. Může se objevit varování. V tomto případě klikněte na **Přijmout riziko a pokračovat**.
3. Vyhledejte `extensions.webextensions.restrictedDomains`. Pokud tuto předvolbu nemůžete najít, můžete ji vytvořit. Jednoduše vyberte typ **Boolean** a kliknutím na **+** přidejte.
4. Klikněte na přepínací tlačítko vedle této předvolby a změňte jeho hodnotu na `false`.
5. Restartujte Firefox.

Další informace o tomto tématu najdete [v článku na webu podpory Mozilly](https://mzl.la/3POXoWi).
