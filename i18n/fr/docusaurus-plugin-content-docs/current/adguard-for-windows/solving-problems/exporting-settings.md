---
title: Comment revenir à la version précédente après mise à jour vers la v8.0
sidebar_position: 12
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Les changements dans AdGuard pour Windows v8.0 sont importants, et nous espérons que vous apprécierez la nouvelle version. Cependant, il y a de fortes chances que quelque chose ne se passe pas comme prévu. La version 8.0 est très différente ; après tout, c'est la première version nightly. Si vous trouvez l'interface de la v8.0 peu confortable ou si vous avez rencontré trop de problèmes de fonctionnalité/stabilité, vous pouvez restaurer la version précédente avec ses paramètres.

To ensure your settings are preserved during the whole process, it’s recommended to export them before upgrading to v8.0. If needed, you can then reinstall the version 7 and import back your saved settings.

La méthode suivante est également disponible :

1. Après la mise à niveau vers la version 8, ouvrez le dossier `C:\ProgramData\Adguard\Backups` et recherchez un fichier ZIP avec un nom similaire à `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copy this ZIP file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop. This is important because it will be deleted in the next step.
3. Désinstallez la version 8.0 en activant l'option **suppression des paramètres**.
4. Install the previous build. You can find the download link in the _Assets_ section [on GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. Quittez la version 7 de la barre des tâches pour arrêter le filtrage.
6. Extrayez le contenu du fichier ZIP de la première étape et remplacez les fichiers suivants :
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` et `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Lancez AdGuard.

Voilà, c'est tout !
