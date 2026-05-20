---
title: 对 AdGuard 过滤器做出贡献
sidebar_position: 4
---

### 过滤规则 {#filtering-rules}

可能众所周知，AdGuard 使用过滤规则拦截广告。这些规则被组合成不同主题的[拦截过滤器](/general/ad-filtering/adguard-filters)，例如，AdGuard 基础过滤器，移动广告过滤器等等。[本知识库的文章内容](/general/ad-filtering/how-ad-blocking-works)包括更多关于，如何拦截广告的信息。

许多网站会不断更改插入广告的方式。为了过滤器保持有效，我们要持续更新过滤器以及添加新规则。 过滤器工程师一直都在努力创建新规则，但是我们也非常愿意接受一些外界的帮助。

:::note

All contributors must follow the **AdGuard filter policy** when creating rules. By participating, you agree to comply with the Policy and ensure your rules adhere to its requirements. Also contributors must not create rules intended to deliberately block websites or services that do not meet the criteria for blocking or that fall under exceptions described in the Policy.

:::

### 如何开始 {#how-to-start}

当然，改进并创建拦截过滤器需要有特定的技能。 如果您已经了解如何创建规则，请直接访问我们在 GitHub 上的 [AdGuard 过滤器存储库](https://github.com/AdguardTeam/AdguardFilters)。 Before you start contributing, we recommend reviewing the [guidelines](https://github.com/AdguardTeam/AdguardFilters/blob/master/CONTRIBUTING.md).

In the repository, you will find a lot of open issues, each one referencing a problem with some website problem — a missed ad, a false positive, etc. 选择任何一个问题并在注释中建议您个人的规则， AdGuard 过滤器工程师将审核您的建议。 如果正确，则您的规则会被添加到 AdGuard 过滤器中。

如果您还不太熟悉或者需要复习我们的过滤规则语法，请[在我们的知识库中](/general/ad-filtering/create-own-filters)找到有关语法的基础知识。

### 奖励 {#rewards}

假设您已经提出了一些过滤规则，且其中一些还被批准通过了，您可以获取奖励了。 使用您的 GitHub 账号向 [st@adguard.com](mailto:st@adguard.com) 上给我们发送消息，即可获取免费的 AdGuard 许可密钥。 我们并没有硬性规定，至少需要获得多少个规则批准才能获得免费许可。 不过考虑到这个任务的难度系数，大约五个被批准的规则就足够了。
