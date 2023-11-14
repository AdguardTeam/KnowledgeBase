---
title: Doména local.adguard.org
sidebar_position: 3
---

Uživatelé AdGuardu pro Windows, Mac a Android si mohou všimnout, že AdGuard přidává malý skript na každou webovou stránku, která se načítá z domény `local.adguard.org`.

Nebojte se, toto není skutečná doména a ve skutečnosti neexistuje žádný skutečný server s tímto názvem. Tato doména slouží k použití kosmetického filtrování webových stránek, ale vše se provádí lokálně přímo v zařízení bez připojení k serveru.

### Technické vysvětlení

Co se ale děje a proč? Níže si přečtěte technické vysvětlení.

1. AdGuard je blokátor obsahu na úrovni sítě, takže nemůže jednoduše přidávat vlastní JavaScript a CSS na webové stránky, jako to dělají rozšíření prohlížeče. Pro kvalitní blokování obsahu je to však zásadní.
2. Za tímto účelem AdGuard vloží "obsahový skript", který vypadá takto: `<script src="https://local.adguard.org/.../content-script.js">`. Tento "obsahový skript" se stará o kosmetické filtrování, skrývá nebo odstraňuje obsah reklamy z webových stránek.
3. Připojení na IP adresu domény `local.adguard.org` jsou zachycena AdGuardem na síťové úrovni a **zpracována lokálně**. To je důvod, proč má tato doména "statickou" IP adresu, která se roky nemění.

**Proč k tomu potřebujeme skutečnou IP adresu?**

- Nemůžeme použít adresu `127.0.0.1`, protože ji prohlížeče neakceptují.
- Použití některé IP adresy z privátních podsítí je možné, ale toto řešení má dvě nevýhody.
    - Zaprvé, existuje malá pravděpodobnost, že dojde ke křížení se stávající intranetovou službou a narušení přístupu k ní.
    - Za druhé, některé DNS servery to mohou považovat za útok na opětovné svázání DNS a odmítnout odpovědět na `local.adguard.org`.

### Ověření

Tuto skutečnost lze snadno ověřit. Pokud AdGuard vypnete, zjistíte, že na `local.adguard.org` nelze navázat spojení, protože neexistuje žádný server s touto adresou. Zkuste ji otevřít v prohlížeči, když je AdGuard vypnutý.
