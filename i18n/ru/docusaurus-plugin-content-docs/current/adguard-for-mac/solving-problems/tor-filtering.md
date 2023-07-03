---
title: Настройка фильтрации в браузере Tor
sidebar_position: 10
---

:::info

This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

По умолчанию Tor есть в списке фильтруемых приложений AdGuard, но для его фильтрации AdGuard необходимо изменить настройки безопасности Tor. Это нужно, чтобы Tor доверял сертификату центра сертификации AdGuard.

Если вы хотите фильтровать Tor, выберите его в *Настройках* → *Сеть* → *Приложения*, и AdGuard покажет вам это диалоговое окно:

![Диалоговое окно AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

При обновлении настроек Tor AdGuard установит следующее:

`security.enterprise_roots.enabled`: true

Благодаря этой настройке Tor будет доверять корневым сертификатам. [Узнать больше](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning — это мера безопасности, которая позволяет сайтам гарантировать подлинность соединения между сайтом и пользователем. Это включает в себя публикацию сайтом списка открытых ключей, которым он доверяет. Если для уровня применения установлено значение 1, закрепление не будет применяться для пользовательских центров сертификации. [Узнать больше](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Чтобы применить изменения, перезапустите Tor.

If you manually change these settings, Tor filtering will be stopped.
