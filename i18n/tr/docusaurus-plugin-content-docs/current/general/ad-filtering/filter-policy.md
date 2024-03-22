---
title: AdGuard filter policy
sidebar_position: 6
---

At AdGuard, we’ve long followed certain principles in making our filters, which, along with filter descriptions, are outlined below as part of our filtering policy.

## Ortak kriterler

These criteria are equally applied to the rules of all filters.

- Rules for a specific site will only be added if there is sufficient traffic. Traffic is determined by public statistics (if available) or indirect indicators, such as the number of subscribers on social networks. A site’s traffic is considered sufficient if it reaches 100,000 visits per month. We will consider adding a rule for a site that is not as popular, but the final decision rests with filter developers. Sites with low traffic should still be checked for third-party analytics and advertising networks
- The decision about content farms (websites that produce large amounts of content primarily aimed at achieving high visibility in search results and generating advertising revenue) is made by filter developers depending on the quality of the content

Quality requirements for filtering rules:

- Rules should not negatively impact the websites in terms of performance
- Unblocking rules must be as specific as possible to avoid unblocking anything unnecessary
- JavaScript rules should be used as sparingly as possible and only if blocking ads is impossible without them

## Reklam engelleme filtreleri

### Terminology

**Ad blocker** is a software or hardware tool designed to filter, hide, or block advertisements and other elements on web pages. Ad blockers are created to improve user experience, reduce page load times, decrease internet traffic consumption, block ads, enhance privacy while browsing websites and using applications, and block annoying elements.

A **filter** (or a **filter list**) is a set of filtering rules designed to filter content and block various types of advertisements and other types of content using ad blockers. These filters usually operate at the level of the web browser, programs, or DNS server.

**Anti-adblock** is a technology used by websites or applications intended to detect ad blocking and react to it in different ways: tracking, reinjecting ads, encouraging to disable ad blocker (so called “adblock walls”). Anti-adblocks may be of different types:

- Anti-adblock that blocks website content without offering an alternative: to continue using the site, the user must disable the ad blocker on the site
- “Anti-adblock wall” with alternative options offered, such as purchasing a subscription to continue using the ad blocker
- Informational messages that do not obligate action: users are asked to disable the ad blocker, but these messages can be closed, allowing users to continue using the site without restrictions
- Implementing alternative advertising in response to ad blocker usage: sites introduce alternative advertising when ad blockers are detected
- Paywall: a method of content monetization where content is partially or fully hidden from users, with a message prompting them to purchase a subscription for access

### Filtreler

AdGuard ad-blocking filters include:

- AdGuard Temel filtresi
- AdGuard Mobil Reklam filtresi
- Dil ilkesine göre ayrılmış bölgesel filtreler — Çince, Felemenkçe, Fransızca, Almanca, Japonca, Rusça, İspanyolca/Portekizce, Türkçe ve Ukraynaca

### Bu filtrelerin amacı

- **Base filter** is designed to block ads on English-language websites and those for which there is no separate filter. Ayrıca, dilden bağımsız olarak tüm siteler için geçerli olan genel filtreleme kuralları da içerir
- **Mobile Ads filter** blocks advertisements on mobile versions of websites and within mobile applications. Dile dayalı bir sınıflandırma yoktur
- **Regional filters** follow the same policy as the **Base filter**, but limited to websites in certain languages

The goal of ad-blocking filters is to block all types of advertising on websites, applications, and certain devices that can load ads from the Internet:

- Banners — advertisements displayed as images in various parts of web pages
- Teasers — text or graphical ads, often animated, designed to intrigue visitors (sensational headlines, attention-grabbing images) and prompt them to click on the banner (clickbait)
- Text ads — advertising in the form of text, including links
- Modal adverts — advertising that suddenly appears over the current content in the form of modal windows
- Popunders — advertising that opens in a separate window under the current one, when clicked anywhere on the page
- Redirect advertising — mechanisms which automatically redirect users to another site after clicking
- Ads disguised as site content, which open pages with promoted products or unrelated content upon clicking
- Video ads — advertisement videos embedded within video content or in separate ad elements on websites and applications
- Interactive ads — ads with which users can interact (e.g., games and surveys, upon completion of which the advertised item opens)
- Interstitial ads — full-screen ads on mobile devices that cover the interface of the application or web browser
- Ads leftovers that occupy large spaces or stand out against the background and attract visitors' attention (except barely discernible or unnoticeable ones)
- Anti-adblock advertising — alternative advertising displayed on the site when the main one is blocked
- Site’s own advertising, if it has been blocked by general filtering rules (see *Limitations and Exceptions*)
- Anti-adblock scripts that prevent site usage (see *Limitations and Exceptions*)
- Advertising injected by malware, if detailed information about its loading method or steps for reproduction is provided
- Unwanted mining — scripts that mine cryptocurrency without user consent

### Kısıtlamalar ve istisnalar

- Sitenin kendi reklamları kasıtlı olarak engellenmemelidir. Ancak, engelleme genel filtreleme kurallarından kaynaklanıyorsa engelleme kaldırılmamalıdır
- Ödeme duvarları gibi içerik erişim önlemleri engellenmez
- Anti-adblock walls will be blocked in the following cases:
    - They aggressively insist on disabling or removing the ad blocker or effectively prevent using the website
    - They feature incorrect and misleading descriptions of possible consequences of ad blockers’ use
    - They put visitors at risk of malvertising — when unblocked advertisements come from dubious sources
- We do not block ad blocker detection messages that satisfy at least one of the following criteria:
    - They allow the usage of the website and do not overlay the significant amount of content
    - They provide an alternative to disabling an ad blocker given that this alternative does not put the users’ privacy or security at risk
    - They allow the user to proceed to the website’s content or offer a feasible value exchange that does not put the user’s privacy or security at risk
    - Some legacy rules may continue to block messages that satisfy one or more of these criteria. If identified, such rules will be handled according to this policy
- Mining pools are not blocked if they are public and not used solely for malicious purposes

## İzleme koruması filtreleri

### Terminology

**Tracking** — the process of monitoring and collecting data about users and their interactions with websites and applications for marketing purposes, as well as to obtain telemetry about the functioning of websites or applications for the purpose of analyzing their operation. This process includes tracking visited pages, time spent, interaction with website elements (e.g., clicks, form submissions), and other metrics. It allows website and application owners to better understand user behavior, optimize functionality, and adapt marketing strategies. Tracking is also used to monitor performance, usage patterns, and identify issues, providing developers with the necessary data to improve the stability and quality of the website or application. Elde edilen veriler bir kişinin kimliğini ortaya çıkarmasa bile, bu tür eylemler yine de izleme olarak kabul edilir.

**Tracker** — software used on a website or in an application and designed to collect information about their operation and visitors’ actions. It tracks user interaction with the website or application, recording data about page views, time spent, clicks, form submissions, and other events. Its purpose is to provide website and application owners with a tool for analyzing user behavior, improving the user experience, and optimizing content and advertising.

**URL tracking parameter** — a part of the address that is added to links by analytics systems or present in some links on web pages. When a request is made, this URL tracking parameter can be processed by the backend of an analytics system or website, which will extract information from it. For example, URL tracking parameters can transmit information about clicks or advertising campaigns. URL izleme parametreleri dolandırıcılığa karşı koruma veya bot tespit sistemleri tarafından da kullanılabilir.

**Cookies** — files that websites send to and store on devices. These files contain various information — both necessary for the functioning of the site on the device and used for analytics purposes — unique identifiers used to track visitor activity on the website, advertising parameters, and more.

### Filtreler

AdGuard izleme korumasu filtreleri şunları içerir:

- AdGuard İzleme Koruması filtresi
- AdGuard URL İzleme filtresi

### Bu filtrelerin amacı

**İzleme Koruması filtresi**, kullanıcıların kişisel verilerini toplayan izleyicileri engellemek ve kullanıcıların gizliliğini artırmak için tasarlanmıştır.

What is blocks:

- Analytics systems’ scripts
- Websites’ and applications’ own tracking scripts
- Masked CNAME trackers
- Tracking cookies
- Tracking pixels
- Tracking APIs of browsers
- Privacy Sandbox functionality in Google Chrome and its forks used for tracking (Google Topics API, the Protected Audience API)

The **URL Tracking filter** is designed to remove tracking parameters from web addresses

### Kısıtlamalar ve istisnalar

Tracking protection filters should not block a tracker if blocking would disrupt the correct functioning of the website:

- Anti-bots and fraud protection if it interferes with using the site. Örneğin, PerimeterX veya hCaptcha ile engelleme, site ziyaretçisini bir captcha ile doğrulamaya çalıştığında sorunlara neden olur
- Error tracking systems like Sentry or Bugsnag are not blocked

## Annoyance filters

Annoyance filters are designed to improve the usability of websites by blocking elements on pages that are not advertisements but distract from and interfere with site interaction or content consumption — such as various modal windows and interactive forms, cookie consent notifications and requests, mobile app banners, and various widgets.

### Terminology

**Cookie notice** — a form that describes the types and use of cookies on a website. A cookie notice appears when a user visits the website, informing the user that the website uses cookies or other tracking technologies to collect and use personal information, and explaining why and with whom the information collected is shared.

**CMP (Consent Management Platform)** — software that helps websites comply with cookie usage rules. CMPs limit cookies usage until user consent is obtained, providing users with the option to accept certain cookies and manage privacy settings.

**Widget**  — a user interface element that extends the functionality of a website. Web widgets are integrated into web pages and can include interactive elements such as buttons, forms, or banners. They can provide users with access to specific services or content without requiring navigation to other pages.

**Popup** — a window that appears above the current web page. It is intended to display additional information, advertisements, notifications, or data entry forms. Popups usually block the view of the main content of the page and require user action to close, which can be irritating.

### Filtreler

For better customization, annoyance filters are divided by their purpose:

- AdGuard Çerez Bildirimleri filtresi
- AdGuard Açılır Pencereler filtresi
- AdGuard Mobil Uygulama Afişleri filtresi
- AdGuard Araçlar filtresi
- AdGuard Diğer Can Sıkıcı Öğeler filtresi
- AdGuard Annoyances filter — a combined filter that includes all 5 specialized annoyance filters

### Bu filtrelerin amacı

#### AdGuard Çerez Bildirimleri filtresi

This filter is designed to block both cookie notices and requests from cookie management platforms (CMPs). Various methods may be applied to cookie notices and CMPs. In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when the site’s functionality and display of third-party content require cookie consent, the following methods are applied:

- Scriptlets are used to bypass the consent request (practically not applicable on sites with restrictions on loading third-party content until a decision is made)
- Setting a cookie or key in the site’s local storage in such a way that the script considers the user to have made a choice
- Simulating user action using a rule that clicks a specified button and interrupts its execution 10 seconds after loading. İki seçenek mümkündür:
    - Reject (except for functional cookies — depending on the CMP system) — the preferred option, as there is less risk of loading additional analytics tools
    - Accept — this option is used as the last resort if other methods fail. In this case, the site is additionally checked for the use of analytics tools, which are then blocked by the **AdGuard Tracking Protection filter**

**Kısıtlamalar ve istisnalar**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### AdGuard Açılır Pencereler filtresi

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Kısıtlamalar ve istisnalar**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. Karar filtre geliştiricileri tarafından verilir
- Content access measures that ask the user to pay to access the content must not be circumvented

#### AdGuard Mobil Uygulama Afişleri filtresi

This is a filter that blocks banners and popups that encourage visitors to install mobile applications.

**Kısıtlamalar ve istisnalar**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### AdGuard Araçlar filtresi

This is a filter that blocks various widgets that are not essential for the functioning of the website or for interaction with it:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Kısıtlamalar ve istisnalar**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard Diğer Can Sıkıcı Öğeler filtresi

Bu filtre, diğer filtrelerde yer almayan can sıkıcı öğeleri engellemek ve çeşitli ince ayarlar uygulamak için tasarlanmıştır. Bunun amacı:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Kısıtlamalar ve istisnalar**

This filter may contain rules that are not suitable for all users. Bazen bu filtrenin devre dışı bırakılması önerilir. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Sosyal medya filtreleri

### Filtreler

AdGuard Sosyal Medya filtreleri şunları içerir:

- AdGuard Social Media filter

### Bu filtrelerin amacı

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Kısıtlamalar ve istisnalar

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Diğer filtreler

This group contains filters that are not essential for blocking advertisements.

### Terminology

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on Search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtreler

- Arama motoru reklamları ve öz tanıtımına izin veren filtre
- AdGuard DNS filter
- AdGuard Experimental filter

### Bu filtrelerin amacı

#### Arama motoru reklamları ve öz tanıtımına izin veren filtre

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Kısıtlamalar ve istisnalar**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Kısıtlamalar ve istisnalar**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Kısıtlamalar ve istisnalar**

- Rules should not explicitly break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
