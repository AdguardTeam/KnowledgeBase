---
title: Yöneticiler için belgeler
sidebar_position: 5
---

Bu sayfada AdGuard'ın politika ve tercihlere ilişkin merkezi yönetiminin özellikleri ve ayrıntıları açıklanmaktadır.

## 1. MSI'ı indirin {#msi-download}

[AdGuard MSI'yı](https://static.adtidy.org/windows/setup.msi) indirin.

## 2. Ağınız için ayarları yapılandırın {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. If this policy is set, AdGuard will prefer it over what user can enter in the interface. This license key will be used for checking license status.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Make sure that both servers are available.

## 4. Push the MSI out to your network {#msi-push}

If you usually use SMS or other tools, use them to push out the AdGuard MSI just as you would normally do with any other installation bundle.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command: `Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::not

You must run these commands with admin privileges.

:::

AdGuard'ı Windows 7 yüklü bir bilgisayara kurmak istiyorsanız, .NET 4 İstemci Profilinin kurulu olduğundan emin olun: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::bilgi

MSI'dan Windows için AdGuard'ı yüklediğinizde otomatik güncellemeler devre dışı bırakılır. If you want to allow updates for a user (which is not recommended because centralized updates will become impossible), set the value of the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key to `YES` (case insensitive). In this case automatic updates will be allowed, any other value or no value for this parameter disables automatic updates.

:::not

## 5. Test your installation {#installation-test}

Hedef makinede AdGuard'ı başlatın. Ayarladığınız lisansı kullanıp kullanmadığını kontrol etmek için lisans ekranını açın. AdGuard'ın lisans anahtarını doğrulamasını sağlamak için "Durumu yenile" öğesine tıklamanız gerekebilir.
