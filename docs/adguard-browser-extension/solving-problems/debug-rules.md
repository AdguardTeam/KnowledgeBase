---
title: How to debug rules in AdGuard for Chrome MV3
sidebar_position: 2
---

In [AdGuard for Chrome MV3](/adguard-browser-extension/mv3-version), the Filtering log only shows the approximate rules that were applied, which we call “assumed rules”. This is because the browser doesn’t provide details about which specific declarative rules were used unless the extension is in an “unpacked” format. To get precise information, you’ll need to install the unpacked version of the extension in your browser yourself.

These instructions are also meant for problematic cases where you want to modify the rules that are bundled with the extension statically. In most cases, using *User rules* in the extension should be sufficient.

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
    pnpm dev chrome-mv3
    ```

1. The built extension will be located in the directory:

    ```bash
    ./build/dev/chrome-mv3
    ```

## How to install unpacked in the browser

1. Turn on developer mode:

    ![Developer mode](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

1. Click *Load unpacked*:

    ![Load unpacked](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

1. Select the extension directory and click `Select`:

    ![Select](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

That’s it!

## How to debug rules

1. First, build the extension (skip this step if you already did so in the *How to build extension* section):

    ```shell
    pnpm dev chrome-mv3
    ```

2. Convert filters to DNR rulesets **automatically**:

    To speed up the development of DNR rulesets, use the `@adguard/dnr-rulesets` `watch` command. This command automatically rebuilds rulesets whenever filter files change.

    Start watch mode with all required filters:

    ```shell
    npx @adguard/dnr-rulesets watch \
        # Enable rulesets with IDs 1 and 2
        --enable=1,2 \
        # Download filters from the server on the first run
        --load \
        # Path to the extension manifest
        ./build/dev/chrome-mv3/manifest.json \
        # Path to web-accessible-resources directory (needed for $redirect rules)
        ./Extension/web-accessible-resources
    ```

    The `--load` flag will download all filters from the server on the first run. For subsequent runs, you can omit this flag to use existing filters:

    ```shell
    npx @adguard/dnr-rulesets watch \
        # Enable rulesets with IDs 1 and 2
        --enable=1,2 \
        # Path to the extension manifest
        ./build/dev/chrome-mv3/manifest.json \
        # Path to web-accessible-resources directory (needs for $redirect rules)
        ./Extension/web-accessible-resources
    ```

    Now, whenever you modify filter files, the DNR rulesets will rebuild automatically, so you won’t have to rebuild the entire extension.

**OR**

2. Convert filters to DNR rulesets **manually**:

    If you do not want to use watch mode and only need a single run, you can do it directly via the `@adguard/tsurlfilter` CLI command `convert` — it will convert filters to DNR rulesets:

    ```shell
    npx @adguard/tsurlfilter convert \
        # Enable extended logging about rulesets
        --debug \
        # Path to the directory with raw txt filters
        ./build/dev/chrome-mv3/filters \
        # Path to web-accessible-resources directory (needed for $redirect rules)
        ./Extension/web-accessible-resources \
        # Destination path for converted DNR rulesets
        ./build/dev/chrome-mv3/filters/declarative
    ```

    After the conversion is done, you can manually update the ruleset information in `manifest.json` if needed: enable, add, or remove rulesets as required.

3. Reload the extension in the browser after conversion:

    ![Reload extension](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)

4. If you see an exclamation mark, it means the assumed rule (calculated by our tsurlfilter engine using MV2 rules) and the applied rule (converted to a DNR rule) are different. This can indicate a conversion problem.

    Otherwise, if the assumed and applied rules are the same, only the applied rule, in both raw text and declarative rule views, will be shown.
