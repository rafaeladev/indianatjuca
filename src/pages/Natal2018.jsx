import React, { useEffect } from 'react';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch } from '../apiGoogle.js';
import Banner from '../components/Banner.jsx';

const Natal2018 = () => {
    const { isLoading, data, error } = useFetch('Natal2018');

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <>
            <Banner
                title='Natal 2018'
                page='natal'
                img='/natal2018.png'
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
                            year={2018}
                            format='jpg'
                        />
                    </div>
                )}
            </section>
        </>
    );
};

export default Natal2018;
