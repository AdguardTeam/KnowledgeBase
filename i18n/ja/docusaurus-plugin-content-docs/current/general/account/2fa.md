---
title: 二要素認証
sidebar_position: 3
---

二要素認証（2FA：Two-Factor Authentication）は、ログインするために、通常のユーザーネームとパスワードに加え、ユーザーからの追加の証拠を要求する認証方法です。 これはアカウントのセキュリティを向上するためです。 ウェブサイトの多くは通常、SMSで送信されるコードや特別な認証アプリなどという2FA方法を提供しています。

私たちも、2FAオプションを追加することはメリットだと考えています。 それと同時に、2FAを強制するのは一部のユーザーを苛立たせる可能性があることも理解しております。 そのため、adguard.com のマイ・アカウントでは2FAを任意オプションにしています。デフォルトでは、新規アカウント登録後に2FAは無効になっています。 アカウント設定から手動で有効にできます。 現在利用可能な認証方法としては、私たちは試行錯誤を重ねたものである、AndroidまたはiOS用の認証アプリという方法を使っています。 このような認証アプリはたくさんあり、いずれも使って構いません。

AdGuardアカウントに二要素認証を設定することをお勧めします。 時間はあまりかからなく、ライセンスキー、サブスクリプション、アカウントに関連する個人情報を保護するのに役立ちます。

## 設定方法

1. Log into your [AdGuard account](https://auth.adguardaccount.com/login.html) and go to the *Settings* tab:

 ![AdGuard Account settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_1.png)

1. Scroll down to *Two-factor authentication* and enable it:

 ![Two-factor authentication toggle *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_2.png)

1. A code will be sent to the email address associated with your AdGuard account. To enable 2FA, enter the code and click *Enable*.

 ![The verification code *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_3.png?)

After you enable two-factor authentication, you have two options to choose from:

- *One-time email code*: when you log in, we will ask you to enter the code we sent to your email

- *Code from authenticator app*: when you log in, we will ask for a code from your authenticator app

![2FA options *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_4.png)

:::note

If you use the authenticator app, make sure to save the **setup key** somewhere. It will be necessary to recover your account in case your mobile phone gets lost or stolen.

![The setup key in the authenticator app *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/setup_key.png)

:::

If everything is done right, you will see this when you log into your account the next time:

![The result *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/2fa_5.png)

:::note

If you get an authentication error, check the clock on your phone. Adjust it if needed, as an unsynchronized clock may be the cause of the error.

:::
