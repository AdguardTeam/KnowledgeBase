---
title: Safari Web uzantısı
sidebar_position: 3
---

Web uzantıları, Safari'ye özel işlevler ekler. You can find [more information about Web extensions here](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Web uzantısı Safari'de nasıl görünür *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

AdGuard'ın Safari Web uzantısı, iOS 15'in yeni özelliklerinden yararlanan bir araçtır. iOS için AdGuard'ın yeteneklerini geliştirmeye hizmet eder. Bununla birlikte AdGuard, gelişmiş filtreleme kuralları uygulayabilir ve sonuçta daha fazla reklamı engelleyebilir.

## What it does

By default, Safari provides only basic tools to content blockers. These tools don't allow the level of performance that can be found in content blockers on other operating systems (Windows, Mac, Android). For example, AdGuard apps on other platforms can use such effective weapons against ads as [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Unfortunately, these instruments are absolutely irreplaceable when dealing with more complex cases such as pre-roll ads on YouTube, for example.

AdGuard's Safari Web extension compliments AdGuard by giving it the ability to employ these types of filtering rules.

Besides that, AdGuard's Safari Web extension can be used to quickly manage AdGuard for iOS right from the browser. Tap the *Extensions* button — it's the one with a jigsaw icon, depending on your device type it may be located to the left or to the right of the address bar. Find **AdGuard** in the list and tap it.

![Web extension menu *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)
> On iPads AdGuard's Safari Web extension is accessible directly by tapping the AdGuard icon in the browser's address bar.

You will see the following list of options:

* **Enabling/disabling protection on the website**. Turning the switch off will disable AdGuard completely for the current website and add a respective exclusion rule. Turning the switch back on will resume protection for the website and delete the rule. Any such change will require some time to take effect.

* **Blocking elements on the page manually**. Tap the *Block elements on this page* button to prompt a pop-up for element blocking. Select any element on the page you want to hide, adjust the selection zone, then preview changes and confirm the removal. A corresponding filtering rule will be added to AdGuard (that you can later disable or delete to revert the change).

* **Report an issue**. Swipe up to bring out the *Report an issue* button. Use it to report a missed ad or any other problem that you encountered on the current page.

## How to enable AdGuard's Safari Web extension

### In the iOS settings

Web uzantısı bağımsız bir araç değildir ve iOS için AdGuard gerektirir. If you don't have AdGuard for iOS installed on your device, please [install it first](../installation) and complete the onboarding process to prepare it for work.

Once done, open *Settings → Safari → Extensions*.

![Select "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select "Extensions" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Find **ALLOW THESE EXTENSIONS** section and then find **AdGuard** among the available extensions.

![Select "AdGuard" in ALLOW THESE EXTENSIONS section *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

Tap it, then turn on the switch. On the same screen make sure that the AdGuard extension has required permissions: **All Websites** should have the *Allow* status.

![](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

:::note

AdGuard's Safari Web extension requires access to the web pages' content to operate, but doesn't use it for any purpose other than blocking ads.

:::

### In Safari

Alternitavely, you can also turn AdGuard extension on from the Safari browser. Tap the *Extensions* button (if you don't see it next to the address bar, tap the `aA` icon).

![In Safari tap aA icon *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

Ardından listede *Uzantıları Yönet* seçeneğini bulun ve ona dokunun. Açılan pencerede **AdGuard** yanındaki düğmeyi açın.

![Uzantılar *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![Uzantılar *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

Bu yöntemi kullanırsanız, yine de AdGuard uzantısına gerekli izinleri vermek için Safari ayarlarına gitmeniz gerekebilir.

Artık mevcut uzantılar arasında AdGuard'ı görüyor olmanız gerekir. Tap it and then the yellow **i** icon. Enable **Advanced protection** by tapping the *Turn on* button and confirming the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
