import React from "react";

import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Navigation from "./components/Navigation";
import Content from './Content';
import Footer from './components/Footer';

import './css/general.css';

//import './javascript/script';

const Main = () => {
    const location = useLocation();

    // Function to determine the CSS class based on the current route
    const getRouteClass = () => {
        switch (location.pathname) {
            case '/':
                return 'home';
            case '/shop':
                return 'shop';
            case '/categories':
                return 'categories';
            case '/contact':
                return 'contact';
            case '/contact/privacy-policy':
                return 'privacy-policy';
            case '/about-us':
                return 'about-us';
            default:
                return '';
        }
    };

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Content routeClass={getRouteClass()} />} />
                <Route path="/shop" element={<Content routeClass={getRouteClass()} />} />
                <Route path="/categories" element={<Content routeClass={getRouteClass()} />} />
                <Route path="/contact" element={<Content routeClass={getRouteClass()} />} />
                <Route path="/contact/privacy-policy" element={<Content routeClass="privacy-policy" />} />
                <Route path="/about-us" element={<Content routeClass={getRouteClass()} />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Main;