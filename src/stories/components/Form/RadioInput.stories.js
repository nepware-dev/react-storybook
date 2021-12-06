import React from 'react';
import {action} from '@storybook/addon-actions';

import RadioInput from '@ra/components/Form/RadioInput';

export const Story = () => (
    <RadioInput
      onChange={action('changed')}
    />
);

Story.storyName = 'Radio Input';

export default {
    title: 'Form/Radio Input',
    component: RadioInput,
}
