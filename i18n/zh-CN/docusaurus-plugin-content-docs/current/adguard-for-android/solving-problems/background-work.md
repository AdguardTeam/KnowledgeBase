---
title: 如何让 AdGuard 保持后台运行
sidebar_position: 8
---

:::info

本文所述 AdGuard Android 版是在系统级上保护设备的多功能的广告拦截器。 要了解工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

在某些情况下，由于 Android 系统优化功能或所谓的「省电模式」，应用程序无法在后台运行（活动或睡眠模式），此功能可终止后台应用。 每次关闭后，重新启动它们可能会很不方便。 要避免后台应用终止，需要按照我们针对每个 Android 操作系统制造商（版本）分别描述的步骤进行操作。 请注意，不同制造商的说明大多非常相似。

## Asus

关于 Asus 设备的信息仍远未详尽，所以存在的问题可能比此处列出的要多。 当我们了解更多信息时，我们将更新文章内容。

Asus 设备后台工作的潜在问题主要来自「Power Master」这一优化程序。 此程序是预装的，其默认设置非常强大，例如可以阻止应用程序启动，以及在屏幕关闭时中断后台任务。 为了确保应用程序能在后台处理正常运行，请进行如下设置：

1. 进入「**Mobile Manager**」→「**Power Master**」→「**设置**」或「**省电选项**」→ 取消选中「**暂停清理**」。

1. 进入「**Mobile Manager**」→「**Power Master**」→「**设置**」或「**省电选项**」→ 取消选中「**自动拒绝应用自启动**」

或者，用户可以不完全取消「**自动拒绝应用自启动**」，而是转到「**设置**」→「**省电选项**」→「**自启动管理**」→「**AdGuard**」，然后取消选中。

## 小米

小米（特别是 MIUI 系统）是在后台运行方面限制最多的系统之一。 众所周知，小米的系统会限制后台进程，具有非标准权限，还缺乏适当的文档。 有时应用程序就是无法在小米手机上正常运行，而且我们对此还无能为力。 如果您在各种小米设备上遇到有关 AdGuard 后台工作的问题，您可以尝试执行以下操作。

### MIUI 13+ 和 HyperOS

取决于 MIUI 和 HyperOS 版本，有两种方法可以更改手机电池优化设置并更有效地拦截广告。

方案一

1. 转到「**设置**」→「**应用程序**」→「**权限**」→「**后台自动启动**」并允许 AdGuard 在后台运行。

1. 返回「**设置**」→「**应用程序**」→「**管理应用程序**」→「**AdGuard**」并取消选中「**在未使用时暂停应用程序**」。

1. 转到「**省电模式**」并点击「**无限**」。

方案二

1. 转到「**设置**」→「**应用程序**」→「**管理应用程序**」→「**AdGuard**」并启用「**自动启动**」。

1. 转到「**省电模式**」并点击「**无限**」。

完成！ 您已成功设置 AdGuard 在后台运行。

### MIUI 12.0.8

要让 AdGuard 应用程序成功在后台运行，请执行以下操作：

在「**设置**」→「**应用程序**」→「**管理应用程序**」→ 向下滚动找到「**AdGuard**」，将「**自动启动**」设置为「开」。

![小米设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

下滑并点击「**省电模式**」，然后设置为「无限制」。

![MIUI *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

在 **其他权限**，将所有可能的权限设置为「开”」。

运行「**安全中心**」应用。

点击屏幕右上角的**齿轮**图标。

![MIUI 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

在功能设置中点击「**优化加速**」。

![MIUI 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

点击「**锁定任务管理**」。

![MIUI 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

在「**锁定任务管理**」界面中，将 AdGuard 应用程序的开关设置为打开。

![MIUI 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

完成！ 您已成功锁定 AdGuard 应用程序。

### MIUI 12

打开「**设置**」→「**应用设置**」→「**应用管理**」→「**AdGuard**」。

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- 将自启动设置为「开」
- 将「其他权限」中所有可能的权限设置为「开」。
- 将省电模式设置为「**无限制**」

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

现在从屏幕底部向上滑动，启动后台应用管理器，找到 AdGuard 应用程序。

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

按住它，直到弹出一个特殊菜单。 选择锁定图标。

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

之后锁定图标应该会显示在后台应用窗口的上方。

![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

### MIUI 10-11

为了能让应用程序在后台运行，请按照以下步骤来设置：

- 将自启动设置为「开」

![小米 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- 「**设置**」→「**电池与性能**」→ 关闭「**省电模式**」功能

![小米 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- 然后打开「**应用程序省电**」配置 →「**AdGuard**」→「**无限制**」

![小米 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

### 所有型号

如果小米设备仍不断中断 AdGuard 应用程序，请执行以下步骤：

#### 电源管理

请开启：

- 「**设置**」→「**高级设置**」→「**电源管理**」→ 将「**电源计划**」调至「**性能**」
- 「**设置**」→「**高级设置**」→「**电源管理**」→「**受保护应用**」，即 AdGuard 需要被**保护**。
- 「**设备设置**」→「**应用**」→「**AdGuard**」→「**电池**」→「**耗电提示**」和「**熄屏后继续运行**」
- 「**设置**」→「**其他设置**」→「**电池与性能**」→「**应用耗电管理**」，在这里：

1. 将省电模式切换为「关闭」
1. 选择以下选项：「**后台省电**」→「**选择应用程序**」→「**AdGuard**」→「**后台配置**」→「**无限制**」

#### 应用程序省电

选择「**安全中心**」→「**电池**」→「**应用程序省电**」→「**AdGuard**」设置为「**无限制**」

#### 应用程序锁定

要设置 AdGuard 在小米设备的后台工作，请注意电池和权限。

- 点击「**最近任务**」按钮，然后向下轻扫 AdGuard 以显示*菜单*（如截图所示）：

    ![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- 点击「**锁定**」图标。 这将阻止小米自动关闭 AdGuard。 如图所示：

    ![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- 转到「**电池**」

- 选择「**省电**」应用程序

- 查找并选择「**AdGuard**」

- 设置如下「**后台配置**」：

    ![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- 转到「**权限**」

- 选择「**自启动**」

- 确保启用了 AdGuard 的自启动功能：

    ![小米 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

在许多 Samsung 设备上，连续三天未使用的应用将无法从后台启动。 为防止这种情况，应尽可能关闭「**自适应电池**」和「**让应用进入休眠**」选项。 请注意，应用或系统更新后，这些设置通常会恢复为默认值，需要再次关闭。

### Android 11+

在 Android 11 上，Samsung 默认阻止应用（包括 AdGuard）在后台运行，除非将其从电池优化中排除。 为确保 AdGuard 不会在后台被终止：

1. 在「**最近使用的应用**」中锁定 AdGuard：打开「**最近使用的应用**」，找到 AdGuard，然后长按 AdGuard 应用图标。

1. 为确保 AdGuard 正常工作：

    前往「**设置**」→「**应用**」→「**AdGuard**」→「**电池**」→「**优化电池使用**」

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    在下拉菜单中，选择「**全部**」。 然后在列表中找到 AdGuard，将其状态设置为「**不优化**」（某些机型上可能是一个需要关闭的开关）。

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    在某些设备上，相关设置的名称和位置可能会不同。 可能的路径之一是：「**设置**」→「**应用**」→（⁝）菜单 →「**特殊访问**」→「**优化电池使用**」。 在列表中找到 AdGuard 并取消勾选。

1. 停用自动优化：

    打开「**电池**」→ （⁝）菜单 →「**自动化**」，关闭其中所有设置。

    同样的，具体路径可能有所不同。 例如，在某些设备上应前往手机**设置** →「**设备维护**」→ （⁝）菜单 →「**高级**」，关闭「**自动优化**」和「**优化设置**」。

1. 如果您的手机有此选项，关闭「**自适应电池**」：

    打开手机「**设置**」→「**电池**」→「**更多电池设置**」，关闭「**自适应电池**」

1. 禁用「**休眠应用**」（此设置的确切名称和路径可能因设备而异）：

    打开手机「**设置**」→「**电池**」→「**后台使用限制**」，禁用「**让未使用的应用进入休眠**」

如果仍然遇到问题，请尝试以下额外的电池优化调整：

 1. 前往「**设置**」→「**应用**」→「**AdGuard**」→「**电池**」，开启「**已优化**」选项：

    ![优化设置 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/app__battery_optimised_mode.png)

 1. 前往「**设置**」→「**电池**」→「**后台使用限制**」→「**从不自动休眠应用**」：

    ![永不自动休眠的应用程序设置 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/background_usage_limits.png)

 1. 从应用程序列表中选择 AdGuard。 如果没有看到它，请返回第 1 步，确保「*已优化*」电池模式已启用：

    ![选择应用 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/never_auto_sleeping_apps.png)

### Android 9 或 10

- 前往「**手机设置**」→「**设备维护**」，点击「**电池**」项，前往（⁝）**三点菜单** →「**设置**」，取消勾选「**让未使用的应用进入休眠**」和「**自动禁用未使用的应用**」。

- 在「**手机设置**」 → 「**应用程序** 」→ 「**安卓睡眠**」 → **电池**」中，检查AdGuard的「**后台限制**」设置为「**应用程序可以再后台使用电池**」。

- 从「**睡眠应用程序**」中删除 AdGuard：

    1. 前往 **手机设置** → 「**设备维护**」：

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. 点击 「**电池**」：

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. 点击  **3点菜单** → 「**设置**」：

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. 点击「**睡眠应用程序**」：

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. 使用垃圾桶图标唤醒 AdGuard：

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### 更早版本的 Samsung 手机

对于早期 Samsung 设备，设置后台运行的需求不大，但如果您的 AdGuard 应用在一段时间后被关闭或从最近任务中消失，请执行以下操作：

- 点击「**最近任务**」按钮，点击「**附加设置**」图标。 如图所示：

 ![Samsung 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- 点击「**锁定应用**」：

 ![Samsung 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- 点击锁定图标：

 ![Samsung 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## 华为

华为及其 Android 定制系统 **EMUI** 在非标准后台进程限制方面属于市场上最棘手的。 在默认设置下，几乎所有在后台运行的应用都会遇到问题并最终无法正常工作。

### 在某些 EMUI 8、9 和 10 设备（华为 P20、华为 P20 Lite、华为 Mate 10…）上启动应用。

此功能可能并非适用于所有设备，或者标签名称可能不同。

1. 前往手机「**设置**」→「**电池**」→「**应用启动**」：

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. 关闭「**全部自动管理**」

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. 将 AdGuard 设置为「**手动管理**」并启用所有开关：

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. 禁用「**启动管理器**」，该管理器会阻止应用在手机启动后自动运行：

    打开「**设置**」→「**全部**」→「**启动管理器**」→ 关闭 AdGuard 的开关

    此外，为了确保后台进程的可靠性，您可能需要卸载「**省电精灵**」，详情如下。

### EMUI 9+ 设备和省电精灵

:::note

在搭载 EMUI 9+（Android P+）的手机上，有一个名为 PowerGenie 的任务清理应用，它会强制退出所有未被华为列入白名单的应用，且不提供任何配置选项。 请参阅下面的卸载方法。

:::

华为在破坏其设备上的应用方面极具创造力。 除了下文所述的所有非标准电源管理措施外，他们还在 Android Pie 上的 EMUI 9 中内置了一个任务清理应用。

它名为「**PowerGenie**」，会清理所有不在其白名单上的应用。 您无法将自定义应用添加到其预定义白名单中。 这意味着除了卸载 PowerGenie 之外，没有其他方法可以让应用在华为设备上正常工作。

不幸的是，这是一个系统应用，只能通过 ADB（Android Debug Bridge）完全卸载。

:::note 来源

[XDA 论坛](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**用户需要执行以下操作**：

尚未确认，但可能可以在「**手机设置**」→「**应用**」中直接关闭 PowerGenie。 如果您的设备设置中有此设置，则可以跳过以下步骤。 不过，每次重启设备后都需要重新设置。 如果没有此项设置，请按照此说明操作：

1. 在您的电脑上[安装 ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)。

1. 用数据线连接手机。

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. 在手机的开发者选项中启用「**USB 调试**」。

1. 在计算机上运行以下命令：

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

如果 AdGuard 仍在不断被系统杀死，请再尝试运行以下命令：

`adb shell pm stopservice hwPfwService`

### EMUI 6+ 设备（以及部分 EMUI 5 设备）

- **手机设置** →「**高级设置**」→「**电源管理**」→ 将「**电源计划**」改为「**性能**」；
- **手机设置** →「**高级设置**」→「**电源管理**」→「**受保护应用**」→ 将 AdGuard 设置为「**受保护**」；
- **手机设置** →「**应用**」→「**我的应用**」→「**电池**」→ 「**耗电提示**」设置为`[取消选中]`，「**熄屏后继续运行**」设置为 `[选中]`；
- **手机设置** →「**应用**」→「**高级**」（位于底部）→「**忽略优化**」→ 点击「已允许」→「**所有应用**」→ 在列表中找到 AdGuard 并设置为「**允许**」。

#### Huawei P9 Plus

打开设备「设置」→「**应用程序**」→「**设置**」→「**特殊访问权限**」→ 选择「**忽略电池优化**」→ 将 AdGuard 设置为「**允许**」。

### Huawei P20、Huawei Honor 9 Lite、Huawei Mate 9 Pro

打开设备「设置」→「**电池**」→「**应用启动管理**」→将 AdGuard 设为「**手动管理**」并确保开启每个选项。

### Huawei P20、Huawei P20 Lite、Huawei Mate 10

手机「**设置**」→「**电池**」→「**应用启动管理**」→将 AdGuard 设为「**手动管理**」并确保开启每个选项。 此外，为了确保后台进程的可靠性，您可能需要按上文所述卸载省电精灵。

### 早期华为

旧款华为设备设置最简单，只需执行两个简单步骤即可在后台锁定 AdGuard，使其不会被省电或后台清理进程终止。

- 点击「**最近任务**」按钮。

    ![华为最近使用应用 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- 点击锁定图标：

    ![华为锁 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

此外，为了更有效地设置 AdGuard 的后台工作，用户要打开设备设置并执行以下操作：

- 打开「**设置**」→「**电源管理**」→ 将「**电源计划**」调至「**性能**」；
- 然后在「**电源管理**」中选择「**受保护应用**」，并检查 AdGuard 是否受保护；
- 在设置中点开「**应用**」然后点击「AdGuard」→ 选择「**电池**」→ 启用「**耗电提示**」和「**熄屏后继续运行**」；
- 然后在「**应用程序**」中打开「**设置**」（位于底部）→「**特殊访问**」→ 选择「**忽略电池优化**」→ 点击「**允许**」→「**所有应用**」→ 在列表中找到 AdGuard 并设置为「**拒绝**」。

## 魅族

魅族对后台进程限制的处理方式与华为和小米几乎相同。 因此，您可以通过调整以下设置来避免 AdGuard 及任何其他应用的后台运行被禁用：

- 打开「**高级设置**」→ 选择「**电源管理**」→ 将「**电源计划**」调至「**性能**」；
- 然后在「**电源管理**」中选择「**受保护应用**」，并检查 AdGuard 是否受保护；
- 打开「**应用**」然后点击「AdGuard」→ 选择「**电池**」→ 启用「**耗电提示**」和「**熄屏后继续运行**」。

## Nokia

搭载 Android 9+ 的诺基亚设备已关闭「**Evenwell 省电功能**」，该功能是清理后台进程的罪魁祸首。 如果 AdGuard 在 Nokia 手机上仍然被杀后台，请查看[旧指令](https://dontkillmyapp.com/hmd-global)。

### Nokia 1（Android Go）

1. 在计算机上[安装 ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)；

1. 用数据线连接手机；

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. 在手机的开发人员选项中启用「**USB 调试**」；

1. 通过以下 ADB 命令卸载 **com.evenwell.emm** 软件包：

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 和 5.1

这些设备上有一个叫 ** DuraSpeed ** 的任务杀手，它会终止所有后台应用程序。 它无法通过常规方式卸载或禁用。 这些操作需要 ADB，即便如此，禁用后 DuraSpeed 也会在重启时再次启用。 您需要使用像 [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) 这样的任务管理器来自动禁用 DuraSpeed。

1. 在计算机上[安装 ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)；

1. 用数据线连接手机；

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. 在手机的开发人员选项中启用「**USB 调试**」；

1. 输入以下命令，授予 MacroDroid（或您选择的自动化应用程序）写入全局设置存储的能力：

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. 创建一个在**设备启动**时触发的任务，执行以下操作：

    - 系统设置：类型为 **Global**（全局），名称为 `setting.duraspeed.enabled`，值为 **-1**
    - 系统设置：类型为 **System**（系统），名称为 `setting.duraspeed.enabled`，值为 **-1**
    - 系统设置：类型为 **Global**（全局），名称为 `setting.duraspeed.enabled`，值为 **0**
    - 系统设置：类型为 **System**（系统），名称为 `setting.duraspeed.enabled`，值为 **0**

    ![Nokia Tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    您需要**全局**和**系统**两种类型设置。 截图仅以全局为例。


:::

### 其他 Nokia 机型

- 打开手机「**设置**」→「**应用**」→「**查看所有应用**」。

- 点击右上角菜单 →「**显示系统应用**」。

在列表中找到「**Power saver 应用**」，选择后并点击「**强制关闭**」。 它会停止一段时间，但之后会重新启动。

从现在起，AdGuard 应该能正常工作，并使用标准 Android 电池优化，直到省电应用重新启动。

对于更精通技术的用户来说，还有一种一劳永逸的解决方案：

1. 在计算机上[安装 ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)；

1. 用数据线连接手机；

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. 在手机的开发人员选项中启用「**USB 调试**」；

1. 通过以下 ADB 命令卸载 **com.evenwell.powersaving.g3** 软件包：

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## OPPO

有时在您关闭屏幕时，后台服务会被终止（包括辅助服务，需要重新启用）。 目前，解决这一问题的办法是：

打开**安全中心** → 点击「**隐私权限**」→「**启动管理器**」并允许 AdGuard 在后台运行。

其他解决方案：

- 将 AdGuard 固定到最近使用的应用中
- 在安全应用程序的「启动管理器」和「浮动应用列表」（com.coloros.safecenter / com.coloros.safecenter.permission.Permission）中启用 AdGuard
- 关闭电池优化

## 一加

### OxygenOS

搭载 OxygenOS 的设备最为棘手，其操作系统特有的缓存清理和内存释放功能（包括操作系统优化）会带来问题。 此外，如果您有一段时间未使用 AdGuard，OxygenOS 可能会中断 AdGuard 的运行。 为避免这些不良后果，请按照以下步骤操作。

#### 锁定应用程序

- 打开「**设置**」

- 「**电池**」→「**电池优化**」

- 找到 AdGuard

- 点击并选择「**不优化**」选项

- 点击「**完成**」保存设置

- 打开最近应用菜单（如截图所示）：

    ![一加锁 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- 锁定 AdGuard 应用程序：

    ![一加点 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

在某些一加手机上，还有一个名为「应用自启动」和「深度优化」的功能，本质上会阻止应用在后台运行。 请为 AdGuard 禁用该功能。

:::

#### 电池优化

- 打开设备设置 →「**电池**」→「**电池优化**」→ 切换到「**所有应用程序**」列表（顶部菜单）→ 选择 AdGuard → 启动「**不优化**」。

- 打开设备设置 →「**电池**」→「**电池优化**」→ 三点菜单（⁝）→「**高级优化**」→ 关闭深度优化

#### 应用自动启动

应用自动启动（在部分一加手机上）实际上会阻止应用在后台运行。 请为 AdGuard 启用该功能。

#### 增强/高级优化

对于一加 6 及以上版本：

- 打开「**系统设置**」→「**电池**」→「**电池优化**」→ 三点菜单（⁝）→「**高级优化**」
- 关闭「**深度优化**」/「**自适应电池**」
- 关闭「**睡眠待机优化**」。 一加会尝试了解睡眠时间，然后在这些时间里关闭手机的网络连接。 此设置会阻止推送通知的送达。

对于一加 6 以下：

- 关闭「**系统设置**」→「**电池**」→「**电池优化**」→ 三点菜单（⁝）→ 关闭「**高级优化**」。

#### 最近应用的清除行为

通常情况下，当用户扫走一个应用程序时，它不会关闭。 然而在一加上，可能是另一种情况。 最近任务清理行为管理器的设置方式可能会导致滑动关闭应用时终止该应用。 要将其调回「正常」模式：

打开「**设置**」→「**高级设置**」→「**最近应用管理**」→ 切换至「**正常清除**」。

### ColorOS

在运行 ColorOS 的设备上，系统也可能激进地限制后台进程。 为确保 AdGuard 在后台正常工作，请配置以下设置：

- 打开**系统设置** →「**电池**」→「**电池模式**」，选择「**高性能模式**」

![高性能模式 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/high_performance_mode.jpg)

- 前往「**应用**」→「**应用管理**」→「**AdGuard**」→「**电池使用**」，选择「**允许后台活动**」

![允许后台活动 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/allow_background_activity.jpg)

- 前往「**应用**」→「**自启动**」，为 AdGuard 启用开关

![自启动 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/auto_launch.jpg)

- 要在「**最近应用**」菜单中锁定 AdGuard：

    - 打开「**最近应用**」屏幕
    - 向下滑动 AdGuard 应用卡片，将其锁定在内存中

## Sony

Sony 是第一家引入非标准后台进程优化的移动操作系统开发商。 它被称为「**Stamina mode**」，启用后会立即中断所有后台进程。 解决方法：

打开「**设置**」→「**电池**」→ 关闭「**Stamina mode**」（耐用模式）

![Sony Stamina 模式 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

在 Android 11+ 中，用户还应该关闭和 STAMINA 模式同屏的「**自适应电池**」设置。

您还需要将 AdGuard 设置为省电功能的例外：

「**系统设置**」→「**应用程序和通知**」→「**高级**」→「**特殊应用程序访问权限**」→「**省电功能**」→ 将 AdGuard 切换到「**除外**」。

## WIKO

WIKO 设备在非标准后台进程优化方面存在问题。 要让 AdGuard 在后台运作，请执行以下操作：

- 打开「**手机助手**」→「**电池**」→ 关闭「**Eco 模式**」
- 返回并进入「**手动模式**」
- 点击右上角的**齿轮**图标 →「**后台应用白名单**」→ 选择「**AdGuard**」

## 基于 Android 设备： Pixel /Nexus /Nubia /Essential

Android 原生操作系统通常不会干预在后台运行的应用程序，但如果您遇到任何问题，需要打开「**始终在线 VPN**」模式。

- 前往「**设置**」→「**网络和互联网**」

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- 点击「**VPN**」并选择「**AdGuard**」

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- 设置「**始终在线 VPN**」模式

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

在 Realme UI 4.0 上，有三个关键配置以确保 AdGuard 在后台正常工作。

1. 设置 AdGuard 软件：

    - 长按 AdGuard 图标
    - 从弹出的菜单中，选择「**应用程序信息**」
    - 转到「**电池使用情况**」并启用所有选项：
        - 允许应用在后台运行
        - 允许应用在前台运行
        - 允许自动启动
    - 在「**应用程序信息**」部分，向下滚动并关闭「**暂停闲置应用的活动**」选项

    ![始终启用 VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. 设置电池：

    - 转到 **「设置」→「电池」→「更多设置」→「优化电池使用」**
    - 在列表中找到 AdGuard 并启用「**不优化**」
    - 在「**其他设置**」中，检查「**应用速冻**」部分，禁用它以使用 AdGuard

    ![始终启用 VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. 为 AdGuard 启用「*始终启用 VPN*」：

    - 前往**「设置」→「连接与分享」→「VPN」**
    - 找到 **AdGuard** 并启用「**始终启用 VPN**」选项

    ![始终启用 VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)

## 摩托罗拉

在摩托罗拉设备上，有四个关键配置以确保 AdGuard 能够在背景中正常工作。

1. 允许后台使用：

   - 停止 AdGuard 保护并关闭 AdGuard 应用程序
   - 转到 **「设置」→「应用程序」→「应用程序电池用量」** 并找到 AdGuard
   - 根据 Android 版本，启用「**允许后台使用**」或选择「**无限制**」

1. 取消后台活动限制：

   - 打开「**设置**」
   - 向下滚动并点击「 **应用和通知**」
   - 找到 **AdGuard** 并打开 **「高级」 → 「电池」**
   - 点按「**后台限制**」或「**后台限制条件**」
   - 如果显示 「**背景活动受限**」，请点击它，然后点击「**删除**」

1. 管理后台应用程序：

   - 转到 **「设置」→「电池」→「后台应用使用」**
   - 启用「**管理后台应用程序**」选项
   - 在出现的菜单中，选择 「**应用程序**」选项卡
   - 在列表中点击「**AdGuard**」
   - 在「**优化电池使用**」对话框中，选择 「**始终允许**」

    ![始终允许 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/motorolla-background-app-use.png)

1. 停用自适应电池：

   - 转到 **「设置」→「电池」**
   - 关闭「**自适应电池**」选项

## ZTE

搭载 MyOS 操作系统的 ZTE 设备会采取激进的后台进程管理策略。 请按照以下步骤操作，以防止 AdGuard 被 AI 控制自动关闭：

- 转到 **「设置」→「电池」→「应用管理」**
- 关闭「 **AI 控制**」
- 选择「**手动管理**」
- 在列表中找到「**AdGuard**」，并将「**后台工作**」设置为「**允许**」

## Infinix（传音）

Infinix 设备采用严格的电池和省电规则，这可能会中断 AdGuard 在后台运行。 请按照以下步骤操作，防止 AdGuard 被系统自动关闭，并确保稳定保护：

1. 停用保护并关闭 AdGuard 应用程序。

1. 前往系统设置 →「*应用管理*」→「*应用列表*」→「*AdGuard*」→「*电池*」并启用「*允许后台使用*」。 然后进入「*允许后台使用*」设置，将模式切换为「*无限制*」。

    ![允许后台使用 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_allow.png)

1. 打开系统设置 →「*应用管理*」→「*自启动管理*」并打开「*AdGuard*」的开关。

    ![自启动管理 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_app_launch.png)

1. 导航到系统设置 →「*电池和省电*」→「*省电模式*」并关闭「*电池省电*」。

1. 从「*电池和省电*」标签页中，找到「*AdGuard*」，然后选择「*无限制*」。

    ![应用程序省电管理 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_power_saving.png)

1. 前往「*应用管理*」→「*特殊应用访问权限*」→「*电池优化*」。 在屏幕顶部，从下拉菜单中选择「*所有应用*」，点击「*AdGuard*」，并将其设置为「*未优化*」。

    ![电池优化 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/infinix_not_optimized.png)
