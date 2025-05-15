---
title: Sertifika ile ilgili konular
sidebar_position: 2
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

HTTPS trafiğini filtreleyebilmek, reklamları ve izleyicileri etkili bir şekilde engelleyebilmek için AdGuard, özel (ve benzersiz) bir kök sertifika oluşturur ve bunu sistem depolama alanına yükler. Sertifikanın neden gerekli olduğu hakkında daha fazla bilgi edinmek için [bu makaleyi](/general/https-filtering/what-is-https-filtering) okuyabilirsiniz.

Normalde tarayıcılar, kurulum işlemi sırasında sistem sertifika depolama alanına eklendiğinde AdGuard sertifikasına güvenir. Ancak bazı durumlarda bu yeterli olmaz ve uyarı veya hatalarla karşılaşabilirsiniz. Bu durum çoğunlukla Mozilla Firefox, PaleMoon, Waterfox, vb. gibi Firefox tabanlı tarayıcılarda veya Yandex.Browser'da meydana gelir.

## *Potential Security Risk* error in Firefox-based browsers

![Güvenlik riski hatası](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Eski FireFox sürümleri ve bunları temel alan tarayıcılar, sistem depolamasındaki sertifikalara değil, yalnızca kendi yerel depolamasındaki sertifikalara güvenir. Since v68, FireFox trusts the system certificates, but you still can face the "Connection is untrusted" error. Böyle bir şey olursa, önce *Sertifikayı Yeniden Yükle* düğmesine tıklamayı deneyin — bunu *Ağ* sekmesinde bulabilirsiniz.

![Sertifikayı yeniden yükle](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Bu işe yaramazsa, AdGuard sertifikasını FireFox depolamasına elle eklemek için talimatları izleyin.

> Bu talimat Firefox tarayıcısı içindir. Names of buttons and menu items may differ in other Firefox-based browsers.

1. AdGuard'ı çalıştırın.

1. [http://local.adguard.org/cert](http://local.adguard.org/cert) adresine gidin ve *İndir* düğmesine tıklayın. Tarayıcı **cert.cer** dosyasını indirmeye başlamalıdır.

    :::note

    İndirme sayfasını AdGuard uygulaması üzerinden *Ayarlar → Ağ → HTTPS filtreleme* öğesindeki bağlantıya tıklayarak da açabilirsiniz.


:::

    ![Sertifika ayarları](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Tarayıcınızı açın ve ardından *Ayarlar* öğesini açın.

1. *Gizlilik ve Güvenlik* sekmesine gidin.

1. *Sertifikalar* öğesine ilerleyin ve *Sertifikaları göster* düğmesine tıklayın.

    ![Sertifikaları göster penceresi](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. *Makamlar* sekmesini seçin.

1. *İçe aktar...* öğesine tıklayın.

    ![Sertifika ayarları — içe aktarma](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. İndirilen **cert.cer** dosyasına göz atın ve *Aç* öğesine tıklayın.

1. *Web sitelerini tanımlamak için bu CA'ya güven* kutusunu işaretleyin ve ardından *Tamam* öğesini tıklatın.

    ![Sertifika ayarları — onay kutusu](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

AdGuard sertifikasını başarıyla yüklediniz. Tarayıcıyı yeniden başlatın; hata ortadan kalkmalıdır.

## Yandex.Browser sertifika uyarısı

Hem Windows için AdGuard hem de Yandex.Browser kullanıcısıysanız şu uyarıyla karşılaşmış olabilirsiniz:

![Yandex sertifika uyarısı](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Bu neden oluyor

Hem AdGuard hem de Yandex, kullanıcıların internetteki güvenliğini çok ciddiye alıyor. Yandex'in mevcut politikası, kullanıcılarını tarayıcı tarafından tanınmayan sertifikalar konusunda uyarmaktır. Bu kanıtlanmamış bir durum değildir, çünkü bazen kötü amaçlı uygulamalar kendi sertifikalarını enjekte edebilir ve bunu sisteme zarar vermek ve özel verileri çalmak için kullanabilir.

Ancak AdGuard, sertifikasını da güvenilir olanların arasına ekler. Bu karşılaştığınız uyarı mesajına yol açar.

### Sorun nasıl çözülür

En kolay yol, **Siteye git** düğmesine tıklamaktır. Bu, Yandex.Browser'a AdGuard sertifikasını en azından bir süreliğine güvenilir sertifika olarak hatırlamasını söyler. Normalde bu mesajı artık görmeniz gerekmez, ancak herhangi bir nedenle ara sıra görünmesi olasılık dışı değildir. Bu gibi durumlarda aynı düğmeye tekrar basmanız yeterlidir *(AdGuard sertifikası olduğundan emin olun!)*.

AdGuard'da HTTPS filtrelemesini devre dışı bırakmak Yandex.Browser'ın bu mesajı tekrar göstermesini de engeller, ancak bunun büyük bir bedeli vardır: HTTPS ile yüklenen tüm reklamlar (**Yandex'in kendi reklamları** dahil) YouTube, Facebook, Instagram ve daha birçok sitede görünür. Reklam engelleme kalitesini yüksek tutmak istiyorsanız kesinlikle bunu yapmamanızı öneririz.
