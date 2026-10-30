---
title: "`MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` hatası nasıl düzeltilir"
sidebar_position: 11
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Windows için AdGuard'ı [HTTPS filtrelemesi](/general/https-filtering/what-is-https-filtering) etkinleştirmiş bazı kullanıcılar google.com ve youtube.com gibi belirli sitelere erişemiyor. Sıkı Sertifika Sabitleme özelliğine sahip tarayıcılar bir siteyi açmak yerine `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` hatası görüntüler.

İşte etkilenen tarayıcıların bir listesi:

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

Varsayılan tarayıcınız bunlardan biriyse, sorunu çözmek için aşağıdakileri yapın:

1. Tarayıcınızın adres çubuğuna `about:config` yazın
2. Görüntülenen menüde, arama alanına `security.cert_pinning.enforcement_level` yazın.
3. `security.cert_pinning.enforcement_level` parametresini 2'den 1'e değiştirin.
