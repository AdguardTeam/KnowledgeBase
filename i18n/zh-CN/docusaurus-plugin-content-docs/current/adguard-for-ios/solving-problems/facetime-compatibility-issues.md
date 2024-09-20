---
title: 如何避免与 FaceTime 的兼容性问题
sidebar_position: 3
---

:::info

本文适用于 iOS 版的 AdGuard，它是一种多功能广告拦截器，可在系统级别保护用户的设备。 要了解其工作原理， 请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

原来，全隧道模式不仅影响与其他 VPN 的兼容性，还会影响 FaceTime 工作。

有用户遇到这样的问题：当 iOS 版 AdGuard 处于「全隧道」模式时，FaceTime 无法在设备上运行。

如果 AdGuard 在不带 VPN 图标的「全隧道」模式下启用，FaceTime 很可能会正常工作，但也有可能不会，因为 FaceTime 也与其他 VPN 应用程序不兼容，不稳定。

**如果您想使用 FaceTime 并确保视频/音频通话工作正常，请使用「分离隧道」模式。**

![隧道模式屏幕 *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/Ru/iOS/tunnel-mode.PNG?!)

要启用它，请按照说明操作：

1. 转到 iOS 版 AdGuard「*设置*」→「*常规设置*」。
2. 启用「*高级模式*」，然后转到「*高级设置*」部分。
3. 打开「*隧道模式*」并选择「*分离隧道*」。

完成！ 现在，与 FaceTime 的兼容性没有问题了。
