import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PhotoGallery = (props) => {
    const horizontalPics = props.data.filter((pic) => pic.position === 'horizontal');
    const verticalPics = props.data.filter((pic) => pic.position === 'vertical');
    const [file, setFile] = useState(null);
    // const photosH = horizontalPics.map((photo, index) => {
    //     return (
    //         <div
    //             key={nanoid()}
    //             className={`photoGallery__horizontal`}
    //             onClick={() => setFile(photo)}
    //         >
    //             <img
    //                 src={`natal/natal${props.year}/${photo.name}.${props.format}`}
    //                 alt={`${photo.id}`}
    //                 className='galleryImg'
    //             />
    //         </div>
    //     );
    // });
    const photosV = verticalPics.map((photo) => {
        return (
            <>
                <div
                    key={nanoid()}
                    className={`photoGallery__vertical`}
                    onClick={() => setFile(photo.name)}
                >
                    <img
                        src={`natal/natal${props.year}/${photo.name}.${props.format}`}
                        alt={`${photo.id}`}
                        className='galleryImg'
                    />
                </div>
                <div
                    className='popup-media'
                    style={{ display: file ? 'block' : 'none' }}
                >
                    <span onClick={() => setFile(null)}>&times;</span>
                    <img
                        src={`natal/natal${props.year}/${file}.${props.format}`}
                        alt={`${photo.id}`}
                        className='galleryImg'
                    />
                </div>
            </>
        );
    });
    return (
        <>
            {verticalPics && <div className='container container--vertical'>{photosV}</div>}
            {/* {horizontalPics && <div className='container container--horizontal'>{photosH}</div>} */}
        </>
    );
};

export default PhotoGallery;
