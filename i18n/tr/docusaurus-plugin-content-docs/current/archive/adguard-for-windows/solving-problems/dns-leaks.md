---
title: Olası DNS sızıntıları
sidebar_position: 10
---

:::info

Bu makale, cihazınızı sistem düzeyinde koruyan çok işlevli bir reklam engelleyici olan Windows için AdGuard'ı ele alır. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

Windows için AdGuard, kullanıcıların, sorguları çözümlemek için, sistem ayarlarında geçersiz kılınmadığı sürece İSS'niz tarafından sağlanan sistem DNS sunucusu yerine bir DNS sunucu adresi belirtmesine olanak tanır. Using a non-default DNS server can safeguard your DNS traffic from the ISP’s interception. Ayrıca, şifrelenmiş ve/veya filtrelenmiş bir DNS sunucusu seçerek, kötü aktörlere ve rahatsız edici reklamlara karşı başka bir koruma katmanı elde edersiniz.

Windows için AdGuard kullanıcılarının çoğu, DNS koruma özelliğini takdir ediyor. But some of them encounter the following issue: a check on a website like https://ipleak.net/ shows that requests are handled by the default DNS server instead of the selected one. Bu yazıda size bunun neden olduğunu ve bundan nasıl kaçınılacağını anlatacağız.

## Önyükleme DNS adresi

DNS sunucu adresleri IP veya alan adı olarak yazılabilir.
IP adresleri söz konusu olduğunda hiçbir zorluk yaşanmaz: AdGuard, DNS isteğini doğrudan DNS koruma modülünde belirtilen sunucuya iletir. Ancak DoT veya DoH gibi şifrelenmiş DNS sunucu adresleri çoğunlukla alan adı olarak yazılır. Bu durumda, öncelikle şifrelenmiş DNS sunucu adresini çözümlemek için AdGuard, varsayılan olarak bir sistem DNS sunucusu olan önyükleme adresine bir DNS sorgusu gönderir. Bu bağlantı, kontrol hizmetlerinin sızıntı olarak algıladığı şeydir.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _List of custom bootstrap addresses_ section
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- click _Save_

## Yedek DNS sunucusu

It could happen that AdGuard cannot reach the specified server because of a weak internet connection, an expiration of timeout set by default or some server related issues. Bu durumda, varsayılan olarak bir sistem DNS sunucusu olan yedek sunucuya bağlanır. Bu bağlantı aynı zamanda kontrol servisi tarafından sızıntı olarak değerlendirilir.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Use custom servers_ option
- then find the _List of custom fallback servers_ section and enter the custom fallback servers one per line

veya

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Don’t use fallback servers_ option

veya

- go to the _Advanced settings_
- scroll down to the _DNS server timeout period_ section
- isteğe bağlı olarak büyük bir sayı girin
