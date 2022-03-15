import React from 'react';
import {action} from '@storybook/addon-actions';

import ToggleSwitch from '@ra/components/Form/ToggleSwitch';

export const Story = args => {
    return (
        <ToggleSwitch
            onChange={action('changed')}
            {...args}
        />
    );
};

Story.storyName = 'Toggle Switch';

Story.args = {
    size: 32,
    disabled: false,
};

export default {
    title: 'Form/Toggle Switch',
    component: ToggleSwitch,
    argTypes: {
        size: {
            control: {type: 'number'},
        },
        disabled: {
            control: {},
        },
    },
}
