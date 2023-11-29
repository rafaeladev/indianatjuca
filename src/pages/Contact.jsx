import React from 'react';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { LngContext } from '../utils/context.jsx';

import hommebanner from '/back2.png';

import aboutFile from '../data/aboutnew.json';
import Banner from '../components/Banner.jsx';
import CTA from '../components/CTA.jsx';

import wappIcon from '/3670051.png';
import fbIcon from '/facebook-icon.png';

const Contact = () => {
    const { language } = useContext(LngContext);

    // Start at the top of the page
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    // entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });

    return (
        <>
            <Banner
                img={hommebanner}
                page={'Infos'}
                title={language === 'BR' ? 'Contato' : language === 'FR' ? 'Contact' : 'Contact'}
            />
            <section className='homeContent'>
                <div className={`textBox textBox--block  textBox--grayBack`}>
                    <h2 style={{ color: '#13323e', marginBottom: '1em' }}>
                        {language === 'BR'
                            ? 'Você pode entrar en contato via e-mail :'
                            : language === 'FR'
                            ? 'Vous pouvez nous contacter via mail :'
                            : 'You can contact us by mail :'}
                    </h2>
                    <Link to='mailto:mariadsdo@gmail.com'>mariadsdo@gmail.com</Link>

                    <h2 style={{ color: '#13323e', marginTop: '1em' }}>
                        {' '}
                        {language === 'BR'
                            ? 'Ou via as nossas redes sociais: '
                            : language === 'FR'
                            ? 'Ou sur les réseaux :'
                            : 'Or by social networks :'}
                    </h2>
                    <div className='contact__icons'>
                        <Link to=''>
                            <img
                                src={wappIcon}
                                className='iconImg'
                            />
                        </Link>
                        <Link to='https://www.facebook.com/associacaoindiana'>
                            <img
                                src={fbIcon}
                                className='iconImg'
                            />
                        </Link>
                    </div>
                </div>
            </section>
            <CTA />
        </>
    );
};

export default Contact;
