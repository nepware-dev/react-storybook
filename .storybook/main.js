module.exports = {
  features: {
    emotionAlias: false,
    babelModeV7: true,
  },
  stories: ['../src/**/*.stories.@(js|mdx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-addon-react-docgen',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    }, 
  ],
};
