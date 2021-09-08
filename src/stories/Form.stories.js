import React from 'react';
import { action } from '@storybook/addon-actions';

import SelectInput from '../vendor/react-arsenal/components/Form/SelectInput';
import TextInput from '../vendor/react-arsenal/components/Form/TextInput';
import SecureTextInput from '../vendor/react-arsenal/components/Form/SecureTextInput';
import DateInput from '../vendor/react-arsenal/components/Form/DateInput';
import TimeInput from '../vendor/react-arsenal/components/Form/TimeInput';
import DateTimeInput from '../vendor/react-arsenal/components/Form/DateTimeInput';
import FileInput from '../vendor/react-arsenal/components/Form/FileInput';
import DragDropFileInput from '../vendor/react-arsenal/components/Form/DragDropFileInput';
import NumberInput from '../vendor/react-arsenal/components/Form/NumberInput';
import ColorInput from '../vendor/react-arsenal/components/Form/ColorInput';
import CheckboxInput from '../vendor/react-arsenal/components/Form/CheckboxInput';
import RadioInput from '../vendor/react-arsenal/components/Form/RadioInput';

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

export const SecureText = () => (
  <SecureTextInput
    onChange={action('changed')}
  />
);

export const Number = () => (
  <NumberInput
    onChange={action('changed')}
  />
);

export const Date = () => (
  <DateInput
    onChange={action('changed')}
  />
);

export const Time = () => (
  <TimeInput
    onChange={action('changed')}
  />
);

export const DateTime = () => (
  <DateTimeInput
    onChange={action('changed')}
  />
);

export const Checkbox = () => (
  <>
    <CheckboxInput
      onChange={action('changed')}
    />
  </>
);

export const Radio = () => (
  <>
    <RadioInput
      onChange={action('changed')}
    />
  </>
);

export const Color = () => (
  <>
    <ColorInput
      onChange={action('changed')}
    />
  </>
);

export const File = () => (
  <>
    <FileInput
      name="file"
      onChange={action('changed')}
    />
  </>
);

export const DragDropFile = () => (
    <DragDropFileInput 
        multiple
        maxFiles={2}
        name="drag-and-drop-input" 
        accept="application/pdf"
        onChange={action('changed')} 
    />
);
