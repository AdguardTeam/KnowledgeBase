---
title: How to debug rules in AdGuard for Chrome MV3
sidebar_position: 2
---

In [AdGuard for Chrome MV3](/adguard-browser-extension/mv3-version), the Filtering log only shows the approximate rules that were applied, which we call “assumed rules”. This is because the browser doesn’t provide details about which specific declarative rules were used unless the extension is in an “unpacked” format. To get precise information, you’ll need to install the unpacked version of the extension in your browser yourself.

These instructions are also meant for problematic cases where you want to modify the rules that are bundled with the extension statically. In most cases, using _User rules_ in the extension should be sufficient.

## Prerequisites

1. **Git:** [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Install Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## How to clone extension

1. Clone the repository:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Navigate to the directory:

   ```bash
   cd AdguardBrowserExtension
   ```

3. Switch to the `v5.0` branch:

   ```bash
   git checkout v5.0
   ```

4. Install dependencies:

   ```bash
   yarn install
   ```

## How to build extension

1. Switch to the `v5.0` branch:

   ```bash
   git checkout v5.0
   ```

2. Run the following command in the terminal:

   ```bash
   yarn dev chrome-mv3
   ```

3. The built extension will be located in the directory:

   ```bash
   ./build/dev/chrome-mv3
   ```

## How to install unpacked in the browser

1. Turn on developer mode:

   ![Developer mode](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Click _Load unpacked_:

   ![Load unpacked](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Select the extension directory and click `Select`:

   ![Select](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

That’s it!

## How to debug rules

1. Find and modify the rule you need in the `./Extension/filters/chromium-mv3` directory in the `.txt` files.

2. Convert the rules from txt to declarative form:

   ```bash
   yarn convert-declarative
   ```

3. Build the extension again:

   ```bash
   yarn dev chrome-mv3
   ```

4. Reload the extension in the browser:

   ![Reload extension](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
