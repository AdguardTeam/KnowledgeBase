---
title: Zertifikatsinstallation auf Geräten mit Android 11+
sidebar_position: 12
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Um den [HTTPS-Verkehr](/general/https-filtering/what-is-https-filtering.md) filtern zu können (was äußerst wichtig ist, da die meiste Werbung HTTPS verwendet), muss AdGuard sein Zertifikat im Benutzerspeicher Ihres Geräts installieren. Bei älteren Versionen des Android-Betriebssystems geschah dies automatisch, aber bei Android 11 und später muss man es manuell installieren.

![Zertifikat *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif)

Folgen Sie diesen Schritten, um das AdGuard-Zertifikat zu installieren:

1. Wenn Ihnen die Meldung *HTTPS-Filterung ist ausgeschaltet* angezeigt wird, tippen Sie auf *Einschalten*.

1. Daraufhin werden Ihnen drei Bildschirme mit Erklärungen angezeigt:
    - Warum HTTPS-Datenverkehr gefiltert werden sollte
    - Die Sicherheit dieses Filterungsprozesses
    - Die Notwendigkeit des AdGuard-Zertifikats

    Tippen Sie nacheinander auf *Weiter* → *Weiter* → *Zertifikat speichern*.

1. Tippen Sie auf *Speichern* unten im geöffneten Ordner *Download*.

1. Tippen Sie nach dem Speichern auf *Einstellungen öffnen*.

1. Tippen Sie auf *Weitere Sicherheitseinstellungen* → *Verschlüsselung & Anmeldeinformationen* → *Zertifikat installieren* → *CA-Zertifikat*.

1. Möglicherweise wird eine Warnmeldung angezeigt. Wenn dies der Fall ist, tippen Sie auf *Trotzdem installieren* und geben Sie Ihre PIN ein, falls erforderlich.

1. Wählen Sie die AdGuard-Zertifikatsdatei aus. Sein Name sollte in etwa wie *adguard_1342_020322.crt* aussehen.

Fertig! Sobald das Zertifikat erfolgreich installiert ist, wurde die HTTPS-Filterung aktiviert.

Bitte beachten Sie, dass sich die angegebenen Schritte auf das Google Pixel 7 Smartphone beziehen. Wenn Sie ein anderes Android-Gerät verwenden, können die genauen Menünamen oder Optionen abweichen. Zur einfacheren Navigation können Sie nach einem Zertifikat suchen, indem Sie in der Suchleiste der Einstellungen „Zertifikat“ oder „Anmeldedaten“ eingeben.

Wenn bei der manuellen Zertifikatsinstallation Probleme auftreten (z. B. wenn Sie das Zertifikat installiert haben, die Anwendung es aber weiterhin ignoriert), können Sie eine der folgenden Lösungen anwenden.

1. Starten Sie AdGuard neu.
2. Versuchen Sie noch einmal, das richtige Zertifikat (AdGuard Personal CA) zu installieren.

If you still encounter a problem and can't install the certificate, please contact our support team at <support@adguard.com>.
