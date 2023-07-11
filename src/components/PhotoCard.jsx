import React from 'react';

const PhotoCard = (props) => {
    const photoCard = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '266px',
        width: '264px',
        border: '15px solid #FFFFFF',
        boxShadow: 'inset 2px 2px 10px rgba(0, 0, 0, 0.7)',
        marginInline: '15px',
    };
    return <div style={photoCard}></div>;
};

export default PhotoCard;
