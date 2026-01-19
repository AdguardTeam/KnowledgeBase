---
title: 'Kurulum'
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Mac için AdGuard hakkındadır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Sistem gereksinimleri

**Operating system version:** macOS 12 or later

**RAM:** en az 2 GB

**Tarayıcılar:** Safari, Chrome, Firefox, Opera, Yandex.Browser ve macOS uyumlu diğer tarayıcılar

**Boş disk alanı:** 120 MB

## Kurulum

To install AdGuard for Mac on your computer, launch your browser, type *adguard.com* in the address bar, and press **Download** [on the page that opens](https://adguard.com/download.html?auto=1).

![Download the app *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/1.jpg)

Wait for *AdguardInstaller.dmg* to download and double-click its icon in the list of downloaded files on the Dock panel.

![Dosyayı açmak için çift tıklayın](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

AdGuard simgesi masaüstünüzde görünür. Click it to open the installation app and double-click the AdGuard icon in the opened window.

![AdGuard simgesine çift tıklayın](https://cdn.adtidy.org/content/kb/ad_blocker/mac/3.jpg)

Upon the first AdGuard launch, your operating system will warn you that this application has been downloaded from the Internet. **Aç** öğesine tıklayın.

![Click Open](https://cdn.adtidy.org/content/kb/ad_blocker/mac/4.jpg)

Bir sonraki adımda, **Kur** öğesine tıklamanız gerekir.

![Yükle öğesine tıklayın](https://cdn.adtidy.org/public/Adguard/kb/installation/Mac/en/5.png)

Wait for the installer to download the required files.

![Gerekli dosyalar indirilene kadar bekleyin](https://cdn.adtidy.org/content/kb/ad_blocker/mac/6.jpg)

To use the application, you will need the administrator password for your macOS account. Enter the password when prompted in the dialogue box and press **OK**.

![Enter the password](https://cdn.adtidy.org/content/kb/ad_blocker/mac/7.jpg)

Now, you'll see a quick installation wizard where you'll be offered to configure protection to your needs. You can either start fine-tuning right away ("Let's do it!") veya şimdilik atlayın ("Olduğu gibi bırakın").

![Korumayı yapılandır](https://cdn.adtidy.org/content/kb/ad_blocker/mac/installation-wizard.jpg)

İşte buradayız, AdGuard Mac'inize kuruldu!

### Installation on older versions of macOS

Users with older versions of macOS (Big Sur 11, Catalina 10.15, or earlier) won’t find a compatible app version on the AdGuard Ad Blocker website — these OS versions are no longer supported in the latest releases.

Ancak, yine de [daha eski, uyumlu bir sürümü indirebilirsiniz](https://agrd.io/adguard_for_mac_v2-17)

## Uninstall

### Regular

Her şeyden önce, ilgili simgeye tıklayarak Finder uygulamasını açın:

![Open Finder](https://cdn.adtidy.org/public/Adguard/En/Articles/howtodelete/finder.png)

Uygulamalar bölümüne gidin. Find AdGuard there, right-click it and choose **Move to Trash**.

![Move AdGuard to Trash *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/11.jpg)

### Advanced

**Use this instruction only if you know what you are doing or if our support service specifically recommended you the 'advanced uninstall'. Ayrıca, önce "normal kaldırma" işlemindeki tüm adımları uygulayın.**

1. Bundan sonra, aşağıdaki AdGuard dosyalarını silin:
    - /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (klasör)
    - ~/Library/Preferences/com.adguard.mac.adguard.plist (dosya)
    - ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (klasör)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (dosya)
    - /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (dosya)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (dosya)
    - /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (dosya)

    Bunu yapmak için Terminal uygulamasını açın, ardından aşağıdaki komutları girin ve çalıştırın:

    ```bash
    sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"
    rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"
    rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist
    rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"
    find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist
    sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log
    sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log
    ```

1. **Etkinlik Monitörü** uygulamasını çalıştırın.
1. Arama aracını kullanarak **cfprefsd** hizmetini bulun.

    ![Run Activity Monitor](https://cdn.adtidy.org/content/kb/ad_blocker/mac/22.jpg)

1. Stop the process which is being run under the user (not the one run under root). To do so, click the process and then click X on the upper left. Confirm the action in the dialogue window.

    ![Confirm](https://cdn.adtidy.org/content/kb/ad_blocker/mac/33.jpg)

AdGuard artık bilgisayarınızdan kaldırılmıştır.
