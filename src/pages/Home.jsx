import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Banner from '../components/Banner.jsx';

import hommebanner from '/Group1.png';

import contentData from '../data/home.json';
import homePhotoCardData from '../data/archives.json';

import { LngContext } from '../utils/context.jsx';
import { Link } from 'react-router-dom';
import HomePhotos from '../components/HomePhotos.jsx';

import Loader from 'react-loaders';

const Home = () => {
    const { language } = useContext(LngContext);
    const years = [2018, 2019, 2022, 2023];
    const yearsSize = years.length;
    const nameArray = ['I', 'n', 'd', 'i', 'a', 'n', 'a', '', 'T', 'i', 'j', 'u', 'c', 'a'];
    const { h2, content, content2, content3, subtitles, endPage } = contentData.find(
        (data) => data.title === language
    );

    const cardElements = homePhotoCardData.map((data) => {
        return (
            <li key={data.id}>
                <Link
                    className='linkHomePhotos'
                    key={data.id}
                    to={`natal/${data.id}`}
                >
                    <HomePhotos
                        img={data.urlImg}
                        color={data.backColor}
                        title={data.title[language]}
                        flex={data.flex}
                        align={data.align}
                        text={data.text[language]}
                    />
                </Link>
            </li>
        );
    });

    const homeTitle = h2.map((title, index) => {
        if (index === 1) {
            return (
                <i
                    key={index}
                    className='homeContent--orange homeContent--display'
                >
                    {` ${title} `}
                </i>
            );
        }
        if (index === 3) {
            return (
                <i
                    key={index}
                    className='homeContent--green homeContent--display'
                >
                    {title}
                </i>
            );
        } else {
            return (
                <i
                    key={index}
                    className='homeContent--display'
                >
                    {title}
                </i>
            );
        }
        return;
    });

    return (
        <>
            <Banner
                img={hommebanner}
                page={'home'}
                title={nameArray}
            />
            <div className='home'>
                <section className='homeContent'>
                    {/* <h1 className='homeContent--margin'>Indiana Tijuca</h1> */}
                    <p className='text-fade'>{content2}</p>
                    <p className='homeContent--margin text-fade'>{content3}</p>
                    <h2
                        className='homeContent__title text-pulse'
                        key={nanoid()}
                    >
                        {homeTitle && homeTitle}
                    </h2>
                    <div className='homeContent__text homeContent--margin'>
                        <p className='text-fade'>{content}</p>
                    </div>
                    <div className='homeContent__actions '>
                        <Link to={`natal/${years[yearsSize - 1]}`}>
                            <button className='buttonNow'>{subtitles.action}</button>
                        </Link>
                    </div>
                    <h2 className='homeContent__title homeContent--margin homeContent--article'>
                        <>{endPage[0]}</>
                        <i className='homeContent--green homeContent--display'>{endPage[1]}</i>
                        <>{endPage[2]}</>
                        <i className='homeContent--orange homeContent--display'>{endPage[3]}</i>
                        <>{endPage[4]}</>
                    </h2>
                </section>
                <ul className='homePhotosSection'>{cardElements}</ul>
            </div>
        </>
    );
};

export default Home;
