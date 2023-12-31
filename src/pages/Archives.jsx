import React from 'react';
import { useContext, useLayoutEffect } from 'react';
import { LngContext } from '../utils/context.jsx';
import { Link } from 'react-router-dom';

import hommebanner from '/back2.png';
import Banner from '../components/Banner.jsx';

import archives from '../data/archives.json';
import CTA from '../components/CTA.jsx';

const Historico = () => {
    const { language } = useContext(LngContext);
    // Start at the top of the page
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const cardElements = archives.map((data) => {
        if (!data) return;
        return (
            <li
                className='card-item'
                key={data?.id}
            >
                <Link
                    className='card-link'
                    to={`/natal/${data?.id}`}
                >
                    <img
                        className='card-img'
                        src={data?.urlImg}
                        alt={data?.title[language]}
                    />

                    <h2>{data?.title[language]}</h2>
                </Link>
            </li>
        );
    });
    const name = language === 'BR' ? 'Natal' : language === 'FR' ? 'Noël' : 'Christmas';
    return (
        <>
            <Banner
                img={hommebanner}
                page={'Archives'}
                title={language === 'BR' ? 'Arquivos' : language === 'FR' ? 'Archives' : 'Arquives'}
            />
            {cardElements && (
                <section>
                    <ul className='archives archives--maxi'>{cardElements}</ul>
                </section>
            )}
            <CTA />
        </>
    );
};

export default Historico;
