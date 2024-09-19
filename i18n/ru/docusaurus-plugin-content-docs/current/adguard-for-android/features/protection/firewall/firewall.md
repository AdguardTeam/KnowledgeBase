---
title: Фаервол
sidebar_position: 1
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

The Firewall module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Firewall_.

Эта функция помогает управлять доступом в интернет для определённых приложений, установленных на вашем устройстве, и для устройства в целом.

![Firewall \*mobile\_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

### Глобальные правила Фаервола

Этот раздел позволяет контролировать доступ в интернет для всего устройства.

![Global firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Эти правила применяются ко всем приложениям на устройстве, если для них не установлены собственные правила.

### Пользовательские правила Фаервола

In this section, you can control Internet access for specific apps — restrict permissions for those that you don’t find trustworthy, or, on the contrary, unblock the ones you want to circumvent the global firewall rules.

1. Open _Custom firewall rules_. Under _Apps with custom rules_, tap _Add app_.

   ![Custom firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

2. Выберите приложение, для которого вы хотите установить индивидуальные правила.

   ![Adding an app to Custom firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

3. In _Available custom rules_, select the ones you want to configure and tap the “+” icon. The rules will now appear in _Applied custom rules_.

   ![Added rule \*mobile\_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

4. Если вам нужно заблокировать определённый тип соединения, переведите переключатель влево. Если вы хотите разрешить его, оставьте переключатель включённым. **Custom rules override global ones**: any changes you make in _Global firewall rules_ will not affect this app.

To delete a rule or app from _Custom rules_, swipe it to the left.

### Notifications

If enabled, this feature notifies you when an app tries to break one of the Firewall rules set for that app (for example, to access mobile data when it shouldn’t). You can turn notifications on and off for all apps or for each app separately.

Tap the notification to access the app’s Firewall settings, or temporary disable all Firewall rules for that app by tapping the corresponding button in the notification. You can also mute all Firewall notifications for the app by tapping the _Mute_ button in the notification for that app.

Note that if notifications for multiple apps would be displayed, they will be bundled into a single notification instead.
