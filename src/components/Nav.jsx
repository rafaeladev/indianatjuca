import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import ChangeLanguage from './ChangeLanguage.jsx';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';

const Nav = () => {
    const { language } = useContext(LngContext);

    return (
        <nav className='nav'>
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
                    to='/natal/loading'
                    className={({ isActive }) =>
                        isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                    }
                >
                    {language === 'BR'
                        ? 'Natal 2023'
                        : language === 'FR'
                        ? 'Noël 2023'
                        : 'Christmas 2023'}
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
                <li className='nav__lang'>
                    <ChangeLanguage />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
