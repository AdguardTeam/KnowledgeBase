---
title: Local.adguard.org alan adı
sidebar_position: 3
---

Windows, Mac ve Android için AdGuard kullanıcıları, AdGuard'ın her web sayfasına `local.adguard.org` alan adından yüklenen küçük bir betik eklediğini fark edebilir.

Öncelikle endişelenmeyin, bu gerçek bir alan adı değil ve aslında bu ada sahip gerçek bir sunucu da yok. Bu alan adı, web sayfalarına kozmetik filtreleme uygulamak için kullanılır, ancak her şey, herhangi bir sunucuya bağlanmadan doğrudan cihazınızda yerel olarak yapılır.

### Teknik açıklama

Ama neler oluyor ve bu neden yapılıyor? Lütfen aşağıdaki teknik açıklamayı okuyunuz.

1. AdGuard, ağ düzeyinde bir içerik engelleyici olduğundan, tarayıcı uzantılarının yaptığı gibi web sayfalarına basitçe özel JavaScript ve CSS ekleyemez. Ancak kaliteli içerik engelleme için bunu yapmak çok önemlidir.
2. Bunu yapabilmek için AdGuard şuna benzeyen bir "içerik betiği" enjekte eder: `<script src="https://local.adguard.org/.../content-script.js">`. Bu "içerik betiği" kozmetik filtrelemeyle ilgilenir, reklam içeriğini web sayfalarından gizler veya kaldırır.
3. `local.adguard.org` alan adının IP adresine yapılan bağlantılar, ağ düzeyinde AdGuard tarafından kesilir ve **yerel olarak işlenir**. Bu nedenle o alan adı yıllarca değişmeyen "statik" bir IP adresine sahiptir.

**Bunun için neden gerçek bir IP adresi kullanmamız gerekiyor?**

- Tarayıcılar kabul etmeyeceği için `127.0.0.1` adresini kullanamayız.
- Özel alt ağlardan bazı IP adreslerinin kullanılması mümkündür ancak bu çözümün iki dezavantajı vardır.
    - Birincisi, mevcut bir intranet hizmetiyle kesişme ve ona erişimin kesilmesi ihtimali çok düşük.
    - İkinci olarak, bazı DNS sunucuları bunu bir DNS yeniden bağlama saldırısı olarak değerlendirebilir ve `local.adguard.org` adresine yanıt vermeyi reddedebilir.

### Doğrulama

Bunu doğrulamak kolaydır. AdGuard'ı devre dışı bırakırsanız, bu adrese sahip bir sunucu olmadığından `local.adguard.org` ile bağlantı kurmanın kesinlikle imkansız olduğunu göreceksiniz. AdGuard devre dışı bırakıldığında tarayıcınızda açmayı deneyin.
