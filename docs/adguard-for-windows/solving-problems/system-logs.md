---
title: How to collect Windows system logs
sidebar_position: 5
---

To analyse and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. Windows event logs contain records about all errors that occurr with the installed software, including AdGuard. Below is the brief instruction describing the way to get the log files and to send them to our support service if necessary. 

1. Press *Win + R*

2. In the window that appears type in `eventvwr` and click on *OK*:

![Run window](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

3. Event Viewer window appears as shown in the picture.

![Event viewer](https://cdn.adguard.com/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

To save files that we need, do the following:

- Open *Application*: *Event Viewer (Local)* -> *Windows Logs* -> *Application*.

- Right-click on the *Application* and in drop-down menu select *Save All Events As...*

- Select a name and where to save, click *Save*. Select *Display information for the following languages*. You need to tick the box next to *English*. Click *OK*.

- Open *System*: *Event Viewer (Local)* -> *Windows Logs* ->  *System*.

- Right-click on *System* and in the drop-down menu, select *Save All Events As...*

- Choose a destination folder, enter the name, click *Save*. Select *Display information for the following languages*. You need to tick the box next to *English*. Click *OK*. 

Please send the two files that you've recently saved to the [AdGuard support service](/support/contact).
