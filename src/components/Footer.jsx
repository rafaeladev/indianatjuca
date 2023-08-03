import React from 'react';
import footerImg from '/footerImg.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <img
                src={footerImg}
                alt='footer logo'
            />
            <div className='footer__text'>
                Indiana Tijuca by{' '}
                <Link
                    to='/'
                    className='footer--link'
                >
                    Rafaela Oliveira
                </Link>{' '}
                @ 2023
            </div>
        </footer>
    );
};

export default Footer;
