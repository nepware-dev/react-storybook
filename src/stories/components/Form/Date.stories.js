import React from 'react';
import {action} from '@storybook/addon-actions';

import DateInput from '@ra/components/Form/DateInput';

export const Story = () => (
  <DateInput
    onChange={action('changed')}
  />
);

Story.storyName = 'Date Input';

export default {
    title: 'Form/Date Input',
    component: DateInput,
}
