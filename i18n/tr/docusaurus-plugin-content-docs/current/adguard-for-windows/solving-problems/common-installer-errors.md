---
title: Yaygın kurulum programı hataları
sidebar_position: 6
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Bu makale, Windows için AdGuard kurulumu sırasında karşılaşabileceğiniz en yaygın hatalardan bazılarını ve bunları çözmenin olası yollarını içerir.

### Hata 5: Erişim Reddedildi {#error-5}

This error message appears when required permissions haven't been granted. AdGuard kurulum programının, kurma işlemini düzgün bir şekilde tamamlamak için ihtiyaç duyduğu izinlere sahip olmamasının birkaç farklı nedeni olabilir. Aşağıdaki adımları deneyebilirsiniz:

- Temporarily disable your antivirus. Bazıları, ayarlarının ciddiyetine bağlı olarak kuruluma müdahale edebilir.

- Farklı bir kurulum klasörü seçin. Mevcut kurulum klasörünün bazı erişim kısıtlamaları olabilir. Ayrıca harici sürücü, sanal sürücü, vb. seçmediğinizden emin olun.

- Bilgisayarınızı yeniden başlatın. Bazen izin sorunları geçicidir ve bilgisayarı yeniden başlatarak çözülebilir.

### Hata 112: Disk dolu, Hata 1632: Geçici klasör dolu veya erişilemiyor {#error-112}

Bunlar çok benzer çözümlere sahip iki farklı hatadır. As their titles suggest, AdGuard installer didn't find enough disk space to complete the installation. Sorunu çözmek için deneyebileceğiniz birkaç şey var:

- AdGuard'ı kurmaya çalıştığınız sürücüden bazı programları kaldırın veya gereksiz dosyaları silin.

- Malwarebytes'in ücretsiz bir yazılımı olan [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/) yazılımını indirin, kurun ve çalıştırın. It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstalled programs and such. Biraz disk alanı temizlemeye yardımcı olur.

- Bilgisayarınızı yeniden başlatın. Bazen geçici dosyalar önemli miktarda disk alanı kaplayabilir ve PC'nizi yeniden başlatmak bunlardan kurtulmanın en güvenilir yoludur.

### Hata 1601: Windows Installer Hizmetine Erişilemiyor {#error-1601}

You could say this is a particular subcategory of Error 1603. Olası çözümler benzerdir:

- Microsoft Installer hizmetini başlatın ve yeniden kaydettirin. Bu biraz uğraş gerektirir.

    1) *Win + R* tuşlarına basın ve **services.msc** yazın. 2) Listeden *Windows Installer* öğesini bulun ve çift tıklayın. 3) *Hizmet durumu* altındaki *Başlat* düğmesine basın ve *Tamam* öğesine basın. Hizmet durumu **çalışıyor** ise, önce *Durdur* öğesine ve ardından *Başlat* öğesine tıklamalısınız. 4) *Win + R* tuşlarına basın, ***msiexec /unregister*** yazın ve *Enter* düğmesine basın. 5) *Win + R* tuşlarına tekrar basın, ***msiexec /regserver*** yazın ve *Enter* düğmesine basın

- PC'yi yeniden başlatın ve kurulumu baştan başlatın. Bazen sorunu çözmek için bu yeterli olur.

### Hata 1602: Kullanıcı tarafından iptal edildi {#error-1602}

Bu hata kodunu aldıysanız, kurma işlemini bir şekilde elle kesintiye uğratmış olabilirsiniz. Yapabileceğiniz şey:

- Kurulum programı penceresini kapatmayın. Kurulum tamamlandığında otomatik olarak kapanır.

- Kurma sırasında bir diyalog penceresi açılırsa, kurulum programına gerekli izinleri vermek için "Evet" öğesine basın. "Hayır" öğesine tıklandığında kurulum iptal edilir.

- Kurulum devam ederken başka işlemler başlatmayın.

### Hata 1603: Kurulum sırasında kritik hata oluştu {#error-1603}

Hata kulağa gerçekte olduğundan daha korkutucu geliyor. Gerçekte bu, birçok farklı nedeni olabilen oldukça genel bir hatadır ve bazıları kolayca düzeltilebilir. Aşağıdaki çözümleri deneyin:

- *Win* tuşuna basın, *Komut İstemi* öğesini arayın ve çalıştırın. Orada, `sfc /scannow` yazın ve *Enter* düğmesine basın.

- Farklı bir kurulum klasörü seçin. Mevcut kurulum klasörünün bazı erişim kısıtlamaları olabilir. Ayrıca harici sürücü, sanal sürücü, vb. seçmediğinizden emin olun.

- Özel [kaldırma aracımızı](../../installation#advanced) kullanarak AdGuard'ı kaldırın ve ardından kurulumu tekrarlayın.

- Microsoft Installer hizmetini başlatın ve yeniden kaydettirin. Bu biraz uğraş gerektirir.

    1) *Win + R* tuşlarına basın ve ***services.msc*** yazın. 2) Listeden *Windows Installer* öğesini bulun ve çift tıklayın. 3) *Hizmet durumu* altındaki *Başlat* düğmesine basın ve *Tamam* öğesine basın. Hizmet durumu **çalışıyor** ise, önce *Durdur* öğesine ve ardından *Başlat* öğesine tıklamalısınız. 4) *Win + R* tuşlarına basın, ***msiexec /unregister*** yazın ve *Enter* düğmesine basın. 5) *Win + R* tuşlarına tekrar basın, ***msiexec /regserver*** yazın ve *Enter* düğmesine basın

- Kurulum için sürücüde tam izinleri alın. Dosya konumunda tam izinlere sahip olmadığınız için 1603 hatasının oluşması olasıdır. Ayrıca diğer bazı çözümler kadar kolay değildir:

    1) *Dosya Gezgini* öğesini açın, kurulum konumunu içeren sürücüye sağ tıklayın ve *Özellikler* öğesini seçin. 2) *Güvenlik* sekmesine gidin ve *Düzenle* öğesine tıklayın. 3) *SYSTEM* öğesine tek tıklayın ve *İzin ver* kutusundaki her öğenin *SİSTEM için izinler* işaretli olduğundan emin olun (işaretlenebilirse). Aynı kontrolü *Administrators* için de yapın. 4) *Özellikler* uyarı kutusuna geri dönmek için *Tamam* öğesine tıklayın. Ardından *Gelişmiş* öğesine tıklayın. 5) *İzinleri Değiştir* öğesine tıklayın. 6) *İzinler* sekmesinde, *Yöneticiler* öğesine çift tıklayın. 7) *Uygulandığı öğe* alanı için *Bu klasör, alt klasörler ve dosyalar* öğesini seçin ve mevcut tüm *Temel izinleri* işaretleyin. Bundan sonra *Tamam* öğesine basın. 8) *SYSTEM* için yukarıdaki (madde 7'den itibaren) aynı işlemi yapın. 9) Sonuna kadar *Tamam* öğesine tıklayın. AdGuard'ı yeniden kurmayı deneyin.

### Hata 1618: Başka bir kurulum zaten devam ediyor {#error-1618}

Bu hata, aynı anda başlatılan birkaç AdGuard kurulum programı olduğunda ortaya çıkar. Bu hatayı alırsanız yapmanız gerekenler:

- PC'yi yeniden başlatın ve kurulum programını tekrar başlatın. Bilgisayarı yeniden başlattığınızda, kurulum programının tüm kopyaları dahil devam eden tüm işlemler durur.

- Don't make multiple clicks on the installer even if it doesn't start right away. Bazen kurulum programı kullanıcı arayüzünün görüntülenmesi birkaç saniye sürebilir.

### Error 1638: Bu ürünün başka bir sürümü zaten kurulu {#error-1638}

Daha önce AdGuard kurmuş olmanız çok olasıdır.

- AdGuard'ın bilgisayarınızda kurulu olup olmadığını kontrol edin. Bunu *Win* tuşuna basarak ve ***AdGuard*** yazarak yapabilirsiniz.

- Maybe there're some leftover files from a previous AdGuard installation. Özel [kaldırma aracımızı](../../installation#advanced) kullanarak AdGuard'ı kaldırın ve ardından kurulumu tekrarlayın.

### Diğer hatalar {#other}

Yukarıda listelenmeyen bir hatayla karşılaştıysanız, bunu kendimiz çözmemiz mümkündür. Ancak bunu yapabilmek için sizden günlük dosyalarına ihtiyacımız var. Lütfen aşağıdaki adımları uygulayın:

- Find and archive the **AdGuard installation logs** as it is described in [this article](../installation-logs).

- Find and save to disk the **Event Viewer** logs. [Bu makale](../system-logs) bunun nasıl yapılacağını açıklar.

- Please email all these files from two previous steps to the support team at **support@adguard.com** and describe the problem in the message body. Teknik destek temsilcilerimiz size mümkün olan en kısa sürede cevap verir.
