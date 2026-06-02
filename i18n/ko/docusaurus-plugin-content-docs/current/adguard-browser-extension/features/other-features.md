---
title: 기타 기능 및 설정
sidebar_position: 4
---

:::info

브라우저만 보호하는 AdGuard 브라우저 확장 프로그램에 관한 문서입니다. 전체 기기를 보호하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

AdGuard 브라우저 확장 프로그램의 주요 모듈 외에도 확장 프로그램 설정의 **일반** 및 **추가 설정** 탭에서 설정할 수 있는 몇 가지 구체적인 기능이 더 있습니다.

## 일반 {#general}

The _General_ tab contains the main extension settings and lets you control its basic filtering behavior. Here you can allow search ads and [self‑promotion on websites](/general/ad-filtering/search-ads/), enable automatic activation of language-specific filters, set the update interval for the filters, and turn on [protection against phishing and malicious websites](/general/browsing-security/).

![General \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/general_new.png)

You can also save your current configuration and quickly apply it to another browser or device. To do this, click _Share settings_ in the _General_ tab: the extension will generate a special link and a QR code that contain your current settings. You can either copy the link and open it in a browser, or scan the QR code on a device with AdGuard to open the link directly in the app. You will then see a prompt to apply the shared configuration so that you can restore the same setup after reinstalling your browser or on a new device.

If needed, you can also share this link with other people or attach it to a support request so the team can see your exact configuration.

In addition, you can still export your settings to a .json file by clicking _Export settings_ and import them via the _Import settings_ option. This makes it easy to switch between different configuration profiles or move them between browsers.

## Additional settings {#misc}

The _Additional settings_ section contains a range of various settings that are related to the ad blocking process and application usability.

![Additional settings \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/additional_new.png)

From this tab, you can invert the allowlist and add the AdGuard item to the browser’s context menu. You can also enable the display of the number of blocked ads on the AdGuard icon and notifications about extension updates. Additionally, this section lets you enable notifications about the AdGuard app, open the _Filtering log_, clear the statistics of blocked ads and trackers, or reset the settings.

Besides, you can opt to help us with the development of filters by sending the statistics on applied rules: which ones are triggered, on which websites, and how often. This option is disabled by default as we do not collect user data without consent. Yet, if you enable it, all data will be strictly anonymized.

You can also choose to help us improve the extension by sending us anonymized usage data. This includes the names of the screens you interact with, the names of the buttons you click, and session identifiers. These insights help us understand where users run into friction, refine the experience, and make the extension faster and easier to use. The _Send anonymized usage data_ option is disabled by default. If you enable it, all data will be strictly anonymized and used only internally. It will never be shared with third parties.

:::note

The _Send anonymized usage data_ option can also be enabled on the post-installation page in Chromium-based browsers.

:::

## About {#about}

In the _About_ section, you can find info about the current version, links to the EULA and Privacy policy, and to the repository of the Browser extension on GitHub.

![About \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/about_new.png)
