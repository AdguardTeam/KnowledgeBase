---
title: Installation, setup, and removal
sidebar_position: 2
---

## Install AdGuard for Linux

Open the command line on your computer. On Linux, press `Ctrl+Alt+T`. On Mac, type `Terminal` in the search field.

To install AdGuard, enter:

Release

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v

Beta

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v

Nightly

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v

If required, enter your admin password.

Press `y` to create a link in `/usr/local/bin` to the executable and wait until the installation is complete.

:::note

You can verify the signature to prove it’s an official version of AdGuard by using the `gpg` tool. [Read more on GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Initial setup

AdGuard for Linux requires an [AdGuard license](https://adguard.com/license.html). If you don’t have a license yet, you can log in or create an account to get a free 14-day trial. If you already have a license, log in to activate it. To do it, follow this step-by-step guide:

1. After installation, enter:

    adguard-cli activate

and select the desired option:

![adguard-cli activate *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation1.png)

1. Once you have a license, follow the provided link to proceed with the activation:

![Activate license *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

1. After activation, you can continue to work with the program:

![Successful activation *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

You can also reset your license by entering

    adguard-cli reset-license

or  view the license info by entering

    adguard-cli license

1. Now you need to set up AdGuard CLI. To run the configuration wizard, enter:

    adguard-cli configure

![Setup *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation4.png)

The wizard will ask basic questions required for the initial setup.

1. After that, you can start the AdGuard protection by entering

    adguard-cli start

![Start protecton *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation5.png)

1. You can check the protection status using

    adguard-cli status

and stop it with

    adguard-cli stop

![Stop protecton *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

1. To check the current configuration, enter

    adguard-cli config show

![Current setup *border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

The path to the configuration file will also be displayed, which you can and should edit directly. It contains descriptions of all additional options.

As an alternative, you can use the commands:

    adguard-cli config get

or

    adguard-cli config get

They are primarily intended for scripting, though.

For further information on the available commands, check out the section [Settings and protection management](https://adguard.com/kb/adguard-for-linux/settings/).

## Uninstall AdGuard for Linux

To uninstall AdGuard, enter:

Release

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u

Beta

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u

Nightly

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u

If required, enter your admin password.
