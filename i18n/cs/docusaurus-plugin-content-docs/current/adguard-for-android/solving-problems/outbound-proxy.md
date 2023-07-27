---
title: Jak nastavit odchozí proxy
sidebar_position: 8
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Tento článek vysvětluje, jak nastavit některé z nejoblíbenějších proxy serverů tak, aby spolupracovaly s AdGuardem.

### Jak používat AdGuard s Tor

1. Otevřete nastavení AdGuardu a přejděte do **Nastavení** → **Síť** → **Nastavení proxy**. Sráhněte "Orbot: Proxy with Tor" klepnutím na **Integovat s Tor** nebo přímo z [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess).

2. Otevřete Orbot a stiskněte tlačítko **Spustit** na hlavní obrazovce aplikace.

2. Vraťte se na obrazovku **Nastavení proxy** v AdGuardu.

3. Klepněte na tlačítko **Integrovat s Tor**.

4. Všechna povinná pole budou předvyplněna:

| Pole           | Hodnota                |
| -------------- | ---------------------- |
| Typ proxy      | *SOCKS4* nebo *SOCKS5* |
| Hostitel proxy | *127.0.0.1*            |
| Port proxy     | *9050*                 |

Nebo můžete klepnout na **Přidat proxy**, zadat tyto hodnoty ručně a nastavit Orbot jako výchozí proxy.

5. Zapnout AdGuard ochranu.

Nyní bude AdGuard přeposílat veškerý provoz přes Orbot. Pokud zakážete Orbot, připojení k Internetu bude nedostupné, dokud nezakážete nastavení odchozího proxy v AdGuardu.

### Jak používat AdGuard s PIA (Private Internet Access)

*Předpokládáme, že jste již klientem PIA VPN a máte ji nainstalovanou ve svém zařízení.*

1. Otevřete nastavení AdGuardu a přejděte do **Nastavení** → **Síť** → **Nastavení proxy**.

2. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

| Pole           | Hodnota                              |
| -------------- | ------------------------------------ |
| Typ proxy      | *SOCKS5*                             |
| Hostitel proxy | *proxy-nl.privateinternetaccess.com* |
| Port proxy     | *1080*                               |

3. Musíte také vyplnit pole **Uživatelské jméno/heslo**. Za tímto účelem se přihlaste do [Klientského ovládacího panelu](https://www.privateinternetaccess.com/pages/client-sign-in) na webu PIA. Klikněte na tlačítko **Generovat heslo** v části **Generovat heslo PPTP/L2TP/SOCKS**. Zobrazí se uživatelské jméno začínající na "x" a náhodné heslo. Použijte je k vyplnění polí **Uživatelské jméno** a **Heslo** v AdGuardu.

4. Přepnutím přepínače nastavte tento proxy jako výchozí a poté klepněte na **Uložit**.

5. Zapněte AdGuard ochranu.

### Jak používat AdGuard s TorGuard

*Předpokládáme, že jste již klientem TorGuard a máte jej nainstalovaný ve svém zařízení.*

1. Otevřete nastavení AdGuardu a přejděte do **Nastavení** → **Síť** → **Nastavení proxy**.

2. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

| Pole           | Hodnota                                       |
| -------------- | --------------------------------------------- |
| Typ proxy      | *SOCKS5*                                      |
| Hostitel proxy | *proxy.torguard.org* nebo *proxy.torguard.io* |
| Port proxy     | *1080* nebo *1085* nebo *1090*                |

3. Do polí **Uživatelské jméno** a **Heslo** zadejte své uživatelské jméno proxy a heslo proxy, které jste si zvolili při registraci do TorGuardu.

4. Přepnutím přepínače nastavte tento proxy jako výchozí a poté klepněte na **Uložit**.

5. Zapněte AdGuard ochranu.

### Jak používat AdGuard s NordVPN

1. Otevřete nastavení AdGuardu a přejděte do **Nastavení** → **Síť** → **Nastavení proxy**.

2. Klepněte na tlačítko **Přidat proxy** a zadejte následující údaje:

| Pole           | Hodnota                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------ |
| Typ proxy      | *SOCKS5*                                                                                   |
| Hostitel proxy | *uložte jakýkoli server pro "Obfuscated" z [tohoto seznamu](https://nordvpn.com/servers/)* |
| Port proxy     | *1080*                                                                                     |

3. Do polí **Uživatelské jméno** a **Heslo** zadejte své uživatelské jméno a heslo NordVPN.

4. Přepnutím přepínače nastavte tento proxy jako výchozí a poté klepněte na **Uložit**.

5. Zapněte AdGuard ochranu.

### Jak používat AdGuard se Shadowsocks

*Zde předpokládáme, že jste již nakonfigurovali server Shadowsocks a klienta ve svém zařízení.*

:::note

You should remove Shadowsocks application from filtering before setting up the process (AdGuard → Apps management → Shadowsocks → Disable AdGuard protection) to avoid infinite loops and drops.

:::

1. Otevřete nastavení AdGuardu a přejděte do **Nastavení** → **Síť** → **Nastavení proxy**.

2. Klepněte na tlačítko **Přidat proxy** a vyplňte pole:

| Pole           | Hodnota     |
| -------------- | ----------- |
| Typ proxy      | *SOCKS5*    |
| Hostitel proxy | *127.0.0.1* |
| Port proxy     | *1080*      |

3. Klepněte na **Uložit a vybrat**

### Omezení

Existuje faktor, který může zabránit směrování určitých přenosů přes odchozí proxy. AdGuard přesměruje pouze provoz, který přes něj prochází. V podstatě se jedná o aplikace, které mají na kartě **Správa aplikací** povolen příznak **Blokování reklam**.
