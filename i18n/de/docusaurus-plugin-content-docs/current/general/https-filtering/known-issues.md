---
title: Bekannte Probleme
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Zuletzt aktualisiert: 17. September 2024

Zum Verständnis dieses Artikels sind einige Grundkenntnisse über Verschlüsselung, TLS und HTTPS erforderlich.

Sehen Sie sich zunächst dieses einfache Diagramm an, das die allgemeine Struktur des HTTPS-Protokolls zeigt:

![Was ist HTTPS-Filterung?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard kopiert die Eigenschaften der TLS-Verbindung, die Ihr Browser verwendet:

- AdGuard verwendet die gleiche TLS-Version
- AdGuard verwendet die gleichen Verschlüsselungsmethoden (Chiffren) wie Ihr Browser

Wenn Sie einen modernen, sicheren Browser verwenden, berücksichtigt dieser alle bekannten TLS-Probleme und versucht nicht, unsichere Verschlüsselungen zu verwenden.

**Was macht AdGuard, wenn Zweifel an der Gültigkeit des Zertifikats bestehen?** In solchen Fällen stellt AdGuard das Filtern aller Verbindungen zu dieser Domain vollständig ein und überlässt dem Browser alle Entscheidungen.

## Bekannte Probleme

Die HTTPS-Filterung in AdGuard hat ihre Nachteile. Fast alle von ihnen sollen in den nächsten AdGuard-Versionen beseitigt werden.

Alle uns bekannten Probleme und die voraussichtlichen Termine für deren Behebung sind unten aufgeführt.

### Einsichtnahme in das Originalzertifikat

Der wichtigste Nachteil des HTTPS-Filtermechanismus ist, dass er das tatsächliche Zertifikat einer Website nicht preisgibt. Sie können das Originalzertifikat nicht einfach überprüfen, da Sie nur das von AdGuard ausgestellte Zertifikat sehen können.

Dieses Problem kann auf zwei Arten gelöst werden:

- Mit unserem [Browser-Assistenten](https://adguard.com/adguard-assistant/overview.html). Diese Browsererweiterung hilft Ihnen, das Filtern direkt vom Browser aus zu verwalten und ermöglicht es Ihnen, das Originalzertifikat einer beliebigen Website einzusehen

  ![Zertifikat Browser-Assistent *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-browser.png)

- Besuchen Sie den Abschnitt *Letzte Aktivitäten* in AdGuard für Android oder den Abschnitt *Protokoll filtern* in AdGuard für Windows und AdGuard für Mac. Während Sie im Browser-Assistenten nur das Zertifikat der Website sehen können, können Sie in der letzten Aktivität das Zertifikat jedes Servers, der in einer Unterabfrage oder einem Browser verwendet wird, mit oder ohne Browser-Assistenten einsehen. Um das Zertifikat mit dieser Methode einzusehen, folgen Sie den nachstehenden Anweisungen.

#### Originalzertifikat in AdGuard für Android prüfen

1. Klicken Sie in der Navigationsleiste auf das Symbol „Statistik“.
2. Gehen Sie zu *Letzte Aktivität*.
3. Klicken Sie auf die Anfrage, deren Zertifikat Sie überprüfen möchten, um die Anfragedetails zu öffnen.
4. Blättern Sie nach unten zu *Originalzertifikat*. Klicken Sie für weitere Informationen.

![Letzte Aktivität in AdGuard für Android *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-android.png)

#### Originalzertifikat in AdGuard für Windows prüfen

1. Öffnen Sie *Einstellungen* → *Werbeblocker* → *Protokoll filtern*.
2. Klicken Sie auf die Anfrage, deren Zertifikat Sie überprüfen möchten, um die Anfragedetails zu öffnen.
3. Klicken Sie unter dem Abschnitt *TLS* auf *Webseitenzertifikat anzeigen*.

![Filterungsprotokoll in AdGuard für Windows *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-win.png)

#### Originalzertifikat in AdGuard für macOS prüfen

1. Klicken Sie auf das Zahnradsymbol. Öffnen Sie im Auswahlmenü die Option *Erweitert* → *Protokoll filtern…*.
2. Klicken Sie auf die Anfrage, deren Zertifikat Sie überprüfen möchten, um die Anfragedetails zu öffnen.
3. Klicken Sie auf *Zertifikat anzeigen*.

![Filterungsprotokoll in AdGuard für macOS *border](https://cdn.adtidy.org/content/kb/ad_blocker/general/cert-mac.png)

### Zertifikat-Transparenz

Dank moderner Kryptografie können Browser in der Regel bösartige Websites erkennen, die mit gefälschten oder falschen SSL-Zertifikaten ausgestattet sind. Die derzeitigen Verschlüsselungsmechanismen sind jedoch nicht so gut in der Lage, bösartige Websites zu erkennen, wenn sie mit falsch ausgestellten Zertifikaten oder Zertifikaten ausgestattet sind, die von einer Zertifizierungsstelle (CA) ausgestellt wurden, die kompromittiert wurde oder abtrünnig geworden ist. Zertifikatstransparenz zielt darauf ab, diese zertifikatsbasierten Bedrohungen zu beseitigen, indem die Ausstellung und Existenz von SSL-Zertifikaten für Domaininhaber, CAs und Domainbenutzer offengelegt wird.

AdGuard-Produkte, die [CoreLibs](https://github.com/AdguardTeam/CoreLibs/) ab Version **1.11** verwenden, implementieren eine Richtlinie, die auf [Chrome Certificate Transparency Policy](https://googlechrome.github.io/CertificateTransparency/ct_policy.html)basiert.

## Haben Sie Bemerkungen oder Vorschläge?

Wenn Sie etwas hinzufügen, einen Fehler melden oder eine Frage stellen möchten, kontaktieren Sie uns bitte unter: `devteam@adguard.com`.
