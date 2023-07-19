---
title: Local.adguard.org alan adı
sidebar_position: 3
---

Users of AdGuard for Windows, Mac, and Android may notice that AdGuard adds a small script to every web page, that is loaded from the `local.adguard.org` domain.

First of all, don't worry, this is not a real domain, and there is actually no real server with that name. This domain is used to apply cosmetic filtering to web pages, but everything is done locally right on your device without connecting to any server.

### Teknik açıklama

Ama neler oluyor ve bu neden yapılıyor? Lütfen aşağıdaki teknik açıklamayı okuyunuz.

1. AdGuard is a network-level content blocker so it cannot simply add custom JavaScript and CSS to webpages like what browser extensions do. However, doing this is crucial for quality content blocking.
2. In order to do it AdGuard injects a "content script" that looks like this: `<script src="https://local.adguard.org/.../content-script.js">`. This "content script" takes care of cosmetic filtering, hides or removes ad content from the web pages.
3. Connections to the IP address of the `local.adguard.org` domain are intercepted by AdGuard on the network level and **processed locally**. This is why that domain has a "static" IP address that does not change for years.

**Bunun için neden gerçek bir IP adresi kullanmamız gerekiyor?**

* Tarayıcılar kabul etmeyeceği için `127.0.0.1` adresini kullanamayız.
* Using some IP address from the private subnets is possible, but this solution has two downsides.
    * First, there is a slight chance of intersecting with an existing intranet service and breaking access to it.
    * Second, some DNS servers may consider this a DNS rebinding attack and refuse to respond to `local.adguard.org`.

### Verification

Bunu doğrulamak kolaydır. If you disable AdGuard, you'll see that it is simply impossible to establish connection to `local.adguard.org` since there is no server with that address. AdGuard devre dışı bırakıldığında tarayıcınızda açmayı deneyin.