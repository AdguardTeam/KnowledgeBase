---
title: How to collect BSOD minidump
sidebar_position: 9
---

:::info

This article covers AdGuard for Windows, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

:::note

Data and files provided in minidump files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Blue Screen of Death (BSOD) errors may occasionally occur while using AdGuard. When this happens, our support team may request a minidump file to help diagnose the issue. These files contain technical crash data that helps us identify and resolve the problem.

## Checking for the existing minidump

To collect minidump files, you’ll need administrator access on your computer. By default, Windows tores these files in the `C:\Windows\Minidump\` folder. The files you’re looking for will be named either `MEMORY.DMP` or follow the pattern `Mini(ddmmmyy-xxx).dmp` where the letters and numbers represent dates and sequence numbers.

![Minidump file *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/minidump.png)

If you can't find these files, your system may not be configured to create minidumps automatically.

## Configure minidump settings

If minidumps are not created automatically, follow these steps to enable Small memory dump:

1. Press the *Windows key + R* to open the *Run* dialog

1. Type `sysdm.cpl` and click *Enter*. This will open the *System properties* window

    ![Open system properties *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/sysdm.png)

1. Navigate to *Advanced* tab → *Startup and Recovery* → *Settings*

    ![Advanced tab *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/advanced_tab.png)

1. Here you’ll find an option called *Write debugging information*. Make sure it’s set to *Small memory dump (256 KB)* and verify the path shows `%SystemRoot%\Minidump`. These settings ensure Windows will create the minidump files we need when a BSOD occurs

    ![Small memory dump *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/systemroot.png)

1. Click *OK* to save changes

## After a crash occurs

After experiencing a BSOD and restarting your computer, you can find the generated minidump files in the `C:\Windows\Minidump\` folder. It’s helpful to sort the files by date modified so you can easily find the most recent one corresponding to your crash.

If you configured minidump settings after the crash occurred, you'll need to reproduce the issue to generate a new minidump file.

## Collecting wfpdiag.cab file

Our support team may request a wfpdiag.cab file, along with a minidump file, to analyze system logs more thoroughly and diagnose issues. To collect the file, please follow these steps:

1. Enable AdGuard protection.

1. Click *Start* and type `cmd` to open Command Prompt

1. Right-click Command Prompt and choose *Run as administrator*

    :::note

    A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.

    :::

1. To start logging, enter the following command: `netsh wfp capture start`

1. Visit any website to route traffic through AdGuard and log the filtering process

1. To stop logging, enter `netsh wfp capture stop`
