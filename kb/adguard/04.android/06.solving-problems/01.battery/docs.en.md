---
title: 'Battery and traffic consumption issues'
taxonomy:
    category:
        - docs
visible: true
---

Sometimes you may notice that, according to Android built-in statistics, AdGuard consumes a lot of traffic and/or battery resource.

Both these problems are two sides of the same coin. Since in the process of filtering all the mobile traffic goes through AdGuard, Android decides that it is AdGuard that consumes it all. In reality, of course, it is not true.

Battery and traffic consumption shown in devices statistics **do not represent the facts**. The thing is, Android attributes all of the WiFi and Mobile traffic to AdGuard, which was in fact consumed by other apps. Due to this, AdGuards real share of total consumed traffic and battery resource increases, and the share of other apps, on the contrary, decreases.

### Own battery usage stats screen

To mitigate this misconception, we added a new screen called 'Battery usage'. You can access it by tapping on the battery icon in the top right corner of the main screen.
