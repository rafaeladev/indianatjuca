import { useNavigation, Outlet } from 'react-router-dom';

import React from 'react';

import Loader from 'react-loaders';

console.log(Loader);

const AppWrapper = () => {
    const { state } = useNavigation();
    if (state === 'loading') {
        return (
            <div className='wrapper'>
                {/* <h2 className='loader__title'>Loading ... </h2>
                <div className='loader'></div> */}

                <Loader type='pacman' />
            </div>
        );
    }
    return <Outlet />;
};

export default AppWrapper;
