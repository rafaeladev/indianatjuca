import React from 'react';
import { Link } from 'react-router-dom';
import contentData from '../data/home.json';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';

const CTA = () => {
    const years = [2018, 2019, 2022, 2023];
    const yearsSize = years.length;
    const { language } = useContext(LngContext);
    const data = contentData.find((data) => data.title === language);
    const subtitles = data.subtitles ? data.subtitles : null;
    return (
        <div className='cta'>
            <div className='homeContent__actions '>
                <Link to={`/natal/loading`}>
                    <button className='buttonNow'>{subtitles.action}</button>
                </Link>
            </div>
        </div>
    );
};

export default CTA;
