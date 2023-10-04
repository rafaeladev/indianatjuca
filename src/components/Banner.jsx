import React, { useState, useEffect } from 'react';
import AnimatedLetters from './AnimatedLetters.jsx';
import { Canvas } from '@react-three/fiber';
import Experience from './3D/Experience.jsx';

const Banner = (props) => {
    const styleBanner = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
        top: '0',
        position: 'relative',
        height: '300px',
        width: '100%',
        gridColumn: '1 / -1',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        // backgroundImage: `url(${props.img})`,
    };
    const homeBanner = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '440px',
        width: '880px',
        gridColumn: '1 / -1',
        backgroundColor: '#c2c2cc',
        marginBlock: '90px',
        padding: '40px',
    };
    const banner = {
        width: '100%',
        backgroundColor: `${
            props.page === 'natal' ? '#c2c2cc' : props.page === 'home' ? '#ba3d47' : '#13323e'
        }`,
        display: 'flex',
        justifyContent: 'center',
    };
    let classStyle = styleBanner;
    if (props.page === 'home') {
        classStyle = styleBanner;
    }

    let position = 0;
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    sizes.width < 768 ? (position = -45) : sizes.width < 992 ? (position = -33) : (position = -30);

    const Style = {
        width: '100%',
        height: sizes.width * 0.66,
        backgrounColor: '#ACA7AD',
        maxWidth: '1240px',
        maxHeight: '818.4px',
        margin: 'auto',
    };

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);
    if (props.page === 'home') {
        return (
            // <div className='bannerCanvas'>
            //     <div className='bannerCanvas--margin'>
            //         <div className='canvasWrapper'>
            //             <Canvas
            //                 camera={{
            //                     fov: 45,
            //                     near: 0.1,
            //                     far: 200,
            //                     position: [1, 2, 6],
            //                 }}
            //             >
            //                 <Experience />
            //             </Canvas>
            //         </div>
            //         <div className='bannerCanvas__title'>
            //             <AnimatedLetters
            //                 letterClass={letterClass}
            //                 strArray={props.title}
            //                 idx={2}
            //             />
            //         </div>
            //     </div>
            // </div>
            <div className='bannerCanvas'>
                <div className='bannerCanvas__title'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={props.title}
                        idx={2}
                    />
                </div>
                <Canvas
                    flat // stop the use of the tone mapping => colors became ok as the one we have in blender
                    camera={{
                        fov: 32,
                        near: 0.1,
                        far: 200,
                        position: [0, -1, -42],
                        rotation: [3.022, 0, -2 * Math.PI],
                    }}
                    style={Style}
                >
                    <Experience />
                </Canvas>
            </div>
        );
    }
    return (
        <div style={banner}>
            <div style={classStyle}>
                {props.page === 'home' ? (
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={props.title}
                        idx={2}
                    />
                ) : (
                    <div className='bannerTitle'>
                        <h1>{props.title && props.title}</h1>
                        <h1>{props.title && props.title}</h1>
                    </div>
                )}

                {props.page === 'home' ? null : (
                    <img
                        className='bannerImg'
                        src={props.img}
                    />
                )}
            </div>
        </div>
    );
};

export default Banner;
