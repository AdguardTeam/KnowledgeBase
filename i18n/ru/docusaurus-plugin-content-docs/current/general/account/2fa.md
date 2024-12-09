---
title: Двухфакторная аутентификация
sidebar_position: 3
---

Двухфакторная аутентификация (или 2FA) — это метод аутентификации, который требует от пользователя дополнительных доказательств для входа в систему, помимо имени пользователя и пароля. Это делается в целях безопасности. На сайтах обычно предлагаются такие методы 2FA, как код, отправляемый по SMS, или специальное приложение-аутентификатор.

Мы считаем добавление опции 2FA преимуществом. Мы также понимаем, что принуждение к её использованию может раздражать некоторых пользователей. Именно поэтому мы сделали 2FA необязательной для вашего личного кабинета на adguard.com — по умолчанию эта функция отключена. Вы можете включить её вручную в настройках. Что касается доступных в настоящее время методов аутентификации, мы используем проверенный и испытанный: приложение-аутентификатор для Android или iOS. Вы можете использовать практически любое подобное приложение из множества доступных.

Мы рекомендуем настроить двухфакторную аутентификацию для вашего личного кабинета AdGuard. Это не займёт у вас много времени, но поможет защитить ваши лицензионные ключи, подписки и, самое главное, любую личную информацию, связанную с учётной записью.

## Как настроить

1. Log into your [AdGuard account](https://auth.adguard.com/login.html) and go to the *Settings* tab:

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
