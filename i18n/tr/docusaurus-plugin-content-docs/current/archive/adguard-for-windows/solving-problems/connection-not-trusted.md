---
title: Sertifika ile ilgili konular
sidebar_position: 2
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

HTTPS trafiğini filtreleyebilmek, reklamları ve izleyicileri etkili bir şekilde engelleyebilmek için AdGuard, özel (ve benzersiz) bir kök sertifika oluşturur ve bunu sistem depolama alanına yükler. You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

Normalde tarayıcılar, kurulum işlemi sırasında sistem sertifika depolama alanına eklendiğinde AdGuard sertifikasına güvenir. Ancak bazı durumlarda bu yeterli olmaz ve uyarı veya hatalarla karşılaşabilirsiniz. Bu durum çoğunlukla Mozilla Firefox, PaleMoon, Waterfox, vb. gibi Firefox tabanlı tarayıcılarda veya Yandex.Browser'da meydana gelir.

İşte bazı yaygın sorunlar:

- [_Potential Security Risk_ error in Firefox-based browsers](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser certificate warning](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potential Security Risk_ error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Eski FireFox sürümleri ve bunları temel alan tarayıcılar, sistem depolamasındaki sertifikalara değil, yalnızca kendi yerel depolamasındaki sertifikalara güvenir. Since v68, FireFox trusts the system certificates, but you still can face the "Connection is untrusted" error. If something like this happens, first try to click the _Reinstall Certificate_ button — you will find it in the _Network_ tab.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Bu işe yaramazsa, AdGuard sertifikasını FireFox depolamasına elle eklemek için talimatları izleyin.

> Bu talimat Firefox tarayıcısı içindir. Names of buttons and menu items may differ in other Firefox-based browsers.

1. AdGuard'ı çalıştırın.

2. Go to [https://local.adguard.org/cert](https://local.adguard.org/cert) and click the _Download_ button. The browser should start downloading **cert.cer** file.

   :::note

   You can also open the download page by clicking the link via the AdGuard app at _Settings → Network → HTTPS filtering_.

   :::

   ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Open your browser and then open _Settings_.

4. Go to _Privacy & Security_ tab.

5. Scroll down to _Certificates_ and click the _View Certificates_ button.

   ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Select _Authorities_ tab.

7. Click _Import..._.

   ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Browse the downloaded **cert.cer** file and click _Open_.

9. Check the _Trust this CA to identify websites_ box and then click _OK_.

   ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

AdGuard sertifikasını başarıyla yüklediniz. Tarayıcıyı yeniden başlatın; hata ortadan kalkmalıdır.

## Yandex.Browser sertifika uyarısı

Hem Windows için AdGuard hem de Yandex.Browser kullanıcısıysanız şu uyarıyla karşılaşmış olabilirsiniz:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Bu neden oluyor

Hem AdGuard hem de Yandex, kullanıcıların internetteki güvenliğini çok ciddiye alıyor. Yandex'in mevcut politikası, kullanıcılarını tarayıcı tarafından tanınmayan sertifikalar konusunda uyarmaktır. Bu kanıtlanmamış bir durum değildir, çünkü bazen kötü amaçlı uygulamalar kendi sertifikalarını enjekte edebilir ve bunu sisteme zarar vermek ve özel verileri çalmak için kullanabilir.

Ancak AdGuard, sertifikasını da güvenilir olanların arasına ekler. Bu karşılaştığınız uyarı mesajına yol açar.

### Sorun nasıl çözülür

The easiest way is to click the **Go to site** button. Bu, Yandex.Browser'a AdGuard sertifikasını en azından bir süreliğine güvenilir sertifika olarak hatırlamasını söyler. Normalde bu mesajı artık görmeniz gerekmez, ancak herhangi bir nedenle ara sıra görünmesi olasılık dışı değildir. In such cases, simply press the same button again _(make sure it is AdGuard's certificate!)_.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. Reklam engelleme kalitesini yüksek tutmak istiyorsanız kesinlikle bunu yapmamanızı öneririz.

## Resmi olmayan uzantılar Firefox tabanlı tarayıcılarda güncellenmiyor

Firefox tabanlı tarayıcılar kullanıyorsanız ve Mozilla'nın resmi kataloğundan olmayan eklentileriniz varsa — ve AdGuard'da HTTPS filtreleme etkinse — bu uzantılar güncellenemeyecektir. İşte nedeni.

Uzantıları güncellemek için Firefox, güncelleme sunucusuna olan bağlantının güvenilir bir sertifika yetkilisi (CA) tarafından verilen bir sertifikayla güvenli olup olmadığını kontrol eder. Firefox tabanlı tarayıcılar yalnızca Mozilla'nın yerleşik listesinde yer alan sertifika yetkililerinden gelen sertifikalara güvenir — bu, potansiyel olarak güvenli olmayan güncellemeleri engellemek için alınan bir güvenlik önlemidir.

AdGuard'ın sertifikası güvenli olmasına rağmen bu listede yer almıyor. Bu nedenle Mozilla alan adları AdGuard'da HTTPS filtrelemeden hariç tutulur.

Ancak resmi olmayan uzantılar güncellemeler için üçüncü taraf sunucularını kullanır ve bunlar varsayılan olarak HTTPS filtrelemesinin dışında değildir. Yani Firefox bağlantıyı kontrol ettiğinde orijinal sertifika yerine AdGuard'ın sertifikasını görüyor — ve güncellemeyi engelliyor.

Bu tür uzantılar için güncellemeleri denetlemeniz gerekiyorsa, AdGuard'ı geçici olarak devre dışı bırakmayı düşünün.
