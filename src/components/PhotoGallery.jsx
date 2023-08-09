import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import leftArrow from '/leftArrow.png';
import rightArrow from '/rightArrow.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PhotoGallery = (props) => {
    const [file, setFile] = useState({ name: null, number: null });
    let namePic = [];

    const photos = props.data.map((photo, index) => {
        namePic = [...namePic, photo.name];
        return (
            <div
                key={nanoid()}
                className={`${
                    photo.position === 'vertical'
                        ? `photoGallery photoGallery__vertical`
                        : `photoGallery photoGallery__horizontal`
                }`}
                onClick={() => setFile(() => ({ name: photo.name, number: index }))}
            >
                <LazyLoadImage
                    key={photo.name}
                    src={`/natal/natal${props.year}/${photo.name}.${props.format}`}
                    alt={`${photo.id}`}
                    className='galleryImg'
                    // height={500}
                    // width={333}
                    effect='blur'
                    placeholderSrc={`/natal/natal${props.year}/${photo.name}.${props.format}`}
                />
            </div>
        );
    });

    const nextPhoto = () => {
        setFile(() => ({
            name: namePic[file.number + 1],
            number: file.number === props.data.length - 1 ? 0 : file.number + 1,
        }));
    };

    const prevPhoto = () => {
        setFile(() => ({
            name: namePic[file.number - 1],
            number: file.number === props.data.length - 1 ? 0 : file.number - 1,
        }));
    };

    return (
        <>
            {photos}
            <div
                className='popup-media'
                style={{ display: file.name ? 'block' : 'none' }}
            >
                <span onClick={() => setFile(() => ({ name: null, number: null }))}>&times;</span>
                {file.name != null ? (
                    <img
                        src={`/natal/natal${props.year}/${file.name}.${props.format}`}
                        alt={`${file.number}`}
                        className='popup-media__photo'
                    />
                ) : null}
                <i>{`${file.number + 1} / ${props.data.length}`}</i>

                <img
                    className={
                        props.data.length > 1 ? `popup-media__leftArrow` : `popup-media__noArrow`
                    }
                    src={leftArrow}
                    alt='left arrow icon'
                    onClick={prevPhoto}
                />
                <img
                    className={
                        props.data.length > 1 ? `popup-media__rightArrow` : `popup-media__noArrow`
                    }
                    src={rightArrow}
                    alt='right arrow icon'
                    onClick={nextPhoto}
                />
            </div>
        </>
    );
};

export default PhotoGallery;
