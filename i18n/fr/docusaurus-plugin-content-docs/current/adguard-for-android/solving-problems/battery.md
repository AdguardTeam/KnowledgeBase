---
title: Problèmes de consommation de batterie et de trafic
sidebar_position: 1
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

À cause des processus statistiques intégrés, une forte consommation de données et/ou de batterie était souvent attribuée à AdGuard par Android 6 et les versions antérieures. Cela s'explique par le fait qu'AdGuard comptait tout le trafic qu'il filtrait à partir de diverses applications. En conséquence, la part d'AdGuard dans l'utilisation totale des données et de la batterie était exagérée, tandis que d'autres applications étaient sous-estimées.

Avec Android 7, cependant, ce scénario s'est amélioré. Maintenant, les données reflétées dans les statistiques intégrées d'utilisation des données d'Android sont très proches de la réalité, bien qu'il y ait de légères divergences dans les données d'utilisation de la batterie.

Pourtant, les utilisateurs d'AdGuard peuvent toujours obtenir une image précise de la situation sur l'écran *Utilisation de la batterie*.

### Écran des statistiques d'utilisation de batterie

Vous pouvez y accéder en naviguant vers *Statistiques* → *Utilisation de la batterie*.

![Statistiques de batterie *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

À l'intérieur, vous trouverez un tableau qui affiche la consommation de ressources de la batterie par AdGuard au cours des dernières 24 heures, avec une option pour obtenir des données plus détaillées heure par heure en appuyant sur le tableau. En plus de cela, il y a également une répartition numérique des données pertinentes et une courte explication technique.

Vous trouverez plusieurs autres paramètres ci-dessous le graphique : *CPU au premier plan*, *CPU en arrière-plan*, *données mobiles*, et *données Wi-Fi*.

*CPU premier plan* et *CPU arrière-plan* affichent combien de temps l'unité centrale est utilisée par AdGuard lorsque l'application est active ou s'exécute en arrière-plan.

Grâce à l'*Utilisation des données mobiles* et à l'*Utilisation des données Wi-Fi*, vous pouvez voir combien de trafic AdGuard a consommé lorsque votre téléphone utilisait l'Internet mobile ou était connecté au Wi-Fi.

### Combien de ressources de batterie AdGuard consomme-t-il vraiment ?

Tout d'abord, proposons un peu de théorie et de liens avec les données nécessaires.

1. Android calcule la consommation de trafic en fonction du Profil de Puissance fourni par chaque fabricant : <https://source.android.com/devices/tech/power/values.html>

1. La partie principale du Profil de Puissance est un ensemble de valeurs en mAh qui définissent la consommation de la batterie pour chaque composant de l'appareil : <https://source.android.com/devices/tech/power/values.html>

    Par exemple, à partir du tableau ci-dessus :

    *wifi.active=* 31mA de consommation supplémentaire en mAh causée par l'échange de données par WiFi.

    *radio.active=* 100-300mA de consommation supplémentaire en mAh causée par l'échange de données sur le réseau mobile.

    *cpu.active=* 100-200mA de consommation supplémentaire en mAh causée par la charge du processeur.

1. AdGuard lui-même ne consomme presque aucun trafic, donc afin d'évaluer la consommation d'énergie, éliminons les "Paquets mobile/Wi-Fi" et concentrons-nous sur "CPU".

    Formule pour calculer la consommation :

    > "TEMPS CPU (ms)" X "cpu.active" / (60 *60* 1000) = "CONSOMMATION D'ÉNERGIE mAh"

    Mettons des nombres réels dans cette formule.

    Prenons *le total CPU* de la deuxième capture d'écran et convertissons-le en millisecondes : 506 000

    Un coefficient *cpu.active* pour 2GHz sera à peu près égal à 225mAh

    Résultat final :

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### Conclusion

La consommation réelle est **plusieurs fois inférieure** à ce qui est affiché dans les statistiques Android. Au lieu de 220 mAh, la valeur devrait être autour de 31 à 40 mAh. D'autre part, la consommation du navigateur ne devrait pas être de 66mAh, mais plutôt de 200mAh environ.
