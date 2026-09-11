---
title: 用户过滤器
sidebar_position: 4
---

![用户规则](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/user-rules.png)

当您有特殊需求时，用户规则可用于自定义广告拦截：例如，将某个网站排除在过滤之外、取消拦截请求，或允许特定网页上的脚本。 它们可以手动添加、导入，也可以在屏蔽页面元素时自动创建。

要添加自己的过滤规则，请使用[专用语法](/general/ad-filtering/create-own-filters)。

### 规则构造器

我们知道，自己编写过滤规则并非每位用户的专长。 因此，用户只需点击「创建规则」即可使用规则构造器：选择想执行的操作，按提示点击几下，就完成了。 拦截图片、视频、脚本或页面上您不想看到的任何其他元素。

![规则构造器](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/build-a-rule.png)

这里有一个棘手情况的示例：一个难以过滤的 Cookie 弹窗。 在页面代码中找到它，然后打开「用户规则」并创建一条规则来拦截它：

<iframe class="youtube-video" src="https://cdn.adtidy.org/content/blog/rule.mp4" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
