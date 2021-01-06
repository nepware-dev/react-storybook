import React from 'react';
import { action } from '@storybook/addon-actions';
import  _Button from '../vendor/react-arsenal/components/Button';
import  _Modal from '../vendor/react-arsenal/components/Modal';
import _WindowPortal from '../vendor/react-arsenal/components/WindowPortal';
import _Dropdown from '../vendor/react-arsenal/components/Dropdown';
import _Pagination from '../vendor/react-arsenal/components/Pagination';
import _Tabs, {Tab} from '../vendor/react-arsenal/components/Tabs';

import styles from './styles.module.scss';

export default {
  title: 'Components',
};

export const Button = () => (
  <div className={styles.buttons}>
    <p>Active</p>
    <_Button>Default</_Button>
    <_Button success>Succes</_Button>
    <_Button warning>Warning</_Button>
    <_Button danger>Danger</_Button>
    <_Button success outline>Succes</_Button>
    <_Button warning outline>Warning</_Button>
    <_Button danger outline>Danger</_Button>
    <p>Disabled</p>
    <_Button success disabled>Succes</_Button>
    <_Button warning disabled>Warning</_Button>
    <_Button danger disabled>Danger</_Button>
    <_Button success outline disabled>Succes</_Button>
    <_Button warning outline disabled>Warning</_Button>
    <_Button danger outline disabled>Danger</_Button>
  </div>
);

export const Modal = () => (
  <_Button primary>Open Modal</_Button>
);

export const WindowPortal = () => (
  <_Button>Open Window Portal</_Button>
);

export const Dropdown = () => (
  <_Dropdown label="Dropdown label">
    <p>
      Open Window Portal
    </p>
  </_Dropdown>
);

export const Pagination = () => (
  <_Pagination
    className={styles.pagination}
    totalRecords={200}
    pageLimit={15}
    pageNeighbours={2}
    onChange={action('changed')}
  />
)

export const Tabs = () => (
  <_Tabs defaultActiveTab='profile' onChange={action('Tab Changed!')}>
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
        <_Button primary>Contact Button</_Button>
      </div>
    </Tab>
  </_Tabs>
)
