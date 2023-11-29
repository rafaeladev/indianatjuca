import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import ChangeLanguage from './ChangeLanguage.jsx';
import { useContext } from 'react';
import { LngContext } from '../utils/context.jsx';
import Collapse from './Collapse.jsx';

const Nav = () => {
    const { language } = useContext(LngContext);

    return (
        <nav className='nav'>
            <ul className='nav__link'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                        }
                    >
                        {language === 'FR' ? 'Accueil' : 'Home'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/2023'
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
                </li>
                <li>
                    <Collapse
                        title={
                            language === 'BR'
                                ? 'Arquivos'
                                : language === 'FR'
                                ? 'Archives'
                                : 'Arquives'
                        }
                        content={['2022', '2020', '2019', '2018']}
                        link={'natal'}
                    />
                </li>
                <li className='nav__link__arch'>
                    <NavLink
                        to='/2023'
                        className={({ isActive }) =>
                            isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                        }
                    >
                        {language === 'BR'
                            ? 'Arquivos'
                            : language === 'FR'
                            ? 'Archives'
                            : 'Arquives'}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='infos'
                        className={({ isActive }) =>
                            isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                        }
                    >
                        Infos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='contact'
                        className={({ isActive }) =>
                            isActive ? 'nav__link__item nav__link__active' : 'nav__link__item'
                        }
                    >
                        {language === 'BR' ? 'Contato' : language === 'FR' ? 'Contact' : 'Contact'}
                    </NavLink>
                </li>
                <li className='nav__lang'>
                    <ChangeLanguage />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
