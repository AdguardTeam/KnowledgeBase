---
title: Features overview
taxonomy:
    category:
        - docs
---

* [Features](#features)
	* [Content blockers](#content-blockers)
	* [Filters](#filters)
	* [User rules](#user-rules)
	* [Allowlist](#allowlist)
	* [Assistant](#assistant)
	* [DNS protection](#dns-protection)
		* [DNS implementation](#dns-implementation) 
    	* [DNS servers](#dns-servers)
    	* [Network settings](#network-settings)
    	* [DNS filtering](#dns-filtering)
    		* [DNS filters](#dns-filters)
    		* [Allowlist and Blocklist](#allowlist-blocklist)
    * [Activity](#activity)
    	* [Statistics](#statistics)
    * [Low-level settings](#low-level-settings)
    	* [Block IPv6](#blockipv6)
    	* [Bootstrap and Fallback servers](#bootstrap-fallback) 
* [Other features](#other-features) 	

If you look for AdGuard in the App Store, you'll find two apps — [AdGuard](https://itunes.apple.com/app/id1047223162) and [AdGuard Pro](https://itunes.apple.com/app/id1126386264). These apps are designed to block ads and tracking in Safari, in apps and other browsers, and to manage DNS protection. Don't be misled by their names, both apps block ads on smartphones and tablets by Apple. They used to differ in functionality due to the changing App Store review guidelines, but now these two apps are [basically the same](https://adguard.com/en/blog/updating-adguard-pro-for-ios.html). So if you have purchased AdGuard Pro, there is no need to download AdGuard and buy a license there, and vice versa. 

<a id="features"></a>
# Features
AdGuard and AdGuard Pro for iOS offer lots of features for blocking ads, trackers and creating user rules, both in Safari and on network level.

<a id="content-blockers"></a>
## Content blockers

Content blockers serve as 'containers' for filtering rules that do the actual job of blocking ads and tracking. AdGuard for iOS contains six content blockers: General, Privacy, Social, Security, Custom, and Other. Apple allows each content blocker to contain  a maximum of 50K filtering rules, hence, six AdGuard content blockers include 300K filtering rules.  

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in *Advanced settings*.