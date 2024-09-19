---
title: Yöneticiler için belgeler
sidebar_position: 5
---

Bu sayfada AdGuard'ın politika ve tercihlere ilişkin merkezi yönetiminin özellikleri ve ayrıntıları açıklanmaktadır.

## 1. MSI'ı indirin {#msi-download}

[AdGuard MSI x86'yı](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi) indirin

[AdGuard MSI x64'ü](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi) indirin

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

Bu komutları yönetici ayrıcalıklarıyla çalıştırmalısınız.

:::

AdGuard'ı Windows 7 yüklü bir bilgisayara kurmak istiyorsanız, .NET 4 İstemci Profilinin kurulu olduğundan emin olun: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::not

Windows için AdGuard'ı bir MSI dosyasından kurduysanız, AdGuard otomatik olarak güncellenmeyecektir. Elle güncellemelere izin vermek için:

- v7.16'dan sonra yayınlanan sürümlerde, `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` altındaki kayıt defterinde `ForbidCheckUpdates` parametresini silin veya değerini `NO` (büyük/küçük harfe duyarlı değil) olarak ayarlayın.

- v7.16 ve önceki sürümlerde, x86 işletim sisteminde `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` anahtarı veya `x64 işletim sisteminde HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` anahtarı için `AllowCheckUpdates` parametresini `YES` (büyük/küçük harf duyarsız) olarak ayarlayın. Bu parametre için başka herhangi bir değer veya hiçbir değer olmaması otomatik güncellemeleri devre dışı bırakır.

Uygulamanın bu şekilde kurulmasının ve elle güncellemelerin tavsiye edilmediğini ve teknik sorunlara neden olabileceğini lütfen unutmayın.

:::

## 5. Test your installation {#installation-test}

Hedef makinede AdGuard'ı başlatın. Open the license screen to check that it is using the specified license. AdGuard'ın lisans anahtarını doğrulamasını sağlamak için "Durumu yenile" öğesine tıklamanız gerekebilir.
