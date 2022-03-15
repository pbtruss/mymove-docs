/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  aboutSidebar: [{
    type: 'autogenerated',
    dirName: 'about',
  }],
  frontendSidebar: [{
    type: 'autogenerated',
    dirName: 'frontend',
  }],
  backendSidebar: [{
    type: 'autogenerated',
    dirName: 'backend',
  }],
  apiSidebar: [
    'api/index',
    {
      type: 'category',
      label: 'Swagger Documentation',
      items: [
        {
          type: 'link',
          label: 'Admin',
          href: '/api/admin',
        },
        {
          type: 'link',
          label: 'Internal',
          href: '/api/internal',
        },
        {
          type: 'link',
          label: 'GHC',
          href: '/api/ghc',
        },
        {
          type: 'link',
          label: 'Prime',
          href: '/api/prime',
        },
        {
          type: 'link',
          label: 'Support',
          href: '/api/support',
        },
      ],
    },
    {
      type: 'category',
      label: 'Docs',
      items: [
        {
          type: 'link',
          label: 'Prime API Deliverable',
          href: 'https://github.com/transcom/prime_api_deliverable',
        },
        'api/docs/push-notifications-to-prime',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/guides',
        },
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/testing',
        },
      ],
    },
  ],
  toolsSidebar: [
    'tools/index',
    {
      type: 'category',
      label: 'CI/CD',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/cicd',
        },
      ],
    },
    {
      type: 'category',
      label: 'Dependabot',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/dependabot',
        },
      ],
    },
    {
      type: 'category',
      label: 'Dockerfile',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/dockerfile',
        },
      ],
    },
    {
      type: 'category',
      label: 'Docusaurus',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/docusaurus',
        },
      ],
    },
    {
      type: 'category',
      label: 'Locust',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/locust',
        },
      ],
    },
    {
      type: 'category',
      label: 'Mockery',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/mockery',
        },
      ],
    },
    {
      type: 'category',
      label: 'Postman',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/postman',
        },
      ],
    },
    {
      type: 'category',
      label: 'SchemaSpy',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/schemaspy',
        },
      ],
    },
    {
      type: 'category',
      label: 'Telemetry',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tools/telemetry',
        },
      ],
    },
  ],
  backendSidebar: [{
    type: 'autogenerated',
    dirName: 'backend',
  }],
  devSidebar: [{
    type: 'autogenerated',
    dirName: 'dev',
  }],
  helpSidebar: [{
    type: 'autogenerated',
    dirName: 'help',
  }],
  vaultSidebar: [{
    type: 'autogenerated',
    dirName: 'vault',
  }],
  tutorialSidebar: [{type: 'autogenerated', dirName: 'tutorial'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
