import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import pic from '/SEEMORE.png';

const NatalLayout = () => {
    return (
        <>
            <Outlet />
            <Link to={'.'}>
                <img
                    src={pic}
                    alt='see more'
                />
            </Link>
        </>
    );
};

export default NatalLayout;
