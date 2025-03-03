---
title: Probleme de consum al bateriei și al traficului
sidebar_position: 1
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Datorită proceselor de statistici încorporate, consumul ridicat de date și/sau de baterie era adesea atribuit AdGuard de Android 6 și versiunile anterioare. Acest lucru s-a datorat faptului că AdGuard a numărat tot traficul pe care l-a filtrat din diverse aplicații. Ca rezultat, cota AdGuard din utilizarea totală a datelor și a bateriei a fost exagerată, în timp ce alte aplicații au fost subestimate.

Cu Android 7, totuși, acest scenariu s-a îmbunătățit. Acum, datele reflectate în statisticile de utilizare a datelor încorporate în Android sunt foarte aproape de realitate, deși există discrepanțe minore în datele de utilizare a bateriei.

Cu toate acestea, utilizatorii AdGuard pot obține întotdeauna o imagine clară a situației pe ecranul *Utilizarea bateriei*.

### Ecranul propriilor statistici de utilizare a bateriei

Îl poți accesa navigând la *Statistici* → *Utilizarea bateriei*.

![Statistici baterie *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

În interior vei găsi un grafic care arată consumul de resurse al bateriei AdGuard în ultimele 24 de ore, cu o opțiune de a obține date mai detaliate oră de oră atingând graficul. În plus, există o defalcare numerică a datelor relevante și o scurtă explicație tehnică.

### Cât de multă resursă de baterie consumă de fapt AdGuard?

În primul rând, să stabilim câteva teorii și legături cu datele necesare.

1. Android derivă consumul de trafic pe baza așa-numitului Profil de putere, care este oferit de fiecare fabricant: <https://source.android.com/devices/tech/power/values.html>

1. Partea principală a Profilului de putere este un set de valori în mAh care definesc consumul de baterie pentru fiecare componentă a dispozitivului: <https://source.android.com/devices/tech/power/values.html>

    De exemplu, din tabelul de mai sus:

    *wifi.active=* 31mA consum suplimentar în mAh cauzat de schimbul de date WiFi.

    *radio.active=* 100-300mA consum suplimentar în mAh cauzat de schimbul de date în rețeaua mobilă.

    *cpu.active=* 100-200mA consum suplimentar în mAh cauzat de încărcarea CPU.

1. AdGuard în sine aproape că nu consumă trafic, așa că, în scopul evaluării consumului de energie, să renunțăm la 'Pachete Mobile/Wi-Fi' și să ne concentrăm pe 'CPU'.

    Formula pentru a calcula consumul:

    > “CPU TIME (ms)” X “cpu.active” / (60 *60* 1000) = “POWER USE mAh”

    Să introducem numere reale în această formulă.

    Să luăm *CPU total* din a doua captură de ecran și să convertim în milisecunde: 506000

    Un coeficient *cpu.active* pentru 2GHz va fi aproximativ egal cu 225mAh

    Rezultatul final:

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### Concluzie

Consumul real este **de câteva ori mai mic** decât cel arătat în statisticile Android. În loc de 220mAh, ar trebui să fie undeva în jurul valorii de 31-40mAh. Pe de altă parte, consumul browserului nu ar trebui să fie 66mAh, ci ~200mAh.
