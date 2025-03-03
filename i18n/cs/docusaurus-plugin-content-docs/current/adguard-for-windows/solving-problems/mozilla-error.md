---
title: Jak opravit chybu `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`?
sidebar_position: 11
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Někteří uživatelé AdGuardu pro Windows se zapnutým [filtrováním HTTPS](/general/https-filtering/what-is-https-filtering) nemohou přistupovat na některé webové stránky, například google.com a youtube.com. Prohlížeče s funkcí Strict Certificate Pinning by místo otevření webové stránky zobrazily chybu `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE`.

Zde je seznam ovlivněných prohlížečů:

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor Browser

Pokud je vaším výchozím prohlížečem některý z těchto prohlížečů, vyřešte problém následujícím způsobem:

1. Do adresního řádku prohlížeče napište `about:config`
2. V nabídce, která se zobrazí, napište `security.cert_pinning.enforcement_level` do vyhledávacího pole.
3. Změňte parametr `security.cert_pinning.enforcement_level` z 2 na 1.
