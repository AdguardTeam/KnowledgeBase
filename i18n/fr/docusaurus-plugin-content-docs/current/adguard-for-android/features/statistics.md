---
title: Statistics
sidebar_position: 3
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

The _Statistics_ module can be accessed by tapping the _Statistics_ tab (fourth icon from the left at the bottom of the screen). This feature gives you a complete picture of what is happening with the traffic on your device: how many requests are being sent and to which companies, how much data is being uploaded and downloaded, what requests are being blocked, and more. You can choose to display the statistics for the selected time period: 24 hours, 7 days, 30 days, or all time.

![Statistics \*mobile\_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

The stats are categorized into different sections.

### Requests

This section shows the number of blocked ads, trackers, and the total number of requests. You can filter requests by data type: mobile data, Wi-Fi, or all data combined.

_Recent activity_, formerly known as _Filtering log_, shows the last 10,000 requests processed by AdGuard. Tap three-dots menu (⋮) and then _Customize_ to filter requests by status (_regular_, _blocked_, _modified_, or _allowlisted_) or origin (_first-party_ or _third-party_).

You can tap a request to view its details and add a blocking or unblocking rule in one tap.

### Data usage

This section shows the amount of downloaded and uploaded data and saved traffic for the selected data type (mobile data, Wi-Fi, or all). Tap _saved_, _uploaded_, or _downloaded_ to view the graph of data usage over time.

### Apps

This section displays stats for all apps installed on your device. You can sort apps by the number of blocked ads or trackers or by the number of sent requests.

Tap _View all apps_ to expand the list of your apps, sorted by the number of ads, trackers, or requests.

![List of apps \*mobile\_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

If you tap an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to.

### Companies

This section displays companies that your device reaches out to. What does it mean? AdGuard detects the domains your device sends requests to and determines which companies they belong to. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS statistics

This section shows data about the requests handled by _DNS protection_. You can see the total number of requests sent and how many were blocked by AdGuard in figures and graphs. You'll also find statistics on the amount of traffic saved and data downloaded and uploaded.

### Battery usage

This section displays statistics on the device resources used by AdGuard during the last 24 hours. The data may differ from the stats displayed in your device settings. This happens because the system attributes the traffic of all filtered apps to AdGuard. Thus, the device shows that AdGuard consumes more resources than it actually does. [Read more about battery and traffic consumption issues](/adguard-for-android/solving-problems/battery/).
