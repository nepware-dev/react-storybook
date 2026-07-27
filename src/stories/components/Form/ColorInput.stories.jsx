import React from 'react';
import {action} from 'storybook/actions';

import ColorInput from '@ra/components/Form/ColorInput';

export const Story = () => (
    <ColorInput
      onChange={action('changed')}
    />
);

Story.storyName = 'Color Input';

export default {
    title: 'Form/Color Input',
    component: ColorInput,
}
