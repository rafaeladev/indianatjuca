import React from 'react';
import Nav from './Nav.jsx';

const BurgerMenu = (props) => {
    return (
        <div className='nav__hamburger'>
            <div className='hamburger'>
                <div className={props.isOpen ? `bar bar--open-1` : 'bar bar--closed-1`'}></div>
                <div className={props.isOpen ? `bar bar--open-2` : 'bar bar--closed-2`'}></div>
                <div className={props.isOpen ? `bar bar--open-3` : 'bar bar--closed-3`'}></div>
            </div>
        </div>
    );
};

export default BurgerMenu;
