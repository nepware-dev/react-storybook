import React from 'react';
import { action } from '@storybook/addon-actions';
import  _Button from '../vendor/react-arsenal/components/Button';
import  _Modal from '../vendor/react-arsenal/components/Modal';
import _WindowPortal from '../vendor/react-arsenal/components/WindowPortal';
import _Dropdown from '../vendor/react-arsenal/components/Dropdown';
import _Pagination from '../vendor/react-arsenal/components/Pagination';

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
