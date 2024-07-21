---
title: Moving the CA certificate to the system store on rooted devices
sidebar_position: 14
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Android için AdGuard [şifrelenmiş HTTPS trafiğini filtreleyebilir](/general/https-filtering/what-is-https-filtering), böylece sitelerdeki çoğu reklamı ve izleyiciyi engelleyebilir. On rooted devices, AdGuard also allows you to filter HTTPS traffic in apps. HTTPS filtreleme, AdGuard'ın CA sertifikasının güvenilir sertifikalar listesine eklenmesini gerektirir.

On non-rooted devices, CA certificates can be installed to the **user store**. Yalnızca sınırlı bir uygulama alt kümesi (çoğunlukla tarayıcılar) kullanıcı depolamasına yüklenen CA sertifikalarına güvenir, yani HTTPS filtreleme yalnızca bu tür uygulamalar için çalışır.

On rooted devices, you can install a certificate to the **system store**. Bu, AdGuard'ın diğer uygulamalardaki HTTPS trafiğini de filtrelemesini sağlar.

Here's how to do that.

## AdGuard'ın sertifikası sistem depolamasına nasıl yüklenir

1. *AdGuard → Ayarlar → Filtreleme → Ağ → HTTPS filtreleme → Güvenlik sertifikaları* öğesini açın.

1. Henüz sertifikanız yoksa, **AdGuard Personal CA'yı kullanıcı depolamasına yükleyin**. This will allow AdGuard to filter HTTPS traffic in browsers.

1. **AdGuard Intermediate CA'yı kullanıcı depolamasına yükleyin**. Sertifikaları sistem depolamasına taşımanıza olanak tanıyan adguardcert Magisk modülünü çalıştırmak için buna ihtiyacınız olacak.

    ![Install the certificate *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. [**adguardcert** Magisk modülünün son sürümünü](https://github.com/AdguardTeam/adguardcert/releases/latest/) yükleyin.

1. *Magisk → Modüller → Depolamadan yükle* öğesini açın ve indirilen **adguardcert** dosyasını seçin. Bu, AdGuard Personal CA'yı kullanıcı depolamasından sistem depolamasına taşır.

    ![Open Magisk modules *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Install from storage *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Select adguardcert *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. **Yeniden başlat** öğesine dokunun.

    ![Reboot the device *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

After the transfer, the **AdGuard Personal CA** in the system store will allow you to filter HTTPS traffic in apps, while the **AdGuard Intermediate CA** in the user store will allow you to filter HTTPS traffic in Chromium-based browsers (see below why).

## Chrome ve Chromium tabanlı tarayıcılarla ilgili bilinen sorunlar

Chrome ve diğer Chromium tabanlı tarayıcılar, sistem depolamasında bulunan sertifikalar için Sertifika Şeffaflığı (CT) günlüklerine ihtiyaç duyar. CT günlükleri, HTTPS filtreleme uygulamaları tarafından verilen sertifikalar hakkında bilgi içermez. Bu nedenle, AdGuard bu tarayıcılardaki HTTPS trafiğini filtrelemek için kullanıcı depolamasında ek bir sertifika gerektirir.

### Bromite browser

Yukarıdaki soruna ek olarak, Bromite varsayılan olarak kullanıcı depolamasındaki sertifikalara güvenmez. HTTPS trafiğini filtrelemek için Bromite'ı açın, `chrome://flags` adresine gidin ve *Allow user certificates* ayarını *Enabled* olarak yapın. **This applies to both rooted and non-rooted devices**.
