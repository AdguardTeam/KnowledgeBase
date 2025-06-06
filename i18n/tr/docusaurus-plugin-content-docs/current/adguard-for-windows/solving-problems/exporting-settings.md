---
title: v8.0'a güncelledikten sonra önceki sürüme nasıl geri dönülür
sidebar_position: 11
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

The changes in AdGuard for Windows v8.0 are significant, and we hope you love the new version. Ancak, bir şeylerin beklediğiniz gibi gitmeme ihtimali vardır. Sürüm 8.0 çok farklı; sonuçta bu ilk nightly sürümdür. Eğer v8.0 arayüzünü rahatsız edici buluyorsanız veya çok fazla işlevsellik/kararlılık sorunuyla karşılaştıysanız, önceki sürümü ayarlarıyla birlikte geri yükleyebilirsiniz.

Ayarlarınızın tüm süreç boyunca korunduğundan emin olmak için, v8.0'a yükseltmeden önce bunları dışa aktarmanız önerilir; böylece gerekirse sürüm 7'yi yeniden yükleyip kaydedilmiş ayarlarınızı geri içe aktarabilirsiniz.

Alternatif olarak aşağıdaki yöntem de kullanılabilir:

1. Sürüm 8'e yükselttikten sonra, `C:\ProgramData\Adguard\Backups` klasörünü açın ve `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip` benzeri bir ada sahip bir ZIP dosyası bulun.
2. Bu ZIP dosyasını `C:\ProgramData\Adguard` dışında bir yere, örneğin masaüstüne kopyalayın (bu önemlidir çünkü bir sonraki adımda silinecektir).
3. 8.0 sürümünü **ayar kaldırma** öğesi açıkken kaldırın.
4. Güncellemeden önce yüklü olan sürüm 7 yapısını yükleyin.
5. Filtrelemeyi durdurmak için sistem tepsisinden sürüm 7'den çıkın.
6. İlk adımdaki ZIP dosyasının içeriğini çıkarın ve aşağıdaki dosyaları değiştirin:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` ve `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. AdGuard'ı başlatın.

All set!
