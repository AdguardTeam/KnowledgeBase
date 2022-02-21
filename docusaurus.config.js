const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdGuard Knowledge Base',
  tagline: 'Knowledge base for AdGuard products',
  url: 'https://adguardteam.github.io/',
  baseUrl: '/KnowledgeBase/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'AdGuard',
  projectName: 'AdGuardKB',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  themeConfig: {
    navbar: {
      title: 'AdGuard VPN',
      logo: {
        alt: 'AdGuard VPN',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'General',
        },
        {
          to: '/adguard/intro',
          label: 'AdGuard',
          position: 'left',
          activeBaseRegex: `/adguard/`,
        },
        {
          to: '/vpn/intro',
          label: 'VPN',
          position: 'left',
          activeBaseRegex: `/vpn/`,
        },
        {
          to: '/dns/intro',
          label: 'DNS',
          position: 'left',
          activeBaseRegex: `/dns/`,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/AdguardTeam/KnowledgeBase',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Knowledgebase',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'AdGuard Forum',
              href: 'https://forum.adguard.com',
            },
            {
              label: 'AdGuard Reddit',
              href: 'https://www.reddit.com/r/Adguard/',
            },
            {
              label: 'AdGuard VPN 4PDA',
              href: 'https://4pda.to/forum/index.php?showtopic=997877',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://adguard.com/blog/tag/adguard-vpn.html',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'EULA',
              href: 'https://adguard-vpn.com/eula.html',
            },
            {
              label: 'Privacy Policy',
              href: 'https://adguard-vpn.com/privacy.html',
            },
          ],
        },
      ],
      copyright: `Copyright © 2009-${new Date().getFullYear()} AdGuard. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/AdguardTeam/KnowledgeBase/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'adguard',
        path: 'kb/adguard',
        routeBasePath: 'adguard',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vpn',
        path: 'kb/vpn',
        routeBasePath: 'vpn',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dns',
        path: 'kb/dns',
        routeBasePath: 'dns',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    '@docusaurus/plugin-ideal-image',
  ],
};
