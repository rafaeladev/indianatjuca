import React from 'react';
import { Navigate, useParams, useLoaderData } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { useFetch, getPhotos } from '../apiGoogle.js';
import Banner from '../components/Banner.jsx';

export async function loader({ params }) {
    return getPhotos(`Natal${params.id}`);
}

const Natal = () => {
    const params = useParams();
    const natalYear = params.id;
    // const { isLoading, data, error } = useFetch(`Natal${natalYear}`);
    const currentNatal = useLoaderData();

    let childrenPhotos = null;
    if (natalYear === '2022') {
        childrenPhotos = currentNatal.filter((photos) => photos.type === 'enfant');
    }

    return (
        <>
            <Banner
                title={`Natal ${natalYear}`}
                page='natal'
                img={`/natal${natalYear}.png`}
            />
            <section>
                <div className='container container--margin'>
                    <PhotoGallery
                        data={childrenPhotos ? childrenPhotos : currentNatal}
                        year={natalYear}
                        format={
                            natalYear === '2022' ? 'webp' : natalYear === '2020' ? 'jpeg' : 'jpg'
                        }
                    />
                </div>
            </section>
        </>
    );
};

export default Natal;
