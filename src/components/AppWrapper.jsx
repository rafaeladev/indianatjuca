import { useNavigation, Outlet } from 'react-router-dom';

import React from 'react';

const AppWrapper = () => {
    const { state } = useNavigation();
    if (state === 'loading') {
        return (
            <>
                <h2 className='loader__title'>Loading ... </h2>
                <div className='loader'></div>
            </>
        );
    }
    return <Outlet />;
};

export default AppWrapper;
