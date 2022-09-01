import React from 'react';
import {action} from '@storybook/addon-actions';

import SliderInput from '@ra/components/Form/SliderInput';

export const Story = args => {
    return (
        <SliderInput onChange={action('changed')} containerStyle={{width: '50%', height: 250}} {...args} />
    );
};

Story.storyName = 'Slider Input';

Story.args = {
    disabled: false,
    axis: 'x',
    step: 0.1,
};

export default {
    title: 'Form/Slider Input',
    component: SliderInput,
    argTypes: {
        isRangeInput: {
            disabled: true
        },
        disabled: {
            control: {},
        },
        step: {
            control: {type: 'number'}
        }
    },
};
