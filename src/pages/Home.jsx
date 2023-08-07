import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';

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
    const { h2, content, content2, content3, subtitles, name } = contentData.find(
        (data) => data.title === language
    );

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
                    <h1 className='homeContent--margin'>Indiana Tijuca</h1>
                    <p>{content2}</p>
                    <p className='homeContent--margin'>{content3}</p>
                    <h2
                        className='homeContent__title'
                        key={homeTitle}
                    >
                        {homeTitle && homeTitle}
                    </h2>
                    <div className='homeContent__text homeContent--margin'>
                        <p>{content}</p>
                    </div>
                    <div className='homeContent__actions '>
                        <Link to={`natal/${years[yearsSize - 1]}`}>
                            <button className='buttonNow'>{subtitles.action}</button>
                        </Link>
                    </div>
                    <h2 className='homeContent__title homeContent--margin homeContent--article'>
                        <>Vem conferir as</>
                        <i className='homeContent--green homeContent--display'>fotos</i>
                        <>dos</>
                        <i className='homeContent--orange homeContent--display'>natais</i>
                        <>anteriores</>
                    </h2>
                </section>
                <aticle className='homePhotosSection'>
                    <Link
                        className='linkHomePhotos'
                        key={nanoid()}
                    >
                        <HomePhotos
                            img={'natal/natal2022/portrait_6.webp'}
                            color='orange'
                            title='Natal 2022'
                            flex={null}
                            text='Eu pude estar presente durante a organização da festa de natal de 2022 e tirar as fotos.'
                        />
                    </Link>
                    <Link
                        className='linkHomePhotos'
                        key={nanoid()}
                    >
                        <HomePhotos
                            img={'natal/natal2020/portrait_01.jpeg'}
                            color='green'
                            title='Natal 2020'
                            flex={null}
                            text='O natal 2020 foi o primeiro ano em que pedimos ajuda dos nossos amigos pelo site para organizar.'
                        />
                    </Link>
                    <Link
                        className='linkHomePhotos'
                        key={nanoid()}
                    >
                        <HomePhotos
                            img={'natal/natal2019/portrait_18.jpg'}
                            color='gray'
                            title='Natal 2019'
                            flex='reverse'
                            align='right'
                            text='O natal 2019 foi o segundo ano do projeto e tivemos a visita do papai noel.'
                        />
                    </Link>
                    <Link
                        className='linkHomePhotos'
                        key={nanoid()}
                    >
                        <HomePhotos
                            img={'natal/natal2018/portrait_5.jpg'}
                            color='red'
                            title='Natal 2018'
                            flex='reverse'
                            align='right'
                            text='No ano 2018 o projeto do natal das crianças começou.'
                        />
                    </Link>
                </aticle>
            </div>
        </>
    );
};

export default Home;
