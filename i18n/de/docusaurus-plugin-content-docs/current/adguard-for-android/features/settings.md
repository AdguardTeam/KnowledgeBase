---
title: Einstellungen
sidebar_position: 4
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Der Tab _Einstellungen_ kann durch Tippen auf das Symbol ganz rechts am unteren Bildschirmrand aufgerufen werden. Dieser Abschnitt enthält verschiedene Einstellungen, Informationen über Ihre App, Lizenz und Abonnement sowie verschiedene Support-Ressourcen.

## Allgemein

In diesem Abschnitt können Sie das Aussehen und das Verhalten der App konfigurieren: Sie können das Design und die Sprache einstellen, Benachrichtigungen verwalten und vieles mehr. Wenn Sie das AdGuard-Team bei der Erkennung von Abstürzen und der Untersuchung der Benutzerfreundlichkeit unterstützen möchten, können Sie _Abstürze automatisch melden_ und _Technische Daten und Interaktionsdaten senden_ aktivieren.

![Allgemein \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Unter _App- und Filteraktualisierungen_ können Sie automatische Filteraktualisierungen konfigurieren und einen App-Aktualisierungskanal auswählen. Wählen Sie _Release_ für mehr Stabilität und _Beta_ oder _Nightly_ für einen frühen Zugang zu neuen Funktionen.

![Aktualisierungen \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Erweiterte Einstellungen

Mit _Automatisierung_ können Sie AdGuard über Tasker-Apps verwalten.

_Watchdog_ hilft, AdGuard davor zu schützen, vom System deaktiviert zu werden. [Lesen Sie mehr über den Batteriesparmodus von Android](/adguard-for-android/solving-problems/background-work/). Der von Ihnen eingegebene Wert ist das Intervall in Sekunden zwischen den Watchdog-Prüfungen.

Die _Protokollierungsebene_ legt fest, welche Daten über die Funktion der App protokolliert werden sollen. Standardmäßig sammelt die App die Daten über ihre Ereignisse. Die Ebene _Fehlersuche_ protokolliert mehr Ereignisse. Aktivieren Sie sie, wenn das AdGuard-Team sie darum bittet, um ein besseres Verständnis des Problems zu erhalten. [Lesen Sie mehr über das Erfassen und Senden von Protokollen](/adguard-for-android/solving-problems/log/)

![Erweitert \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Der Abschnitt _Low-Level-Einstellungen_ ist für erfahrene Benutzer:innen gedacht. [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![Low-Level-Einstellungen \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filterung

In diesem Abschnitt können Sie die Einstellungen für die HTTPS-Filterung, Filter und Benutzerskripte verwalten und einen Proxyserver einrichten.

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### Filter

AdGuard blockiert Werbung, Tracker und Belästigungen, indem es Regeln aus seinen Filtern anwendet. Die meisten Funktionen aus dem Bereich _Schutz_ werden durch [AdGuard-Filter](/general/ad-filtering/adguard-filters/#adguard-filters) realisiert. Wenn Sie den _Basisschutz_ aktivieren, werden automatisch der AdGuard Basisfilter und der AdGuard Filter gegen mobile Werbung aktiviert. Und umgekehrt: Wenn Sie beide Filter ausschalten, wird auch der _Basisschutz_ deaktiviert.

![Filter \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Die standardmäßig aktivierten Filter sind für den normalen Betrieb von AdGuard ausreichend. Wenn Sie die Blockierung von Werbung jedoch individuell anpassen möchten, können Sie andere Filter von AdGuard oder Drittanbietern verwenden. Wählen Sie dazu eine Kategorie aus und aktivieren Sie die gewünschten Filter. Um einen benutzerdefinierten Filter hinzuzufügen, tippen Sie auf _Benutzerdefinierte Filter_ ➜ _Benutzerdefinierten Filter hinzufügen_ und geben Sie die URL oder den Dateipfad ein.

:::note

Wenn Sie zu viele Filter aktivieren, kann es sein, dass einige Websites nicht richtig funktionieren.

:::

[Lesen Sie mehr über Filter](https://adguard.com/en/blog/what-are-filters.html)

### Erweiterungen

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### AMP deaktivieren

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Netzwerk

#### HTTPS-Filterung

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installationsanweisungen](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Anleitung](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. Um jedoch die Sicherheit zu erhöhen, [schließen wir Websites, die potenziell sensible Informationen enthalten, von der HTTPS-Filterung aus](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. Falls erforderlich, können Sie die Option _Websites mit EV-Zertifikaten filtern_ aktivieren.

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- _Local VPN_ filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

:::note

Please note that DNS filtering will still be active in _Automatic proxy_ routing mode, and your device may not be able to filter DNS requests from specific apps. In _VPN_ routing mode, apps are excluded from the local VPN by system means. Therefore, the system resolver sees which apps are included in the VPN and which are not. It either allows them into the local VPN or lets them bypass it. However, DNS requests come from the system resolver, not the application. In _Automatic proxy_ mode, it is only possible to exclude traffic from applications, not their DNS queries, because AdGuard sees them as system queries.

:::

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## Lizenz

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the activation code to activate your license
- Sign up to activate your 14-day trial period. The activation code can be used on different devices and platforms
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/android/settings/licensetab.png)

## Support

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
