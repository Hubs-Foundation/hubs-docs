// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mozilla Hubs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  staticDirectories: ["static"],
  // Set the production url of your site here
  url: "https://hubs.mozilla.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Mozilla", // Usually your GitHub org/user name.
  projectName: "Hubs", // Usually your repo name.

  // onBrokenLinks: "throw",
  // onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MozillaReality/hubs-docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MozillaReality/hubs-docs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/hubs-business-45cd024f866b70dd21e23834458cc9ea.jpeg",
      stylesheets: ["/css/custom.css"],
      navbar: {
        title: "",
        logo: {
          alt: "Hubs by Mozilla Logo",
          src: "img/logo-light.svg",
          srcDark: "img/logo-dark.svg",
          href: "https://hubs.mozilla.com/docs",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "documentation",
            position: "left",
            label: "Documentation",
          },
          // { to: "/changelog", label: "Changelog", position: "left" },
          {
            type: "dropdown",
            label: "Learning",
            position: "left",
            items: [
              {
                label: "Community Discord",
                href: "https://discord.gg/6WhYg4HC",
              },
              {
                label: "Creator Labs Blog",
                href: "https://hubs.mozilla.com/labs",
              },
              {
                label: "Hubs YouTube",
                href: "https://www.youtube.com/c/mozillahubs",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Hubs Products",
            position: "left",
            items: [
              {
                label: "Hubs Demo Server",
                href: "https://hubs.mozilla.com/demo",
              },
              {
                label: "Managed Subscription",
                href: "https://hubs.mozilla.com/#subscribe",
              },
              {
                label: "Hubs Cloud Community Edition",
                href: "https://hubs.mozilla.com/labs/welcoming-community-edition/",
              },
            ],
          },
          {
            href: "https://github.com/MozillaReality/hubs-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/introduction/what-is-hubs",
              },
              {
                label: "Hubs Subscription",
                to: "/docs/subscription/choosing-subscription",
              },
              {
                label: "Hubs Fundamentals",
                to: "/docs/fundamentals/getting-started",
              },
              {
                label: "For Creators",
                to: "/docs/category/spoke",
              },
              {
                label: "For Developers",
                to: "/docs/category/development-basics",
              },
              {
                label: "Documentation Archive",
                to: "/docs/archive/discord-bot",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/6WhYg4HC",
              },
              {
                label: "Creator Labs",
                href: "https://hubs.mozilla.com/labs",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/MozillaHubs",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/products/mozilla-corporation-mozilla-hubs",
              },
            ],
          },
          {
            title: "Hubs Services",
            items: [
              {
                label: "Hubs Demo Server",
                href: "https://hubs.mozilla.com/spoke",
              },
              {
                label: "Hubs Managed Subscription",
                href: "https://hubs.mozilla.com/#subscribe",
              },
              {
                label: "Hubs Cloud Community Edition",
                href: "https://hubs.mozilla.com/labs/welcoming-community-edition/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mozilla Corporation. Hubs Documentation available under the Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) license.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
