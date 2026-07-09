---
title: How to collect BSOD minidump
sidebar_position: 9
---

:::info

Cet article parle de AdGuard pour Windows, un bloqueur de contenus multifonctionnel qui protège votre appareil au niveau du système. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

:::note

Data and files provided in minidump files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Blue Screen of Death (BSOD) errors may occasionally occur while using AdGuard. When this happens, our support team may request a minidump file to help diagnose the issue. These files contain technical crash data that helps us identify and resolve the problem.

## Checking for the existing minidump

To collect minidump files, you’ll need administrator access on your computer. By default, Windows stores these files in the `C:\Windows\Minidump\` folder. The files you’re looking for will be named either `MEMORY.DMP` or follow the pattern `Mini(ddmmmyy-xxx).dmp` where the letters and numbers represent dates and sequence numbers.

![Minidump file](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/minidump.png)

If you can’t find these files, your system may not be configured to create minidumps automatically.

## Configure minidump settings

If minidumps are not created automatically, follow these steps to enable _Small Memory Dump_:

1. Press the _Windows key + R_ to open the _Run_ dialog.

2. Type `sysdm.cpl` and click _Enter_. This will open the _System properties_ window.

   ![Open system properties \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/sysdm.png)

3. Navigate to _Advanced_ tab → _Startup and Recovery_ → _Settings_.

   ![Advanced tab \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/advanced_tab.png)

4. Here you’ll find an option called _Write debugging information_. Make sure it’s set to _Small Memory Dump (256 KB)_ and that the path shows `%SystemRoot%\Minidump`. These settings will ensure that Windows creates the minidump files we need when a BSOD occurs.

   ![Small memory dump \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/systemroot.png)

5. Click _OK_ to save changes.

## After a crash occurs

After experiencing a BSOD and restarting your computer, you can find the generated minidump files in the `C:\Windows\Minidump\` folder. Sorting the files by date modified makes it easy to find the most recent one corresponding to your crash.

If you configured minidump settings after the crash occurred, you'll need to reproduce the issue to generate a new minidump file.

## Collecting `wfpdiag.cab` file

Our support team may request a wfpdiag.cab file, along with a minidump file, to analyze system logs more thoroughly and diagnose issues. To collect the file, please follow these steps:

1. Activez la protection AdGuard.

2. Click _Start_ and type `cmd` to open _Command Prompt_.

3. Right-click _Command Prompt_ and choose _Run as administrator_.

   :::note

   A wfpdiag.cab file is created in your current directory. You can change the location by typing `cd <folder_name>`.

   :::

4. To start logging, enter the following command: `netsh wfp capture start`.

5. Visit any website to route traffic through AdGuard and log the filtering process.

6. To stop logging, enter `netsh wfp capture stop`.
