import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '~/components/Grid';
import './Footer.scss';
import logo from '~/assets/images/Logo-2.png';

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about',
    },
    {
        display: 'Liên hệ',
        path: '/contact',
    },
    {
        display: 'Tuyển dụng',
        path: '/contact',
    },
    {
        display: 'Flat Sale',
        path: '/about',
    },
    {
        display: 'Hệ thống cửa hàng',
        path: '/contact',
    },
];

const footerCustomerLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },
    {
        display: 'Tư vấn khách hàng',
        path: '/contact',
    },
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Grid col={4} md={2} sm={1} rowGap={20}>
                    <div className="footer_title">
                        <h3 className="footer_title_heading">
                            Tổng đài hỗ trợ
                        </h3>
                        <div className="footer_title_items">
                            <div className="footer_title_items_item">
                                Liên hệ đặt hàng <span>012345679</span>
                            </div>
                            <div className="footer_title_items_item">
                                Thắc mắc đơn hàng <span>012345679</span>
                            </div>
                            <div className="footer_title_items_item">
                                Góp ý, khiếu nại <span>012345679</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer_title">
                        <h3 className="footer_title_heading">Về Yolo</h3>
                        <div className="footer_title_items">
                            {footerAboutLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="footer_title_items_item"
                                >
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer_title">
                        <h3 className="footer_title_heading">
                            Chăm sóc khách hàng
                        </h3>
                        <div className="footer_title_items">
                            {footerCustomerLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="footer_title_items_item"
                                >
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
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi
                            ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng
                            Yolo hướng đến một cuộc sống năng động, tích cực
                            hơn.
                        </span>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;
