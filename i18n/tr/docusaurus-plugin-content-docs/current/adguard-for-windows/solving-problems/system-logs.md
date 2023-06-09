---
title: How to collect Windows system logs
sidebar_position: 5
---

:::note

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

To analyse and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. Windows event logs contain records about all errors that occurr with the installed software, including AdGuard. Below is the brief instruction describing the way to get the log files and to send them to our support service if necessary.

1. Press *Win + R*

2. Açılan pencerede `eventvwr` yazın ve *Tamam* öğesine tıklayın:

![Run window *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

3. Event Viewer window appears as shown in the picture.

![Event viewer *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

To save files that we need, do the following:

- *Uygulama* öğesini açın: *Olay Görüntüleyicisi (Yerel)* → *Windows Günlükleri* → *Uygulama*.

- Right-click *Application* and in the drop-down menu select *Save All Events As...*

- Select a name and where to save, click *Save*. Select *Display information for the following languages*. You need to tick the box next to *English*. Click *OK*.

- Open *System*: *Event Viewer (Local)* → *Windows Logs* → *System*.

- *Sistem* öğesine sağ tıklayın ve açılır menüden *Tüm Olayları Farklı Kaydet...* öğesini seçin

- Choose a destination folder, enter the name, click *Save*. Select *Display information for the following languages*. You need to tick the box next to *English*. Click *OK*.

Please send the two files that you've recently saved to **support@adguard.com**.
