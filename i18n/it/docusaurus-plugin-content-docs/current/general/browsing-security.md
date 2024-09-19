---
title: Protezione da phishing e malware
sidebar_position: 3
---

Cadere vittima di phishing e malware rimane un problema comune. Per migliorare la sicurezza digitale, abbiamo incorporato filtri speciali nei prodotti AdGuard per proteggerti da siti web dannosi e quelli di phishing. Ad oggi, abbiamo classificato oltre 15 milioni di siti e creato un database di 1,5 milioni di siti Web noti per phishing e malware. Utilizzando questo database, AdGuard controlla i siti web visitati per proteggerti dalle minacce online.

:::note

Non raccogliamo né utilizziamo alcuna informazione sui siti web visitati.

:::

## How does AdGuard check websites?

Ogni volta che visiti un sito web, il tuo client locale scambia informazioni con il nostro server di backend, nella forma di hash e prefissi di hash. A seconda di questo scambio, il client locale determina se il sito web è elencato nel database dei siti web potenzialmente pericolosi, oppure no. Esiste una differenza nell'ambito di questo controllo per app ed estensioni.

### Nelle app

AdGuard fornisce la migliore protezione possibile ispezionando sia le pagine che tutti gli oggetti caricati su di esse. AdGuard controlla URL e nomi di dominio utilizzando prefissi hash, non gli URL completi, quindi i nostri server non conservano informazioni sui siti web che visiti e le tue informazioni personali sono completamente sicure. I nostri server rispondono alla richiesta dell'applicazione con un elenco di tutti i possibili indirizzi che corrispondono al prefisso hash. Quando viene rilevata una potenziale minaccia in base alle corrispondenze hash, l'accesso a quel sito web viene immediatamente bloccato.

![Avviso DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_diana.png)

### Nelle estensioni di browser

Le nostre estensioni di browser possono controllare solo i nomi di dominio, non gli URL completi. Inoltre, non sono in grado di controllare le sottorichieste. Ciò significa che se nella pagina sono presenti elementi potenzialmente dannosi, questi verranno caricati anche se la pagina stessa proviene da un dominio sicuro. L'estensione non sarà in grado di proteggersi da essi. È inoltre importante notare che il controllo effettuato è asincrono, ovvero avviene contemporaneamente al caricamento della pagina, quindi è possibile che venga caricato anche del malware.

## Configurazione della protezione da phishing e malware nei prodotti AdGuard

- **Per Windows**: Attivare il modulo *Sicurezza di navigazione nel* menu *Impostazioni*

![Sicurezza di navigazione in Windows](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Per Mac**: attiva il modulo *Sicurezza* in *Preferenze*

![Sicurezza in Mac](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Per Android**: attiva *Sicurezza navigazione* nella scheda *Protezione*

![Sicurezza della navigazione in Android *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **Per iOS**: Anche se non esiste un modulo separato, è possibile andare in *Protezione di Safari* → *Filtri* → *Sicurezza* e attivare i filtri disponibili. Inoltre, abilita *Protezione DNS* e seleziona uno dei server DNS AdGuard

![Sicurezza in iOS *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **Per le estensioni di browser**: attiva la *Protezione da phishing e malware* nella scheda *Impostazioni*. Per una maggiore protezione, vai su *Filtri* → *Sicurezza* e attiva i filtri disponibili

![Protezione da phishing e malware](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **Per DNS AdGuard privato:** Abilita la protezione da malware in *Impostazioni del server* in *Sicurezza*

![Sicurezza in DNS](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## Cosa blocchiamo

Manteniamo due filtri principali: uno che protegge dal phishing e dai siti web fraudolenti che tentano di rubare le credenziali dell'utente e un altro che blocca l'accesso ai siti web noti per distribuire malware, che potrebbe causare perdita di dati, fuga d'informazioni o danni al dispositivo. Questi filtri ti proteggono anche dai siti web con varie truffe e schemi fraudolenti. Per informazioni più dettagliate, consultare questo [articolo di Wikipedia](https://en.wikipedia.org/wiki/Phishing).

## Manutenzione dei nostri filtri

AdGuard mantiene un ampio database di siti web di phishing e malware e viene aggiornato regolarmente e automaticamente man mano che vengono scoperte nuove minacce. Raccogliamo informazioni da una varietà di fonti affidabili e di alta qualità, sia pubbliche che di altre società, e le aggreghiamo in un database comune di siti pericolosi.

Analizziamo automaticamente i reclami relativi ai siti sospetti e dedichiamo molto tempo a mantenere aggiornato il database, eliminando i falsi positivi e implementando meccanismi per prevenirli in futuro.

### Want to help?

Ogni aiuto è ben accetto! Se incontri un sito web di phishing o malware, segnalalo a <support@adguard.com>.

### False-positive responses

Occasionalmente, alcuni siti web non dannosi vengono aggiunti ai filtri di AdGuard. Facciamo del nostro meglio per ridurre la percentuale di falsi positivi, ma si verificano comunque. Se riscontri questo comportamento da AdGuard, segnala il falso positivo al nostro supporto tecnico all'indirizzo <support@adguard.com>.

## Se hai dubbi su un sito web

Se sospetti che un certo sito web possa essere pericoloso, controllalo prima utilizzando il nostro [strumento di controllo della sicurezza](https://reports.adguard.com/welcome.html).

![Controllo della sicurezza](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
