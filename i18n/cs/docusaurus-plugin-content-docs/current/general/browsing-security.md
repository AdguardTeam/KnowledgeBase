---
title: Ochrana proti podvodnému a zákeřnému software
sidebar_position: 3
---

Falling prey to phishing and malware remains a common issue. To enhance digital security, we’ve incorporated special filters in AdGuard products to shield you from malicious and phishing websites. To date, we’ve categorized over 15 million sites and built a database of 1.5 million websites known for phishing and malware. Using this database, AdGuard checks the websites you visit to protect you from online threats.

:::note

We strictly do not collect or use any information about the websites you visit.

:::

## How does AdGuard check websites?

Each time you visit a website, your local client exchanges information with our backend server in the form of hashes and hash prefixes. Based on this exchange, the local client determines whether or not the website is listed in the potentially dangerous websites database. There is a difference in the scope of this check for apps and extensions.

### In apps

AdGuard provides the best possible protection by inspecting both the pages and all objects loaded on them. AdGuard checks URLs and domain names using hash prefixes, not the full URLs, so our servers retain no information about the websites you visit and your personal information is completely safe. Our servers respond to the app’s query with a list of all possible addresses that match the hash prefix. When a potential threat is detected based on hash matches, access to that website is immediately blocked.

![DNS warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_diana.png)

### In browser extensions

Our browser extensions can only check domain names, not full URLs. They are also unable to check subqueries. This means that if there are potentially malicious elements on the page, they will be loaded even if the page itself is from a safe domain. The extension won’t be able to protect against them. It's also important to note that the check performed is asynchronous, i.e. it happens at the same time as the page is loaded, so it’s possible that malware could be loaded as well.

## Setting up phishing and malware protection in AdGuard products

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate available filters

![Ochrana proti podvodnému a zákeřnému software](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## What we block

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## Maintaining our filters

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### Want to help?

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### False-positive responses

Occasionally, some non-malicious websites are added to AdGuard’s filters. Snažíme se procento falešných pozitivních výsledků snížit, ale stále se vyskytují. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## If you are suspicious about a website

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
