import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '@ra/components/Button';
import Tabs, {Tab} from '@ra/components/Tabs';

import styles from './styles.module.scss';

export const Story = (args) => (
  <Tabs defaultActiveTab='profile' onChange={action('Tab Changed!')} {...args}>
    <Tab label="home" title="Home" className={styles.homeTab}>
      Home: lorem ipsum dolor sit amet.
    </Tab>
    <Tab label="profile" title="My Profile" className={styles.homeTab}>
      <div>
        Sed tristique neque vitae sapien ultricies, et sollicitudin nisl placerat. Donec rhoncus ut purus nec volutpat. Quisque luctus lacus augue, vitae ultrices orci hendrerit et. Fusce sollicitudin lectus vitae mi faucibus condimentum. Maecenas finibus facilisis metus et commodo. Proin vel velit non turpis blandit pellentesque eu sit amet nibh. Etiam tincidunt, tortor et fringilla vehicula, neque tellus hendrerit odio, ut pellentesque purus quam vitae dolor.
      </div>
    </Tab>
    <Tab label="contact" title="Contact Us" className={styles.homeTab}>
      <div>
        <p>Praesent ac turpis elit. Aliquam condimentum aliquet egestas. Nulla vehicula in risus non varius.</p>
        <Button primary>Contact Button</Button>
      </div>
    </Tab>
  </Tabs>
);

Story.storyName = 'Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs
};
