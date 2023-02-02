---
title: Known issues of AdGuard for Windows
sidebar_position: 10
---

## AdGuard for Windows and AdGuard VPN for Windows compatibility issues

Once you install AdGuard for Windows and AdGuard VPN for Windows, they just start working together without any effort on your part. However, changing some default settings may prevent applications from running simultaneously.

There are two specific settings in AdGuard for Windows: *Use redirect driver mode* and *Filter localhost*. By default, the *Use redirect driver mode* setting is disabled and the *Filter localhost* – is enabled. Changing the state of any of these settings will inevitably break AdGuard's filtering if AdGuard Ad Blocker and AdGuard VPN are enabled on your device.  

> Usually changing these settings default state is required to overcome issues related to the simultaneous operation of AdGuard Ad Blocker and various apps working with the network (e.g. antiviruses, VPNs, network filters, etc).

We are currently working on a solution to this problem.

