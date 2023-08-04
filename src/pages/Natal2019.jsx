import React from 'react';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch } from '../apiGoogle.js';
import Banner from '../components/Banner.jsx';

const Natal2022 = () => {
    const { isLoading, data, error } = useFetch('Natal2018');

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <>
            <Banner
                title='Natal 2019'
                page='natal'
                img='/natal2019.png'
            />
            {/* <h1>Natal 2022</h1> */}
            <section>
                {isLoading ? (
                    <>
                        <h2 className='loader__title'>Loading ... </h2>
                        <div className='loader'></div>
                    </>
                ) : (
                    <div className='container--margin'>
                        <PhotoGallery
                            data={data}
                            year={2019}
                            format='jpg'
                        />
                    </div>
                )}
            </section>
        </>
    );
};

export default Natal2022;
