---
title: Ошибки, связанные с сертификатом
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Чтобы фильтровать HTTPS-трафик и эффективно блокировать рекламу и трекеры, AdGuard генерирует специальный (и уникальный) корневой сертификат и устанавливает его в системное хранилище. Подробнее о том, почему требуется сертификат, вы можете узнать в [этой статье](/general/https-filtering/what-is-https-filtering).

Обычно браузеры доверяют сертификату AdGuard после его добавления в системное хранилище сертификатов в процессе установки. Но в некоторых случаях этого недостаточно, и вы можете столкнуться с предупреждениями или ошибками. Чаще всего это происходит в браузерах на базе Firefox, таких как Mozilla Firefox, PaleMoon, Waterfox и т. д., или в Яндекс.Браузере.

## *Потенциальная угроза безопасности* в браузерах на базе Firefox

![Ошибка угрозы безопасности](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Старые версии FireFox, а также браузеры на их основе, не доверяют сертификатам из системного хранилища, а только сертификатам из своего локального хранилища. Начиная с v68, FireFox доверяет системным сертификатам, но вы всё равно можете столкнуться с ошибкой «Соединение ненадёжно». Если что-то подобное произойдёт, сначала попробуйте нажать кнопку *Переустановить сертификат* — вы найдёте её во вкладке *Сеть*.

![Переустановить сертификат](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Если это не помогло, следуйте инструкциям по ручному добавлению сертификата AdGuard в хранилище FireFox.
> Эта инструкция предназначена для браузера Firefox. Названия кнопок и пунктов меню могут отличаться в других браузерах на основе Firefox.

1. Run AdGuard.

1. Go to [http://local.adguard.org/cert](http://local.adguard.org/cert) and click the *Download* button. The browser should start downloading **cert.cer** file.
> Вы также можете открыть страницу загрузки, нажав на ссылку через приложение AdGuard: *Настройки → Сеть → HTTPS-фильтрация*.

![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Open your browser and then open *Settings*.

1. Go to *Privacy & Security* tab.

1. Scroll down to *Certificates* and click the *View Certificates* button.

![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Select *Authorities* tab.

1. Click *Import...*.

![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Browse the downloaded **cert.cer** file and click *Open*.

1. Check the *Trust this CA to identify websites* box and then lick *OK*.

![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

You've successfully installed AdGuard certificate. Restart the browser and the error should go away.

## Предупреждение сертификата Яндекс.Браузера

If you are a user of both AdGuard for Windows and Yandex.Browser you may have come across this warning:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Почему это происходит

Both AdGuard and Yandex take users' security on the Internet very seriously. Current Yandex policy is to warn their users about any certificate that is not recognized by the browser. This is not unsubstantiated, because sometimes malicious apps can inject their own certificates and use this to harm the system and steal private data.

However, AdGuard also adds its certificate to the trusted ones. This leads to the warning message you have encountered.

### Как решить проблему

The easiest way is to click the **Go to site** button. This will tell Yandex.Browser to remember AdGuard certificate as a trusted one, at least for a while. Normally, you won't have to see this message anymore, but it is not beyond the realm of possibility for it to appear occasionally, for whatever reasons. In such cases, simply press the same button again *(make sure it is AdGuard's certificate!)*.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. We strongly advise against it if you want to keep the quality of ad blocking high.
