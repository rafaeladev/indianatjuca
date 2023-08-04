import React from 'react';
import { Link } from 'react-router-dom';

const HomePhotos = (props) => {
    return (
        <div className={`homePhotos homePhotos--${props.color}`}>
            <picture
                className={props.flex ? ` homePhotos__img homePhotos--reverse` : ` homePhotos__img`}
            >
                <img src={props.img} />
            </picture>

            <div
                className={props.align ? ` homePhotos__txt homePhotos--align` : ` homePhotos__txt`}
            >
                <h2 className={props.color === 'gray' ? 'homePhotos--white' : 'homePhotos--white'}>
                    {props.title}
                </h2>
                <p className={props.color === 'gray' ? 'homePhotos--white' : 'homePhotos--white'}>
                    {props.text}
                    <i className='homePhotos--white'> (...)</i>
                </p>
            </div>
        </div>
    );
};

export default HomePhotos;
