---
title: 如何让 AdGuard 保持后台运行
sidebar_position: 9
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

### MIUI 12.0.8+

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

在许多 Samsung 设备上，任何 3 天未使用的应用程序将无法从后台启动。 您应该尽可能关闭「**自适应电池**」和「**睡眠应用程序**」选项，以防止出现这种情况。 请注意，在更新应用程序或操作系统后，这些设置一般会恢复为默认值，需要您重新关闭。

### Android 11+

在 Android 11 上，三星会默认阻止应用程序（包括 AdGuard）在后台运行，除非您将应用排除在电池优化之外。 为了确保 AdGuard 不会在后台被中断：

1. 在最近任务中锁定 AdGuard

    - 打开「**最近的应用程序**」。
    - 找到 AdGuard。
    - 长按 AdGuard 应用程序的图标。

1. 要保持 AdGuard 正常工作：

    打开「**设置**」→「**应用程序**」→「**AdGuard**」→「**电池**」→「**耗电优化**」

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    在下拉菜单中，选择「**全部**」。 然后在列表中找到 AdGuard，并将其状态设置为「**不优化**」（在某些机型上，可能需要关闭开关）。

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    在某些设备上，相关设置的名称和位置可能会不同。 可能的路径包括：

    「**设置**」→「**应用程序**」→ 菜单（⁝）→「**特殊访问**」→「**耗电优化**」→ 在列表中找到 AdGuard 并取消选中。

1. 禁用自动优化。 具体操作：

    打开「**电池**」→ 菜单（⁝） → 选择「**自动**」→ 关闭此处所有设置。

    同样，具体路径可能会有所不同，例如，在某些设备上，您应该转到：

    手机「**设置**」→「**设备维护**」→ 点击菜单（⁝）→「**高级**」→「**禁用自动优化**」和「**优化设置**」。

1. 如果您的手机有的话，请禁用自适应电池：

    打开手机「**设置**」→「**电池**」→「**更多电池设置**」→ 关闭「**自适应电池**」。

1. 禁用睡眠应用程序（此设置的具体名称及路径可能因设备而异）：

    打开手机「**设置**」→「**电池**」→「**后台使用限制**」→ 禁用「**睡眠未使用的应用**」。

### Android 9 或 10

- 打开「**手机设置**」→「**设备维护**」→ 点击「**电池**」条目→ 点击**菜单**（⁝）→「**设置**」并取消选择「**睡眠未使用应用**」和「**自动停用未使用应用**」。

- 打开「**手机设置**」→「**应用程序**」→ 点击「**Android 睡眠伴侣**」条目→「**电池**」→ 将 AdGuard 的「**后台限制**」设置为「**应用可在后台耗电**」。

- 从睡眠应用程序中删除 AdGuard。 具体操作：

    1. 前往「**手机设置**」→「**设备维护**」

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. 点击「**电池**」

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. 点击**菜单**（⁝）→「**设置**」

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. 点击「**睡眠应用程序**」

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. 使用垃圾桶图标**唤醒** AdGuard

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### 更早版本的 Samsung 手机

对于早期的 Samsung 设备，没有很大必要设置后台操作，但如果您的 AdGuard 应用程序在一段时间后被关闭或从最近的任务中消失，请执行以下操作：

- 点击「**最近任务**」按钮，点击「**其他设置**」图标。 如图所示：

 ![Samsung 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- 点击「**锁定应用**」：

 ![Samsung 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- 点击锁定图标

 ![Samsung 设置 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## 华为

在非标准后台进程限制方面，华为及其定制安卓系统 **EMUI** 属于市场上最难处理的。 在默认设置下，几乎所有在后台运行的应用程序都会遇到问题并最终崩溃。

### 在某些 EMUI 8、9 和 10 设备（华为 P20、华为 P20 Lite、华为 Mate 10…）上启动应用。

此功能可能不适用于所有设备，或者路径可能不同。

1. 打开手机「**设置**」→「**电池**」→「**应用启动管理**」。

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. 关闭「**全部自动管理**」

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. 将 AdGuard 设置为「**手动管理**」并开启所有开关。

    ![华为 *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. 禁用「**启动管理器**」，它会防止应用程序在手机启动后自动运行。

    打开「**设置**」→「**全部**」→「**启动管理器**」→ 关闭 AdGuard 的开关

    此外，为了确保后台进程的可靠性，您可能需要卸载「**省电精灵**」，详情如下。

### EMUI 9+ 设备和省电精灵

:::note

在搭载 EMUI 9+（Android P+）的手机上，有一个叫省电精灵的任务杀手应用，它会强制退出所有不在华为白名单上的的应用，并且未向用户提供任何配置选项。 请参阅下面的卸载方法。

:::

华为设备在破坏应用程序方面上极具创造力。 除了下文介绍的所有非标准电源管理措施外，他们还在 Android Pie 的 EMUI 9 中直接引入了一个任务杀手应用。

它叫「**省电精灵**」，可以杀死所有不在其白名单上的应用程序。 用户还不能在预置的白名单上添加自定义应用程序。 这意味着除了卸载省电精灵之外，没有其他方法可以在华为设备上实现应用的正确程序功能。

很不幸，它是一个系统应用程序，只能使用 ADB（Android 调试桥）才能完全卸载。

:::note 来源

[XDA 论坛](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**用户需要执行以下操作**：

这一点尚未得到证实，但您也许可以直接在**手机设置** →「**应用**」中禁用省电精灵。 如果您的设备设置中有此项设置，您可以跳过以下步骤。 但是，每次重新启动设备时用户都需要重新禁用应用程序。 如果没有此项设置，请按照此说明操作：

1. 在计算机上[安装 ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/)；

1. 用数据线连接手机；

1. 启用[开发人员选项](https://developer.android.com/studio/debug/dev-options.html)；

1. 在手机的开发人员选项中启用「**USB 调试**」；

1. 在计算机上运行以下命令：

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

如果 AdGuard 仍在被系统杀，请再尝试运行以下命令：

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

旧的华为设备最容易设置，只需两步操作即可将 AdGuard 锁定在后台，这样就可以免于被省电计划或后台杀手终止进程。

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

在后台进程限制方面，魅族的做法与华为和小米几乎相同。 因此，您可以通过调整以下设置来避免 AdGuard 和其他应用程序的后台工作被禁用：

- 打开「**高级设置**」→ 选择「**电源管理**」→ 将「**电源计划**」调至「**性能**」；
- 然后在「**电源管理**」中选择「**受保护应用**」，并检查 AdGuard 是否受保护；
- 打开「**应用**」然后点击「AdGuard」→ 选择「**电池**」→ 启用「**耗电提示**」和「**熄屏后继续运行**」。

## Nokia

搭载 Android 9+ 的诺基亚设备禁用了 **Evenwell Power saver**，这就是杀死后台进程的罪魁祸首。 如果 AdGuard 在 Nokia 手机上仍然被杀后台，请查看[旧指令](https://dontkillmyapp.com/hmd-global)。

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

在列表中找到「**Power saver 应用**」，选择后并点击「**强制关闭**」。 它会停止一段时间，但某个时候还会重新启动。

从现在开始，AdGuard 应该能正常工作并使用标准 Android 电池优化，直到 Power Saver 重新启动。

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

搭载 OxygenOS 的设备问题最多，其中包括操作系统特有的缓存清理和可用 RAM，以及操作系统优化。 此外，如果您一段时间不使用，OxygenOS 会中断 AdGuard 的工作。 要避免这些不必要的后果，请按以下步骤操作。

### 锁定应用程序

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

在某些一加手机种，还有个叫应用自启动和深度优化的功能，这个功能很大程度上会防止应用在后台运行。 请为 AdGuard 禁用它。

:::

### 电池优化

- 打开设备设置 →「**电池**」→「**电池优化**」→ 切换到「**所有应用程序**」列表（顶部菜单）→ 选择 AdGuard → 启动「**不优化**」。

- 打开设备设置 →「**电池**」→「**电池优化**」→ 三点菜单（⁝）→「**高级优化**」→ 禁用深度优化

### 应用自启动

应用自启动（在某些一加手机中）会从本质上阻止应用程序在后台运行。 请为 AdGuard 禁用它。

### 增强/高级优化

对于一加 6 及以上版本：

- 打开「**系统设置**」→「**电池**」→「**电池优化**」→ 三点菜单（⁝）→「**高级优化**」
- 禁用「**深度优化**」/「**自适应电池**」
- 禁用「**睡眠待机优化**」。 一加会尝试了解睡眠时间，然后在这些时间里关闭手机的网络连接。 此设置会阻止推送通知。

对于一加 6 以下：

- 「**系统设置**」→「**电池**」→「**电池优化**」→ 三点菜单（⁝）→ 关闭「**高级优化**」。

### 最近应用的清除行为

通常情况下，当用户扫走一个应用程序时，它不会关闭。 然而在一加上，可能是另一种情况。 最近应用清除行为管理器可能设置为划走关闭应用程序就会杀死后台。 要将其调回「正常」模式：

打开「**设置**」→「**高级设置**」→「**最近应用管理**」→ 切换至「**正常清除**」。

## Sony

Sony 是第一家引入非标准后台进程优化的移动操作系统开发商。 它被称为「**Stamina mode**」，启用后会立即中断所有后台进程。 解决方法：

打开「**设置**」→「**电池**」→ 禁用「**Stamina mode**」（耐用模式）

![Sony Stamina 模式 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

在 Android 11+ 中，用户还应该禁用和 STAMINA 模式同屏的「**自适应电池**」设置。

您还需要将 AdGuard 从省电功能中排除：

「**系统设置**」→「**应用和通知**」→「**高级**」→「**特殊应用访问权限**」→「**省电功能**」→ 将 AdGuard 切换为「**除外**」

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

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- 设置「**始终在线 VPN**」模式

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)
