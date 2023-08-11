import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LngContext } from '../utils/context.jsx';

const Error = () => {
    const { language } = useContext(LngContext);
    const title = language === 'FR' ? 'Erreur' : language === 'BR' ? 'Erro' : `Error`;
    const subtitle =
        language === 'FR'
            ? "Oups! La page que vous demandez n'existe pas."
            : language === 'BR'
            ? 'A pagina que você procura não existe'
            : `The page you're looking for doesn't exist !`;

    const link =
        language === 'FR'
            ? `Click ici pour retourner sur la page d’accueil`
            : language === 'BR'
            ? 'Clique aqui para voltar para a pagina Home'
            : `Click here to go back to home page`;

    return (
        <div>
            <section className='error'>
                <h1 className='error__title'>{`${title} 404`}</h1>
                <h2 className='error__subtitle'>{subtitle}</h2>
                <NavLink
                    className='error__link'
                    to='/'
                >
                    {link}
                </NavLink>
            </section>
        </div>
    );
};

export default Error;
