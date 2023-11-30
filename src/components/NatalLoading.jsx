import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ArchivesCards from './ArchivesCards.jsx';
import Banner from './Banner.jsx';
import { LngContext } from '../utils/context.jsx';
import { getLoading } from '../apiGoogle.js';

export async function loader() {
    return getLoading();
}

const NatalLoading = () => {
    const { language } = useContext(LngContext);
    const loadingData = useLoaderData();
    console.log(loadingData);
    let paragraph = [];
    let subtitle = '';
    let paragraph_6 = '';
    let date = '';
    let close = '';

    for (let i = 0; i < loadingData.length; i++) {
        if (loadingData[i].key === `paragraph_${i + 1}`) {
            paragraph = [
                ...paragraph,
                language === 'FR' ? (
                    <p key={loadingData[i].key}>{loadingData[i].FR}</p>
                ) : language === 'EN' ? (
                    <p key={loadingData[i].key}>{loadingData[i].EN}</p>
                ) : (
                    <p key={loadingData[i].key}>{loadingData[i].BR}</p>
                ),
            ];
        }
        if (loadingData[i].key === `title_h3`) {
            subtitle =
                language === 'FR'
                    ? loadingData[i].FR
                    : language === 'EN'
                    ? loadingData[i].EN
                    : loadingData[i].BR;
        }
        if (loadingData[i].key === `paragraph_6`) {
            paragraph_6 =
                language === 'FR'
                    ? loadingData[i].FR
                    : language === 'EN'
                    ? loadingData[i].EN
                    : loadingData[i].BR;
        }
        if (loadingData[i].key === `date`) {
            date =
                language === 'FR'
                    ? loadingData[i].FR
                    : language === 'EN'
                    ? loadingData[i].EN
                    : loadingData[i].BR;
        }
        if (loadingData[i].key === `close`) {
            close =
                language === 'FR'
                    ? loadingData[i].FR
                    : language === 'EN'
                    ? loadingData[i].EN
                    : loadingData[i].BR;
        }
    }

    const link =
        language === 'BR'
            ? ``
            : language === 'FR'
            ? `https://lydia-app.com/pots?id=68953-noel-enfants-2023`
            : `https://lydia-app.com/pots?id=68953-noel-enfants-2023`;

    const title =
        language === 'BR'
            ? `Para participar : `
            : language === 'FR'
            ? `Pour participer : `
            : `To colaborate: `;

    const CTA =
        language === 'BR'
            ? `Participar via PIX : mariadsdo@gmail.com`
            : language === 'FR'
            ? `C'est ici pour participer de la cagnotte de 2023!`
            : `Click here to participate this year!`;

    return (
        <>
            <Banner
                title={
                    language === 'BR'
                        ? 'Natal 2023'
                        : language === 'FR'
                        ? 'Noël 2023'
                        : 'Christmas 2023'
                }
            />
            <section className='homeContent'>
                <div className={`textBox textBox--block  textBox--grayBack`}>
                    <h2 style={{ color: '#13323e', marginBottom: '1em' }}>{title}</h2>
                    {paragraph}
                </div>
                <div
                    className={`textBox textBox--block  textBox--whiteBack textBox--whiteBack--border`}
                >
                    <p>
                        {date} : <span className='textBox--spanText'> 22/12/2023</span>
                    </p>
                    <p>
                        {close} : <span className='textBox--spanText'> 20/12/2023</span>
                    </p>
                </div>
                <Link
                    to={link}
                    target='_blank'
                >
                    <div className={`textBox textBox--block textBox--orangeBack`}>
                        <h2 style={{ color: '#FFF' }}>{CTA}</h2>
                    </div>
                </Link>
            </section>
            <section className='homeContent'>
                <div className={`textBox textBox--whiteBack`}>
                    <h2>{subtitle}</h2>
                    <p>{paragraph_6}</p>
                    <ul className='archives archives--mini'>
                        <ArchivesCards />
                    </ul>
                </div>
            </section>
        </>
    );
};

export default NatalLoading;
