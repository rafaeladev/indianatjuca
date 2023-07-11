import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/fav.png';
import Nav from './Nav.jsx';

const Header = () => {
    return (
        <header className='header'>
            <div>
                <Link to='/'>
                    <img
                        className='nav__img'
                        src={Logo}
                        alt='logo'
                    />
                </Link>

                <p>Natal Indiana Tijuca</p>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
