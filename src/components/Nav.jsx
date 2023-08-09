import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import ChangeLanguage from './ChangeLanguage.jsx';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';
import Logo from '/fav.png';

const Nav = () => {
    const { language } = useContext(LngContext);

    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <Link to='/'>
                    <img
                        className='nav__img'
                        src={Logo}
                        alt='logo'
                    />
                </Link>

                <Link to='/'>
                    <p>Natal Indiana Tijuca</p>
                </Link>
            </div>
            <ul className='nav__link'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                    }
                >
                    {language === 'FR' ? 'Accueil' : 'Home'}
                </NavLink>
                <NavLink
                    to='/natal/2022'
                    className={({ isActive }) =>
                        isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                    }
                >
                    {language === 'BR'
                        ? 'Natal 2022'
                        : language === 'FR'
                        ? 'Noël 2022'
                        : 'Christmas 2022'}
                </NavLink>
                <NavLink
                    to='natal'
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                    }
                >
                    {language === 'BR' ? 'Arquivos' : language === 'FR' ? 'Archives' : 'Arquives'}
                </NavLink>
                <NavLink
                    to='infos'
                    className={({ isActive }) =>
                        isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                    }
                >
                    Infos
                </NavLink>
            </ul>
            <ul className='nav__lang'>
                <ChangeLanguage />
            </ul>
        </nav>
    );
};

export default Nav;
