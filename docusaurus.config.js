// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DANK',
  tagline: 'Dover Art \'N\' Knowledge',
  url: 'https://dank.mathiaslauridsen.dk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DANK', // Usually your GitHub org/user name.
  projectName: 'DANK Online Museum', // Usually your repo name.

  i18n: {
    defaultLocale: 'da',
    locales: ['da'],
    localeConfigs: {
      da: {
        htmlLang: 'da-DK',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'DANK',
          src: 'img/dank-black.png',
          srcDark: 'img/dank-white.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Galleri',
          },
          {
            to: 'blog',
            label: 'Nyheder',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Menu',
            items: [
              {
                label: 'Galleri',
                to: '/docs/intro',
              },
              {
                label: 'Nyheder',
                to: 'blog'
              }
            ],
          },
          {
            title: 'Resurser',
            items: [
              {
                label: 'Public Relations',
                to: '/pr'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mathias M. Lauridsen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'rebuilding',
        content: 'Denne side er under ombygning - Be Aware',
        backgroundColor: '#FF7700',
        textColor: '#FFF',
        isCloseable: true,
      }
    }),
};

module.exports = config;
