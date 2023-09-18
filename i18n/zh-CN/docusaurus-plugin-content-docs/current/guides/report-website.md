---
title: 报告网站
sidebar_position: 3
---


使用广告拦截程序时，您可能会遇到某些网站的错误工作或页面元素损坏的情况。 这些问题可能是由于多种因素引起的：

- 不正确的用户规则；
- 修改添加广告的算法；
- 添加了来自第三方开发人员的过滤器/扩展程序；
- 创建规则时，其中一个过滤器的作者犯了一个错误；
- 重新插入广告。 Find more about this method in our [blog](https://adguard.com/en/blog/ad-reinsertion.html).

您可以通过填写申请表中的广告示例来帮助我们。 为此，请按照您的操作系统使用说明。

## 报告网站 {#report}

:::note

When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. 除了屏幕截图，您还必须自己制作并附加它们。 如果您使用的是[此链接](https://reports.adguard.com/new_issue.html)，则需要手动输入数据。

:::

要报告广告已重新插入或网站显示不正确，您需要：

### 浏览器扩展 {#extension}

- 点击相应图标打开浏览器扩展设置；
- 点击**报告问题**：

![扩展 *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/extension_issue.png)

- 填写举报表格后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### Windows 系统 {#windows}

- 打开 [AdGuard 浏览器助手](/adguard-for-windows/browser-assistant)，点击「**报告问题**」：

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

- 填写举报表格；
- 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### 安卓系统 {#android}

- 打开 AdGuard 设置；
- Choose **Support**, then **Send Feedback** → **Missed ad**/**Incorrect blocking**:

![android *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/android.png)

- 填写举报表格后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### Mac 系统 {#mac}

- 打开 [AdGuard 浏览器助手](/adguard-for-mac/browser-assistant)，点击「**报告问题**」：

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

- 填写举报表格；
- 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### iOS 系统 {#ios}

- 打开 AdGuard 设置；
- 选择**支持**，然后点击**报告错误拦截**：

![ios *mobile](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/ios_issue.png)

- 填写举报表格；
- 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

## 填写表格 {#form}

:::note

When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. 除了屏幕截图，您还必须自己制作并附加它们。 如果您使用的是[此链接](https://reports.adguard.com/new_issue.html)，则需要手动输入数据。

:::

1. Filling in the form starts with detailing the type and version of a product;

    ![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Specify the type of problem and additional information on using third-party software (antivirus, VPN);

    ![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Enter the address of the page and the browser (or the download link in case of an app) where you've encountered a problem;

    ![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. Application configuration must be specified:

    - 您使用的过滤器；
    - Stealth mode settings, if this function is enabled.

    ![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [Provide a screenshot](../take-screenshot) that captures the essence of a problem;

    - **Important**: Hide your personal information (email, phone number, etc.) because screenshots will become publicly available.

    ![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. Provide additional information that will help filter developers understand the situation;

    Also enter your account on **GitHub**, if available (it's necessary for developers to be able to reach you in case they need some additional details);

    ![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. Check each step before sending the form;

    ![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. You'll be provided with a link to track progress on your task.

    ![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## 问题诊断 {#issue}

This option is suitable for those who aren’t afraid of difficulties and don’t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS.

For example, you are faced with a situation that your favorite website won’t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:

### **过滤器**

1. Disable **Ad Blocker**;
2. If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;
3. If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;
4. If turning off all the filters hasn't produced any results, apply rule **@@||example.com^$document,extension**; where **example.com** is an example site name that needs to be replaced by your own option;
5. In case of failure (issue not solved), turn to section **Stealth Mode**.

### **隐身模式**

1. Disable **Stealth Mode**;
2. If this solved the problem, turn the module on and turn off the **Stealth Mode** options one by one. This is done to detect which filters are "breaking" the page;
3. If you have managed to to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;
4. In case of failure (issue not solved), turn to section **Extensions**.

### **浏览器扩展**

1. Disable **Extensions**;
2. If this solved the problem, turn on the module and turn off **Extensions** settings one by one. This is done to find out which setting "breaks" the page;
3. If you have managed to detect which setting "breaks" a page, inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings.

### **第三方拦截器**

Some browsers and antivirus programs (such as Yandex Browser, Kaspersky, etc.) have built-in ad blockers. They may affect and cause problems in the operation of sites. If you use such programs, make sure that the problem is on the side of **AdGuard**: disable **AdGuard** filtering and try to repeat the problem. If it remains, it means that the problem is caused by another application or browser. If the problem is caused by **AdGuard**, follow the steps described in the previous paragraphs.
