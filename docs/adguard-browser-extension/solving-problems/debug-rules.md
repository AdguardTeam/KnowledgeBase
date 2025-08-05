---
title: How to debug rules in AdGuard for Chrome MV3
sidebar_position: 2
---

In [AdGuard for Chrome MV3](/adguard-browser-extension/mv3-version), the Filtering log only shows the approximate rules that were applied, which we call “assumed rules”. This is because the browser doesn’t provide details about which specific declarative rules were used unless the extension is in an “unpacked” format. To get precise information, you’ll need to install the unpacked version of the extension in your browser yourself.

These instructions are also meant for problematic cases where you want to modify the rules that are bundled with the extension statically. In most cases, using *User rules* in the extension should be sufficient.

Additionally, you can edit filters and rebuild DNR rulesets without rebuilding the entire extension, which may be useful for debugging purposes.

## Prerequisites

1. **Git:** [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

1. **Node:** [Install Node.js](https://nodejs.org/en/download/package-manager)

1. **pnpm:** [Install pnpm](https://pnpm.io/installation)

## How to clone extension

1. Clone the repository:

    ```bash
    git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
    ```

1. Navigate to the directory:

    ```bash
    cd AdguardBrowserExtension
    ```

1. Install dependencies:

    ```bash
    pnpm install
    ```

## How to build extension

1. Run the following command in the terminal:

    ```bash
    pnpm dev chrome-mv3 # OR: opera-mv3
    ```

1. The built extension will be located in the directory:

    ```bash
    ./build/dev/chrome-mv3 # OR: opera-mv3
    ```

## How to install unpacked in the browser

1. Turn on developer mode:

    ![Developer mode](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

1. Click *Load unpacked*:

    ![Load unpacked](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

1. Select the extension directory and click `Select`:

    ![Select](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

That’s it!

##### How to debug rules

You can debug and update DNR rulesets without rebuilding the entire extension. There are two main workflows:

**A. Automatic (recommended for most cases):**

1. **Build the extension** (if not done yet):
    ```shell
    pnpm install
    pnpm dev chrome-mv3 # OR: opera-mv3
    ```

1. **Start watching for filter changes:**
    ```shell
    pnpm debug-filters watch
    ```
    - This command has `-b, --browser <browser>` option to specify the browser target.
      Available browsers: `chrome-mv3`, `opera-mv3`.
      Default: `chrome-mv3`.
    - This will extract text filters to `./build/dev/<browser>/filters` and watch for changes.
    - When you edit and save any filter file, DNR rulesets will be rebuilt automatically.

1. **Reload the extension in your browser** to apply new rulesets.

**B. Manual (for advanced/manual control):**

1. **Build the extension** (if not done yet):
    ```shell
    pnpm install
    pnpm dev chrome-mv3 # OR: opera-mv3
    ```

1. **Extract text filters:**
    ```shell
    pnpm debug-filters extract
    ```
    - This command has `-b, --browser <browser>` option to specify the browser target.
      Available browsers: `chrome-mv3`, `opera-mv3`.
      Default: `chrome-mv3`.

1. **Edit the text filters** in `./build/dev/<browser>/filters` as needed.

1. **Convert filters to DNR rulesets:**
    ```shell
    pnpm debug-filters convert
    ```
    - This command has `-b, --browser <browser>` option to specify the browser target.
      Available browsers: `chrome-mv3`, `opera-mv3`.
      Default: `chrome-mv3`.

1. **Reload the extension in your browser** to apply new rulesets.

**Tip:**
- To download the latest available text filters, run:
    ```shell
    pnpm debug-filters load
    ```
    - This command has `-b, --browser <browser>` option to specify the browser target.
      Available browsers: `chrome-mv3`, `opera-mv3`.
      Default: `chrome-mv3`.

If you see an exclamation mark in the filtering log, it means the assumed rule (calculated by the engine) and the applied rule (converted to DNR) are different. Otherwise, only the applied rule (in DNR and text ways) will be shown.

##### <a name="dev-technical-info-about-debug-commands"></a> Technical information about commands