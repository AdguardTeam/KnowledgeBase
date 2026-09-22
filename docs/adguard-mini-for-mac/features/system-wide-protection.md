---
title: System-wide protection
sidebar_position: 9
---
Starting with version 3.0, AdGuard Mini for Mac introduces *System-wide protection*, a feature that blocks ads and trackers not just in Safari, but across other apps on your Mac.

The feature is available for users with an AdGuard license. You can [purchase the license right away](https://adguard.com/en/license.html) or click *Try for free* in *Advanced protection* to start a 14-day free trial.

## How it works

*System-wide protection* is built on Apple’s [**URL filter**](https://developer.apple.com/documentation/networkextension/filtering-traffic-by-url), a new system filtering API introduced in macOS 26. Here’s how it works.

First, macOS checks an URL against a bloom filter — a prefilter stored on your Mac that updates in the background. Most addresses are cleared locally, with no network request for the check itself.

If the prefilter finds a possible match, macOS asks AdGuard’s server for a verdict using Private Information Retrieval (PIR). This method lets your Mac request data from the server without revealing which exact address it asked about. The request can’t be linked to your account or device. If the server doesn’t respond, the page loads normally.

You can read [a detailed analysis of Apple’s approach to system-wide filtering](https://adguard.com/en/blog/apple-url-filter-system-wide-filtering-api.html) in our blog.

## How to turn on System-wide protection

You’ll find *System-wide protection* under *Advanced protection* in the AdGuard Mini app. To enable it, toggle the switch on.

![System-wide protection](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/system-wide-protection.png)

When you first enable *System-wide protection*, you’ll get a request to install the URL filter on your computer. Click *Install*, after which a system message will appear requesting to add filter configurations. This is standard macOS behavior. AdGuard does not see or store any of this data.

![System-wide protection requires a URL filter](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/install-screen.png)

After you download the URL filter, *System-wide protection* will remain on by default. If you want it off, toggle off the *System-wide protection* switch in *Advanced protection*.

You can also disable the URL filter in your Mac’s *System Settings* → *Network* → *VPN & Filters* → *Filters & Proxies*. Change *Enabled* to *Disabled* in the *Status menu*.  AdGuard Mini will then switch off *System-wide protection* automatically.

## Protection levels

There are three levels of protection you can choose from. *Essential* is selected by default.

- *Essential* — blocks ads and trackers
- *Safe* — blocks ads, trackers, and phishing
- *Family* — blocks ads, trackers, phishing, and adult content

![Three levels of protection](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/levels-of-protection.png)

## Troubleshooting

### System-wide protection doesn’t work with every app or browser. Why?

Coverage depends on how each app handles network requests, so some apps may not be filtered. This is a limitation on Apple’s side.

Chromium-based browsers, such as Chrome, Edge, Opera, and Brave, use their own networking code instead of Apple’s frameworks, so the URL filter can’t check their requests.

### System-wide protection won’t turn on. Why?

- **Your Mac runs an older version of macOS.** Apple’s URL filter needs macOS 26 Tahoe or later. On earlier versions, the setting is disabled and the app asks you to *Update to macOS Tahoe 26 or later*.
- **Your account isn’t supported.** *System-wide protection* only works with the first user account created on a Mac. If your account was added later, the setting is disabled and shows *Not supported on this Mac account*. See *Can I change my Mac account’s user ID?* below.
- **You’re on the free version.** To use *System-wide protection*, [purchase an AdGuard license](https://adguard.com/en/license.html) or click *Try for free* in *Advanced protection* to start a 14-day free trial.

### Can I change my Mac account’s user ID?

Yes. *System-wide protection* only works with the first user account created on a Mac with the user ID (UID) of 501. If your Mac has more than one account, or if you migrated your account from an older Mac, your UID might be different. Follow the steps below to check your UID and, if needed, free up 501 and assign it to your account.

:::note

This isn’t a typical macOS operation: freeing up a UID means deleting an account and creating a new one from Terminal. Back up your data before proceeding.

:::

1. **Check your current UID.** Open Terminal, type `id -u`, and press Return. If the result is 501, your account already has the right UID. You don’t need to do anything else.

2. **Find out who has UID 501.** If your UID is not 501, run this command:

    ```bash
    dscacheutil -q user -a uid 501 | grep -E '^(name|uid|gecos):'
    ```

    This shows the username, UID, and full name of that account. Make sure you don’t need any files from it, or back them up before continuing.

3. **Delete the account with UID 501.** While logged in to your own admin account, open *System Settings* → *Users & Groups*, select the account from step 2, and delete it. When macOS asks what to do with its home folder, choose *Save the home folder in a disk image* — this keeps the account’s files in case you need them later.
4. **Create a new account with UID 501.** Run the following command, replacing `username` and `Name Surname` with the details you want:

    ```bash
    sudo sysadminctl -addUser username \
      -fullName "Name Surname" \
      -password - \
      -admin \
      -UID 501
    ```

    `-password -` makes Terminal prompt you for the password interactively; `-admin` gives the new account administrator rights.

5. **Verify the change.** Log in to the new account, then check the UID again: open Terminal, type `id -u`, and press Return. The result should now be 501.
