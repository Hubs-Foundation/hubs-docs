import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', '2d6'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '3a0'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '327'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'bfd'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', '5fe'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', 'e16'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '039'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', '212'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', 'c82'),
    exact: true
  },
  {
    path: '/docs/blog/first-changelog-test',
    component: ComponentCreator('/docs/blog/first-changelog-test', 'f42'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', '116'),
    exact: true
  },
  {
    path: '/docs/blog/tags/changelog',
    component: ComponentCreator('/docs/blog/tags/changelog', '6cc'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', 'c52'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', 'd84'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '5cb'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '39d'),
            routes: [
              {
                path: '/docs/docs/archive/discord-bot',
                component: ComponentCreator('/docs/docs/archive/discord-bot', 'f5d'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/adding-admins',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/adding-admins', 'd2e'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/asset-packs',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/asset-packs', '1a0'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/brand-guidelines',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/brand-guidelines', '915'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/custom-smtp',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/custom-smtp', '574'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/customizing-look',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/customizing-look', '9ed'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/customizing-themes',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/customizing-themes', 'e5b'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/discord-bot',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/discord-bot', '35c'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/faq',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/faq', '7b5'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/getting-started',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/getting-started', 'd2a'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/aws-troubleshooting',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/aws-troubleshooting', '8fd'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/backup-and-restore',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/backup-and-restore', '371'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/cost-saving',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/cost-saving', '4a6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/domain-recipes',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/domain-recipes', 'fb6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/estimating-ccu',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/estimating-ccu', '53e'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/estimating-cost',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/estimating-cost', '0ea'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/existing-domain',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/existing-domain', 'dd3'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/existing-email',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/existing-email', '89d'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/known-issues',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/known-issues', '325'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/quick-start',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/quick-start', '05e'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/system-architecture',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/system-architecture', 'e9e'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-aws/updating-the-stack',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-aws/updating-the-stack', 'ed3'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/hubs-cloud-do/do-quick-start',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/hubs-cloud-do/do-quick-start', 'd55'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/importing-content',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/importing-content', 'a5c'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/introduction',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/introduction', 'a4b'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/limiting-access',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/limiting-access', 'a2f'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/managing-content',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/managing-content', '38a'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/permissive-rooms',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/permissive-rooms', 'cf6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/ssh-access',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/ssh-access', '9f6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/archive/hubs-cloud/third-party-integrations',
                component: ComponentCreator('/docs/docs/archive/hubs-cloud/third-party-integrations', '38e'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/behavior-graphs',
                component: ComponentCreator('/docs/docs/category/behavior-graphs', '8d2'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/contributing-to-hubs',
                component: ComponentCreator('/docs/docs/category/contributing-to-hubs', 'ae0'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/development-basics',
                component: ComponentCreator('/docs/docs/category/development-basics', 'b04'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/hubs-cloud-aws',
                component: ComponentCreator('/docs/docs/category/hubs-cloud-aws', 'ec3'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/hubs-cloud-community-edition',
                component: ComponentCreator('/docs/docs/category/hubs-cloud-community-edition', '5c2'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/hubs-cloud-deprecated',
                component: ComponentCreator('/docs/docs/category/hubs-cloud-deprecated', '4db'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/hubs-cloud-digitalocean',
                component: ComponentCreator('/docs/docs/category/hubs-cloud-digitalocean', '476'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/spoke',
                component: ComponentCreator('/docs/docs/category/spoke', '94a'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/category/the-blender-add-on',
                component: ComponentCreator('/docs/docs/category/the-blender-add-on', '7c8'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/behavior-graphs/intro-behavior-graphs',
                component: ComponentCreator('/docs/docs/creators/behavior-graphs/intro-behavior-graphs', 'f37'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/blender-add-on/add-on-components',
                component: ComponentCreator('/docs/docs/creators/blender-add-on/add-on-components', 'ed8'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/blender-add-on/advanced-avatars',
                component: ComponentCreator('/docs/docs/creators/blender-add-on/advanced-avatars', '70b'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/blender-add-on/intro-add-on',
                component: ComponentCreator('/docs/docs/creators/blender-add-on/intro-add-on', '139'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/adding-content',
                component: ComponentCreator('/docs/docs/creators/spoke/adding-content', 'f64'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/architecture-kit',
                component: ComponentCreator('/docs/docs/creators/spoke/architecture-kit', '4bc'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/building-with-spoke',
                component: ComponentCreator('/docs/docs/creators/spoke/building-with-spoke', '8b3'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/create-project',
                component: ComponentCreator('/docs/docs/creators/spoke/create-project', '787'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/grid',
                component: ComponentCreator('/docs/docs/creators/spoke/grid', '5b6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/lighting-and-shadows',
                component: ComponentCreator('/docs/docs/creators/spoke/lighting-and-shadows', '990'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/linking-rooms',
                component: ComponentCreator('/docs/docs/creators/spoke/linking-rooms', 'ef4'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/optimizing-scenes',
                component: ComponentCreator('/docs/docs/creators/spoke/optimizing-scenes', 'aa0'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/physics-and-navigation',
                component: ComponentCreator('/docs/docs/creators/spoke/physics-and-navigation', 'daa'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/publish-scenes',
                component: ComponentCreator('/docs/docs/creators/spoke/publish-scenes', '5b6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/skyboxes',
                component: ComponentCreator('/docs/docs/creators/spoke/skyboxes', '93d'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/spoke-controls',
                component: ComponentCreator('/docs/docs/creators/spoke/spoke-controls', 'b55'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/creators/spoke/user-interface',
                component: ComponentCreator('/docs/docs/creators/spoke/user-interface', '6b9'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/community-edition/intro-ce',
                component: ComponentCreator('/docs/docs/developers/community-edition/intro-ce', '105'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/contributing/intro-contrib',
                component: ComponentCreator('/docs/docs/developers/contributing/intro-contrib', '6c5'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/contributing/issues',
                component: ComponentCreator('/docs/docs/developers/contributing/issues', 'd5c'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/contributing/pull-requests',
                component: ComponentCreator('/docs/docs/developers/contributing/pull-requests', 'aa7'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/contributing/triage',
                component: ComponentCreator('/docs/docs/developers/contributing/triage', 'b54'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/dev-basics',
                component: ComponentCreator('/docs/docs/developers/development-basics/dev-basics', '87d'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/extending-client',
                component: ComponentCreator('/docs/docs/developers/development-basics/extending-client', '2ec'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/extending-plugins',
                component: ComponentCreator('/docs/docs/developers/development-basics/extending-plugins', '93d'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/gameplay',
                component: ComponentCreator('/docs/docs/developers/development-basics/gameplay', '030'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/interactivity',
                component: ComponentCreator('/docs/docs/developers/development-basics/interactivity', '4ea'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/networking',
                component: ComponentCreator('/docs/docs/developers/development-basics/networking', 'f24'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/query-strings',
                component: ComponentCreator('/docs/docs/developers/development-basics/query-strings', '1f7'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/setup-local-dev',
                component: ComponentCreator('/docs/docs/developers/development-basics/setup-local-dev', '0d6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/developers/development-basics/system-overview',
                component: ComponentCreator('/docs/docs/developers/development-basics/system-overview', '635'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/avatar-links',
                component: ComponentCreator('/docs/docs/fundamentals/avatar-links', 'fb8'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/controls',
                component: ComponentCreator('/docs/docs/fundamentals/controls', '998'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/custom-avatars',
                component: ComponentCreator('/docs/docs/fundamentals/custom-avatars', '09e'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/fundamental-faqs',
                component: ComponentCreator('/docs/docs/fundamentals/fundamental-faqs', 'bd6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/getting-started',
                component: ComponentCreator('/docs/docs/fundamentals/getting-started', '788'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/hosting-events',
                component: ComponentCreator('/docs/docs/fundamentals/hosting-events', '31c'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/hubs-features',
                component: ComponentCreator('/docs/docs/fundamentals/hubs-features', '1f9'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/hubs-rooms',
                component: ComponentCreator('/docs/docs/fundamentals/hubs-rooms', '246'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/reskin-avatars',
                component: ComponentCreator('/docs/docs/fundamentals/reskin-avatars', 'f00'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/room-settings',
                component: ComponentCreator('/docs/docs/fundamentals/room-settings', '9b9'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/troubleshooting',
                component: ComponentCreator('/docs/docs/fundamentals/troubleshooting', '197'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/fundamentals/user-settings',
                component: ComponentCreator('/docs/docs/fundamentals/user-settings', '321'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/introduction/community',
                component: ComponentCreator('/docs/docs/introduction/community', 'b94'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/introduction/getting-help',
                component: ComponentCreator('/docs/docs/introduction/getting-help', 'ff6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/introduction/hubs-history',
                component: ComponentCreator('/docs/docs/introduction/hubs-history', 'a50'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/introduction/what-is-hubs',
                component: ComponentCreator('/docs/docs/introduction/what-is-hubs', '841'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/subscription/choosing-subscription',
                component: ComponentCreator('/docs/docs/subscription/choosing-subscription', 'f3a'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/subscription/creating-subscripton',
                component: ComponentCreator('/docs/docs/subscription/creating-subscripton', 'bfd'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/subscription/custom-client',
                component: ComponentCreator('/docs/docs/subscription/custom-client', 'c1a'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/subscription/custom-domain',
                component: ComponentCreator('/docs/docs/subscription/custom-domain', 'd73'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/subscription/faq-subscription',
                component: ComponentCreator('/docs/docs/subscription/faq-subscription', '5e8'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/subscription/help-subscription',
                component: ComponentCreator('/docs/docs/subscription/help-subscription', '3e8'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/subscription/managing-subscription',
                component: ComponentCreator('/docs/docs/subscription/managing-subscription', '58e'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/docs/subscription/updating-subscription',
                component: ComponentCreator('/docs/docs/subscription/updating-subscription', '841'),
                exact: true,
                sidebar: "documentation"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '02b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
