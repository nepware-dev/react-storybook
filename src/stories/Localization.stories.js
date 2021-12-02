import React from 'react';
import PropTypes from 'prop-types';

import SelectInput from '../vendor/react-arsenal/components/Form/SelectInput';
import LocalizeProvider, {Localize, useI18nContext} from '../vendor/react-arsenal/components/I18n';
import DateTimeInput from '../vendor/react-arsenal/components/Form/DateTimeInput';

import TimeUtils from '../vendor/react-arsenal/utils/time';

import '../vendor/react-arsenal/styles/_base.scss';
import styles from './styles.module.scss';

export default {
  title: 'Localization',
};

const testData = {
    description: 'This is a description.',
    descriptionJp: 'これは説明です。',
    descriptionKr: '이것은 설명이애요.',
    descriptionFr: 'eci est une description',
    descriptionNp: 'यो एक विवरण हो',
};

const translations = {
    en: {},
    jp: {
        'Test': 'TestJP',
    },
    kr: {
        'Test': 'TestKR',
    },
    fr: {
        'Test': 'TestFR',
    },
    np: {
        'Test': 'TestNP',
    },
};

const languages = [
    {code: 'en', title: 'English', locale: 'en'}, 
    {code: 'jp', title: '日本語', locale: 'ja-JP'},
    {code: 'kr', title: '한국어', locale: 'ko-KR'},
    {code: 'fr', title: 'French', locale: 'fr'},
    {code: 'np', title: 'नेपाली', locale: 'ne-NP'}
];

const contentPropTypes = {
    nested: PropTypes.bool,
    title: PropTypes.string,
};

const LocalizationContent = ({nested, title}) => {
    const {languages, selectedLanguage, changeLanguage} = useI18nContext();

    return (
        <div className={nested ? null : styles.nested}>
            <div className={styles.header}>
                <h4>{title}</h4>
                <SelectInput
                    className={styles.select}
                    searchable={false}
                    clearable={false}
                    defaultValue={languages.find(lng => lng.code === selectedLanguage)}
                    keyExtractor={item => item.code}
                    valueExtractor={item => item.title}
                    onChange={({option}) => changeLanguage(option.code)}
                    options={languages}
                />
            </div>
            <p><Localize>Test</Localize></p>
            <p>
                <Localize dataKey="description">{testData}</Localize>
            </p>
            {nested && (
                <LocalizeProvider 
                    translations={translations} 
                    defaultLanguage="jp"
                    languages={languages.slice(0, -1)}
                >
                    <LocalizationContent title="Nested Context" />
                </LocalizeProvider>
            )}
        </div>
    );
};
LocalizationContent.propTypes = contentPropTypes;

export const SingleContext = () => {
    return (
        <LocalizeProvider 
            translations={translations} 
            languages={languages}
        >
            <LocalizationContent title="Single Localization Context" />
        </LocalizeProvider>
    );
}

export const NestedContexts = () => {
    return (
        <LocalizeProvider translations={translations} languages={languages}>
            <h3>Multiple Localization Contexts</h3>
            <LocalizationContent nested title="First Context" />
        </LocalizeProvider>
    );
}

const TimeServicesContent = () => {
    const {languages, selectedLanguage, changeLanguage} = useI18nContext();

    const date = new Date();
    const [referenceDate, setReferenceDate] = React.useState(new Date());

    const selectedLocale = languages.find(lng => lng.code === selectedLanguage).locale;

    return (
        <div>
            <div className={styles.header}>
                <h3>{date.toLocaleString(selectedLocale)}</h3>
                <SelectInput
                    className={styles.select}
                    searchable={false}
                    clearable={false}
                    defaultValue={languages.find(lng => lng.code === selectedLanguage)}
                    keyExtractor={item => item.code}
                    valueExtractor={item => item.title}
                    onChange={({option}) => changeLanguage(option.code)}
                    options={languages}
                />
            </div>
            <p>
                <b>12 hour time string:</b> {TimeUtils.get12HourTimeString(date, selectedLocale)}
            </p>
            <p>
                <b>Reference Time</b>
                <DateTimeInput
                    className={styles.input}
                    onChange={({value}) => setReferenceDate(new Date(value))}
                />
            </p>
            <p>
                <b>Time Since Reference Time: </b>
                {TimeUtils.timeSince(referenceDate, selectedLocale)}
            </p>
        </div>
    );
}

export const TimeServices = () => {
    return (
        <LocalizeProvider 
            translations={translations} 
            languages={languages}
        >
            <TimeServicesContent />
        </LocalizeProvider>
    );
}
