import React, { useState } from 'react';
import Nav from './Nav.jsx';

const BurgerMenu = (props) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };
    return (
        <div className='nav__hamburger'>
            <div
                className='hamburger'
                onClick={toggleHamburger}
            >
                <div className={hamburgerOpen ? `bar bar--open-1` : 'bar bar--closed-1`'}></div>
                <div className={hamburgerOpen ? `bar bar--open-2` : 'bar bar--closed-2`'}></div>
                <div className={hamburgerOpen ? `bar bar--open-3` : 'bar bar--closed-3`'}></div>
            </div>
            <div
                className={hamburgerOpen ? 'hamburger__menu hamburger--open' : 'hamburger__menu'}
                onClick={toggleHamburger}
            >
                <Nav />
            </div>
        </div>
    );
};

export default BurgerMenu;
