import React from 'react';
import {action} from '@storybook/addon-actions';

import DateTimeInput from '@ra/components/Form/DateTimeInput';

export const Story = () => (
  <DateTimeInput
    onChange={action('changed')}
  />
);

Story.storyName = 'DateTime Input';

export default {
    title: 'Form/DateTime Input',
    component: DateTimeInput,
}
