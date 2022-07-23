import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

import Grid from '~/components/Grid';

import logo from '~/assets/images/Logo-2.png';

const footerAboutLinks = [
    {
        display: 'Our Store',
        path: '/about',
    },
    {
        display: 'Flat sale',
        path: '/sale',
    },
    {
        display: 'Brand Story',
        path: '/about',
    },
];

const footerCustomerLinks = [
    {
        display: 'Return policy',
        path: '/policy',
    },
    {
        display: 'Warranty policy',
        path: '/policy',
    },
    {
        display: 'Delivery policy',
        path: '/policy',
    },
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Grid col={4} md={2} sm={1} rowGap={20}>
                    <div className="footer_title">
                        <h3 className="footer_title_heading">Call center</h3>
                        <div className="footer_title_items">
                            <div className="footer_title_items_item">
                                Order <span>012345679 (8:30 - 20:30)</span>
                            </div>
                            <div className="footer_title_items_item">
                                Hotline <span>089788258 (7:30 - 21:30)</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer_title">
                        <h3 className="footer_title_heading">About Us</h3>
                        <div className="footer_title_items">
                            {footerAboutLinks.map((item, index) => (
                                <Link key={index} to={item.path} className="footer_title_items_item">
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer_title">
                        <h3 className="footer_title_heading">Customer service</h3>
                        <div className="footer_title_items">
                            {footerCustomerLinks.map((item, index) => (
                                <Link key={index} to={item.path} className="footer_title_items_item">
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer_about">
                        <Link to="/" className="footer_about_logo">
                            <img src={logo} alt="" />
                        </Link>
                        <span className="footer_about_span">
                            Yolo is a startup fashion company. "The customer is at the heart of our unique business
                            model, which includes design, production, distribution and sales through our extensive
                            retail network".<p>-- Quote from Zara team --</p>
                        </span>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;
