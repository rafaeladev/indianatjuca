import React from 'react';

const Banner = (props) => {
    const styleBanner = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '500px',
        width: '100%',
        gridColumn: '1 / -1',
    };
    const homeBanner = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '330px',
        width: '100%',
        maxWidth: '1500px',
        gridColumn: '1 / -1',
        backgroundColor: '#000000',
    };
    let classStyle = styleBanner;
    if (props.page === 'home') {
        classStyle = homeBanner;
    }
    return (
        <>
            <div style={classStyle}></div>
        </>
    );
};

export default Banner;
