import React from 'react';
import {action} from '@storybook/addon-actions';

import SecureTextInput from '@ra/components/Form/SecureTextInput';

export const Story = () => (
  <SecureTextInput 
    onChange={action('changed')}
  />
);

Story.storyName = 'SecureText Input';

export default {
    title: 'Form/SecureText Input',
    component: SecureTextInput,
}
