import React from 'react';
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

    return (
        <div className={`main-div ${routeClass}`}>
            {content}
        </div >
    );
};

export default Content;