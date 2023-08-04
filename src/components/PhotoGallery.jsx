import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from 'react-router-dom';

const PhotoGallery = (props) => {
    const horizontalPics = props.data.filter((pic) => pic.position === 'horizontal');
    const verticalPics = props.data.filter((pic) => pic.position === 'vertical');
    const photosH = horizontalPics.map((photo) => {
        return (
            <Link
                to={'.'}
                key={nanoid()}
                className={`photoGallery__horizontal`}
            >
                <img
                    src={`natal/natal${props.year}/${photo.name}.${props.format}`}
                    alt={`${photo.id}`}
                    className='galleryImg'
                />
            </Link>
        );
    });
    const photosV = verticalPics.map((photo) => {
        return (
            <Link
                to={'.'}
                key={nanoid()}
                className={`photoGallery__vertical`}
            >
                <img
                    src={`natal/natal${props.year}/${photo.name}.${props.format}`}
                    alt={`${photo.id}`}
                    className='galleryImg'
                />
            </Link>
        );
    });
    return (
        <>
            {verticalPics && <div className='container container--vertical'>{photosV}</div>}
            {horizontalPics && <div className='container container--horizontal'>{photosH}</div>}
        </>
    );
};

export default PhotoGallery;
