import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ArchivesCards from './ArchivesCards.jsx';
import Banner from './Banner.jsx';
import { LngContext } from '../utils/context.jsx';
import { getLoading } from '../apiGoogle.js';

export async function loader() {
    return getLoading();
}
import Loader from 'react-loaders';

const NatalLoading = () => {
    const { language } = useContext(LngContext);
    const loadingData = useLoaderData();

    let paragraph = [];
    let subtitle = '';
    let paragraph_6 = '';

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
    }

    const title =
        language === 'BR'
            ? `Para participar : `
            : language === 'FR'
            ? `Pour participer : `
            : `To colaborate: `;

    const CTA =
        language === 'BR'
            ? `Participações à partir de novembro 2023!`
            : language === 'FR'
            ? `Participations à partir de novembre 2023!`
            : `Participations from November 2023!`;
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
                <div className={`textBox textBox--block textBox--orangeBack`}>
                    <h2 style={{ color: '#FFF' }}>{CTA}</h2>
                </div>
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
            <Loader type='pacman' />
        </>
    );
};

export default NatalLoading;
