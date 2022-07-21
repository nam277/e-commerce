import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Header.scss';
import logo from '~/assets/images/Logo-2.png';
import testUser from '~/assets/images/test_user.jpg';
import { useState } from 'react';
import { DropCart } from '~/pages/Cart';
import HeadlessTippy from '@tippyjs/react/headless';
import { mount } from '~/redux/modalReducer';
import { logOutUser } from '~/redux/currentUserReducer';
import { currentProduct } from '~/redux/selector';

const mainNav = [
    {
        title: 'HOME',
        path: '/',
    },
    {
        title: 'CLOTHES',
        path: '/catalog',
    },
    {
        title: 'PARTS',
        path: '/parts',
    },
    {
        title: 'SALE',
        path: '/sale',
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    // eslint-disable-next-line no-restricted-globals
    const checkDevicesWidth = document.documentElement.clientWidth || window.innerWidth || screen.width;

    const headerRef = useRef(null);
    const headerLeftRef = useRef(null);

    const [isLogged, setIsLogged] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [language, setLanguage] = useState('English');
    const [showCartTippy, setShowCartTippy] = useState(checkDevicesWidth <= 1024 ? false : true);
    const [showUserTippy, setShowUserTippy] = useState(checkDevicesWidth <= 1024 ? false : true);

    const [currentUser] = useSelector((store) => store.currentUser);
    const items = useSelector(currentProduct);

    useEffect(() => {
        if (currentUser) {
            setIsLogged(true);
        }
    }, [currentUser]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setQuantity(items.reduce((total, item) => total + Number(item.quantity), 0));
    }, [items]);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            headerRef.current.classList.add('shrink');
        } else {
            headerRef.current.classList.remove('shrink');
        }
    };

    const handleMenu = () => {
        headerLeftRef.current.classList.toggle('active');
    };

    const handleLogOut = () => {
        dispatch(logOutUser());
        setIsLogged(false);
    };

    const handleLanguageChange = (type) => {
        if (type === 'Vietnamese' || type === 'Tiếng Việt') {
            setLanguage('Tiếng Việt');
        } else setLanguage('English');
    };

    const handleHideCartTippy = (type) => {
        if (checkDevicesWidth <= 1024) {
            if (type === 'onHidden') {
                setShowCartTippy(false);
            } else {
                setShowCartTippy(!showCartTippy);
            }
        }
    };

    const handleHideUserTippy = (type) => {
        if (checkDevicesWidth <= 1024) {
            if (type === 'onHidden') {
                setShowUserTippy(false);
            } else {
                setShowUserTippy(!showUserTippy);
            }
        }
    };

    return (
        <div className="header" ref={headerRef}>
            <div className="content">
                <div className="header_toggle" onClick={handleMenu}>
                    <i className="bx bx-menu-alt-left"></i>
                </div>
                <div className="header_left" ref={headerLeftRef}>
                    <div className="header_left_back" onClick={handleMenu}>
                        <i className="bx bx-chevron-left"></i>
                    </div>
                    {mainNav.map((page, index) => (
                        <Link
                            to={page.path}
                            key={index}
                            onClick={handleMenu}
                            className={`header_left_item ${page.path === pathname ? 'active' : ''}`}
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
                    <span>
                        <HeadlessTippy
                            interactive
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    {language === 'English' ? (
                                        <div className="drop_language">
                                            <span onClick={() => handleLanguageChange('Vietnamese')}>Vietnamese</span>
                                            <span onClick={() => handleLanguageChange('English')}>English</span>
                                        </div>
                                    ) : (
                                        <div className="drop_language">
                                            <span onClick={() => handleLanguageChange('Tiếng Anh')}>Tiếng Anh</span>
                                            <span onClick={() => handleLanguageChange('Tiếng Việt')}>Tiếng Việt</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        >
                            <div className="header_right_item">
                                <i className="bx bx-globe"></i>
                                <span className="header_right_item_language">{language}</span>
                            </div>
                        </HeadlessTippy>
                    </span>

                    <span>
                        <HeadlessTippy
                            interactive
                            placement="bottom-end"
                            onHidden={() => handleHideCartTippy('onHidden')}
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <DropCart isShow={showCartTippy} setShow={setShowCartTippy} />
                                </div>
                            )}
                        >
                            <div className="header_right_item" onClick={handleHideCartTippy}>
                                <div className="header_right_item_cart">
                                    <i className="bx bx-cart"></i>
                                    <p>{quantity}</p>
                                </div>
                            </div>
                        </HeadlessTippy>
                    </span>

                    {!isLogged ? (
                        <span>
                            <HeadlessTippy
                                interactive
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <div className="drop_login">
                                            <span
                                                className="drop_login_login"
                                                onClick={() => dispatch(mount('loginForm'))}
                                            >
                                                Log in
                                            </span>
                                            <p>|</p>
                                            <span
                                                className="drop_login_logout"
                                                onClick={() => dispatch(mount('sigInForm'))}
                                            >
                                                Create account
                                            </span>
                                        </div>
                                    </div>
                                )}
                            >
                                <div className="header_right_item ">
                                    <i className="bx bx-user"></i>
                                </div>
                            </HeadlessTippy>
                        </span>
                    ) : (
                        <span>
                            <HeadlessTippy
                                interactive
                                placement="bottom-end"
                                onHidden={() => handleHideUserTippy('onHidden')}
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <div className={`drop_user ${showUserTippy ? '' : 'none'}`}>
                                            <span
                                                className="drop_user_item"
                                                onClick={() => dispatch(mount('errorName'))}
                                            >
                                                {currentUser.username}
                                            </span>
                                            <span
                                                className="drop_user_item"
                                                onClick={() => dispatch(mount('errorName'))}
                                            >
                                                Settings
                                            </span>
                                            <Link to="/cart" className="drop_user_item" onClick={handleHideUserTippy}>
                                                <span>My orders</span>
                                            </Link>
                                            <span className="drop_user_item" onClick={handleLogOut}>
                                                Logout
                                            </span>
                                        </div>
                                    </div>
                                )}
                            >
                                <div className="header_right_item " onClick={handleHideUserTippy}>
                                    <div className="icon_logged">
                                        <img src={testUser} alt="User" />
                                    </div>
                                </div>
                            </HeadlessTippy>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
