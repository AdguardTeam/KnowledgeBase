---
title: How to restore AdGuard's functioning after root certificate failure
sidebar_position: 14
---

Some AdGuard for Windows 7 users may notice that the app cannot launch after verification of the root certificate by AAA Certificate Services fails with error code 0x800B0109.

This error is not due to AdGuard's shortcomings, but a result of an ongoing transition to newer types of security certificates.

## Why this happens

AAA Certificate Services, a legacy root certificate authority operated by Sectigo, uses an older SHA-1 signature algorithm, which is scheduled to expire in January 2028. Despite being nominally still in use, it is already being removed from major platform trust stores.

On October 26, 2026, Microsoft removed the AAA Certificate Services root certificate from its trust list in an out-of-band update. This move, in turn, disrupted the correct functioning of AdGuard on Windows 7, as the signature chain for AdGuard 7.x files is validated solely through this certificate.

## How to restore AdGuard's functionality on Windows 7

Follow these steps:

1. Download the certificate

Download the file from the [official Sectigo website](http://crt.sectigo.com/SectigoPublicCodeSigningRootR46.crt)

2. Start the installation

Double-click the downloaded file and click *Install Certificate*.

3. Choose the certificate store

:::note

⚠️ Important: the certificate must go into *Trusted Root Certification Authorities*, not into *Trusted Publishers*. In any other store it will not help.

:::

Select *Local Machine* → *Next*. If a User Account Control (UAC) prompt appears, allow the installation.
Select *Place all certificates in the following store* and click *Browse*.
Choose *Trusted Root Certification Authorities* → *OK*.
Click *Next* → *Finish*.

4. Restart your computer

After the restart, AdGuard should launch normally.

Windows will warn that it cannot verify the publisher of the certificate. This is expected for a root certificate — you can carry on with the installation.

## How to check that the certificate is installed

Click *Start*, type *certlm.msc* in the search field and press *Enter*.
Open *Trusted Root Certification Authorities* → *Certificates*.
The list should contain *Sectigo Public Code Signing Root R46*.

## If AdGuard still doesn't start

Reinstalling the app or rolling back Windows updates won't solve the problem: a rollback only helps until the next update. If AdGuard still doesn't start after installing the certificate and restarting, email us at *support@adguard.com* and attach the logs:

*AdGuard* → *Settings* → *General* → *Export logs*.

## For administrators

You can install the same certificate from an administrator command prompt:

`certutil -addstore -f Root "SectigoPublicCodeSigningRootR46.crt"`

To deploy it across multiple computers, use Group Policy:
*Computer Configuration* → *Policies* → *Windows Settings* → *Security Settings* → *Public Key Policies* → *Trusted Root Certification Authorities*.

## How to remove the certificate

If you no longer need the certificate, do the following:

Open *certlm.msc* → *Trusted Root Certification Authorities* → *Certificates* → right-click *Sectigo Public Code Signing Root R46* → *Delete*.
