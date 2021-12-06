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
  ],
};
