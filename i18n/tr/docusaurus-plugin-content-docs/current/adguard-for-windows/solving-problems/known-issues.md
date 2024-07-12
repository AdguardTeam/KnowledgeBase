---
title: Windows için AdGuard'ın bilinen sorunları
sidebar_position: 10
---

:::bilgi

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

## Windows için AdGuard ve Windows için AdGuard VPN uyumluluk sorunları

Windows için AdGuard'ı ve Windows için AdGuard VPN'i kurduktan sonra, sizin herhangi bir çaba harcamanıza gerek kalmadan birlikte çalışmaya başlarlar. Ancak bazı varsayılan ayarların değiştirilmesi, uygulamaların aynı anda çalışırken hatalı çalışmasına neden olabilir.

Windows için AdGuard'da iki özel ayar vardır: *Yönlendirme sürücü modunu kullan* ve *localhost'u filtrele*. Varsayılan olarak birincisi devre dışıdır ve ikincisi etkindir. Cihazınızda hem AdGuard Reklam Engelleyici hem de AdGuard VPN etkinleştirilmişse, bu ayarlardan herhangi birinin değiştirilmesi kaçınılmaz olarak AdGuard'ın filtrelemesini bozar.

Changing these settings is only necessary to resolve issues related to the simultaneous operation of AdGuard Ad Blocker and network-level apps such as antiviruses, VPNs, and network filters. Yukarıdaki ayarların varsayılan durumunu değiştirmeniz gereken bir durumla karşılaşırsanız ve yine de AdGuard Reklam Engelleyici ve AdGuard VPN'in aynı anda ve doğru şekilde çalışmasını istiyorsanız — [GitHub'da bir sorun oluşturun](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) böylece size kişisel olarak yardımcı olabiliriz.

Şu anda uygulamalarımızın aynı anda çalışmasına ilişkin yukarıda listelenen sınırlamaların üstesinden gelmeye çalışıyoruz.
