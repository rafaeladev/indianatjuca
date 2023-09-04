import React from 'react';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';
import Collapse from './Collapse.jsx';

const ChangeLanguage = () => {
    const { language, selectLanguage } = useContext(LngContext);
    // function selectLanguage(event) {
    //     setLanguage(event.target.value);
    // }

    // console.log(language);

    return (
        <>
            <select
                className='selectBox'
                onChange={(event) => selectLanguage(event)}
                name='language'
                value={language}
            >
                <option
                    className='optionsMenu'
                    value='BR'
                >
                    BR
                </option>
                <option
                    className='optionsMenu'
                    value='FR'
                >
                    FR
                </option>
                <option
                    className='optionsMenu'
                    value='EN'
                >
                    EN
                </option>
            </select>
        </>
    );
};

export default ChangeLanguage;
