const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ADGUARD_WEBSITE_URL = 'https://adguard.com';

// Allow to parameterise the website URL and the base path during the build.
const url = process.env.URL || 'https://adguardteam.github.io';
const baseUrl = process.env.BASE_URL || '/KnowledgeBase/';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdGuard Knowledge Base',
  tagline: 'Knowledge base for AdGuard products',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'AdGuard',
  projectName: 'AdGuardKB',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      hideOnScroll: true,
      title: '',
      logo: {
        alt: 'AdGuard',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'docs',
        },
        {
          to: ADGUARD_WEBSITE_URL + '/blog/index.html',
          position: 'left',
          label: 'blog',
        },
        {
          to: ADGUARD_WEBSITE_URL,
          position: 'left',
          label: 'official_website',
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
      style: 'light',
      logo: {
        alt: 'AdGuard',
        src: 'img/logo_dark.svg',
        srcDark: 'img/logo_dark.svg',
      },
      links: [
        {
          title: 'adguard',
          items: [
            {
              label: 'official_website',
              href: ADGUARD_WEBSITE_URL,
            },
            {
              label: 'about',
              href: ADGUARD_WEBSITE_URL + '/contacts.html',
            },
            {
              label: 'in_the_press',
              href: ADGUARD_WEBSITE_URL + '/press-releases.html',
            },
            {
              label: 'media_kits',
              href: ADGUARD_WEBSITE_URL + '/media-materials.html',
            },
            {
              label: 'awards',
              href: ADGUARD_WEBSITE_URL + '/awards.html',
            },
          ],
        },
        {
          title: 'products',
          items: [
            {
              label: 'adguard_for_windows',
              href: ADGUARD_WEBSITE_URL + '/adguard-windows/overview.html',
            },
            {
              label: 'adguard_for_android',
              href: ADGUARD_WEBSITE_URL + '/adguard-android/overview.html',
            },
            {
              label: 'adguard_for_mac',
              href: ADGUARD_WEBSITE_URL + '/adguard-mac/overview.html',
            },
            {
              label: 'adguard_for_ios',
              href: ADGUARD_WEBSITE_URL + '/adguard-ios/overview.html',
            },
            {
              label: 'adguard_for_ios_pro',
              href: ADGUARD_WEBSITE_URL + '/adguard-ios-pro/overview.html',
            },
          ],
        },
        {
          title: 'support',
          items: [
            {
              label: 'support_center',
              href: ADGUARD_WEBSITE_URL + '/support.html',
            },
            {
              label: 'how_to_create_your_own_ad_filter',
              to: '/general/how-to-create-your-own-ad-filters',
            },
            {
              label: 'adguard_ad_filters',
              to: '/general/adguard-ad-filters',
            },
            {
              label: 'removal_instructions',
              href: ADGUARD_WEBSITE_URL + '/removal.html',
            },
            {
              label: 'userscripts',
              to: '/general/userscripts',
            },
          ],
        },
        {
          title: 'license',
          items: [
            {
              label: 'purchase_license',
              href: ADGUARD_WEBSITE_URL + '/license.html',
            },
            {
              label: 'recover_license',
              to: '/general/license-key#recovery',
            },
            {
              label: 'terms_of_sale',
              href: ADGUARD_WEBSITE_URL + '/terms-of-sale.html',
            },
            {
              label: 'get_free_license',
              href: ADGUARD_WEBSITE_URL + '/get-adguard-for-free.html',
            },
            {
              label: 'contribute_to_adguard',
              href: ADGUARD_WEBSITE_URL + '/contribute.html',
            },
          ],
        },
      ],
      copyright: `© AdGuard, 2009–${new Date().getFullYear()}`,
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
          routeBasePath: '/',
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
    '@docusaurus/plugin-ideal-image',
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
      }
    ],
  ],
};
