import React from 'react';
import Button from '@ra/components/Button';

export const Story = () => (
  <Button primary>Open Modal</Button>
);

Story.storyName = 'Modal';

export default {
  title: 'Components/Modal',
  component: Button,
};
