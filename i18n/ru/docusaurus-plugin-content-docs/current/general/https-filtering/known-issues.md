---
title: Известные проблемы
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Last update: September 17, 2024

Понимание этой статьи может потребовать некоторых базовых знаний о шифровании, TLS и HTTPS.

Для начала посмотрите на эту диаграмму, которая показывает общую структуру протокола HTTPS:

![Что такое HTTPS-фильтрация?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard копирует свойства TLS-соединения, которые использует ваш браузер:

- AdGuard использует ту же самую версию TLS
- AdGuard использует те же методы шифрования (ciphers), что и ваш браузер

Так что если вы используете современный и безопасный браузер — это хорошо, ведь известные проблемы TLS в нём уже учтены, и он не будет пытаться использовать небезопасные методы шифрования.

**Что делает AdGuard, когда возникают сомнения в действительности сертификата?** В таких случаях AdGuard полностью прекращает фильтрацию всех подключений к этому домену и оставляет за браузером право принимать все решения.

## Известные проблемы

У HTTPS-фильтрации в AdGuard есть свои недостатки. Практически все мы планируем устранить в ближайших версиях AdGuard.

Ниже перечислены все известные нам проблемы и сроки их устранения.

### Проверка оригинального сертификата

Самый главный недостаток механизма HTTPS-фильтрации заключается в том, что он скрывает оригинальный сертификат сайта. Вы просто не можете увидеть реальный сертификат — вместо него вы видите тот, который сгенерировал AdGuard.

This problem can be solved in 2 ways:

- By using our [Browser Assistant](https://adguard.com/adguard-assistant/overview.html). This browser extension helps you manage filtering directly from the browser and allows you to inspect the original certificate of any website

  ![Certificate Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- By visiting the *Recent activity* section in AdGuard for Android or the *Filtering log* section in AdGuard for Windows and AdGuard for Mac. While in the Browser Assistant you can only see the certificate of the website, in Recent activity you can inspect the certificate of any server used in a subrequest or browser, with or without the Browser Assistant. To view the certificate using this method, follow the instructions below.

#### Inspect original certificate in AdGuard for Android

1. Click the Statistics icon on the navigation bar.
2. Go to *Recent activity*.
3. Click the request whose certificate you want to inspect to open the request details.
4. Scroll down to *Original certificate*. Click for more info.

![Recent activity AdGuard for Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Inspect original certificate in AdGuard for Windows

1. Go to *Settings* → *Ad Blocker* → *Filtering log*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Under the *TLS* section, click *View website certificate*.

![Filtering log AdGuard for Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Inspect original certificate in AdGuard for macOS

1. Click the gear icon. In the drop-down menu, go to *Advanced* → *Filtering log...*.
2. Click the request whose certificate you want to inspect to open the request details.
3. Click *View certificate*.

![Filtering log AdGuard for Mac *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Прозрачность сертификата (Certificate Transparency)

Благодаря современной криптографии браузеры обычно могут легко обнаружить вредоносные сайты с поддельными сертификатами. Однако этих механизмов недостаточно для обнаружения вредоносных сайтов, которые используют сертификаты, выданные по ошибке или выданные скомпрометированным центром сертификации. Certificate Transparency призван устранить такие угрозы, сделав процедуру выдачи SSL-сертификатов открытой и прозрачной для всех.

Продукты AdGuard с [CoreLibs](https://github.com/AdguardTeam/CoreLibs/), начиная с версии **1.11**, будут проводить политику, основанную на [Политике прозрачности сертификатов Chrome](https://googlechrome.github.io/CertificateTransparency/ct_policy.html).

## Замечания и пожелания

Если вы хотите что-то добавить, сообщить о каких-либо ошибках или задать вопрос, пожалуйста, свяжитесь с нами по адресу `devteam@adguard.com`.
