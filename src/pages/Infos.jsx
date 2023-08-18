import React from 'react';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { LngContext } from '../utils/context.jsx';

import hommebanner from '/back2.png';
import profilepic from '/profile.jpg';
import associacao from '/1909247_1406553006342188_6888766473033194079_o.jpg';
import imageMaps from '/image-maps.png';
import groupe from '/groupe_7.jpg';
import favela from '/image-favela2.png';

import aboutFile from '../data/aboutnew.json';
import Banner from '../components/Banner.jsx';
import CTA from '../components/CTA.jsx';
import TextBox from '../components/TextBox.jsx';

const About = () => {
    const { language } = useContext(LngContext);
    const aboutSection = aboutFile[0].about[0];
    const thankSection = aboutFile[0].thanks[0];
    const comunitySection = aboutFile[0].comunity[0];

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
                title={
                    language === 'BR'
                        ? 'Sobre nós'
                        : language === 'FR'
                        ? 'À propos de nous'
                        : 'About us'
                }
            />
            <section className='infos homeContent'>
                <div className='infos__content'>
                    <div className='infos__grid'>
                        <div className='infos__content__profile '>
                            <img
                                src={profilepic}
                                alt='Maria do Socorro'
                                className='hidden'
                            />
                            <span className='infos__caption'>Maria do Socorro</span>
                        </div>

                        <div className='infos__txt'>
                            <p className='hidden'>{aboutSection.paragraph1[language]}</p>
                            <p className='hidden'>{aboutSection.paragraph2[language]}</p>
                            <p className='hidden'>{aboutSection.paragraph3[language]}</p>
                            <p className='hidden'>{aboutSection.paragraph4[language]}</p>
                        </div>
                    </div>
                    <div className='infos__grid'>
                        <p className='infos__txt  hidden'>{aboutSection.paragraph5[language]}</p>
                        <div className='infos__content__profile  hidden'>
                            <img
                                src={favela}
                                alt='Favela Indiana'
                                className='hidden'
                            />
                        </div>
                        <div className='infos__content__profile  hidden'>
                            <img
                                src={associacao}
                                alt='Associacao'
                                className='hidden'
                            />
                        </div>
                        <p className='infos__txt  hidden'>{aboutSection.paragraph6[language]}</p>

                        <p className='infos__txt  hidden'>{aboutSection.paragraph7[language]}</p>
                        <div className='infos__content__profile  hidden'>
                            <img
                                src={groupe}
                                alt='Group'
                                className='hidden'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='infos homeContent hidden'>
                <TextBox
                    title={comunitySection.title[language]}
                    paragraph={comunitySection.content[language]}
                    color='whiteBack'
                    imgUrl={imageMaps}
                />
            </section>
            <section className='infos homeContent hidden'>
                <TextBox
                    title={thankSection.title[language]}
                    paragraph={thankSection.content[language]}
                    color='grayBack'
                />
            </section>
            <CTA />
        </>
    );
};

export default About;
