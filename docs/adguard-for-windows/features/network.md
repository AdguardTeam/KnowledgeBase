---
title: Network
sidebar_position: 4
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The *Network* module is dedicated to network filtering, and here you will find additional network-related options. Two of them are enabled by default: *Enable traffic filtering* and *Filter HTTPS*. These are important extra precautions to better filter your web space. Most websites are now using HTTPS, and the same applies to advertising. From many websites, like youtube.com, facebook.com, and x.com, it is impossible to remove ads without HTTPS filtering. So keep the *Filter HTTPS* feature enabled unless you have a strong reason not to.

![Network Settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/network/network_settings.png)

In this module you can select the checkbox *Use AdGuard as an HTTP proxy* to use AdGuard as a regular HTTP proxy which will filter all traffic passing through it. You can also enable the *Filter websites with EV certificates* feature. Extended Validation (EV) SSL Certificates offer a stronger safety guarantee; owners of such websites have to pass a thorough and globally standardized identity verification process defined by EV guidelines. Which is the reason why some users trust websites with such certificates and prefer not to filter them.

At last, there is a section with proxy settings. There you can specify which proxy server AdGuard should use to update filters, get new versions, and so on.

### SockFilter and other network drivers

In *Network*, you can also choose which driver to use: SockFilter, WFP, or TDI.

**WFP** (Windows Filtering Platform) is a powerful driver, but it may present stability risks, such as [occasional system crashes (BSOD)](https://github.com/AdguardTeam/AdguardForWindows/issues/5792) for some users.

The **TDI** driver is also available, but it is outdated and may cause [filtering issues in some versions of Google Chrome](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). [A temporary workaround exists](https://adguard.com/kb/adguard-for-windows/solving-problems/tdi-driver-and-Chrome-142/), but it’s not a reliable long-term solution.

**SockFilter** is an *experimental*, lightweight network driver. It intercepts network activity at the socket level (TCP/UDP) instead of processing raw packets, which makes it more stable and compatible with other software.

Compared to its alternatives, SockFilter offers:

- **Better compatibility:** Works smoothly with VPNs, firewalls, and antivirus software.
- **Lower risk of system crashes:** Runs in a safer part of the Windows networking stack, reducing the chance of system-level failures.
- **More stability in the future:** When fully tested and implemented, SockFilter will reduce potential errors by operating closer to how applications use the network.

### AdGuard VPN

The last section is dedicated to AdGuard VPN — an ideal tool that provides security and anonymity each time you browse the Internet. You can download it by clicking the *Download* button or go to the AdGuard VPN website by clicking the *Homepage* button.

How does AdGuard VPN work? Without going into technical details, we can say that VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. In this way, data privacy is preserved, as well as the anonymity of the user, because a third-party observer sees the IP address of the VPN server and not the actual user's IP.

**What AdGuard VPN does:**

- hides your real whereabouts and helps you stay anonymous
- changes your IP address to protect your data from tracking
- encrypts your traffic to make it unreadable to third parties
- lets you configure where to use VPN and where not to (exclusions feature)

To get more information about AdGuard VPN, dive into the [AdGuard VPN Knowledge Base](https://adguard-vpn.com/kb/).
