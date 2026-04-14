import {themes as githubThemes} from 'prism-react-renderer';
const lightCodeTheme = githubThemes.github;
const darkCodeTheme = githubThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hubs',
  tagline: 'Hold tight as we get our docs in a row 🦆🦆🦆',
  url: 'https://docs.hubsfoundation.org/',
  baseUrl: '/',
  markdown: {
    format: 'md',
    mermaid: false,
    preprocessor: ({filePath, fileContent}) => {
      return fileContent;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    hooks: {
      onBrokenMarkdownImages: 'ignore',
      onBrokenMarkdownLinks: 'ignore',
    },
  },
  onBrokenLinks: 'ignore',
  onBrokenAnchors: 'ignore',
  onDuplicateRoutes: 'ignore',
  favicon: 'img/favicon.ico',
  projectName: 'hubs-docs',
  organizationName: 'Hubs-Foundation',

  plugins: [
    function webpackOverride(context, options) {
      return {
        name: 'webpack-override',
        configureWebpack(config, isServer, utils) {
          return {
            module: {
              rules: [
                {
                  test: /\.js$/,
                  type: 'javascript/auto',
                },
                {
                  test: /\.mjs$/,
                  type: 'javascript/esm',
                },
              ],
            },
          };
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
          path: '../docs',
          editUrl: 'https://github.com/Hubs-Foundation/hubs-docs/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Hubs-Foundation/hubs-docs/edit/master/website/blog/',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hubs',
        logo: {
          alt: 'Hubs Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            href: 'https://hubsfoundation.org/',
            label: 'Hubs Foundation',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Hubs-Foundation/hubs',
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
                label: 'Welcome',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Hubs-Foundation/hubs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hubs Foundation. Hubs Documentation available under the Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) license.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
