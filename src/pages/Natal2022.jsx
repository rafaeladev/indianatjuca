import React from 'react';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch } from '../apiGoogle.js';

const Natal2022 = () => {
    const { isLoading, data, error } = useFetch('Natal2022');
    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }
    console.log(data);
    return (
        <>
            <h1>Natal 2022</h1>
            <div className='container'>
                {isLoading ? (
                    <div className='loader'></div>
                ) : (
                    <PhotoGallery
                        data={data}
                        year={2022}
                        format='webp'
                    />
                )}
            </div>
        </>
    );
};

export default Natal2022;
