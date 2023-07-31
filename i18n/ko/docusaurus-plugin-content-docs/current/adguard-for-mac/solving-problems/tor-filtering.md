---
title: Setting up filtering in Tor Browser
sidebar_position: 10
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Mac용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true) 해 보세요.

:::

By default, Tor Browser is added to AdGuard’s list of filtered applications. However, to filter it, AdGuard needs to change Tor's security settings. This will make Tor trust AdGuard's CA certificate.

If you decide to filter Tor and check it in *Preferences* → *Network* → *Applications*, AdGuard will show you this dialog box:

![AdGuard dialog box](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

By updating Tor settings, AdGuard will set the following:

`security.enterprise_roots.enabled`: true

This setting will cause Tor to trust root certificates. [Learn more](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning is a security measure that allows websites to ensure that the connection between a website and a user is authentic. This involves the website publishing a list of public keys, or pins, that it trusts. With the enforcement level set to 1, pinning is not enforced for custom CAs. [Learn more](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

To apply the changes, you’ll need to restart Tor Browser.

If you manually change these settings, Tor filtering will be stopped.
