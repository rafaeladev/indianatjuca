import React from 'react';
import { useContext, useRef, useEffect } from 'react';

import Banner from '../components/Banner.jsx';
import PhotoCard from '../components/PhotoCard.jsx';

import hommebanner from '/Group1.png';

import contentData from '../data/home.json';

import { LngContext } from '../utils/context.jsx';
import { Link } from 'react-router-dom';
import HomePhotos from '../components/HomePhotos.jsx';

const Home = () => {
    const titleRef = useRef();
    const { language } = useContext(LngContext);
    const years = [2018, 2019, 2022];
    const yearsSize = years.length;
    const { h2, content, subtitles, name } = contentData.find((data) => data.title === language);

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

    const homeTitle = h2.map((title, index) => {
        if (index === 1) {
            return <i className='homeContent--orange homeContent--display'> {` ${title} `} </i>;
        }
        if (index === 3) {
            return <i className='homeContent--green homeContent--display'> {title}</i>;
        } else {
            return <>{title}</>;
        }
        return;
    });

    return (
        <>
            <Banner
                img={hommebanner}
                page={'home'}
            />
            <div className='home'>
                <section className='homeContent'>
                    <h2 className='homeContent__title homeContent--margin'>
                        {homeTitle && homeTitle}
                    </h2>
                    <div className='homeContent__text homeContent--margin'>
                        <p>{content}</p>
                    </div>
                    <div className='homeContent__actions homeContent--margin'>
                        <Link to={`natal/${years[yearsSize - 1]}`}>
                            <button className='buttonNow'>{subtitles.action}</button>
                        </Link>
                    </div>
                </section>
                <div className='homePhotosSection'>
                    <HomePhotos
                        img={'natal/natal2022/portrait_6.webp'}
                        color='orange'
                        title='Natal 2022'
                        flex={null}
                    />
                    <HomePhotos
                        img={'natal/natal2019/portrait_18.jpg'}
                        color='green'
                        title='Natal 2019'
                        flex={null}
                    />
                    <HomePhotos
                        img={'natal/natal2018/portrait_5.jpg'}
                        color='gray'
                        title='Natal 2018'
                        flex='reverse'
                        align='right'
                    />
                    <HomePhotos
                        img={'/image-favela2.png'}
                        color='red'
                        title='Sobre Nos'
                        flex='reverse'
                        align='right'
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
