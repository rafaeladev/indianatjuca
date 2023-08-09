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
                <Link
                    className='card-link'
                    to={`/natal/${data.id}`}
                >
                    <div
                        className='card-img'
                        style={{
                            backgroundImage: `url(${data.urlImg})`,
                        }}
                    ></div>
                    <h2>{data.title[language]}</h2>
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
            <section>
                <ul className='archives'>{cardElements}</ul>
            </section>
        </>
    );
};

export default Historico;
