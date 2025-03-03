---
title: Ağ
sidebar_position: 4
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

_Ağ_ modülü ağ filtrelemeye ayrılmıştır ve burada ağla ilgili ek seçenekler bulacaksınız. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. Bunlar, web alanınızı daha iyi filtrelemek için önemli olağanüstü önlemlerdir. Çoğu site artık HTTPS kullanıyor ve aynı durum reklamcılık için de geçerli. Youtube.com, facebook.com ve x.com gibi birçok siteden HTTPS filtreleme olmadan reklamları kaldırmak imkansızdır. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![Ağ ayarları \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

In this module you can select the checkbox _Use AdGuard as an HTTP proxy_ to use AdGuard as a regular HTTP proxy which will filter all traffic passing through it. Ayrıca _EV sertifikalarına sahip siteleri filtrele_ özelliğini de etkinleştirebilirsiniz. Genişletilmiş Doğrulama (EV) SSL Sertifikaları daha güçlü bir güvenlik garantisi sunar; bu tür sitelerin sahipleri EV yönergeleri tarafından tanımlanan kapsamlı ve küresel olarak standartlaştırılmış bir kimlik doğrulama sürecinden geçmek zorundadır. Bazı kullanıcıların bu tür sertifikalara sahip sitelere güvenmelerinin ve bunları filtrelememeyi tercih etmelerinin nedeni budur.

Son olarak, proxy ayarlarının bulunduğu bir bölüm vardır. Burada, filtreleri güncellemek, yeni sürümleri edinmek, vb. için AdGuard'ın hangi proxy sunucusunu kullanması gerektiğini belirleyebilirsiniz.

### AdGuard VPN

Son bölüm, internette her gezindiğinizde güvenlik ve anonimlik sağlayan ideal bir araç olan AdGuard VPN'e ayrılmıştır. _İndir_ düğmesine tıklayarak indirebilir veya _Ana Sayfa_ düğmesine tıklayarak AdGuard VPN sitesine gidebilirsiniz.

AdGuard VPN nasıl çalışır? Without going into technical details, we can say that VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. In this way, data privacy is preserved, as well as the anonymity of the user, because a third-party observer sees the IP address of the VPN server and not the actual user's IP.

**AdGuard VPN ne yapar:**

- gerçek yerinizi gizler ve anonim kalmanıza yardımcı olur
- verilerinizi izlemekten korumak için IP adresinizi değiştirir
- encrypts your traffic to make it unreadable to third parties
- VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

To get more information about AdGuard VPN, dive into the [AdGuard VPN Knowledge Base](https://adguard-vpn.com/kb/).
