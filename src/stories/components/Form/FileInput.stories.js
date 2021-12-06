import React from 'react';
import {action} from '@storybook/addon-actions';

import FileInput from '@ra/components/Form/FileInput';

export const Story = () => (
    <FileInput
      name="file"
      onChange={action('changed')}
    />
);

Story.storyName = 'File Input';

export default {
    title: 'Form/File Input',
    component: FileInput,
}
