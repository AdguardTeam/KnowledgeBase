---
title: Known issues of AdGuard for Windows
sidebar_position: 10
---

## AdGuard for Windows and AdGuard VPN for Windows compatibility issues

Once you install AdGuard for Windows and AdGuard VPN for Windows, they just start working together without any effort on your part. However, changing some default settings may prevent the apps from working correctly when running simultaneously.

There are two specific settings in AdGuard for Windows: *Use redirect driver mode* and *Filter localhost*. By default, the *Use redirect driver mode* setting is disabled and the *Filter localhost* – is enabled. Changing the state of any of these settings will inevitably break AdGuard's filtering if AdGuard Ad Blocker and AdGuard VPN are enabled on your device.  

Usually changing these settings default state is required to overcome issues related to the simultaneous operation of AdGuard Ad Blocker and various apps working with the network (e.g. antiviruses, VPNs, network filters, etc). If you come across a situation where you need AdGuard Ad Blocker and AdGuard VPN to work simultaneously and correctly, and the default state of the above settings needs to be changed — [create an issue on GitHub](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) so we can help you privately.

We are currently working towards overcoming the listrd above limitations of simultaneous work of our applications. 

