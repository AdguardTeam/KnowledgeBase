---
title: Pages protégées par le navigateur
sidebar_position: 6
---

:::info

Cet article concerne l'extension de navigateur AdGuard, qui protège uniquement votre navigateur. Pour protéger l'ensemble de votre appareil, [téléchargez l'application AdGuard](https://adguard.com/download.html?auto=true)

:::

Lorsque vous utilisez une extension web telle que l'Extension de navigateur AdGuard, certains domaines restreints interdisent l'accès ou les autorisations. Par conséquent, les extensions de blocage des publicités ne sont pas autorisées à interagir avec ou à modifier le contenu de ces pages. En d'autres termes, ils ne sont pas autorisés à bloquer les publicités et autres éléments gênants sur ces pages web.

## Restrictions du navigateur Chromium

Les navigateurs basés sur Chromium, tels que Google Chrome, maintiennent une liste de domaines restreints auxquels les extensions ne sont pas autorisées à accéder. Ces domaines comprennent :

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- Les URL commençant par `chrome://`, `chrome-extension://`, ou `https://chrome.google.com/webstore/`
- Fichiers PDF
- Pages où Javascript est désactivé
- Pages d'avertissement de sécurité
- Pages d'erreur telles que les erreurs 404 et les erreurs réseau
- Les URL commençant par `view-source:` ou `data:`

## Restrictions du navigateur Firefox

De même, le navigateur Firefox possède son propre ensemble de domaines restreints dans lesquels les extensions ne sont pas autorisées à fonctionner. Ces domaines restreints sont les suivants :

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## La modification des restrictions dans Firefox

La modification des paramètres avancés peut affecter la stabilité et la sécurité de Firefox. Ceci est recommandé uniquement aux utilisateurs avancés. Si vous êtes conscient du risque associé et souhaitez toujours activer les modules complémentaires interdits sur une page protégée, suivez les étapes ci-dessous :

1. Cliquez sur le bouton de menu → **Modules complémentaires et thèmes** → **Extensions**.
2. Cliquez sur l'extension que vous souhaitez activer sur les sites soumis à des restrictions (dans ce cas, AdGuard).
3. Sélectionnez **Autoriser** dans la section **Exécuter sur des sites avec des restrictions**.

Alternativement, vous pouvez :

1. Ouvrez un nouvel onglet et tapez **about:config** dans la barre d'adresse.
2. Appuyez sur **Retour**. Vous pouvez recevoir un avertissement. Dans ce cas-là, cliquez sur **Accepter les risques et continuer**.
3. Recherchez `extensions.webextensions.restrictedDomains`. Si vous ne trouvez pas cette préférence, vous pouvez la créer. Il suffit de sélectionner le type **Booléen** et de cliquer sur **+** pour l'ajouter.
4. Cliquez sur le bouton bascule à côté de cette préférence et modifiez sa valeur en `false`.
5. Redémarrez Firefox.

Pour plus d'informations à ce sujet, lisez [l'article sur le site d'assistance de Mozilla](https://mzl.la/3POXoWi).
