---
title: Features overview
sidebar_position: 1
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

:::note Disclaimer

AdGuard for Android is not to be confused with AdGuard Content Blocker. AdGuard Content Blocker is an app available in Google Play that has truncated functionality to meet restrictions imposed by the store. AdGuard for Android, on the contrary, is a powerful application to block ads, manage applications, and perform other roles that will be described in this article. The only place it can be downloaded from is [the AdGuard website](https://adguard.com/adguard-android/overview.html).

:::

## Protection

This screen combines all features of AdGuard’s protection:

- Ad blocking
- Tracking protection
- Annoyance blocking
- DNS protection
- Firewall
- Browsing Security
- Integration with AdGuard VPN

More on each feature below.

### Ad blocking

The feature blocks ads by applying ad-blocking and language-specific filters. To learn about the mechanism of ad blocking, you can read a [dedicated article](/general/ad-filtering/how-ad-blocking-works).

Basic protection effectively blocks ads on most websites. For more customized ad blocking, you can:

- Enable appropriate language-specific filters — they contain filtering rules for blocking ads on websites in specific languages

- Add websites to allowlist — these websites won't be filtered by AdGuard

- Create user rules — AdGuard will apply them on specified websites. [Learn how to create your own user rules](/general/ad-filtering/create-own-filters)

![Ad blocking *mobile_border](https://cdn.adtidy.org/blog/new/o44x5ad_blocking.png)

### Tracking protection

*Tracking protection* (formerly *Stealth Mode*) prevents websites from gathering information about you, such as your IP addresses, information about your browser and operating system, screen resolution, and the page you came or were redirected from. It can also block cookies that websites use to mark the browser and save your personal settings, user preferences, or recognize you upon your next visit.

![Tracking protection *mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

There are three pre-configured protection levels. Here’s what features they have enabled:

 1. **Standard**

    a. *Block trackers*. This setting protects against online counters and web analytics tools using AdGuard’s Tracking Protection filter

    b. *Ask websites not to track you*. This setting sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

    c. *Remove X-Client-Data header*. This setting prevents Google Chrome from sending its version and modification info to Google domains (including Double Click and Google Analytics)

 2. **High**

    a. *Block trackers*

    b. *Remove tracking parameters from URLs*. This setting strips tracking parameters like `utm_*` and `fb_ref` from page URLs using the AdGuard URL Tracking filter

    c. *Hide your search queries*

    d. *Ask websites not to track you*

    e. *Self-destruction of third-party cookies*. This setting limits the time to live of third-party cookies to 180 min

    :::caution

    This setting deletes all third-party cookies, including the information of your logins through social networks or other third-party services. You may have to periodically re-log in to some websites and face other cookie-related issues. To block only tracking cookies, use the *Standard* protection level.

    :::

    f. *Remove X-Client-Data header*

 3. **Ultimate**

    a. *Block trackers*

    b. *Remove tracking parameters from URLs*

    c. *Hide your search queries*

    d. *Ask websites not to track you*

    e. *Self-destruction of third-party cookies*

    f. *Block WebRTC*. This setting blocks WebRTC, a technology that allows direct streaming of data between browsers and apps and can let others know your true IP address, even if you use a proxy or VPN

    g. *Block Push API*. This setting prevents websites from sending you notifications, regardless of the activity status of your browser

    h. *Block Location API*. This setting prevents browsers from detecting your GPS data

    i. *Hide Referer from third parties*. This setting hides the HTTP header that contains the URL of the initial page and changes it into the default or the specified one. You can set your custom referer in the respective field

    j. *Hide your User-Agent*. This setting removes identifying information from the User-Agent header that usually includes the name and version of the browser, the operating system, and language settings

    k. *Remove X-Client-Data header*

You can fine-tune Tracking protection by selecting the *Custom* protection level. [Learn more about other Tracking protection settings](/general/stealth-mode)

### Annoyance blocking

This feature is based on AdGuard's annoyance filters and allows you to block popups, online assistant windows, cookie notifications, prompts to download mobile apps, and similar annoyances. [Learn more about annoyance filters](/general/ad-filtering/adguard-filters/#adguard-filters)

![Annoyance blocking *mobile_border](https://cdn.adtidy.org/blog/new/lwujvannoyance.png)

### DNS protection

*DNS protection* allows you to filter DNS requests with the help of a selected DNS server, DNS filters, and user rules:

- Some DNS servers have blocklists that help block DNS requests to potentially harmful domains

- In addition to DNS servers, AdGuard can filter DNS requests on its own using a special DNS filter. It contains a large list of ad and tracking domains — requests to them are rerouted to a blackhole server

- You can also block and unblock domains by creating user rules. You might need to consult our article about [DNS filtering rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection *mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS server

In this section, you can select a DNS server to resolve DNS requests, block ads and trackers, and encrypt DNS traffic. Tap a server to read its full description and select a protocol. If you didn't find the desired server, you can add it manually:

- Click *Add DNS server* and enter the server address (or addresses)

- Alternatively, you can select a DNS server from the [list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/) and click *Add to AdGuard* next to it

- If you're using a private AdGuard DNS server, you can add it to AdGuard from the [dashboard](https://adguard-dns.io/dashboard/)

 By default, *Automatic DNS* is selected. It sets a DNS server based on your AdGuard and device settings. If you have integration with AdGuard VPN or another SOCKS5 proxy enabled, it connects to *AdGuard DNS Non-filtering* or any other server you specify. In all other cases, it connects to the DNS server selected in your device settings.

#### DNS filters

This section allows you to add custom DNS filters and DNS filtering rules. You can find more filters at [filterlists.com](https://filterlists.com/).

### Firewall

This feature helps manage Internet access for specific apps installed on your device and for the device in general.

![Firewall *mobile_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

#### Global firewall rules

This section allows you to control Internet access for the entire device.

![Global firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

These rules apply to all apps on your device unless you've set custom rules for them.

#### Custom firewall rules

In this section, you can control Internet access for specific apps — block the ones you don’t find trustworthy, or, on the contrary, unblock the ones you want to use despite global firewall rules.

1. Open *Custom firewall rules*. Under *Apps with custom rules*, tap *Add app*.

    ![Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

1. Select the app for which you want to set individual rules.

    ![Adding an app to Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

1. In *Available custom rules*, select the ones you want to configure and tap the "+" icon. The rules will now appear in *Applied custom rules*.

    ![Added rule *mobile_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

1. If you need to block a specific type of connection, toggle the switch to the left. If you want to allow it, leave the switch enabled. Custom rules override global ones: any changes you make in *Global firewall rules* will not affect this app.

To delete a rule or app from *Custom rules*, swipe it to the left.

### Quick actions

*Quick actions* are based on the requests from *Recent activity* (which can be found in *Statistics*). This section shows which apps have recently connected to the Internet.

![Quick actions *mobile_border](https://cdn.adtidy.org/blog/new/yigrfquick_actions.png)

If you see an app that shouldn't be using the Internet at all or an app that you haven't used recently, you can block its access on the fly.

### Browsing Security

Browsing Security protects you from visiting phishing and malicious websites. It also warns you about potential malware.

![Browsing Security *mobile_border](https://cdn.adtidy.org/blog/new/1y6a8browsing_security.png)

If you're about to visit a dangerous website, Browsing Security will show you the following warning:

![Browsing Security warning *mobile_border](https://cdn.adtidy.org/blog/new/o8s3Screenshot_2023-06-29-15-49-01-514-edit_com.android.chrome.jpg)

> Please note that AdGuard for Android is not an antivirus program. It neither stops viruses from downloading nor deletes already downloaded ones. To fully protect your device, we recommend using AdGuard in conjunction with an antivirus tool.

Browsing Security is safe: AdGuard does not know what websites you visit. It uses hash prefixes instead of URLs to check website security.

### Integration with AdGuard VPN

AdGuard for Android creates a local VPN to filter traffic. Thus, other VPN apps cannot be used while AdGuard for Android is running. However, both AdGuard and AdGuard VPN apps have Integrated modes that let you use them together.

In this mode, AdGuard VPN acts as an outbound proxy server through which AdGuard routes its traffic. This allows AdGuard to create a VPN interface and block ads and trackers locally, while AdGuard VPN routes all traffic through a remote server.

If you disable AdGuard VPN, AdGuard will stop using it as an outbound proxy. If you disable AdGuard, AdGuard VPN will route traffic through its own VPN interface.

If you have AdGuard Ad Blocker and install AdGuard VPN, the Ad Blocker app will detect it and enable *Integration with AdGuard VPN* automatically. The same happens in reverse. Note that if you've enabled integration, you won't be able to manage app exclusions and connect to DNS servers from the AdGuard VPN app. You can specify apps to be routed through your VPN tunnel via *Settings* → *Filtering* → *Network* → *Proxy* → *Apps operating through proxy*. To select a DNS server, open AdGuard → *DNS protection* → *DNS server*.

## App management

This section allows you to manage permissions and filtering settings for all apps installed on your device.

![App management *mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

By clicking an app you can manage its settings:

- Route its traffic through AdGuard
- Block ads and trackers in this app (*Filter app content*)
- Filter its HTTPS traffic (for non-browser apps, it requires [installing AdGuard's CA certificate into the system store](/adguard-for-android/solving-problems/https-certificate-for-rooted/), available on rooted devices)
- Route it through your specified proxy server or AdGuard VPN in the Integration mode

![App management: Chrome *mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

From the context menu, you can also access the app's stats.

![App management: Chrome. Context menu *mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Problem-free and problematic apps

By default, only problem-free apps are routed through AdGuard and filtered. These are the apps that still work properly when filtering is enabled.

Problematic apps, such as Download Manager, radio, system apps with UID 1000 and 1001 (for example, Google Play services) may work incorrectly when routed through AdGuard. That's why you may see the following warning when trying to route or filter all apps:

![Route all apps dialog *mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

To ensure proper operation of all apps installed on your device, we strongly recommend that you route only problem-free apps through AdGuard. You can see the full list of apps not recommended for filtering in *Settings* → *General* → *Advanced* → *Low-level settings* → *Protection* → *Excluded apps*.

## Statistics

This feature gives you a complete picture of what is happening with the traffic on your device: how many requests are being sent and to which companies, how much data is being uploaded and downloaded, what requests are being blocked, and more.

![Statistics *mobile_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

The stats are categorized into different sections.

### Requests

This section shows the number of blocked ads, trackers, and the total number of requests for the selected time period: 24 hours, 7 days, 30 days, or all time. You can also filter requests by data type: mobile data, Wi-Fi, or all data combined.

*Recent activity*, formerly known as *Filtering log*, shows the last 10,000 requests processed by AdGuard. Tap *Customize* to filter requests by status (*regular*, *blocked*, *modified*, or *allowlisted*) or origin (*first-party* or *third-party*).

You can tap a request to view its details and add a blocking or unblocking rule.

### Data usage

This section shows the amount of downloaded, uploaded, and saved traffic for the selected time period and data type. Tap *saved*, *uploaded*, or *downloaded* to view the graph of data usage over time.

### Apps

This section displays stats for all apps installed on your device. You can sort apps by the number of blocked ads or trackers or by the number of sent requests.

Tap *View all apps* to expand the list of your apps, sorted by the number of ads, trackers, or requests.

![List of apps *mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

If you tap an app, you can see its full stats: the requests it sends and the domains and companies it reaches out to.

### Companies

This section displays companies that your device reaches out to. What does it mean? AdGuard detects the domains your device sends requests to and determines which companies they belong to. A database of companies can be found on [GitHub](https://github.com/AdguardTeam/companiesdb).

### DNS statistics

This section shows data about the requests handled by *DNS protection*. You can see the total number of requests sent and how many were blocked by AdGuard in figures and graphs. You'll also find statistics on the amount of traffic saved, downloaded, and uploaded.

### Battery usage

This section displays statistics on the device resources used by AdGuard during the last 24 hours. The data may differ from your device settings. This happens because the system attributes the traffic of filtered apps to AdGuard. Thus, the device shows that AdGuard consumes more resources than it actually does. [Read more about battery and traffic consumption issues](/adguard-for-android/solving-problems/battery/)

## Settings

### General

This section helps you manage the appearance and behavior of the app: you can set the color theme and language, manage notifications, and more. If you want to help the AdGuard team detect app crashes and research usability, you can enable *Auto-report crashes* and *Send technical and interaction data*.

![General *mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Under *App and filter updates*, you can configure automatic filter updates and select an app update channel. Choose *Release* for more stability and *Beta* or *Nightly* for early access to new features.

![Updates *mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

#### Advanced settings

*Automation* allows you to manage AdGuard via tasker apps.

*Watchdog* helps protect AdGuard from being disabled by the system ([read more about Android's battery save mode](/adguard-for-android/solving-problems/background-work/)). The value you enter will be the interval in seconds between watchdog checks.

*Logging level* defines what data about the app's operation should be logged. By default, the app collects the data about its events. The *Debug* level logs more events — enable it if asked by the AdGuard team to help them get a better understanding of the problem. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/logcat/)

![Advanced *mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

The *Low-level settings* section is for expert users. [Read more about low-level settings](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings *mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

### Filtering

This section allows you to manage HTTPS filtering settings, filters, and userscripts, and set up a proxy server.

![Filtering *mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

#### Network

##### HTTPS filtering

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

###### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

###### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

###### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. If needed, you can enable the *Filter websites with EV certificates* option.

##### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under *Apps operating through proxy*, you can select apps that will route their traffic through your specified proxy. If you have *Integration with AdGuard VPN* enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

##### Routing mode

This section allows you to select the traffic filtering method.

- *Local VPN* filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The *Local VPN* mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [*Integrated mode*](#integration-with-adguard-vpn).

:::

- *Automatic proxy* is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

- *Manual proxy* involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

#### Filters

AdGuard blocks ads, trackers, and annoyances by applying rules from its filters. Most features from the *Protection* section are powered by [AdGuard filters](/general/ad-filtering/adguard-filters/#adguard-filters). If you enable *Basic protection*, it will automatically turn on the AdGuard Base filter and AdGuard Mobile Ads filter. And vice versa: if you turn off both filters, *Basic protection* will also be disabled.

![Filters *mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filters enabled by default are enough for normal AdGuard operation. However, if you want to customize ad blocking, you can use other AdGuard or third-party filters. To do this, select a category and enable the filters you'd like. To add a custom filter, tap *Custom filters* → *Add custom filter* and enter its URL or file path.

:::note

If you activate too many filters, some websites may work incorrectly.

:::

[Read more about filters](https://adguard.com/en/blog/what-are-filters.html)

#### Userscripts

Userscripts are mini-programs written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

![Userscripts *mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

##### AdGuard Extra

AdGuard Extra is a custom userscript that prevents websites from bypassing ad blockers and re-inserting blocked ads.

### License

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](#free-vs-full-version)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status if you have recently extended its validity
- Open the AdGuard account to manage your license there
- Reset your license – for example, if you've reached device limit for this license and want to apply another one

![License screen *mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

### Support

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting *[FAQ](https://adguard.com/support/adguard_for_android.html)* or this knowledge base before contacting support.

![Support *mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via *Report incorrect blocking*.

For unusual app behavior, select *Report a bug*. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use *Request a feature*.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::

## Free vs full version

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xNOeHpZgjFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

AdGuard for Android has a free and a paid version. Paid features extend AdGuard's capabilities:

- *Ad blocking in apps* allows you to block ads in non-browser apps. You can specify apps for filtering in [*App management*](#app-management)

:::note

AdGuard uses its own ad-free media player to block ads in YouTube videos. To open the media player, open the YouTube app and share a video with AdGuard. This feature is free.

:::

- *Tracking protection* increases your privacy by blocking tracking requests, online counters, UTM tags, analytics systems, and more. [Back to Tracking protection](#tracking-protection)

- *Browsing Security* warns you if you're about to visit a potentially dangerous website. [Back to Browsing Security](#browsing-security)

- *Custom filters and user rules* allow you to add your own filtering rules and third-party filters to fine-tune ad blocking. [Back to filters](#filters)

- *Userscripts* allow you to use AdGuard Extra to block ads reinjection and extend your browser's functionality. [Back to userscripts](#userscripts)

You can get access to these features by [purchasing a license](https://adguard.com/license.html). [How to activate the license](/general/license/activation/#activating-adguard-for-android)

## Rooted vs non-rooted devices

Due to security measures of the Android OS, some AdGuard features are only available on rooted devices. Here's the list of them:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](#security-certificates), as most apps do not trust certificates in the user store. Installing a certificate into the system store is only possible on rooted devices
- The [**Automatic proxy** routing mode](#routing-mode) requires root access due to Android's limitations on system-wide traffic filtering
- The **Manual proxy** routing mode requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard

## Assistant

Assistant is a handy tool to quickly change app or website settings and view statistics without launching the AdGuard app.

### How to access Assistant

 1. On your Android device, swipe down from the top of the screen to open the notification shade.
 2. Find and **expand** the AdGuard notification.

    ![Expand AdGuard notification in the notification shade *mobile](https://cdn.adtidy.org/blog/new/jkksbhassistant-shade.png)

 3. Tap *Assistant*.

    ![Tap Assistant *mobile](https://cdn.adtidy.org/blog/new/1qvlhassistant-tap-assistant.jpg)

### How to use Assistant

When you open Assistant, you will see two tabs: **Apps** and **Websites**. Each of them contains a list of the recently used apps and websites respectively.

![Assistant main *mobile](https://cdn.adtidy.org/blog/new/i5mljAssistant-main.jpg)

### Apps tab

After you select an app (**let's take Chrome as an example**), you'll get a few options of what you can do.

![Assistant Chrome menu *mobile_border](https://cdn.adtidy.org/blog/new/e1sr4Chrome-assistant.jpg)

#### Recent activity

You'll be taken to the AdGuard app, where you'll see detailed info on the last 10K requests made by Chrome.

![App recent activity *mobile_border](https://cdn.adtidy.org/blog/new/66hpechrome-recent-activity.png)

#### App statistics

You'll be taken to the AdGuard app, where you'll see detailed statistics about Chrome:

- Number of ads and trackers blocked in Chrome
- Data saved by blocking Chrome's ad or tracking requests
- Companies that Chrome sends requests to

#### App management

You'll be taken to the AdGuard app screen where you can disable AdGuard protection for the app.

#### Firewall settings

You'll be taken to the AdGuard screen where you can change Firewall settings for the app, meaning you can manage the app's Internet access.

### Websites tab

![Assistant websites tab *mobile](https://cdn.adtidy.org/blog/new/74y9rAssistant-websites.jpg)

Select a website (**let's take google.com as an example**) and you'll see few options of what you can do.

![Assistant google.com info *mobile](https://cdn.adtidy.org/blog/new/tht0tgoogle-com-assistant.jpg)

#### Add to allowlist

Tapping this option will instantly add google.com to allowlist, and AdGuard will no longer filter it (meaning ads and trackers won't be blocked for the website).

#### Recent activity

You'll be taken to the AdGuard app, where you'll see detailed info on the last 10K requests to google.com.

![website recent activity *mobile_border](https://cdn.adtidy.org/blog/new/xq7f3assistant-website-recent-activity.png)

#### Website statistics

You'll be taken to the AdGuard app, where you'll see detailed statistics about google.com:

- Number of blocked ad and tracking requests to google.com
- Data saved by blocking ad and tracking requests to google.com
- Apps that send requests to google.com
- Information about google.com's subdomains
