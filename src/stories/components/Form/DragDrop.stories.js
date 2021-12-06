import React from 'react';
import {action} from '@storybook/addon-actions';

import DragDropFileInput from '@ra/components/Form/DragDropFileInput';

export const Story = () => (
    <DragDropFileInput 
        multiple
        maxFiles={2}
        name="drag-and-drop-input" 
        accept="application/pdf"
        onChange={action('changed')} 
    />
);

Story.storyName = 'DragDrop File';

export default {
    title: 'Form/DragDrop File',
    component: DragDropFileInput,
}
