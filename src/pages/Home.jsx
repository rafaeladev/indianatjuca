import React, { useMemo } from 'react';
import { useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Banner from '../components/Banner.jsx';

import hommebanner from '/Group1.png';

import contentData from '../data/home.json';
import homePhotoCardData from '../data/archives.json';

import { LngContext } from '../utils/context.jsx';
import { Link, useLoaderData } from 'react-router-dom';
import HomePhotos from '../components/HomePhotos.jsx';

const Home = () => {
    const { language } = useContext(LngContext);
    console.log(language);
    const years = [2018, 2019, 2022, 2023];
    const yearsSize = years.length;
    const nameArray = ['I', 'n', 'd', 'i', 'a', 'n', 'a', '', 'T', 'i', 'j', 'u', 'c', 'a'];
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    // const data = contentData?.find((data) => data.title === language);

    useEffect(() => {
        // Utiliser useContext à l'intérieur de useEffect
        const lang = language;

        // Simuler un chargement asynchrone
        const simulateAsyncLoad = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
            setData(contentData?.find((data) => data.title === lang));
        };

        simulateAsyncLoad();
    }, [language]); // Recharger les données lorsque la langue change

    console.log('Loading:', loading);
    console.log('Data:', data);

    const h2 = data?.h2;

    const content = data?.content;
    const content2 = data?.content2;
    const content3 = data?.content3;
    const subtitles = data?.subtitles;
    const endPage = data?.endPage;

    const cardElements = homePhotoCardData?.map((data) => {
        if (!data) return;
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

    const homeTitle = h2?.map((title, index) => {
        if (!title) return;
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
    if (loading) {
        // Affiche un message de chargement pendant que les données sont récupérées
        return <p>Loading...</p>;
    }

    if (!data) {
        // Si les données ne sont toujours pas disponibles après le chargement, affiche un message d'erreur
        return <p>Error loading data</p>;
    }

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
                    {content2 && <p className='text-fade'>{content2}</p>}
                    {content3 && <p className='homeContent--margin text-fade'>{content3}</p>}
                    {homeTitle && (
                        <h2
                            className='homeContent__title text-pulse'
                            key={nanoid()}
                        >
                            {homeTitle}
                        </h2>
                    )}
                    {content && (
                        <div className='homeContent__text homeContent--margin'>
                            <p className='text-fade'>{content}</p>
                        </div>
                    )}
                    {subtitles && (
                        <div className='homeContent__actions '>
                            <Link to={`/${years[yearsSize - 1]}`}>
                                <button className='buttonNow'>{subtitles.action}</button>
                            </Link>
                        </div>
                    )}
                    {endPage && (
                        <h2 className='homeContent__title homeContent--margin homeContent--article'>
                            <>{endPage[0]}</>
                            <i className='homeContent--green homeContent--display'>{endPage[1]}</i>
                            <>{endPage[2]}</>
                            <i className='homeContent--orange homeContent--display'>{endPage[3]}</i>
                            <>{endPage[4]}</>
                        </h2>
                    )}
                </section>
                <ul className='homePhotosSection'>{cardElements}</ul>
            </div>
        </>
    );
};

export default Home;
