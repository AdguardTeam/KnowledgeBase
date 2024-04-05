---
title: Rooted devices
sidebar_position: 7
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Vzhledem k bezpečnostním opatřením OS Android jsou některé funkce AdGuardu dostupné pouze na zařízeních s přístupem root. Zde je jejich seznam:

- **HTTPS filtering in most apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps do not trust certificates in the user store. Instalace certifikátu do systémového úložiště je možná pouze na zařízeních s přístupem root
- The [**Automatic proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access due to Android's restrictions on system-wide traffic filtering
- The [**Manual proxy** routing mode](/adguard-for-android/features/settings#routing-mode) requires root access on Android 10 and above as it's no longer possible to determine the name of the app associated with a connection filtered by AdGuard
