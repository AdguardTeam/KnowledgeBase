---
title: Sending feedback
sidebar_position: 4
---

## Report a problem or suggest a feature

If you’ve found a bug in AdGuard for Linux or would like to suggest a new feature, here’s how to do it:

- Fill out the [feedback form](https://surveys.adguard.com/en/adguard_linux/form.html).
- Create a [GitHub issue](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose). But before you do, check the [repository](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue) for similar issues.

:::note

Dacă doriți să sprijiniți implementarea unei noi caracteristici sau a unei reparări de bug, puteți vota pentru aceasta pe GitHub. Pentru a vota, reacționați doar cu un emoji.

:::

## Collect and send logs

1. Enable debug logging:

   `adguard-cli config set log_level debug`

2. Reproduce problema și încearcă să îți amintești momentul exact în care a apărut.

3. Wait a while, then export the logs:

   `adguard-cli export-logs`

   The archived log file will be downloaded to the application folder by default, and the path to the logs will be written to the console.

4. Send the log file to <devteam@adguard.com>. Specify the time of the error and attach a link to your GitHub issue or its number (it appears as #number next to the title). Alternatively, you can upload the log file to Google Drive and share it with <devteam@adguard.com>. Attach the file link to your GitHub issue.

5. Switch the logging mode back to `info`:

   `adguard-cli config set log_level info`
