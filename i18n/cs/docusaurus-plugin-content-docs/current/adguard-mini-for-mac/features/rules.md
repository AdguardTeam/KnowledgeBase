---
title: Uživatelská pravidla
sidebar_position: 4
---

![User rules](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/user-rules.png)

User rules can be used to customize ad blocking when you want something personal: exclude a website from filtering, unblock requests, or allow scripts on a certain webpage. Lze je přidat ručně, importovat nebo vytvořit automaticky při zablokování prvku na stránce.

Chcete-li přidávat vlastní pravidla filtrování, použijte [speciální syntaxi](/general/ad-filtering/create-own-filters).

### Rule constructor

We understand that writing filtering rules yourself is not every user’s cup of tea. That’s why you can just click _Create rule_ to use a rule constructor: choose what you want to do, click through a few options, and you’re done. Block images, videos, scripts, or any other elements you’d rather not see on a page.

![Rule constructor](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/build-a-rule.png)

Here’s an example of a tricky case — a cookie popup that resists filtering. Find it in the page code, then open _User rules_ and create a rule to block it:

<iframe class="youtube-video" src="https://cdn.adtidy.org/content/blog/rule.mp4" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
