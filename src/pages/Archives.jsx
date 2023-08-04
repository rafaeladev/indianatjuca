import React from 'react';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';
import { Link } from 'react-router-dom';

import hommebanner from '/back2.png';
import Banner from '../components/Banner.jsx';

import pic2018 from '/natal/natal2018/portrait_3.jpg';
import pic2019 from '/natal/natal2019/portrait_22.jpg';
import pic2020 from '/natal/natal2020/portrait_01.jpeg';
import pic2022 from '/natal/natal2022/PXL_20221222_180722198.jpg';

const Historico = () => {
    const { language } = useContext(LngContext);
    const name = language === 'BR' ? 'Natal' : language === 'FR' ? 'Noël' : 'Christmas';
    return (
        <>
            <Banner img={hommebanner} />
            <h1 className='title'>
                {language === 'BR' ? 'Arquivos' : language === 'FR' ? 'Archives' : 'Arquives'}
            </h1>
            <section className='archives'>
                <div className='card-item'>
                    <div
                        className='card-img'
                        style={{
                            backgroundImage: `url(${pic2018})`,
                            minHeight: '350px',
                            minWidth: '350px',
                        }}
                    ></div>
                    <Link to={'2018'}>
                        <button className='yearsButton'>{name} 2018</button>
                    </Link>
                </div>
                <div className='card-item'>
                    <div
                        className='card-img'
                        style={{
                            backgroundImage: `url(${pic2019})`,
                            minHeight: '350px',
                            minWidth: '350px',
                        }}
                    ></div>
                    <Link to={'2019'}>
                        <button className='yearsButton'>{name} 2019</button>
                    </Link>
                </div>
                <div className='card-item'>
                    <div
                        className='card-img'
                        style={{
                            backgroundImage: `url(${pic2020})`,
                            minHeight: '350px',
                            minWidth: '350px',
                        }}
                    ></div>
                    <Link to={'2020'}>
                        <button className='yearsButton'>{name} 2020</button>
                    </Link>
                </div>
                <div className='card-item'>
                    <div
                        className='card-img'
                        style={{
                            backgroundImage: `url(${pic2022})`,
                            minHeight: '350px',
                            minWidth: '350px',
                        }}
                    ></div>
                    <Link to={'2022'}>
                        <button className='yearsButton'>{name} 2022</button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Historico;
