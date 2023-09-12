---
title: How to create a dump file
sidebar_position: 8
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

To diagnose the reasons for potential problems that users might encounter while using AdGuard, the support team might need the process dump file. Döküm dosyası, geliştiricilerin belirli bir süre boyunca uygulamada yürütülen işlemleri görmesine yardımcı olur. Aşağıda döküm dosyasının PC'nizde nasıl toplanacağına ilişkin talimatları kontrol edebilirsiniz.

1. **Ctrl + Shift + Esc** tuşlarına basın ve **Görev Yöneticisi** öğesine tıklayın

1. Üst menü çubuğunda **Ayrıntılar** öğesine seçin

    ![Görev Yöneticisi ayrıntıları](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Döküm dosyasını oluşturmak istediğiniz işleme sağ tıklayın (örneğin, destek ekibi sizden `Adguard.exe` için bir döküm oluşturmanızı isteyebilir)

1. Açılır menüde **Döküm dosyası oluştur** öğesine tıklayın

1. Dosya başarıyla oluşturuldu!

    ![Döküm dosyası oluştur](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

Döküm dosyasını oluşturduktan sonra lütfen dosya konumuna gidin. Döküm dosyasının oluşturulduktan hemen sonra bulunduğu klasörü açmanız istenecektir. Aksi takdirde, **%tmp%** klasörünün içinde bulunabilecektir. Oluşturulan döküm dosyası (`.DMP`), önceki adımlarda seçtiğiniz işlemin adıyla aynı ada sahiptir. Dosya oldukça büyük olduğundan lütfen desteğe göndermeden önce dosyayı bir arşive sıkıştırın.

:::not

Windows için AdGuard'ın iki çalışan işlemi vardır (`Adguard.exe` ve `AdguardSvc.exe`). Bu nedenle her işlem için ayrı ayrı döküm dosyası oluşturmanız gerekir.

:::

![AdGuard hizmetleri](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Döküm dosyalarını destek ekibine gönderdiğinizde lütfen AdGuard uygulama günlüklerini de ekleyin, böylece sorunu çözme şansımız artar. [Burada](../adguard-logs) günlük dosyasının nasıl toplanacağına ilişkin talimatları kontrol edebilirsiniz.
