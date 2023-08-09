import React from 'react';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';
import { Link } from 'react-router-dom';

import hommebanner from '/back2.png';
import Banner from '../components/Banner.jsx';

import archives from '../data/archives.json';

const Historico = () => {
    const { language } = useContext(LngContext);
    const cardElements = archives.map((data) => {
        return (
            <li
                className='card-item'
                key={data.id}
            >
                <div
                    className='card-img'
                    style={{
                        backgroundImage: `url(${data.urlImg})`,
                    }}
                >
                    <Link
                        className='card-link'
                        to={`natal/${data.id}`}
                    >
                        <button className='buttonNow'>{data.title[language]}</button>
                    </Link>
                </div>
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
            <section>
                <ul className='archives'>{cardElements}</ul>
            </section>
        </>
    );
};

export default Historico;
