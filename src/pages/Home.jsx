import React from 'react';
import { useContext } from 'react';

import Banner from '../components/Banner.jsx';
import PhotoCard from '../components/PhotoCard.jsx';

import hommebanner from '/banner-site-5.jpg';

import photoCard1 from '/natal/natal2019/portrait_16.jpg';
import photoCard2 from '/natal/natal2019/portrait_17.jpg';
import photoCard3 from '/natal/natal2019/portrait_1.jpg';
import photoCard4 from '/natal/natal2019/portrait_22.jpg';

import contentData from '../data/home.json';

import { LngContext } from '../utils/context.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    const { language } = useContext(LngContext);
    const years = [2018, 2019, 2022];
    const yearsSize = years.length;
    const { content, subtitles, name } = contentData.find((data) => data.title === language);

    const yearsButtons = years.map((year) => {
        return (
            <Link to={`natal/${year}`}>
                <button
                    key={year}
                    className='yearsButton'
                >
                    {name} {year}
                </button>
            </Link>
        );
    });

    return (
        <div className='home'>
            <Banner
                img={hommebanner}
                page={'home'}
            />
            <section className='photoCardList'>
                <PhotoCard img={photoCard1} />
                <PhotoCard img={photoCard2} />
                <PhotoCard img={photoCard3} />
                <PhotoCard img={photoCard4} />
            </section>
            <section className='homeContent'>
                <div className='homeContent__text'>
                    <p>{content}</p>
                </div>
                <div className='homeContent__actions'>
                    <h2>{subtitles.history}</h2>
                    {yearsButtons}
                    <h2>{subtitles.action}</h2>
                    <Link to={`natal/${years[yearsSize - 1]}`}>
                        <button className='buttonNow'>
                            {name} {years[yearsSize - 1]}
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
