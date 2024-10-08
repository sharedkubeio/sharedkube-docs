// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import PrismDark from './src/utils/prismDark.ts';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sharedkube Docs',
  tagline: 'Welcome to Cloud Native Ecosystem!',
  favicon: 'img/favicon-logo.png',

  // Set the production url of your site here
  url: 'https://docs.sharedkube.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sharedkubeio/sharedkube-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: [
            './src/css/custom.css'
          ]
        },
        gtag: {
          trackingID: 'G-Z1LWKKWM7G',
          anonymizeIP: false,
        },
        googleTagManager:{
            containerId: 'GTM-NTSX3CF8'
        }
      }),
    ],
  ],

  plugins: [
      'docusaurus-plugin-image-zoom'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: 'img/logo-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Sharedkube Logo',
          src: 'img/logo_whiteC.png',
        },
        items: [
          {
            label: 'Dashboard',
            position: 'left',
            href: 'https://api.sharedkube.io',
          },
          {
            label: 'Product',
            position: 'left',
            href: 'https://sharedkube.io',
          },
          {
            label: 'Blog',
            position: 'left',
            href: 'https://blog.sharedkube.io',
          },
          {
            href: 'https://github.com/sharedkubeio/sharedkube-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} sharedkube`,
      },
      prism: {
        darkTheme: PrismDark,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
      }
    }),
};

export default config;
