---
title: 安装、设置和卸载
sidebar_position: 2
---

## 安装 AdGuard Linux 版

Open the command line on your computer. On Linux, use the keyboard shortcut _Ctrl+Alt+T_. On Mac, type _Terminal_ in the search field.

To install AdGuard, choose the version that better suits you (release, beta, or nightly) and enter the respective command.

**Release**:

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

If required, enter your admin password.

Press `y` to create a link in `/usr/local/bin` to the executable and wait until the installation is complete.

:::note

You can verify the signature to prove it’s an official version of AdGuard by using the `gpg` tool. [Read more on GitHub](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Initial setup

AdGuard for Linux requires an [AdGuard license](https://adguard.com/license.html). If you don’t have a license yet, you can log in or create an account to get a free 14-day trial. If you already have a license, log in to activate it. To do it, follow this step-by-step guide:

1. After installation, enter:

    ```sh
    adguard-cli activate
    ```

2. Then select the desired option:

    ![adguard-cli activate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation1.png)

3. Once you have a license, follow the provided link to proceed with the activation:

    ![Activate license \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

4. After activation, you can continue to work with the program:

    ![Successful activation \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

5. You can also reset your license by entering:

    ```sh
    adguard-cli reset-license
    ```

    or  view the license info by entering

    ```sh
    adguard-cli license
    ```

6. Now you need to set up AdGuard CLI. To run the configuration wizard, enter:

    ```sh
    adguard-cli configure
    ```

    ![Setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation4.png)

    The wizard will ask basic questions required for the initial setup.

7. After that, you can start the AdGuard protection by entering

    ```sh
    adguard-cli start
    ```

    ![Start protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation5.png)

8. You can check the protection status using:

    ```sh
    adguard-cli status
    ```

    and stop it with:

    ```sh
    adguard-cli stop
    ```

    ![Stop protecton \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

9. To check the current configuration, enter:

    ```sh
    adguard-cli config show
    ```

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

    The path to the configuration file will also be displayed, which you can and should edit directly. It contains descriptions of all additional options.

    As an alternative, you can use the commands:

    ```sh
    adguard-cli config get
    ```

    or:

    ```sh
    adguard-cli config set
    ```

    They are primarily intended for scripting, though.

For further information on the available commands, check out the section [Settings and protection management](https://adguard.com/kb/adguard-for-linux/settings/).

## Uninstall AdGuard for Linux

To uninstall AdGuard, enter:

Release

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

If required, enter your admin password.
