---
title: Comment collecter les journaux AdGuard
sidebar_position: 3
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Pour analyser et diagnostiquer les différents problèmes susceptibles de survenir, le service d'assistance d'AdGuard peut avoir besoin des fichiers journaux d'AdGuard. Ces fichiers contiennent des enregistrements d'erreurs et d'autres événements qui se produisent avec le logiciel. Vous trouverez ci-dessous de brèves instructions décrivant comment obtenir les fichiers journaux et les envoyer à notre service d'assistance si nécessaire.

:::note

AdGuard s'engage à protéger votre vie privée. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Avant d'envoyer vos journaux à l'équipe d'assistance, veuillez consulter le fichier car il peut contenir des informations supplémentaires que vous ne souhaitez pas partager. S'il contient de telles informations personnelles, nous vous recommandons de les supprimer au préalable.

:::

### Debug logs {#debug-logs}

1. Ouvrez les paramètres d'AdGuard. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Reproduisez le problème.

   Nous vous conseillons vivement de noter l'heure exacte à laquelle vous avez reproduit le problème : cela aidera notre équipe d'assistance à trouver les entrées de journal pertinentes et à résoudre le problème plus rapidement.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Enregistrez l'archive dans n'importe quel dossier.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. Ensuite, vous devrez faire ce qui suit :

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Veuillez ne pas laisser le service en cours d'exécution :

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Si vous avez une version plus ancienne d'AdGuard pour Windows, exécutez l'application avec la commande C:\"Program Files (x86)"\Adguard\Adguard.exe /trace si vous utilisez Windows 64 bits, et C:\"Program Files"\Adguard\Adguard.exe /trace si vous utilisez Windows 32 bits.

1. Reproduisez le problème.

   Nous vous conseillons vivement de noter l'heure exacte à laquelle vous avez reproduit le problème : cela aidera notre équipe d'assistance à trouver les entrées de journal pertinentes et à résoudre le problème plus rapidement.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Ne vous inquiétez pas si le fichier de journal est volumineux. Nous avons besoin de connaître autant de détails que possible pour résoudre votre problème.
