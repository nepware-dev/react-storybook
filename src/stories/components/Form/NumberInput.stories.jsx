import React from 'react';
import {action} from 'storybook/actions';

import NumberInput from '@ra/components/Form/NumberInput';

export const Story = () => (
  <NumberInput
    onChange={action('changed')}
  />
);

Story.storyName = 'Number Input';

export default {
    title: 'Form/Number Input',
    component: NumberInput,
}
