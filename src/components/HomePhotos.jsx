import React from 'react';

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
                <h2
                    className={
                        props.color === 'gray' ? 'homePhotos--colorgreen' : 'homePhotos--white'
                    }
                >
                    {props.title}
                </h2>
                <p
                    className={
                        props.color === 'gray' ? 'homePhotos--colorgreen' : 'homePhotos--white'
                    }
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet
                    consectetur felis, suscipit facilisis metus.
                </p>
            </div>
        </div>
    );
};

export default HomePhotos;
