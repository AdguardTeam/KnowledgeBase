---
title: Jak ladit pravidla v AdGuardu pro Chrome MV3
sidebar_position: 2
---

V [AdGuardu pro Chrome MV3](/adguard-browser-extension/mv3-version) se v protokolu filtrování zobrazují pouze přibližná pravidla, která byla použita a která nazýváme "předpokládaná pravidla". Je to proto, že prohlížeč neposkytuje podrobnosti o tom, která konkrétní deklarativní pravidla byla použita, pokud není rozšíření v "rozbaleném" formátu. Chcete-li získat přesné informace, musíte si sami nainstalovat rozbalenou verzi rozšíření do prohlížeče.

Tyto pokyny jsou určeny i pro problematické případy, kdy chcete upravit pravidla, která jsou s rozšířením staticky svázána. Ve většině případů by mělo stačit použití _Uživatelských pravidel_ v rozšíření.

## Předpoklady

1. **Git:** [nainstalujte Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [nainstalujte Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [nainstalujte Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Jak klonovat rozšíření

1. Naklonujte repozitář:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Přejděte do adresáře:

   ```bash
   cd AdguardBrowserExtension
   ```

3. Přepněte na větev `v5.0`:

   ```bash
   git checkout v5.0
   ```

4. Nainstalujte závislosti:

   ```bash
   yarn install
   ```

## Jak sestavit rozšíření

1. Přepněte na větev `v5.0`:

   ```bash
   git checkout v5.0
   ```

2. V terminálu spusťte následující příkaz:

   ```bash
   yarn dev chrome-mv3
   ```

3. Sestavené rozšíření bude umístěno v adresáři:

   ```bash
   ./build/dev/chrome-mv3
   ```

## Jak nainstalovat rozbalené rozšíření v prohlížeči

1. Zapněte režim vývojáře:

   ![Developer mode](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Klikněte na _Načíst rozbalené_:

   ![Load unpacked](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Vyberte adresář s rozšířením a klikněte na `Vybrat`:

   ![Select](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

To je vše!

## Jak ladit pravidla

1. Najděte a upravte potřebné pravidlo v adresáři `./Extension/filters/chromium-mv3` v souborech `.txt`.

2. Převeďte pravidla z txt do deklarativní formy:

   ```bash
   yarn convert-declarative
   ```

3. Sestavte rozšíření znovu:

   ```bash
   yarn dev chrome-mv3
   ```

4. Znovu načtěte rozšíření v prohlížeči:

   ![Reload extension](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
