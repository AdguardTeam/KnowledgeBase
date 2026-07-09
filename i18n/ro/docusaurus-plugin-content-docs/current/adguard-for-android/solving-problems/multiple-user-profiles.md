---
title: Probleme cauzate de mai multe profile de utilizator
sidebar_position: 9
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

In this article you will find the methods on how to solve problems with AdGuard when you set up *multiple accounts* or *Restricted Profiles* on your Android devices.

## Probleme cauzate de mai multe profile de utilizator

Pe Android 9 și versiuni ulterioare, dacă AdGuard este instalat pentru mai mult de un profil de utilizator pe dispozitivul tău, s-ar putea să întâlnești probleme atunci când dezinstalezi aplicația. Când dezinstalezi AdGuard dintr-un profil de utilizator, aplicația va apărea în lista de aplicații, dar nu vei putea să o dezinstalezi sau să o reinstalezi. Aceasta se întâmplă deoarece AdGuard este instalat pentru un profil de utilizator diferit pe dispozitiv.

Dacă încercați să reinstalați AdGuard după o încercare de dezinstalare nereușită, veți vedea mesajul de eroare „Nu puteți instala aplicația pe dispozitivul dvs.”.

Pentru a rezolva această problemă, trebuie să dezinstalezi aplicația pentru toți utilizatorii: mergi la Setări → Toate aplicațiile → AdGuard. Tap the three-dot menu in the top right corner and select *Uninstall for all users*.

![Uninstall *mobile border](https://cdn.adtidy.org/blog/new/tu49hmultiple_users.png)

## Probleme cauzate de utilizarea unui profil în Modul Restricționat

Proprietarii de telefoane, tablete sau televizoare care rulează sistemul de operare Android 7+ s-ar putea confrunta cu problema cauzată de utilizarea **unui profil cu Modul Restricționat**. Dacă aveți un astfel de profil, **AdGuard**, ca și alte aplicații care folosesc VPN, primesc restricții asupra filtrării selective a traficului VPN. Ca urmare, AdGuard nu poate lansa protecția într-un **mod VPN local**. De asemenea, unul dintre motivele pentru această situație ar putea fi utilizarea **profilului Dual App/Dual Messenger** pe dispozitivul dvs. Mai jos sunt descrise recomandările pe care le puteți aplica când apare această problemă.

### Soluții

Aveți trei modalități de a rezolva problema:

### Opțiunea 1: Acordați permisiuni AdGuard folosind ADB

:::note

Această abordare este disponibilă începând cu **AdGuard v3.5 nightly 6**. Dacă folosiți o versiune mai veche, puteți obține cea mai recentă actualizare [aici](https://adguard.com/adguard-android/overview.html).

:::

1. Activați **modul dezvoltator** și activați **debugging USB**:

    - Deschideți aplicația **Setări** a telefonului;
    - Accesați secțiunea **Sistem** (ultimul element din meniul setărilor). În această secțiune, găsiți subelementul **Despre telefon**;
    - Apăsați pe linia **Numărul construcției** de 7 ori. După aceea, veți primi o notificare că **Sunteți acum dezvoltator** (Dacă este necesar, introduceți un cod de deblocare pentru dispozitiv);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    Dacă aveți dificultăți sau întrebări suplimentare, instrucțiuni complete pot fi găsite [aici](https://developer.android.com/studio/debug/dev-options).


:::

1. [Instalare și configurare](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB; Pe platforma Windows, proprietarii de **Samsung** pot fi nevoiți să instaleze [această utilitate](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Conectați dispozitivul dvs. folosind un **cablu USB** la computerul sau laptopul pe care ați instalat **ADB**;

1. Deschideți **linia de comandă** pe PC-ul dvs.:

    - **Cmd.exe** dacă folosiți **Windows**;
    - **Terminal** dacă folosiți **macOS**;

1. Introduceți comanda `adb shell pm grant com.adguard.android android.permission.INTERACT_ACROSS_USERS` și apăsați **Enter**.

### Opțiunea 2: Ștergeți *contul de utilizator restricționat*

Despre cum să gestionați conturile de utilizator de pe un dispozitiv Android, puteți [găsi aici](https://support.google.com/a/answer/6223444?hl=en).

:::note

În unele cazuri, conturile de utilizator restricționate sunt create implicit și nu pot fi eliminate. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Puteți citi mai jos cum să rezolvați problema în aceste cazuri.

:::

### Opțiunea 3: Utilizați AdGuard în *modul proxy HTTP local* (necesită root)

Pentru a activa acest mod, deschideți **Setările AdGuard** → **Rețea** → **Metodă de filtrare** → **Proxy HTTP local**

### Dispozitive LG și Samsung

Proprietarii de telefoane **LG** sau **Samsung** s-ar putea confrunta, de asemenea, cu o problemă similară. Aceasta poate fi cauzată de utilizarea funcției **Dual App/Dual Messenger** (care creează automat un profil restricționat). Pentru a rezolva această problemă, trebuie să dezactivați această funcție.

### Samsung

- Deschideți **Setările**;
- Apăsați **Avansat**;
- Scroll down and press **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- Blocați dispozitivul timp de 5 minute;
- Deblocați ecranul și încercați din nou să creați profilul VPN.

### LG

- Deschideți **Setările**;
- Alegeți tab-ul **General**;
- Scroll down and press **Dual App**;
- Ștergeți toate aplicațiile din listă;
- Reporniți dispozitivul.
