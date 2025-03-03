---
title: Protect Mail Activity and AdGuard
sidebar_position: 8
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Pe scurt

Aplicația Mail de la Apple folosește acum un proxy pentru a ascunde adresa IP a unui utilizator atunci când descarcă imagini din e-mailuri.

![Protecția vieții private a e-mailului](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

Cu toate acestea, nu va funcționa dacă există o conexiune VPN activă. Deoarece tratează AdGuard ca pe un VPN, nu va preîncărca imaginile automat.

Apple explică această problemă [aici](https://support.apple.com/HT212797).

## În detaliu

AdGuard pentru macOS folosește acum filtrarea de socket încorporată în macOS, bazată pe API-ul extensiilor de rețea. This new and rather buggy mechanism replaced good old Kernel extensions. În ultimii 1,5 ani, am raportat mai mult de 20(!) de buguri către Apple referitoare la noua lor metodă de filtrare.

API-ul extensiilor de rețea are o configurație asemănătoare VPN-ului, cu o listă de intrări asemănătoare rutelor. On Big Sur, AdGuard used "split-tunnel" rules to avoid creating the "default route" rule because it causes problems on early Big Sur releases. Aceste probleme au fost rezolvate în Monterey, așa că nimic nu ne împiedică să folosim regula "default route".

On Monterey, iCloud Private Relay got introduced. Privacy features of Mail.app also use Private Relay servers.

Ca urmare, AdGuard nu poate funcționa împreună cu Transmisia privată iCloud și funcțiile de intimitate ale aplicației Mail:

1. iCloud Private Relay is applied to connections at the library level — before they reach the socket level, where AdGuard operates.
2. iCloud Private Relay folosește QUIC, pe care AdGuard nu-l poate filtra deoarece filtrarea HTTP/3 nu este încă disponibilă.
3. Prin urmare, AdGuard blochează QUIC, inclusiv traficul Transmisiei private iCloud — altfel, blocarea reclamelor este imposibilă.
4. When you use iCloud Private Relay and switch AdGuard into the "split-tunnel" mode, you can't open websites in Safari.
5. To work around this issue for Monterey, we apply the "default route" rule. Când Private Relay vede această regulă, se dezactivează automat. So, AdGuard works seamlessly on Monterey, but iCloud Private Relay gets disabled.

`network.extension.monterey.force.split.tunnel` restaurează comportamentul "Big Sur", dar această opțiune poate întrerupe accesul la site-uri web din cauza (3) și (4). Continuăm să căutăm o soluție pentru această problemă. Una dintre opțiuni este implementarea filtrării HTTP/3.

## Soluția recomandată

În acest moment, recomandăm utilizarea unui serviciu VPN mai tradițional, cum ar fi [AdGuard VPN](https://adguard-vpn.com/), în locul caracteristicilor mai noi de intimitate Apple.
