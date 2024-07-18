---
title: Jak nainstalovat certifikát proxy
sidebar_position: 2
---

Naše desktopové aplikace AdGuard pro Windows a AdGuard pro Mac lze použít jako proxy server pro jiná zařízení. To znamená, že můžete přesměrovat provoz ostatních zařízení skrze AdGuard (veškerý provoz nebo provoz konkrétních aplikací a prohlížečů).

:::note

Tato zařízení musí být ve stejné síti jako PC nebo Mac s AdGuardem.

:::

Provoz HTTP bude filtrován v každém případě, ale aby AdGuard mohl filtrovat provoz HTTPS, je třeba do připojeného zařízení ručně nainstalovat AdGuard certifikát.

## Jak stáhnout a nainstalovat certifikát

V závislosti na operačním systému zařízení, jehož přenosy chcete filtrovat, postupujte podle jednoho z těchto pokynů:

### Windows {#windows}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

1. Zkontrolujte, zda je ochrana AdGuard zapnuta. V počítači s Windows zaškrtněte políčko **Použít AdGuard jako HTTP proxy** na kartě **Síť** v jeho nastavení. V případě Macu přejděte do **Nastavení** → **Předvolby** → **Síť** a povolte **HTTP proxy**.

1. Na stejném počítači s AdGuardem použijte tento odkaz: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klepněte na tlačítko **Stáhnout**. Pokud se stahování nespustí, zkuste jiný prohlížeč, například Firefox.

1. Přeneste stažený soubor **cert.cer** do zařízení s Windows, jehož provoz chcete přes AdGuard směrovat. K tomu můžete použít kabel USB, Bluetooth nebo cloudové služby.

1. Na tomto zařízení stiskněte **Win**, napište `Spravovat certifikáty počítače` a stiskněte **Enter**.

1. Na stránce *Certifikáty — místní počítač* najděte složku *Důvěryhodná kořenová certifikace* → *Certifikáty*.

1. Klepněte pravým tlačítkem myši na složku *Certifikáty* a klepněte na **Všechny úlohy** → **Importovat**.

1. Na stránce *Průvodce importem certifikátu* klikněte na položku **Další**.

1. Kliknutím na **Procházet** certifikát importujte.

1. Přejděte na soubor certifikátu **cert.cer**, vyberte jej a klikněte na **Otevřít**, poté na **Další**.

1. Zaškrtněte políčko **Umístit všechny certifikáty do následujícího úložiště**.

1. Ujistěte se, že se v poli *Úložiště certifikátů* zobrazuje položka *Důvěryhodné kořenové certifikační autority* a klikněte na **Další**.

1. Klikněte na **Dokončit**.

1. Stiskněte **Win** a poté otevřete **Nastavení**.

1. Vyberte **Síť a Internet** → **Proxy**.

1. Vypněte *Automaticky zjišťovat nastavení*.

1. Klikněte na **Nastavit** na kartě *Použít proxy server*.

1. Zapněte přepínač. Pro **IP adresu proxy** zadejte uvedenou IP adresu vašeho stolního počítače, kterou jste zaznamenali v kroku 1. Pro **Port** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

1. Klikněte na **Uložit**.

### Mac {#mac}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

1. Zkontrolujte, zda je ochrana AdGuard zapnuta. V počítači s Windows zaškrtněte políčko **Použít AdGuard jako HTTP proxy** na kartě **Síť** v jeho nastavení. V případě Macu přejděte do **Nastavení** → **Předvolby** → **Síť** a povolte **HTTP proxy**.

1. Pomocí webového prohlížeče následujte tento odkaz: http: [//local.adguard.org/cert.](http://local.adguard.org/cert).

1. Klepněte na tlačítko **Stáhnout**. Pokud se stahování nespustí, zkuste jiný prohlížeč, například Firefox.

1. Přeneste stažený soubor **cert.cer** do zařízení s macOS, jehož provoz chcete přes AdGuard směrovat. K tomu můžete použít kabel USB, Bluetooth nebo cloudové služby.

1. Dvakrát klikněte na stažený soubor certifikátu.

1. Zadejte heslo administrátora a klikněte na **Modify Keychain**.

1. Přejděte na **Spotlight** (ikona vyhledávání v pravém horním rohu), zadejte `Keychain Access` a poté z výsledků vyhledávání vyberte **Keychain Access**.

1. V části *Systém* zvýrazněte certifikát, který jste přidali.

1. Klikněte na něj pravým tlačítkem myši a z kontextové nabídky vyberte možnost **Získat informace**.

1. Rozbalte *Trust* a zobrazte zásady důvěryhodnosti pro certifikát.

1. V části *Secure Sockets Layers (SSL)* vyberte **Vždy důvěřovat**.

1. Otevřete **Předvolby systému** → **Síť** a vyberte nahoře aktivní připojení.

1. Klikněte na **Podrobnosti...** a přejděte na kartu **Proxy**.

1. Zaškrtněte dvě políčka: *Web proxy (HTTP)* a *Secure web proxy (HTTPS)*. Do pole **Server** zadejte IP adresu svého počítače, kterou jste zaznamenali v kroku 1. Do pole **Port** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

### Android {#android}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

1. Zkontrolujte, zda je ochrana AdGuard zapnuta. V počítači s Windows zaškrtněte políčko **Použít AdGuard jako HTTP proxy** na kartě **Síť** v jeho nastavení. V případě Macu přejděte do **Nastavení** → **Předvolby** → **Síť** a povolte **HTTP proxy**.

1. Na stejném počítači s AdGuardem použijte tento odkaz pomocí libovolného prohlížeče: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klepněte na tlačítko **Stáhnout**. Pokud se stahování nespustí, zkuste jiný prohlížeč, například Firefox.

1. Přeneste stažený soubor **cert.cer** do zařízení s Androidem, jehož provoz chcete přes AdGuard směrovat. K tomu můžete použít kabel USB, Bluetooth nebo cloudové služby.

1. Vyhledejte dříve stažený certifikát **cert.cer**, klepněte na něj, otevřete soubor a podle pokynů jej nainstalujte.

1. Zařízení se systémem Android ve výchozím nastavení certifikátům nedůvěřují, takže se zobrazí varování — můžete ho ignorovat. V některých telefonech můžete být vyzváni k zadání hesla zařízení. To proveďte a poté stiskněte tlačítko **OK**. Certifikát bude nainstalován.

1. Otevřete pokročilá nastavení aktivní Wi-Fi sítě.

1. Změňte **Typ proxy** na **Ručně**. Pro **název hostitele proxy** zadejte uvedenou IP adresu vašeho stolního počítače, kterou jste zaznamenali v kroku 1. Do pole **Port proxy** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.

### iOS {#ios}

1. Poznamenejte si IP adresu vašeho PC s nainstalovaným AdGuardem.

1. Zkontrolujte, zda je ochrana AdGuard zapnuta. V počítači s Windows zaškrtněte políčko **Použít AdGuard jako HTTP proxy** na kartě **Síť** v jeho nastavení. V případě Macu přejděte do **Nastavení** → **Předvolby** → **Síť** a povolte **HTTP proxy**.

1. Na stejném počítači s AdGuardem použijte tento odkaz pomocí libovolného prohlížeče: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Klepněte na tlačítko **Stáhnout**. Pokud se stahování nespustí, zkuste jiný prohlížeč, například Firefox.

1. Přeneste stažený soubor **cert.cer** do zařízení s iOS, jehož provoz chcete přes AdGuard směrovat. K tomu můžete použít kabel USB, Bluetooth nebo cloudové služby.

1. V zařízení s iOS otevřete **Nastavení** → **Stažený profil** a klepněte na **Nainstalovat** v pravém horním rohu. Zadejte své heslo a potvrďte instalaci. Klepněte na **Hotovo**.

1. Přejděte na **Nastavení** → **Obecné** → **Informace** → **Důvěryhodnost certifikátu**. Zapněte přepínač vedle *Adguard Personal CA*. Certifikát byl nainstalován.

1. Na tomto zařízení otevřete pokročilá nastavení aktivní Wi-Fi sítě.

1. Změňte **Typ proxy** na **Ručně**. Pro **název hostitele proxy** zadejte uvedenou IP adresu vašeho stolního počítače, kterou jste zaznamenali v kroku 1. Do pole **Port proxy** zadejte port zvolený v síťových nastaveních desktopové aplikace AdGuard.
