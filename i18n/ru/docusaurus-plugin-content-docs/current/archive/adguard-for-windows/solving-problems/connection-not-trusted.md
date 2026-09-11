---
title: Ошибки, связанные с сертификатом
sidebar_position: 2
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

Чтобы фильтровать HTTPS-трафик и эффективно блокировать рекламу и трекеры, AdGuard генерирует специальный (и уникальный) корневой сертификат и устанавливает его в системное хранилище. You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

Обычно браузеры доверяют сертификату AdGuard после его добавления в системное хранилище сертификатов в процессе установки. Но в некоторых случаях этого недостаточно, и вы можете столкнуться с предупреждениями или ошибками. Чаще всего это происходит в браузерах на базе Firefox, таких как Mozilla Firefox, PaleMoon, Waterfox и т. д., или в Яндекс Браузере.

Вот некоторые распространённые проблемы:

- [_Potential Security Risk_ error in Firefox-based browsers](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser certificate warning](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potential Security Risk_ error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Старые версии FireFox, а также браузеры на их основе, не доверяют сертификатам из системного хранилища, а только сертификатам из своего локального хранилища. Начиная с v68, FireFox доверяет системным сертификатам, но вы всё равно можете столкнуться с ошибкой «Соединение ненадёжно». If something like this happens, first try to click the _Reinstall Certificate_ button — you will find it in the _Network_ tab.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Если это не помогло, следуйте инструкциям по ручному добавлению сертификата AdGuard в хранилище FireFox.

> Эта инструкция предназначена для браузера Firefox. Названия кнопок и пунктов меню могут отличаться в других браузерах на основе Firefox.

1. Запустите AdGuard.

2. Go to [https://local.adguard.org/cert](https://local.adguard.org/cert) and click the _Download_ button. The browser should start downloading **cert.cer** file.

   :::note

   You can also open the download page by clicking the link via the AdGuard app at _Settings → Network → HTTPS filtering_.

   :::

   ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Open your browser and then open _Settings_.

4. Go to _Privacy & Security_ tab.

5. Scroll down to _Certificates_ and click the _View Certificates_ button.

   ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Select _Authorities_ tab.

7. Click _Import..._.

   ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Browse the downloaded **cert.cer** file and click _Open_.

9. Check the _Trust this CA to identify websites_ box and then click _OK_.

   ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Вы успешно установили сертификат AdGuard. Перезапустите браузер, ошибка должна исчезнуть.

## Предупреждение Яндекс Браузера

Если вы пользуетесь AdGuard для Windows и Яндекс Браузером, вы могли столкнуться с этим предупреждением:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Почему это происходит

И AdGuard, и Яндекс очень серьёзно относятся к безопасности пользователей в интернете. Текущая политика Яндекса заключается в том, чтобы предупреждать своих пользователей о любом сертификате, который не распознаётся браузером. Это небезосновательно, потому что иногда вредоносные приложения могут внедрять свои собственные сертификаты и использовать их для нанесения вреда системе и кражи личных данных.

Однако AdGuard также добавляет свой сертификат в список доверенных. Это и приводит к появлению предупреждения.

### Как решить проблему

The easiest way is to click the **Go to site** button. Это заставит Яндекс Браузер запомнить сертификат AdGuard как доверенный хотя бы на время. Скорее всего, вам больше не придётся видеть это сообщение, но вполне возможно, что оно будет время от времени появляться по каким-то другим причинам. In such cases, simply press the same button again _(make sure it is AdGuard's certificate!)_.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. Мы настоятельно не рекомендуем делать это, если вы хотите сохранить высокое качество блокировки рекламы.

## Неофициальные расширения не обновляются в браузерах на базе Firefox

В браузерах на базе Firefox при включённой HTTPS-фильтрации в AdGuard расширения не из официального каталога Mozilla не могут обновляться. И вот почему.

Чтобы обновить расширения, Firefox проверяет, защищено ли соединение с сервером обновлений сертификатом, выданным доверенным центром сертификации (CA). Браузеры на базе Firefox доверяют сертификатам только от удостоверяющих центров, включённых во встроенный список Mozilla — это мера безопасности для блокирования потенциально небезопасных обновлений.

Сертификат AdGuard, несмотря на то что он безопасный, отсутствует в этом списке. Вот почему домены Mozilla исключены из HTTPS-фильтрации в AdGuard.

Однако неофициальные расширения используют сторонние серверы для обновлений, и они не исключены из HTTPS-фильтрации по умолчанию. Поэтому, когда Firefox проверяет соединение, он видит сертификат AdGuard вместо оригинального — и блокирует обновление.

Если вам нужно проверить наличие обновлений для таких расширений, рассмотрите возможность временно отключить AdGuard.
