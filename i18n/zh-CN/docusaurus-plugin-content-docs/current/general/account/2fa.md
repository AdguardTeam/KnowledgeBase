---
title: 两步验证
sidebar_position: 3
---

两步验证（Two-factor authentication，简称 2FA，也称「双因素验证」）是一种要求用户除了用户名/密码之外，还提供附加确认身份的信息进行登录的认证方法。 换句话说，这是一个加强保护个人隐私安全的方法。 网站通常提供 2FA 方法，例如通过短信或特殊验证器应用程序发送的验证码。

我们认为使用 2FA 非常重要。 同时，我们也了解对有些用户而言，强制使用 2FA 将会带来不必要的麻烦。 所以在 adguard.com 个人账号上，用户可自己选是否要开启 2FA。当用户注册新账号时，默认设置关闭 2FA。 在设置中可以手动开启两步验证。 对可用的方式来说，目前我们建议用适用于 iOS 和安卓的认证应用程序（authenticator app）。 用户也可使用个人所喜欢的应用程序，这类的应用程序有很多。

我们推荐用户在 AdGuard 账号设置两步验证。 该操作不需要消耗多少时间，但可以增强用户的许可密钥和订阅保护，更重要的是，账号里个人信息的保护。

## 如何设置 2FA

1. Log into your [AdGuard account](https://auth.adguardaccount.com/login.html) and go to the *Settings* tab:

 ![AdGuard 账号设置 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_1.png)

1. 滚动到「*两步验证*」启用它：

 ![两步验证开关 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_2.png)

1. 验证码将发送到与您的 AdGuard 账号关联的电子邮件地址上。 要启用两步验证，请输入代码并点击「*启用*」。

 ![验证码 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_3.png?)

在启用两步验证后，可以选择两种选项：

- *一次性电子邮件代码*：登录时，我们会要求输入发送到您电子邮件的验证码。

- *身份验证软件的代码*：当您登录时，我们会要求输入身份验证应用程序生成的验证码。

![两步验证 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_4.png)

:::note

如果您使用身份验证器应用程序，请保存**设置密钥**。 在手机丢失或被盗的情况下，有设置密钥才能恢复个人账号。

![身份验证器应用程序中的设置密钥 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/setup_key.png)

:::

如果每个步骤都完成，下次登录个人账号时，将看到以下窗口：

![结果 *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_5.png)

:::note

请注意：如果看到验证错误通知，请查看手机上的时间设置。 如果需要，请更改时间设置。错误的时钟会导致验证错误。

:::
