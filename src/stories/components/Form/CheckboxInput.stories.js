import React from 'react';
import {action} from '@storybook/addon-actions';

import CheckboxInput from '@ra/components/Form/CheckboxInput';

export const Story = () => (
    <CheckboxInput
      onChange={action('changed')}
    />
);

Story.storyName = 'CheckBox';

export default {
    title: 'Form/CheckBox',
    component: CheckboxInput,
}
