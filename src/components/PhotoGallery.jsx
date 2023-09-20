import { nanoid } from 'nanoid';
import React, { useMemo, useState } from 'react';
import leftArrow from '/leftArrow.png';
import rightArrow from '/rightArrow.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import useKeypress from 'react-use-keypress';

// PhotoGallery grid
import Masonry from '@mui/lab/Masonry';

const PhotoGallery = (props) => {
    const [file, setFile] = useState({ name: null, number: null });
    let namePic = [];

    // const photos = props.data.map((photo, index) => {
    //     namePic = [...namePic, photo.name];
    //     return (
    //         <div
    //             key={nanoid()}
    //             className={`${
    //                 photo.position === 'vertical'
    //                     ? `photoGallery photoGallery__vertical`
    //                     : `photoGallery photoGallery__horizontal`
    //             }`}
    //             onClick={() => setFile(() => ({ name: photo.name, number: index }))}
    //         >
    //             <LazyLoadImage
    //                 key={photo.name}
    //                 src={`/natal/natal${props.year}/${photo.name}_medium.${props.format}`}
    //                 alt={`${photo.id}`}
    //                 className='galleryImg'
    //                 // height={500}
    //                 // width={333}
    //                 effect='blur'
    //                 placeholderSrc={`/natal/natal${props.year}/${photo.name}_low.${props.format}`}
    //             />
    //         </div>
    //     );
    // });

    const photos2 = (
        <Masonry
            columns={{ xs: 2, sm: 4 }}
            spacing={{ xs: 1, sm: 2 }}
        >
            {props.data.map((photo, index) => (
                <img
                    key={index}
                    rcset={`/natal/natal${props.year}/${photo.name}_low.${props.format}`}
                    src={`/natal/natal${props.year}/${photo.name}_medium.${props.format}`}
                    loading='lazy'
                    alt={`${photo.id}`}
                    onClick={() => setFile(() => ({ name: photo.name, number: index }))}
                />
            ))}
        </Masonry>
    );

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

    useKeypress(['ArrowLeft', 'ArrowRight'], (event) => {
        if (event.key === 'ArrowLeft') {
            prevPhoto();
        } else {
            nextPhoto();
        }
    });

    useKeypress('Escape', () => {
        // Do something when the user has pressed the Escape key
        setFile(() => ({ name: null, number: null }));
    });

    return (
        <>
            {photos2}
            <div
                className='popup-media'
                style={{ display: file.name ? 'block' : 'none' }}
            >
                <span onClick={() => setFile(() => ({ name: null, number: null }))}>&times;</span>
                {file.name != null ? (
                    <img
                        src={`/natal/natal${props.year}/${file.name}_high.${props.format}`}
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
