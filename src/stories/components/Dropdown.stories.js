import React from 'react';

import Dropdown from '@ra/components/Dropdown';

export const Story = () => (
  <Dropdown label="Dropdown label">
    <p>
      Open Window Portal
    </p>
  </Dropdown>
);

Story.storyName = 'Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};
