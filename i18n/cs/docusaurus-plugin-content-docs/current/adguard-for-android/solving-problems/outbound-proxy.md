---
title: Jak nastavit odchozí proxy
sidebar_position: 8
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

AdGuard umožňuje směrovat provoz vašeho zařízení přes server proxy. Chcete-li získat přístup k nastavení proxy, otevřete **Nastavení** a přejděte na **Filtrování** → **Síť** → **Proxy**.

## Příklady konfigurace proxy

V tomto článku uvádíme příklady nastavení některých nejoblíbenějších proxy serverů pro spolupráci s AdGuardem.

### Jak používat AdGuard s Tor

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy**. Stáhněte si "Orbot: Proxy with Tor" přímo z [Obchodu Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) nebo klepnutím na **Integrovat s Tor** a poté **Instalovat**.

2. Otevřete Orbot a stiskněte tlačítko **Spustit** na hlavní obrazovce aplikace.

3. Vraťte se na obrazovku **Proxy** v AdGuardu.

4. Klepněte na tlačítko **Integrovat s Tor**.

5. Všechna povinná pole budou předvyplněna:

    | Pole           | Hodnota                |
    | -------------- | ---------------------- |
    | Typ proxy      | *SOCKS4* nebo *SOCKS5* |
    | Hostitel proxy | *127.0.0.1*            |
    | Port proxy     | *9050*                 |

Nebo můžete klepnout na **Proxy server** → **Přidat proxy server**, zadat tyto hodnoty ručně a nastavit Orbot jako výchozí proxy.

6. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

Nyní bude AdGuard přeposílat veškerý provoz přes Orbot. Pokud zakážete Orbot, připojení k Internetu bude nedostupné, dokud nezakážete nastavení odchozího proxy v AdGuardu.

### Jak používat AdGuard s PIA (Private Internet Access)

*Předpokládáme, že jste již klientem PIA VPN a máte ji nainstalovanou ve svém zařízení.*

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

2. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

    | Pole           | Hodnota                              |
    | -------------- | ------------------------------------ |
    | Typ proxy      | *SOCKS5*                             |
    | Hostitel proxy | *proxy-nl.privateinternetaccess.com* |
    | Port proxy     | *1080*                               |

3. Musíte také vyplnit pole **Uživatelské jméno/heslo**. Za tímto účelem se přihlaste do [Klientského ovládacího panelu](https://www.privateinternetaccess.com/pages/client-sign-in) na webu PIA. Klikněte na tlačítko **Generovat heslo** v části **Generovat heslo PPTP/L2TP/SOCKS**. Zobrazí se uživatelské jméno začínající na "x" a náhodné heslo. Použijte je k vyplnění polí **Uživatelské jméno proxy** a **Heslo proxy** v AdGuardu.

4. Klepněte na **Uložit a vybrat**.

5. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard s TorGuard

*Předpokládáme, že jste již klientem TorGuard a máte jej nainstalovaný ve svém zařízení.*

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

2. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

    | Pole           | Hodnota                                       |
    | -------------- | --------------------------------------------- |
    | Typ proxy      | *SOCKS5*                                      |
    | Hostitel proxy | *proxy.torguard.org* nebo *proxy.torguard.io* |
    | Port proxy     | *1080* nebo *1085* nebo *1090*                |

3. Do polí **Uživatelské jméno** a **Heslo** zadejte své uživatelské jméno proxy a heslo proxy, které jste si zvolili při registraci do TorGuardu.

4. Klepněte na **Uložit a vybrat**.

5. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard s NordVPN

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

2. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

    | Pole           | Hodnota                                                                               |
    | -------------- | ------------------------------------------------------------------------------------- |
    | Typ proxy      | *SOCKS5*                                                                              |
    | Hostitel proxy | *jakýkoli server z [tohoto seznamu](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | Port proxy     | *1080*                                                                                |

3. Do polí **Uživatelské jméno** a **Heslo** zadejte své uživatelské jméno a heslo NordVPN.

4. Klepněte na **Uložit a vybrat**.

5. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard se Shadowsocks

*Zde předpokládáme, že jste již nakonfigurovali server Shadowsocks a klienta ve svém zařízení.*

:::note

Před nastavením procesu byste měli odstranit aplikaci Shadowsocks z filtrování (**Nastavení** → **Filtrování** → **Aplikace** → **Správa aplikací** → **Shadowsocks** → **Směrovat provoz skrze AdGuard**), abyste se vyhnuli nekonečným smyčkám a pádům.

:::

1. Otevřete AdGuard a jděte do **Nastavení** → **Filtrování** → **Síť** → **Proxy** → **Proxy server**.

2. Klepněte na tlačítko **Přidat proxy** a vyplňte pole:

    | Pole           | Hodnota     |
    | -------------- | ----------- |
    | Typ proxy      | *SOCKS5*    |
    | Hostitel proxy | *127.0.0.1* |
    | Port proxy     | *1080*      |

3. Klepněte na **Uložit a vybrat**.

4. Zapněte hlavní přepínač Proxy a AdGuard ochranu, aby byl provoz zařízení směrován přes proxy server.

### Jak používat AdGuard s Clash

*Předpokládáme, že jste již klientem Clash a máte jej nainstalovaný ve svém zařízení.*

1. Otevřete nastavení Clash a přejděte do **Nastavení** → **Síť** → **Směrovat systémový provoz** a přepněte přepínač. Tímto nastavíte Clash do režimu proxy.
2. Otevřete Adguard a přejděte na **Správa aplikací**. Vyberte **Clash pro Android** a zakažte **Směrovat provoz skrze AdGuard**. Tímto se odstraní zacyklení provozu.
3. Poté otevřete **Nastavení** → **Síť** → **Proxy** → **Proxy server**.
4. Klepněte na tlačítko **Přidat proxy** a vyplňte pole:

    | Pole           | Hodnota     |
    | -------------- | ----------- |
    | Typ proxy      | *SOCKS5*    |
    | Hostitel proxy | *127.0.0.1* |
    | Port proxy     | *7891*      |

## Omezení

Existuje faktor, který může zabránit směrování určitých přenosů přes odchozí proxy. AdGuard přesměruje pouze provoz, který přes něj prochází. V podstatě se jedná o aplikace, které mají na kartě **Správa aplikací** povolen příznak **Blokování reklam**.