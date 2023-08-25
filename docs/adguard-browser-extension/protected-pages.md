{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 ArialMT;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red16\green60\blue192;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c6667\c33333\c80000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh15000\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs29\fsmilli14667 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 ---
\f1\fs24 \

\f0\fs29\fsmilli14667 title: 
\fs29\fsmilli14667 \outl0\strokewidth0 Browser-protected
\fs29\fsmilli14667 \outl0\strokewidth0 \strokec2  pages
\f1\fs24 \

\f0\fs29\fsmilli14667 sidebar_position: 4
\f1\fs24 \

\f0\fs29\fsmilli14667 ---
\f1\fs24 \
\

\f0\fs29\fsmilli14667 :::info
\f1\fs24 \
\

\f0\fs29\fsmilli14667 This article is about AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, [download the AdGuard app](https://adguard.com/download.html?auto=true)
\f1\fs24 \
\

\f0\fs29\fsmilli14667 :::
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ## Browser-protected pages
\f1\fs24 \
\

\f0\fs29\fsmilli14667 When using a web extension like AdGuard Browser Extension, there are certain restricted domains that prohibit access or permissions. As a result, ad blocking extensions are not allowed to interact with or modify the content of these pages. In other words, they are not allowed to block ads and other annoying elements on these web pages.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ### Chromium browser restrictions
\f1\fs24 \

\f0\fs29\fsmilli14667 Chromium-based browsers, such as Google Chrome, maintain a list of restricted domains that extensions are not allowed to access. These domains include:\'a0
\f1\fs24 \
\

\f0\fs29\fsmilli14667 * clients.google.com
\f1\fs24 \

\f0\fs29\fsmilli14667 * clients[0-9]+.google.com
\f1\fs24 \

\f0\fs29\fsmilli14667 * sb-ssl.google.com
\f1\fs24 \

\f0\fs29\fsmilli14667 * URLs starting with `chrome://`, `chrome-extension://`, or `https://chrome.google.com/webstore/`
\f1\fs24 \

\f0\fs29\fsmilli14667 * PDF files
\f1\fs24 \

\f0\fs29\fsmilli14667 * Pages where Javascript is disabled
\f1\fs24 \

\f0\fs29\fsmilli14667 * Security warning pages
\f1\fs24 \

\f0\fs29\fsmilli14667 * Error pages such as 404 errors and network errors
\f1\fs24 \

\f0\fs29\fsmilli14667 * URLs starting with `view-source:` or `data:`
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ### Firefox browser restrictions
\f1\fs24 \

\f0\fs29\fsmilli14667 Similarly, the Firefox browser has its own set of restricted domains where extensions are not permitted to operate. These restricted domains include:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 * accounts-static.cdn.mozilla.net
\f1\fs24 \

\f0\fs29\fsmilli14667 * accounts.firefox.com
\f1\fs24 \

\f0\fs29\fsmilli14667 * addons.cdn.mozilla.net
\f1\fs24 \

\f0\fs29\fsmilli14667 * addons.mozilla.org
\f1\fs24 \

\f0\fs29\fsmilli14667 * api.accounts.firefox.com
\f1\fs24 \

\f0\fs29\fsmilli14667 * content.cdn.mozilla.net
\f1\fs24 \

\f0\fs29\fsmilli14667 * discovery.addons.mozilla.org
\f1\fs24 \

\f0\fs29\fsmilli14667 * install.mozilla.org
\f1\fs24 \

\f0\fs29\fsmilli14667 * oauth.accounts.firefox.com
\f1\fs24 \

\f0\fs29\fsmilli14667 * profile.accounts.firefox.com
\f1\fs24 \

\f0\fs29\fsmilli14667 * support.mozilla.org
\f1\fs24 \

\f0\fs29\fsmilli14667 * sync.services.mozilla.com
\f1\fs24 \
\

\f0\fs29\fsmilli14667 ### Modifying restrictions in Firefox
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Changing advanced settings can affect the stability and security of Firefox. This is recommended for advanced users only. If you are aware of the associated risk and still wish to enable add-ons disallowed on a protected page, follow the steps below:
\f1\fs24 \
\

\f0\fs29\fsmilli14667 1. Click the menu button \uc0\u8594  **Add-ons and themes** \u8594  **Extensions**.
\f1\fs24 \

\f0\fs29\fsmilli14667 2. Click the extension you want to enable on sites with restrictions (In this case, AdGuard).
\f1\fs24 \

\f0\fs29\fsmilli14667 3. Select **Allow** in the section **Run on sites with restrictions**.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 Alternatively, you can:\'a0
\f1\fs24 \
\

\f0\fs29\fsmilli14667 1. Open a new tab and type **about:config** in the address bar.
\f1\fs24 \

\f0\fs29\fsmilli14667 2.\'a0 Press **Return**. You may encounter a warning. In this case, click **Accept the Risk and Continue**.
\f1\fs24 \

\f0\fs29\fsmilli14667 3 Search for `extensions.webextensions.restrictedDomains`. If you can\'92t find this preference, you can create it. Simply select the **Boolean** type and click **+** to add it.
\f1\fs24 \

\f0\fs29\fsmilli14667 4. Click the toggle button next to this preference and change its value to `false`.
\f1\fs24 \

\f0\fs29\fsmilli14667 5. Restart Firefox.
\f1\fs24 \
\

\f0\fs29\fsmilli14667 For further information on this subject, read [the article on Mozilla\'92s support website]({\field{\*\fldinst{HYPERLINK "https://mzl.la/3POXoWi"}}{\fldrslt \cf3 \ul \ulc3 \strokec3 https://mzl.la/3POXoWi}}).}