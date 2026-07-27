import React from 'react';
import {action} from 'storybook/actions';

import DateTimePickerInput from '@ra/components/Form/DateTimePickerInput';

export const Story = () => (
    <div style={{maxWidth: 340}}>
        <p style={{marginTop: 0, fontSize: 13, color: '#666'}}>
            Default (AD) mode: Gregorian calendar plus the stepped time list. onChange emits an ISO
            datetime (yyyy-mm-ddThh:mm, with the T).
        </p>
        <DateTimePickerInput
            name="adDateTime"
            onChange={action('changed')}
        />
    </div>
);

Story.storyName = 'Default (AD)';

export const NepaliStory = () => (
    <div style={{maxWidth: 340}}>
        <p style={{marginTop: 0, fontSize: 13, color: '#666'}}>
            Nepali (BS) mode: the user sees/enters Bikram Sambat date + time, but onChange still emits
            the ISO (AD) datetime.
        </p>
        <DateTimePickerInput
            name="bsDateTime"
            mode="nepali"
            language="ne"
            onChange={action('changed')}
        />
    </div>
);

NepaliStory.storyName = 'Nepali (BS)';

export const ToggleStory = () => (
    <div style={{maxWidth: 340}}>
        <p style={{marginTop: 0, fontSize: 13, color: '#666'}}>
            Toggle mode: an AD/BS switcher on the input row (always visible) flips the displayed
            calendar system without opening the picker. The emitted value stays ISO/AD.
        </p>
        <DateTimePickerInput
            name="toggleDateTime"
            mode="toggle"
            language="ne"
            onChange={action('changed')}
        />
    </div>
);

ToggleStory.storyName = 'Toggle (AD/BS)';

export const BoundedStory = () => (
    <div style={{maxWidth: 340}}>
        <p style={{marginTop: 0, fontSize: 13, color: '#666'}}>
            ISO datetime bounds. Bounded from 2024-04-13T09:00 to 2024-07-15T17:00; the time limit
            applies only on the boundary dates and out-of-window times are greyed in the list.
        </p>
        <DateTimePickerInput
            name="boundedDateTime"
            mode="toggle"
            minimumDate="2024-04-13T09:00"
            maximumDate="2024-07-15T17:00"
            onChange={action('changed')}
        />
    </div>
);

BoundedStory.storyName = 'Bounded (ISO min/max)';

export const NativeTimeStory = () => (
    <div style={{maxWidth: 340}}>
        <p style={{marginTop: 0, fontSize: 13, color: '#666'}}>
            Native time mode uses the browser time input (no per-value greying), with the enforcement
            backstop still rejecting out-of-window times.
        </p>
        <DateTimePickerInput
            name="nativeDateTime"
            timeMode="native"
            minimumDate="2024-04-13T09:00"
            maximumDate="2024-07-15T17:00"
            onChange={action('changed')}
        />
    </div>
);

NativeTimeStory.storyName = 'Native time mode';

export const DisabledStory = () => (
    <div style={{maxWidth: 340}}>
        <DateTimePickerInput
            name="disabledDateTime"
            disabled
            defaultValue="2024-04-13T14:30"
            onChange={action('changed')}
        />
    </div>
);

DisabledStory.storyName = 'Disabled';

export default {
    title: 'Form/Date Time Picker Input',
    component: DateTimePickerInput,
};
