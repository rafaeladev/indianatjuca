import React, { useLayoutEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery.jsx';
import { getPhotos } from '../apiGoogle.js';
import Banner from '../components/Banner.jsx';
import TextBox from '../components/TextBox.jsx';
import natalContent from '../data/natal.json';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';
import PhotoGalleryReduc from '../components/PhotoGalleryReduc.jsx';

export async function loader({ params }) {
    return getPhotos(`Natal${params.id}`);
}

const Natal = () => {
    const currentNatal = useLoaderData();
    const { language } = useContext(LngContext);
    const params = useParams();
    const natalYear = params.id;
    let totalSections = null;
    let listItems = null;
    // Start at the top of the page
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const natalPageText = natalContent.find((data) => data.year === natalYear);

    if (natalPageText && natalPageText.content1.list === true) {
        listItems = natalPageText.content1.listItems.map((text, index) => (
            <li
                className='textBox__list'
                key={index}
            >
                {text[language]}
            </li>
        ));
    }

    if (natalPageText) {
        totalSections = natalPageText.sections;
    }

    let childrenPhotos = null;
    let otherPhotos = null;

    childrenPhotos = currentNatal.filter((photos) => photos.type === 1);
    otherPhotos = currentNatal.filter((photos) => photos.type === 2);

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
                        title={natalPageText.content1.paragraph1[language]}
                        title2={natalPageText.content1.paragraph6[language]}
                        subtitle={natalPageText.content1.paragraph2[language]}
                        text={natalPageText.content1.paragraph5[language]}
                        language={language}
                        list={natalPageText.content1.list}
                        listItems={listItems}
                        color='whiteBack'
                    />
                )}
            </section>
            <section className='homeContent'>
                <div className='container container--margin'>
                    <PhotoGallery
                        data={childrenPhotos ? childrenPhotos : currentNatal}
                        year={natalYear}
                        format={'webp'}
                    />
                </div>
            </section>

            {totalSections > 1 && (
                <>
                    <section className='homeContent'>
                        <TextBox
                            title={natalPageText.content2.text[language]}
                            language={language}
                            list={false}
                            color='grayBack'
                        />
                    </section>
                    <section>
                        <div className='container container--margin homeContent--grayBack'>
                            <PhotoGallery
                                data={otherPhotos}
                                year={natalYear}
                                format={'webp'}
                            />
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default Natal;
