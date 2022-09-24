---
title: Potential security risk error
sidebar_position: 2
---

If you are a user of both AdGuard for Windows and Yandex.Browser you may have come across this warning:

[Yandex certificate warning] (yandex-cert-en.png)

### Why is this happening

It may look scary, but in reality there is no reason to rush and uninstall either of the programs. Let us explain why.

Both AdGuard and Yandex take users' security on the Internet very seriously. Current Yandex policy is to warn their users about any certificate that is not recognized by the browser. This is not unsubstantiated, because sometimes malicious apps can inject their own certificates and use this to harm the system and steal private data. 

However, AdGuard also adds its certificate to the trusted ones to be able to filter all traffic and efficiently block ads. This leads to the warning message you have encountered.

### What to do?

The easiest way is to click on the **'Go to site'** button. This will tell Yandex.Browser to remember AdGuard certificate as a trusted one, at least for a while. Normally, you won't have to see this message anymore, but it is not beyond the realm of possibility for it to appear occasionally, for whatever reasons. In such cases, simply press the same button again *(make sure it is AdGuard's certificate!)*.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex own ads**) will show up - on such websites as YouTube, Facebook, Instagram, and many more. We strongly advise against it if you want to keep the quality of ad blocking high.


## Firefox issues

![Security risk error](https://cdn.adguard.com/public/Adguard/kb/en/certificate/cert_error_en.png)


The "Potential security risk ahead" error is most commonly encountered in Firefox-based browsers like Mozilla Firefox, PaleMoon, Waterfox and such.

Starting with v68, under certain conditions Firefox normally trusts certificates from the system storage. However, sometimes for reasons outside of our control the trust mechanism faults, which leads to the "Connection is untrusted" error. To fix it, it's necessary to download AdGuard certificate and install it to Firefox's local storage manually. To do so, follow these steps:

>This instruction is for Firefox browser. Names of buttons and menu items may differ in other Firefox-based browsers.

1) Run AdGuard.

2) Go to [http://local.adguard.org/cert](http://local.adguard.org/cert) and click the *Download* button. The browser should start downloading **cert.cer** file.

>You can also open the download page by clicking on the link via the AdGuard app at *Settings - Network - HTTPS filtering*.

![Certificate settings](https://cdn.adguard.com/public/Adguard/kb/en/certificate/cert_win_en.png)

3) Open your browser and then open *Settings*.

4) Go to *Privacy & Security* tab.

5) Scroll down to *Certificates* and click on the *View Certificates* button.

![View certificates window](https://cdn.adguard.com/public/Adguard/kb/en/certificate/cert_import_en.png)

6) Select *Authorities* tab.

7) Click *Import...*.

![Certificate settings - import](https://cdn.adguard.com/public/Adguard/kb/en/certificate/cert_settings_en.png)

8) Browse the downloaded **cert.cer** file and click *Open*.

9) Click *OK*.

You've successfully installed AdGuard certificate. Restart the browser and the error should go away.
