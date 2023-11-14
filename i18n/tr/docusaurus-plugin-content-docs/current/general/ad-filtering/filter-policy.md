---
title: AdGuard filter policy
sidebar_position: 6
---

AdGuard reklam filtrelerini tartışırken, AdGuard'ın bunu mu yoksa bu reklamı mı engellemesi gerektiği gibi sık sık bir konu ortaya çıkar. Kuralları belirlerken, doğru ve uygun bulduğumuz [EasyList Politikası](https://easylist.to/pages/policy.html) ile çok benzer olan belirli kriterlere bağlı kalıyoruz. However, we have made some changes to it.

![To filter or not to filter](https://cdn.adtidy.org/public/Adguard/Common/page_filtering.png)

## Terminology

Bu metin boyunca **birinci taraf** ve **üçüncü taraf**terimlerini kullanıyoruz.

"Birinci taraf", bir kullanıcının bilerek ve isteyerek ziyaret ettiği bir sitesiyle aynı kuruluş tarafından işletilen web üzerindeki bir dizi kaynaktır. Uygulamada, kaynakların aynı kaydedilebilir alanın parçası olması durumunda aynı tarafa ait olduğunu kabul ederiz: genel bir son ek artı bir ek etiket. Örnek: `site.example`, `www.site.example` ve `s.u.b.site.example` aynı tarafa aittir çünkü `site.example ` ortak kaydedilebilir alan adıdır.

"Üçüncü taraf", yukarıdaki birinci taraf tanımına girmeyen herhangi bir taraftır. Kullanıcı içeriğinde geçici olarak bilgilendirilse bile (örneğin, bir yönlendirme şeklinde) diğer taraflarla etkileşimler üçüncü taraf olarak kabul edilir. Belirli bir içeriğin üzerinde gezinmek, sessize almak, duraklatmak veya kapatmak etkileşim kurma niyetini teşkil etmez.

## Ortak kriterler

Bunlar, tüm filtrelerdeki kurallar için eşit derecede geçerlidir.

- Bazı sitelerin çalışmasında sıklıkla sorunlara neden olan kurallar silinecektir.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Tüm filtreler

Bu bölümde AdGuard Temel filtresi, Mobil Reklam filtresi ve şu dile özgü filtreler açıklanmaktadır: Rusça, Almanca, Felemenkçe, İspanyolca/Portekizce, Japonca, Türkçe, Çince ve Fransızca.

**Bu filtreler neyi engelleyecek?**

- Bu filtreler, mümkün olan her yerde reklamları engeller.
- Nedenleri ve amaçları ne olursa olsun reklamlar engellenmelidir.
- Kötü amaçlı uygulamaların veya reklam ekleyen uzantıların neden olduğu reklamları engelleriz. Please note that we do it only on the condition that you specify how to install such an app or extension.

**Kısıtlamalar ve İstisnalar**

Bir kural aşağıda açıklanan kısıtlamalar listesine dahilse, bu ana filtrelere eklenmeyecektir.

- Websites’ own ads should not be removed on purpose. Öte yandan, üçüncü taraf reklamlarının yeniden görünmesine neden olabilecekse engelin kaldırılmaması gerekir.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.
- Anti-adblock betikleri yalnızca bir sitenin işlevselliğini sınırlıyor veya etkiliyorsa engellenecektir.
- Anti-adblock betikleri, yasalarca yasaklandığı durumlarda engellenmeyecektir.
- Bazı sitelerin çalışmasında sıklıkla sorunlara neden olan kurallar silinecektir.

## Tracking Protection filter

**What will be blocked with this filter?**

- Bu filtre, kullanıcının kişisel verilerini toplayan tüm izleyicileri engeller.

We define **tracking** as collecting data regarding an individual’s identity or activity across one or more websites. Bu tür veriler kişisel olarak tanımlanamaz olarak kabul edilse bile, yine de izlenmektedir.

**İzleyici**, tek amacı veya amaçlarından biri olan izlemeyi içeren çevrimiçi bir betiktir.

**Kısıtlamalar ve İstisnalar**

Bir kural aşağıda açıklanan kısıtlamalar listesine dahilse, bu filtreye eklenmeyecektir.

- Site işlevselliğiyle ilgili sorunlara neden olan kurallar kaldırılacaktır.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## AdGuard URL İzleme filtresi

**What will be blocked with this filter?**

- Bu filtre, tüm izleme parametrelerini URL'lerden arındırır.

We define **tracking** as collecting data regarding an individual’s identity or activity across one or more websites. Bu tür veriler kişisel olarak tanımlanamaz olarak kabul edilse bile, yine de izlenmektedir.

**Kısıtlamalar ve İstisnalar**

Bir kural aşağıda açıklanan kısıtlamalar listesine dahilse, bu filtreye eklenmeyecektir.

- Kullanıcı güvenlik seviyelerini düşürecek kurallar kaldırılacaktır.
- Site işlevselliğiyle ilgili sorunlara neden olan kurallar kaldırılacaktır.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Social Media filter

**What will be blocked with this filter?**

- Bu filtre, "Beğen" ve "Paylaş" düğmeleri, öneri araçları ve daha fazlası gibi sosyal medya pencere öğelerini (üçüncü taraf sitelerde) engeller.

**Kısıtlamalar ve İstisnalar**

Bir kural aşağıda açıklanan kısıtlamalar listesine dahilse, bu filtreye eklenmeyecektir.

- "Yorumlar", "Gömülü Gönderi", "Anketler" gibi bir sitenin işlevselliğinin bir parçası olan araçları veya sosyal ağlar aracılığıyla yetkilendirme gerektiren araçları engelleyen kurallar.
- Bir sitenin sosyal ağlardaki topluluklarına bağlantıları engelleyen kurallar.
- Site işlevselliğiyle ilgili sorunlara neden olan kurallar kaldırılacaktır.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Annoyances filter

**What will be blocked with this filter?**

- Bu filtre sayfanın önünü kapatan nesneleri engeller. Bu öğeler reklam değildir, ancak sitenin gerçek içeriğinin görülmesini zorlaştırır ve görmeyi engeller. Bu tür unsurlar arasında çerez bildirimleri, üçüncü taraf araçları, sayfa içi açılır pencereleri, e-posta abonelik formları, özel teklifler içeren afişleri ve agresif bir şekilde yerleştirilmiş sosyal medya araçları yer alır.

**Kısıtlamalar ve İstisnalar**

Bir kural aşağıda açıklanan kısıtlamalar listesine dahilse, bu filtreye eklenmeyecektir.

- Sitenin işleyişi için gerekli olan öğeleri (örn. yetkilendirme formları) engelleyen kurallar, diğer gereksinimleri karşılasalar bile engellenmeyecektir.
- Site işlevselliğiyle ilgili sorunlara neden olan kurallar kaldırılacaktır.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Arama motoru reklamları ve öz tanıtımına izin veren filtre

Diğer filtrelerin aksine, bu filtre belirli reklamların **engelini kaldırır**. [Arama motoru reklamları ve öz tanıtımlar hakkındaki makalede](../search-ads) bu konuda daha fazla bilgi edinin.

**Bu filtre ile nelerin engeli kaldırılacaktır?**

- Arama motoru reklamları (çevrimiçi bir arama motorunu kullanırken sonuçlar arasında gördüğünüz reklamlar).
- Sitenin öz tanıtımları (bir sitesdeki bir reklam, bu siteyi veya onunla yakından ilişkili diğer siteleri/sosyal medyayı, vb. tanıtıyorsa).

**Kısıtlamalar ve İstisnalar**

- Site işlevselliğiyle ilgili sorunlara neden olan kurallar kaldırılacaktır.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Filtreleme kuralları için kalite gereksinimleri

- Kurallar performans açısından mümkün olduğunca verimli olmalıdır.
- Gereksiz engelin kaldırılmasını önlemek için istisna kuralları mümkün olduğunca spesifik olmalıdır.
- CSS ve JS enjeksiyon kuralları, mümkün olduğunca nadiren ve yalnızca bunlar olmadan reklamları engellemenin imkansız olduğu durumlarda kullanılmalıdır.
