---
title: 网络钓鱼和恶意软件保护
sidebar_position: 3
---

遭遇网络钓鱼和恶意软件仍然是一个常见遇到问题。 要加强隐私安全，我们在 AdGuard 产品中加入了特殊过滤器，保护用户免受恶意网站和网络钓鱼网站的侵害。 迄今为止，我们已经分类了 1,500 多万个网站了，建立了一个包含 150 万个已知网络钓鱼和恶意软件网站的数据库。 AdGuard 利用该数据库检查用户访问的网站，保护用户免受在线威胁。

:::note 重要信息

我们不收集或使用用户访问网站的任何信息。

:::

## AdGuard 检查网站的方式

每次访问网站时，本地客户端都会以哈希值和哈希前缀的形式与我们的后台服务器交换信息。 根据这种交换，本地客户端确定该网站是否列在潜在危险网站数据库中。 应用程序和扩展程序的检查范围不同。

### 应用程序

AdGuard 检查页面和页面上加载的所有元素提供最佳保护。 AdGuard 使用散列前缀检查 URL 和域名，而不是完整的 URL，因此我们的服务器不会保留用户访问的网站信息，个人信息受100%的安全保护。 我们的服务器会响应 App 的查询，列出所有与散列前缀匹配的可能地址。 当根据哈希匹配检测到潜在威胁时，会立即阻止该网站。

![AdGuard warning](https://cdn.adtidy.org/content/kb/ad_blocker/general/dangerous_website_blocked.png)

### In browser extensions {#extension}

我们的浏览器扩展只能检查域名，无法检查完整的 URL， 或者子查询。 这意味着，如果页面上有潜在的恶意元素，即使页面本身来自安全域名，它们也会被加载 扩展无法进行它们的保护。 另一个需要注意的是，执行的检查是异步的，即在加载页面的同时进行，因此也有可能加载恶意软件。

## 在 AdGuard 设置钓鱼和恶意软件保护

- **For Windows**: Activate the *Browsing Security* module in the *Settings* menu

    ![Browsing Security in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **For Mac**: Enable the *Security* module in *Preferences*

    ![Security in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **For Android**: Turn on *Browsing Security* in the *Protection* tab

    ![Browsing security in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **For iOS**: Although there’s no separate module, you can go to *Safari protection* → *Filters* → *Security* and enable the available filters. Additionally, enable *DNS protection* and select one of the AdGuard DNS servers

    ![Security in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **For Browser extensions**: Enable *Phishing and malware protection* in the *Settings* tab. For enhanced protection, go to *Filters* → *Security* and activate filters

    ![钓鱼和恶意保护](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **For Private AdGuard DNS:** Enable malware protection in *Server settings* under *Security*

    ![Security in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## 拦截的内容

We maintain two primary filters: one that protects against phishing and fraudulent websites that attempt to steal user credentials, and another that blocks access to websites known to distribute malware, which could lead to data loss, information leaks, or damage to your device. These filters also protect you from websites with various scams and fraudulent schemes. For more detailed information, refer to this [Wikipedia article](https://en.wikipedia.org/wiki/Phishing).

## 维护我们的过滤器

AdGuard maintains an extensive database of phishing and malware websites, and it’s updated regularly and automatically as new threats are discovered. We collect information from a variety of reliable, high-quality sources, both public and from other companies, and aggregate it into a common database of dangerous sites.

We automatically analyze complaints about suspicious sites and spend a great deal of time keeping the database up-to-date, cleaning up false positives, and implementing mechanisms to prevent them in the future.

### 帮助我们

Any help is welcome! If you encounter a phishing or malware website, please report it to <support@adguard.com>.

### 假阳性反应

Occasionally, some non-malicious websites are added to AdGuard’s filters. We do our best to reduce the percentage of false positives, but they still occur. If you encounter this behavior from AdGuard, please report the false positive to our technical support at <support@adguard.com>.

## 发现可疑网站

If you suspect that a certain website might be dangerous, check it first by using our [security check tool](https://reports.adguard.com/welcome.html).

![Security check](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
