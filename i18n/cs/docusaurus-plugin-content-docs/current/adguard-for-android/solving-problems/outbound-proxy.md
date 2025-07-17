---
title: Jak nastavit odchozí proxy
sidebar_position: 7
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Níže je uveden seznam nejznámějších aplikací, které lze v AdGuardu nakonfigurovat jako proxy servery.

:::note

Pokud vaše aplikace není uvedena v seznamu níže, zkontrolujte konfiguraci proxy serveru v nastavení nebo kontaktujte tým podpory.

:::

AdGuard umožňuje směrovat provoz vašeho zařízení přes server proxy. Chcete-li získat přístup k nastavení proxy, otevřete **Nastavení** a přejděte na **Filtrování** → **Síť** → **Proxy**.

## Příklady konfigurace proxy

V tomto článku uvádíme příklady nastavení některých nejoblíbenějších proxy serverů pro spolupráci s AdGuardem.

### Jak používat AdGuard s Tor

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy**. Stáhněte “Orbot: Proxy with Tor” přímo z [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) nebo klepnutím na **Integrovat s Tor** a poté na **Instalovat**.

1. Otevřete Orbot a stiskněte tlačítko **Spustit** na hlavní obrazovce aplikace.

1. Vraťte se na obrazovku **Proxy** v AdGuardu.

1. Klepněte na tlačítko **Integrovat s Tor**.

1. Všechna povinná pole budou předvyplněna:

    | Pole           | Hodnota                |
    | -------------- | ---------------------- |
    | Typ proxy      | *SOCKS4* nebo *SOCKS5* |
    | Hostitel proxy | *127.0.0.1*            |
    | Port proxy     | *9050*                 |

    Nebo můžete klepnout na **Proxy server** → **Přidat proxy server**, zadat tyto hodnoty ručně a nastavit Orbot jako výchozí proxy.

1. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

    Nyní bude AdGuard směrovat veškerý provoz přes Orbot. Pokud zakážete Orbot, připojení k Internetu bude nedostupné, dokud nezakážete nastavení odchozího proxy v AdGuardu.

### Jak používat AdGuard s PIA (Private Internet Access)

*Předpokládáme, že jste již klientem PIA VPN a máte ji nainstalovanou ve svém zařízení.*

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

1. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

    | Pole           | Hodnota                              |
    | -------------- | ------------------------------------ |
    | Typ proxy      | *SOCKS5*                             |
    | Hostitel proxy | *proxy-nl.privateinternetaccess.com* |
    | Port proxy     | *1080*                               |

1. Musíte také vyplnit pole **Uživatelské jméno/heslo**. Za tímto účelem se přihlaste do [Klientského ovládacího panelu](https://www.privateinternetaccess.com/pages/client-sign-in) na webu PIA. Klepněte na tlačítko **Generovat heslo** v části **Generovat heslo PPTP/L2TP/SOCKS**. Zobrazí se uživatelské jméno začínající na “x” a náhodné heslo. Použijte je k vyplnění polí **Uživatelské jméno proxy** a **Heslo proxy** v AdGuardu.

1. Klepněte na **Uložit a vybrat**.

1. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard s TorGuard

*Předpokládáme, že jste již klientem TorGuard a máte jej nainstalovaný ve svém zařízení.*

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

1. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

    | Pole           | Hodnota                                     |
    | -------------- | ------------------------------------------- |
    | Typ proxy      | *SOCKS5*                                    |
    | Hostitel proxy | *proxy.torguard.org* or *proxy.torguard.io* |
    | Port proxy     | *1080* nebo *1085* nebo *1090*              |

1. Do polí **Uživatelské jméno** a **Heslo** zadejte své uživatelské jméno proxy a heslo proxy, které jste si zvolili při registraci do TorGuardu.

1. Klepněte na **Uložit a vybrat**.

1. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard s NordVPN

1. Přihlaste se ke svému účtu NordVPN.

1. Přejděte na **Služby** → **NordVPN** → **Ruční nastavení** a nastavte přihlašovací údaje ručně.

1. Na e-mailovou adresu, kterou používáte pro NordVPN, obdržíte ověřovací kód. Použijte ho ve svém účtu NordVPN podle požadavků a poté klepněte na *Použít* a *OK* pro uložení změn.

![Ruční nastavení](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Otevřete aplikaci AdGuard a přejděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server** → **Přidat proxy server**.

1. Zadejte následující údaje:

    | Pole           | Hodnota                                                                                                                              |
    | -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
    | Typ proxy      | *SOCKS5*                                                                                                                             |
    | Hostitel proxy | Jakýkoli server z [tohoto seznamu](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Port proxy     | *1080*                                                                                                                               |

1. Do polí **Uživatelské jméno** a **Heslo** zadejte své přihlašovací údaje pro NordVPN.

1. Klepněte na **Uložit a vybrat**.

1. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard se Shadowsocks

*Zde předpokládáme, že jste již nakonfigurovali server Shadowsocks a klienta ve svém zařízení.*

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Před nastavením procesu byste měli odstranit aplikaci Shadowsocks z filtrování (**Správa aplikací** → **Shadowsocks** → **Směrovat provoz skrze AdGuard**), abyste se vyhnuli nekonečným smyčkám a pádům.

:::

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

1. Klepněte na tlačítko **Přidat proxy** a vyplňte pole:

    | Pole           | Hodnota     |
    | -------------- | ----------- |
    | Typ proxy      | *SOCKS5*    |
    | Hostitel proxy | *127.0.0.1* |
    | Port proxy     | *1080*      |

1. Klepněte na **Uložit a vybrat**.

1. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard s Clash

*Předpokládáme, že jste již klientem Clash a máte jej nainstalovaný ve svém zařízení.*

1. Otevřete nastavení Clash a přejděte do **Nastavení** → **Síť** → **Směrovat systémový provoz** a přepněte přepínač. Tímto nastavíte Clash do režimu proxy.

1. Otevřete AdGuard a přejděte na **Správa aplikací**. Vyberte **Clash pro Android** a zakažte **Směrovat provoz skrze AdGuard**. Tímto se odstraní zacyklení provozu.

1. Poté jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

1. Klepněte na tlačítko **Přidat proxy** a vyplňte pole:

    | Pole           | Hodnota     |
    | -------------- | ----------- |
    | Typ proxy      | *SOCKS5*    |
    | Hostitel proxy | *127.0.0.1* |
    | Port proxy     | *7891*      |

## Omezení

Přinejmenším jeden faktor však může zabránit tomu, aby byl určitý provoz směrován přes odchozí proxy server, a to i po konfiguraci nastavení proxy serveru AdGuard. To v případě, že samotná aplikace není nakonfigurována tak, aby odesílala svůj provoz přes AdGuard. Chcete-li to provést, musíte přejít na **Správa aplikací**, vybrat aplikaci a zapnout **Směrovat provoz skrze AdGuard**.
