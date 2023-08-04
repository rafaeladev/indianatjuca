import React from 'react';

const Banner = (props) => {
    const styleBanner = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
        top: '0',
        position: 'relative',
        height: '350px',
        width: '100%',
        gridColumn: '1 / -1',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '80px',
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
        backgroundColor: '#c2c2cc',
        display: 'flex',
        justifyContent: 'center',
    };
    let classStyle = styleBanner;
    if (props.page === 'home') {
        classStyle = homeBanner;
    }
    return (
        <div style={banner}>
            <div style={classStyle}>
                {props.page === 'home' ? null : (
                    <div className='bannerTitle'>
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
