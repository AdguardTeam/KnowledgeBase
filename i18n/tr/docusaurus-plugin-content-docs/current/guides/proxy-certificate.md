---
title: Proxy sertifikası nasıl yüklenir
sidebar_position: 2
---

Masaüstü uygulamalarımız olan Windows için AdGuard ve Mac için AdGuard, diğer cihazlar için proxy olarak kullanılabilir. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

Bu cihazların AdGuard kurulu PC veya Mac ile aynı ağda olması gerekir.

:::

HTTP trafiği her durumda filtrelenecektir, ancak AdGuard'ın HTTPS trafiğini filtreleyebilmesi için AdGuard sertifikasını bağlı cihaza elle yüklemeniz gerekir.

## How to download and install the certificate

Trafiğini filtrelemek istediğiniz cihazın işletim sistemine bağlı olarak, aşağıdaki talimatlardan birini izleyin:

### Windows {#windows}

1. Note the IP address of your computer with AdGuard installed.

1. AdGuard korumasının etkin olduğundan emin olun. Windows bilgisayarda, ayarlarının **Ağ** öğesine **AdGuard'ı HTTP proxy olarak kullan** kutusunu işaretleyin. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. AdGuard ile aynı bilgisayarda şu bağlantıyı izleyin: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **İndir** düğmesine tıklayın. İndirme işlemi başlamazsa, Firefox gibi başka bir tarayıcı deneyin.

1. İndirilen **cert.cer** dosyasını, trafiğini AdGuard üzerinden yönlendirmek istediğiniz Windows cihazına aktarın. Bunu yapmak için bir USB kablosu, Bluetooth veya bulut hizmetleri kullanabilirsiniz.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. *Sertifikalar* klasörüne sağ tıklayın ve **Tüm Görevler** → **Al** öğesine tıklayın.

1. *Sertifika Alma Sihirbazı* sayfasında, **Sonraki** öğesine tıklayın.

1. Sertifikayı içe aktarmak için **Gözat** öğesine tıklayın.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Select the **Place all certificates in the following store** checkbox.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. **Bitir** öğesine tıklayın.

1. Press **Win**, then open **Settings**.

1. Select **Network & Internet** → **Proxy**.

1. Toggle *Automatically detect settings* off.

1. Click **Set up** in the *Use a proxy server* tab.

1. Turn the toggle on. For **Proxy IP address**, type the IP address of your computer that you noted in step 1. **Bağlantı noktası** için, masaüstü AdGuard uygulamasının ağ ayarlarında seçilen bağlantı noktasını girin.

1. **Kaydet** öğesine tıklayın.

### Mac {#mac}

1. Note the IP address of your computer with installed AdGuard.

1. AdGuard korumasının etkin olduğundan emin olun. Windows bilgisayarda, ayarlarının **Ağ** öğesine **AdGuard'ı HTTP proxy olarak kullan** kutusunu işaretleyin. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Web tarayıcısı kullanarak bu bağlantıyı izleyin: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **İndir** düğmesine tıklayın. İndirme işlemi başlamazsa, Firefox gibi başka bir tarayıcı deneyin.

1. İndirilen **cert.cer** dosyasını, trafiğini AdGuard üzerinden yönlendirmek istediğiniz Mac cihazına aktarın. Bunu yapmak için bir USB kablosu, Bluetooth veya bulut hizmetleri kullanabilirsiniz.

1. İndirilen sertifika dosyasına çift tıklayın.

1. Enter the administrator password and then click **Modify Keychain**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. *Sistem* altında, eklediğiniz sertifikayı vurgulayın.

1. Right-click it and select **Get Info** from the context menu.

1. Expand *Trust* to display the trust policies for the certificate.

1. Under *Secure Sockets Layers (SSL)*, select **Always Trust**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Click **Details...** and navigate to the **Proxies** tab.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. In the **Port** field, enter the port chosen in the network settings of the AdGuard desktop app.

### Android {#android}

1. Note the IP address of your computer with installed AdGuard.

1. AdGuard korumasının etkin olduğundan emin olun. Windows bilgisayarda, ayarlarının **Ağ** öğesine **AdGuard'ı HTTP proxy olarak kullan** kutusunu işaretleyin. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **İndir** düğmesine tıklayın. İndirme işlemi başlamazsa, Firefox gibi başka bir tarayıcı deneyin.

1. İndirilen **cert.cer** dosyasını, trafiğini AdGuard üzerinden yönlendirmek istediğiniz Android cihazına aktarın. Bunu yapmak için bir USB kablosu, Bluetooth veya bulut hizmetleri kullanabilirsiniz.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Bunu yapın, ardından **Tamam ** öğesine basın. Sertifika yüklenecektir.

1. Open advanced settings of the active Wi-Fi network.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your computer you noted in step 1. For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.

### iOS {#ios}

1. Note the IP address of your computer with installed AdGuard.

1. AdGuard korumasının etkin olduğundan emin olun. Windows bilgisayarda, ayarlarının **Ağ** öğesine **AdGuard'ı HTTP proxy olarak kullan** kutusunu işaretleyin. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. From the computer with AdGuard, follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **İndir** düğmesine tıklayın. İndirme işlemi başlamazsa, Firefox gibi başka bir tarayıcı deneyin.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. Bunu yapmak için bir USB kablosu, Bluetooth veya bulut hizmetleri kullanabilirsiniz.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Şifrenizi girin ve yüklemeyi onaylayın. Tap **Done**.

1. Go to **Settings** → **General** → **About** → **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. Sertifika şimdi yüklenmiştir.

1. Bu cihazda, etkin Wi-Fi ağının gelişmiş ayarlarını açın.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. For **Proxy port**, enter the port chosen in the network settings of the AdGuard desktop app.
