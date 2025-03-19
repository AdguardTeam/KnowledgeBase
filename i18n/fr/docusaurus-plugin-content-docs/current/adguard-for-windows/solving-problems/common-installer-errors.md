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

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter **services.msc**.
    - Find in the list and double-click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type ***msiexec /unregister***, and hit *Enter*.
    - Press *Win + R* again, type ***msiexec /regserver***, and hit *Enter*

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

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter ***services.msc***.
    - Find in the list and double-click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type ***msiexec /unregister***, and hit *Enter*.
    - Press *Win + R* again, type ***msiexec /regserver***, and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    - Open *File Explorer*, right-click the drive containing the installation location and select *Properties*.
    - Go to *Security* tab and click *Edit*.
    - Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    - Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    - Click *Change Permissions*.
    - On *Permissions* tab, double-click *Administrators*.
    - Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*.
    - Do the same operation above (from item 7) for *SYSTEM*.
    - Click *OK* all the way out. Try installing AdGuard again.

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
