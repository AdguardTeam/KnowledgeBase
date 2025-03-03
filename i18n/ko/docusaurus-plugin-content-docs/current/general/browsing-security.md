---
title: 피싱 및 멀웨어 보호
sidebar_position: 3
---

피싱과 멀웨어는 여전히 흔한 문제입니다. 디지털 보안을 강화하기 위해 AdGuard 제품에 특수 필터를 통합하여 악성 및 피싱 웹사이트로부터 사용자를 보호합니다. 현재까지 1,500만 개 이상의 사이트를 분류하고 피싱 및 멀웨어로 알려진 150만 개 웹사이트의 데이터베이스를 구축했습니다. AdGuard는 이 데이터베이스를 사용하여 사용자가 방문하는 웹사이트를 확인하여 온라인 위협으로부터 사용자를 보호합니다.

:::note 중요

당사는 사용자가 방문하는 웹사이트에 대한 정보를 엄격하게 수집하거나 사용하지 않습니다.

:::

## How does AdGuard check websites?

사용자가 웹사이트를 방문할 때마다 로컬 클라이언트는 해시 및 해시 접두사 형태로 AdGuard 백엔드 서버와 정보를 교환합니다. 이 교환을 기반으로 로컬 클라이언트는 잠재적으로 위험한 웹사이트 데이터베이스에 해당 웹사이트가 등재되어 있는지 여부를 결정합니다. 하지만 앱과 확장 프로그램은 조금 다르게 검사됩니다.

### 앱

AdGuard는 페이지와 페이지에 로드된 모든 개체를 검사하여 최상의 보호 기능을 제공합니다. AdGuard는 전체 URL이 아닌 해시 접두사를 사용하여 URL과 도메인 이름을 확인하므로, 당사 서버는 사용자가 방문한 웹사이트에 대한 정보를 보유하지 않으며 사용자의 개인 정보는 완전히 안전합니다. AdGuard 서버는 해시 접두사와 일치하는 모든 가능한 주소 목록으로 앱의 쿼리에 응답합니다. 해시 일치를 기반으로 잠재적 위협이 감지되면 해당 웹사이트에 대한 액세스가 즉시 차단됩니다.

![AdGuard warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### In browser extensions {#extension}

브라우저 확장 프로그램은 전체 URL이 아닌 도메인 이름만 확인할 수 있습니다. 또한 하위 쿼리를 확인할 수 없습니다. 즉, 페이지에 잠재적으로 악성일 수 있는 요소가 있는 경우 페이지 자체가 안전한 도메인의 것이라도 해당 요소가 로드됩니다. 확장 프로그램으로는 보호할 수 없습니다. 또한 수행되는 검사는 비동기식으로, 즉 페이지가 로드되는 동시에 수행되므로 멀웨어도 로드될 수 있다는 점에 유의해야 합니다.

## AdGuard 제품에서 피싱 및 멀웨어 보호 설정하기

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![피싱 및 멀웨어 보호](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## 차단 대상

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## 필터 유지 관리

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### 피싱 또는 멀웨어 웹사이트 신고

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### 오탐

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## 웹사이트가 의심스러운 경우

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
