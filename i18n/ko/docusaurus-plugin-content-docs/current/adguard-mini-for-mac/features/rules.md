---
title: 사용자 규칙
sidebar_position: 4
---

![User rules](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/user-rules.png)

User rules can be used to customize ad blocking when you want something personal: exclude a website from filtering, unblock requests, or allow scripts on a certain webpage. 수동으로 추가하거나 가져올 수 있습니다. 페이지에서 항목을 차단하면 사용자 정의 규칙이 자동으로 만들어집니다.

자신만의 필터링 규칙을 추가하려면 [특수 구문](/general/ad-filtering/create-own-filters)을 사용하세요.

### Rule constructor

We understand that writing filtering rules yourself is not every user’s cup of tea. That’s why you can just click _Create rule_ to use a rule constructor: choose what you want to do, click through a few options, and you’re done. Block images, videos, scripts, or any other elements you’d rather not see on a page.

![Rule constructor](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/build-a-rule.png)

Here’s an example of a tricky case — a cookie popup that resists filtering. Find it in the page code, then open _User rules_ and create a rule to block it:

<iframe class="youtube-video" src="https://cdn.adtidy.org/content/blog/rule.mp4" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
