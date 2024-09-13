---
title: Uygulama yönetimi
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

The _App management_ module can be accessed by tapping the _App management_ tab (third icon from the left at the bottom of the screen). Bu bölüm, cihazınızda yüklü olan tüm uygulamalar için izinleri ve filtreleme ayarlarını yönetmenize olanak tanır.

![App management \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

By tapping an app, you can manage its settings:

- Route its traffic through AdGuard
- Block ads and trackers in this app (_Filter app content_)
- Filter its HTTPS traffic (for non-browser apps, it requires [installing AdGuard's CA certificate into the system store](/adguard-for-android/solving-problems/https-certificate-for-rooted/), available on rooted devices)
- Route it through your specified proxy server or AdGuard VPN in the Integration mode

![App management in Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Bağlam menüsünden uygulamanın istatistiklerine de erişebilirsiniz.

![App management in Chrome. Context menu \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### “Problem-free” and “problematic” apps

Most apps work correctly when filtered. For such apps, their traffic is routed through AdGuard and filtered by default.

Some apps, such as Download Manager, radio, system apps with UID 1000 and 1001 (for example, Google Play services), are “problematic” and may work incorrectly when routed through AdGuard. Bu nedenle, tüm uygulamaları yönlendirmeye veya filtrelemeye çalışırken aşağıdaki uyarıyı görebilirsiniz:

![Route all apps dialog \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

To ensure proper operation of all apps installed on your device, we strongly recommend that you route only problem-free apps through AdGuard. You can see the full list of apps not recommended for filtering in _Settings_ → _General_ → _Advanced_ → _Low-level settings_ → _Protection_ → _Excluded apps_.
