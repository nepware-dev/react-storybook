import { addons } from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events'

import theme from './theme';

addons.setConfig({
  theme
});

addons.register('TitleAddon', api => {
  api.on(STORY_RENDERED, story => {
    const storyData = api.getCurrentStoryData();
    document.title = `${storyData.name}`;
  });
})
