import React from 'react';
import {action} from '@storybook/addon-actions';

import Pagination from '@ra/components/Pagination';

import styles from './styles.module.scss';

export const Story = (args) => (
  <Pagination
    className={styles.pagination}
    onChange={action('changed')}
    {...args}
  />
);

Story.args = {
  totalRecords: 200,
  pageLimit: 15,
  pageNeighbours: 2,
};

Story.storyName = 'Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};
