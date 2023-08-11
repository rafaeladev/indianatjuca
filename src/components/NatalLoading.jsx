import React from 'react';
import ArchivesCards from './ArchivesCards.jsx';
import TextBox from './TextBox.jsx';
import Banner from './Banner.jsx';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';

const NatalLoading = () => {
    const { language } = useContext(LngContext);
    const title =
        language === 'BR'
            ? `Para participar : `
            : language === 'FR'
            ? `Pour participer : `
            : `To colaborate: `;
    const text = (
        <>
            Como todos os anos, <u className='colortext--orange'>você pode fazer parte</u> do natal
            dessas crianças!
        </>
    );

    const CTA =
        language === 'BR'
            ? `Participações à partir de novembro 2023!`
            : language === 'FR'
            ? `Participações à partir de novembre 2023!`
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
                    <p>{text}</p>
                    <p>
                        A festa de natal é <b>organizada no final</b> de cada ano.
                    </p>
                    <p>
                        As <b>contribuições para o ano de 2023</b> estarão abertas em
                        <b className='colortext--piment'> novembre 2023</b>!
                    </p>
                </div>
                <div className={`textBox textBox--block textBox--orangeBack`}>
                    <h2 style={{ color: '#FFF' }}>{CTA}</h2>
                </div>
            </section>
            <section className='homeContent'>
                <div className={`textBox textBox--whiteBack`}>
                    <h2>Enquanto isso...</h2>
                    <p>Vem conferir as fotos dos natais anteriores</p>
                    <ul className='archives archives--mini'>
                        <ArchivesCards />
                    </ul>
                </div>
            </section>
        </>
    );
};

export default NatalLoading;
