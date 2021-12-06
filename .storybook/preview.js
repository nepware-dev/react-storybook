import { addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { withPropsTable } from 'storybook-addon-react-docgen';

export const parameters = {
  docs: {
    inlineStories: true,
  },
  controls: { expanded: true },
};

addDecorator(withPropsTable);
