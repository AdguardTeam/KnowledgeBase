---
title: User Scripts API
sidebar_position: 8
---

:::info

Bu makale, yalnızca tarayıcınızı koruyan AdGuard Tarayıcı Uzantısı hakkındadır. Tüm cihazınızı korumak için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true).

:::

Özel bir filtre veya kullanıcı kuralı eklerken, uzantıda bu özellikleri kullanmak için Geliştirici modunu etkinleştirmenizi isteyen bir bildirim görüntülenir.

![Bildirim \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

Starting with version 5.2, AdGuard Browser Extension uses the User Scripts API. Chrome requires this new API to follow best practices for user safety.

## What is the User Scripts API?

The User Scripts API is a tool that allows extensions to run customized JavaScript scripts on webpages. These are often used to modify or enhance websites in ways that aren’t originally provided by the website itself.

With the shift to Chrome’s Manifest V3, many older methods of injecting scripts are limited or delayed. However, there is an exception for the User Scripts API.

Learn more about the impacts of the MV3 policies in our [blog post](https://adguard.com/en/blog/review-issues-in-chrome-web-store.html).

## Geliştirici modu nasıl etkinleştirilir

To use custom filters and JavaScript rules in the _User Rules_ tab, you must set up your browser first. Bu, uzantıya web sayfalarına en uygun zamanda komut dosyalarını enjekte etmek için güvenilir ve güvenli bir yöntem sağlar. Chrome sürümünüze bağlı olarak aşağıdaki talimatları izleyin.

### 138'den önceki Chrome sürümleri için

Uzantılar için Geliştirici modunu etkinleştirmeniz gerekir. Bunu yapmak için sağ üst köşedeki üç noktaya tıklayarak Chrome menüsünü açın, _Uzantılar_ ⭢ _Uzantıları yönet_ öğesine gidin ve _Geliştirici modu_ düğmesini açın.

![Uzantıları yönet \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### Chrome sürüm 138 ve sonrası için

_Kullanıcı komut dosyalarına izin ver_ düğmesini etkinleştirmelisiniz. To do so, open the Chrome menu by clicking the three dots in the upper-right corner, go to _Extensions_ ⭢ _Manage extensions_, go to AdGuard Browser Extension’s _Details_, and toggle the _Allow user scripts_ switch.

![Uzantıları yönet \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
