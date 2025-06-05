---
title: Erreurs d’installation courantes
sidebar_position: 6
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Cet article contient quelques-unes des erreurs les plus courantes que vous pouvez rencontrer lors de l'installation d'AdGuard pour Windows, et les moyens possibles de les résoudre.

### Erreur 5 : Accès refusé {#error-5}

Ce message d'erreur apparaît lorsque les autorisations requises n'ont pas été accordées. Il peut y avoir plusieurs raisons différentes pour lesquelles le programme d'installation d'AdGuard ne dispose pas des autorisations nécessaires pour terminer correctement le processus d'installation. Vous pouvez essayer les étapes suivantes :

- Désactivez temporairement votre antivirus. Certains d'entre eux peuvent interférer avec l'installation, en fonction de la rigidité de leurs paramètres.

- Choisissez un autre dossier d'installation. C'est possible que le dossier d'installation actuel ait certaines restrictions d'accès. Assurez-vous également de ne pas sélectionner un disque externe, un disque virtuel, etc.

- Redémarrez votre PC. Parfois, les problèmes d'autorisation sont temporaires et peuvent être résolus en redémarrant l'ordinateur.

### Erreur 112 : Le disque est plein, Erreur 1632 : Dossier temporaire plein ou inaccessible {#error-112}

Ce sont deux erreurs différentes avec des solutions très similaires. Comme les titres l'indiquent, l'installateur AdGuard n'a pas trouvé suffisamment d'espace disque pour compléter l'installation. Il y a plusieurs choses que vous pouvez essayer de faire pour résoudre le problème :

- Désinstaller certains programmes ou supprimer des fichiers inutiles du disque où vous essayiez d'installer AdGuard.

- Téléchargez, installez et exécutez [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), un logiciel gratuit de Malwarebytes. Il nettoiera, entre autres, votre système de toutes sortes de fichiers "résiduels" supplémentaires qui subsistent après la désinstallation incorrecte de programmes et autres. Cela aidera à libérer de l'espace disque.

- Redémarrez votre PC. Parfois, les fichiers temporaires peuvent occuper une quantité considérable d'espace disque, et redémarrer votre PC est le moyen le plus fiable de s'en débarrasser.

### Erreur 1601 : Le programme d’installation Windows n’est pas accessible {#error-1601}

Vous pourriez dire que c'est une sous-catégorie particulière de l'erreur 1603. Les solutions possibles sont similaires :

- Démarrez et réenregistrez le service Microsoft Installer. Ceci nécessite du travail.

    - Appuyez sur *Win + R* et saisissez **services.msc**.
    - Trouvez dans la liste et double-cliquez sur *Windows Installer*.
    - Appuyez sur le bouton *Démarrer* sous *État du service* et appuyez sur *OK*. Si l'état du service est **en cours d'exécution**, vous devez d'abord cliquer sur *Arrêter* puis appuyer sur *Démarrer*.
    - Appuyez sur *Win + R*, tapez ***msiexec /unregister*** et appuyez sur *Entrée*.
    - Appuyez à nouveau sur *Win + R*, tapez ***msiexec /regserver***, et appuyez sur *Entrée*

- Redémarrez le PC et recommencez l'installation depuis le début. Parfois, cela suffit à résoudre le problème.

### Erreur 1602 : Annulé par l'utilisateur {#error-1602}

Si vous avez obtenu ce code d'erreur, il y a de fortes chances que vous ayez interrompu le processus d'installation manuellement d'une manière ou d'une autre. Voici ce que vous pouvez faire :

- Ne fermez pas la fenêtre de l'installateur. Lorsque l'installation est terminée, elle se fermera automatiquement.

- Si une fenêtre de dialogue s'affiche pendant l'installation, cliquez sur "Oui" pour autoriser l'installateur à obtenir les autorisations nécessaires. Un clic sur "Non" annule l'installation.

- Ne lancez pas d'autres processus pendant que le processus d'installation est en cours.

### Erreur 1603 : Erreur fatale lors de l’installation {#error-1603}

L'erreur semble plus effrayante qu'elle ne l'est en réalité. En réalité, il s'agit d'une erreur assez générique qui peut avoir de nombreuses causes différentes, dont certaines sont faciles à corriger. Essayez les solutions suivantes :

- Appuyez sur la touche *Win*, recherchez *Invite de commandes* et exécutez-la. Là, tapez `sfc /scannow` et appuyez sur *Entrée*.

- Choisissez un autre dossier d'installation. C'est possible que le dossier d'installation actuel ait certaines restrictions d'accès. Assurez-vous également de ne pas sélectionner un disque externe, un disque virtuel, etc.

- Désinstallez AdGuard à l'aide de notre [outil de désinstallation](../../installation#advanced) spécial, puis répétez l'installation.

- Démarrez et réenregistrez le service Microsoft Installer. Ceci nécessite du travail.

    - Appuyez sur *Win + R* et saisissez ***services.msc***.
    - Trouvez dans la liste et double-cliquez sur *Windows Installer*.
    - Appuyez sur le bouton *Démarrer* sous *État du service* et appuyez sur *OK*. Si l'état du service est **en cours d'exécution**, vous devez d'abord cliquer sur *Arrêter* puis appuyer sur *Démarrer*.
    - Appuyez sur *Win + R*, tapez ***msiexec /unregister*** et appuyez sur *Entrée*.
    - Appuyez à nouveau sur *Win + R*, tapez ***msiexec /regserver***, et appuyez sur *Entrée*

- Obtenez les autorisations complètes sur le lecteur pour l’installation. Il est possible que l'erreur 1603 se produise parce que vous n'avez pas toutes les autorisations sur l'emplacement du fichier. Ce n’est pas non plus aussi simple que certaines des autres solutions :

    - Ouvrez *File Explorer*, faites un clic droit sur le lecteur contenant l'emplacement d'installation et sélectionnez *Propriétés*.
    - Allez à l'onglet *Sécurité* et cliquez sur *Modifier*.
    - Faites un clic simple sur *SYSTEM* et assurez-vous que la case *Autoriser* de chaque élément des *Autorisations pour SYSTEM* est cochée (si elle est cochable). Faites la même vérification pour les *Administrateurs*.
    - Cliquez sur *OK* pour revenir à la boîte de dialogue des *Propriétés*. Ensuite, cliquez sur *Avancés*.
    - Cliquez sur *Modifier les autorisations*.
    - Sur l'onglet *Autorisations*, double-cliquez sur *Administrateurs*.
    - Sélectionnez *Ce dossier, sous-dossiers et fichiers* pour le champ *S'applique à* et cochez toutes les *autorisations de base* disponibles. Après cela, cliquez sur *OK*.
    - Faites la même opération ci-dessus (depuis le point 7) pour *SYSTEM*.
    - Cliquez sur *OK* jusqu'au bout. Essayez à nouveau d’installer AdGuard.

### Erreur 1618 : Une autre installation est déjà en cours {#error-1618}

Cette erreur se produit lorsque plusieurs instances du programme d’installation d’AdGuard sont lancées en même temps. Que faire si vous obtenez cette erreur :

- Redémarrez votre PC et relancez l'installateur. Lorsque vous redémarrez l'ordinateur, tous les processus en cours s'arrêteront, y compris toutes les copies de l'installateur.

- Ne cliquez pas plusieurs fois sur l'installateur même s'il ne démarre pas tout de suite. Parfois, l'affichage de l'interface utilisateur du programme d'installation peut prendre quelques secondes.

### Erreur 1638 : Une autre version de ce produit est déjà installée {#error-1638}

Il est très probable que vous ayez déjà installé AdGuard auparavant.

- Vérifiez si AdGuard est déjà installé sur votre ordinateur. Vous pouvez le faire en appuyant sur la touche *Win* et en tapant ***AdGuard***.

- Il se peut qu'il y ait des fichiers restants d'une installation précédente d'AdGuard. Désinstallez AdGuard à l'aide de notre [outil de désinstallation](../../installation#advanced) spécial, puis répétez l'installation.

### Autres erreurs {#other}

Si vous avez rencontré une erreur qui n'est pas répertoriée ci-dessus, il est possible que nous puissions la résoudre nous-mêmes. Mais pour cela, nous avons besoin de vos fichiers journaux. Veuillez effectuer les étapes suivantes :

- Trouvez et archivez les **journaux d'installation AdGuard** comme décrit dans [cet article](../installation-logs).

- Recherchez et enregistrez sur le disque les journaux d'**Event Viewer** . [Cet article](../system-logs) explique comment le faire.

- Veuillez envoyer par courriel tous ces fichiers des deux étapes précédentes à l'Équipe d'assistance à **support@adguard.com** et décrire le problème dans le corps du message. Nos agents d'assistance technique vous répondront dès que possible.
