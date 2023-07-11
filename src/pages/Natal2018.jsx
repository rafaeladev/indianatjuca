import React from 'react';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch } from '../apiGoogle.js';

const Natal2018 = () => {
    const { isLoading, data, error } = useFetch('Natal2018');
    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }
    return (
        <>
            <h1>Natal 2018</h1>
            <div className='container'>
                {isLoading ? (
                    <div className='loader'></div>
                ) : (
                    <PhotoGallery
                        data={data}
                        year={2018}
                        format='jpg'
                    />
                )}
            </div>
        </>
    );
};

export default Natal2018;
