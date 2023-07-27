---
title: Güvenli bir klasöre sertifika yükleme
sidebar_position: 13
---

If you are using [the *Secure folder* on your Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/)(this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is that the *Secure folder* has its own space where the certificates are stored. However, if you do everything according to the instructions [described here](../../overview#https-filtering), the certificate will be installed into the main memory and will play no role for your ad blocker in the *Secure folder*. To solve this problem and install the certificate for your AdGuard for Android into the *Secure folder's* storage, please follow these instructions:

1. After installing the app and connecting the VPN, tap *Turn on* next to the *HTTPS filtering is off* message.
2. Tap *Next* → *Next* → *Save it now* → *Allow*.
3. Save the certificate (at this stage, you can rename it to make it easier to find).
4. After the *How to install a certificate?* popup appears, DO NOT tap *Open Settings*.
5. Minimize the app and go to the secure folder.
6. Tap the three-dot menu and go to additional security settings.
7. Tap *Install from memory* → *CA certificate* → *Install anyway* → Enter a graphic key/password/fingerprint → Find and select the saved certificate.
8. Return to the AdGuard app and close the "How to install a certificate?" popup by tapping the cross button.
9. Tamamlandı! The certificate has been installed.