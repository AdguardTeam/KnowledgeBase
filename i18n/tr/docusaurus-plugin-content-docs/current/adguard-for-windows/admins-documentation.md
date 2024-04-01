---
title: Yöneticiler için belgeler
sidebar_position: 5
---

Bu sayfada AdGuard'ın politika ve tercihlere ilişkin merkezi yönetiminin özellikleri ve ayrıntıları açıklanmaktadır.

## 1. MSI'ı indirin {#msi-download}

Download the [AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi) Download the [AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)

## 2. Ağınız için ayarları yapılandırın {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. If this policy is set, AdGuard will prefer it over what user can enter in the interface. Bu lisans anahtarı lisans durumunu kontrol etmek için kullanılacaktır.

## 3. AdGuard sunucularının kullanılabilir olduğundan emin olun {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Her iki sunucunun da kullanılabilir olduğundan emin olun.

## 4. Push the MSI out to your network {#msi-push}

If you usually use SMS or other tools, use them to push out the AdGuard MSI just as you would normally do with any other installation bundle.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command: `Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::not

You must run these commands with admin privileges.

:::

AdGuard'ı Windows 7 yüklü bir bilgisayara kurmak istiyorsanız, .NET 4 İstemci Profilinin kurulu olduğundan emin olun: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::not

If you have installed AdGuard for Windows from an MSI file, AdGuard will not be updated automatically. To allow manual updates:

- in versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- in v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. Any other value or no value for this parameter will disable automatic updates.

Please note that such installation of the application and manual updates are not recommended and can cause technical problems.

:::

## 5. Test your installation {#installation-test}

Hedef makinede AdGuard'ı başlatın. Ayarladığınız lisansı kullanıp kullanmadığını kontrol etmek için lisans ekranını açın. AdGuard'ın lisans anahtarını doğrulamasını sağlamak için "Durumu yenile" öğesine tıklamanız gerekebilir.
