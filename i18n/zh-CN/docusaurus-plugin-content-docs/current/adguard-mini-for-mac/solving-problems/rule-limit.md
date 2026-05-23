---
title: 规则数量限制的问题
sidebar_position: 1
---

:::info

这篇文章是关于 Mac 版的 AdGuard Mini，用于 Safari 浏览器的保护。 要全面保护设备，请[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)。

:::

## Safari 内容拦截器规则数量限制

AdGuard Mini Mac 版使用内容拦截 API 将过滤规则应用于 Safari 浏览器中的页面。 目前，每个内容拦截扩展最多可使用 150,000 个规则。

Mac 版 AdGuard Mini 有六种内容拦截器：

- AdGuard 常用
- AdGuard 隐私
- AdGuard 社交
- AdGuard 安全
- AdGuard 其它
- AdGuard 自定义

这样，总共有 900 000 个过滤规则。

不过，**一个扩展最多只能包含 150 000 个规则**。 如果用户超过此数量限制，某些规则将无法应用。 这可能会导致错误拦截。

## 如何检查是否超出规则数量限制

1. 打开 AdGuard Mini 应用程序。
2. 转至「_设置_」→「_Safari 扩展_」。
3. 在每个扩展下方，用户将看到已启用的过滤器和活动规则的数量。
   ![扩展标签](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

如果内容拦截器中启用的规则数量超过 150,000 个，则可能需要禁用其中的某些过滤器或用户规则。 请转到「_过滤器_」，选择有问题的过滤器类别，禁用不需要的过滤器或用户规则。
