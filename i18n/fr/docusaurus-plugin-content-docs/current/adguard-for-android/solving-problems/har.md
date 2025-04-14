---
title: Comment générer des fichiers HAR
sidebar_position: 5
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Les fichiers HAR sont traités conformément à la [Politique de confidentialité d'AdGuard](https://adguard.com/en/privacy.html).

:::

## Qu'est-ce qu'un fichier HAR ?

Le format HAR (HTTP ARchive) est un fichier d'archive au format JSON pour la journalisation de l'interaction d'un navigateur web avec un site. Les spécifications du format HAR définissent les données d'archives pour les transactions HTTP qu'un navigateur utilise pour exporter des informations détaillées sur les pages Web qu'il charge. Vous pouvez trouver une description plus détaillée du format de fichier HAR et de sa spécification sur le site Web [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/).

## Comment générer des fichiers HAR

Parfois, nous devons l'analyser pour bloquer des publicités spécifiques qui sont difficiles à reproduire pour une raison quelconque. Pour obtenir des fichiers HAR, procédez comme suit :

1. Ouvrez AdGuard et accédez à **Paramètres** (icône ⚙ dans le coin inférieur droit).
2. Appuyez sur **Général** →**Avancé** → **Paramètres de bas niveau**.
3. Faites défiler vers le bas et activez **Capture HAR** dans la section Filtrage.
4. Ouvrez l'app et effectuez les actions nécessaires pour reproduire le problème.
5. Désactivez **Capture HAR** .
6. Retournez à **Avancé**.
7. Tapez **Exporter les journaux et informations système** → **Autoriser** (si nécessaire) → **Enregistrer**.

**Envoyez le fichier généré avec les journaux au service d'assistance AdGuard.**

:::note

Notre équipe d'assistance traitera votre ticket beaucoup plus rapidement si vous spécifiez le numéro de ticket HelpDesk ou le numéro de problème GitHub dans votre message au support.

:::

## Comment analyser des fichiers HAR

Voici quelques sources que nous pouvons recommander pour analyser les fichiers HAR :

- [HTTP Archive Viewer master](https://gitgrimbo.github.io/harviewer/master/) est un outil d'analyse HAR, qui visualise les fichiers journaux du HTTP Archive (HAR) créés par les outils de suivi HTTP.
- [Fiddler](https://www.telerik.com/fiddler) est un proxy de débogage web, vous permettant de capturer, d'inspecter, de surveiller tout le trafic HTTP(S) entre votre ordinateur et Internet, de simuler des requêtes et de diagnostiquer des problèmes de réseau.
