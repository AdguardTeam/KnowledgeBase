---
title: App management
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The _App management_ module can be accessed by tapping the _App management_ tab (third icon from the left at the bottom of the screen). This section allows you to manage permissions and filtering settings for all apps installed on your device.

![App management \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

By tapping an app, you can manage its settings:

- Route its traffic through AdGuard
- Block ads and trackers in this app (_Filter app content_)
- Filter its HTTPS traffic (for non-browser apps, it requires [installing AdGuard's CA certificate into the system store](/adguard-for-android/solving-problems/https-certificate-for-rooted/), available on rooted devices)
- Route it through your specified proxy server or AdGuard VPN in the Integration mode

![App management in Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

From the context menu, you can also access the app's stats.

![App management in Chrome. Context menu \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### “Problem-free” and “problematic” apps

Most apps work correctly when filtered. For such apps, their traffic is routed through AdGuard and filtered by default.

Some apps, such as Download Manager, radio, system apps with UID 1000 and 1001 (for example, Google Play services), are “problematic” and may work incorrectly when routed through AdGuard. That's why you may see the following warning when trying to route or filter all apps:

![Route all apps dialog \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

To ensure proper operation of all apps installed on your device, we strongly recommend that you route only problem-free apps through AdGuard. You can see the full list of apps not recommended for filtering in _Settings_ → _General_ → _Advanced_ → _Low-level settings_ → _Protection_ → _Excluded apps_.
