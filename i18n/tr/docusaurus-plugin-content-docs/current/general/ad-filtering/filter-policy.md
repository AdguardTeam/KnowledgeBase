---
title: AdGuard filter policy
sidebar_position: 6
---

When discussing AdGuard ad filters, one topic often comes up – whether AdGuard should block this or that ad. By setting the rules, we stick to specific criteria that are very similar to [EasyList Policy](https://easylist.to/pages/policy.html), which we find correct and appropriate. However, we have made some changes to it.

![To filter or not to filter](https://cdn.adtidy.org/public/Adguard/Common/page_filtering.png)

## Terminology

Throughout this text, we use the terms **first party** and **third party**.

A "first party" is a website that a user visits intentionally and knowingly, plus a set of resources on the web operated by the same organization. In practice, we consider resources to belong to the same party if they are part of the same registrable domain: a public suffix plus one additional label. Example: `site.example`, `www.site.example`, and `s.u.b.site.example` belong to the same party because `site.example` is their common registrable domain.

A "third party" is any party that does not fall within the definition of the first party above. Interactions with other parties are considered third-party, even if the user is transiently informed in context (for example, in the form of a redirect). Merely hovering over, muting, pausing, or closing a given piece of content does not constitute an intention to interact.

## Common criteria

These equally apply to rules in all filters.

- Rules that often cause problems with the work of some websites will be deleted.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Tüm filtreler

This part describes the AdGuard Base filter, the Mobile Ads filter, and the following language-specific filters: Russian, German, Dutch, Spanish/Portuguese, Japanese, Turkish, Chinese, and French.

**Bu filtreler neyi engelleyecek?**

- Bu filtreler, mümkün olan her yerde reklamları engeller.
- Nedenleri ve amaçları ne olursa olsun reklamlar engellenmelidir.
- Kötü amaçlı uygulamaların veya reklam ekleyen uzantıların neden olduğu reklamları engelleriz. Please note that we do it only on the condition that you specify how to install such an app or extension.

**Limitations and Exceptions**

If a rule is subject to the list of limitations described below, then it won’t be added to the main filters.

- Websites’ own ads should not be removed on purpose. On the other hand, they should not be unblocked if it may cause third-party ads to reappear.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.
- Anti-adblock scripts will be blocked only if they limit or affect the functionality of a website.
- Anti-adblock scripts will not be blocked in cases when it is prohibited by law.
- Rules that often cause problems with the work of some websites will be deleted.

## Tracking Protection filter

**What will be blocked with this filter?**

- This filter will block all trackers that collect user personal data.

We define **tracking** as collecting data regarding an individual’s identity or activity across one or more websites. Even if such data is considered to be personally unidentifiable, it’s still tracking.

**Tracker** is an online script that has tracking as its only purpose, or as one of its purposes.

**Limitations and Exceptions**

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that cause problems with website functionality will be removed.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## AdGuard URL İzleme filtresi

**What will be blocked with this filter?**

- Bu filtre, tüm izleme parametrelerini URL'lerden arındırır.

We define **tracking** as collecting data regarding an individual’s identity or activity across one or more websites. Even if such data is considered to be personally unidentifiable, it’s still tracking.

**Limitations and Exceptions**

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that would reduce user security levels will be removed.
- Rules that cause problems with website functionality will be removed.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Social Media filter

**What will be blocked with this filter?**

- This filter will block social media widgets (on third-party websites) such as "Like" and "Share" buttons, recommendation widgets, and more.

**Limitations and Exceptions**

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that block widgets that are a part of a website’s functionality, such as "Comments," "Embedded Post," "Surveys," or widgets that require authorization via social networks.
- Rules that block links to a website’s communities in social networks.
- Rules that cause problems with website functionality will be removed.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Annoyances filter

**What will be blocked with this filter?**

- This filter will block obstructions on the page. These elements are not ads, but they obstruct the view and make it difficult to see the actual content of the website. Such elements include cookie notices, third-party widgets, in-page pop-ups, email subscription forms, banners with special offers, and aggressively placed social media widgets.

**Limitations and Exceptions**

If a rule is subject to the list of limitations described below, then it won’t be added to this filter.

- Rules that block elements that are essential for the website functioning (e.g. authorization forms) will not be blocked even if they satisfy other requirements.
- Rules that cause problems with website functionality will be removed.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Filter unblocking search ads and self-promotion

Unlike other filters, this one **unblocks** certain ads. Read more about it in the [article on search ads and self-promotion](../search-ads).

**Bu filtre ile nelerin engeli kaldırılacaktır?**

- Search ads (ads that you see among the results when using an online search engine).
- Website self-promotion (when an ad on a website is promoting this very website or other websites/social media/etc closely related to it).

**Limitations and Exceptions**

- Rules that cause problems with website functionality will be removed.
- Siteye özgü kurallar, yalnızca bir site yeterli trafiğe sahipse eklenecektir. Trafik, açık istatistiklerle (varsa) veya sosyal medyadaki takipçiler gibi başka yollarla belirlenir. Ayda 100 bin ziyareti olan bir site trafiği yeterli kabul edilir. Çok popüler olmayan bir site için bir kural eklemeyi düşüneceğiz, ancak son karar filtre listesi yöneticisine aittir.

## Quality requirements for filtering rules

- Kurallar performans açısından mümkün olduğunca verimli olmalıdır.
- Exception rules should be as specific as possible in order to avoid unnecessary unblocking.
- CSS and JS injection rules should be used as rarely as possible and only when it is impossible to block ads without them.