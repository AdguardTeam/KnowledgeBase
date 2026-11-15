---
title: Connectivity Assist compatibility issues
sidebar_position: 6
---

:::info

This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. To see how it works firsthand, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

Even with *DNS protection* enabled, you may sometimes encounter ads in apps and browsers other than Safari. On devices running iOS 27 or later with *AdGuard* DNS implementation in *Split-Tunnel* mode, the enabled *Connectivity Assist* feature is often the cause.

:::note

If you use this configuration, AdGuard displays a warning in the app. This does not mean AdGuard has detected an active problem on your device: iOS restricts third-party apps from reading system toggles, so AdGuard cannot check whether *Connectivity Assist* is actually turned on. The alert is intended solely as a reminder to verify your settings.

:::

Starting with iOS 27, Apple renamed *Wi-Fi Assist* to *Connectivity Assist* and moved it from *Cellular* to *Wi-Fi* settings. When turned on, it allows your device to use cellular data to supplement Wi-Fi whenever the wireless connection is slow or unstable.

This disrupts DNS-level protection: routing traffic over cellular instead of the filtered Wi-Fi network allows DNS queries to bypass AdGuard. As a result, filtering may fail partially or completely.

## How to fix this issue

1. Open the iOS *Settings* app.
2. Tap *Wi-Fi* and make sure Wi-Fi is turned on.
3. Scroll down to *Connectivity Assist* and turn it off.

:::tip

You can also turn off *Connectivity Assist* for a specific network instead of system-wide: go to *Settings* → *Wi-Fi*, tap the Info icon next to the network, and turn off *Use Connectivity Assist*. This is useful if you only need reliable DNS filtering on your home or office network.

:::

If ads still get through after you change this setting, see the next section or contact our support team at [support@adguard.com](mailto:support@adguard.com).

## Alternatives and their limitations

If you prefer not to disable *Connectivity Assist*, two alternative configurations are available. Both have significant limitations, so review them carefully before switching.

### Native implementation

With *DNS implementation* set to *Native*, the DNS server is configured directly by iOS instead of AdGuard. In this mode, AdGuard doesn't create a local VPN tunnel, which can reduce the possibility of DNS requests being diverted.

However, you lose several core features of AdGuard's DNS protection:

- No local DNS filtering
- No custom DNS rules
- No statistics on DNS requests in AdGuard

Additionally, the *Native* implementation is automatically ignored whenever any VPN is active.

### Full tunnel

With *Tunnel mode* set to *Full*, all DNS traffic is strictly routed through AdGuard, preventing any queries from leaking outside the tunnel. This can restore filtering reliability.

Keep in mind:

- *Full* tunnel mode cannot run alongside other VPN apps.
- It may cause connectivity issues: if the chosen DNS server stops responding, internet access will be interrupted entirely.
- It can negatively affect certain apps and services (such as FaceTime) and lead to app update failures in the App Store.

## Why ads may still be blocked in Safari

Safari protection and DNS protection are two independent filtering mechanisms in AdGuard for iOS:

- *Safari protection* operates directly inside the browser using Content Blocking rules applied to webpage elements. Ads on websites in Safari continue to be blocked regardless of how system network connections are routed.
- *DNS protection* operates system-wide by filtering domain-level requests—and this is where *Connectivity Assist* interferes.

This difference explains why ad blocking may appear inconsistent: Safari continues blocking ads normally, while other browsers and apps begin displaying them. This does not indicate that your filters are broken; it simply means that network requests from those apps are bypassing AdGuard's DNS filter.
