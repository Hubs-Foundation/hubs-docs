/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'welcome',
        'intro-hubs',
        'intro-spoke',
        'intro-avatars',
        'intro-events'
      ],
    },
    {
      type: 'category',
      label: 'Setting Up Your Hub',
      items: [
        'beginners-guide-to-CE',
        'set-up-SMTP-email-service',
        'download-and-install-doctl',
        'whats-next',
        'setup-learning',
        'faq',
        'how-to-backup-your-Hubs-instance',
        'regenerating-ssl-certificates',
        'setup-configuring-content',
        'hubs-cloud-asset-packs',
        'setup-faq',
        'setup-contact'
      ],
    },
    {
      type: 'category',
      label: 'Hubs Fundamentals',
      items: [
        'hubs-create-join-rooms',
        'hubs-features',
        'sharing-avatar-links-privately',
        'hubs-user-settings',
        'hubs-room-settings',
        'hubs-controls',
        'hubs-discord-bot',
        'hubs-troubleshooting',
        'hubs-faq'
      ],
    },
    {
      type: 'category',
      label: 'Spoke Documentation',
      items: [
        'spoke-creating-projects',
        'spoke-user-interface',
        'spoke-controls',
        'spoke-adding-scene-content',
        'spoke-architecture-kit',
        'spoke-grid',
        'spoke-skyboxes',
        'lighting-and-shadows',
        'physics-and-navigation',
        'spoke-publish-scenes'
      ],
    },
    {
      type: 'category',
      label: 'For Creators',
      items: [
        'creators-advanced-avatar-customization',
        'creators-linking-rooms',
        'creators-using-the-blender-gltf-exporter',
        'creators-blender-components',
        'spoke-optimization',
        'creators-content-guidelines',
        'intro-behavior-graphs'
      ],
    },
    {
      type: 'category',
      label: 'For Developers',
      items: [
        'system-overview',
        'build-custom-client',
        'contributing',
        'hubs-query-string-parameters',
        'github-workflows'
      ],
    },
    {
      type: 'category',
      label: 'Hubs Client development',
      items: [
        'dev-client-basics',
        'dev-client-gameplay',
        'dev-client-interactivity',
        'dev-client-networking'
      ],
    },
    {
      type: 'category',
      label: 'Hubs Admin Panel',
      items: [
        'admin-intro',
        'admin-getting-started',
        'admin-importing-content',
        'admin-customizing-themes',
        'admin-managing-content',
        'admin-adding-administrators',
        'admin-limiting-user-access',
        'admin-permissive-rooms',
        'admin-enable-scene-editor'
      ],
    },
  ],
};

module.exports = sidebars;
