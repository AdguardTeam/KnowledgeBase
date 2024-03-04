---
title: 报告网站
sidebar_position: 3
---


使用广告拦截程序时，您可能会遇到某些网站的错误工作或页面元素损坏的情况。 这些问题可能是由于多种因素引起的：

- 不正确的用户规则；
- 修改添加广告的算法；
- 添加了来自第三方开发人员的过滤器/扩展程序；
- 创建规则时，其中一个过滤器的作者犯了一个错误；
- 重新插入广告。 在[我们的博客](https://adguard.com/en/blog/ad-reinsertion.html)中找到有关此方法的更多信息。

You can help us by filling in a form with examples of ads you have encountered. 为此，请按照您的操作系统使用说明。

## 报告网站 {#report}

:::注意

在您通过本应用或 AdGuard 浏览器助手发送投诉时，所有信息是自动预先填写的。 除了屏幕截图，您还必须自己制作并附加它们。 如果您使用的是[此链接](https://reports.adguard.com/new_issue.html)，则需要手动输入数据。

:::

要报告广告已重新插入或网站显示不正确，您需要：

### 浏览器扩展 {#extension}

- Open the browser extension settings by clicking the corresponding icon;
- Click **Report an issue**:

![extension_issue *mobile_border](https://cdn.adtidy.org/blog/new/5si74extension.png)

- 填写举报表格后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### Windows 系统 {#windows}

- 打开 [AdGuard 浏览器助手](/adguard-for-windows/browser-assistant)，点击「**报告问题**」：

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

- 填写举报表格；
- 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### 安卓系统 {#android}

- 打开 AdGuard 设置；
- 选择**支持**，然后点击**报告错误拦截**：

![android *mobile_border](https://cdn.adtidy.org/blog/new/apicfkandroid-new.jpg)

- 填写举报表格后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### Mac 系统 {#mac}

- 打开 [AdGuard 浏览器助手](/adguard-for-mac/browser-assistant)，点击「**报告问题**」：

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

- 填写举报表格；
- 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

### iOS 系统 {#ios}

- 打开 AdGuard 设置；
- 选择**支持**，然后点击**报告错误拦截**：

![ios *mobile_border](https://cdn.adtidy.org/blog/new/fnl9aios.jpeg)

- 填写举报表格；
- 完成后，将自动在 [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) 上创建一个问题。 也将有一个链接让用户监视解决问题的进度。

## 填写表格 {#form}

:::注意

在用户通过本应用或 AdGuard 助手发送投诉时，所有信息都是自动预填写的。 除了屏幕截图，您还必须自己制作并附加它们。 如果您使用的是[此链接](https://reports.adguard.com/new_issue.html)，则需要手动输入数据。

:::

1. 在表单内填写产品的详细类型和版本；

    ![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. 指定问题类型以及使用的第三方软件之附加信息（反病毒软件，VPN）；

    ![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. 输入您遇到问题的页面地址和浏览器（或如是应用，则提供下载链接）；

    ![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. 须指定应用程序配置：

    - 您使用的过滤器；
    - 如隐身模式已开启，则指定其设置。

    ![forma4 *border](https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png)

5. [提供捕获问题的屏幕截图](../take-screenshot)；

    - **重要**：请隐藏个人信息（电子邮件地址，电话号码等），因为屏幕截图将公开显示。

    ![forma5 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png)

6. 提供额外信息以帮助过滤器开发人员了解情况；

    如可用，您也可输入 **GitHub** 账号（这对于开发人员联系您以了解额外详细信息是必需的）；

    ![forma6 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png)

7. 发送表单前检查每个步骤；

    ![forma7 *mobile_border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png)

8. 您将获得一个链接以查看任务进度。

    ![forma8 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png)

## 问题诊断 {#issue}

此选项适用于那些不怕困难并且不介意自行寻找问题的人。 这不需要任何特殊技能或对 HTML 和 CSS 深入了解。

例如，您面临着您喜爱的网站无法打开、授权中断或某些页面元素显示不正确的情况。 原因可能是使用特定的过滤器/扩展/隐身模式设置。 要诊断这些问题，您需要执行以下操作：

### **过滤器**

1. 禁用**广告拦截程序**；
2. 如果解决了问题，请重新开启模块并逐个禁用过滤器。 这样做是为了识别“破坏”页面的过滤器。
3. 如果您设法找出“破坏”页面的过滤器，则应在填写表单时通知开发人员（请参见上文）。 在此种情况下，最好返回到初始设置；
4. 如果关闭所有过滤器均未产生任何结果，则应用规则 **@@||example.com^$document,extension**； 其中 **example.com** 是示例网站名称，需要用您自己的选项替换；
5. 在失败的情况下（问题未能解决），请转到**隐身模式**部分。

### **隐身模式**

1. 禁用**隐身模式**；
2. 如果问题解决，请打开此模块并逐个关闭**隐身模式**内的各选项。 这样做是为了检测出“破坏”页面的过滤器；
3. If you have managed to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). 在此种情况下，最好返回到初始设置；
4. 如果失败（问题未解决），请参阅**扩展**部分。

### **浏览器扩展**

1. 禁用**扩展**；
2. 如果问题解决，则请打开此模块并逐个关闭**扩展**内的各设置。 这样做是为了找出“破坏”页面的设置；
3. 如果您设法找出“破坏”页面的设置，则应在填写表单时通知开发人员（请参见上文）。 在此种情况下，最好返回到初始设置。

### **第三方拦截器**

某些浏览器和防病毒程序（例如 Yandex 浏览器，卡巴斯基等）具有内置的广告拦截器。 它们可能会影响并引起网站运行发生问题。 If you are using such programs, first make sure that the problem is caused by **AdGuard**: disable **AdGuard** filtering and try to reproduce the problem. 如果问题仍存在，则表示问题是由其他应用程序或浏览器引起的。 如问题是由 **AdGuard** 引起的，则请按照前面段落中描述的步骤进行操作。
