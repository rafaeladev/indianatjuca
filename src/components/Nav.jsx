import React from 'react';

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
                    Home
                </NavLink>
                <NavLink
                    to='/natal/2022'
                    className={({ isActive }) =>
                        isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                    }
                >
                    Natal 2022
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
