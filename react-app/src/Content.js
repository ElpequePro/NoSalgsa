import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Home from './components/Home';
import Productes from './components/Productes';
import Categories from './components/Categories';
import Contacte from './components/Contacte';
import SobreNosaltres from './components/SobreNosaltres';
import PoliticaPrivacitat from "./components/PoliticaPrivacitat";

const Content = ({ routeClass }) => {
    const location = useLocation();

    let content;
    switch (location.pathname) {
        case '/':
            content = <Home />;
            break;
        case '/shop':
            content = <Productes />;
            break;
        case '/categories':
            content = <Categories />;
            break;
        case '/contact':
            content = <Contacte />;
            break;
        case '/contact/privacy-policy':
            content = <PoliticaPrivacitat />;
            break;
        case '/about-us':
            content = <SobreNosaltres />;
            break;
        default:
            content = <Home />;
    }

    const [darkMode, setDarkMode] = useState(true);

    const toggleMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <div className={`main-div ${routeClass} dark-mode-${darkMode}`}>
            {content}
            {
                darkMode ? (<span className='material-symbols-outlined dark-mode' onClick={toggleMode}>dark_mode</span>) : (<span className='material-symbols-outlined light-mode' onClick={toggleMode}>light_mode</span>)
            }
        </div >
    );
};

export default Content;