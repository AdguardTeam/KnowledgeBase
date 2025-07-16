---
title: Tracking filter rules statistics
sidebar_position: 4
---

:::note

*Reklam filtreleri kullanımına ilişkin istatistikleri gönder* seçeneği varsayılan olarak devre dışıdır. Engelleme filtrelerimizi iyileştirmemize yardımcı olmak için kullanıcı bunu elle etkinleştirmediği sürece hiçbir şey gönderilmeyecektir.

:::

### Why do we need ad filters?

Reklam filtrelerinin ne olduğunu tanımlayarak başlayalım. Bu filtreler sayesinde AdGuard sitelerdeki reklamları kaldırır. Sitelerdeki reklamlarla ilgili şikayetlerinize göre elle derlenirler. Reklam filtreleri AdGuard'ın önemli bir unsurudur — kaliteleri AdGuard reklam engellemenin genel kalitesini belirler.

Ancak bir dezavantajı vardır. Over the years, more and more ad filters have appeared. The more ad filters there are, the more memory AdGuard consumes, thus slowing down the rendering of webpages. At the same time, some filters expire and gradually become useless, consuming memory and slowing down the program.

### Why do we need statistics?

Güncel olmayan filtreleme kuralları sorununu kesin olarak çözmek istiyoruz. Ancak bunu yapmak için yardımınıza ihtiyacımız var. Kullanılan filtreleme kuralları hakkında istatistikler toplayarak, artık kullanılmayan kuralları tespit ediyor ve kaldırıyoruz. Sonuç olarak, AdGuard kullanan herkese yardımcı olur.

Bilgisayarınız yeterince güçlüyse, bu sizi gerçekten etkilemez. Ancak düşük güçlü netbook veya tablet kullanıcıları için fark çok belirgin olacaktır.

### What kind of statistics will be sent?

*Reklam filtreleri kullanımına ilişkin istatistikleri gönder* seçeneğini etkinleştirirseniz aşağıdaki bilgiler düzenli aralıklarla gönderilir:

- Extension version
- Tarayıcı türü (Chrome/Firefox/Opera/Yandex.Browser/Safari).
- Etkinleştirilmiş reklam filtrelerinin listesi.
- Aşağıdaki unsurlardan oluşan liste:
    - *The domain name of the website*
    - *En son sayfa görüntülemelerinin sayısı*
    - *Bu sitede etkinleştirilen filtreleme kuralları ve Filtre Kimliği listesi*
    - *Engellenen isteklerin alan adı, URL kuralları için gönderilir.* Liste, istatistiksel verilerin en son gönderildiği zamandan bu yana sitenin ziyaret istatistikleri temel alınarak oluşturulur.

Toplanan istatistikler, analiz ve filtre iyileştirmesi için periyodik olarak sunucumuza gönderilecektir.

Aldığımız tüm istatistiklerin ortalamasının alındığını ve anonimleştirildiğini unutmamak önemlidir. Bu istatistikleri filtreleri iyileştirmek dışında herhangi bir amaçla kullanmıyoruz ve bu verileri üçüncü taraflara satmıyoruz. You can read about it in our [Privacy policy](https://adguard.com/privacy.html).

### What does tracking filter rules statistics fraught with?

For the vast majority of users, the change in computer speed will not be really noticeable. However, netbook and tablet users may notice a slight slowdown.

Periodically, we will send the gathered statistics to the server. The size of the transmitted data is not very large and is comparable to the size of an average web page.
