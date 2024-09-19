---
title: Güvenlik duvarı
sidebar_position: 1
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Nasıl çalıştığını görmek için [AdGuard uygulamasını indirin](https://agrd.io/download-kb-adblock)

:::

The Firewall module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Firewall_.

This feature helps manage Internet access for specific apps installed on your device and for the device in general.

![Firewall \*mobile\_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

### Genel güvenlik duvarı kuralları

This section allows you to control Internet access for the entire device.

![Global firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Bu kurallar, özel kurallar belirlemediğiniz sürece cihazınızdaki tüm uygulamalar için geçerlidir.

### Özel güvenlik duvarı kuralları

In this section, you can control Internet access for specific apps — restrict permissions for those that you don’t find trustworthy, or, on the contrary, unblock the ones you want to circumvent the global firewall rules.

1. Open _Custom firewall rules_. Under _Apps with custom rules_, tap _Add app_.

   ![Custom firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

2. Select the app for which you want to set individual rules.

   ![Adding an app to Custom firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

3. In _Available custom rules_, select the ones you want to configure and tap the “+” icon. The rules will now appear in _Applied custom rules_.

   ![Added rule \*mobile\_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

4. Belirli bir bağlantı türünü engellemeniz gerekiyorsa, düğmeyi sola kaydırın. Buna izin vermek istiyorsanız, düğmeyi etkin bırakın. **Custom rules override global ones**: any changes you make in _Global firewall rules_ will not affect this app.

To delete a rule or app from _Custom rules_, swipe it to the left.

### Bildirimler

If enabled, this feature notifies you when an app is attempting to violate an applicable firewall rule, e.g. attempts to access mobile data from which it is blocked. You can turn notifications on and off for all apps or for each app separately.

Tap the notification to access the app’s Firewall settings, or temporary disable all Firewall rules for that app by tapping the corresponding button in the notification. You can also mute all Firewall notifications for the app by tapping the _Mute_ button in the notification for that app.

Note that if notifications for multiple apps would be displayed, they will be bundled into a single notification instead.
