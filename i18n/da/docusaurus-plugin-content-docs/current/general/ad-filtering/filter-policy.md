---
title: AdGuard-filterpolitik
sidebar_position: 6
---

:::note Ansvarsfraskrivelse

Læs venligst denne filterpolitik omhyggeligt inden aktivering af filtre.

Brug af AdGuard Ad Blocker, AdGuard DNS og deres filtre kan påvirke, hvordan tredjepartswebsteder og -tjenester fungerer. Brugeren er ansvarlig for at gennemgå samt følge politikkerne og betingelserne for alle websteder/tjeneste, som benyttes.

Inden aktivering af filtre leveret af tredjeparter, accepterer brugeren at gennemgå deres gældende vilkår og træffe en informeret beslutning om brugen af dem. AdGuard er ikke ansvarlig for, hvordan tredjepartsfiltre fungerer, eller hvad deres vilkår indeholder, og deres tilstedeværelse i AdGuard-produkter er ikke en anbefaling til brug af dem.

:::

Hos AdGuard har vi længe fulgt visse principper ved oprettelsen af vores filtre, som sammen med filterbeskrivelser er skitseret nedenfor som en del af vores filtreringspolitik.

## Fælles kriterier

Disse kriterier anvendes ligeligt på reglerne for alle filtre.

- Regler for et specifikt websted tilføjes kun, hvis der er tilstrækkelig trafik. Trafikken bestemmes af offentlige statistikker (hvis tilgængelige) eller indirekte indikatorer, såsom antallet af abonnenter på sociale netværk. En websteds trafik anses for tilstrækkelig, når det har 100.000 månedlige besøgende. Vi vil overveje at tilføje en regel for et websted, der ikke er så populært, men den endelige beslutning er op til filterudviklerne. Websteder med lav trafik bør stadig tjekkes for tredjepartsanalyse- og reklamenetværk
- Beslutningen om indholdsfarme (websteder, som producerer store mængder indhold, primært rettet mod at opnå høj synlighed i søgeresultater og generere reklameindtægter) træffes af filterudviklere afhængigt af kvaliteten af indholdet

Kvalitetskrav til filtreringsregler:

- Regler bør ikke påvirke webstederne negativt ift. ydeevne
- Afblokeringsregler skal være så specifikke som muligt for at undgå afblokering af noget unødvendigt
- JavaScript-regler bør bruges så lidt som muligt, og kun hvis det er umuligt at blokere annoncer uden dem

## Adblockerfiltre

### Terminologi

En **Adblocker** er et software- eller hardwareværktøj designet til at filtrere, skjule eller blokere annoncer og andre elementer på websider. Adblockere er skabt til at forbedre brugeroplevelsen, reducere sideindlæsningstider, reducere internettrafikforbrug, blokere annoncer og forbedre fortroligheden, mens websteder gennemses og applikationer bruges, samt til at blokerer irriterende elementer.

Et **filter** (eller en **filterliste**) er et sæt filtreringsregler designet til at filtrere indhold og blokere forskellige typer reklamer og andre indholdstyper vha. adblockere. Disse filtre fungerer normalt på niveau med webbrowseren, programmerne eller DNS-serveren.

**Anti-adblock** er en teknologi brugt af websteder eller applikationer mhp. at registrere adblocking og reagere herpå på forskellige måder: Sporing, genindsættelse af annoncer, tilskyndelse til at deaktivere adblocking (såkaldte "adblock walls"). Forskellige typer af Anti-adblocks findes:

- Anti-adblock, der blokerer webstedsindhold uden at tilbyde et alternativ: For fortsat brug af webstedet, skal brugeren deaktivere adblocking under besøget
- "Anti-adblock wall" med alternative muligheder, såsom køb af abonnement for fortsat brug af adblockeren
- Informationsmeddelelser, som ikke forpligter til handling: Brugere anmodes om at deaktivere adblocking, men disse meddelelser kan lukkes, hvorefter brugerne kan fortsætte med at bruge webstedet uden restriktioner
- Implementering af alternativ annoncering som reaktion på brug af adblocking: Websteder introducerer alternativ annoncering, når adblockere detekteres
- Paywall: En metode til indtægtsgenerering på indhold, hvor indholdet er delvist eller helt skjult for brugerne, med en meddelelse, der beder dem købe et abonnement for at få adgang

### Filtre

AdGuard-adblockingfiltre omfatter:

- AdGuard Basisfilter
- AdGuard Mobilannoncefilter
- Regionale filtre opdelt efter sprogprincip — fransk, hollandsk, japansk, kinesisk, russisk, spansk/portugisisk, tysk, tyrkisk og ukrainsk

### Formålet med disse filtre

- **Basisfilter** er designet til at blokere annoncer på engelsksprogede websteder og dem, hvor der ikke er et separat filter. It also contains general filtering rules that apply to all sites regardless of language
- **Mobile Ads filter** blocks advertisements on mobile versions of websites and within mobile apps. There is no segmentation based on language
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
- Interstitial ads — full-screen ads on mobile devices that cover the interface of the app or web browser
- Ads leftovers that occupy large spaces or stand out against the background and attract visitors' attention (except barely discernible or unnoticeable ones)
- Anti-adblock advertising — alternative advertising displayed on the site when the main one is blocked
- Bait elements that are used by multiple known adblock detection scripts to detect an ad blocker presence for different goals including changing the way ads are shown, fingerprinting, etc.
- Site’s own advertising, if it has been blocked by general filtering rules (see *Limitations and exceptions*)
- Anti-adblock scripts that prevent site usage (see *Limitations and exceptions*)
- Advertising injected by malware, if detailed information about its loading method or steps for reproduction is provided
- Unwanted mining — scripts that mine cryptocurrency without user consent

### Limitations and exceptions

- The site’s own advertising should not be deliberately blocked. However, it should not be unblocked if the blocking is caused by general filtering rules
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- Anti-adblock walls will be blocked in the following cases:
    - They aggressively insist on disabling or removing the ad blocker or effectively prevent using the website
    - They feature incorrect and misleading descriptions of possible consequences of ad blockers’ use
    - They put visitors at risk of malvertising — when unblocked advertisements come from dubious sources
    - They violate or negatively impact user privacy
- We do not block ad blocker detection messages that satisfy at least one of the following criteria:
    - They allow the usage of the website and do not overlay the significant amount of content
    - They provide an alternative to disabling an ad blocker given that this alternative does not put the users’ privacy or security at risk
    - They allow the user to proceed to the website’s content
    - Some legacy rules may continue to block messages that satisfy one or more of these criteria. If identified, such rules will be handled according to this policy
- Mining pools are not blocked if they are public and not used solely for malicious purposes

## Tracking protection filters

### Terminologi

**Tracking** — the process of monitoring and collecting data about users and their interactions with websites and applications for marketing purposes, as well as to obtain telemetry about the functioning of websites or applications for the purpose of analyzing their operation. This process includes tracking visited pages, time spent, interaction with website elements (e.g., clicks, form submissions), and other metrics. It allows website and application owners to better understand user behavior, optimize functionality, and adapt marketing strategies. Tracking is also used to monitor performance, usage patterns, and identify issues, providing developers with the necessary data to improve the stability and quality of the website or application. Even if the data obtained cannot reveal a person’s identity, such actions are still considered tracking.

**Tracker** — software used on a website or in an application and designed to collect information about their operation and visitors’ actions. It tracks user interaction with the website or application, recording data about page views, time spent, clicks, form submissions, and other events. Its purpose is to provide website and application owners with a tool for analyzing user behavior, improving the user experience, and optimizing content and advertising.

**URL tracking parameter** — a part of the address that is added to links by analytics systems or present in some links on web pages. When a request is made, this URL tracking parameter can be processed by the backend of an analytics system or website, which will extract information from it. For example, URL tracking parameters can transmit information about clicks or advertising campaigns. URL tracking parameters can also be used by fraud protection or bot detection systems.

**Cookies** — files that websites send to and store on devices. These files contain various information — both necessary for the functioning of the site on the device and used for analytics purposes — unique identifiers used to track visitor activity on the website, advertising parameters, and more.

### Filtre

AdGuard tracking protection filters include:

- AdGuard Tracking Protection filter
- AdGuard Mail Sporingsbeskyttelsesfilter
- AdGuard URL Tracking filter

### Formålet med disse filtre

**Tracking Protection filter** is designed to block trackers that collect users’ personal data and to improve users’ privacy.

What it blocks:

- Analytics systems’ scripts
- Websites’ and applications’ own tracking scripts
- Masked CNAME trackers
- Tracking cookies
- Tracking pixels
- Tracking APIs of browsers
- Detection of the ad blocker for tracking purposes
- Privacy Sandbox functionality in Google Chrome and its forks used for tracking (Google Topics API, the Protected Audience API)

The **URL Tracking filter** is designed to remove tracking parameters from web addresses

Filteret **Mail Sporingsbeskyttelse** blokerer sporingspixels indlejret i e-mails for at forhindre afsendere i at monitorere, hvornår beskederne åbnes.

### Limitations and exceptions

Tracking protection filters should not block a tracker if blocking would disrupt the correct functioning of the website:

- Anti-bots and fraud protection if it interferes with using the site. For example, with PerimeterX or hCaptcha blocking causes problems when the site attempts to verify its visitor with a captcha
- Error tracking systems like Sentry or Bugsnag are not blocked

## Annoyance filters

Annoyance filters are designed to improve the usability of websites by blocking elements on pages that are not advertisements but distract from and interfere with site interaction or content consumption — such as various modal windows and interactive forms, cookie consent notifications and requests, mobile app banners, and various widgets.

### Terminologi

**Cookie notice** — a form that describes the types and use of cookies on a website. A cookie notice appears when a user visits the website, informing the user that the website uses cookies or other tracking technologies to collect and use personal information, and explaining why and with whom the information collected is shared.

**CMP (Consent Management Platform)** — software that helps websites comply with cookie usage rules. CMPs limit cookies usage until user consent is obtained, providing users with the option to accept certain cookies and manage privacy settings.

**Widget** — a user interface element that extends the functionality of a website. Web widgets are integrated into web pages and can include interactive elements such as buttons, forms, or banners. They can provide users with access to specific services or content without requiring navigation to other pages.

**Popup** — a window that appears above the current web page. It is intended to display additional information, advertisements, notifications, or data entry forms. Popups usually block the view of the main content of the page and require user action to close, which can be irritating.

### Filtre

For better customization, annoyance filters are divided by their purpose:

- AdGuard Cookie Notices filter
- AdGuard Popups filter
- AdGuard Mobile App Banners filter
- AdGuard Widgets filter
- AdGuard Other Annoyances filter
- AdGuard Annoyances filter — a combined filter that includes all 5 specialized annoyance filters

### Formålet med disse filtre

#### AdGuard Cookie Notices filter

This filter is designed to block both cookie notices and requests from cookie management platforms (CMPs). Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**Limitations and exceptions**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### AdGuard Popups filter

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Limitations and exceptions**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### AdGuard Mobile App Banners filter

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Limitations and exceptions**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### AdGuard Widgets filter

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Limitations and exceptions**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard Other Annoyances filter

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Limitations and exceptions**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Social media filters

### Filtre

AdGuard Social Media filters include:

- AdGuard Social Media filter

### Formålet med disse filtre

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Limitations and exceptions

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Other filters

This group contains filters that are not essential for blocking advertisements.

### Terminologi

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtre

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### Formålet med disse filtre

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Limitations and exceptions**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Limitations and exceptions**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Limitations and exceptions**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
