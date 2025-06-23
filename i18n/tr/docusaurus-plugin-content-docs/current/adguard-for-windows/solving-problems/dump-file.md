---
title: Döküm dosyası nasıl oluşturulur
sidebar_position: 8
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

:::not

Data and files provided in dump files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

If you experience an issue while using AdGuard, the support team may ask you to provide a dump file. This file helps developers see what processes were running in the app at the time and identify the cause of the problem.

Follow these steps to create a dump file:

1. Press *Ctrl + Shift + Esc* to open *Task Manager*.

1. Sol kenar çubuğunda *Ayrıntılar* öğesine tıklayın. ![Görev Yöneticisi ayrıntıları *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/task_manager_en.png)
1. Döküm dosyası oluşturmak istediğiniz işleme sağ tıklayın. Açılır menüde *Bellek yedekleme dosyası oluştur* öğesine tıklayın. ![Döküm dosyası oluştur *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/create_dump_en.png)
1. Döküm dosyası oluşturulduktan sonra, kaydedildiği klasörü açmanız istenecektir. İstenmezse, **%tmp%** klasöründe bulabilirsiniz. ![Dosya konumunu aç *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/open_file_location_en.png)

Oluşturulan döküm dosyası (`.DMP`) seçtiğiniz işlemle aynı ada sahip olur.

:::note

Windows için AdGuard iki işlem çalıştırır: `Adguard.exe` ve `AdguardSvc.exe`. Her biri için ayrı bir döküm dosyası oluşturmanız gerekir.

:::

![İki işlem *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/dump_file/new/two_processes_en.png)

Döküm dosyaları büyük olabileceğinden, lütfen bunları desteğe göndermeden önce bir arşive sıkıştırın. Ayrıca, sorunu daha etkili bir şekilde teşhis etmemize yardımcı olması için AdGuard günlüklerini de ekleyin. [Günlükleri toplamak için talimatlar](../adguard-logs).
