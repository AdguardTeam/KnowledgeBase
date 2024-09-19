---
title: Userstyles (Experimental)
sidebar_position: 6
---

Userstyles allow users to customize their online experience. Whether you’re looking to change the appearance of a website or automate repetitive tasks, styles offer a world of possibilities.

AdGuard has the option to upload or create your own userstyles. This is an advanced feature, so you will need some knowledge of HTML and CSS.

:::info Supported apps

Currently, two AdGuard apps allow you to create and manage userstyles: AdGuard for Windows (v7.19 or later) and AdGuard for Mac (v2.16 or later). We also plan to implement this new feature in AdGuard v4.8 for Android  in the nearest future.

:::

This is an experimental feature, so if you encounter any problems while adding or creating a userstyle, please contact our support team at <support@adguard.com>.

## How to set up a userstyle in AdGuard

You can download userstyles from various websites. One of the most popular userstyles websites is [https://userstyles.world/](https://userstyles.world/explore), which we will take as an example for the following instructions on how to set up the userstyle in AdGuard.

1. Follow the link above and choose the userstyle you like

1. Right-click the *Install* button and choose *Copy Link Address*

1. Open AdGuard settings → *Extensions*

1. Press the [+] button and paste the userstyle link

1. Done!

If you’re familiar with CSS rules, you can also create the userstyles yourself.

:::note

We don’t support userstyles that contain `@var` or `@advanced` in the metadata. AdGuard also doesn’t support `@preprocessor` without the `default` value.

:::

1. Open AdGuard settings → *Extensions*

1. Press the [+] button and choose the *Create userstyle* option. A new window will appear on your screen

1. To create a userstyle, first write the title with metadata, for example

    ```CSS
    /* ==UserStyle==
    @name New userstyle
    @version 1.0
    ==/UserStyle== */
    ```

1. Write the CSS part after the meta data. AdGuard supports website domain names matching (`@-moz-document domain(…), …`). For example:

    ```CSS
    body {
      background: gray;
      }
    ```

    Or:

    ```CSS
    @-moz-document domain('example.org'),
    domain('example.net'),
    domain('example.com') body {
      background: gray;
      }
    ```

1. Once you’re finished, press *Save and Close*. Your new userstyle has been successfully added to AdGuard
