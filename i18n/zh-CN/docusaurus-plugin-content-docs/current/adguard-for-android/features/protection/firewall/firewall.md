---
title: 防火墙
sidebar_position: 1
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解其工作原理，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

防火墙模块可通过点击底部屏幕的「保护」标签（屏幕底部左起第二个图标）并选择「防火墙」访问。

此功能有助于管理设备上安装的特定应用程序和设备的互联网连接。

![Firewall \*mobile\_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

### 全局防火墙规则

该设置让用户控制整个设备的互联网连接。

![Global firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

这些规则应用到设备上的所有应用程序，除非您设置自定义规则。

### 自定义防火墙规则

用户可以控制特定应用程序的上网权限，限制用户认为不值得信任的应用程序的权限，或者相反，解除对那些你想规避全局防火墙规则的应用程序的阻止。

1. 打开「自定义防火墙规则」。 在「具有自定义规则的应用」下，点击「添加应用」。

   ![Custom firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

2. 选择您想要设置单独规则的应用程序。

   ![Adding an app to Custom firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

3. 在「可用的自定义规则」中，选择要配置的规则并点击「+」。 相应规则会随之出现在「已应用的自定义规则」中。

   ![Added rule \*mobile\_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

4. 如您需要拦截特定类型的连接，请切换到左侧。 如您要允许它，请保持开启状态。 **自定义规则会优先于全局规则**：即您在「全局防火墙规则」内所在的更改不会影响此应用。

要从「自定义规则」移除规则或应用，请将其滑动到左侧。

### 通知

启用该功能后，当应用程序试图违反适用的防火墙规则时（例如，试图访问被阻止的移动数据），用户将收到通知。 用户可以设置所有应用程序或单独某个应用程序的通知开关状态。

点击通知即可进入应用程序的防火墙设置，或者点击通知中的相应按钮暂时禁用该应用程序的所有防火墙规则。 用户还可以通过点击应用程序通知中的「静音」按钮来静音该应用程序的所有防火墙通知。

请注意，如果显示多个应用程序的通知，它们将被折叠为单个通知。
