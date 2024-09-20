---
title: Documentation for admins
sidebar_position: 5
---

This page describes the features and details of AdGuard’s central management of policies and preferences.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi)

Download the [AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. If this policy is set, AdGuard will prefer it over what user can enter in the interface. This license key will be used for checking license status.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Make sure that both servers are available.

## 4. Push the MSI out to your network {#msi-push}

If you usually use SMS or other tools, use them to push out the AdGuard MSI just as you would normally do with any other installation bundle.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command: `Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

You must run these commands with admin privileges.

:::

If you want to install AdGuard on a Windows 7 computer, make sure that it has .NET 4 Client Profile installed: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

If you have installed AdGuard for Windows from an MSI file, AdGuard will not be updated automatically. To allow manual updates:

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Any other value or no value for this parameter will disable automatic updates.

Please note that such installation of the application and manual updates are not recommended and can cause technical problems.

:::

## 5. Test your installation {#installation-test}

On a target machine, launch AdGuard. Open the license screen to check that it is using the specified license. You might need to click "Refresh status" to make AdGuard validate the license key.
