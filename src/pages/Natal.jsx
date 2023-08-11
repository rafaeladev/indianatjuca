import React, { useLayoutEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { getPhotos } from '../apiGoogle.js';
import Banner from '../components/Banner.jsx';
import TextBox from '../components/TextBox.jsx';
import natalContent from '../data/natal.json';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';

export async function loader({ params }) {
    return getPhotos(`Natal${params.id}`);
}

const Natal = () => {
    const { language } = useContext(LngContext);
    const params = useParams();
    const natalYear = params.id;
    let listItems = null;
    // Start at the top of the page
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const natalPageText = natalContent.find((data) => data.year === natalYear);

    if (natalPageText && natalPageText.content.list === 'true') {
        listItems = natalPageText.content.listItems.map((text, index) => (
            <li key={index}>{text[language]}</li>
        ));
    }

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
            <section className='homeContent'>
                {natalPageText && (
                    <TextBox
                        title={natalPageText.content.paragraph1[language]}
                        title2={natalPageText.content.paragraph6[language]}
                        subtitle={natalPageText.content.paragraph2[language]}
                        text={natalPageText.content}
                        text2={natalPageText.content.paragraph5[language]}
                        language={language}
                        list={true}
                        listItems={listItems}
                        color='whiteBack'
                    />
                )}
            </section>
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
