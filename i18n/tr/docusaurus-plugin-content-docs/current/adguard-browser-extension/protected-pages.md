---
title: Tarayıcı korumalı sayfalar
sidebar_position: 4
---

:::bilgi

Bu makale, yalnızca tarayıcınızı koruyan AdGuard Tarayıcı Uzantısı hakkındadır. Tüm cihazınızı korumak için [AdGuard uygulamasını indirin](https://adguard.com/download.html?auto=true)

:::

AdGuard Tarayıcı Uzantısı gibi bir web uzantısını kullanırken, erişimi veya izinleri yasaklayan belirli kısıtlı alanlar vardır. Sonuç olarak, reklam engelleme uzantılarının bu sayfaların içeriğiyle etkileşime girmesine veya bunları değiştirmesine izin verilmez. Başka bir deyişle, bu web sayfalarındaki reklamları ve diğer can sıkıcı öğeleri engellemelerine izin verilmez.

## Chromium tarayıcı kısıtlamaları

Google Chrome gibi Chromium tabanlı tarayıcılar, uzantıların erişmesine izin verilmeyen kısıtlı alan adlarının bir listesini tutar. Bu alan adları şunları içerir:

- client.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- `chrome://`, `chrome-extension://` veya `https://chrome.google.com/webstore/` ile başlayan URL'ler
- PDF dosyaları
- Javascript'in devre dışı bırakıldığı sayfalar
- Güvenlik uyarı sayfaları
- 404 hataları ve ağ hataları gibi hata sayfaları
- `view-source:` veya `data:` ile başlayan URL'ler

## Firefox tarayıcı kısıtlamaları

Benzer şekilde, Firefox tarayıcısı da uzantıların çalışmasına izin verilmeyen kendi kısıtlı alan adlarına sahiptir. Bu kısıtlı alan adları şunları içerir:

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Firefox'ta kısıtlamaları değiştirme

Gelişmiş ayarların değiştirilmesi Firefox'un kararlılığını ve güvenliğini etkileyebilir. Bu yalnızca ileri düzey kullanıcılar için önerilir. İlgili riskin farkındaysanız ve yine de korumalı bir sayfada izin verilmeyen eklentileri etkinleştirmek istiyorsanız aşağıdaki adımları izleyin:

1. Menü düğmesi → **Eklentiler ve temalar** → **Uzantılar** öğesine tıklayın.
2. Kısıtlamaları olan sitelerde etkinleştirmek istediğiniz uzantıya tıklayın (Bu durumda, AdGuard).
3. **Kısıtlamalı sitelerde çalıştır** bölümünde **İzin ver** öğesini seçin.

Alternatif olarak şunları yapabilirsiniz:

1. Yeni bir sekme açın ve adres çubuğuna **about:config** yazın.
2. **Geri dön** öğesine basın. Bir uyarıyla karşılaşabilirsiniz. Bu durumda **Riski kabul ederek devam et** öğesine tıklayın.
3. `extensions.webextensions.restrictedDomains` için arama yapın. Bu tercihi bulamazsanız, oluşturabilirsiniz. Basitçe **Boolean** tipini seçin ve eklemek için **+** öğesine tıklayın.
4. Bu tercihin yanındaki geçiş düğmesine tıklayın ve değerini `false` olarak değiştirin.
5. Firefox'u yeniden başlatın.

Bu konu hakkında daha detaylı bilgi için [Mozilla'nın destek sitesindeki makaleyi](https://mzl.la/3POXoWi) okuyun.
