# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

`master` branch is published automatically to https://adguardteam.github.io/KnowledgeBase/.

## How to contribute

You can help by contributing to the Knowledge Base, all details are described [in this article](https://adguard.com/kb/miscellaneous/contribute/updating-knowledge-base/).

## How to develop

### Prepare

First of all, you need to install the following:

- [git](https://github.com/git-guides/install-git)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

Second, clone this repo to your local computer:

- `git clone git@github.com:AdguardTeam/KnowledgeBase.git`

Alternatively, you can use the [Github app](https://desktop.github.com/) to do that.

Then you should open Terminal on your computer, navigate to the directory where you cloned this repo and run this command to install the local dependencies:

- `yarn install`

### Lint markdown

This command lints the markdown and outputs any errors to the console:

- `yarn lint:md`

Some of errors can be fixed automatically:

- `yarn lint:md --fix`

VSCode users can install the [markdownlint extension][vscode-markdownlint] to see the errors in the editor.

### Run it locally

- `yarn start`

This command [lints markdown syntax](#lint-markdown),
and if there is no markdownlint errors starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

## How to build

- `yarn build`

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## How to translate

Localizations are not pushed to the repo and prepared on-the-fly (`i18n` folder is added to `.gitignore`).

Here's how you can debug translations locally.

1. Download translations: `CROWDIN_PERSONAL_TOKEN="YOURTOKEN" yarn run crowdin download`
2. Run Docusaurus with the language of your choice: `yarn run start -- --locale de`

[vscode-markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
