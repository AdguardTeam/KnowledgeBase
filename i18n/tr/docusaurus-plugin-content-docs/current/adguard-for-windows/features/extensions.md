---
title: Uzantılar
sidebar_position: 3
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

AdGuard can significantly broaden website functionality working as a [user script manager](/general/userscripts). AdGuard Kullanıcıları kendi betiklerini ekleyebilir ve mevcut olanları yönetebilir.

![Extensions \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Automatically detect userscripts**

Bu seçenek etkinleştirildiğinde, AdGuard tarayıcı sorgularını otomatik olarak kullanıcı betiklerini tanımlar ve bunların yüklenmesini önerir. Aksi takdirde, uzantılar elle indirilebilir ve yüklenebilir.

Aşağıdaki uzantılar AdGuard ile birlikte yüklenir:

![Preinstalled userscripts \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard Assistant**

AdGuard Assistant is Legacy Assistant that you may use if the [new Assistant](/adguard-for-windows/browser-assistant.md) is not available for your browser. Bu uzantının adı oldukça bilinçli: Aslında, kullanıcının uygulamayı açmaya gerek kalmadan doğrudan tarayıcıda temel AdGuard ayarlarını değiştirmesine yardımcı oluyor. AdGuard Asistanı, tüm Microsoft Windows uyumlu tarayıcılarla çalışır. Ayrıca, AdGuard Asistanı simgesi, kullanıcı tarafından istisna olarak listelenen sitelerde ve yanlış içerik görüntüleme riski bulunan belirli web sayfalarında görüntülenmeyecektir.

**AdGuard Extra**

This is a custom extension designed to fight the technique of re-inserting blocked ads — the so-called ad blocker circumvention/ad reinjection. Both are advanced anti-ad blocker methods that continue to rise in popularity among advertisers.

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**AdGuard Açılır Pencere Engelleyici**

Bu uzantı, web sayfalarını görüntülediğinizde açılır pencerelerin açılmasını engeller. Bazı açılır pencereler yararlı kabul edilir — site yönetimi için ayarlar veya bir bağlantıya tıklandığında gösterilen ek referans bilgileri içerebilirler. Bu nedenle gerekirse Engelleyiciyi kapatabilirsiniz. Bu uzantı, AdGuard istisnalar listesine eklenen sitelerde de çalışmaz. Varsayılan olarak kapalıdır, ancak uygulama ayarlarından açabilirsiniz. You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

Web of Trust, kullanıcılarının görüşlerine dayanarak her sitenin itibarını görmenizi sağlar. Site bir dizi özel kritere göre derecelendirilir: güven, güvenlik, vb. Bu uzantı varsayılan olarak kapalıdır, ancak uygulama ayarlarından açabilirsiniz. Lütfen AdGuard'ın bu uzantının geliştiricisi olmadığını unutmayın.

### Ağ

Sondan bir önceki modül ağ filtrelemeye ayrılmıştır ve burada ağla ilgili ek seçenekler bulacaksınız. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. Bunlar, web alanınızı daha iyi filtrelemek için önemli olağanüstü önlemlerdir. Çoğu site artık HTTPS kullanıyor ve aynı durum reklamcılık için de geçerli. From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![Network Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

Bu modülde, AdGuard'ı içinden geçen tüm trafiği filtreleyecek normal bir HTTP proxy olarak kullanmak için "AdGuard'ı HTTP proxy olarak kullan" onay kutusunu işaretleyebilirsiniz. You can also enable the _Filter websites with EV certificates_ feature. Extended Validation (EV) SSL Certificates offer a stronger safety guarantee; owners of such websites have to pass a thorough and globally standardized identity verification process defined by EV guidelines. Which is the reason why some users trust websites with such certificates and prefer not to filter them.

Son olarak, proxy ayarlarının bulunduğu bir bölüm vardır. Burada, filtreleri güncellemek, yeni sürümleri edinmek, vb. için AdGuard'ın hangi proxy sunucusunu kullanması gerektiğini belirleyebilirsiniz.

### AdGuard VPN

Son bölüm, internette her gezindiğinizde güvenlik ve anonimlik sağlayan ideal bir araç olan AdGuard VPN'e ayrılmıştır. You can download it by clicking the _Download_ button or go to the AdGuard VPN website by clicking the _Homepage_ button.

AdGuard VPN nasıl çalışır? NTeknik detaylara girmeden VPN'in kullanıcının bilgisayarı veya mobil cihazı ile uzak bir VPN sunucusu arasında güvenli bir şifreli tünel oluşturduğunu söyleyebiliriz. Bu şekilde, üçüncü taraf bir gözlemci gerçek kullanıcının IP'sini değil VPN sunucusunun IP adresini gördüğünden, kullanıcının anonimliğinin yanı sıra veri gizliliği de korunur.

**AdGuard VPN ne yapar:**

- gerçek yerinizi gizler ve anonim kalmanıza yardımcı olur
- verilerinizi izlemekten korumak için IP adresinizi değiştirir
- encrypts your traffic to make it unreadable to third parties
- VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

To get more information about AdGuard VPN dive into the [AdGuard VPN Knowledge Base](https://adguard-vpn.com/kb/).
