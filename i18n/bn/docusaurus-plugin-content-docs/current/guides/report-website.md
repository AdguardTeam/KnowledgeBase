---
title: How to report a website
sidebar_position: 3
---


When using ad blockers, you may face incorrect work of certain websites or broken page elements. These problems might arise due to a variety of factors:

- Incorrect user rules;
- Modified algorithms of adding ads;
- Added filters/extensions from third-party developers;
- The authors of one of the filters made a mistake when creating the rule;
- Advertising reinsertion. Find more about this method in our [blog](https://adguard.com/en/blog/ad-reinsertion.html).

You can help us by filling in a form with examples of ads you have encountered. To do it, please, use instructions for your OS.

## Report a website {#report}

:::note

When you send a complaint via the app or via AdGuard Browser Assistant, all information is pre-filled automatically. Except for the screenshots, you'll have to make and attach them yourself. If you're using a [direct link](https://reports.adguard.com/new_issue.html), you’ll need to enter data manually.

:::

To report a reinsertion of an ad or incorrect displaying of a website, you need to:

### Browser extension {#extension}

- Open the browser extension settings by clicking the corresponding icon;
- Click **Report an issue**:

![extension_issue *mobile_border](https://cdn.adtidy.org/blog/new/5si74extension.png)

- After you've filled in the form, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

### Windows {#windows}

- Open [AdGuard Browser Assistant](/adguard-for-windows/browser-assistant) and hit **Report an issue**:

![windows *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png)

- Fill in the form for reporting a complaint;
- After you've done it, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

### Android {#android}

- Open AdGuard settings;
- Choose **Support**, then **Report incorrect blocking**:

![android *mobile_border](https://cdn.adtidy.org/blog/new/apicfkandroid-new.jpg)

- After you've filled in the form, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

### Mac {#mac}

- Open [AdGuard Browser Assistant](/adguard-for-mac/features/browser-assistant) and hit **Report an issue**:

![mac *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png)

- Fill in the form for reporting a complaint;
- After you've done it, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

### iOS {#ios}

- Open AdGuard settings;
- Choose **Support**, then **Report incorrect blocking**:

![ios *mobile_border](https://cdn.adtidy.org/blog/new/fnl9aios.jpeg)

- Fill in the form for reporting a complaint;
- After you've done it, an issue on [GitHub](https://github.com/AdguardTeam/AdguardFilters/issues) will be created automatically. There will also be a link to monitor progress towards the solution of your problem.

## Filling in the form {#form}

:::note

When you send a complaint via the app or via AdGuard Assistant, all information is pre-filled automatically. Except for the screenshots, you'll have to make and attach them yourself. If you're using a [direct link](https://reports.adguard.com/new_issue.html), you’ll need to enter data manually.

:::

1. Filling in the form starts with detailing the type and version of a product;

    ![forma1 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png)

2. Specify the type of problem and additional information on using third-party software (antivirus, VPN);

    ![forma2 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png)

3. Enter the address of the page and the browser (or the download link in case of an app) where you've encountered a problem;

    ![forma3 *border](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png)

4. Application configuration must be specified:

    - Filters you use;
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

## Diagnosis of an issue {#issue}

This option is suitable for those who aren’t afraid of difficulties and don’t mind trying to find the problem on their own. This does not require any special skills or in-depth knowledge of HTML and CSS.

For example, you are faced with a situation that your favorite website won’t open, authorization has broken, or some page elements are displayed incorrectly. The cause may be using a specific filter/extension/Stealth Mode setting. To diagnose these problems, you need to do the following:

### **Filters**

1. Disable **Ad Blocker**;
2. If it solved the problem, re-enable the module and disable filters one by one. This is done to identify filters that "break" the page;
3. If you have managed to find out which filter "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;
4. If turning off all the filters hasn't produced any results, apply rule **@@||example.com^$document,extension**; where **example.com** is an example site name that needs to be replaced by your own option;
5. In case of failure (issue not solved), turn to section **Stealth Mode**.

### **Stealth Mode**

1. Disable **Stealth Mode**;
2. If this solved the problem, turn the module on and turn off the **Stealth Mode** options one by one. This is done to detect which filters are "breaking" the page;
3. If you have managed to detect which setting "breaks" a page, you should inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings;
4. In case of failure (issue not solved), turn to section **Extensions**.

### **Extensions**

1. Disable **Extensions**;
2. If this solved the problem, turn on the module and turn off **Extensions** settings one by one. This is done to find out which setting "breaks" the page;
3. If you have managed to detect which setting "breaks" a page, inform the developers when filling out the form (see above). In this case, it is desirable to return to the initial settings.

### **Third-party blockers**

Some browsers and antivirus programs (such as Yandex Browser, Kaspersky, etc.) have built-in ad blockers. They may affect and cause problems in the operation of sites. If you are using such programs, first make sure that the problem is caused by **AdGuard**: disable **AdGuard** filtering and try to reproduce the problem. If it remains, it means that the problem is caused by another application or browser. If the problem is caused by **AdGuard**, follow the steps described in the previous paragraphs.
