---
title: How to prioritize the translations of Crowdin files?
sidebar_position: 5
--- 

There are two major AdGuard projects on Crowdin — AdGuard Applications and AdGuard Websites. The names speak for themselves: one contains translations of applications, extensions, and filters, and the other contains translations of websites, transactional emails, and a few other things.
 
Speaking of the *AdGuard Applications* project, we do not have clear guidelines on which files or products to start with. Just choose any product you like. 
 
There are just a couple of things we want to mention: 
 
- We add a language to an application when the respective product strings are fully translated;
- We recommend translating the descriptions for Stores secondly, because without the translation of products themselves, the descriptions won't be needed.
 
The situation is different in the *AdGuard Websites* project. Languages can be added to the site even if a full set of translations is not available. However, this depends on which files have already been translated. That's why we recommend that you start with the most important files — they are listed below:
 
 
[AdGuard ad blocker site](https://crowdin.com/project/adguard-websites/de#/adguard.com) 
 
- `critical.resx`
- `auth.resx`
- `welcome.resx`
 
[AdGuard VPN site](https://crowdin.com/project/adguard-websites/de#/adguard-vpn.com) 
 
- `critical.resx`
- `auth.resx`
 
[AdGuard DNS site](https://crowdin.com/project/adguard-websites/de#/adguard-dns.com)
 
- `critical.resx`
- `auth.resx` 
 
>Adding new strings as well as updating existing ones in these files requires special attention from the project translators and proofreaders. 


In addition to websites, there is a file for translating [transactional emails](https://crowdin.com/project/adguard-websites/de#/emails) in the AdGuard Websites project. Newly added strings in this file also have a high translation priority.
 