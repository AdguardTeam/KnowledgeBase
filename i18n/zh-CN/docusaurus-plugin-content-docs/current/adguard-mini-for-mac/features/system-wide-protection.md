---
title: 系统级保护
sidebar_position: 9
---

从 3.0 版本开始，AdGuard Mini Mac 版引入&#x4E86;_&#x7CFB;统级保护_，这项功能不仅能拦截 Safari 中的广告和跟踪器，还能覆盖 Mac 上的其他应用。

该功能面向拥有 AdGuard 许可证的用户。您可以[立即购买许可证](https://adguard.com/license.html)，或在「_高级保护_」中点击「_免费试用_」，开始 14 天免费试用。

:::caution

_系统级保&#x62A4;_&#x662F;一项实验性功能。由于 Apple 一侧存在[尚未解决的错误](https://developer.apple.com/forums/thread/848364)，它可能无法适用于所有人。一旦该功能对所有人都稳定可用，我们会把它做成 AdGuard Mini 的核心部分。

:::

该功能在部分 macOS 版本上无法正常工作，包括 **26.7.2** 和 **27.2**。如果您的系统是 **macOS 26.0 或 27.0**，可以照常试&#x7528;_&#x7CFB;统级保护_。请注意，如&#x679C;_&#x7CFB;统级保&#x62A4;_&#x5728; macOS 27.0 上运行正常，那么升级到 macOS 27.2 后很可能就会失效。升级系统前请务必留意这一点。

在正式版中，_系统级保&#x62A4;_&#x9ED8;认隐藏。要显示它，请前往「_设置_」→「_其他_」，然后开启「_显示系统级保护（实验性）_」。 beta 版则始终显示该功能。

![实验性开关](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/swp-experimental-toggle.png)

## 工作原理

_系统级保&#x62A4;_&#x57FA;于 Apple 的 [**URL 过滤器**](https://developer.apple.com/documentation/networkextension/filtering-traffic-by-url)构建，这是一种用于全系统流量过滤的系统过滤 API。其工作原理如下。

首先，macOS 会用一个布隆过滤器检查 URL。布隆过滤器是存储在您 Mac 上的预过滤器，会在后台更新。大多数地址都在本地直接放行，检查本身不会发出网络请求。

如果预过滤器发现可能匹配，macOS 会使用隐私信息检索（PIR）向 AdGuard 服务器查询判定结果。通过这种方法，您的 Mac 可以向服务器请求数据，而不会暴露它查询的具体地址。该请求无法与您的账户或设备关联。如果服务器没有响应，页面会正常加载。

您可以在我们的博客中阅读[对 Apple 全系统过滤方案的详细分析](https://adguard.com/en/blog/apple-url-filter-system-wide-filtering-api.html)。

## 如何开启系统级保护

您可以在 AdGuard Mini 应用的「_高级保护_」中找&#x5230;_&#x7CFB;统级保护_。要启用它，请打开开关。

![系统级保护](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/system-wide-protection.png)

首次启&#x7528;_&#x7CFB;统级保&#x62A4;_&#x65F6;，系统会请求在您的电脑上安装 URL 过滤器。点击「_安装_」后，会出现一条系统消息，请求添加过滤器配置。这是 macOS 的标准行为。 AdGuard 不会看到或存储任何此类数据。

![系统级保护需要 URL 过滤器](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/install-screen.png)

安装 URL 过滤器后，_系统级保&#x62A4;_&#x5C06;默认保持开启。如果想关闭，请在「_高级保护_」中关&#x95ED;_&#x7CFB;统级保&#x62A4;_&#x7684;开关。

您也可以点击右上角的上下文菜单（⋮），选择「_移除 URL 过滤器_」。如果只想重置过滤器而不删除它，以便排查连接问题，请选择「_重置缓存_」。

您也可以在 Mac 的「_系统设置_」→「_网络_」→「_VPN 与过滤器_」→「_过滤器与代理_」中停用 URL 过滤器。在「_状态_」菜单中将「_已启用_」改为「_已停用_」。随后，AdGuard Mini 会自动关&#x95ED;_&#x7CFB;统级保护_。

## 保护级别

您可以选择三种保护级别。默认选中「_基本_」。

- 「_基本_」：拦截广告和跟踪器
- 「_安全_」：拦截广告、跟踪器、网络钓鱼和恶意软件
- 「_家庭_」：拦截广告、跟踪器、网络钓鱼、恶意软件和成人内容

![三种保护级别](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/levels-of-protection.png)

## 故障排查

### 系统级保护在 macOS 27.2 上无法使用

这是由 Apple 一侧[尚未解决的错误](https://developer.apple.com/forums/thread/848364)导致的。正因如此，_系统级保&#x62A4;_&#x76EE;前仍是实验性功能。它在 macOS 26 和 27.0 上可以正常工作，但在 macOS 27.2 beta 上可能无法正常运行。如果您的 macOS 版本更早，我们建议在 Apple 修复该错误之前不要升级。

### 系统级保护并非适用于所有应用或浏览器

覆盖范围取决于各个应用处理网络请求的方式，因此有些应用可能无法被过滤。这是 Apple 一侧的限制。

基于 Chromium 的浏览器（如 Chrome、Edge、Opera 和 Brave）使用自己的网络代码，而不是 Apple 的框架，因此 URL 过滤器无法检查它们的请求。

### 系统级保护无法开启

- **您的 Mac 运行的是较旧版本的 macOS。** Apple 的 URL 过滤器需要 macOS 26 Tahoe 或更高版本。在更早的版本上，该设置会处于禁用状态，应用会提示您「_更新到 macOS Tahoe 26 或更高版本_」。
- **您的账户不受支持。** _系统级保&#x62A4;_&#x4EC5;适用于在 Mac 上创建的第一个用户账户。如果您的账户是后来添加的，该设置会处于禁用状态，并显示「_此 Mac 账户不支持_」。请参阅下方的[「我可以更改 Mac 账户的用户 ID 吗？」](/adguard-mini-for-mac/features/system-wide-protection/#can-i-change-my-mac-accounts-user-id)。
- **该设置被隐藏了。** 在正式版中，_系统级保&#x62A4;_&#x9ED8;认隐藏。请前往「_设置_」→「_其他_」，然后开启「_显示系统级保护（实验性）_」。
- **您使用的是免费版。** 要使&#x7528;_&#x7CFB;统级保护_，请[购买 AdGuard 许可证](https://adguard.com/license.html)，或在「_高级保护_」中点击「_免费试用_」，开始 14 天免费试用。

### 我可以更改 Mac 账户的用户 ID 吗？

可以。_系统级保&#x62A4;_&#x4EC5;适用于在 Mac 上创建的第一个用户账户，其用户 ID（UID）为 501。如果您的 Mac 有多个账户，或者您的账户是从旧 Mac 迁移过来的，您的 UID 可能不同。请按照以下步骤检查您的 UID，如有需要，腾出 501 并将其分配给您自己的账户。

:::warning

这是一项高级且风险较高的操作。只有在别无选择时才可执行。腾出 UID 501 意味着删除一个现有账户，并从终端创建一个新账户。一旦出错，可能造成永久性数据丢失。操作前请备份 Mac 上的所有数据。

:::

1. **检查您当前的 UID。** 打开终端，输入 `id -u`，然后按 Return 键。如果结果为 501，说明您的账户已经拥有正确的 UID。无需再执行其他操作。

2. **查明谁拥有 UID 501。** 如果您的 UID 不是 501，请运行以下命令：

    ```bash
    dscacheutil -q user -a uid 501 | grep -E '^(name|uid|gecos):'
    ```

   这会显示该账户的用户名、UID 和全名。请确认您不需要其中的任何文件，或者在继续之前先做好备份。

3. **删除拥有 UID 501 的账户。** 登录您自己的管理员账户，打开「_系统设置_」→「_用户与群组_」，选择第 2 步中的账户并将其删除。当 macOS 询问如何处理其个人文件夹时，请选择「_将个人文件夹存储为磁盘映像_」，以便保留该账户的文件，以备日后需要。

4. **创建一个 UID 为 501 的新账户。** 运行以下命令，并将 `username` 和 `Name Surname` 替换为您想要的详细信息：

    ```bash
    sudo sysadminctl -addUser username \
      -fullName "Name Surname" \
      -password - \
      -admin \
      -UID 501
    ```

   `-password -` 会让终端以交互方式提示您输入密码；`-admin` 会为新账户授予管理员权限。

5. **验证更改。** 登录新账户，然后再次检查 UID：打开终端，输入 `id -u`，然后按 Return 键。此时结果应为 501。
