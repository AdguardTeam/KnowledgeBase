---
title: Jak nastavit odchozí proxy
sidebar_position: 8
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Níže naleznete seznam nejznámějších aplikací, které můžete nakonfigurovat tak, aby v AdGuardu fungovaly jako proxy servery.

:::note

Pokud vaše aplikace není uvedena v seznamu níže, zkontrolujte konfiguraci proxy serveru v nastavení nebo kontaktujte tým podpory.

:::

AdGuard umožňuje směrovat provoz vašeho zařízení přes server proxy. Chcete-li získat přístup k nastavení proxy, otevřete **Nastavení** a přejděte na **Filtrování** → **Síť** → **Proxy**.

## Příklady konfigurace proxy

V tomto článku uvádíme příklady nastavení některých nejoblíbenějších proxy serverů pro spolupráci s AdGuardem.

### Jak používat AdGuard s Tor

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy**. Download “Orbot: Proxy with Tor” directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

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

    Nyní bude AdGuard přeposílat veškerý provoz přes Orbot. Pokud zakážete Orbot, připojení k Internetu bude nedostupné, dokud nezakážete nastavení odchozího proxy v AdGuardu.

### Jak používat AdGuard s PIA (Private Internet Access)

*Předpokládáme, že jste již klientem PIA VPN a máte ji nainstalovanou ve svém zařízení.*

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

1. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

    | Pole           | Hodnota                              |
    | -------------- | ------------------------------------ |
    | Typ proxy      | *SOCKS5*                             |
    | Hostitel proxy | *proxy-nl.privateinternetaccess.com* |
    | Port proxy     | *1080*                               |

1. Musíte také vyplnit pole **Uživatelské jméno/heslo**. Za tímto účelem se přihlaste do [Klientského ovládacího panelu](https://www.privateinternetaccess.com/pages/client-sign-in) na webu PIA. Tap the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with “x” and a random password will be shown. Použijte je k vyplnění polí **Uživatelské jméno proxy** a **Heslo proxy** v AdGuardu.

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

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

1. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

    | Pole           | Hodnota                                                                                                                                |
    | -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
    | Typ proxy      | *SOCKS5*                                                                                                                               |
    | Hostitel proxy | *jakýkoli server z [tohoto seznamu](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent)* |
    | Port proxy     | *1080*                                                                                                                                 |

1. Do polí **Uživatelské jméno** a **Heslo** zadejte své uživatelské jméno a heslo NordVPN.

1. Klepněte na **Uložit a vybrat**.

1. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard se Shadowsocks

*Zde předpokládáme, že jste již nakonfigurovali server Shadowsocks a klienta ve svém zařízení.*

:::note

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

Existuje faktor, který může zabránit přesměrování určitého provozu přes odchozí proxy server i po konfiguraci nastavení proxy serveru AdGuard. To se může stát, pokud aplikaci nenastavíte tak, aby odesílala provoz skrze AdGuard. Chcete-li to provést, musíte přejít na **Správa aplikací**, vybrat aplikaci a zapnout **Směrovat provoz skrze AdGuard**.
