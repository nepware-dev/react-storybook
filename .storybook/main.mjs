import path from 'node:path';

const reactArsenalPath = path.resolve(
  import.meta.dirname,
  '..',
  'src',
  'vendor',
  'react-arsenal'
);

export default {
  stories: ['../src/**/*.stories.@(js|jsx|mdx)'],
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ra': reactArsenalPath,
    };
    // react-arsenal ships its own node_modules, so pin React to this project's copy
    config.resolve.dedupe = [
      ...(config.resolve.dedupe || []),
      'react',
      'react-dom',
    ];
    return config;
  },
};
