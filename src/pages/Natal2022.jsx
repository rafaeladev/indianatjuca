import React, { useEffect, useState } from 'react';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch } from '../apiGoogle.js';
import Banner from '../components/Banner.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import photo1 from '/Group1.png';
import photo2 from '/Group1.png';
import photo3 from '/Group1.png';
import photo4 from '/Group1.png';
import { nanoid } from 'nanoid';

const Natal2022 = () => {
    const { isLoading, data, error } = useFetch('Natal2022');
    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    // const isLoading = false;

    // const [images, setImages] = useState({});

    // React.useEffect(() => {
    //     async function fetchData() {
    //         const apiGoogle =
    //             'https://script.google.com/macros/s/AKfycbw1MrNb2d0sZH48E1pVlGVrke-3gtDk2AmbTU3XMB7Kfj8RpeeQF8yPBHLj_tMwckI/exec';
    //         const id = 'Natal2022';
    //         const res = await fetch(`${apiGoogle}?action=get${id}`);
    //         const data = await res.json();
    //         setData(data);
    //     }
    //     fetchData();
    // }, []);

    // const fetchImages = async () => {
    //     const apiGoogle =
    //         'https://script.google.com/macros/s/AKfycbw1MrNb2d0sZH48E1pVlGVrke-3gtDk2AmbTU3XMB7Kfj8RpeeQF8yPBHLj_tMwckI/exec';
    //     const id = 'Natal2022';
    //     const images = await fetch(`${apiGoogle}?action=get${id}`);
    //     setImages(await images.json());
    //     console.log('Images:', images);
    // };

    // useEffect(() => {
    //     fetchImages();
    // }, []);

    console.log('Images:', data);
    return (
        <>
            <Banner
                title='Natal 2022'
                page='natal'
                img='/natal2022.png'
            />
            {/* <h1>Natal 2022</h1> */}
            <section>
                {isLoading ? (
                    <>
                        <h2 className='loader__title'>Loading ... </h2>
                        <div className='loader'></div>
                    </>
                ) : (
                    <div className='container container--margin'>
                        <PhotoGallery
                            data={data}
                            year={2022}
                            format='webp'
                        />
                    </div>
                )}
            </section>
        </>
    );
};

export default Natal2022;
