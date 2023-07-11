import React from 'react';

const Banner = (props) => {
    const styleBanner = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '440px',
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
        height: '440px',
        width: '880px',
        gridColumn: '1 / -1',
        backgroundColor: '#c2c2cc',
    };
    const banner = {
        width: '100%',
        backgroundColor: '#c2c2cc',
        display: 'flex',
        justifyContent: 'center',
        padding: '40px',
        marginTop: '90px',
    };
    let classStyle = styleBanner;
    if (props.page === 'home') {
        classStyle = homeBanner;
    }
    return (
        <div style={banner}>
            <div style={classStyle}></div>
        </div>
    );
};

export default Banner;
