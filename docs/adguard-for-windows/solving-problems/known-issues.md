---
title: Known issues of AdGuard for Windows
sidebar_position: 10
---

## AdGuard for Windows and AdGuard VPN for Windows compatibility issues

Once you install AdGuard for Windows and AdGuard VPN for Windows, they just start working together. Such 100% compatibility between the two apps is possible thanks to the unique AdGuard VPN protocol, which allows two VPN apps to work simultaneously on the same device. 

However, in some cases there may be problems. If you have both apps enabled and the *Use redirect driver mode* setting is **activated** in AdGuard Ad Blocker, then traffic filtering doesn’t work. The same will happen if the *Filter localhost* setting is **disabled**.  

By default, the *Use redirect driver mode* setting is disabled and the *Filter localhost* – is enabled. Usually changing the default state of these settings is required to overcome issues related to the simultaneous operation of AdGuard Ad Blocker and various apps working with the network (e.g. antiviruses, VPNs, network filters, etc).

> The *Use redirect driver mode* setting and the *Filter localhost* setting are located in the Advanced settings section. Mindlessly changing settings there may potentially cause problems with AdGuard's performance, break the Internet connection or compromise your security and privacy. If apps work normally on your device, please do not change Advanced settings states.

As a temporary solution to the problem with AdGuard filtering in this case, we suggest returning settings to the default state, i.e. disable the *Use redirect driver mode* and enable the *Filter localhost*.
