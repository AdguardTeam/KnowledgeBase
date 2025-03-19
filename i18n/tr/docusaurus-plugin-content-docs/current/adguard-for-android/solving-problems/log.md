---
title: Hata ayıklama günlükleri nasıl toplanır
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

:::not

Günlüklerde sağlanan veriler ve/veya dosyalar [AdGuard Gizlilik Politikasına](https://adguard.com/en/privacy.html) uygun olarak işlenir.

:::

Bu makalede, potansiyel olarak ortaya çıkabilecek karmaşık sorunları çözmek için önemli bir sorun giderme adımı olan hata ayıklama günlüklerini toplama sürecinde size rehberlik edeceğiz. Hata ayıklama günlükleri, Android için AdGuard'ın iç işleyişine ilişkin ayrıntılı bilgiler sağlar. If the AdGuard support team asks you to provide debug logs, simply follow these instructions.

:::not

AdGuard gizliliğinizi korumaya kararlıdır. [Gizlilik Politikamıza](https://adguard.com/privacy/android.html) kesinlikle uyuyoruz ve kullanıcılar hakkında herhangi bir özel bilgi toplamıyoruz. Günlüklerinizi destek ekibine göndermeden önce, paylaşmak istemediğiniz ek bilgiler içerebileceğinden lütfen dosyayı inceleyin. Bu tür kişisel bilgiler içeriyorsa öncelikle onu silmenizi öneririz.

:::

### Recording debug log

**hata ayıklama** günlüğünü toplamak ve bize göndermek için aşağıdaki adımları uygulamanız gerekir:

1. *Ayarlar* → *Genel* → *Gelişmiş* öğesine gidin.
1. *Günlük düzeyi* öğesine dokunun ve bunu *Hata ayıklama* olarak ayarlayın.
1. Sorunu yeniden oluşturun ve tam olarak ne zaman oluştuğunu hatırlamaya çalışın.
1. Bir süre bekleyin, ardından *Ayarlar* öğesibe dönün ve *Destek* sekmesini seçin. *Hata bildir* öğesine dokunun ve gerekli alanları doldurun. *Uygulama günlüklerini ve sistem bilgisini gönder* onay kutusunu işaretlemeyi unutmayın. Son olarak *Gönder* öğesine dokunun.

Sorununuzun çözümünü takip etmek ve geliştiricilerle diyalog kurmakla ilgileniyorsanız, ilk üç adımı tamamladıktan sonra aşağıdaki adımları uygulamanızı tavsiye ederiz:

1. Bir süre bekleyin, ardından *Gelişmiş* ekranına dönün ve *Günlükleri ve sistem bilgisini dışa aktar* aracılığıyla günlükleri dışa aktarın. Ardından, bu [talimatları](/guides/report-bugs.md) izleyerek GitHub'da bir hata bildirin.
1. After creating an issue on GitHub, send the log file to <devteam@adguard.com>. Hatanın zamanını ekleyin ve sorununuzun bağlantısını veya numarasını ekleyin (başlığın yanında #sayı olarak görünür). Alternatively, you can upload the log file to Google Drive and send it to <devteam@adguard.com>. Dosya bağlantısını GitHub sorununuza ekleyin
