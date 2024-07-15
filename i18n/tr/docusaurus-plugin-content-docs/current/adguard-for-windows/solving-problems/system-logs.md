---
title: Windows sistem günlükleri nasıl toplanır
sidebar_position: 5
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Ortaya çıkabilecek farklı sorunları analiz etmek ve teşhis etmek için AdGuard destek hizmetinin Windows sistem günlük dosyalarına ihtiyacı olabilir. Windows olay günlükleri, AdGuard da dahil olmak üzere yüklü yazılımda meydana gelen tüm hatalara ilişkin kayıtları içerir. Aşağıda günlük dosyalarını nasıl alacağınızı ve gerekirse destek servisimize nasıl göndereceğinizi açıklayan kısa talimat bulunmaktadır.

1. *Win + R* tuşlarına basın

1. Açılan pencerede `eventvwr` yazın ve *Tamam* öğesine tıklayın:

    ![Pencereyi çalıştır *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Olay Görüntüleyicisi penceresi resimde gösterildiği gibi görünür.

    ![Olay görüntüleyicisi *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    İhtiyacımız olan dosyaları kaydetmek için aşağıdakileri yapın:

    - *Uygulama* öğesini açın: *Olay Görüntüleyicisi (Yerel)* → *Windows Günlükleri* → *Uygulama*.

    - *Uygulama* öğesine sağ tıklayın ve açılır menüden *Tüm Olayları Farklı Kaydet...* öğesini seçin

    - Bir ad ve nereye kaydedileceğini seçin, *Kaydet* öğesine tıklayın. *Aşağıdaki diller için bilgileri görüntüle* öğesini seçin. *İngilizce* öğesinin yanındaki onay kutusunu işaretlemeniz gerekir. *Tamam* öğesine tıklayın.

    - Open *System*: *Event Viewer (Local)* → *Windows Logs* → *System*.

    - *Sistem* öğesine sağ tıklayın ve açılır menüden *Tüm Olayları Farklı Kaydet...* öğesini seçin

    - Choose a destination folder, enter the name, click *Save*. *Aşağıdaki diller için bilgileri görüntüle* öğesini seçin. *İngilizce* öğesinin yanındaki kutuyu işaretlemeniz gerekir. *Tamam* öğesine tıklayın.

Lütfen yakın zamanda kaydettiğiniz iki dosyayı **support@adguard.com** adresine gönderin.
