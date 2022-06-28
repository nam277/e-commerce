import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/Logo-2.png';

const mainNav = [
    {
        title: 'Trang chủ',
        path: '/',
    },
    {
        title: 'Sản phẩm',
        path: '/catalog',
    },
    {
        title: 'Phụ kiện',
        path: '/accessories',
    },
    {
        title: 'Liên hệ',
        path: '/contact',
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const headerLeftRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            headerRef.current.classList.add('shrink');
        } else {
            headerRef.current.classList.remove('shrink');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenu = () => {
        headerLeftRef.current.classList.toggle('active');
    };

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header_toggle" onClick={handleMenu}>
                    <i className="bx bx-menu-alt-left"></i>
                </div>
                <div className="header_left" ref={headerLeftRef}>
                    <div className="header_left_back" onClick={handleMenu}>
                        <i class="bx bx-chevron-left"></i>
                    </div>
                    {mainNav.map((page, index) => (
                        <Link
                            to={page.path}
                            key={index}
                            onClick={handleMenu}
                            className={`header_left_item ${
                                page.path === pathname ? 'active' : ''
                            }`}
                        >
                            <span>{page.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="header_logo">
                    <Link to="/" className="header_logo_cover">
                        <img src={logo} alt="logo shop" />
                    </Link>
                </div>
                <div className="header_right">
                    <div className="header_right_item">
                        <i className="bx bx-search"></i>
                    </div>
                    <div className="header_right_item">
                        <Link to="/cart">
                            <i className="bx bx-cart"></i>
                        </Link>
                    </div>
                    <div className="header_right_item">
                        <i className="bx bx-user"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
