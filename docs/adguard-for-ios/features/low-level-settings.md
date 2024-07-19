---
title: Low-level settings
sidebar_position: 6
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

![Low-level settings *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

To open the *Low-level settings*, go to *Settings* → *General* → (Enable *Advanced mode* if it's off) → *Advanced settings* → *Low-level settings*.

For the most part, the settings in this section are best left untouched: only use them if you're sure about what you're doing, or if the support team has asked for them. But some settings could be changed without any risk.

### Block IPv6 {#blockipv6}

For any DNS query sent to get an IPv6 address, our app returns an empty response (as if this IPv6 address does not exist). Now there is an option not to return IPv6 addresses. At this point the description of this function becomes too technical: configuring or disabling IPv6 is the exclusive domain of advanced users. Presumably, if you are one of them, it will be good to know that we now have this feature, if not — there is no need to dive into it.

### Bootstrap and Fallback servers {#bootstrap-fallback}

Fallback is a backup DNS server. If you chose a DNS server and something happened to it, a fallback is needed to set the backup DNS server until the main server responds.

With Bootstrap, it’s a little more complicated. For AdGuard for iOS to use a custom secure DNS server, our app needs to get its IP address first. For this purpose, the system DNS is used by default, but sometimes this is not possible for various reasons. In such cases, Bootstrap could be used to get the IP address of the selected secure DNS server. Here are two examples to illustrate when a custom Bootstrap server might help:

1. When a system default DNS server does not return the IP address of a secure DNS server and it is not possible to use a secure one.
2. When our app and third-party VPN are used simultaneously and it is not possible to use System DNS as a Bootstrap.
