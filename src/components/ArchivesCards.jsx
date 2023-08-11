import React from 'react';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';
import archives from '../data/archives.json';
import { Link } from 'react-router-dom';

const ArchivesCards = () => {
    const { language } = useContext(LngContext);

    const cardList = archives.map((data) => {
        return (
            <li
                className='card-item'
                key={data.id}
            >
                <Link
                    className='card-link'
                    to={`/natal/${data.id}`}
                >
                    <img
                        className='card-img'
                        src={data.urlImg}
                        alt={data.title[language]}
                    />

                    <h2>{data.title[language]}</h2>
                </Link>
            </li>
        );
    });

    return cardList;
};

export default ArchivesCards;
