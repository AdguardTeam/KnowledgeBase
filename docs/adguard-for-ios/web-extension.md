---
title: Safari Web extension
sidebar_position: 3
---

Web extensions add custom functionality to Safari. You can find [more information about Web extensions here](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![What the Web extension looks like in Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

AdGuard's Safari Web extension is a tool that takes advantage of the new features of iOS 15. It serves to enhance the capabilities of AdGuard for iOS. With it, AdGuard can apply advanced filtering rules and ultimately block more ads.

## What it does

By default, Safari provides only basic tools for content blockers. These tools don't offer the level of performance found in content blockers on other operating systems (Windows, Mac, Android). For example, AdGuard apps on other platforms can use such powerful anti-ad weapons as [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Unfortunately, these utilities are absolutely irreplaceable when dealing with more complex cases, such as pre-roll ads on YouTube.

AdGuard's Safari Web extension compliments AdGuard by giving it the ability to employ these types of filtering rules.

Besides that, AdGuard's Safari Web extension can be used to quickly manage AdGuard for iOS right from the browser. Tap the *Extensions* button — it's the one with a jigsaw icon, depending on your device type it may be located to the left or to the right of the address bar. Find **AdGuard** in the list and tap it.

![Web extension menu *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> On iPads, AdGuard's Safari web extension can be accessed directly by tapping the AdGuard icon in the browser's address bar.

You will see the following list of options:

- **Enabling/disabling protection on the website**. Turning the switch off will disable AdGuard completely for the current website and add a respective exclusion rule. Turning the switch back on will resume protection for the website and delete the rule. Any such change will require some time to take effect.

- **Blocking elements on the page manually**. Tap the *Block elements on this page* button to prompt a pop-up for element blocking. Select any element on the page you want to hide, adjust the selection zone, then preview changes and confirm the removal. A corresponding filtering rule will be added to AdGuard (that you can later disable or delete to revert the change).

- **Report an issue**. Swipe up to bring out the *Report an issue* button. Use it to report a missed ad or any other problem that you encountered on the current page.

## How to enable AdGuard's Safari Web extension

:::note

AdGuard's Safari Web extension requires access to the web pages' content to operate, but doesn't use it for any purpose other than blocking ads.

:::

### In the iOS settings

The Web extension is not a standalone tool and requires AdGuard for iOS. If you don't have AdGuard for iOS installed on your device, please [install it first](../installation) and complete the onboarding process to prepare it for work.

Once done, open the *Settings* app and scroll down to *Apps*.

![Select "Apps" *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select "Extensions" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select "AdGuard" *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on. 

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in the Settings](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### In Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left of URL field:

![In Safari tap aA icon *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window turn the AdGuard switches on. (The top one is AdGuard Web extension, other six are content blockers needed for filtering.)

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**: open AdGuard extension, then tap the yellow **i** icon, press *Enable* button and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
