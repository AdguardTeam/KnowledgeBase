---
title: iCloud Private Relay and AdGuard
sidebar_position: 7
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Descrierea problemei pe scurt

By default, AdGuard uses the "default route" which disables iCloud Private Relay.

În prezent, AdGuard și Transmisia privată iCloud nu pot funcționa simultan. AdGuard cannot block ads because iCloud Private Relay encrypts traffic before AdGuard can filter network connections. Când Transmisia privată iCloud este activă, orice filtrare (inclusiv filtrarea locală) devine imposibilă. Astfel, AdGuard nu poate filtra traficul sau efectua filtrarea DNS în Safari. Totuși, AdGuard tot filtrează traficul în alte browsere. To keep using iCloud Private Relay, consider installing [AdGuard for Safari](https://adguard.com/adguard-safari/overview.html).

Același lucru se aplică la utilizarea oricăror aplicații VPN pe macOS: trebuie să alegi între utilizarea Transmisiei private iCloud sau a unui serviciu VPN.

## În detaliu

AdGuard pentru macOS folosește acum filtrarea de socket încorporată în macOS, bazată pe API-ul extensiilor de rețea. This new and rather buggy mechanism replaced good old Kernel extensions. În ultimii 1,5 ani, am raportat mai mult de 20(!) de buguri către Apple referitoare la noua lor metodă de filtrare.

API-ul extensiilor de rețea are o configurație asemănătoare VPN-ului, cu o listă de intrări asemănătoare rutelor. Pe Big Sur, AdGuard a dezvoltat reguli de "tunnel separat" pentru a evita crearea regulii "implicită" deoarece aceasta cauzează probleme în versiunile timpurii ale Big Sur.

On Monterey, iCloud Private Relay got introduced. Funcțiile de intimitate ale aplicației Mail utilizează de asemenea servere Private Relay.

Ca urmare, AdGuard nu poate funcționa împreună cu Transmisia privată iCloud și funcțiile de intimitate ale aplicației Mail:

1. iCloud Private Relay is applied to connections at the library level — before they reach the socket level, where AdGuard operates.
2. iCloud Private Relay uses QUIC, which AdGuard can't filter in filtered apps because HTTP/3 filtering is not yet available.
3. Prin urmare, AdGuard blochează QUIC, inclusiv traficul Transmisiei private iCloud — altfel, blocarea reclamelor este imposibilă.
4. When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can't open websites in Safari.
5. To work around this issue for Monterey, we apply the "default route" rule. Când Private Relay vede această regulă, se dezactivează automat. So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.

`network.extension.monterey.force.split.tunnel` restaurează comportamentul "Big Sur", dar această opțiune poate întrerupe accesul la site-uri web din cauza (3) și (4). Continuăm să căutăm o soluție pentru această problemă. Una dintre opțiuni este implementarea filtrării HTTP/3.

## Soluția recomandată

Recomandăm utilizarea AdGuard împreună cu un serviciu VPN mai tradițional, cum ar fi [AdGuard VPN](https://adguard-vpn.com/).

## Soluție alternativă

You can prevent AdGuard from using the "default route" by disabling the "default route". Poate fi făcut prin Setări avansate → `network.extension.monterey.force.split.tunnel`.

![Dezactivează regula implicită în setările avansate *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Ține cont că, în acest caz, te vei confrunta cu problemele descrise mai sus.
