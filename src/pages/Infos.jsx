import React from 'react';
import { useContext, useEffect } from 'react';
import { LngContext } from '../utils/context.jsx';

import hommebanner from '/back2.png';
import profilepic from '/profile.jpg';
import associacao from '/1909247_1406553006342188_6888766473033194079_o.jpg';
import pic4 from '/image-maps.png';
import groupe from '/groupe_7.jpg';
import favela from '/image-favela2.png';

import aboutData from '../data/about.json';
import aboutFile from '../data/aboutnew.json';
import Banner from '../components/Banner.jsx';
import CTA from '../components/CTA.jsx';

const About = () => {
    const { language } = useContext(LngContext);
    const { section1, section2, section3, section4 } = aboutData.find(
        (data) => data.title === language
    );
    const aboutSection = aboutFile[0].about[0];

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
            <section className='infos'>
                <div className='infos__content'>
                    <div className='infos__grid'>
                        <div className='infos__content__profile  hidden'>
                            <img
                                src={profilepic}
                                alt='Maria do Socorro'
                            />
                            <span className='infos__caption'>Maria do Socorro</span>
                        </div>

                        <div className='infos__txt  hidden'>
                            <p>{aboutSection.paragraph1[language]}</p>
                            <p>{aboutSection.paragraph2[language]}</p>
                            <p>{aboutSection.paragraph3[language]}</p>
                            <p>{aboutSection.paragraph4[language]}</p>
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
            <section className='infos'>
                <h2 className='hidden'>{section2.subtitle}</h2>
                <p className='hidden'>{section2.content}</p>
            </section>
            <section className='infos hidden'>
                <h2 className='hidden'>{section3.subtitle}</h2>
                <p className='hidden'>{section3.content}</p>
                <div className='infosImgFlex'>
                    <img
                        className='hidden'
                        src={favela}
                        alt='favela maps'
                    />

                    <div className='legende'>
                        Photo by{' '}
                        <a href='http://nephu.sites.uff.br/programa/mapeando-conflitos/mapeando-comunidades/comunidades-do-rio-de-janeiro/indiana/'>
                            nephu uff
                        </a>
                    </div>
                    <div className='infosImgParallel'>
                        <div className='infosImg'>
                            <img
                                src={favela}
                                alt='favela maps'
                            />
                            <div className='legende'>
                                Photo by <a href='https://rioonwatch.org.br/?p=10238'>rioonwatch</a>
                            </div>
                        </div>
                        <div className='infosImg'>
                            <img
                                src={favela}
                                alt='favela maps'
                            />
                            <div className='legende'>
                                Photo by <a href='https://rioonwatch.org.br/?p=10238'>rioonwatch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='infos'>
                <h2 className='hidden'>{section4.subtitle}</h2>
            </section>
            <CTA />
        </>
    );
};

export default About;
