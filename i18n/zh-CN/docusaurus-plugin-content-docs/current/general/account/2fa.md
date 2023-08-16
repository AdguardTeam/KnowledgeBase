---
title: 两步验证
sidebar_position: 3
---

两步验证（Two-factor authentication，简称 2FA）是一种要求用户除了用户名/密码之外，还提供附加确认身份的信息进行登录的认证方法。 换句话说，这是一个加强保护个人隐私安全的方法。 网站通常提供 2FA 方法，例如通过短信或特殊验证器应用程序发送的验证码。

我们认为使用 2FA 非常重要。 同时，我们也了解对有些用户而言，强制使用 2FA 将会带来不必要的麻烦。 所以在 adguard.com 个人账号上，用户可自己选是否要开启 2FA。当用户注册新账号时，默认设置关闭 2FA。 在设置中可以手动开启两步验证。 对可用的方式来说，目前我们建议用适用于 iOS 和安卓的认证应用程序（authenticator app）。 用户也可使用个人所喜欢的应用程序，这类的应用程序有很多。

我们推荐用户在 AdGuard 账号设置两步验证。 该操作不需要消耗多少时间，但可以增强用户的许可密钥和订阅保护，更重要的是，账号里个人信息的保护。

## 如何设置 2FA

1. Log into your [AdGuard account](https://auth.adguard.com/login.html) and go to the Settings tab:

![AdGuard Account settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/account_settings.png)

1. Scroll down to *Password and 2FA* section and click **Enable**:

![The Change button *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_new.png)

1. Follow the on-screen instructions to install an authenticator app and scan the QR code:

![The verification code](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_enable.png)

***Important***

- 请您保存第二个备用密码。该密码是在您的手机丢失或被偷窃的情况下用于恢复您的帐号的必要信息。

If everything is done right, you will see this when you log into your account the next time:

![The result *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_success.png)

Use your mobile authenticator app to read the code and enter it. You should be logged in now!

***NOTE***: If you get an authentication error, check the clock on your phone. Adjust it if needed, as an unsynchronized clock may be the cause of the error.
