---
title: How to restore AdGuard for Windows on Windows 7 after the root certificate update
sidebar_position: 2
---

On Windows 7, AdGuard may not start after the October 2026 Windows update: the app fails to verify the signature of its files and shows error 0x800B0109.

This is not a bug in AdGuard for Windows: the certificate chain that v7.x relies on is no longer trusted by Windows.

## Why this happens

AAA Certificate Services, a legacy root certificate authority operated by Sectigo, uses an older SHA-1 signature algorithm, and is set to expire in January 2028. Despite being nominally still in use, it is already being removed from major platform trust stores.

On October 26, 2026, Microsoft removed the AAA Certificate Services root certificate from its trust list in an out-of-band update. This move, in turn, disrupted the correct functioning of AdGuard on Windows 7. AdGuard's signature chain terminates at Sectigo Public Code Signing Root R46, and reaches Windows 7 only through a cross-certificate issued by AAA, so installing R46 supplies a path that no longer runs through AAA at all.

## How to restore AdGuard's functionality on Windows 7

To install the certificate, you need administrator rights on the computer and AdGuard for Windows v7.x.

### 1. Download the certificate

Download the file from the [official Sectigo website](http://crt.sectigo.com/SectigoPublicCodeSigningRootR46.crt).

### 2. Start the installation

Double-click the downloaded file and click *Install Certificate*.

### 3. Choose the certificate store

:::note

The certificate must go into *Trusted Root Certification Authorities*, not into *Trusted Publishers*. In any other store it will not help.

:::

Windows will warn that it cannot verify the publisher of the certificate. This is expected for a root certificate — you can carry on with the installation.

If a User Account Control (UAC) prompt appears, allow the installation.
Select *Place all certificates in the following store* and click *Browse*.
Choose *Trusted Root Certification Authorities* → *OK*.
Click *Next* → *Finish*.

### 4. Restart your computer

After the restart, AdGuard should launch normally.

## How to check that the certificate is installed

Click *Start*, type *certmgr.msc* in the search field and press *Enter*.
Open *Trusted Root Certification Authorities* → *Certificates*.
The list should contain *Sectigo Public Code Signing Root R46*.

## If AdGuard still doesn't start

Reinstalling the app or rolling back Windows updates won't solve the problem: a rollback only helps until the next update. If AdGuard still doesn't start after installing the certificate and restarting, please contact support at support@adguard.com and attach the logs. You can find them in *C* → *ProgramData* → *AdGuard*. Note that those folders are hidden, you have to make them accessible first.

To do that, open *Start* → *Control Panel* → *Appearance and Personalization* → *Folder Options* → *View tab*
Then, in the *Advanced settings* list, find *Hidden files and folders* → *Show hidden files, folders, and drives* → *OK*

## For administrators

You can install the same certificate from an administrator command prompt:

`certutil -addstore -f Root "SectigoPublicCodeSigningRootR46.crt"`

To deploy it across multiple computers, use Group Policy:
*Computer Configuration* → *Policies* → *Windows Settings* → *Security Settings* → *Public Key Policies* → *Trusted Root Certification Authorities*.

## How to remove the certificate

If you no longer need the certificate, do the following:

Open *certlm.msc* → *Trusted Root Certification Authorities* → *Certificates* → right-click *Sectigo Public Code Signing Root R46* → *Delete*.
