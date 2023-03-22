---
title: Jak nainstalovat certifikát proxy
sidebar_position: 2
---

Desktopové aplikace AdGuardu (AdGuard pro Windows a AdGuard pro Mac) lze použít jako proxy. To znamená, že můžete přesměrovat provoz jiných zařízení přes AdGuard (zcela, nebo provoz konkrétních aplikací/prohlížečů).

> Všimněte si, že tato zařízení musí být ve stejné síti jako PC nebo Mac, na kterém je AdGuard nainstalován.

Provoz HTTP bude filtrován v každém případě, ale aby AdGuard mohl filtrovat provoz HTTPS, je třeba do připojeného zařízení ručně nainstalovat AdGuard certifikát.

## Jak stáhnout a nainstalovat certifikát

V závislosti na operačním systému vašeho zařízení (Windows/Mac/Android/iOS) postupujte podle jednoho z těchto pokynů:

### Windows {#windows}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

2. Zkontrolujte, zda je ochrana AdGuard zapnuta. Poté zaškrtněte políčko **Použít AdGuard jako HTTP proxy** na kartě **Síť** v jeho nastavení.

3. Na stejném zařízení s AdGuardem použijte tento odkaz pomocí libovolného prohlížeče: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Klepněte na tlačítko **Stáhnout**.

5. Přeneste stažený soubor **cert.cer** do zařízení, jehož provoz chcete přes AdGuard směrovat.

6. Na tomto zařízení stiskněte tlačítko **Win**, napište `Spravovat certifikáty počítače` a stiskněte **Enter**.

7. Na stránce *Certifikáty – místní počítač* najděte složku *Důvěryhodná kořenová certifikace* → *Certifikáty*.

8. Klepněte pravým tlačítkem myši na složku *Certifikáty* a klepněte na **Všechny úlohy** → **Importovat**.

9. Na stránce *Průvodce importem certifikátu* klikněte na položku **Další**.

10. Kliknutím na **Procházet** certifikát importujte.

11. Přejděte na soubor certifikátu **cert.cer**, vyberte jej a klikněte na **Otevřít**.

12. Klikněte na **Další**.

13. Zaškrtněte políčko **Umístit všechny certifikáty do následujícího úložiště**.

14. Ujistěte se, že se v poli *Úložiště certifikátů* zobrazuje položka *Důvěryhodné kořenové certifikační autority* a klikněte na **Další**.

15. Klikněte na **Dokončit**.

16. Stiskněte klávesu **Win**, poté otevřete **Nastavení**.

17. Vyberte **Síť a Internet** → **Proxy**.

18. Vypněte *Automaticky zjišťovat nastavení*.

19. Klikněte na **Nastavit** na kartě *Použít proxy server*.

20. Zapněte přepínač. Pro **IP adresu proxy** zadejte uvedenou IP adresu vašeho stolního počítače (krok 1). Pro **Port** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

21. Klikněte na **Uložit**.

### Mac {#mac}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

2. Zkontrolujte, zda je ochrana AdGuard zapnuta. Poté přejděte do **Nastavení** → **Síť** → **HTTP proxy** a zaškrtněte políčko **Použít AdGuard jako HTTP proxy**.

3. Na stejném počítači s AdGuardem použijte tento odkaz pomocí libovolného prohlížeče: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Klepněte na tlačítko **Stáhnout**.

5. Přeneste stažený soubor **cert.cer** do zařízení, jehož provoz chcete přes AdGuard směrovat.

6. Dvakrát klikněte na stažený soubor certifikátu.

7. Zadejte heslo administrátora a klikněte na **Modify Keychain**.

8. Přejděte na **Spotlight** (ikona vyhledávání v pravém horním rohu), zadejte "Keychain Access" a poté z výsledků vyhledávání vyberte **Keychain Access**.

9. V části *Systém* zvýrazněte certifikát, který jste přidali.

10. Klikněte na něj pravým tlačítkem myši a z kontextové nabídky vyberte možnost **Získat informace**.

11. Rozbalte *Trust* a zobrazte zásady důvěryhodnosti pro certifikát.

12. V části *Secure Sockets Layers (SSL)* vyberte **Vždy důvěřovat**.

13. Otevřete **Předvolby systému** → **Síť** a vyberte nahoře aktivní připojení.

14. Klikněte na **Podrobnosti...** a přejděte na kartu **Proxy**.

15. Zaškrtněte dvě políčka: *Web proxy (HTTP)* a *Secure web proxy (HTTPS)*. Do pole **Server** zadejte zaznamenanou IP adresu počítače (krok 1). Do pole **Port** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

### Android {#android}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

2. Zkontrolujte, zda je ochrana AdGuard zapnuta. Poté zaškrtněte políčko **Použít AdGuard jako HTTP proxy** na kartě **Síť** v jeho nastavení.

3. Na stejném počítači s AdGuardem použijte tento odkaz pomocí libovolného prohlížeče: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Klepněte na tlačítko **Stáhnout**.

5. Přeneste stažený soubor **cert.cer** do zařízení, jehož provoz chcete přes AdGuard směrovat.

6. Vyhledejte a klepněte na dříve stažený certifikát **cert.cer** a otevřete soubor.

7. V některých telefonech můžete být vyzváni k zadání hesla zařízení. To proveďte a poté stiskněte tlačítko **OK**. Certifikát byl nainstalován.

8. Otevřete pokročilá nastavení aktivní Wi-Fi sítě.

9. Přepněte **Typ proxy** na **Ruční**. Pro **název hostitele proxy** zadejte uvedenou IP adresu vašeho stolního počítače (krok 1). Do pole **Port proxy** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

### iOS {#ios}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

2. Zkontrolujte, zda je ochrana AdGuard zapnuta. Poté zaškrtněte políčko **Použít AdGuard jako HTTP proxy** na kartě **Síť** v jeho nastavení.

3. Na stejném počítači s AdGuardem použijte tento odkaz pomocí libovolného prohlížeče: [http://local.adguard.org/cert](http://local.adguard.org/cert).

4. Klepněte na tlačítko **Stáhnout**.

5. Přeneste stažený soubor **cert.cer** do zařízení, jehož provoz chcete přes AdGuard směrovat.

6. Otevřete **Nastavení** → **Zabezpečení** → **Šifrování a pověření** → **Instalace certifikátu**. Zařízení Android ve výchozím nastavení nedůvěřují certifikátům, takže když zvolíte **Certifikát CA**, zobrazí se varování. Klepněte na **Přesto instalovat**.

7. Otevřete **Nastavení** → **Stažený profil** a klepněte na **Nainstalovat** v pravém horním rohu. Zadejte své heslo a potvrďte instalaci. Klepněte na **Hotovo**.

8. Přejděte na **Nastavení** → **Obecné** → **Informace** → **Důvěryhodnost certifikátu**. Zapněte přepínač vedle *Adguard Personal CA*. Certifikát byl nainstalován.

9. Na tomto zařízení otevřete pokročilá nastavení aktivní Wi-Fi sítě.

10. Přepněte **Typ proxy** na **Ruční**. Pro **název hostitele proxy** zadejte uvedenou IP adresu vašeho počítače (krok 1). Do pole **Port proxy** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.
