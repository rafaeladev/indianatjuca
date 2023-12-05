import { useContext } from 'react';
import { LngContext } from '../utils/context';

const loader = () => {
    console.log(useContext);
    const { language } = useContext(LngContext);
    console.log(useContext(LngContext));
    return contentData?.find((data) => data.title === 'EN');
};

export default loader;
