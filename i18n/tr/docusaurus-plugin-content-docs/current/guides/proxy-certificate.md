---
title: Proxy sertifikası nasıl yüklenir
sidebar_position: 2
---

Masaüstü AdGuard uygulamaları (Windows için AdGuard ve Mac için AdGuard) proxy olarak kullanılabilir. Bu, diğer cihazların trafiğini (tamamen veya belirli uygulamaların/tarayıcıların trafiğini) AdGuard üzerinden yönlendirebileceğiniz anlamına gelir.

:::not

Bu cihazlar, AdGuard'ın kurulu olduğu PC veya Mac ile aynı ağda olmalıdır.

:::

HTTP trafiği her durumda filtrelenecektir, ancak AdGuard'ın HTTPS trafiğini filtreleyebilmesi için AdGuard sertifikasını bağlı cihaza elle yüklemeniz gerekir.

## How to download and install the certificate

Depending on the operation system of your device (Windows/Mac/Android/iOS), follow one of these instructions:

### Windows {#windows}

1. AdGuard'ın kurulu olduğu masaüstü bilgisayarınızın IP adresini not edin.

2. AdGuard'ın korumasının etkinleştirildiğinden emin olun. Ardından, ayarlarının **Ağ** sekmesinde **AdGuard'ı HTTP proxy olarak kullan** kutusunu işaretleyin.

3. AdGuard ile aynı cihazda herhangi bir tarayıcı kullanarak şu bağlantıyı takip edin: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. **İndir** düğmesine tıklayın.

5. İndirdiğiniz **cert.cer** dosyasını AdGuard üzerinden trafiği yönlendirmek istediğiniz cihaza aktarın.

6. Bu cihazda **Win** düğmesine basın, `Bilgisayar sertifikalarını yönetin` yazın ve **Enter** düğmesine basın.

7. On the *Certificates - Local Computer* page, find the *Trusted Root Certification* → *Certificates* folder.

8. *Sertifikalar* klasörüne sağ tıklayın ve **Tüm Görevler** → **Al** öğesine tıklayın.

9. *Sertifika Alma Sihirbazı* sayfasında, **Sonraki** öğesine tıklayın.

10. Sertifikayı içe aktarmak için **Gözat** öğesine tıklayın.

11. **cert.cer** sertifika dosyasına gidin, dosyayı seçin ve ardından **Aç** öğesine tıklayın.

12. **Sonraki** öğesine tıklayın.

13. Select the **Place all certificates in the following store** checkbox.

14. Ensure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

15. **Bitir** öğesine tıklayın.

16. **Win** tuşuna basın, ardından **Ayarlar** öğesini açın.

17. Select **Network & Internet** → **Proxy**.

18. Toggle *Automatically detect settings* off.

19. Click **Set up** in the *Use a proxy server* tab.

20. Turn the toggle on. For **Proxy IP address**, enter the noted IP address of your desktop computer (step 1). For **Port**, enter the port chosen in the network settings of the desktop AdGuard app.

21. **Kaydet** öğesine tıklayın.

### Mac {#mac}

1. AdGuard'ın kurulu olduğu masaüstü bilgisayarınızın IP adresini not edin.

2. AdGuard'ın korumasının etkinleştirildiğinden emin olun. Then go to **Settings** → **Network** → **HTTP proxy** and check the box **Use AdGuard as an HTTP proxy**.

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. **İndir** düğmesine tıklayın.

5. İndirdiğiniz **cert.cer** dosyasını AdGuard üzerinden trafiği yönlendirmek istediğiniz cihaza aktarın.

6. İndirilen sertifika dosyasına çift tıklayın.

7. Enter the administrator password and then click **Modify Keychain**.

8. Go to **Spotlight** (the search icon in the top right corner), type in "Keychain Access", and then select **Keychain Access** from the search results.

9. Under *System*, highlight the certificate that you added.

10. Right-click it and choose **Get Info** from the context menu.

11. Expand *Trust* to display the trust policies for the certificate.

12. Under *Secure Sockets Layers (SSL)*, select **Always Trust**.

13. **Sistem Tercihleri** → **Ağ** öğesini açın ve üstteki etkin bağlantıyı seçin.

14. Click **Details...** and navigate to the **Proxies** tab.

15. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, enter the noted IP address of your computer (step 1). In the **Port** field, enter the port chosen in the network settings of the AdGuard desktop app.

### Android {#android}

1. AdGuard'ın kurulu olduğu masaüstü bilgisayarınızın IP adresini not edin.

2. AdGuard'ın korumasının etkinleştirildiğinden emin olun. Ardından, ayarlarının **Ağ** sekmesinde **AdGuard'ı HTTP proxy olarak kullan** kutusunu işaretleyin.

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. **İndir** düğmesine tıklayın.

5. İndirdiğiniz **cert.cer** dosyasını AdGuard üzerinden trafiği yönlendirmek istediğiniz cihaza aktarın.

6. Locate and tap the previously downloaded **cert.cer** certificate to open the file.

7. Bazı telefonlarda, cihaz parolanızı girmeniz istenebilir. Bunu yapın, ardından **Tamam ** öğesine basın. Sertifika şimdi yüklenmiştir.

8. Open advanced settings of the active Wi-Fi network.

9. Switch the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer (step 1). For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.

### iOS {#ios}

1. AdGuard'ın kurulu olduğu masaüstü bilgisayarınızın IP adresini not edin.

2. AdGuard'ın korumasının etkinleştirildiğinden emin olun. Ardından, ayarlarının **Ağ** sekmesinde **AdGuard'ı HTTP proxy olarak kullan** kutusunu işaretleyin.

3. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. **İndir** düğmesine tıklayın.

5. İndirdiğiniz **cert.cer** dosyasını AdGuard üzerinden trafiği yönlendirmek istediğiniz cihaza aktarın.

6. Open **Settings** → **Security** → **Encryption & Credentials** → **Install a certificate**. Android devices do not trust certificates by default so there will be a warning when you choose **CA certificate**. **Yine de yükle** öğesine dokunun.

7. Open **Settings** → **Profile Donwloaded** and tap **Install** in the top right corner. Şifrenizi girin ve yüklemeyi onaylayın. Tap **Done**.

8. Go to **Settings** → **General** → **About** → **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. Sertifika şimdi yüklenmiştir.

9. Bu cihazda, etkin Wi-Fi ağının gelişmiş ayarlarını açın.

10. Switch the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your computer (step 1). For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.
