---
title: Tor Browser'da filtrelemeyi ayarlama
sidebar_position: 10
---

:::note

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Mac için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

Varsayılan olarak Tor Browser, AdGuard'ın filtrelenen uygulamalar listesine eklenir. Ancak, filtrelemek için AdGuard'ın Tor'un güvenlik ayarlarını değiştirmesi gerekir. Bu, Tor'un AdGuard'ın CA sertifikasına güvenmesini sağlar.

Tor'u filtrelemeye karar verirseniz ve bunu *Tercihler* → *Ağ* → *Uygulamalar* bölümünde işaretlerseniz, AdGuard size bu uyarı kutusunu gösterir:

![AdGuard uyarı kutusu](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

AdGuard, Tor ayarlarını güncelleyerek aşağıdakileri ayarlar:

`security.enterprise_roots.enabled`: true

This setting will cause Tor to trust root certificates. [Daha fazla bilgi edinin](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Ortak Anahtar Sabitleme, sitelerin bir site ile bir kullanıcı arasındaki bağlantının gerçek olduğundan emin olmasını sağlayan bir güvenlik önlemidir. Bu, sitenin güvendiği ortak anahtarların veya pinlerin bir listesini yayınlamasını içerir. Zorlama düzeyi 1 olarak ayarlandığında, özel CA'lar için sabitleme zorunlu kılınmaz. [Daha fazla bilgi edinin](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Değişiklikleri uygulamak için Tor Browser'ı yeniden başlatmanız gerekir.

> Bu ayarları elle değiştirirseniz, Tor filtreleme durdurulacaktır.
