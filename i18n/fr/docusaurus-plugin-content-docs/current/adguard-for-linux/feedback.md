---
title: Envoi de commentaires
sidebar_position: 4
---

## Signalisation de problèmes ou suggestion d'une fonctionnalité

Si vous avez trouvé un bug dans AdGuard pour Linux ou si vous souhaitez suggérer une nouvelle fonctionnalité, voici comment faire :

- Remplissez le [formulaire de commentaires](https://surveys.adguard.com/en/adguard_linux/form.html).
- Créez un [problème GitHub](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose). Mais avant de le faire, vérifiez le [dépôt](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue) pour des problèmes similaires.

:::note

Si vous souhaitez soutenir la mise en œuvre d'une nouvelle fonctionnalité ou d'une correction de bug, vous pouvez voter pour cela sur GitHub. Pour voter, réagissez simplement avec quelques emoji.

:::

## Comment collecter et envoyer les journaux

1. Activer la journalisation du débogage :

   `adguard-cli config set log_level debug`

2. Reproduisez le problème et essayez de vous souvenir du moment exact où il s’est produit.

3. Attendez un moment, puis exportez les journaux :

   `adguard-cli export-logs`

   Le fichier de journal archive sera téléchargé dans le dossier de l'application par défaut, et le chemin vers les journaux sera écrit dans la console.

4. Envoyez le fichier de journalisation à <devteam@adguard.com>. Indiquez la date de l'erreur et joignez un lien vers votre problème GitHub ou son numéro (il apparaît sous la forme #numéro à côté du titre). Vous pouvez également télécharger le fichier journal sur Google Drive et le partager avec <devteam@adguard.com>. Ajoutez le lien du fichier à votre problème GitHub.

5. Remettez le mode de journalisation sur `info`:

   `adguard-cli config set log_level info`
