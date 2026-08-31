---
title: Uygulama yönetimi
sidebar_position: 1
---

:::info

This article describes AdGuard for Windows v8.0, a comprehensive ad blocker that protects your device at the system level. This is a beta release that is still under development. To try it, download the [beta version of AdGuard for Windows](https://agrd.io/windows_beta).

:::

In the _App management_ section, you can manage routing and filtering settings for all apps installed on your device.

Once AdGuard detects that an app has gone online, it is automatically added to _App management_, and its traffic is routed through AdGuard.

By default, AdGuard filters all traffic, but you can choose what to exclude.

AdGuard also filters HTTPS traffic, as most websites today use HTTPS. This is especially important for blocking ads on sites like youtube.com, facebook.com, and x.com, where it is impossible to remove ads without HTTPS filtering.

When routing and filtering are enabled for an app, the icons below each app will appear green.

You can leave the settings as they are, disable both filtering and routing, or fine-tune them manually for each app. You can also access the app’s stats.

![App stats](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## How app filtering and routing work in AdGuard for Windows v8.0

AdGuard for Windows v8.0 introduces updated logic for handling apps. It helps prevent compatibility issues while still giving you control over which apps are filtered. Let’s break down how it works.

There are “problem-free” and “problematic” apps. Some work correctly when filtered, while others may not function when their traffic is processed by AdGuard. This can be caused by features like HTTPS interception or proxying.

To avoid breaking apps out of the box, AdGuard does not filter everything indiscriminately. Instead, it relies on a compatibility list — a set of apps that are known to work correctly with filtering enabled.

:::note

“Not filtering everything” does not mean “filter nothing.” Trusted apps (like browsers) are always filtered.

:::

Each app has three independent processing layers: traffic routing through AdGuard, filtering (blocking ads and trackers), and HTTPS filtering (interception of encrypted traffic).

These are determined by three sources:

- _Compatibility list_

  Apps that have been tested by our team and are confirmed to work correctly with filtering.
  This list is updated through internal testing and user reports in the [dedicated repository for listing AdGuard compatibility issues](https://github.com/AdguardTeam/CompatibilityIssues).

- _Exclusion lists_

  Separate lists for routing, filtering, and HTTPS filtering. These include apps known to break when filtering is applied.

- _Filter unknown apps_

  This setting defines how all other apps (not present in any list) are handled.

:::info

The compatibility lists are continuously updated — and you can help improve them. If you notice that an app does not work correctly with filtering enabled, **report it on [GitHub](https://github.com/AdguardTeam/CompatibilityIssues)** or contact support via the app. Your feedback helps improve AdGuard for everyone.

:::

## Filter unknown apps

![Filter unknown apps \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/app-management.png)

The _Filter unknown apps_ setting is enabled by default and determines how AdGuard handles new apps that are not yet present in the compatibility or exclusion lists

When enabled, app traffic is routed through AdGuard, regular filtering is applied, and **HTTPS filtering is NOT enabled automatically**. This is intentional: HTTPS interception is the most sensitive part of traffic processing and may affect app behavior.

When disabled, new apps are not processed by AdGuard — you will need to manually configure routing for them.

Here is a quick overview of how different app categories behave depending on this setting:

| App category                                                                                    | Toggle on (default)                      | Toggle off                                           |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| Compatible, or problem-free (e.g., browsers) | · Routing ✅ <br /> · Filtering ✅ <br /> · HTTPS filtering ✅ | Same behavior — does not depend on toggle            |
| Problematic (from exclusion lists, filtering may cause issues)               | · Routing ❌ <br /> · Filtering ❌ <br /> · HTTPS filtering ❌ | Same behavior — does not depend on toggle            |
| Others / (newly detected, unknown, not in lists)                             | · Routing ✅ <br /> · Filtering ✅ <br /> · HTTPS filtering ❌ | Not routed through AdGuard, must be enabled manually |

:::info What happens on reset

If you click **Reset to default**, two things happen:

1. All app-specific permissions are cleared (set to “not configured”).
2. Predefined rules are applied to known safe apps (such as browsers), including HTTPS filtering.

:::
