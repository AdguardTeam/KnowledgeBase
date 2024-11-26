---
title: Installation, setup, and removal
sidebar_position: 2
---

## Install AdGuard for Linux

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

## Activate license

AdGuard for Linux requires an [AdGuard license](https://adguard.com/license.html). If you don't have a license yet, you can log in or create an account to get a free 14-day trial. If you already have a license, log in to activate it.

To log in or create an account, enter:

    adguard-cli activate

To reset your license, enter:

    adguard-cli reset-activation

To view the license info, enter:

    adguard-cli license

## Initial setup

To get AdGuard up and running, complete the initial setup. This includes installing the AdGuard CA certificate, enabling the necessary filters, and selecting the proxy mode.

To run the configuration wizard, enter:

    adguard-cli configure

## Uninstall AdGuard for Linux

To uninstall AdGuard, enter:

Release

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u

Beta

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u

Nightly

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u

If required, enter your admin password.
