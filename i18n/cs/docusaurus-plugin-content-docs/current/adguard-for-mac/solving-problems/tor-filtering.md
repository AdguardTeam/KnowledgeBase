---
title: Nastavení filtrování v prohlížeči Tor
sidebar_position: 10
---

Ve výchozím nastavení je prohlížeč Tor přidán do seznamu filtrovaných aplikací AdGuard. Aby jej však AdGuard mohl filtrovat, musí změnit nastavení zabezpečení Toru. Díky tomu bude Tor důvěřovat CA certifikátu AdGuardu.

Pokud se rozhodnete filtrovat Tor a zaškrtnete jej v *Předvolby* → *Síť* → *Aplikace*, AdGuard vám zobrazí toto dialogové okno:

![AdGuard dialog box](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Aktualizací nastavení Tor, nastaví AdGuard následující:

`security.enterprise_roots.enabled`: true

Toto nastavení způsobí, že Tor bude důvěřovat kořenovým certifikátům. [Další informace](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning je bezpečnostní opatření, které webovým stránkám umožňuje zajistit, aby spojení mezi webovou stránkou a uživatelem bylo autentické. Webová stránka zveřejní seznam veřejných klíčů, kterým důvěřuje. Pokud je úroveň vynucení nastavena na hodnotu 1, připnutí se u vlastních certifikačních autorit nevynucuje. [Další informace](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Chcete-li použít změny, budete muset restartovat Tor.

> Pokud tato nastavení změníte ručně, filtrování Tor bude ukončeno.
