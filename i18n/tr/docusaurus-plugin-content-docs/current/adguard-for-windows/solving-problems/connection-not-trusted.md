---
title: Sertifika ile ilgili konular
sidebar_position: 2
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

HTTPS trafiğini filtreleyebilmek, reklamları ve izleyicileri etkili bir şekilde engelleyebilmek için AdGuard, özel (ve benzersiz) bir kök sertifika oluşturur ve bunu sistem depolama alanına yükler. Sertifikanın neden gerekli olduğu hakkında daha fazla bilgi edinmek için [bu makaleyi](/general/https-filtering/what-is-https-filtering) okuyabilirsiniz.

Normalde tarayıcılar, kurulum işlemi sırasında sistem sertifika depolama alanına eklendiğinde AdGuard sertifikasına güvenir. Ancak bazı durumlarda bu yeterli olmaz ve uyarı veya hatalarla karşılaşabilirsiniz. Bu durum çoğunlukla Mozilla Firefox, PaleMoon, Waterfox, vb. gibi Firefox tabanlı tarayıcılarda veya Yandex.Browser'da meydana gelir.

## *Potential Security Risk* error in Firefox-based browsers

![Güvenlik riski hatası](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Old FireFox versions, as well as browsers based on them, do not trust certificates from the system storage, but only those from their local storage. Since v68, FireFox trusts the system certificates, but you still can face the "Connection is untrusted" error. If something like this happens, first try to click the *Reinstall Certificate* button — you will find it in the *Network* tab.

![Sertifikayı yeniden yükle](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

If that doesn't help, follow the instructions for manually adding the AdGuard certificate to the FireFox storage.
> This instruction is for Firefox browser. Names of buttons and menu items may differ in other Firefox-based browsers.

1. Run AdGuard.

1. Go to [http://local.adguard.org/cert](http://local.adguard.org/cert) and click the *Download* button. The browser should start downloading **cert.cer** file.
> You can also open the download page by clicking on the link via the AdGuard app at *Settings → Network → HTTPS filtering*.

![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Open your browser and then open *Settings*.

1. Go to *Privacy & Security* tab.

1. *Sertifikalar* öğesine ilerleyin ve *Sertifikaları Görüntüle* düğmesine tıklayın.

![Sertifikaları görüntüle penceresi](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Select *Authorities* tab.

1. Click *Import...*.

![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Browse the downloaded **cert.cer** file and click *Open*.

1. Check the *Trust this CA to identify websites* box and then lick *OK*.

![Sertifika ayarları — onay kutusu](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

AdGuard sertifikasını başarıyla yüklediniz. Tarayıcıyı yeniden başlatın; hata ortadan kalkmalıdır.

## Yandex.Browser sertifika uyarısı

Hem Windows için AdGuard hem de Yandex.Browser kullanıcısıysanız şu uyarıyla karşılaşmış olabilirsiniz:

![Yandex sertifika uyarısı](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Bu neden oluyor

Hem AdGuard hem de Yandex, kullanıcıların internetteki güvenliğini çok ciddiye alıyor. Yandex'in mevcut politikası, kullanıcılarını tarayıcı tarafından tanınmayan sertifikalar konusunda uyarmaktır. Bu kanıtlanmamış bir durum değildir, çünkü bazen kötü amaçlı uygulamalar kendi sertifikalarını enjekte edebilir ve bunu sisteme zarar vermek ve özel verileri çalmak için kullanabilir.

Ancak AdGuard, sertifikasını da güvenilir olanların arasına ekler. Bu karşılaştığınız uyarı mesajına yol açar.

### Sorun nasıl çözülür

En kolay yol, **Siteye git** düğmesine tıklamaktır. Bu, Yandex.Browser'a AdGuard sertifikasını en azından bir süreliğine güvenilir sertifika olarak hatırlamasını söyler. Normally, you won't have to see this message anymore, but it is not beyond the realm of possibility for it to appear occasionally, for whatever reasons. Bu gibi durumlarda aynı düğmeye tekrar basmanız yeterlidir *(AdGuard sertifikası olduğundan emin olun!)*.

AdGuard'da HTTPS filtrelemesini devre dışı bırakmak Yandex.Browser'ın bu mesajı tekrar göstermesini de engelleyecektir, ancak bunun büyük bir bedeli vardır: HTTPS ile yüklenen tüm reklamlar ( **Yandex'in kendi reklamları** dahil) YouTube, Facebook, Instagram ve daha birçok sitede görünür. Reklam engelleme kalitesini yüksek tutmak istiyorsanız kesinlikle bunu yapmamanızı tavsiye ederiz.
