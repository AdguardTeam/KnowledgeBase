---
title: Instalace certifikátu do Zabezpečené složky
sidebar_position: 13
---

Pokud používáte [ *Zabezpečenou složku* ve vašem zařízení Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (to platí hlavně pro zařízení Samsung), můžete při instalaci certifikátu HTTPS narazit na určité potíže. Jde o to, že *Zabezpečená složka* má vlastní úložiště, kde jsou uloženy certifikáty. Pokud vše provedete podle pokynů [popsaných zde](../../overview#https-filtering), certifikát se nainstaluje do hlavního úložiště a nehraje pro váš blokátor reklam v zabezpečené složce *žádnou roli*. Chcete-li tento problém vyřešit a nainstalovat certifikát pro váš AdGuard pro Android do úložiště *Zabezpečená složka*, postupujte podle následujících pokynů:

1. Po instalaci aplikace a připojení k síti VPN klepněte na *Zapnout* vedle zprávy *Filtrování HTTPS je vypnuto*.
2. Klepněte na *Další* → *Další* → *Uložit nyní* → *Povolit*.
3. Certifikát uložte (v této fázi jej můžete přejmenovat, abyste jej snáze našli).
4. Po zobrazení vyskakovacího okna *Jak nainstalovat certifikát?* NEKLEPEJTE na položku *Otevřít nastavení*.
5. Minimalizujte aplikaci a přejděte do zabezpečené složky.
6. Klepněte na menu se třemi tečkami a přejděte na další nastavení zabezpečení.
7. Klepněte na *Nainstalovat z úložiště* → *CA Certifikát* → *Přesto nainstalovat* → zadejte gesto/heslo/otisk prstu → vyhledejte uložený certifikát a vyberte jej.
8. Vraťte se do aplikace AdGuard a zavřete vyskakovací okno "Jak nainstalovat certifikát?" klepnutím na tlačítko s křížkem.
9. Hotovo! Certifikát byl nainstalován.