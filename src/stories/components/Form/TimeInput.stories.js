import React from 'react';
import {action} from '@storybook/addon-actions';

import TimeInput from '@ra/components/Form/TimeInput';

export const Story = () => (
  <TimeInput
    onChange={action('changed')}
  />
);

Story.storyName = 'Time Input';

export default {
    title: 'Form/Time Input',
    component: TimeInput,
}
