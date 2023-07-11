import React from 'react';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';

import hommebanner from '/back2.png';
import profilepic from '/profile.jpg';
import pic1 from '/logo1.png';
import pic2 from '/image_maria.png';
import pic3 from '/1909247_1406553006342188_6888766473033194079_o.jpg';
import pic4 from '/image-maps.png';
import pic5 from '/image-favela.png';
import pic6 from '/image-favela2.png';

import aboutData from '../data/about.json';
import Banner from '../components/Banner.jsx';

const About = () => {
    const { language } = useContext(LngContext);
    const { section1, section2, section3, section4 } = aboutData.find(
        (data) => data.title === language
    );
    return (
        <>
            <Banner img={hommebanner} />
            <h1 className='title'>Infos</h1>
            <section className='infos'>
                <div className='infos__content'>
                    <div>
                        <h2>{section1.subtitle}</h2>
                        <p>{section1.content}</p>
                    </div>
                    <div className='infos__content__profile'>
                        <img
                            src={profilepic}
                            alt='Maria do Socorro'
                        />
                        <span>Maria do Socorro</span>
                    </div>
                </div>
                <div className='infos__content'>
                    <img
                        className='infos__content__logo'
                        src={pic1}
                        alt='logo'
                    />
                    <img
                        className='infos__content__img'
                        src={pic2}
                        alt='maria'
                    />
                    <img
                        className='infos__content__img'
                        src={pic3}
                        alt='associacao'
                    />
                </div>
            </section>
            <section className='infos'>
                <h2>{section2.subtitle}</h2>
                <p>{section2.content}</p>
            </section>
            <section className='infos'>
                <h2>{section3.subtitle}</h2>
                <p>{section3.content}</p>
                <div className='infosImgFlex'>
                    <img
                        src={pic4}
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
                                src={pic5}
                                alt='favela maps'
                            />
                            <div className='legende'>
                                Photo by <a href='https://rioonwatch.org.br/?p=10238'>rioonwatch</a>
                            </div>
                        </div>
                        <div className='infosImg'>
                            <img
                                src={pic6}
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
                <h2>{section4.subtitle}</h2>
            </section>
        </>
    );
};

export default About;
