import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePhotos = (props) => {
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
        <div
            className={`homePhotos homePhotos--${props.color}`}
            key={props.title}
        >
            <picture
                className={
                    props.flex
                        ? ` homePhotos__img homePhotos--reverse hidden`
                        : ` homePhotos__img hidden`
                }
            >
                <img
                    src={props.img}
                    alt={props.title}
                />
            </picture>

            <div
                className={props.align ? ` homePhotos__txt homePhotos--align` : ` homePhotos__txt`}
            >
                <h2
                    className={
                        props.color === 'gray'
                            ? 'homePhotos--white hidden'
                            : 'homePhotos--white hidden'
                    }
                >
                    {props.title}
                </h2>
                <p
                    className={
                        props.color === 'gray'
                            ? 'homePhotos--white  hidden'
                            : 'homePhotos--white hidden'
                    }
                >
                    {props.text}
                    <i className='homePhotos--white'> (...)</i>
                </p>
            </div>
        </div>
    );
};

export default HomePhotos;
