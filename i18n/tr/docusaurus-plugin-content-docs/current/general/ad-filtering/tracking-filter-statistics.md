---
title: Tracking filter rules statistics
sidebar_position: 4
---

:::not

*Reklam filtreleri kullanımına ilişkin istatistikleri gönder* seçeneği varsayılan olarak devre dışıdır. Engelleme filtrelerimizi iyileştirmemize yardımcı olmak için kullanıcı bunu elle etkinleştirmediği sürece hiçbir şey gönderilmeyecektir.

:::

### Why do we need ad filters?

Reklam filtrelerinin ne olduğunu tanımlayarak başlayalım. Bu filtreler sayesinde AdGuard sitelerdeki reklamları kaldırır. Sitelerdeki reklamlarla ilgili şikayetlerinize göre elle derlenirler. Reklam filtreleri AdGuard'ın önemli bir unsurudur — kaliteleri AdGuard reklam engellemenin genel kalitesini belirler.

Ancak bir dezavantajı vardır. Yıllar geçtikçe giderek daha fazla reklam filtresi ortaya çıkıyor. Ve ne kadar çok reklam filtresi varsa, AdGuard o kadar çok bellek tüketir, dolayısıyla web sayfalarının oluşturulması yavaşlar. Aynı zamanda, bazı filtrelerin süresi sona ermeye ve yavaş yavaş faydası olmayan, yalnızca hafıza tüketen ve programı yavaşlatan bir yük hâline gelir.

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

Aldığımız tüm istatistiklerin ortalamasının alındığını ve anonimleştirildiğini unutmamak önemlidir. Bu istatistikleri filtreleri iyileştirmek dışında herhangi bir amaçla kullanmıyoruz ve bu verileri üçüncü taraflara satmıyoruz. Gizlilik Politikamızı [buradan](https://adguard.com/privacy.html) okuyabilirsiniz.

### What does tracking filter rules statistics fraught with?

For the vast majority of users, the change in computer speed will not be really noticeable. However, netbook and tablet users may notice a slight slowdown.

Periodically, we will send the gathered statistics to the server. The size of the transmitted data is not very large and is comparable to the size of an average web page.
