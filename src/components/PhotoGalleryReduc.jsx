import { nanoid } from 'nanoid';
import React, { useState, useEffect, useReducer, useMemo } from 'react';
import leftArrow from '/leftArrow.png';
import rightArrow from '/rightArrow.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import useKeypress from 'react-use-keypress';

let namePic = [];
const initialState = {
    name: null,
    number: 0,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        // case 'set': {
        //     return {
        //         name: namePic[action.value],
        //         number: action.value,
        //     };
        // }
        case 'next':
            return {
                name: namePic[action.value],
                number: state.number + 1,
            };
        case 'previous':
            return {
                name: namePic[action.value],
                number: state.number - 1,
            };
        case 'reset':
            return {
                name: null,
                number: null,
            };
        default:
            return state;
    }
}

const PopUpMedia = ({
    media,
    name,
    number,
    length,
    year,
    format,
    prevPhoto,
    nextPhoto,
    reset,
    setMedia,
}) => {
    const display = useMemo(() => (media ? 'popup-media__display' : 'popup-media__notdisplay'));

    return (
        <div className={`popup-media ${display}`}>
            {/* <span onClick={setMedia(!media)}>&times;</span> */}
            {name != null ? (
                <img
                    src={`/natal/natal${year}/${name[number]}.${format}`}
                    alt={`${number}`}
                    className='popup-media__photo'
                />
            ) : null}
            <i>{`${number + 1} / ${length}`}</i>

            <img
                className={length > 1 ? `popup-media__leftArrow` : `popup-media__noArrow`}
                src={leftArrow}
                alt='left arrow icon'
                onClick={number === length - 1 ? reset : prevPhoto}
            />
            <img
                className={length > 1 ? `popup-media__rightArrow` : `popup-media__noArrow`}
                src={rightArrow}
                alt='right arrow icon'
                onClick={number === length - 1 ? reset : nextPhoto}
            />
        </div>
    );
};

const PhotoGalleryReduc = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [media, setMedia] = useState(false);
    const setPhoto = (index) => dispatch({ type: 'set', value: index });
    const nextPhoto = (index) => dispatch({ type: 'next', value: index });
    const prevPhoto = (index) => dispatch({ type: 'previous', value: index });
    const reset = () => dispatch({ type: 'reset' });
    const data = props.data;

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
                onClick={setMedia(true)}
            >
                <LazyLoadImage
                    key={photo.name}
                    src={`/natal/natal${props.year}/${namePic[index]}.${props.format}`}
                    alt={`${photo.id}`}
                    className='galleryImg'
                    effect='blur'
                    placeholderSrc={`/natal/natal${props.year}/${namePic[index]}.${props.format}`}
                />
            </div>
        );
    });

    // useEffect(() => {
    //     setMedia(state.number >= 0);
    // }, [state.number]);

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
            {photos}
            <>
                {photos}
                <div
                    className='popup-media'
                    style={{ display: state.name ? 'block' : 'none' }}
                >
                    <span onClick={() => dispatch({ type: 'reset', index: null })}>&times;</span>
                    {state.number != null ? (
                        <img
                            src={`/natal/natal${props.year}/${namePic[state.number]}.${
                                props.format
                            }`}
                            alt={`${state.number}`}
                            className='popup-media__photo'
                        />
                    ) : null}
                    <i>{`${state.number + 1} / ${props.data.length}`}</i>

                    <img
                        className={
                            props.data.length > 1
                                ? `popup-media__leftArrow`
                                : `popup-media__noArrow`
                        }
                        src={leftArrow}
                        alt='left arrow icon'
                        // onClick={prevPhoto(state.number)}
                    />
                    <img
                        className={
                            props.data.length > 1
                                ? `popup-media__rightArrow`
                                : `popup-media__noArrow`
                        }
                        src={rightArrow}
                        alt='right arrow icon'
                        // onClick={nextPhoto(state.number)}
                    />
                </div>
            </>
        </>
    );
};

export default PhotoGalleryReduc;
