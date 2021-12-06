import React from 'react';
import {action} from '@storybook/addon-actions';

import TextInput from '@ra/components/Form/TextInput';

export const Story = () => (
  <TextInput 
    onChange={action('changed')}
  />
);

Story.storyName = 'Text Input';

export default {
    title: 'Form/Text Input',
    component: TextInput,
}
