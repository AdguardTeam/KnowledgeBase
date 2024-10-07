---
title: Döküm dosyası nasıl oluşturulur
sidebar_position: 8
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

:::not

Döküm dosyalarında sağlanan veriler ve/veya dosyalar [AdGuard Gizlilik Politikasına](https://adguard.com/en/privacy.html) uygun olarak işlenir.

:::

Kullanıcıların AdGuard'ı kullanırken karşılaşabilecekleri olası sorunların nedenlerini teşhis etmek için, destek ekibi işlem döküm dosyasına ihtiyaç duyabilir. Döküm dosyası, geliştiricilerin belirli bir süre boyunca uygulamada yürütülen işlemleri görmesine yardımcı olur. Aşağıda döküm dosyasının PC'nizde nasıl toplanacağına ilişkin talimatları kontrol edebilirsiniz.

1. **Ctrl + Shift + Esc** tuşlarına basın ve **Görev Yöneticisi** öğesine tıklayın

1. Üst menü çubuğunda **Ayrıntılar** öğesine seçin

    ![Görev Yöneticisi ayrıntıları](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Döküm dosyasını oluşturmak istediğiniz işleme sağ tıklayın (örneğin, destek ekibi sizden `Adguard.exe` için bir döküm oluşturmanızı isteyebilir)

1. Açılır menüde **Döküm dosyası oluştur** öğesine tıklayın

1. Dosya başarıyla oluşturuldu!

    ![Döküm dosyası oluştur](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

Döküm dosyasını oluşturduktan sonra lütfen dosya konumuna gidin. Döküm dosyasının oluşturulduktan hemen sonra bulunduğu klasörü açmanız istenecektir. Aksi takdirde, **%tmp%** klasörünün içinde bulunabilecektir. Oluşturulan döküm dosyası (`.DMP`), önceki adımlarda seçtiğiniz işlemin adıyla aynı ada sahiptir. Dosya oldukça büyük olduğundan lütfen desteğe göndermeden önce dosyayı bir arşive sıkıştırın.

:::not

AdGuard for Windows has two running processes, `Adguard.exe` and `AdguardSvc.exe`. Therefore, it's necessary to create a separate dump file for each process.

:::

![AdGuard hizmetleri](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Döküm dosyalarını destek ekibine gönderdiğinizde lütfen AdGuard uygulama günlüklerini de ekleyin, böylece sorunu çözme şansımız artar. [Here](../adguard-logs) you can check the instructions on how to get the log file.
