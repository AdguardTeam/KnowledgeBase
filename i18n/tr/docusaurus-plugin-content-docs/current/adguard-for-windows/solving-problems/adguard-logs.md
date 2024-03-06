---
title: AdGuard günlükleri nasıl toplanır
sidebar_position: 3
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Ortaya çıkabilecek farklı sorunları analiz etmek ve teşhis etmek için AdGuard destek hizmetinin AdGuard günlük dosyalarına ihtiyacı olabilir. Bu dosyalar, yazılımda meydana gelen hatalar ve diğer olaylarla ilgili kayıtları içerir. Below is the brief instruction describing the way to get the log files and send them to the support service if necessary.

1. AdGuard ayarlarını açın. *Genel Ayarlar* bölümüne gidin, ekranın sonuna kadar aşağı kaydırın ve *Günlük kayıt düzeyi* öğesini *Hata ayıklama* olarak değiştirin.

    ![Hata ayıklama günlük kayıt düzeyi *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Sorunu yeniden oluşturun.

    Sorunu yeniden oluşturduğunuz tam zamanı not almanızı önemle tavsiye ederiz: bu, destek ekibimizin ilgili günlük girdilerini bulmasına ve sorunu daha hızlı çözmesine yardımcı olur.

1. *Günlükleri dışa aktar* düğmesine kullanarak kaydedilen günlükleri dışa aktarın.

    ![Günlükleri dışa aktar *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Arşivi herhangi bir klasöre kaydedin.

1. **Önemli**: Günlükleri dışa aktardıktan sonra, günlük kayıt düzeyini tekrar *Varsayılan* olarak ayarlayın. *Hata ayıklama* günlük kayıt düzeyi uygulamayı yavaşlatır.

1. Arşivi **support@adguard.com** adresinden AdGuard destek servisine gönderin, sorunu açıklayın ve sorunu yeniden oluşturduğunuz zamanı belirtmeyi unutmayın.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send *trace* logs. Daha sonra aşağıdakileri yapmanız gerekir:

1. Tepsi menüsündeki AdGuard simgesine sağ tıklayıp *AdGuard'dan çık* öğesini seçerek AdGuard'ı durdurun:

    ![AdGuard'dan çık *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Lütfen servisi çalışır durumda bırakmayın:

    ![AdGuard Hizmetini Durdur *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Konsolu açın (başlat paneline `cmd` yazın).

1. Windows için AdGuard v7.16 veya sonraki bir sürümünü kurduysanız, uygulamayı `C:\"Program Files"\Adguard\Adguard.exe /trace` komutuyla Windows bitliğine bakmaksızın çalıştırın.

Windows için AdGuard'ın eski bir sürümüne sahipseniz, 64 bit Windows kullanıyorsanız uygulamayı C:\"Program Files (x86)"\Adguard\Adguard.exe /trace ve 32 bit kullanıyorsanız C:\"Program Files"\Adguard\Adguard.exe /trace komutuyla çalıştırın.

1. Sorunu yeniden oluşturun.

    Sorunu yeniden oluşturduğunuz tam zamanı not almanızı önemle tavsiye ederiz: bu, destek ekibimizin ilgili günlük girdilerini bulmasına ve sorunu daha hızlı çözmesine yardımcı olur.

1. *Günlükleri dışa aktar* düğmesine kullanarak kaydedilen günlükleri dışa aktarın.

    ![Günlükleri dışa aktar *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Günlük dosyası büyükse endişelenmeyin. Sorununuzu çözebilmemiz için mümkün olduğunca fazla ayrıntı bilmemiz gerekiyor.
