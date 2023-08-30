---
title: Windows sistem günlükleri nasıl toplanır
sidebar_position: 5
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

Ortaya çıkabilecek farklı sorunları analiz etmek ve teşhis etmek için AdGuard destek hizmetinin Windows sistem günlük dosyalarına ihtiyacı olabilir. Windows olay günlükleri, AdGuard da dahil olmak üzere yüklü yazılımda meydana gelen tüm hatalara ilişkin kayıtları içerir. Aşağıda günlük dosyalarını nasıl alacağınızı ve gerekirse destek servisimize nasıl göndereceğinizi açıklayan kısa talimat bulunmaktadır.

1. *Win + R* tuşlarına basın

1. Açılan pencerede `eventvwr` yazın ve *Tamam* öğesine tıklayın:

    ![Pencereyi çalıştır *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Olay Görüntüleyicisi penceresi resimde gösterildiği gibi görünür.

    ![Olay görüntüleyicisi *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    İhtiyacımız olan dosyaları kaydetmek için aşağıdakileri yapın:

    - *Uygulama* öğesini açın: *Olay Görüntüleyicisi (Yerel)* → *Windows Günlükleri* → *Uygulama*.

    - Right-click *Application* and in the drop-down menu select *Save All Events As...*

    - Select a name and where to save, click *Save*. Select *Display information for the following languages*. You need to tick the box next to *English*. *Tamam* öğesine tıklayın.

    - Open *System*: *Event Viewer (Local)* → *Windows Logs* → *System*.

    - *Sistem* öğesine sağ tıklayın ve açılır menüden *Tüm Olayları Farklı Kaydet...* öğesini seçin

    - Choose a destination folder, enter the name, click *Save*. Select *Display information for the following languages*. You need to tick the box next to *English*. *Tamam* öğesine tıklayın.

Please send the two files that you've recently saved to **support@adguard.com**.
