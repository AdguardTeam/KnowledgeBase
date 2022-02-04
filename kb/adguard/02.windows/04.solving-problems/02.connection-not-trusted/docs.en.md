---
title: '"Potential Security Risk" error'
taxonomy:
    category:
        - docs
visible: true
---

The "Potential security risk ahead" error is most commonly encountered in Firefox-based browsers like Mozilla Firefox, PaleMoon, Waterfox and such.

Starting with v68, under certain conditions Firefox normally trusts certificates from the system storage. However, sometimes for reasons outside of our control the trust mechanism faults, which leads to the "Connection is untrusted" error. To fix it, it's necessary to download AdGuard certificate and install it to Firefox's local storage manually. To do so, follow these steps:

>This instruction is for Firefox browser. Names of buttons and menu items may differ in other Firefox-based browsers.

1) Run AdGuard.

2) Go to [http://local.adguard.org/cert](http://local.adguard.org/cert) and click the *Download* button. The browser should start downloading **cert.cer** file.

>You can also open the download page by clicking on the link via the AdGuard app at *Settings - Network - HTTPS filtering*.