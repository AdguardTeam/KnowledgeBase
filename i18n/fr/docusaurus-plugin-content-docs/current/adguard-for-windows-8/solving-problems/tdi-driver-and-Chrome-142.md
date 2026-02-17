---
title: Problèmes de filtrage dans Chrome 142+ lors de l'utilisation du pilote TDI
sidebar_position: 1
---

:::info

Cet article décrit AdGuard pour Windows v8.0, un bloqueur de publicité complet qui protège votre appareil au niveau du système. Il s'agit d'une version bêta encore en développement. Pour l'essayer, téléchargez la [version bêta d'AdGuard pour Windows](https://agrd.io/windows_beta).

:::

Certains utilisateurs d'AdGuard pour Windows peuvent remarquer que [l'application cesse de filtrer le trafic dans les navigateurs basés sur Chromium](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). À partir de Google Chrome 142+, le trafic du navigateur n'apparaît tout simplement pas au niveau du pilote TDI, empêchant AdGuard de l'inspecter ou de le filtrer.

Ce comportement n'est pas un bug d'AdGuard, mais le résultat de récentes modifications architecturales et de sécurité apportées aux navigateurs modernes.

## Pourquoi cela arrive-t-il

Les navigateurs basés sur Chromium (Chrome, Edge, Brave, Vivaldi, etc.) ont renforcé leur architecture de sécurité. Un changement important consiste à déplacer les processus internes sensibles dans le [sandbox Windows AppContainer](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation), y compris le service réseau, qui gère tout le trafic du navigateur.

### Qu'est-ce qui a changé dans Chrome 142 ?

À partir de Chrome 142, le processus de service réseau est désormais lancé dans AppContainer par défaut.

Dans ce cas, les applications exécutées dans l'AppContainer n'utilisent pas l'interface réseau TDI héritée ; leur trafic est acheminé via la pile WSK (Winsock Kernel) plus moderne. Par conséquent, le pilote TDI ne peut ni voir, ni intercepter, ni traiter les connexions qui transitent par WSK, et tout le trafic du navigateur devient invisible pour le pilote TDI utilisé par AdGuard.

Ce comportement est entièrement contrôlé par les politiques de sandbox de Chrome et ses expériences internes (essais sur le terrain), et non par les paramètres de l'utilisateur.

## Pourquoi cela affecte AdGuard

Le pilote TDI est une technologie Windows obsolète qui a été dépréciée et n'est plus prise en charge par Microsoft depuis de nombreuses années. Il n'est pas compatible avec les modèles modernes d'isolation et de sandbox utilisés par les navigateurs.

De ce fait, la visibilité du trafic basée sur le TDI devient de plus en plus instable. Sur certains navigateurs, cette fonctionnalité a déjà complètement disparu et finira par cesser de fonctionner totalement.

AdGuard considère déjà le pilote TDI comme obsolète, et sa suppression complète est prévue à mesure que le produit évolue.

## Solution temporaire

Certaines modifications du registre Windows peuvent forcer le navigateur à cesser d'utiliser AppContainer, ce qui aura pour conséquence que ses processus s'exécutent à nouveau en mode non isolé. Le service réseau cesse d'utiliser la pile WSK et se rabat sur un chemin réseau que le pilote TDI peut voir. AdGuard retrouve alors la capacité de filtrer le trafic du navigateur.

### Comment modifier le registre dans les navigateurs basés sur Chromium

:::warning

Des droits d'administrateur sont requis pour modifier le registre. Des modifications incorrectes peuvent affecter la stabilité et la sécurité du système ou du navigateur. Créez toujours une sauvegarde de la branche du registre avant de la modifier.

Avant de continuer, gardez à l’esprit que cette solution réduit la sécurité du sandbox/AppContainer, en rendant le navigateur moins isolé. Elle s'applique à l'ensemble du système car elle modifie `HKLM`, et ne doit être utilisée que pour le débogage, les solutions de contournement temporaires, dans des environnements contrôlés, ou lorsque l'interception du trafic basée sur TDI est strictement nécessaire.

Elle ne devrait **pas** être appliquée de manière généralisée aux machines des utilisateurs finaux. \*\*Ne procédez que si vous en comprenez les implications

:::

Vous pouvez appliquer automatiquement les modifications de registre nécessaires en utilisant l'un des fichiers .reg pré-générés ci-dessous. Chaque fichier désactive le sandboxing d'AppContainer/Network Service pour un navigateur spécifique basé sur Chromium :

- [Télécharger Chrome.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Télécharger Chromium.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Télécharger Edge.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Télécharger Brave.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Télécharger Vivaldi.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [Télécharger YandexBrowser.reg](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

Si votre navigateur n'est pas répertorié, suivez les instructions manuelles ci-dessous pour créer les entrées de registre nécessaires :

1. Déterminez sa branche politique en vérifiant la documentation officielle du vendeur ou en ouvrant la page de politique interne. Dans Chrome, accédez à `chrome://policy`. Les autres navigateurs utilisent un chemin similaire.

2. Identifiez la branche de registre appropriée pour votre navigateur. Les différents navigateurs basés sur Chromium utilisent des chemins de stratégie différents sous `HKLM`. Il devrait suivre le modèle `HKLM\SOFTWARE\Policies\<Vendor>\<Product>`.

3. Ouvrez l'Éditeur du Registre :

   - Appuyez sur _Win + R_
   - Tapez _regedit_ puis appuyez sur _Entrée_
   - Approuvez l'invite UAC en l'exécutant en tant qu'administrateur

4. Sauvegarder la branche des Politiques :

   - Dans le panneau de gauche, accédez à `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`
   - Cliquez avec le bouton droit sur _Politiques_ → _Exporter_
   - Enregistrez le fichier sous le nom _Policies_backup.reg_

   Si quelque chose tourne mal, vous pouvez restaurer la sauvegarde en double-cliquant sur ce fichier.

5. Accédez à la clé de stratégie de votre navigateur :

   - Développez le chemin `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Policies_.
   - Localisez le dossier correspondant à votre navigateur.

Si la clé n'existe pas, vous pouvez la créer manuellement. Exemple pour Chrome :

- Faites un clic droit sur _Stratégies_ → _Nouveau_ → _Clé_ et nommez-la `Google`
- Dans `Google`, créez une autre clé nommée `Chrome`

Répétez la même logique pour Chromium, Edge, Brave, Vivaldi, Yandex Browser, etc. Vous devriez obtenir une clé qui ressemble à `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>`.

1. Ajoutez les valeurs obligatoires du registre :

   - Dans la clé correcte, cliquez sur le panneau de droite → _Nouveau_ → _Valeur DWORD (32 bits)_

   - Nommez-le `RendererAppContainerEnabled`

   - Double-cliquez dessus et définissez :

     - **Valeur :** 0
     - **Base :** Hexadécimal ou Décimal (l'un ou l'autre convient)

   - Répétez le processus et créez une deuxième valeur DWORD `NetworkServiceSandboxEnabled`.

   - Définissez sa valeur à 0.

   Les deux paramètres doivent être de type `REG_DWORD` et avoir la valeur **0**.

2. Fermez le navigateur et appliquez les paramètres. Pour garantir que la politique est chargée :

   - Fermer complètement le navigateur
   - Vérifiez le Gestionnaire des tâches et assurez-vous qu'aucun processus tel que _chrome.exe_, _msedge.exe_, _brave.exe_ ne reste en cours d'exécution
   - Rouvrez le navigateur

3. Vérifiez que les politiques ont été appliquées en ouvrant le visualiseur de politiques pour votre navigateur.

Vous devriez voir les politiques actives suivantes :

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

Si disponible, cliquez sur _Recharger les politiques_.

C'est fait !

## Solution permanente

Nous prévoyons d'ajouter la prise en charge du pilote SockFilter dans les prochaines versions. Cela résoudra le problème en éliminant les conflits dans la pile WFP. [Plus d'informations](https://github.com/AdguardTeam/AdguardForWindows/issues/5780).
