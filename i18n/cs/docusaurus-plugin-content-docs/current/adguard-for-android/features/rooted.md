---
title: Zařízení s přístupem root
sidebar_position: 7
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Vzhledem k bezpečnostním opatřením OS Android jsou některé funkce AdGuardu dostupné pouze na zařízeních s přístupem root. Zde je jejich seznam:

- In most cases, **HTTPS filtering in apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps don't trust certificates in the user store
- [Režim směrování **Automatický proxy**](/adguard-for-android/features/settings#routing-mode) vyžaduje přístup root kvůli omezením systému Android na filtrování provozu v celém systému
- [Režim směrování **Ruční proxy**](/adguard-for-android/features/settings#routing-mode) vyžaduje v systému Android 10 a novějším přístup root, protože již není možné určit název aplikace přidružené ke spojení filtrovanému AdGuardem
