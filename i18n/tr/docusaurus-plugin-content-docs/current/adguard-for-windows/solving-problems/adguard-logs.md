---
title: AdGuard günlükleri nasıl toplanır
sidebar_position: 3
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

:::note

Günlüklerde sağlanan veriler ve/veya dosyalar [AdGuard Gizlilik Politikasına](https://adguard.com/en/privacy.html) uygun olarak işlenir.

:::

Ortaya çıkabilecek farklı sorunları analiz etmek ve teşhis etmek için AdGuard destek hizmetinin AdGuard günlük dosyalarına ihtiyacı olabilir. These files contain records about errors and other events that occur with the software. Below is the brief instruction describing the way to get the log files and send them to the support service if necessary.

:::note

AdGuard gizliliğinizi korumaya kararlıdır. [Gizlilik Politikamıza](https://adguard.com/privacy/windows.html) kesinlikle uyuyoruz ve kullanıcılar hakkında herhangi bir özel bilgi toplamıyoruz. Günlüklerinizi destek ekibine göndermeden önce, paylaşmak istemediğiniz ek bilgiler içerebileceğinden lütfen dosyayı inceleyin. Bu tür kişisel bilgiler içeriyorsa öncelikle onu silmenizi öneririz.

:::

### Hata ayıklama günlükleri {#debug-logs}

1. AdGuard ayarlarını açın. Go to the *General Settings* section, scroll down to the bottom of the screen, and switch the *Logging Level* to *Debug*.

    ![Hata ayıklama günlük kayıt düzeyi *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Sorunu yeniden oluşturun.

    Sorunu yeniden oluşturduğunuz tam zamanı not almanızı önemle tavsiye ederiz: bu, destek ekibimizin ilgili günlük girdilerini bulmasına ve sorunu daha hızlı çözmesine yardımcı olur.

1. *Günlükleri dışa aktar* düğmesine kullanarak toplanan günlükleri dışa aktarın.

    ![Günlükleri dışa aktar *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Arşivi herhangi bir klasöre kaydedin.

1. **Important**: after exporting the logs, set the logging level back to *Default*. *Hata ayıklama* günlük kayıt düzeyi uygulamayı yavaşlatır.

1. Arşivi **support@adguard.com** adresinden AdGuard destek servisine gönderin, sorunu açıklayın ve sorunu yeniden oluşturduğunuz zamanı belirtmeyi unutmayın.

### İzleme günlükleri {#trace-logs}

Sometimes support team members may ask you to send *trace* logs. Daha sonra aşağıdakileri yapmanız gerekir:

1. Tepsi menüsündeki AdGuard simgesine sağ tıklayıp *AdGuard'dan çık* öğesini seçerek AdGuard'ı durdurun:

    ![AdGuard'dan çık *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Lütfen servisi çalışır durumda bırakmayın:

    ![AdGuard Hizmetini Durdur *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Konsolu açın (başlat paneline `cmd` yazın).

1. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Windows için AdGuard'ın eski bir sürümüne sahipseniz, 64 bit Windows kullanıyorsanız uygulamayı C:\"Program Files (x86)"\Adguard\Adguard.exe /trace ve 32 bit kullanıyorsanız C:\"Program Files"\Adguard\Adguard.exe /trace komutuyla çalıştırın.

1. Sorunu yeniden oluşturun.

    Sorunu yeniden oluşturduğunuz tam zamanı not almanızı önemle tavsiye ederiz: bu, destek ekibimizin ilgili günlük girdilerini bulmasına ve sorunu daha hızlı çözmesine yardımcı olur.

1. *Günlükleri dışa aktar* düğmesine kullanarak toplanan günlükleri dışa aktarın.

    ![Günlükleri dışa aktar *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Günlük dosyası büyükse endişelenmeyin. Sorununuzu çözebilmemiz için mümkün olduğunca fazla ayrıntı bilmemiz gerekiyor.
