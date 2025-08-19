/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require('dotenv').config();

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://hubsfoundation.org/',
    pinned: true,
  },
]

const siteConfig = {
  title: 'Hubs', // Title for your website.
  tagline: 'Hold tight as we get our docs in a row 🦆🦆🦆',
  url: 'https://docs.hubsfoundation.org/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'hubs-docs',
  organizationName: 'Hubs-Foundation',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { href: 'https://hubsfoundation.org/', label: 'Hubs Foundation' },
    { doc: 'welcome', label: 'Docs' },
    { href: 'https://github.com/Hubs-Foundation/hubs', label: 'GitHub' },
    { page: 'help', label: 'Help' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#15171b',
    secondaryColor: '#ff3464',
  },

  // algolia: {
  //   apiKey: process.env.ALGOLIA_API_KEY,
  //   indexName: 'hubsfoundation_docs',
  //   algoliaOptions: {}, // Optional, if provided by Algolia
  // },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © 2024–2025 Hubs Foundation. Hubs Documentation available under the Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) license.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: false,

  // remove 'docs' folder from the URL
  docsUrl: '',

  editUrl: 'https://github.com/Hubs-Foundation/hubs-docs/edit/master/docs/',

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'UA-77033033-12',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
}

module.exports = siteConfig
