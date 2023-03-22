---
title: Настройка фильтрации в браузере Tor
sidebar_position: 10
---

По умолчанию Tor есть в списке фильтруемых приложений AdGuard, но для его фильтрации AdGuard необходимо изменить настройки безопасности Tor. Это нужно, чтобы Tor доверял сертификату центра сертификации AdGuard.

Если вы хотите фильтровать Tor, выберите его в *Настройках* → *Сеть* → *Приложения*, и AdGuard покажет вам это диалоговое окно:

![AdGuard dialog box](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

При обновлении настроек Tor AdGuard установит следующее:

`security.enterprise_roots.enabled`: true

This setting will cause Tor to trust root certificates. [Узнать больше](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning is a security measure that allows websites to ensure that the connection between a website and a user is authentic. Это включает в себя публикацию сайтом списка открытых ключей, которым он доверяет. Если для уровня применения установлено значение 1, закрепление не будет применяться для пользовательских центров сертификации. [Узнать больше](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Чтобы применить изменения, перезапустите Tor.

> Если вы измените эти настройки вручную, Tor не будет фильтроваться.
