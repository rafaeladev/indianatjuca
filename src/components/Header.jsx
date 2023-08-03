import React from 'react';
import { useRef, useEffect } from 'react';
import Logo from '/fav.png';
import Nav from './Nav.jsx';

const Header = () => {
    const headerRef = useRef();
    // Nav scroll color change
    useEffect(() => {
        let scrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
            if (scrollY > 60) {
                headerRef.current.classList.add('header--color-change');
            } else {
                headerRef.current.classList.remove('header--color-change');
            }
        });
    });

    return (
        <header
            className='header'
            ref={headerRef}
        >
            <Nav />
        </header>
    );
};

export default Header;
