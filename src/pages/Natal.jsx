import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch } from '../apiGoogle.js';
import Banner from '../components/Banner.jsx';

const Natal = () => {
    const params = useParams();
    const natalYear = params.id;
    const { isLoading, data, error } = useFetch(`Natal${natalYear}`);

    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }

    return (
        <>
            <Banner
                title={`Natal ${natalYear}`}
                page='natal'
                img={`/natal${natalYear}.png`}
            />
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
                            year={natalYear}
                            format={natalYear === '2022' ? 'webp' : 'jpg'}
                        />
                    </div>
                )}
            </section>
        </>
    );
};

export default Natal;
