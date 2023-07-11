import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer.jsx';
import Header from './Header.jsx';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
