---
title: '安装/卸载'
sidebar_position: 2
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## 系统要求

**Operating system version:** macOS 10.15 (64 bit) or higher

**RAM**： 至少 2 GB

**浏览器**： Safari、Google Chrome、Opera、Yandex.Browser 和其他在 macOS 上可用的浏览器

**可用磁盘空间**： 120 MB

## 安装过程

To install AdGuard for Mac on your computer, launch your browser, type *adguard.com* in the address bar, and press **Download** [on the page that opens](https://adguard.com/download.html?auto=1).

![下载应用 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Wait for *AdguardInstaller.dmg* to download and double-click its icon in the list of downloaded files on the Dock panel.

![双击打开文件](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

AdGuard 图标将出现在您的桌面上。 单击它打开安装应用程序，然后在打开的窗口中双击 AdGuard 图标。

![双击 AdGuard 图标](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

当您第一次启用 AdGuard 时，您的操作系统将会提示您：该应用程序是从互联网下载的 App。 点击**打开**。

![点击打开](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

在下一步，请点击**安装**。

![点击安装](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

请等待安装程序完成安装所需要的文件。

![等到下载必要的文件](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

以使用应用程序，需要输入 macOS 账号的用户名和密码。 Enter the password when prompted in the dialogue box and press **OK**.

![输入密码](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

现在，您将看到一个快速安装向导，您可以在其中根据需要配置保护。 您可以马上开始设置（来试试吧！） 或暂时无设置需求（先保持这样）。

![配置保护](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

完成啦！AdGuard 已成功安装到您的 Mac！

## 卸载

### 一般卸载方式

首先，请您点击相应的图标以打开 'Finder'：

![打开 Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

前往应用程序。 在列表中找到 AdGuard，右键它并选择**移到废纸篓**。

![将 AdGuard 移至回收站 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### 进阶卸载方式

**除非您知道如何操作或有我们技术支持专门为您推荐使用进阶方式卸载应用程序，我们不推荐您使用该方式。 另外，先执行「标准卸载」的所有步骤。**

1. 之后，删除以下 AdGuard 文件：
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard（文件夹）
    - ~/Library/Preferences/com.adguard.mac.adguard.plist（文件）
    - ~/Library/Group\Containers/TC3Q7MAJXF.com.adguard.mac（文件夹）
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist（文件）
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist（文件）
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard-pac.daemon.log（文件）。
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log（文件）

    To do so, open the Terminal app, then enter and execute the following commands:

    ```bash
    sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"
    rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"
    rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. 运行**活动监控器**应用程序。
1. 通过搜索查找 **cfprefsd** 进程。

    ![开启活动监视器](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. 退出在用户态下运行的进程（不是在 root 权限运行的）。 为了退出，请点击进程，然后在左上角点击 X。 Confirm the action in the dialogue window.

    ![确认](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard 卸载完成。
