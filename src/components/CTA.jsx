import React from 'react';
import { Link } from 'react-router-dom';
import contentData from '../data/home.json';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';

const CTA = () => {
    const years = [2018, 2019, 2022, 2023];
    const yearsSize = years.length;
    const { language } = useContext(LngContext);
    const { subtitles } = contentData.find((data) => data.title === language);
    return (
        <div className='cta'>
            <div className='homeContent__actions '>
                <Link to={`natal/${years[yearsSize - 1]}`}>
                    <button className='buttonNow'>{subtitles.action}</button>
                </Link>
            </div>
        </div>
    );
};

export default CTA;
