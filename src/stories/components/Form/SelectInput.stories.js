import React from 'react';
import {action} from '@storybook/addon-actions';

import SelectInput from '@ra/components/Form/SelectInput';

export const Story = () => (
    <SelectInput
        keyExtractor={item => item?.id}
        valueExtractor={item => item?.value}
        onChange={action('selected')}
        searchable={false}
        options={[
            {id: 1, value: 'Option 1'},
            {id: 2, value: 'Option 2'},
            {id: 3, value: 'Option 3'},
            {id: 4, value: 'Option 4'},
            {id: 5, value: 'Option 5'},
        ]}
    />
);

Story.storyName = 'Select Input';

export default {
    title: 'Form/Select Input',
    component: SelectInput,
}
