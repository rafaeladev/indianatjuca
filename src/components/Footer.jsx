import React from 'react';
import footerImg from '/footerimg.jfif';

const Footer = () => {
    return (
        <footer>
            <img
                src={footerImg}
                alt='footer logo'
            />
            <h2>Natal das crianças da comunidade Indiana Tijuca</h2>
            <span>site feito pela Associação de Moradores da Indiana Tijuca © 2022</span>
        </footer>
    );
};

export default Footer;
