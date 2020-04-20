import React from 'react';
import { action } from '@storybook/addon-actions';
import SelectInput from '../vendor/react-arsenal/components/Form/SelectInput';
import TextInput from '../vendor/react-arsenal/components/Form/TextInput';
import Input from '../vendor/react-arsenal/components/Form/Input';

import '../vendor/react-arsenal/styles/_base.scss';

export default {
  title: 'Form',
};

export const Select = () => (
  <SelectInput
    keyExtractor={item => item.id}
    valueExtractor={item => item.value}
    onChange={action('selected')}
    options={[
      {id: 1, value: 'test1'},
      {id: 2, value: 'test2'},
      {id: 3, value: 'test3'},
      {id: 4, value: 'test1'},
      {id: 5, value: 'test2'},
    ]}
  />
);

export const Text = () => (
  <TextInput 
    onChange={action('changed')}
  />
);

export const Password = () => (
  <Input type="password"
    onChange={action('changed')}
  />
);

export const Number = () => (
  <Input type="number"
    onChange={action('changed')}
  />
);

export const Date = () => (
  <Input type="date"
    onChange={action('changed')}
  />
);

export const Time = () => (
  <Input type="time"
    onChange={action('changed')}
  />
);

export const Checkbox = () => (
  <>
    <Input type="checkbox"
      onChange={action('changed')}
    />
  </>
);

export const Radio = () => (
  <>
    <Input type="radio"
      onChange={action('changed')}
    />
  </>
);

export const Color = () => (
  <>
    <Input type="color"
      onChange={action('changed')}
    />
  </>
);

export const File = () => (
  <>
    <Input type="file"
      name="file"
      onChange={action('changed')}
    />
  </>
);
