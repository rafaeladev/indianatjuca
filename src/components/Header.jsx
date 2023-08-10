import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu.jsx';
import Logo from '/fav.png';
import Nav from './Nav.jsx';

const Header = (props) => {
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

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <header
            className={'header'}
            ref={headerRef}
        >
            <div className='nav__logo'>
                <Link to='/'>
                    <img
                        className='nav__img'
                        src={Logo}
                        alt='logo'
                    />

                    <p>Natal Indiana Tijuca</p>
                </Link>
            </div>
            <div className='nav nav__desktop'>
                <Nav />
            </div>
            <div
                className='nav__mobile'
                onClick={toggleHamburger}
            >
                <BurgerMenu
                    isOpen={hamburgerOpen}
                    onClick={toggleHamburger}
                />
                <div
                    className={
                        hamburgerOpen ? 'hamburger__menu hamburger--open' : 'hamburger__menu'
                    }
                >
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;
