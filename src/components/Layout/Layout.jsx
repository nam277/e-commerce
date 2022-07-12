import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';

import './Layout.scss';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer';

const Layout = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <BrowserRouter>
            <div className={`goTop ${showTopBtn ? 'active' : ''}`} onClick={() => goToTop()}>
                <i className="bx bx-up-arrow-alt"></i>
            </div>
            <Header />
            <div className="container">
                <div className="main">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default Layout;
