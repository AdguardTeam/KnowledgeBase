const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ADGUARD_WEBSITE_URL = 'https://adguard.com';

// Allow to parameterise the website URL and the base path during the build.
// By default, the website is published to Cloudflare Pages.
const url = process.env.URL || 'https://kb-adg.pages.dev';
const baseUrl = process.env.BASE_URL || '/';

const typesenseCollectionName = process.env.SEARCH_COLLECTION || 'docusaurus-2';
const typesenseHost = process.env.SEARCH_HOST || 'xxx-1.a1.typesense.net';
const typesenseApiKey = process.env.SEARCH_API_KEY || 'test';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdGuard Knowledge Base',
  tagline: 'Knowledge Base for AdGuard products',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'AdGuard',
  projectName: 'AdGuardKB',
  themes: ['docusaurus-theme-search-typesense'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de', 'cs', 'fr', 'es', 'it', 'pt-BR', 'ja', 'ko', 'zh-CN', 'zh-TW'],
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
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
          dropdownItemsAfter: [
            {
              to: '/miscellaneous/contribute/translate/program',
              label: 'Help Us Translate',
            },
          ],
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
              label: 'blog',
              href: ADGUARD_WEBSITE_URL + '/blog/index.html',
            },
            {
              label: 'discuss',
              href: ADGUARD_WEBSITE_URL + '/discuss.html',
            },
            {
              label: 'support_adguard',
              href: ADGUARD_WEBSITE_URL + '/support-adguard.html',
            },
          ],
        },
        {
          title: 'products',
          items: [
            {
              label: 'for_windows',
              href: ADGUARD_WEBSITE_URL + '/adguard-windows/overview.html',
            },
            {
              label: 'for_mac',
              href: ADGUARD_WEBSITE_URL + '/adguard-mac/overview.html',
            },
            {
              label: 'for_android',
              href: ADGUARD_WEBSITE_URL + '/adguard-android/overview.html',
            },
            {
              label: 'for_android_tv',
              href: ADGUARD_WEBSITE_URL + '/adguard-android-tv/overview.html',
            },
            {
              label: 'for_ios',
              href: ADGUARD_WEBSITE_URL + '/adguard-ios/overview.html',
            },
            {
              label: 'for_browsers',
              href: ADGUARD_WEBSITE_URL + '/adguard-browser-extension/overview.html',
            },
            {
              label: 'version_history',
              href: ADGUARD_WEBSITE_URL + '/versions.html',
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
              to: '/general/ad-filtering/create-own-filters',
            },
            {
              label: 'adguard_ad_filters',
              to: '/general/ad-filtering/adguard-filters',
            },
            {
              label: 'removal_instructions',
              href: ADGUARD_WEBSITE_URL + '/removal.html',
            },
            {
              label: 'userscripts',
              to: '/general/extensions',
            },
            {
              label: 'faq',
              href: ADGUARD_WEBSITE_URL + '/support/faq.html',
            },
            {
              label: 'status',
              href: 'https://status.adguard.com/',
            },
            {
              label: 'diagnostics',
              href: ADGUARD_WEBSITE_URL + '/test.html',
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
              to: '/general/license/what-is',
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
              label: 'distribution',
              href: ADGUARD_WEBSITE_URL + '/partners.html',
            },
          ],
        },
      ],
      copyright: `© 2009–${new Date().getFullYear()} Adguard Software Ltd.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    typesense: {
      typesenseCollectionName: typesenseCollectionName,
      typesenseServerConfig: {
        nodes: [
          {
            host: typesenseHost,
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: typesenseApiKey,
      },
      contextualSearch: true,
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
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};
