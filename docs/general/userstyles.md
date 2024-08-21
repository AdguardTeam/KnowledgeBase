---
title: Userstyles in AdGuard Ad Blocker (Experimental)
sidebar_position: 9
---

Userstyles allow users to customize their online experience. Whether you’re looking to change the appearance of a website or automate repetitive tasks, styles offer a world of possibilities.

AdGuard has the option to upload or create your own userstyles. This is an advanced user experience, so you will need some knowledge of HTML and CSS.

:::info Supported apps

Currently, two AdGuard apps allow to create and manage userstyles: AdGuard for Windows and AdGuard for Mac.

:::

This is an experimental feature, so if you encounter any problems while adding or creating the userstyle, please contact our [support team](support@adguard.com).

## How to set up a userstyle in AdGuard

You can download userstyles from different websites. One of the most popular userstyles websites is [https://userstyles.world/](https://userstyles.world/explore), which we will take as an example for the following instruction on how to set up the userstyle in AdGuard.

 1. Press the link and choose the userstyle you like

 1. Right-click the *Install* button and choose *Copy Link Address*

 1. Open AdGuard settings → *Extensions*

 1. Press the [+] button and paste the userstyle link

If you’re familiar with CSS rules, you can also create the userstyles yourself.

:::note

We don’t support userstyles that include `@var` and `@advanced` in the metadata. AdGuard also doesn’t support `@preprocessor` without the `default` value.

:::

 1. Open AdGuard settings → *Extensions*

 1. Press the [+] button and choose the *Create userstyle* option. A new window will appear on your screen

 1. To create a userstyle, first write the title with metadata, for example

 `/* ==UserStyle==`

 `@name New userstyle`

 `@version 1.0`

 `==/UserStyle== */`

 1. After the metadata, write the CSS part. AdGuard supports website domain names matching (`@-moz-document domain(…), …`)

 `body {`

 `   background: gray;`

 `}`

 Or

 `@-moz-document domain('example.org'),`

 `domain('example.net'),`

 `domain('example.com') body {`

 `   background: gray;`

 `}`

 1. Press *Save and Close*
