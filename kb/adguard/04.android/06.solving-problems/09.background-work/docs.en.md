---
title: 'How to protect AdGuard from being disabled by the system'
published: true
taxonomy:
    category:
        - docs
---

In some cases, apps won't stay in the background ("alive" or in a sleep mode) due to Android OS optimization function, or so called "battery save mode" — this function can kill background applications. It may be inconvenient to relaunch them each time they are getting closed. To avoid the background app termination you need to follow these steps which we described separately for each manufacturer (version) of Android OS. Note that instructions for different manufacturers are mostly very similar.

**List of manufacturers with different versions of Android OS:**

* [Asus](#Asus)

* [Xiaomi](#Xiaomi)

* [Samsung](#Samsung)

* [Huawei](#Huawei)

* [Meizu](#Meizu)

* [Nokia](#Nokia)

* [Oppo](#Oppo)

* [Oneplus](#Oneplus)

* [Sony](#Sony)

* [Wiko](#Wiko)

* [Android stock devices Pixel/Nexus/Essential](#Google)

<a id="Asus"></a>

## Asus

Information on Asus devices is still far from being exhaustive so there may be more issues than listed here. We're going to update this part of the article when we know more.

Go to Settings - Power Manager - Mobile Manager - Settings - Battery-saving options - Auto-start nanager - AdGuard - uncheck.

<a id="Xiaomi"></a>

## Xiaomi

#### MIUI 12.0.8+

To let your AdGuard app run successfully in the background, do the following:

In *Settings* > *Apps* > *Manage apps* > scroll down to locate *AdGuard*, set *Autostart* to "On".
